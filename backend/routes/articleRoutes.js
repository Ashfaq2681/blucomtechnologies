const express = require("express");
const Article = require("../models/Article");


const router = express.Router();

//Create Article
router.post("/create", async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(500).json({ message: "Error saving article", error });
    }
});

// Get All Articles
router.get("/", async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching articles", error });
    }
});

//Get Single Article by ID
router.get("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (error) {
        res.status(404).json({ message: "Article not found" });
    }
});

//Update Article
router.put("/:id", async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ message: "Error updating article", error });
    }
});

//Delete Article
router.delete("/:id", async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting article", error });
    }
});

module.exports = router;
