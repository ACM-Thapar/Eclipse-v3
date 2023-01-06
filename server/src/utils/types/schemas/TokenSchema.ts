import mongoose, { ObjectId } from "mongoose";
export interface TokenDoc extends mongoose.Document {
  tokens: number;
  userId: ObjectId;
}
