const ensurePageSeoTable = require("../utils/ensurePageSeoTable");
const { query } = require("../config/db");

const asString = (value, fallback = "") =>
  value === undefined || value === null ? fallback : String(value);

const normalizePath = (value = "/") => {
  const normalized = String(value || "/").toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

const mapPageSeo = (row) => ({
  id: row.id,
  path: row.path,
  seoTitle: asString(row.seo_title),
  seoDescription: asString(row.seo_description),
  seoKeywords: asString(row.seo_keywords),
  metaKeywords: asString(row.seo_keywords),
  focusKeyword: asString(row.focus_keyword),
  canonicalUrl: asString(row.canonical_url),
  metaRobots: asString(row.meta_robots),
  readabilityNotes: asString(row.readability_notes),
  socialTitle: asString(row.social_title),
  socialDescription: asString(row.social_description),
  socialImage: asString(row.social_image),
  schemaType: asString(row.schema_type),
  schemaJson: asString(row.schema_json),
  twitterCard: asString(row.twitter_card),
  createdAt: row.created_at,
  updatedAt: row.updated_at || row.created_at,
});

const getPageSeoEntries = async (req, res) => {
  try {
    await ensurePageSeoTable();

    const path = req.query.path ? normalizePath(req.query.path) : "";
    const rows = path
      ? await query("SELECT * FROM page_seo WHERE path = ? LIMIT 1", [path])
      : await query("SELECT * FROM page_seo ORDER BY path ASC");

    if (path) {
      return res.json(rows[0] ? mapPageSeo(rows[0]) : null);
    }

    return res.json(rows.map(mapPageSeo));
  } catch (error) {
    console.error("[page-seo][list]", error);
    return res.status(500).json({ message: "Unable to load page SEO entries." });
  }
};

const upsertPageSeoEntry = async (req, res) => {
  try {
    await ensurePageSeoTable();

    const path = normalizePath(req.body.path);
    const values = {
      seoTitle: asString(req.body.seoTitle ?? req.body.seo_title),
      seoDescription: asString(req.body.seoDescription ?? req.body.seo_description),
      seoKeywords: asString(req.body.seoKeywords ?? req.body.seo_keywords ?? req.body.metaKeywords),
      focusKeyword: asString(req.body.focusKeyword ?? req.body.focus_keyword),
      canonicalUrl: asString(req.body.canonicalUrl ?? req.body.canonical_url),
      metaRobots: asString(req.body.metaRobots ?? req.body.meta_robots, "index,follow"),
      readabilityNotes: asString(req.body.readabilityNotes ?? req.body.readability_notes),
      socialTitle: asString(req.body.socialTitle ?? req.body.social_title),
      socialDescription: asString(req.body.socialDescription ?? req.body.social_description),
      socialImage: asString(req.body.socialImage ?? req.body.social_image),
      schemaType: asString(req.body.schemaType ?? req.body.schema_type, "WebPage"),
      schemaJson: asString(req.body.schemaJson ?? req.body.schema_json),
      twitterCard: asString(req.body.twitterCard ?? req.body.twitter_card, "summary_large_image"),
    };

    await query(
      `INSERT INTO page_seo
        (path, seo_title, seo_description, seo_keywords, focus_keyword, canonical_url, meta_robots, readability_notes, social_title, social_description, social_image, schema_type, schema_json, twitter_card)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        seo_title = VALUES(seo_title),
        seo_description = VALUES(seo_description),
        seo_keywords = VALUES(seo_keywords),
        focus_keyword = VALUES(focus_keyword),
        canonical_url = VALUES(canonical_url),
        meta_robots = VALUES(meta_robots),
        readability_notes = VALUES(readability_notes),
        social_title = VALUES(social_title),
        social_description = VALUES(social_description),
        social_image = VALUES(social_image),
        schema_type = VALUES(schema_type),
        schema_json = VALUES(schema_json),
        twitter_card = VALUES(twitter_card)`,
      [
        path,
        values.seoTitle || null,
        values.seoDescription || null,
        values.seoKeywords || null,
        values.focusKeyword || null,
        values.canonicalUrl || null,
        values.metaRobots || null,
        values.readabilityNotes || null,
        values.socialTitle || null,
        values.socialDescription || null,
        values.socialImage || null,
        values.schemaType || null,
        values.schemaJson || null,
        values.twitterCard || null,
      ],
    );

    const rows = await query("SELECT * FROM page_seo WHERE path = ? LIMIT 1", [path]);
    return res.json(mapPageSeo(rows[0]));
  } catch (error) {
    console.error("[page-seo][save]", error);
    return res.status(500).json({ message: "Unable to save page SEO entry." });
  }
};

module.exports = {
  getPageSeoEntries,
  upsertPageSeoEntry,
};
