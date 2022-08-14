import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderItemSchema = new Schema({
    itemId:{
        type: String,
        required: true
    },
    sellerId:{
        type: String,
        required: true
    },
    sellerName:{
        type: String,
    },
    itemName:{
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: String
    },
    imageUrl: {
        type: String
    }
})

const OrderSchema = new Schema({
        orderId: {
            type: String,
            required: true
        },
        userId:{
            type: String,
            required: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        contactNo: {
            type: String
        },

        items : OrderItemSchema,

        status: {
            type: String
        },
        total:{
            type: String
        }
    },
    { timestamps: true }
);

export const Order = mongoose.model("Orders", OrderSchema);