import { Router } from 'express';
import querystring from 'querystring';

import generateRandomString from '../../utils/GenerateRandomString';

const sessionsRouter = Router();

const redirectURI = process.env.REDIRECT_URI;
const stateKey = '@codify/auth_state';

sessionsRouter.get('/', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope =
    'user-read-private user-read-email user-read-playback-state user-read-recently-played user-top-read playlist-read-private';

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope,
      redirect_uri: redirectURI,
      state,
      show_dialog: true,
    })}`,
  );
});

export default sessionsRouter;
