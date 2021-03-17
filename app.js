/*Initial Set Up code*/
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to database");
});

//Establishing routes and connecting to various routes
const userRoutes = require("./api/routes/users");
const RestaurantRoutes = require("./api/routes/restaurant");
app.use("/users", userRoutes);
app.use("/restaurants", RestaurantRoutes);

//Server Connection
var server = app.listen(process.env.PORT, () => {
  console.log("Listening at :3000...");
});
module.exports = server;
