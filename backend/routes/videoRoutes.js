const express = require("express");
const jwt = require("jsonwebtoken");
const uploadVideoMedia = require("../middleware/uploadVideoMedia");
const ensureVideosTable = require("../utils/ensureVideosTable");
const { query } = require("../config/db");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "blucom-dashboard-local-admin-secret";

const getBearerToken = (req) => {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");
  return scheme === "Bearer" && token ? token : "";
};

const getVerifiedAdmin = async (req) => {
  const token = getBearerToken(req);
  if (!token) {
    return null;
  }

  const payload = jwt.verify(token, JWT_SECRET);
  const rows = await query(
    `SELECT id, email, is_full_admin, is_active
     FROM admin_users
     WHERE id = ? AND email = ?
     LIMIT 1`,
    [payload.sub, payload.email],
  );
  const admin = rows[0];

  if (!admin || !admin.is_active || !admin.is_full_admin) {
    return null;
  }

  return admin;
};

const requireAdmin = async (req, res, next) => {
  try {
    const admin = await getVerifiedAdmin(req);
    if (!admin) {
      return res.status(401).json({ message: "Invalid admin token." });
    }
    req.admin = admin;
    return next();
  } catch (_error) {
    return res.status(401).json({ message: "Invalid admin token." });
  }
};

const normalizeVideo = (row) => ({
  id: row.id,
  title: row.title,
  description: row.description || "",
  category: row.category || "General",
  folder: row.folder || "All",
  status: row.status || "draft",
  thumbnail: row.thumbnail || "",
  videoUrl: row.video_url || "",
  duration: row.duration || "",
  sortOrder: Number(row.sort_order || 0),
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

router.get("/videos", async (req, res) => {
  try {
    await ensureVideosTable();

    const includeDrafts = req.query.includeDrafts === "true";
    if (includeDrafts) {
      const admin = await getVerifiedAdmin(req);
      if (!admin) {
        return res.status(401).json({ message: "Invalid admin token." });
      }
    }
    const whereClause = includeDrafts ? "" : "WHERE status = 'published'";
    const rows = await query(
      `SELECT *
       FROM dashboard_videos
       ${whereClause}
       ORDER BY sort_order ASC, created_at DESC`,
    );

    return res.status(200).json(rows.map(normalizeVideo));
  } catch (error) {
    console.error("[videos][list]", error);
    return res.status(500).json({ message: "Unable to fetch videos." });
  }
});

router.post(
  "/videos",
  requireAdmin,
  uploadVideoMedia.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      await ensureVideosTable();

      const title = String(req.body.title || "").trim();
      const description = String(req.body.description || "").trim();
      const category = String(req.body.category || "General").trim();
      const folder = String(req.body.folder || "All").trim();
      const status = String(req.body.status || "draft").trim();
      const duration = String(req.body.duration || "").trim();
      const sortOrder = Number(req.body.sortOrder || 0);
      const videoFile = req.files?.video?.[0] || null;
      const thumbnailFile = req.files?.thumbnail?.[0] || null;

      if (!title) {
        return res.status(400).json({ message: "Video title is required." });
      }

      const allowedStatus = ["draft", "review", "published"].includes(status)
        ? status
        : "draft";
      const videoPath = videoFile ? `/uploads/videos/${videoFile.filename}` : "";
      const thumbnailPath = thumbnailFile
        ? `/uploads/videos/${thumbnailFile.filename}`
        : "";

      const result = await query(
        `INSERT INTO dashboard_videos
          (title, description, category, folder, status, thumbnail, video_url, duration, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          title,
          description,
          category || "General",
          folder || "All",
          allowedStatus,
          thumbnailPath,
          videoPath,
          duration,
          Number.isFinite(sortOrder) ? sortOrder : 0,
        ],
      );

      const rows = await query("SELECT * FROM dashboard_videos WHERE id = ? LIMIT 1", [
        result.insertId,
      ]);

      return res.status(201).json(normalizeVideo(rows[0]));
    } catch (error) {
      console.error("[videos][create]", error);
      return res.status(500).json({ message: "Unable to create video." });
    }
  },
);

module.exports = router;
