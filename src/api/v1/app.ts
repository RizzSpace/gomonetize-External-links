import express, { Express, Request, Response } from 'express';
export const app: Express = express();
import cors from 'cors';
import api from './router/index';
import { errorMiddleware } from './middleware/errorHanding';

app.use(express.json());

app.use(cors());

app.use("/api/v1", api);

app.get('/', (req: Request, res: Response) => {
  res.send('THIS IS FROM BACKEND');
});

// app.all("*",api);

app.use(errorMiddleware);
