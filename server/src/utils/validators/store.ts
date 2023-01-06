import { body } from "express-validator";
export const createProductArgs = [
  body("item").isString().withMessage("Item name is required"),
  body("price").isInt().withMessage("price required"),
  body("description").isString().withMessage("desc required"),
  body("quantity").isInt().withMessage("quantity required"),
];
