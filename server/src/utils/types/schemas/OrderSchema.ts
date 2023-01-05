import { ObjectId, Document } from "mongoose";
export interface OrderDoc extends Document {
  itemId: ObjectId;
  userId: ObjectId;
}
