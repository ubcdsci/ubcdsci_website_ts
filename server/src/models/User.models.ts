import mongoose from 'mongoose';

const useSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  // email: {
  //   type: String,
  //   required: [true, 'Please enter an email'],
  //   unique: true,
  // },
  // role: {
  //   type: String,
  //   enum: ['user', 'admin'],
  //   default: 'user',
  // },
}, { timestamps: true });

const User = mongoose.model("User", useSchema);

export default User;
