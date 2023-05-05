// Library imports.
import express from 'express';
// import bcrypt from 'bcrypt';

// import env from '@/configs/env.configs';

// import { User } from '@/models/index.models';

import {
  verifyAdmin,
  verifyUser,
} from '@/middlewares/auth.middlewares';
import {
  registerUser,
  deleteUser,
  loginUser,
  updateUserRole,
} from '@/controllers/users.controllers';

const router = express.Router();

// const salt = bcrypt.genSaltSync(12);
// const hashedPassword = bcrypt.hashSync(env.DSCI_PASS, salt);
// const user1 = new User({ username: env.DSCI_USER, password: hashedPassword, role: "admin" });
// user1.save()
//   .then(() => console.log('User has been created!'))
//   .catch(() => console.log('User already exists!'));


router.post("/register", registerUser);
router.post("/login", loginUser);

// User routes.
router.get("/user", verifyUser, (req, res) => res.send("User Route"));

// Admin routes.
router.get("/admin", verifyAdmin, (req, res) => res.send("Admin Route"));
router.route("/updateRole").put(verifyAdmin, updateUserRole);
router.route("/deleteUser:id").delete(verifyAdmin, deleteUser);

export default router;
