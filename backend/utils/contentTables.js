const POST_TABLES = ["blogposts", "ideasposts", "newsposts"];
const ROUTED_POST_TABLES = new Set([...POST_TABLES, "posts"]);

const CONTENT_TABLE_BY_CATEGORY = {
  blog: "blogposts",
  blogs: "blogposts",
  ideas: "ideasposts",
  idea: "ideasposts",
  news: "newsposts",
};

const CONTENT_TABLE_BY_TYPE = {
  blog: "blogposts",
  blogs: "blogposts",
  ideas: "ideasposts",
  idea: "ideasposts",
  news: "newsposts",
};

const normalizeTableToken = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");

const getPostTableForCategory = (category = "") => {
  const token = normalizeTableToken(category);
  return CONTENT_TABLE_BY_CATEGORY[token] || "blogposts";
};

const getPostTableForType = (type = "") => {
  const token = normalizeTableToken(type);
  return CONTENT_TABLE_BY_TYPE[token] || "blogposts";
};

const parseScopedPostId = (value) => {
  const raw = String(value || "").trim();
  const match = raw.match(/^([a-z]+posts)-(\d+)$/i);

  if (match) {
    const table = match[1].toLowerCase();
    if (ROUTED_POST_TABLES.has(table)) {
      return { table, id: Number(match[2]), scoped: table !== "posts" };
    }
  }

  if (/^\d+$/.test(raw)) {
    return { table: null, id: Number(raw), scoped: false };
  }

  return null;
};

const scopedPostId = (table, id) => `${table}-${id}`;

const postSelectColumns = (table) => `
  SELECT
    '${table}' AS source_table,
    id,
    title,
    slug,
    category,
    subcategory,
    content,
    image,
    tags,
    status,
    featured,
    section,
    seo_title,
    seo_description,
    seo_keywords,
    focus_keyword,
    canonical_url,
    meta_robots,
    readability_notes,
    seo_score,
    seo_status,
    seo_breakdown,
    auto_generated,
    social_title,
    social_description,
    social_image,
    schema_type,
    schema_json,
    created_at,
    updated_at
  FROM ${table}
`;

const unionPostSelect = () => POST_TABLES.map(postSelectColumns).join("\nUNION ALL\n");

module.exports = {
  POST_TABLES,
  getPostTableForCategory,
  getPostTableForType,
  parseScopedPostId,
  scopedPostId,
  postSelectColumns,
  unionPostSelect,
};
