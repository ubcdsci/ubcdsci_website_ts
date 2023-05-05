// Library imports.
import express from 'express';

// Route imports.
import users from '@/router/routes/users.routes';
import eventPosts from '@/router/routes/eventPosts.routes';

const router = express.Router();

router.use('/users', users);
router.use('/events', eventPosts);

export default router;
