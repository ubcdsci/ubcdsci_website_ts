// Library imports.
import express from 'express';

import verifyJWT from '@/middlewares/verifyJWT.middlewares';
import verifyRecaptcha from '@/middlewares/verifyRecaptcha.middlewares';
import postController from "@/controllers/posts.controllers";


const router = express.Router();

// Public routes.
router.route('/')
  .get(postController.getPosts)

router.route('/:id')
  .get(postController.getPost)


// Protected routes.
if (process.env.NODE_ENV !== 'development') {
  router.use(verifyJWT);
  router.use(verifyRecaptcha);
};

router.route('/')
  .post(postController.createPost)
  .patch(postController.updatePost);

router.route('/:id')
  .delete(postController.deletePost);

export default router;
