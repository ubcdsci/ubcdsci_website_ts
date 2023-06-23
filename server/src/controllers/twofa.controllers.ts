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
    const { email } = req.body;

    // Check if user exists.
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    // Check if 2FA is already enabled.
		if (user.twoFactorAuth) {
			return res.status(400).json({
				message: "2FA already verified and enabled",
				twoFactorAuth: user.twoFactorAuth,
			});
		}

		const secret = authenticator.generateSecret();
		user.twoFactorAuthSecret = secret;
		user.save();
		const appName = "Express 2FA Demo";

		return res.json({
			message: "2FA secret generated successfully",
			secret: secret,
			qrImageDataUrl: await qrcode.toDataURL(
				authenticator.keyuri(email, appName, secret)
			),
			twoFactorAuth: user.twoFactorAuth,
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
    const { email, token } = req.body;

    // Check if user exists.
		const user = await User.findOne({ email });
		if (!user)
      return res.status(400).json({ message: "User not found" });

    // Check if 2FA is already enabled.
		if (user.twoFactorAuth) {
			return res.json({
				message: "2FA already verified and enabled!",
				twoFactorAuth: user.twoFactorAuth,
			});
		}

    // Check if token is valid.
		const checkToken = token.replaceAll(" ", "");
		if (!authenticator.check(checkToken, user.twoFactorAuthSecret)) {
			return res.status(400).json({
				message: "OTP verification failed: Invalid token",
				twoFactorAuth: user.twoFactorAuth,
			});
		} else {
			user.twoFactorAuth = true;
			user.save();

			return res.json({
				message: "Successfully verified OTP!",
				twoFactorAuth: user.twoFactorAuth,
			});
		}
	}
);

export default {
	generate,
	verify,
};
