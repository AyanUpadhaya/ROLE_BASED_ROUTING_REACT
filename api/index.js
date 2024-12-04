require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

//app config
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongoose
const connection_string = process.env.MOGO_URI;
mongoose
  .connect(connection_string)
  .then(() => {
    app.listen(3000, () => {
      console.log("App is running on port: 3000");
      console.log("Database connection successfull");
    });
  })
  .catch((err) => {
    console.log("Failed to connect db ", err);
    process.exit(1);
  });

//routes
app.use(userRoutes);
app.use(productRoutes);
app.get("/", (req, res) => {
  res.send("Express playground is running");
});

app.use(errorHandler);
