import { Order } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveOrder = (data) =>
    Order.create(data)
    .then((order) =>{
        return Promise.resolve(order);
    })
    .catch(() =>{
        throw new AppError("Internal server error!", 500);
    });
