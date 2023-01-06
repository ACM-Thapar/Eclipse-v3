import mongoose from "mongoose";
import { connectDb } from "../database/connection";
import "dotenv/config";
import request from "supertest";
import { app } from "../app";

interface product {
  success: true;
  data: {
    item: string;
    price: number;
    description: string;
    quantity: number;
    id: string;
  };
}
declare global {
  function getCookie(): Promise<string[]>;
  function createProduct(price?: number): Promise<product>;
}

beforeAll(async () => {
  await connectDb(process.env.MONGO_URI_TESTING!);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.drop();
  }
});

// afterAll(done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close()
//   done()
// })

global.createProduct = async (price = 100) => {
  const resp = await request(app)
    .post("/api/store")
    .send({
      item: "Item1",
      price,
      description: "amasipfasfpopoa",
      quantity: 10,
    })
    .expect(201);
  return resp.body;
};

global.getCookie = async () => {
  const email = "joe@gmail.com";
  const password = "zxcvbnm";

  const resp = await request(app)
    .post("/api/user/signup")
    .send({ email, password })
    .expect(201);

  const cookie = resp.get("Set-Cookie");

  return cookie;
};
