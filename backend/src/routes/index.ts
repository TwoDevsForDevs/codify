import { Router } from 'express';

import sessionsRouter from './auth/sessions.routes';
import callbackRouter from './auth/callback.routes';
import userRouter from './user.routes';
import playlistRouter from './playlist.routes';
import artistRouter from './artist.routes';

import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/callback', callbackRouter);

routes.use(authMiddleware);

routes.use('/me', userRouter);
routes.use('/playlist', playlistRouter);
routes.use('/artist', artistRouter);

export default routes;
