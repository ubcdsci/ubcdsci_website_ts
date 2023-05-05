// Library imports.
import express from 'express';

import {
  getAllEventPosts,
  createEventPost,
  getEventPostById,
  updateEventPostById,
  deleteEventPostById,
} from '@/controllers/eventPosts.controllers';

const router = express.Router();

router.get('/', getAllEventPosts);
router.post('/', createEventPost);
router.get('/:id', getEventPostById);
router.put('/:id', updateEventPostById);
router.delete('/:id', deleteEventPostById);

export default router;
