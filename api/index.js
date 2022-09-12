const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const toastRoute = require("./routes/toast");
const coffeeRoute = require("./routes/coffee");
const beverageRoute = require("./routes/beverage");
const likeRoute = require("./routes/like");

require("dotenv").config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/toast", toastRoute);
app.use("/api/coffee", coffeeRoute);
app.use("/api/beverage", beverageRoute);
app.use("/api/like", likeRoute);

app.listen(5000, () => {
  console.log("BackEnd server is running!");
});
