const mongoose = require("mongoose");
const item = new mongoose.Schema({
  itemId: String,
  itemPrice: String,
  itemName: String,
});

const RestaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  items: [item],
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);
