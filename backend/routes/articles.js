const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  author: String,
});

const Article = mongoose.model("Article", ArticleSchema);

router.post("/", auth, async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.json(article);
});

router.get("/", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

module.exports = router;
