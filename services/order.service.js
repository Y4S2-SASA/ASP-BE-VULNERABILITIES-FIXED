import { 
    saveOrder, 
    getUserOrders, 
    getUserOrder, 
    updateOrder,
    deleteOrder,
    getOrderRequests,
    getReportDetails

} from "../repository/index.js";
import AppError from "../utils/appError.js";

//Save order details service
export const saveOrderService = async (data) =>{
    const {
        buyer,
        item,
        seller,
        orderId,
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
};

//Get all orders related to a specific user service
export const getUserOrdersService = async (buyer) =>{
    try{
        const orders = await getUserOrders(buyer);
        return Promise.resolve(orders)
    }catch(error) {
        throw new AppError(error.message, error.status);
    }
};

//Get selected order details service
export const getUserOrderService = async(id) =>{
    try{
        const order = await getUserOrder(id);
        return Promise.resolve(order);
    }catch(error) {
        throw new AppError(error.message, error.status);
    }
};

//Update order details service
export const updateOrderService = async (id, data) =>{
    try{
        const order = await updateOrder(id, data);
        return Promise.resolve(order);
    }catch(error) {
        throw new AppError(error.message, error.status);
    }
};

//Delete order details service
export const deleteOrderService = async (id) =>{
    try{
        const order = await deleteOrder(id);
        return Promise.resolve(order);
    }catch(error){
        throw new AppError(error.mesage, error.status);
    }
};

//Fetch Order requests
export const getOrderRequestsService = async (seller) =>{
    try{
        const orders = await getOrderRequests(seller);
        return Promise.resolve(orders)
    }catch(error) {
        throw new AppError(error.message, error.status);
    }
};

//Fetch report details service
export const getReportDetailsService = async({startDate, endDate}) =>{
    try{
        const response = await getReportDetails(startDate, endDate);
        const buyers = new Map();
        response.forEach(res => {
            let buyer = res.buyer._id + ',' + res.buyer.firstName + ' ' + res.buyer.lastName;
            const buyerCount = buyers.get(buyer) === undefined ? 0 : buyers.get(buyer);
            buyers.set(buyer, buyerCount + 1)
        })
        const res = Object.fromEntries(buyers);
        return Promise.resolve(res);
    }catch(error) {
        throw new AppError(error.message, error.status);
    }
}