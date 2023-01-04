// Library imports.
import express from 'express';

import { router as user } from './user.routes';
import { router as auth } from './auth.routes';

const router = express.Router();

router.use('/user', user);
router.use('/auth', auth);

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to the API!' });
});

export default router;
