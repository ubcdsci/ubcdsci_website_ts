import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import format from "date-fns/format";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";


/**
 * Log events.
 * @access Public
 * @param message Message to log.
 * @param logFileName Name of the log file to write to.
 */
const logEvents = async (message: string, logFileName: string) => {
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs')))
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
  } catch (err) {
    console.log(err);
  };
};


/**
 * Logger.
 * @access Public
 */
const logger = (req: Request, res: Response, next: NextFunction) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
  console.log(`${req.method} ${req.path}`);
  next();
};

export default {
  logEvents,
  logger
};
