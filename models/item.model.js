import mongoose from "mongoose";

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    name: String,
    price: String,
    quantity: Number,
    description: String,
    imageUrl: String
  },
  { versionKey: false },
);

export const Item = mongoose.model("Item", ItemSchema);
