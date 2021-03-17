const mongoose = require("mongoose");

const product = new mongoose.Schema({
  productId: Number,
  productName: String,
  productQuantity: Number,
  productPrice: Number,
});

module.exports = product;
