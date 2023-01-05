import mongoose from "mongoose";
import { connectDb } from "../database/connection";
import "dotenv/config";
import request from "supertest";
import { app } from "../app";

declare global {
  function getCookie(): Promise<string[]>;
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
