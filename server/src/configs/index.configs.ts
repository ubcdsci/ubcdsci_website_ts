import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import env from './env.configs';
import { errorHandler } from '../middlewares/error.middlewares';


const app : Express = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

// Serves client build folder in production.
if (env.NODE_ENV === 'production') {
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
