import { saveOrderService } from "../services/index.js";
import Success from "../utils/success.js";

export const saveOrder = async (req, res) =>{
    try{
        const order = await saveOrderService(req.body);
        res.json(Success(order, "Successfully submitted order details!"));
    }catch(error){
        res.status(error.status).json(error.message);
    }
};