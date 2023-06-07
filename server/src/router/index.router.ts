// Library imports.
import express, { Request, Response } from 'express';
import path from "path";

// Route imports.
import auth from '@/router/auth.router';
import users from '@/router/users.router';


const router = express.Router();

// router.get("^/$|/index(.html)?", (req: Request, res: Response) => {
// 	res.sendFile(path.join(__dirname, "..", "views", "index.html"));
// });

router.use('/auth', auth);
router.use('/users', users);

export default router;
