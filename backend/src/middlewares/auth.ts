import { Request, Response, NextFunction } from 'express';

export default function auth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.json('Token not provided');
  }

  // const [, token] = authHeader.split(' ');

  next();
}
