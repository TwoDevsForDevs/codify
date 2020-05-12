import { Router } from "express";
import request from "request";
import querystring from "querystring";

import generateRandomString from "../utils/GenerateRandomString";

const sessionsRouter = Router();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const stateKey = "@spotify-clone/auth_state";

sessionsRouter.get("/sessions", (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = "user-read-private user-read-email user-read-playback-state";

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: "code",
      client_id: clientId,
      scope,
      redirect_uri: redirectURI,
      state,
    })}`,
  );
});

sessionsRouter.get("/callback", (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      `/errors${querystring.stringify({
        error: "state_mismatch",
      })}`,
    );
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code,
        redirectURI,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`,
        ).toString("base64")}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const accessToken = body.access_token;

        req.user.accessToken = accessToken;
      }
    });
  }
});

export default sessionsRouter;
