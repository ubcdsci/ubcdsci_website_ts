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
			required: [true, "Please enter a password"],
		},
		email: {
		  type: String,
			minlength: 6,
			validate: /\S+@\S+\.\S+/,
		  required: true,
		  unique: true,
		},
		roles: [{
			type: String,
			enum: ["user", "executive", "admin"],
			default: ["user"],
		}],
		twoFactorAuth: {
			type: Boolean,
			default: false,
		},
		twoFactorAuthSecret: {
			type: String,
			default: "",
		},
		active: {
			type: Boolean,
			default: true,
		},
		posts: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		}],
	},
	{ timestamps: true }
);

// Export the model.
const User = mongoose.model("User", UserSchema);

export default User;
