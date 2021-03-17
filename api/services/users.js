const Restaurant = require("../models/restuarant");

async function getRestaurantDetail(data) {
  const RestaurantId = await Restaurant.find({})
    .then((res) => {
      return res.filter((item) => {
        if (item.name == data) return item;
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return RestaurantId[0].id;
}

module.exports = { getRestaurantDetail };
