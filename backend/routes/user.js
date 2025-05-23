const express = require("express");
const multer = require("multer");
const images = require("../models/imageModel.js");
const userImages = require("../models/userImageModel.js");
const article = require("../models/articleModel.js");


const storageHome = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images/home");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const uploadHome = multer({ storage: storageHome });

const storageArticle = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/articleImages");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const uploadArticle = multer({ storage: storageArticle });

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images/user");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadUser = multer({ storage: storageUser });

//controller functions
const { signupUser, loginUser, createcheckoutSession } = require("../controllers/userController");

const router = express.Router();

//login route
router.post("/login", loginUser);

//google login route

//signup route
router.post("/signup", signupUser);

//create-checkout-session route
router.post("/create-checkout-session", createcheckoutSession)

//admin image upload route
router.post(
  "/uploadimage/home",
  uploadHome.single("file"),
  async (req, res) => {
    console.log(req.body);
    const fileName = req.file.filename;

    try {
      await images.create({ image: fileName });
      res.status(200);
    } catch (error) {
      res.status(404);
      console.log(error);
    }
  }
);


//Article Upload route
router.post(
  "/uploadarticle",
  uploadArticle.single("file"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    // Extract the title and description from the request body
    const title = req.body.title;
    const desc = req.body.description;
    const fileName = req.file.filename;

    // Ensure title and description are provided
    if (!title || !desc) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    try {
      // Create a new article record with title, image, and description
      await article.create({ title: title, image: fileName, description: desc });
      res.status(200).json({ message: "Article uploaded successfully" });
    } catch (error) {
      res.status(404).json({ error: "Article upload failed" });
      console.log(error);
    }
  }
);

// Get all articles route
router.get("/getarticles", async (req, res) => {
  try {
    const articles = await article.find({});
    res.status(200).json({ status: "ok", data: articles });
  } catch (error) {
    res.status(404).json({ error: "Failed to retrieve articles" });
    console.log(error);
  }
});


//user image upload route
router.post(
  "/uploadimage/user",
  uploadUser.any("file"),
  async (req, res) => {
    console.log(req.body);
    const fileName = req.body;

    try {
      await userImages.create({ image: fileName });
      res.status(200);
    } catch (error) {
      res.status(404);
      console.log(error);
    }
  }
);

//home image retrieval route
router.get("/getimage", async (req, res) => {
  try {
    images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.status(404);
    console.log(error);
  }
});

module.exports = router;
