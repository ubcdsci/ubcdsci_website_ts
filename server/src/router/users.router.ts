// Library imports.
import express from 'express';

import env from '@/configs/env.configs';
import verifyJWT from '@/middlewares/verifyJWT.middlewares';
import verifyRecaptcha from '@/middlewares/verifyRecaptcha.middlewares';
import userController from "@/controllers/users.controllers";


const router = express.Router();

// const salt = bcrypt.genSaltSync(12);
// const hashedPassword = bcrypt.hashSync(env.DSCI_PASS, salt);
// const user1 = new User({ username: env.DSCI_USER, password: hashedPassword, role: "admin" });
// user1.save()
//   .then(() => console.log('User has been created!'))
//   .catch(() => console.log('User already exists!'));

if (env.NODE_ENV !== 'development') {
  router.use(verifyJWT);
  router.use(verifyRecaptcha);
};

router.route('/')
  .get(userController.getUsers)
  .get(userController.getUser)
  .post(userController.createUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
