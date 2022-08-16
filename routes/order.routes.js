import express from "express";
import { deleteOrder, getUserOrder, getUserOrders, saveOrder, updateOrder } from "../controllers/index.js";

const orderRouter = express.Router();

orderRouter.post("/", saveOrder);
orderRouter.get("/users/:buyer", getUserOrders);
orderRouter.get("/:id", getUserOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;