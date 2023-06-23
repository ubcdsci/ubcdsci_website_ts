// Library imports.
import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';

// Model imports.
import { Post, User } from '@/models/index.models';


/**
 * Get all posts.
 * @route GET /api/posts
 * @access Public
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
 * @route GET /api/posts/:id
 * @access Public
 */
const getPost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Check if post id is valid.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });

    // Get post from database.
    const post = await Post.findById(id).lean().exec().catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "Post not found!" });
    });

    res.status(200).json(post);
  }
);


/**
 * Create a new post.
 * @route POST /api/posts
 * @access Protected
 */
const createPost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { author, title, description, date, location, images, tags } = req.body;
    // Check if post details are valid.
    if (!title || !description)
      return res.status(400).json({ message: 'A title and description are required!' });

    // Verify user exists.
    await User.findById(author).exec().catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "User not found!" });
    });

    // Create post.
    const post = await Post.create({
			author,
			title,
			description,
			date,
			location,
			images,
			tags,
		});

    if (!post)
      return res.status(400).json({ message: "Invalid post data!" });
    
    // Update user's posts.
    User.findByIdAndUpdate(
      author,
      { $push: { posts: post._id } },
      { new: true }
    ).exec();
    
    res.status(201).json({ message: `Post '${title}' created successfully!` });
  }
);


/**
 * Update post.
 * @route PATCH /api/posts/:id
 * @access Protected
 */
const updatePost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const { title, description, date, location, images, tags } = req.body;

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
    await post.save().catch((err: any) => {
      console.log(err);
			return res.status(400).json({ message: "Invalid post data!" });
    });
    
    res.status(201).json({ message: `Post updated successfully!` });
  }
);


/**
 * Delete post.
 * @route DELETE /api/posts/:id
 * @access Protected
 */
const deletePost = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    // Confirm post id.
    if (!id)
      return res.status(400).json({ message: "An error occurred!" });
    
    // Check if post exists.
    const post = await Post.findById(id).exec();
    if (!post)
      return res.status(400).json({ message: "Post not found!" });
    
    // Remove post from user's posts.
    User.findByIdAndUpdate(
      post.author,
      { $pull: { posts: id } },
      { new: true }
    ).exec();
    
    // Delete post.
    await post.remove().catch((err: any) => {
      console.log(err);
      return res.status(400).json({ message: "Invalid post data!" });
    });
    
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
