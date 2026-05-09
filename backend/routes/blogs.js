const express = require("express");

const TABLE_NAME = "dashboard_blogs";

const parseList = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const toJsonList = (value) => JSON.stringify(parseList(value));

const safeParseJsonArray = (value) => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const mapBlogRow = (row) => ({
  id: row.id,
  headline: row.headline,
  summary: row.summary,
  body: row.body,
  author: row.author,
  authorRole: row.author_role,
  publisherName: row.publisher_name,
  publisherLogo: row.publisher_logo,
  featuredImage: row.featured_image,
  publicationDate: row.publication_date,
  tags: safeParseJsonArray(row.tags_json),
  categories: safeParseJsonArray(row.categories_json),
  readMoreLink: row.read_more_link || "",
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

const sampleBlogPayload = {
  headline: "Sample MySQL Blog",
  summary: "This sample entry confirms that the backend can write blog records to MySQL.",
  body: [
    "<p>This is a sample blog post created by the backend MySQL seed route.</p>",
    "<p>If you can fetch this row from the API, your MySQL connection is working.</p>",
  ].join(""),
  author: "Blucom Admin",
  authorRole: "Backend Test",
  publisherName: "Blucom Technologies",
  publisherLogo: "",
  featuredImage: "",
  publicationDate: new Date().toISOString().slice(0, 10),
  tags: ["mysql", "backend", "test"],
  categories: ["Testing"],
  readMoreLink: "",
};

const createBlogsRouter = ({ queryAsync }) => {
  const router = express.Router();

  const ensureBlogsTable = async () => {
    const sql = `
      CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        headline VARCHAR(255) NOT NULL,
        summary TEXT NOT NULL,
        body LONGTEXT NOT NULL,
        author VARCHAR(150) NOT NULL,
        author_role VARCHAR(150) NOT NULL,
        publisher_name VARCHAR(255) NOT NULL,
        publisher_logo TEXT NULL,
        featured_image TEXT NULL,
        publication_date DATE NOT NULL,
        tags_json JSON NULL,
        categories_json JSON NULL,
        read_more_link TEXT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;

    await queryAsync(sql);
  };

  router.get("/", async (req, res) => {
    try {
      await ensureBlogsTable();
      const rows = await queryAsync(
        `SELECT * FROM ${TABLE_NAME} ORDER BY publication_date DESC, id DESC`,
      );

      return res.status(200).json({ data: rows.map(mapBlogRow) });
    } catch (error) {
      console.error("[blogs][GET] error:", error);
      return res.status(500).json({ error: "Unable to fetch blogs." });
    }
  });

  router.post("/", async (req, res) => {
    const payload = req.body || {};
    const requiredFields = [
      "headline",
      "summary",
      "body",
      "author",
      "authorRole",
      "publisherName",
      "publicationDate",
    ];
    const missing = requiredFields.filter((field) => !String(payload[field] || "").trim());

    if (missing.length) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    try {
      await ensureBlogsTable();
      const insertSql = `
        INSERT INTO ${TABLE_NAME}
          (headline, summary, body, author, author_role, publisher_name, publisher_logo, featured_image, publication_date, tags_json, categories_json, read_more_link)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const insertResult = await queryAsync(insertSql, [
        String(payload.headline).trim(),
        String(payload.summary).trim(),
        String(payload.body).trim(),
        String(payload.author).trim(),
        String(payload.authorRole).trim(),
        String(payload.publisherName).trim(),
        String(payload.publisherLogo || "").trim() || null,
        String(payload.featuredImage || "").trim() || null,
        String(payload.publicationDate).trim(),
        toJsonList(payload.tags),
        toJsonList(payload.categories),
        String(payload.readMoreLink || "").trim() || null,
      ]);

      const rows = await queryAsync(`SELECT * FROM ${TABLE_NAME} WHERE id = ? LIMIT 1`, [
        insertResult.insertId,
      ]);

      return res.status(201).json({ data: mapBlogRow(rows[0]) });
    } catch (error) {
      console.error("[blogs][POST] error:", error);
      return res.status(500).json({ error: "Unable to create blog." });
    }
  });

  router.post("/seed-sample", async (req, res) => {
    try {
      await ensureBlogsTable();

      const existingRows = await queryAsync(
        `SELECT * FROM ${TABLE_NAME} WHERE headline = ? ORDER BY id DESC LIMIT 1`,
        [sampleBlogPayload.headline],
      );

      if (existingRows.length) {
        return res.status(200).json({
          seeded: false,
          message: "Sample blog already exists.",
          data: mapBlogRow(existingRows[0]),
        });
      }

      const insertSql = `
        INSERT INTO ${TABLE_NAME}
          (headline, summary, body, author, author_role, publisher_name, publisher_logo, featured_image, publication_date, tags_json, categories_json, read_more_link)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const insertResult = await queryAsync(insertSql, [
        sampleBlogPayload.headline,
        sampleBlogPayload.summary,
        sampleBlogPayload.body,
        sampleBlogPayload.author,
        sampleBlogPayload.authorRole,
        sampleBlogPayload.publisherName,
        null,
        null,
        sampleBlogPayload.publicationDate,
        toJsonList(sampleBlogPayload.tags),
        toJsonList(sampleBlogPayload.categories),
        null,
      ]);

      const rows = await queryAsync(`SELECT * FROM ${TABLE_NAME} WHERE id = ? LIMIT 1`, [
        insertResult.insertId,
      ]);

      return res.status(201).json({
        seeded: true,
        message: "Sample blog inserted into MySQL.",
        data: mapBlogRow(rows[0]),
      });
    } catch (error) {
      console.error("[blogs][SEED] error:", error);
      return res.status(500).json({ error: "Unable to seed sample blog." });
    }
  });

  router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Invalid blog id." });
    }

    try {
      await ensureBlogsTable();
      const result = await queryAsync(`DELETE FROM ${TABLE_NAME} WHERE id = ?`, [id]);

      if (!result.affectedRows) {
        return res.status(404).json({ error: "Blog not found." });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("[blogs][DELETE] error:", error);
      return res.status(500).json({ error: "Unable to delete blog." });
    }
  });

  return router;
};

module.exports = createBlogsRouter;
