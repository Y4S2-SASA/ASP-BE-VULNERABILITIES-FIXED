import express from "express";
import {
    saveComment,
    getComments,
    deleteComment,
} from '../controllers/index.js';

const commentRouter = express.Router();

commentRouter.post("/", saveComment);
commentRouter.get("/:id", getComments);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;