import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();

const host     = process.env.HOST || 'localhost';
const port     = process.env.PORT || 3001;
const mongodb  = process.env.DATABASE_URL || 'mongodb://localhost:27017/ubc-dsc';

mongoose.connect(mongodb);

const db = mongoose.connection;

db.on('error', (error: any) => {
  console.log('[Database]: Failed to connect to MongoDB');
  console.error(error);
});

db.once('open', () => {
  console.log('[Database]: Connected to MongoDB');
});


app.get('/', (req: Request, res: Response) => {
  res.send('UBC Data Science Club - Server');
});

app.listen(port, () => {
  console.log(`[Server]: Server is running at https://${host}:${port}`);
});
