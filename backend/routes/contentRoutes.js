const express = require("express");
const uploadPostImage = require("../middleware/uploadPostImage");
const {
  getContents,
  getContentByIdentifier,
  createContent,
  updateContent,
  deleteContent,
} = require("../controllers/contentController");

const router = express.Router();

router.get("/content", getContents);
router.get("/content/:identifier", getContentByIdentifier);
router.post("/content", uploadPostImage.single("image"), createContent);
router.put("/content/:id", uploadPostImage.single("image"), updateContent);
router.delete("/content/:id", deleteContent);

module.exports = router;
