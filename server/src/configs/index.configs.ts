import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import { env } from './env.configs';
import { errorHandler } from '../middlewares/error.middlewares';


dotenv.config();

const app : Express = express();
app.use(cors());
app.use(express.json());

// Serves client build folder in production.
if (env === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

export default app;
