import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes";
export const app = express();

//configs
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api/user", userRouter);
app.all("*", async (req, res) => {
  res.json("Not Found");
});
