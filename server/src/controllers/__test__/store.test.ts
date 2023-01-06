import request from "supertest";
import { app } from "../../app";

it("Create product in store successfully", async () => {
  const response = await request(app)
    .post("/api/store/")
    .send({
      item: "Item1",
      price: 100,
      description: "asipfmaipfmasif",
      quantity: 10,
    })
    .expect(201);

  expect(response.body.success).toEqual(true);
  expect(response.body.data.item).toEqual("Item1");
});

it("Miss one of the args", async () => {
  const response = await request(app)
    .post("/api/store/")
    .send({
      item: "Item1",
      // price: 100,
      description: "asipfmaipfmasif",
      quantity: 10,
    })
    .expect(400);
  expect(response.body.success).toEqual(false);
});

it("get all products ", async () => {
  await global.createProduct();

  const response = await request(app).get("/api/store").expect(200);
  expect(response.body.success).toEqual(true);
});

it("get product by id successfully", async () => {
  const product = await global.createProduct();
  const response = await request(app)
    .get(`/api/store/${product.data.id}`)
    .expect(200);

  expect(response.body.success).toEqual(true);
  expect(response.body.data.item).toEqual("Item1");
});

it("get product by id using invalid id", async () => {
  await global.createProduct();

  const response = await request(app)
    .get(`/api/store/63b8a445998dd4689edbbcff`)
    .expect(400);
  expect(response.body.data).toEqual("Product doesnt exist");
  expect(response.body.success).toEqual(false);
});
