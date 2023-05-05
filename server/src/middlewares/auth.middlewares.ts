import jwt from 'jsonwebtoken';

import env from '@/configs/env.configs';

import { User } from '@/database/index.database';

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
