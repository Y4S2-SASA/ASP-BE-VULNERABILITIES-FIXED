import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
        orderId:{
            type: String
        },
        buyer:{
            type: Schema.Types.ObjectId,
            ref: "user"
        },
        item :{
            type: Schema.Types.ObjectId,
            ref: "Item"
        },
        quantity:{
            type: Number
        },
        status: {
            type: String
        },
        total:{
            type: Number
        }
    },
    { timestamps: true }
);

export const Order = mongoose.model("Orders", OrderSchema);