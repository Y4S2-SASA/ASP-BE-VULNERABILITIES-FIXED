import express from "express";
import itemRouter from './item.routes.js';
import userRouter from "./users.routes..js";


const apiRouter = express.Router();

apiRouter.use("/item", itemRouter);
apiRouter.use("/users", userRouter);

export default apiRouter;