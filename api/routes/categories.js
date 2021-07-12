const router = require("express").Router();
const Category = require("../models/Category");

// Create Categories

router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        req.status(500).json(err);
    }
});

// Get Category

router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        req.status(500).json(err);
    }
});


module.exports = router;