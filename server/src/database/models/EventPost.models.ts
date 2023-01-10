import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
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

const EventPost = mongoose.model("EventArticle", useSchema);

export default EventPost;
