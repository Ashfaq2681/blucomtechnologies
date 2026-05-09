require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoute = require("./routes/user");

const app = express();

// 1️⃣ Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 2️⃣ Static file handling for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 3️⃣ Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// 4️⃣ API Routes
app.use("/api/user", userRoute);

// 5️⃣ Connect MongoDB in Your Backend (Server.js)
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URL_BlucomTech || process.env.ATLAS_URI;

    if (!mongoUri) {
      throw new Error("MongoDB connection string is missing. Set ATLAS_URI or MONGO_URL_BlucomTech in .env.");
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");

    // Start server only after successful DB connection
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

// Call the MongoDB connection function
connectDB();
const articleRoutes = require("./routes/articleRoutes");

app.use("/api/articles", articleRoutes);
