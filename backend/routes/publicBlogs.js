const express = require("express");

const normalizeImage = (value = "") => String(value).replace(/^\/+/, "").replace(/^uploads\/+/i, "");

const assignSections = (rows) => {
  return rows.map((row, index) => {
    const fallbackSection =
      index === 0
        ? "featured"
        : index <= 3
        ? "editor"
        : index <= 11
        ? "latest"
        : index <= 15
        ? "analytics"
        : index <= 19
        ? "guides"
        : index <= 23
        ? "reports"
        : index <= 27
        ? "insights"
        : "archive";
    const section = row.section || fallbackSection;

    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      category: row.category,
      section,
      content: row.content,
      image: normalizeImage(row.image),
      status: row.status,
      created_at: row.created_at,
    };
  });
};

const createPublicBlogsRouter = ({ queryAsync }) => {
  const router = express.Router();

  router.get("/", async (_req, res) => {
    try {
      const rows = await queryAsync(
        `SELECT id, title, slug, category, content, image, status, section, created_at
         FROM blogposts
         WHERE status = 'published'
         ORDER BY
           CASE section
             WHEN 'featured' THEN 0
             WHEN 'editor' THEN 1
             WHEN 'latest' THEN 2
             WHEN 'analytics' THEN 3
             WHEN 'guides' THEN 4
             WHEN 'reports' THEN 5
             WHEN 'insights' THEN 6
             ELSE 7
           END,
           featured DESC,
           created_at DESC,
           id DESC`,
      );

      return res.status(200).json(assignSections(rows));
    } catch (error) {
      console.error("[publicBlogs][GET] error:", error);
      return res.status(500).json({ error: "Unable to fetch public blogs." });
    }
  });

  return router;
};

module.exports = createPublicBlogsRouter;
