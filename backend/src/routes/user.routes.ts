import { Router } from "express";

import api from "../services/api";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const response = await api.get("/me");

  const { id, type, display_name, email, images } = response.data;

  const user = {
    id,
    type,
    display_name,
    email,
    avatar: images[0].url,
  };

  return res.json(user);
});

userRouter.get("/top-artists", async (req, res) => {
  const response = await api.get("/me/top/artists", {
    params: {
      limit: 5,
    },
  });

  const artists = response.data.items;

  // artists.map(async artist => ({
  //   ...artist,
  //   topTrack: await api.get(`/artists/${artist.id}/top-tracks`),
  // }));

  return res.json(artists);
});

userRouter.get("/recently-played", async (req, res) => {
  const response = await api.get("/me/player/recently-played");

  console.log(response.data);
  // const { id, type, display_name, email, images } = response.data;

  // const user = {
  //   id,
  //   type,
  //   display_name,
  //   email,
  //   avatar: images[0].url,
  // };

  return res.json(response.data);
});

export default userRouter;
