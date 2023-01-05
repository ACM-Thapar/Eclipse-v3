import mongoose, { mongo } from "mongoose";
import { OrderDoc } from "../utils/types/schemas";

const orderSchema = new mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: true,
  }
);

export const Order = mongoose.model<OrderDoc>("Order", orderSchema);
