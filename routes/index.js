import express from "express";
import itemRouter from './item.routes.js';

const apiRouter = express.Router();

apiRouter.use("/item", itemRouter);

export default apiRouter;