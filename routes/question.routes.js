import express from "express";
import {
    saveQuestion,
    getQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion,
    getQuestionTags,
} from '../controllers/index.js';

const questionRouter = express.Router();

questionRouter.post("/", saveQuestion);
questionRouter.get("/:id", getQuestion);
questionRouter.get("/", getQuestions);
questionRouter.put("/:id", updateQuestion);
questionRouter.delete("/:id", deleteQuestion);

export default questionRouter;