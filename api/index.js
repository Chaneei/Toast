const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const toastRoute = require("./routes/toast");

require("dotenv").config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/toast", toastRoute);

app.listen(5000, () => {
  console.log("BackEnd server is running!");
});
