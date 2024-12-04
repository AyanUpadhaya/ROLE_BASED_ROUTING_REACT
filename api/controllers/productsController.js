const asyncHandler = require("../utils/asyncHandler");

const getProducts = asyncHandler(async (req, res, next) => {

    const products = [
      {
        id: "1",
        title: "Wireless Headphones",
        content:
          "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
      },
      {
        id: "2",
        title: "Smartphone",
        content:
          "Latest generation smartphone with a 6.7-inch display, 128GB storage, and a powerful camera.",
      },
      {
        id: "3",
        title: "Laptop",
        content:
          "Lightweight laptop with 16GB RAM, 512GB SSD, and a 15-inch display.",
      },
      {
        id: "4",
        title: "Smartwatch",
        content:
          "Fitness tracking smartwatch with heart rate monitor, GPS, and a variety of workout modes.",
      },
      {
        id: "5",
        title: "Bluetooth Speaker",
        content:
          "Portable Bluetooth speaker with 360-degree sound, 12-hour battery life, and water resistance.",
      },
    ];

    res.status(200).json(products);

});

module.exports = {getProducts};