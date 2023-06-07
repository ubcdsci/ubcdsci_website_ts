import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


/**
 * Verify JWT.
 * @access Private
 */
const verifyJWT = (req: Request | any, res: Response, next: NextFunction): Response | void => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader?.startsWith("Bearer "))
		return res.status(401).json({ message: "Unauthorized" });

	const token = authHeader.split(" ")[1];
	jwt.verify(
		token,
		process.env.ACCESS_TOKEN_SECRET as string,
		(err: any, decoded: any): any => {
			if (err)
        return res.status(403).json({ message: "Forbidden" });
      
			req.user = decoded.UserInfo.username;
			req.roles = decoded.UserInfo.roles;
			next();
		}
	);
};

export default verifyJWT;
