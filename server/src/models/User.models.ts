import mongoose from 'mongoose';

/**
 * @description Schema for the User model.
 * @type {mongoose.Schema}
 */
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please enter a username"],
			unique: true,
		},
		password: {
			type: String,
			minLength: 8,
			required: [true, "Please enter a password"],
		},
		// email: {
		//   type: String,
		//   required: [true, 'Please enter an email'],
		//   unique: true,
		// },
		roles: [{
			type: String,
			enum: ["user", "executive", "admin"],
			default: "user",
		}],
		active: {
			type: Boolean,
			default: true,
		},
	},
	{
    timestamps: true
  }
);

// Export the model.
const User = mongoose.model("User", UserSchema);

export default User;
