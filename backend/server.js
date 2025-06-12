const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://localhost:27017/blucom", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => console.log("Server running on port 5000"));
