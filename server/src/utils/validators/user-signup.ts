import { body } from "express-validator";
export const userSignupArgs = [
  body("name").isString().withMessage("Name is missing"),
  body("password").isString().withMessage("Name is missing"),
];
