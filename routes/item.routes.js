import express from "express";
import {
    saveItem,
    getItem,
    getItems,
    updateItem,
    deleteItem,
} from '../controllers/index.js';

const itemRouter = express.Router();

itemRouter.post("/", saveItem);
itemRouter.get("/:id", getItem);
itemRouter.get("/", getItems);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;