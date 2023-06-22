import mongoose from 'mongoose';

// Schema for the Post model
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this post."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this post."],
    },
    date: {
      type: Date,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    images: [{
      type: String,
      required: false,
    }],
    tags: [{
      type: String,
      required: false,
    }],
  },
  { timestamps: true }
);

// Export the model
const Post = mongoose.model("Post", PostSchema);

export default Post;