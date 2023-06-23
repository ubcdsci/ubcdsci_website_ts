// Library imports.
import express from 'express';

import verifyJWT from '@/middlewares/verifyJWT.middlewares';
import verifyRecaptcha from '@/middlewares/verifyRecaptcha.middlewares';
import userController from "@/controllers/users.controllers";


const router = express.Router();

// Public routes.
router.route('/')
  .post(userController.createUser);

// Protected routes.
if (process.env.NODE_ENV !== 'development') {
  router.use(verifyJWT);
  router.use(verifyRecaptcha);
};

router.route('/')
  .get(userController.getUsers);

router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
