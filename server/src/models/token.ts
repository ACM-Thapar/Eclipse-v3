import mongoose from "mongoose";
import { TokenDoc } from "../utils/types/schemas";
const tokenSchema = new mongoose.Schema(
  {
    tokens: {
      type: Number,
      min: 0,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: true,
  }
);

export const Token = mongoose.model<TokenDoc>("Token", tokenSchema);
