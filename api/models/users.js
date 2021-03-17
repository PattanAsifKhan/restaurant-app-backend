const mongoose = require("mongoose");
const product = require("./products");

const order = new mongoose.Schema({
  orderId: String,
  RestaurantName: String,
  products: [product],
});

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  orders: [order],
});

module.exports = mongoose.model("Users", UserSchema);
