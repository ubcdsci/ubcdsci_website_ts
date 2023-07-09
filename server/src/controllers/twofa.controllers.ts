// Library imports.
import { Request, Response } from "express";
import { authenticator } from "otplib";
import qrcode from "qrcode";
import asyncHandler from "express-async-handler";

// Model imports.
import { User } from "@/models/index.models";


/**
 * Generates a new 2FA secret for a user.
 * @route POST /api/twofa/generate
 * @access Public
 */
const generate = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
    const { username } = req.body;

    // Check if user exists.
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ message: "User not found" });

		// Check if secret already exists.
		if (user.twoFactorAuthSecret !== "") {
			return res.status(400).json({
				message: "2FA secret already exists",
				twoFactorAuthEnabled: user.twoFactorAuthEnabled,
			});
		}

		const secret = authenticator.generateSecret();
		user.twoFactorAuthSecret = secret;
		user.save();
		const appName = "UBC Data Science Club";

		return res.json({
			message: "2FA secret generated successfully",
			secret: secret,
			qrImageDataUrl: await qrcode.toDataURL(
				authenticator.keyuri(username, appName, secret)
			),
			twoFactorAuthEnabled: user.twoFactorAuthEnabled,
		});
	}
);


/**
 * Verifies a 2FA token for a user.
 * @route POST /api/twofa/verify
 * @access Public
 */
const verify = asyncHandler(
	async (req: Request, res: Response): Promise<any> => {
    const { username, token } = req.body;

    // Check if user exists.
		const user = await User.findOne({ username }).select("-password");
		if (!user)
      return res.status(400).json({ message: "User not found" });

    // Check if token is valid.
		const checkToken = token.replaceAll(" ", "");
		if (!authenticator.check(checkToken, user.twoFactorAuthSecret)) {
			return res.status(400).json({
				message: "OTP verification failed: Invalid token"
			});
		} else {
			return res.json({
				message: "Successfully verified OTP!"
			});
		}
	}
);

export default {
	generate,
	verify,
};
