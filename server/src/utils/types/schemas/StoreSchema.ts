import mongoose from "mongoose";

export interface StoreDoc extends mongoose.Document {
  item: string;
  price: number;
  description: string;
  quantity: number;
}
