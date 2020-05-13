import { Router } from "express";
import request from "request";

import api from "../services/api";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const response = await api.get("/me");

  return res.json(response.data);
});

export default userRouter;
