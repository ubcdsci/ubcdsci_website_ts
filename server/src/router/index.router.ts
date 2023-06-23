// Library imports.
import express, { Request, Response } from 'express';
import path from "path";

// Route imports.
import auth from '@/router/auth.router';
import twofa from '@/router/twofa.router';
import users from '@/router/users.router';
import posts from '@/router/posts.router';


const router = express.Router();

// router.get("^/$|/index(.html)?", (req: Request, res: Response) => {
// 	res.sendFile(path.join(__dirname, "..", "views", "index.html"));
// });

router.use('/auth', auth);
router.use('/twofa', twofa);
router.use('/users', users);
router.use('/posts', posts);

export default router;
