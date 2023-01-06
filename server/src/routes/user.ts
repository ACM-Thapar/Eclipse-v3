import express from "express";
import { isLoggedIn, requestValidator } from "../middlewares";
import { userArgs } from "../utils/validators";
import { getCurrentUser, login, signup } from "../controllers/user";

const router = express.Router();

router.route("/").get(isLoggedIn, getCurrentUser);
router.route("/signup").post(userArgs, requestValidator, signup);
router.route("/login").post(userArgs, requestValidator, login);
router.route("/signout").post(isLoggedIn, login);

export { router as userRouter };
