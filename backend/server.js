require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const { pool, query, initializeDatabase } = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const createBlogsRouter = require("./routes/blogs");
const createPublicBlogsRouter = require("./routes/publicBlogs");
const ensureBlogTables = require("./utils/ensureBlogTables");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.get("/api/user/getarticles", async (req, res) => {
  try {
    await ensureBlogTables();

    const rows = await query(
      `SELECT title, image, content
       FROM posts
       WHERE status = 'published'
       ORDER BY created_at DESC`,
    );

    return res.status(200).json({
      status: "ok",
      data: rows.map((row) => ({
        title: row.title,
        image: row.image,
        description: row.content,
      })),
    });
  } catch (error) {
    console.error("[legacy articles][list]", error);
    return res.status(500).json({ error: "Failed to retrieve articles" });
  }
});

app.use("/api", postRoutes);
app.use("/api", categoryRoutes);
app.use("/api/blogs", createBlogsRouter({ queryAsync: query }));
app.use("/blogs", createPublicBlogsRouter({ queryAsync: query }));

const startServer = async () => {
  await initializeDatabase();
  await pool.query("SELECT 1");
  console.log("MySQL connected successfully.");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
