import { 
    saveOrderService,
    getUserOrdersService, 
    getUserOrderService, 
    updateOrderService, 
    deleteOrderService,
    getOrderRequestsService,
    getReportDetailsService
} from "../services/index.js";
import Success from "../utils/success.js";

//Save order details controller
export const saveOrder = async (req, res) =>{
    try{
        const order = await saveOrderService(req.body);
        res.json(Success(order, "Successfully submitted order details!"))
    }catch(error){
        res.status(500).json(error.message);
    }
};

//Get user's orders controller
export const getUserOrders = async(req, res) =>{
    try{
        const orders = await getUserOrdersService(req.params.buyer);
        orders.length === 0 ?
            res.status(404).json("No orders exist under the provided user!")
        :
            res.json(Success(orders, "Successfully fetched the user's orders!"))
    }catch(error){
        res.status(500).json(error.message);
    }
};

//Get selected user order controller
export const getUserOrder = async(req, res) =>{
    try{
        const order = await getUserOrderService(req.params.id);
        !order ?
            res.status(404).json("No order exist under the provided ID!")
        :
            res.json(Success(order, "Successfully fetched the order details!"))
    }catch(error) {
        res.status(500).json(error.message);
    }
};

//Update order details controller
export const updateOrder = async(req, res) =>{
    try{
        const order = await updateOrderService(req.params.id, req.body);
        !order ?
            res.status(404).json("No order exist under the provided ID!")
        :
            res.json(Success(order, "Successfully updated order details!"))
    }catch(error) {
        res.status(500).json(error.message);
    }
};

//Delete order details controller
export const deleteOrder = async(req, res) =>{
    try{
        const order = await deleteOrderService(req.params.id);
        !order ?
            res.status(404).json("No order exist under the provided ID!")
        :
            res.json(Success(order, "Successfully deleted order details!"))
    }catch(error) {
        res.status(500).json(error.message);
    }
};

//Get order requests controller
export const getOrderRequests = async(req, res) =>{
    try{
        const orders = await getOrderRequestsService(req.params.seller);
        orders.length === 0 ?
            res.status(404).json("No requests exist under the provided seller!")
        :
            res.json(Success(orders, "Successfully fetched the order requests!"))
    }catch(error){
        res.status(500).json(error.message);
    }
};

//Get report details controller
export const getReportDetails = async(req, res) =>{
    try{
        const orders = await getReportDetailsService(req.body)
        orders.length === 0 ?
            res.status(404).json("No orders are found!")
        :
            res.json(Success(orders, "Successfully fetched the orders within the date range!"))
    }catch(error) {
        res.status(500).json(error.message);
    }
}