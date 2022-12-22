import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('UBC Data Science Club - Server');
});

app.listen(port, () => {
  console.log(`[Server]: Server is running at https://${host}:${port}`);
});
