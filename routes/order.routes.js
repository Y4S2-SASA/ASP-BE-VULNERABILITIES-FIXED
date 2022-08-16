import express from "express";
import { 
    saveOrder, 
    getUserOrders, 
    getUserOrder, 
    updateOrder,
    deleteOrder 
} from "../controllers/index.js";

const orderRouter = express.Router();

orderRouter.post("/", saveOrder);
orderRouter.get("/users/:buyer", getUserOrders);
orderRouter.get("/:id", getUserOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;