import { Router } from "express";

import sessionsRouter from "./auth/sessions.routes";
import callbackRouter from "./auth/callback.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/callback", callbackRouter);
routes.use("/me", userRouter);

export default routes;
