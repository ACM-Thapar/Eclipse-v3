import { ObjectId } from "mongoose";

export interface UserSchema {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}
