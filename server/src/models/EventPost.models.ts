import mongoose from 'mongoose';

// Schema for the EventPost model
const EventPostSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  imageUpload: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

// Export the model
const EventPost = mongoose.model("EventArticle", EventPostSchema);

export default EventPost;
