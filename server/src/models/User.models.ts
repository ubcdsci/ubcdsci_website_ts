import mongoose from 'mongoose';

// Schema for the User model
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, 'Please enter a password'],
  },
  // email: {
  //   type: String,
  //   required: [true, 'Please enter an email'],
  //   unique: true,
  // },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

// Export the model
const User = mongoose.model("User", UserSchema);

export default User;
