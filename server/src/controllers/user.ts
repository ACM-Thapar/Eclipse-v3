import { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { Token } from "../models/token";

async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  //check user

  try {
    const user_exists = await User.findOne({ email });

    if (user_exists) {
      return res.status(400).json({
        success: false,
        data: `Account with email id ${email} alread exists`,
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    // create a new user

    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    //generate jwt

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRATION!,
      }
    );
    //award tokens
    const user_token = new Token({
      userId: user.id,
      tokens: 1000,
    });
    await user_token.save();

    res.cookie(process.env.COOKIE_NAME!, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV! === "prod",
    });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({
        success: false,
        data: err.message,
      });
    }
  }
}

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  //searching user
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid Credentials");

    //check password

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid Credentials");

    //generate jwt

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRATION!,
      }
    );

    res.cookie(process.env.COOKIE_NAME!, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV! === "prod",
    });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        success: false,
        data: err.message,
      });
    }
  }
}

async function getCurrentUser(req: Request, res: Response) {
  const user_tokens = await Token.findOne({ userId: req.user!.id });
  if (!user_tokens) {
    return res.status(500).json({
      success: false,
      data: "server error",
    });
  }
  const user = {
    id: req.user!.id,
    email: req.user!.email,
    tokens: user_tokens.tokens,
  };
  res.status(200).json({
    success: true,
    data: user,
  });
}
async function signout(req: Request, res: Response) {
  req.cookies[process.env.COOKIE_NAME!] = null;

  return res.json({ success: true });
}
export { signup, login, getCurrentUser, signout };
