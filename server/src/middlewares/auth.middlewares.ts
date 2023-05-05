import jwt from 'jsonwebtoken';

import env from '@/configs/env.configs';

import { User } from '@/models/index.models';

/**
 * Verify JWT token.
 * @access Public
 */
export const verifyToken = async (req : any, res : any, next : any) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  };

  if (!token) {
    return res.status(401).send({ success: false, message: 'Unauthorized' });
  };

  try {
    const decoded : any = jwt.verify(token, env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send({ success: false, message: 'Unauthorized' });
  };
};

/**
 * Verify admin role.
 * @access Public
 */
export const verifyAdmin = async (req : any, res : any, next : any) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, env.JWT_SECRET, (err : any, decodedToken : any) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized!" });
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized!" })
        } else {
          next();
        };
      };
    });
  } else {
    return res.status(401).json({ message: "Token not available!" });
  };
};

/**
 * Verify user role.
 * @access Public
 */
export const verifyUser = async (req : any, res : any, next : any) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, env.JWT_SECRET, (err : any, decodedToken : any) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized!" });
      } else {
        if (decodedToken.role !== "user") {
          return res.status(401).json({ message: "Not authorized!" })
        } else {
          next();
        };
      };
    });
  } else {
    return res.status(401).json({ message: "Token not available!" });
  };
};
