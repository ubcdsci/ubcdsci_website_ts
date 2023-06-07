// Library imports.
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { VerifyCallback } from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// Model imports.
import User from "@/models/User.models";


/**
 * Login user and return access token.
 * @route POST /api/auth
 * @access Public
 */
const login = asyncHandler(async (req: Request, res: Response): Promise<any> => {
	const { username, password } = req.body;
	
	// Check if username and password are provided.
	if (!username || !password)
		return res.status(400).json({ message: "All fields are required" });

	// Check if user exists and is active.
	const foundUser = await User.findOne({ username }).exec();
	if (!foundUser || !foundUser.active)
		return res.status(401).json({ message: "Unauthorized" });

	// Check if password is correct.
	const match = await bcrypt.compare(password, foundUser.password);
	if (!match)
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

	// Create refresh token.
	const refreshToken = jwt.sign(
		{ username: foundUser.username },
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

	// Send accessToken containing user info.
	res.json({ accessToken });
});


/**
 * Refresh access token.
 * @route POST /api/auth/refresh
 * @access Public
 */
const refresh = (req: Request, res: Response): Response | void => {
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
};


/**
 * Logout user and clear cookie.
 * @route POST /api/auth/logout
 * @access Public
 */
const logout = (req: Request, res: Response): Response | void => {
	// Check if cookie exists.
	const cookies = req.cookies;
	if (!cookies?.jwt)
		return res.sendStatus(204);

	// Clear cookie.
	res.clearCookie("jwt", {
		httpOnly: true,
		sameSite: "none",
		secure: true,
	});
	
	res.json({ message: "Cookie cleared!" });
};

export default {
	login,
	refresh,
	logout
};
