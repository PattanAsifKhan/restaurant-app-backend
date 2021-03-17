process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const app = require("../../../app.js");
const request = require("supertest");

describe("POST /users Creating a new user", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .post("/users/register")
      .send({
        name: "User Name",
        email: "user@email.com",
      })
      .then((res) => {
        const body = res.body;
        expect(body.message).to.equal("User Registration Successful");
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});

describe("POST /restaurants adding a new restaurant", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .post("/restaurants/add-restaurant")
      .send({
        name: "five",
        address: "Near NYC, NYC",
        items: [
          {
            itemId: 1,
            itemName: "Coffe",
            itemPrice: 2,
          },
          {
            itemId: 2,
            itemName: "chai",
            itemPrice: 2,
          },
          {
            itemId: 3,
            itemName: "mocha",
            itemPrice: 5,
          },
        ],
      })
      .then((res) => {
        const body = res.body;
        expect(body.message).to.equal("Restaurant Added Successfully");
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});
