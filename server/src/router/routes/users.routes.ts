// Library imports.
import express from 'express';
// import bcrypt from 'bcrypt';
// import { username as USER, password as PASS } from '../../configs/env.configs';
// import { User } from '../../database/index.database';

import { verifyToken } from '../../middlewares/auth.middlewares';
import {
  // registerUser,
  loginUser,
  getUserProfile,
} from '../../controllers/users.controllers';

const router = express.Router();
export default router;


// const salt = bcrypt.genSaltSync(12);
// const hashedPassword = bcrypt.hashSync(PASS, salt);
// const user1 = new User({ username: USER, password: hashedPassword });
// user1.save()
//   .then(() => console.log('User has been created!'))
//   .catch(() => console.log('User already exists!'));

// router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getUserProfile);
