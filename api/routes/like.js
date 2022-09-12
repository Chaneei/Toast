const router = require("express").Router();
const Like = require("../models/Like");

//Post Like
router.post("/", async (req, res) => {
  const newLike = new Like(req.body);
  try {
    const savedLike = await newLike.save();
    res.status(200).json(savedLike);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all likes
router.get("/", async (req, res) => {
  try {
    let likes;
    likes = await Like.find();
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/", async (req, res) => {
  try {
    await Like.deleteOne({ title: `${req.body.title}` });
    res.status(200).json("삭제완료");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
