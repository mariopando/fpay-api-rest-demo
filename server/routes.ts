import { Application } from 'express';
import primeRouter from './api/controllers/primenumbers/router';
export default function routes(app: Application): void {
  app.use('/api/v1/primenumbers', primeRouter);
}
