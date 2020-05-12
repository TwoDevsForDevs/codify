import { Router } from "express";

import sessionsRouter from "./sessions.routes";
import callbackRouter from "./callback.routes";

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/callback", callbackRouter);

export default routes;
