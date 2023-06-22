import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';

import { Post, EventPost, User } from '@/models/index.models';


/**
 * Get all posts.
 * @route GET /posts
 * @access Private
 */
const getPosts = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
		// Get all posts from database.
		const posts = await Post.find().lean();

    // Check if posts exist.
		if (!posts)
      return res.status(400).json({ message: "No posts found!" });

		res.status(200).json(posts);
	}
);


/**
 * Get post by id.
 * @route GET /posts/:id
 * @access Private
 */
const getPost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Check if post id is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Get post from database.
    const post = await Post.findById(id).lean().exec();

    // Check if post exists.
    if (!post)
      return res.status(400).json({ message: "Post not found!" });

    res.status(200).json(post);
  }
);


/**
 * Create a new post.
 * @route POST /posts
 * @access Private
 */
const createPost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { user_id, title, description, date, location, images, tags } = req.body;
    // Check if post details are valid.
    if (!title || !description)
      return res.status(400).json({ message: 'A title and description are required!' });

    // Create post.
    const post = await Post.create({
      title,
      description,
      date,
      location,
      images,
      tags,
    });

    if (!post)
      return res.status(400).json({ message: "Invalid post data!" });

    // Verify user exists.
    const user = await User.findById(user_id).exec();
    if (!user)
      return res.status(400).json({ message: "User not found!" });
    
    const postID = post._id;
    const userID = user._id;
    
    // Create event post.
    const eventPost = await EventPost.create({
			user_id: userID,
			post_id: postID,
		});

    if (!eventPost)
      return res.status(400).json({ message: "Invalid event post data!" });
    
    res.status(201).json({ message: `Post '${title}' created successfully!` });
  }
);


/**
 * Update post.
 * @route PATCH /posts
 * @access Private
 */
const updatePost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id, title, description, date, location, images, tags } = req.body;

    // Confirm post data is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Check if post exists.
    const post = await Post.findById(id).exec();
    if (!post)
      return res.status(400).json({ message: "Post not found!" });
    
    // Update post.
    post.title = title;
    post.description = description;
    post.date = date;
    post.location = location;
    post.images = images;
    post.tags = tags;

    // Save post.
    const updatedPost = await post.save();
    if (!updatedPost)
			return res.status(400).json({ message: "Invalid post data!" });
    
    res.status(201).json({ message: `Post updated successfully!` });
  }
);


/**
 * Delete post.
 * @route DELETE /posts
 * @access Private
 */
const deletePost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;

    // Confirm post id.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });
    
    // Check if post exists.
    const post = await Post.findById(id).exec();
    if (!post)
      return res.status(400).json({ message: "Post not found!" });
    
    // Delete post.
    const eventPost = await EventPost.findOne({ post_id: id }).exec();
    
    if (eventPost)
      eventPost.remove();
    
    const deletedPost = await post.remove();
    if (!deletedPost)
      return res.status(400).json({ message: "Invalid post data!" });
    
    res.status(201).json({ message: "Post deleted successfully!" });
  }
);

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
