// Library imports.
import express from 'express';

import verifyJWT from '@/middlewares/verifyJWT.middlewares';
import verifyRecaptcha from '@/middlewares/verifyRecaptcha.middlewares';
import userController from "@/controllers/users.controllers";


const router = express.Router();

// Public routes.


// Protected routes.
if (process.env.NODE_ENV !== 'development') {
  router.use(verifyJWT);
  router.use(verifyRecaptcha);
};

router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser)
  .patch(userController.updateUser);

router.route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);

export default router;
