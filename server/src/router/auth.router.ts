// Library imports.
import express from "express";

import authController from "@/controllers/auth.controllers";
import loginLimiter from "@/middlewares/loginLimiter.middlewares";


const router = express.Router();

router.route('/')
  .post(loginLimiter, authController.login);

router.route('/refresh')
  .get(authController.refresh);

router.route('/logout')
  .post(authController.logout);
  
export default router;
