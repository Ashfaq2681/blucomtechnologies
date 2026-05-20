const fs = require("fs");
const path = require("path");
const { query } = require("../config/db");
const ensurePagesTable = require("../utils/ensurePagesTable");
const slugify = require("../utils/slugify");

const SITE_URL = process.env.SITE_URL || "https://www.blucomtechnologies.com";

const tableByType = {
  portfolio: "work",
};

const contentColumns = [
  ["seo_title", "VARCHAR(255) DEFAULT NULL"],
  ["seo_description", "TEXT DEFAULT NULL"],
  ["canonical_url", "VARCHAR(500) DEFAULT NULL"],
  ["meta_robots", "VARCHAR(100) NOT NULL DEFAULT 'index,follow'"],
  ["category", "VARCHAR(255) DEFAULT NULL"],
  ["subcategory", "VARCHAR(255) DEFAULT NULL"],
  ["image", "VARCHAR(500) DEFAULT NULL"],
  ["tags", "TEXT DEFAULT NULL"],
  ["scheduled_at", "DATETIME DEFAULT NULL"],
  ["featured", "TINYINT(1) NOT NULL DEFAULT 0"],
  ["section", "VARCHAR(100) DEFAULT 'latest'"],
  ["focus_keyword", "VARCHAR(255) DEFAULT NULL"],
  ["readability_notes", "TEXT DEFAULT NULL"],
  ["schema_type", "VARCHAR(100) DEFAULT 'Article'"],
  ["schema_json", "LONGTEXT DEFAULT NULL"],
  ["social_title", "VARCHAR(255) DEFAULT NULL"],
  ["social_description", "TEXT DEFAULT NULL"],
  ["social_image", "VARCHAR(500) DEFAULT NULL"],
  ["twitter_card", "VARCHAR(100) DEFAULT 'summary_large_image'"],
  ["component_path", "VARCHAR(500) DEFAULT NULL"],
  ["created_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"],
  ["updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
];
const initializedTables = new Set();

const getTable = (type = "portfolio") => tableByType[String(type).toLowerCase()] || "work";

const asString = (value, fallback = "") => {
  const nextValue = value === undefined || value === null ? fallback : value;
  return nextValue === undefined || nextValue === null ? "" : String(nextValue);
};

const buildImageUrl = (req, imagePath) => {
  if (!imagePath) return "";
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  const normalizedPath = imagePath.replace(/\\/g, "/");
  return `${req.protocol}://${req.get("host")}${normalizedPath.startsWith("/") ? "" : "/"}${normalizedPath}`;
};

const columnExists = async (tableName, columnName) => {
  const rows = await query(
    `SELECT COLUMN_NAME
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?
     LIMIT 1`,
    [tableName, columnName],
  );
  return rows.length > 0;
};

const ensureContentColumns = async (tableName) => {
  if (initializedTables.has(tableName)) {
    return;
  }
  await ensurePagesTable();
  await query(
    `ALTER TABLE ${tableName} MODIFY status ENUM('draft', 'published', 'scheduled') NOT NULL DEFAULT 'draft'`,
  );
  for (const [columnName, definition] of contentColumns) {
    if (!(await columnExists(tableName, columnName))) {
      await query(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${definition}`);
    }
  }
  initializedTables.add(tableName);
};

const mapContent = (req, row, type = "portfolio") => ({
  id: row.id,
  type,
  title: row.title,
  slug: row.slug,
  category: asString(row.category, type === "portfolio" ? "Portfolio" : ""),
  subcategory: asString(row.subcategory),
  excerpt: asString(row.excerpt),
  content: asString(row.content),
  image: buildImageUrl(req, row.image),
  imagePath: asString(row.image),
  tags: asString(row.tags)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean),
  status: row.status,
  scheduledAt: row.scheduled_at,
  featured: Boolean(row.featured),
  section: asString(row.section, "latest"),
  seoTitle: asString(row.seo_title),
  seoDescription: asString(row.seo_description),
  focusKeyword: asString(row.focus_keyword),
  canonicalUrl: asString(row.canonical_url),
  metaRobots: asString(row.meta_robots, "index,follow"),
  readabilityNotes: asString(row.readability_notes),
  schemaType: asString(row.schema_type, "Article"),
  schemaJson: asString(row.schema_json),
  socialTitle: asString(row.social_title),
  socialDescription: asString(row.social_description),
  socialImage: buildImageUrl(req, row.social_image),
  twitterCard: asString(row.twitter_card, "summary_large_image"),
  componentPath: asString(row.component_path),
  createdAt: row.created_at,
  updatedAt: row.updated_at || row.created_at,
});

const normalizeStatus = (status) => {
  if (status === "published" || status === "scheduled") return status;
  return "draft";
};

const normalizeBody = (body, existing = {}) => {
  const title = asString(body.title, existing.title).trim();
  const slug = slugify(body.slug || title);
  const type = asString(body.type, "portfolio").trim().toLowerCase();
  const canonicalUrl = asString(
    body.canonicalUrl,
    existing.canonical_url || `${SITE_URL}/portfolio/${slug}`,
  ).trim();

  return {
    type,
    title,
    slug,
    category: asString(body.category, existing.category || "Portfolio").trim(),
    subcategory: asString(body.subcategory, existing.subcategory).trim(),
    excerpt: asString(body.excerpt, existing.excerpt).trim(),
    content: asString(body.content, existing.content).trim(),
    tags: asString(body.tags, existing.tags).trim(),
    status: normalizeStatus(body.status || existing.status),
    scheduledAt: body.scheduledAt || existing.scheduled_at || null,
    featured: body.featured === true || body.featured === "true" || body.featured === "1" || body.featured === 1,
    section: asString(body.section, existing.section || "latest").trim(),
    seoTitle: asString(body.seoTitle, existing.seo_title || title).trim(),
    seoDescription: asString(body.seoDescription, existing.seo_description || body.excerpt || existing.excerpt).trim(),
    canonicalUrl,
    metaRobots: asString(body.metaRobots, existing.meta_robots || "index,follow").trim(),
    focusKeyword: asString(body.focusKeyword, existing.focus_keyword).trim(),
    readabilityNotes: asString(body.readabilityNotes, existing.readability_notes).trim(),
    schemaType: asString(body.schemaType, existing.schema_type || "Article").trim(),
    schemaJson: asString(body.schemaJson, existing.schema_json).trim(),
    socialTitle: asString(body.socialTitle, existing.social_title || body.seoTitle || title).trim(),
    socialDescription: asString(body.socialDescription, existing.social_description || body.seoDescription).trim(),
    socialImage: asString(body.socialImage, existing.social_image).trim(),
    twitterCard: asString(body.twitterCard, existing.twitter_card || "summary_large_image").trim(),
    componentPath: asString(body.componentPath, existing.component_path).trim(),
  };
};

const getContents = async (req, res) => {
  try {
    const type = asString(req.query.type, "portfolio").toLowerCase();
    const table = getTable(type);
    await ensureContentColumns(table);
    const includeDrafts = req.query.includeDrafts === "true";
    const rows = await query(
      `SELECT * FROM ${table} ${includeDrafts ? "" : "WHERE status = 'published'"} ORDER BY featured DESC, updated_at DESC`,
    );
    return res.json(rows.map((row) => mapContent(req, row, type)));
  } catch (error) {
    console.error("[content][list]", error);
    return res.status(500).json({ message: "Failed to fetch content." });
  }
};

const getContentByIdentifier = async (req, res) => {
  try {
    const type = asString(req.query.type, "portfolio").toLowerCase();
    const table = getTable(type);
    await ensureContentColumns(table);
    const identifier = asString(req.params.identifier);
    const byId = /^\d+$/.test(identifier);
    const rows = await query(
      `SELECT * FROM ${table} WHERE ${byId ? "id" : "slug"} = ? LIMIT 1`,
      [byId ? Number(identifier) : identifier],
    );
    if (rows.length === 0 || (rows[0].status !== "published" && !byId)) {
      return res.status(404).json({ message: "Content not found." });
    }
    return res.json(mapContent(req, rows[0], type));
  } catch (error) {
    console.error("[content][single]", error);
    return res.status(500).json({ message: "Failed to fetch content." });
  }
};

const createContent = async (req, res) => {
  try {
    const payload = normalizeBody(req.body);
    const table = getTable(payload.type);
    await ensureContentColumns(table);
    if (!payload.title || !payload.slug || !payload.content) {
      return res.status(400).json({ message: "Title, slug, and content are required." });
    }
    const imagePath = req.file ? `/uploads/posts/${req.file.filename}` : null;
    const result = await query(
      `INSERT INTO ${table}
        (title, slug, excerpt, content, status, seo_title, seo_description, canonical_url, meta_robots, category, subcategory, image, tags, scheduled_at, featured, section, focus_keyword, readability_notes, schema_type, schema_json, social_title, social_description, social_image, twitter_card, component_path)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        payload.title, payload.slug, payload.excerpt, payload.content, payload.status,
        payload.seoTitle, payload.seoDescription, payload.canonicalUrl, payload.metaRobots,
        payload.category, payload.subcategory || null, imagePath, payload.tags || null,
        payload.status === "scheduled" ? payload.scheduledAt : null, payload.featured,
        payload.section, payload.focusKeyword || null, payload.readabilityNotes || null,
        payload.schemaType, payload.schemaJson || null, payload.socialTitle || null,
        payload.socialDescription || null, payload.socialImage || null, payload.twitterCard,
        payload.componentPath || null,
      ],
    );
    const rows = await query(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [result.insertId]);
    return res.status(201).json(mapContent(req, rows[0], payload.type));
  } catch (error) {
    console.error("[content][create]", error);
    return res.status(500).json({ message: "Failed to create content." });
  }
};

const updateContent = async (req, res) => {
  try {
    const type = asString(req.body.type || req.query.type, "portfolio").toLowerCase();
    const table = getTable(type);
    await ensureContentColumns(table);
    const rows = await query(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Content not found." });
    const existing = rows[0];
    const payload = normalizeBody({ ...req.body, type }, existing);
    const imagePath = req.file ? `/uploads/posts/${req.file.filename}` : existing.image;
    await query(
      `UPDATE ${table}
       SET title = ?, slug = ?, excerpt = ?, content = ?, status = ?, seo_title = ?, seo_description = ?, canonical_url = ?, meta_robots = ?, category = ?, subcategory = ?, image = ?, tags = ?, scheduled_at = ?, featured = ?, section = ?, focus_keyword = ?, readability_notes = ?, schema_type = ?, schema_json = ?, social_title = ?, social_description = ?, social_image = ?, twitter_card = ?, component_path = ?
       WHERE id = ?`,
      [
        payload.title, payload.slug, payload.excerpt, payload.content, payload.status,
        payload.seoTitle, payload.seoDescription, payload.canonicalUrl, payload.metaRobots,
        payload.category, payload.subcategory || null, imagePath, payload.tags || null,
        payload.status === "scheduled" ? payload.scheduledAt : null, payload.featured,
        payload.section, payload.focusKeyword || null, payload.readabilityNotes || null,
        payload.schemaType, payload.schemaJson || null, payload.socialTitle || null,
        payload.socialDescription || null, payload.socialImage || null, payload.twitterCard,
        payload.componentPath || null, req.params.id,
      ],
    );
    if (req.file && existing.image) {
      const oldPath = path.join(__dirname, "..", existing.image.replace(/^\/+/, ""));
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }
    const updatedRows = await query(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [req.params.id]);
    return res.json(mapContent(req, updatedRows[0], type));
  } catch (error) {
    console.error("[content][update]", error);
    return res.status(500).json({ message: "Failed to update content." });
  }
};

const deleteContent = async (req, res) => {
  try {
    const type = asString(req.query.type, "portfolio").toLowerCase();
    const table = getTable(type);
    await ensureContentColumns(table);
    const rows = await query(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Content not found." });
    await query(`DELETE FROM ${table} WHERE id = ?`, [req.params.id]);
    return res.json({ message: "Content deleted successfully." });
  } catch (error) {
    console.error("[content][delete]", error);
    return res.status(500).json({ message: "Failed to delete content." });
  }
};

module.exports = {
  getContents,
  getContentByIdentifier,
  createContent,
  updateContent,
  deleteContent,
};
