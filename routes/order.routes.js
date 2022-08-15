import express from "express";
import { saveOrder } from "../controllers/index.js";

const orderRouter = express.Router();

orderRouter.post("/", saveOrder);

export default orderRouter;