import express from 'express';
import asyncHandler from 'express-async-handler';

import { EventPost } from '@/database/index.database';

const router = express.Router();

/**
 * Get all event posts.
 * @route GET /api/events/
 * @access Public
 */
export const getAllEventPosts = asyncHandler(async (req, res) => {
  const eventPosts = await EventPost.find({});
  res.status(200).json(eventPosts);
});

/**
 * Create event post.
 * @route POST /api/events/
 * @access Public
 */
export const createEventPost = asyncHandler(async (req, res) => {
  const { creator, title, description, date, location, imageUpload, tags } = req.body;

  const eventPost = await EventPost.create({
    creator,
    title,
    description,
    date,
    location,
    imageUpload,
    tags,
  });

  if (eventPost) {
    res.status(201).json(eventPost);
  } else {
    res.status(400).json({ message: 'Invalid event post data!' });
  }
});

/**
 * Get event post by id.
 * @route GET /api/events/:id
 * @access Public
 */
export const getEventPostById = asyncHandler(async (req, res) => {
  const eventPost = await EventPost.findById(req.params.id);

  if (eventPost) {
    res.status(200).json(eventPost);
  } else {
    res.status(404).json({ message: 'Event post not found!' });
  }
});

/**
 * Update event post by id.
 * @route PUT /api/events/:id
 * @access Public
 */
export const updateEventPostById = asyncHandler(async (req, res) => {
  const { creator, title, description, date, location, imageUpload, tags } = req.body;

  const eventPost = await EventPost.findById(req.params.id);

  if (eventPost) {
    eventPost.creator = creator;
    eventPost.title = title;
    eventPost.description = description;
    eventPost.date = date;
    eventPost.location = location;
    eventPost.imageUpload = imageUpload;
    eventPost.tags = tags;

    const updatedEventPost = await eventPost.save();

    res.status(200).json(updatedEventPost);
  } else {
    res.status(404).json({ message: 'Event post not found!' });
  }
});

/**
 * Delete event post by id.
 * @route DELETE /api/events/:id
 * @access Public
 */
export const deleteEventPostById = asyncHandler(async (req, res) => {
  const eventPost = await EventPost.findById(req.params.id);

  if (eventPost) {
    await eventPost.remove();
    res.status(200).json({ message: 'Event post removed!' });
  } else {
    res.status(404).json({ message: 'Event post not found!' });
  }
});

export default router;
