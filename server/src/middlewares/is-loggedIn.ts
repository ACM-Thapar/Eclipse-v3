import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { MongooseError } from "mongoose";

interface Payload {
  id: string;
  email: string;
}
interface UserPayload {}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

async function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  // fetching cookie
  const decoded = req.cookies[process.env.COOKIE_NAME!];

  if (!decoded) {
    throw new Error("NOT AUTHORISED");
  }
  try {
    // const payload: Payload = jwt.verify(decoded, process.env.JWT_SECRET!);
    //fetch user
    const user = {};
    // const user = (await User.findById(payload.id)) as UserPayload;
    req.user = user;
  } catch (err) {
    if (err instanceof MongooseError) {
      return res.json("Server error");
    }
    if (err instanceof Error) {
      return res.json(err.message);
    }
    return res.json("Something went wrong!!");
  }
  next();
}

export { isLoggedIn };
