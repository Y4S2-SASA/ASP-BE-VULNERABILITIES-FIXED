import { saveOrder } from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveOrderService = async (data) =>{
    const {
        buyer,
        item,
        quantity,
        status,
        total
    } = data;
    try{
        await saveOrder(data);
        return Promise.resolve("Successfully saved order details!");
    }catch(error){
        throw new AppError(error.message, error.status);
    }
}