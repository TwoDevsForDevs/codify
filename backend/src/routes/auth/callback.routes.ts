import request from 'request';
import { Router } from 'express';
import querystring from 'querystring';

import api from '../../services/api';

const callbackRouter = Router();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = 'http://localhost:3333/callback';

const stateKey = '@spotify-clone/auth_state';

callbackRouter.get('/', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      `http://localhost:3000/error/${querystring.stringify({
        error: 'state_mismatch',
      })}`,
    );
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: redirectURI,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`,
        ).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const { access_token, refresh_token, expires_in } = body;

        api.defaults.headers.Authorization = `Bearer ${access_token}`;

        res.redirect(
          `${
            process.env.APP_URL
          }/spotify-authentication?${querystring.stringify({
            access_token,
            refresh_token,
            expires_in,
          })}`,
        );
      }
    });
  }
});

export default callbackRouter;
