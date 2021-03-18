Please do a **npm install** before project execution

**RUN TEST**

npm run test

**RUN DEV**

npm run start


***Sample api calls for the product***

***For Users***

**Adding a User**

POST localhost:3000/users/register

request body

{
    "name":"Second User",
    "email":"seconduser@email.com"
}

**Creating a Order**

PUT localhost:3000/users/9230290d-55c3-4fed-98d6-13f107952e9e/create-order

{
    "restaurantName":"First",
    "products":[{
        "productId":1,
        "productName":"Coffe",
        "productQuantity":2,
        "price":2
    },{
        "productId":2,
        "productName":"First Meal",
        "productQuantity":1,
        "price":4
    }]
}

**List All Users**

GET localhost:3000/users

**Get All Orders of a user**

localhost:3000/users/9230290d-55c3-4fed-98d6-13f107952e9e/orders

***For Restaurant***

**Adding a Restaurant**

POST localhost:3000/restaurants/add-restaurant

{
    "name": "First Restaurant",
    "address": "Near NYC, NYC",
    "items": [
        {
            "itemId": 1,
            "itemName": "Coffe",
            "itemPrice": 2
        },
        {
            "itemId": 2,
            "itemName": "chai",
            "itemPrice": 2
        },
        {
            "itemId": 3,
            "itemName": "mocha",
            "itemPrice": 5
        }
    ]
}

**List All Restaurants**

GET localhost:3000/restaurants/

