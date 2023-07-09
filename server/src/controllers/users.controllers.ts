// Library imports.
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

// Model imports.
import { User } from '@/models/index.models';


/**
 * Get all users.
 * @route GET /api/users
 * @access Protected
 */
const getUsers = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
		// Get all users from database.
		const users = await User.find()
      .select("-password -__v -updatedAt -twoFactorAuthEnabled -twoFactorAuthSecret")
      .lean();

    // Check if users exist.
		if (!users)
      return res.status(400).json({ message: "No users found!" });

		res.status(200).json(users);
	}
);


/**
 * Get user by id.
 * @route GET /api/users/:id
 * @access Protected
 */
const getUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Check if user id is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Get user from database.
    const user = await User.findById(id)
			.select("-password -__v -updatedAt -twoFactorAuthEnabled -twoFactorAuthSecret")
			.lean()
			.exec()
			.catch((err: any) => {
				console.log(err);
				return res.status(400).json({ message: "User not found!" });
			});

    res.status(200).json(user);
  }
);


/**
 * Create a new user.
 * @route POST /api/users
 * @access Protected
 */
const createUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { username, password, email, roles } = req.body;
    
    // Check if username and password are provided.
    if (!username || !password)
      return res.status(400).json({ message: 'All fields are required!' });

    // Check if password is valid length.
    if (password.length < 8)
      return res.status(400).json({ message: "Password must be a minimum of 8 characters long!" });
    
    // Check if email is valid.
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email) || email.length < 6)
      return res.status(400).json({ message: "Invalid email address!" });

    // Check if user already exists.
    const foundUser = await User.findOne({ username }).lean().exec();
    if (foundUser)
      return res.status(400).json({ message: 'User already exists!' });

    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create user.
    await User.create({
      username,
      password: hashedPassword,
      email,
      roles: roles ?? ['user'],
    }).catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "Invalid user data!" });
    });
    
    res.status(201).json({ message: `User '${username}' created successfully!` });
  }
);


/**
 * Update user.
 * @route PATCH /api/users/:id
 * @access Protected
 */
const updateUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const { username, password, email, roles } = req.body;

    // Confirm user data is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Check if user exists.
    const user = await User.findById(id).exec();
    if (!user)
      return res.status(400).json({ message: "User not found!" });

    // Check for duplicates.
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate && duplicate?._id.toString() !== id)
      return res.status(409).json({ message: "Duplicate username" });
    
    // Update user.
    user.username = username ?? user.username;
    user.roles = roles ?? user.roles;

    // Check if password is being updated.
    if (password) {
      const salt = bcrypt.genSaltSync(12);
      user.password = bcrypt.hashSync(password, salt);
    };
    
    // Check if email is being updated.
    if (email) {
      const duplicate = await User.findOne({ email }).lean().exec();
      const emailRegex = /\S+@\S+\.\S+/;
      if (duplicate || !emailRegex.test(email) || email.length < 6)
        return res.status(400).json({ message: "Invalid email address!" });
      user.email = email;
    };
    
    // Save user.
    await user.save().catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "Invalid user data!" });
    });
    
    res.status(201).json({ message: "User updated successfully!" });
  }
);


/**
 * Delete user.
 * @route DELETE /api/users/:id
 * @access Protected
 */
const deleteUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Confirm user id.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });
    
    // Check if user exists.
    const user = await User.findById(id).exec();
    if (!user)
      return res.status(400).json({ message: "User not found!" });
    
    // Delete user.
    await user.remove().catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "Invalid user data!" });
    });
    
    res.status(201).json({ message: "User deleted successfully!" });
  }
);

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
