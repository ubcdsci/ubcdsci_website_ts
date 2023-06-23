// Library imports.
import express from "express";

import authController from "@/controllers/auth.controllers";
import loginLimiter from "@/middlewares/loginLimiter.middlewares";


const router = express.Router();

// Public routes.
router.route('/')
  .post(loginLimiter, authController.login);

router.route('/step2')
  .post(authController.loginStep2);

router.route('/refresh')
  .get(authController.refresh);

router.route('/logout/:id')
  .post(authController.logout);


// Protected routes.

  
export default router;
