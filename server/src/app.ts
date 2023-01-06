import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes";
import { storeRouter } from "./routes/store";
export const app = express();

//configs
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api/user", userRouter);
app.use("/api/store", storeRouter);
app.all("*", async (req, res) => {
  res.json("Not Found");
});
