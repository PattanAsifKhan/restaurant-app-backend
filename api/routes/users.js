const express = require("express");
const userRouter = express.Router();
const User = require("../models/users");
const { getRestaurantDetail } = require("../services/users");
const uuid = require("uuid-random");

/*Creating a New User, initally the orders would be zero while registering*/
userRouter.post("/register", (req, res, next) => {
  const user = new User({
    id: uuid(),
    name: req.body.name,
    email: req.body.email,
    orders: [],
  });
  user
    .save()
    .then((data) =>
      res.status(200).send({
        message: "User Registration Successful",
        userDetail: data,
      })
    )
    .catch((err) =>
      res.status(500).send({
        message: "User Registation Failed, Internal Server Error",
      })
    );
});

/*Returns List of All Users */
userRouter.get("/", (req, res, next) => {
  User.find()
    .then((data) => {
      res.status(200).send({
        message: "List of All Users",
        data: data,
      });
    })
    .catch((err) =>
      res.status(500).send({
        message: "Internal Server Error",
      })
    );
});

/* Orders given by a specific User, Projection only applied to orders field*/
userRouter.get("/:id/orders", (req, res, next) => {
  const id = req.params.id;
  User.find({ id: id }, { orders: 1 })
    .then((data) => {
      res.status(200).send({
        message: `List of All Orders by Given ID ${id}`,
        orders: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
});

/*Creating a Order, Checks if restaurant exists, if restaurant does not exist, returns bad request*/
userRouter.put("/:id/create-order", (req, res, next) => {
  const id = req.params.id;
  const orderObj = {
    orderId: uuid(),
    restaurantName: req.body.restaurantName,
    products: req.body.products,
  };
  const getDataofRestaurant = getRestaurantDetail(req.body.restaurantName);
  if (getDataofRestaurant != undefined) {
    User.findOneAndUpdate(
      { restaurantName: req.body.restaurantName },
      { $push: { orders: orderObj } }
    )
      .then((data) =>
        res.status(200).send({
          message: "Order Successful",
          data: orderObj,
        })
      )
      .catch((err) =>
        res.status(401).send({
          message: "Bad Request, No Such Restaurant Found",
        })
      );
  }
});
module.exports = userRouter;
