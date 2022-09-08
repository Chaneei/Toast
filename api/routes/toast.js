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

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    let toasts;
    toasts = await Toast.find();
    res.status(200).json(toasts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ID POSTS
router.get("/:id", async (req, res) => {
  try {
    const toast = await Toast.findById(req.params.id);
    res.status(200).json(toast);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
