import { Token } from "../models/token";
import { Request, Response } from "express";
import { Store } from "../models/store";
import { Order } from "../models/order";

async function addProduct(req: Request, res: Response) {
  //pull data

  const { item, price, description, quantity } = req.body;

  const product = new Store({
    item,
    price,
    description,
    quantity,
  });
  await product.save();

  return res.status(201).json({
    success: true,
    data: product,
  });
}

async function getAllProduct(req: Request, res: Response) {
  const store = await Store.find({});
  return res.status(200).json({
    success: true,
    data: store,
  });
}

async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await Store.findById(id);
  if (!product) {
    return res.status(400).json({
      success: false,
      data: "Product doesnt exist",
    });
  }
  return res.status(200).json({
    success: true,
    data: product,
  });
}

async function buyProduct(req: Request, res: Response) {
  const { id } = req.params;

  try {
    //fetch product
    const product = await Store.findById(id);

    if (!product) {
      throw new Error("product not found");
    }
    if (product.quantity < 1) {
      throw new Error("Product sold out");
    }
    //fetch user coins
    const user_tokens = await Token.findOne({ userId: req.user!.id });
    if (!user_tokens) {
      return res.status(500).json({
        success: false,
        data: "Server Error",
      });
    }
    if (user_tokens.tokens < product.price) {
      throw new Error("Insufficient tokens");
    }

    //fetch order
    const order = await Order.findOne({
      userId: req.user!.id,
      itemId: product.id,
    });
    if (order) {
      throw new Error("Already owned");
    }
    //product
    product.quantity = product.quantity - 1;

    //new order
    const newOrder = new Order({
      itemId: product.id,
      userId: req.user!.id,
    });
    //tokens
    user_tokens.tokens = user_tokens.tokens - product.price;

    //save
    await newOrder.save();
    await product.save();
    await user_tokens.save();
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        data: error.message,
      });
    }
  }
}

export { addProduct, getAllProduct, getProductById, buyProduct };
