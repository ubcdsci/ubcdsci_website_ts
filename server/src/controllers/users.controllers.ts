import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

import { User } from '@/models/index.models';


/**
 * Get all users.
 * @route GET /users
 * @access Protected
 */
const getUsers = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
		// Get all users from database.
		const users = await User.find().select("-password").lean();

    // Check if users exist.
		if (!users)
      return res.status(400).json({ message: "No users found!" });

		res.status(200).json(users);
	}
);


/**
 * Get user by id.
 * @route GET /users/:id
 * @access Protected
 */
const getUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Check if user id is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Get user from database.
    const user = await User.findById(id).select("-password").lean().exec();

    // Check if user exists.
    if (!user)
      return res.status(400).json({ message: "User not found!" });

    res.status(200).json(user);
  }
);


/**
 * Create a new user.
 * @route POST /users
 * @access Protected
 */
const createUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { username, password, roles } = req.body;
    // Check if username and password are provided.
    if (!username || !password)
      return res.status(400).json({ message: 'All fields are required!' });

    // Check if password is valid length.
    if (password.length < 8)
      return res.status(400).json({ message: "Password must be a minimum of 8 characters long!" });

    // Check if user already exists.
    const foundUser = await User.findOne({ username }).lean().exec();
    if (foundUser)
      return res.status(400).json({ message: 'User already exists!' });

    // Create user.
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({
      username,
      password: hashedPassword,
      roles: roles || ['user'],
    });

    if (!user)
      return res.status(400).json({ message: "Invalid user data!" });
    
    res.status(201).json({ message: `User '${username}' created successfully!` });
  }
);


/**
 * Update user.
 * @route PATCH /users
 * @access Protected
 */
const updateUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id, username, password, roles, active } = req.body;

    // Confirm user data is valid.
    if (!id || !username || !password)
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
    user.username = username;
    user.roles = roles;
    user.active = active;

    // Check if password is being updated.
    if (password)
      user.password = await bcrypt.hash(password, 10);
    
    // Save user.
    const updatedUser = await user.save();
    if (!updatedUser)
      return res.status(400).json({ message: "Invalid user data!" });
    
    res.status(201).json({ message: "User updated successfully!" });
  }
);


/**
 * Delete user.
 * @route DELETE /users/:id
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
    const deletedUser = await user.remove();
    if (!deletedUser)
      return res.status(400).json({ message: "Invalid user data!" });
    
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
