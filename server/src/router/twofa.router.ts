// Library imports.
import express from "express";

import twofaController from "@/controllers/twofa.controllers";


const router = express.Router();

// Public routes.
router.route('/generate')
  .post(twofaController.generate);

router.route('/verify')
  .post(twofaController.verify);


// Protected routes.

  
export default router;
