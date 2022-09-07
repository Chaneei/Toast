const router = require("express").Router();
const Toast = require("../models/Toast");

//CREATE POST
router.post("/", async (req, res) => {
  const newToast = new Toast(req.body);
  try {
    const savedPost = await newToast.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
