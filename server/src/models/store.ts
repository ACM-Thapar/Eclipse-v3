import mongoose from "mongoose";
import { StoreDoc } from "../utils/types/schemas/";
const storeSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
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

export const Store = mongoose.model<StoreDoc>("Store", storeSchema);
