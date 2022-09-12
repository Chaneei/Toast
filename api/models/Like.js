const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema);
