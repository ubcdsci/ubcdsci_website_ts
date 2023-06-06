import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import env from '@/configs/env.configs';
import logger from "@/middlewares/logger.middlewares";
import errorHandler from '@/middlewares/error.middlewares';


dotenv.config();

const app: Express = express();
app.use(logger.logger);
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());

// Serves static files.
app.use("/", express.static(path.join(__dirname, "public")));

// Serves client build folder in production.
if (env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req: Request, res: Response) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req: Request, res: Response) => res.send('Please set to production'));
}

app.use(errorHandler);

export default app;
