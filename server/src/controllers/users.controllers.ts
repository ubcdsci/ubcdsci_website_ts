import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

import { jwtSecret, jwtExpire, username as USER, password as PASS } from '../configs/env.configs';

import { User } from '../database/index.database';


/**
 * Register new user.
 * @route POST /api/user/register
 * @access Public
 */
// export const registerUser = asyncHandler(async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     res.status(400).json({ message: 'Please provide both a username and a password!' });
//   }

//   const userExists = await User.findOne({ username });

//   if (userExists) {
//     res.status(400).json({ message: 'User already exists!' });
//   }

//   const salt = bcrypt.genSaltSync(12);
//   const hashedPassword = bcrypt.hashSync(PASS, salt);
//   const user = await User.create({ username: USER, password: hashedPassword });

//   if (user) {
//     res.status(201).json({
//       id: user.id,
//       user: user.username,
//       token: generateToken(user.id),
//     });
//   } else {
//     res.status(400).json({ message: 'Invalid user data!' });
//   }
// });

/**
 * Authenticate user login.
 * @route POST /api/user/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compareSync(password, user.password))) {
    res.status(200).json({ id: user.id, user: username, token: generateToken(user.id) });
  } else {
    res.status(400).json({ message: 'Invalid username or password!' });
  }
});

/**
 * Get user profile.
 * @route GET /api/user/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req : any, res) => {
  res.status(200).json(req.user);
})

/**
 * Generate JWT token.
 * @access Private
 */
const generateToken = (id : any) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: jwtExpire });
};
