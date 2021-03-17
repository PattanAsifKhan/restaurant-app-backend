process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const app = require("../../../app.js");
const request = require("supertest");

describe("PUT Creating A New Order", () => {
  it("OK, new order", (done) => {
    request(app)
      .put("/users/9230290d-55c3-4fed-98d6-13f107952e9e/create-order")
      .send({
        restaurantName: "First",
        products: [
          {
            productId: 1,
            productName: "Coffe",
            productQuantity: 2,
            price: 2,
          },
          {
            productId: 2,
            productName: "First Meal",
            productQuantity: 1,
            price: 4,
          },
        ],
      })
      .then((res) => {
        const body = res.body;
        expect(body.message).to.equal("Order Successful");
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});
