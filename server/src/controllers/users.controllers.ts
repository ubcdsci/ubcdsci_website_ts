import axios from 'axios';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

import env from '../configs/env.configs';

import { User } from '../database/index.database';


/**
 * Register new user.
 * @route POST /api/user/register
 * @access Public
 */
// export const registerUser = asyncHandler(async (req, res) => {
//   const { username, password, captchaToken } = req.body;

//   if (!username || !password) {
//     res.status(400).json({ message: 'Please provide both a username and a password!' });
//   }

//   const recaptchaResponse = await verifyRecaptcha(captchaToken);

//   if (!recaptchaResponse) {
//     res.status(400).json({ message: 'Recaptcha verification failed!' });
//   } else {
//     const userExists = await User.findOne({ username });

//     if (userExists) {
//       res.status(400).json({ message: 'User already exists!' });
//     }

//     const salt = bcrypt.genSaltSync(12);
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     const user = await User.create({ username, password: hashedPassword });

//     if (user) {
//       res.status(201).json({
//         id: user.id,
//         user: user.username,
//         token: generateToken(user.id),
//       });
//     } else {
//       res.status(400).json({ message: 'Invalid user data!' });
//     }
//   }
// });

/**
 * Authenticate user login.
 * @route POST /api/user/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { username, password, captchaToken } = req.body;

  const recaptchaResponse = await verifyRecaptcha(captchaToken);

  if (!recaptchaResponse) {
    res.status(400).json({ message: 'Recaptcha verification failed!' });
  } else {
    const user = await User.findOne({ username });
    
    if (user && (await bcrypt.compareSync(password, user.password))) {
      res.status(200).json({ id: user.id, user: username, token: generateToken(user.id) });
    } else {
      res.status(400).json({ message: 'Invalid username or password!' });
    };
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
  return jwt.sign({ id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRE });
};

/**
 * Verify reCaptcha token.
 */
const verifyRecaptcha = async (captchaToken : string) => {
  const recaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {},
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    }
  );

  return recaptchaResponse.data.success;
};
