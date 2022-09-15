import express from "express";
import itemRouter from './item.routes.js';
import userRouter from "./users.routes..js";
import orderRouter from "./order.routes.js";
import questionRouter from "./question.routes.js";
import commentRouter from "./comment.routes.js";
import tagsRouter from "./questionReport.routes.js";

const apiRouter = express.Router();

apiRouter.use("/item", itemRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/orders", orderRouter);
apiRouter.use("/questions", questionRouter);
apiRouter.use("/comments", commentRouter);
apiRouter.use("/tags", tagsRouter);

export default apiRouter;