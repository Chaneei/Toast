const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    product: [
      {
        productId: {
          type: String,
        },
        img: {
          type: String,
          default: "",
        },
        name: {
          type: String,
          required: true,
        },
        engname: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema);
