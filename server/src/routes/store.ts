import express from "express";
import {
  addProduct,
  buyProduct,
  getAllProduct,
  getProductById,
} from "../controllers/store";
import { createProductArgs } from "../utils/validators";
import { isLoggedIn, requestValidator } from "../middlewares";

const router = express.Router();

router.route("/").post(createProductArgs, requestValidator, addProduct);
router.route("/").get(getAllProduct);
router.route("/:id").get(getProductById);
router.route("/:id").post(isLoggedIn, buyProduct);

export { router as storeRouter };
