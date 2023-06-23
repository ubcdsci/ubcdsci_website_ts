// Library imports.
import { Request, Response } from "express";
import { authenticator } from "otplib";
import bcrypt from "bcrypt";
import jwt, { VerifyCallback } from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// Model imports.
import { User } from "@/models/index.models";


/**
 * Helper function for logging in. \
 * Creates access token, refresh token and secure cookie.
 * @param user User object.
 * @param res Response object.
 */
function loginHelper(user: any, res: Response): Response {
	// Create access token.
	const accessToken = jwt.sign(
		{
			UserInfo: {
				username: user.username,
				roles: user.roles,
			},
		},
		process.env.ACCESS_TOKEN_SECRET as string,
		{ expiresIn: "15m" }
	);

	// Create refresh token.
	const refreshToken = jwt.sign(
		{ username: user.username },
		process.env.REFRESH_TOKEN_SECRET as string,
		{ expiresIn: "7d" }
	);

	// Create secure cookie with refresh token.
	res.cookie("jwt", refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: "none",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	// Send token to client.
	return res.json({
		message: "Successfully logged in!",
		accessToken,
	});
};


/**
 * Login user and return access token.
 * @route POST /api/auth
 * @access Public
 */
const login = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
		const { username, password } = req.body;
		
		// Check if username and password are provided.
		if (!username || !password)
			return res.status(400).json({ message: "All fields are required" });

		// Check if user exists and is active.
		const foundUser = await User.findOne({ username }).exec();
		if (!foundUser || !foundUser.active)
			return res.status(401).json({ message: "Unauthorized" });

		// Check if password is correct.
		const match = await bcrypt.compare(password, foundUser.password as string);
		if (!match)
			return res.status(401).json({ message: "Unauthorized" });

		// Two-factor authentication.
		if (foundUser.twoFactorAuth) {
			// Create 2fa token.
			const loginStep2VerificationToken = jwt.sign(
				{
					loginStep2Verification: {
						email: foundUser.email,
					},
				},
				process.env.ACCESS_TOKEN_SECRET as string,
				{ expiresIn: "5m" }
			);

			// Send token to client.
			res.json({
				message: "Please complete 2-factor authentication.",
				twoFactorAuthEnabled: true,
				loginStep2VerificationToken,
			});
		} else {
			loginHelper(foundUser, res);
		};
	}
);


/**
 * Verify 2fa token and return access token.
 * @route POST /api/auth/step2
 * @access Public
 */
const loginStep2 = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
		const { loginStep2VerificationToken, twoFactorAuthToken } = req.body;

		// Check if token is provided.
		if (!loginStep2VerificationToken)
			return res.status(400).json({ message: "Token is required" });
		
		// Verify token.
		try {
			jwt.verify(
				loginStep2VerificationToken,
				process.env.ACCESS_TOKEN_SECRET as string
			);
		} catch (err) {
			return res.status(401).json({ message: "Unauthorized" });
		};

		// Create access token.
		const token = twoFactorAuthToken.replaceAll(" ", "");

		// Check if user exists.
		const foundUser = await User.findOne({
			email: loginStep2VerificationToken.loginStep2Verification.email,
		});
		if (!foundUser)
			return res.status(400).json({ message: "User not found!" });

		// Check if token is valid.
		if (!authenticator.check(token, foundUser.twoFactorAuthSecret)) {
			return res.status(400).json({ message: "OTP verification failed: Invalid token" });
		} else {
			loginHelper(foundUser, res);
		};
	}
);


/**
 * Refresh access token.
 * @route POST /api/auth/refresh
 * @access Public
 */
const refresh = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
		const cookies = req.cookies;

		if (!cookies?.jwt)
			return res.status(401).json({ message: "Unauthorized" });

		const refreshToken = cookies.jwt;

		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET as string,
			asyncHandler(async (err: any, decoded: any): Promise<any> => {
				if (err)
					return res.status(403).json({ message: "Forbidden" });

				// Check if user exists.
				const foundUser = await User.findOne({
					username: decoded.username,
				}).exec();
				if (!foundUser)
					return res.status(401).json({ message: "Unauthorized" });

				// Create access token.
				const accessToken = jwt.sign(
					{
						UserInfo: {
							username: foundUser.username,
							roles: foundUser.roles,
						},
					},
					process.env.ACCESS_TOKEN_SECRET as string,
					{ expiresIn: "15m" }
				);

				res.json({ accessToken });
			}) as unknown as VerifyCallback
		);
	}
);


/**
 * Logout user and clear cookie.
 * @route POST /api/auth/logout/:id
 * @access Public
 */
const logout = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
		const { id } = req.params;

		// Check if user id is valid.
		if (!id) return res.status(400).json({ message: "An error occurred!" });

		// Get user from database.
		const user = await User.findById(id).select("-password").exec();
		if (!user)
			return res.status(400).json({ message: "User not found!" });

		// Disable 2fa.
		user.twoFactorAuth = false;
		user.twoFactorAuthSecret = "";
		user.save();

		// Check if cookie exists.
		const cookies = req.cookies;
		if (!cookies?.jwt) return res.sendStatus(204);

		// Clear cookie.
		res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "none",
			secure: true,
		});

		res.json({ message: "Cookie cleared!" });
	}
);

export default {
	login,
	loginStep2,
	refresh,
	logout,
};
