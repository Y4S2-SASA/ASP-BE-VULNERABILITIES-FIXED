import { Order } from "../models/index.js";
import AppError from "../utils/appError.js";

//Save order details 
export const saveOrder = (data) =>
    Order.create(data)
    .then((order) =>{
        return Promise.resolve(order);
    })
    .catch(() =>{
        throw new AppError("Internal server error!", 500);
    });

//Get all orders related to a specific user
export const getUserOrders = (buyer) =>
    Order.find({buyer})
    .populate("buyer", {
        _id:1,
        firstName:1,
        lastName:1,
        email:1,
        contactNo:1
    })
    .populate({
        path:"item",
        populate:{
            path:"createdBy",
            select:{
                _id:1,
                firstName:1,
                lastName:1,
                email:1
            }
        }
    })
    .then((orders) =>{
        return Promise.resolve(orders)
    })
    .catch(() =>{
        throw new AppError("Internal server error!", 500);
    });

//Get the selected order details
export const getUserOrder = (id) =>
    Order.findById(id)
    .populate("buyer", {
        _id:1,
        firstName:1,
        lastName:1,
        email:1,
        contactNo:1
    })
    .populate({
        path:"item",
        populate:{
            path:"createdBy",
            select:{
                _id:1,
                firstName:1,
                lastName:1,
                email:1
            }
        }
    })
    .then((order) =>{
        return Promise.resolve(order)
    })
    .catch(() =>{
        throw new AppError("Internal server error!", 500)
    });

//Update order details
export const updateOrder = (id, data) =>
    Order.findByIdAndUpdate(id, data, { new: true })
    .then((order) =>{
        return Promise.resolve(order);
    })
    .catch(() =>{
        throw new AppEttor("Internal server error!", 500);
    });

//Delete order details
export const deleteOrder = (id) =>
    Order.findByIdAndDelete(id)
    .then((order) =>{
        return Promise.resolve(order);
    }) 
    .catch(() =>{
        throw new AppError("Internal server error!", 500);
    });

//Fetch order requests
export const getOrderRequests = (seller) =>
    Order.find({seller})
    .populate("buyer", {
        _id:1,
        firstName:1,
        lastName:1,
        email:1,
        contactNo:1
    })
    .populate({
        path:"item",
        populate:{
            path:"createdBy",
            select:{
                _id:1,
                firstName:1,
                lastName:1,
                email:1
            }
        }
    })
    .then((orders) =>{
        return Promise.resolve(orders)
    })
    .catch(() =>{
        throw new AppError("Internal server error!", 500);
    });

//Fetch Orders for report
export const getReportDetails = (startDate, endDate) =>
    Order.find({ createdAt: {
        $gte: new Date(`${startDate} 00:00:00`),
        $lt: new Date(`${endDate} 00:00:00`)
      }}, "buyer")
      .populate("buyer", {
        _id:1,
        firstName:1,
        lastName:1,
    })
    .then((orders) =>{
        return Promise.resolve(orders)
    })
    .catch((error) =>{
        throw new AppError("Internal server error!", 500);
    });