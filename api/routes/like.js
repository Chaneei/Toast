const router = require("express").Router();
const Like = require("../models/Like");

//CREATE LIKE
router.post("/", async (req, res) => {
  const newLike = new Like(req.body);
  try {
    const savedLike = await newLike.save();
    res.status(200).json(savedLike);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get ALL LIKES
router.get("/", async (req, res) => {
  try {
    let likes;
    likes = await Like.find();
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ID LIKE
router.get("/:id", async (req, res) => {
  try {
    const like = await Like.findById(req.params.id);
    res.status(200).json(like);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE LIKE
router.delete("/:id", async (req, res) => {
  try {
    const like = await Like.findById(req.params.id);
    await like.delete();
    res.status(200).json("Like has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
