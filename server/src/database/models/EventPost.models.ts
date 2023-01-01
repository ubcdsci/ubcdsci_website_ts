import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
  postDate: {
    type: Date,
    unique: true,
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
  image: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const EventPost = mongoose.model("EventPost", useSchema);

export default EventPost;
