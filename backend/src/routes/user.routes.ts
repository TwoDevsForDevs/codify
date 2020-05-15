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

export default userRouter;
