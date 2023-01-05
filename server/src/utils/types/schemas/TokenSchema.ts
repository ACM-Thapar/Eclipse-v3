import { Document, ObjectId } from "mongoose";
export interface TokenDoc extends Document {
  tokens: number;
  userId: ObjectId;
}
