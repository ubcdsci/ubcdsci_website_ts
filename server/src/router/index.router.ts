// Library imports.
import express from 'express';

// Route imports.
import users from './routes/users.routes';
import eventPosts from './routes/eventPosts.routes';

const router = express.Router();

router.use('/users', users);
router.use('/events', eventPosts);

export default router;
