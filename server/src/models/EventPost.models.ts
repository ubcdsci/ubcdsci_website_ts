import mongoose from 'mongoose';

// Schema for the EventPost model
const EventPostSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    }
  },
  { timestamps: true }
);

// Export the model
const EventPost = mongoose.model("EventPost", EventPostSchema);

export default EventPost;
