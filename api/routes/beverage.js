const router = require("express").Router();
const Beverage = require("../models/Beverage");

//CREATE POST
router.post("/", async (req, res) => {
  const newBeverage = new Beverage(req.body);
  try {
    const savedBev = await newBeverage.save();
    res.status(200).json(savedBev);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    let beverages;
    beverages = await Beverage.find();
    res.status(200).json(beverages);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ID POSTS
router.get("/:id", async (req, res) => {
  try {
    const beverage = await Beverage.findById(req.params.id);
    res.status(200).json(beverage);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
