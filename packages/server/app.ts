import express, { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import cors from 'cors';
import { router as todoRouter } from './todos/route';

export const app = express();

// middleware (plugin)
// ce middleware log la méthode HTTP et l'URL
// puis laisse faire le reste de l'application
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});
app.use(cors());

app.use('/api/todos', todoRouter);

app.use((_req, res, _next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found',
  });
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    res.statusCode = 400;
    return res.json({
      err: err,
    });
  }

  res.statusCode = 500;
  res.json({
    err: err,
  });
});
