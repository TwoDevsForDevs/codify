import { Request, Response, NextFunction } from 'express';

import api from '../services/api';

export default function auth(
  request: Request,
  response: Response,
  next: NextFunction,
): void | Response<object> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  api.defaults.headers.authorization = authHeader;

  return next();
}
