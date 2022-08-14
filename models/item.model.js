import mongoose from "mongoose";

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    name: String,
    price: String,
    quantity: Number,
    description: String,
    imageUrl: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    }
  },
  { timestamps: true },
  { versionKey: false },
);

ItemSchema.index({ createdAt: 1 });

export const Item = mongoose.model("Item", ItemSchema);
