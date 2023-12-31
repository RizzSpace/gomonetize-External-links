import express, { NextFunction, Request, Response, Router } from 'express';

const errorRouter: Router = express.Router();

errorRouter.use('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

export default errorRouter