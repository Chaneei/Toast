const router = require("express").Router();
const Coffee = require("../models/Coffee");

//CREATE POST
router.post("/", async (req, res) => {
  const newCoffee = new Coffee(req.body);
  try {
    const savedPost = await newCoffee.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    let coffees;
    coffees = await Coffee.find();
    res.status(200).json(coffees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ID POSTS
router.get("/:id", async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    res.status(200).json(coffee);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
