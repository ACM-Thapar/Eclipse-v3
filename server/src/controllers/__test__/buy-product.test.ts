import request from "supertest";
import { app } from "../../app";
it("successfully order a product", async () => {
  const cookie = await global.getCookie();
  const product = await global.createProduct();

  const response = await request(app)
    .post(`/api/store/${product.data.id}`)
    .set("Cookie", cookie)
    .send({})
    .expect(201);
  expect(response.body.success).toEqual(true);
});

it("reorder same product", async () => {
  const cookie = await global.getCookie();
  const product = await global.createProduct();

  const response = await request(app)
    .post(`/api/store/${product.data.id}`)
    .set("Cookie", cookie)
    .send({})
    .expect(201);
  expect(response.body.success).toEqual(true);

  const resp = await request(app)
    .post(`/api/store/${product.data.id}`)
    .set("Cookie", cookie)
    .send({})
    .expect(400);
  expect(resp.body.success).toEqual(false);
});

it("insufficient token buy", async () => {
  const cookie = await global.getCookie();
  const product = await global.createProduct(10000);

  const response = await request(app)
    .post(`/api/store/${product.data.id}`)
    .set("Cookie", cookie)
    .send({})
    .expect(400);
  expect(response.body.success).toEqual(false);
});
