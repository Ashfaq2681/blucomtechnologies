const express = require("express");
const uploadPostImage = require("../middleware/uploadPostImage");
const {
  createPost,
  getPublishedPosts,
  getPostByIdentifier,
  getDashboardPosts,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/posts", getPublishedPosts);
router.get("/dashboard/posts", getDashboardPosts);
router.get("/posts/:identifier", getPostByIdentifier);
router.post("/posts", uploadPostImage.single("image"), createPost);
router.put("/posts/:id", uploadPostImage.single("image"), updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
