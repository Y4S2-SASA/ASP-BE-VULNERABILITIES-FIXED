import express from "express";
import { 
    saveOrder, 
    getUserOrders, 
    getUserOrder, 
    updateOrder,
    deleteOrder, 
    getOrderRequests,
    getReportDetails
} from "../controllers/index.js";

const orderRouter = express.Router();

orderRouter.post("/", saveOrder);
orderRouter.get("/users/:buyer", getUserOrders);
orderRouter.get("/:id", getUserOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.get("/requests/:seller", getOrderRequests);
orderRouter.post("/report", getReportDetails);

export default orderRouter;