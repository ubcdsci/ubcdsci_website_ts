// Library imports.
import express from 'express';

import { verifyToken } from '../../middlewares/auth.middlewares';
import {
  // registerUser,
  loginUser,
  getUserProfile,
} from '../../controllers/users.controllers';

const router = express.Router();
export default router;


// router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getUserProfile);
