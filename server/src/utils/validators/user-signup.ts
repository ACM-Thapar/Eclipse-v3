import { body } from "express-validator";
export const userArgs = [
  body("email").isEmail().withMessage("Email is missing"),
  body("password").isString().withMessage("Password is missing"),
];
