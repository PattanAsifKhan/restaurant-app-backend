process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const app = require("../../../app.js");
const request = require("supertest");

describe("GET /users", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .get("/users")
      .then((res) => {
        const body = res.body;
        expect(body.data.length).to.greaterThan(0);
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});

describe("GET /orders by user ID", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .get("/users/45041298-014a-415a-a368-f3adb7896b3a/orders")
      .then((res) => {
        const body = res.body;
        expect(body.orders.length).to.gte(0);
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});

describe("GET /restraunts", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .get("/restaurants")
      .then((res) => {
        const body = res.body;
        expect(body.data.length).to.greaterThan(0);
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});

describe("GET /restraunt-items by name", () => {
  it("OK, getting list of users", (done) => {
    request(app)
      .get("/restaurants/second")
      .then((res) => {
        const body = res.body;
        expect(body.data.length).to.greaterThan(0);
        done();
      })
      .catch((err) => done(err));
  }).timeout(2000);
});
