const express = require("express");
const RestaurantRouter = express.Router();
const Restaurant = require("../models/restuarant");
const uuid = require("uuid-random");

/*GET LIST OF ALL RESTAURANTS*/
RestaurantRouter.get("/", (req, res, next) => {
  Restaurant.find()
    .then((data) => {
      res.status(200).send({
        message: "List of All restaurants",
        data: data,
      });
    })
    .catch((err) =>
      res.status(500).send({
        message: "Internal Server Error",
      })
    );
});

/*ADD A NEW RESTAURANT*/
RestaurantRouter.post("/add-restaurant", (req, res, next) => {
  const restaurant = new Restaurant({
    id: uuid(),
    name: req.body.name,
    address: req.body.address,
    items: req.body.items,
  });
  restaurant
    .save()
    .then((data) => {
      res.status(200).send({
        message: "Restaurant Added Successfully",
        data: data,
      });
    })
    .catch((err) =>
      res.status(500).send({
        message: "Internal Server Error",
      })
    );
});

/*Given Restaurant Name, Returns All Items Present in restaurant*/
RestaurantRouter.get("/:name", (req, res, next) => {
  const name = req.params.name;
  Restaurant.find({ name: name }, { items: 1 })
    .then((data) => {
      res.status(200).send({
        message: "List of All Items Available",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
});

module.exports = RestaurantRouter;
