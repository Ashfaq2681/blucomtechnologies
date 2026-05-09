const { query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");
const slugify = require("../utils/slugify");
const fs = require("fs");
const path = require("path");
const VALID_SECTIONS = new Set([
  "featured",
  "editor",
  "latest",
  "analytics",
  "guides",
  "reports",
  "insights",
  "archive",
]);

const buildImageUrl = (req, imagePath) => {
  if (!imagePath) {
    return "";
  }

  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  const normalizedPath = imagePath.replace(/\\/g, "/");
  return `${req.protocol}://${req.get("host")}${normalizedPath.startsWith("/") ? "" : "/"}${normalizedPath}`;
};

const mapPost = (req, row) => ({
  id: row.id,
  title: row.title,
  slug: row.slug,
  category: row.category,
  subcategory: row.subcategory || "",
  content: row.content,
  image: buildImageUrl(req, row.image),
  imagePath: row.image || "",
  tags: row.tags
    ? row.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [],
  status: row.status,
  featured: Boolean(row.featured),
  section: VALID_SECTIONS.has(row.section) ? row.section : "",
  createdAt: row.created_at,
});

const createPost = async (req, res) => {
  try {
    await ensureBlogTables();

    const {
      title,
      slug,
      category,
      subcategory,
      content,
      tags,
      status,
      featured,
      section,
    } = req.body;

    const normalizedTitle = (title || "").trim();
    const normalizedSlug = slugify(slug || normalizedTitle);
    const normalizedCategory = (category || "").trim();
    const normalizedSubcategory = (subcategory || "").trim();
    const normalizedContent = (content || "").trim();
    const normalizedTags = (tags || "").trim();
    const normalizedStatus = status === "published" ? "published" : "draft";
    const normalizedSection = VALID_SECTIONS.has(section) ? section : "latest";
    const normalizedFeatured =
      featured === true ||
      featured === "true" ||
      featured === "1" ||
      featured === 1;

    if (!normalizedTitle || !normalizedSlug || !normalizedCategory || !normalizedContent) {
      return res.status(400).json({
        message: "Title, slug, category, and content are required.",
      });
    }

    const duplicateRows = await query(
      "SELECT id FROM posts WHERE slug = ? LIMIT 1",
      [normalizedSlug],
    );

    if (duplicateRows.length > 0) {
      return res.status(409).json({ message: "A post with this slug already exists." });
    }

    const imagePath = req.file ? `/uploads/posts/${req.file.filename}` : null;

    const result = await query(
      `INSERT INTO posts
        (title, slug, category, subcategory, content, image, tags, status, featured, section)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        normalizedTitle,
        normalizedSlug,
        normalizedCategory,
        normalizedSubcategory || null,
        normalizedContent,
        imagePath,
        normalizedTags || null,
        normalizedStatus,
        normalizedFeatured,
        normalizedSection,
      ],
    );

    const rows = await query("SELECT * FROM posts WHERE id = ?", [result.insertId]);

    return res.status(201).json(mapPost(req, rows[0]));
  } catch (error) {
    console.error("[posts][create]", error);
    return res.status(500).json({ message: "Failed to create post." });
  }
};

const getPublishedPosts = async (req, res) => {
  try {
    await ensureBlogTables();

    const rows = await query(
      `SELECT *
       FROM posts
       WHERE status = 'published'
       ORDER BY featured DESC, created_at DESC`,
    );

    return res.json(rows.map((row) => mapPost(req, row)));
  } catch (error) {
    console.error("[posts][list]", error);
    return res.status(500).json({ message: "Failed to fetch posts." });
  }
};

const getPostByIdentifier = async (req, res) => {
  try {
    await ensureBlogTables();

    const { identifier } = req.params;
    const isNumericId = /^\d+$/.test(identifier);

    const rows = isNumericId
      ? await query(
          "SELECT * FROM posts WHERE id = ? LIMIT 1",
          [Number(identifier)],
        )
      : await query(
          "SELECT * FROM posts WHERE slug = ? LIMIT 1",
          [identifier],
        );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Post not found." });
    }

    const post = rows[0];
    if (post.status !== "published" && !isNumericId) {
      return res.status(404).json({ message: "Post not found." });
    }

    return res.json(mapPost(req, post));
  } catch (error) {
    console.error("[posts][single]", error);
    return res.status(500).json({ message: "Failed to fetch post." });
  }
};

const getDashboardPosts = async (req, res) => {
  try {
    await ensureBlogTables();

    const rows = await query(
      "SELECT * FROM posts ORDER BY created_at DESC",
    );

    return res.json(rows.map((row) => mapPost(req, row)));
  } catch (error) {
    console.error("[posts][dashboard]", error);
    return res.status(500).json({ message: "Failed to fetch dashboard posts." });
  }
};

const updatePost = async (req, res) => {
  try {
    await ensureBlogTables();

    const postId = Number(req.params.id);
    if (!Number.isInteger(postId) || postId <= 0) {
      return res.status(400).json({ message: "Invalid post id." });
    }

    const existingRows = await query("SELECT * FROM posts WHERE id = ? LIMIT 1", [postId]);
    if (existingRows.length === 0) {
      return res.status(404).json({ message: "Post not found." });
    }

    const existingPost = existingRows[0];
    const {
      title,
      slug,
      category,
      subcategory,
      content,
      tags,
      status,
      featured,
      section,
    } = req.body;

    const normalizedTitle = (title || existingPost.title || "").trim();
    const normalizedSlug = slugify(slug || normalizedTitle);
    const normalizedCategory = (category || existingPost.category || "").trim();
    const normalizedSubcategory =
      (subcategory !== undefined ? subcategory : existingPost.subcategory || "").trim();
    const normalizedContent = (content || existingPost.content || "").trim();
    const normalizedTags =
      (tags !== undefined ? tags : existingPost.tags || "").toString().trim();
    const normalizedStatus = status === "published" ? "published" : "draft";
    const normalizedSection = VALID_SECTIONS.has(section) ? section : existingPost.section || "latest";
    const normalizedFeatured =
      featured === true ||
      featured === "true" ||
      featured === "1" ||
      featured === 1;

    if (!normalizedTitle || !normalizedSlug || !normalizedCategory || !normalizedContent) {
      return res.status(400).json({
        message: "Title, slug, category, and content are required.",
      });
    }

    const duplicateRows = await query(
      "SELECT id FROM posts WHERE slug = ? AND id <> ? LIMIT 1",
      [normalizedSlug, postId],
    );

    if (duplicateRows.length > 0) {
      return res.status(409).json({ message: "A post with this slug already exists." });
    }

    let imagePath = existingPost.image;
    if (req.file) {
      imagePath = `/uploads/posts/${req.file.filename}`;

      if (existingPost.image) {
        const absoluteOldPath = path.join(__dirname, "..", existingPost.image.replace(/^\/+/, ""));
        if (fs.existsSync(absoluteOldPath)) {
          fs.unlinkSync(absoluteOldPath);
        }
      }
    }

    await query(
      `UPDATE posts
       SET title = ?, slug = ?, category = ?, subcategory = ?, content = ?, image = ?, tags = ?, status = ?, featured = ?, section = ?
       WHERE id = ?`,
      [
        normalizedTitle,
        normalizedSlug,
        normalizedCategory,
        normalizedSubcategory || null,
        normalizedContent,
        imagePath,
        normalizedTags || null,
        normalizedStatus,
        normalizedFeatured,
        normalizedSection,
        postId,
      ],
    );

    const rows = await query("SELECT * FROM posts WHERE id = ? LIMIT 1", [postId]);
    return res.json(mapPost(req, rows[0]));
  } catch (error) {
    console.error("[posts][update]", error);
    return res.status(500).json({ message: "Failed to update post." });
  }
};

const deletePost = async (req, res) => {
  try {
    await ensureBlogTables();

    const postId = Number(req.params.id);
    if (!Number.isInteger(postId) || postId <= 0) {
      return res.status(400).json({ message: "Invalid post id." });
    }

    const existingRows = await query("SELECT * FROM posts WHERE id = ? LIMIT 1", [postId]);
    if (existingRows.length === 0) {
      return res.status(404).json({ message: "Post not found." });
    }

    const existingPost = existingRows[0];
    await query("DELETE FROM posts WHERE id = ?", [postId]);

    if (existingPost.image) {
      const absoluteImagePath = path.join(__dirname, "..", existingPost.image.replace(/^\/+/, ""));
      if (fs.existsSync(absoluteImagePath)) {
        fs.unlinkSync(absoluteImagePath);
      }
    }

    return res.json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("[posts][delete]", error);
    return res.status(500).json({ message: "Failed to delete post." });
  }
};

module.exports = {
  createPost,
  getPublishedPosts,
  getPostByIdentifier,
  getDashboardPosts,
  updatePost,
  deletePost,
};
