const mongoose = require("mongoose");

const BeverageSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    engtitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beverage", BeverageSchema);
