import express from "express";
import axios from 'axios';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';

import env from '@/configs/env.configs';

import { User } from '@/models/index.models';

const router = express.Router();

/**
 * Register new user.
 * @route POST /api/user/register
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { username, password, captchaToken } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Please provide both a username and a password!' });
  }

  if (password.length < 8) {
    res.status(400).json({ message: "Password must be a minimum of 8 characters long!" });
  };

  const recaptchaResponse = await verifyRecaptcha(captchaToken);
  if (!recaptchaResponse) {
    res.status(400).json({ message: 'Recaptcha verification failed!' });
  } else {
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(400).json({ message: 'User already exists!' });
    }

    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({ username, password: hashedPassword });

    if (user) {
      res.status(201).json({
        id: user.id,
        user: user.username,
        token: generateToken(user),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data!' });
    }
  }
});

/**
 * Delete user.
 * @route DELETE /api/user/:id
 * @access Private/Admin
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: 'An error occurred!' });
  } else {
    const user = await User.findOne({ id });

    if (user) {
      await user.remove();
      res.status(201).json({ message: 'User has been deleted!', user });
    } else {
      res.status(400).json({ message: 'User not found!' });
    };
  };
});

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
      const maxAge = 3 * 60 * 60 * 1000;
      const token = generateToken(user, maxAge);

      res.cookie("jwt", token, { httpOnly: true, maxAge });
      res.status(200).json({ id: user.id, user: username, token });
    } else {
      res.status(400).json({ message: 'Invalid username or password!' });
    };
  };
});

/**
 * Update user role.
 * @route PUT /api/user/:id
 * @access Private/Admin
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { id, role } = req.body;

  if (!role || !id) {
    res.status(400).json({ message: 'An error occurred!' });
  } else {
    if (role === "admin") {
			const user = await User.findOne({ id });

			if (user && user.role !== "admin") {
        user.role = role;
        await user.save();
        res.status(201).json({ message: "User is now an admin!" });
			} else {
				res.status(400).json({ message: "User is already an admin!" });
			};
		};
  };
});

/**
 * Get user profile.
 * @route GET /api/user/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req : any, res) => {
  res.status(200).json(req.user);
});

/**
 * Generate JWT token.
 * @access Private
 */
const generateToken = (user : any, expires?: string | number | undefined) => {
  const { id, username, role } = user;

  return jwt.sign(
    { id, username, role },
    env.JWT_SECRET,
    { expiresIn: expires || env.JWT_EXPIRE }
  );
};

/**
 * Verify reCaptcha token.
 * @access Private
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

export default router;
