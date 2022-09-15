import express from "express";
import {
    getQuestionTags,
} from '../controllers/index.js';

const tagsRouter = express.Router();

tagsRouter.get("/", getQuestionTags);

export default tagsRouter;