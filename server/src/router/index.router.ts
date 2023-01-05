// Library imports.
import express from 'express';

// Route imports.
import users from './routes/users.routes';
import eventPosts from './routes/eventPosts.routes';

const router = express.Router();
export default router;


router.use('/users', users);
router.use('/eventPosts', eventPosts);
