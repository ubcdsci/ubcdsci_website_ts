import { NextFunction, Request, Response } from "express";
import axios from "axios";

import env from "@/configs/env.configs";


/**
 * Verify reCaptcha token.
 * @access Private
 */
const verifyRecaptcha = (req: Request | any, res: Response, next: NextFunction): Response | void => {
	const header = req.headers["x-access-token"] || req.headers["authorization"];

  if (!header)
    return res.status(401).json({ message: "Unauthorized" });
  
  const token = header.split(" ")[1];
  axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  )
  .then((response): Response | void => {
    if (!response.data.success)
      return res.status(400).json({ message: "Recaptcha verification failed!" });
    
    next();
  })
  .catch((err: Error): Response => {
    return res.status(400).json({ message: "Recaptcha verification failed!" });
  });
};

export default verifyRecaptcha;
