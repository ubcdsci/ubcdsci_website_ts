import { NextFunction, Request, Response } from 'express';

import logger from "@/middlewares/logger.middlewares";


/**
 * Handle errors.
 * @access Public
 */
const errorHandler = (err : Error, req : Request, res : Response, next : NextFunction) => {
  logger.logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    'errLog.log'
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500;
  res.status(status);
  res.json({ success: false, message: err.message });
};

export default errorHandler;
