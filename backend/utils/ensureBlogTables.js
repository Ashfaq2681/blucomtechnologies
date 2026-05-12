const { query } = require("../config/db");

let initialized = false;
const SECTION_VALUES = [
  "featured",
  "editor",
  "latest",
  "analytics",
  "guides",
  "reports",
  "insights",
  "archive",
];

const seedCategories = async () => {
  const existingCategories = await query("SELECT id FROM categories LIMIT 1");

  if (existingCategories.length > 0) {
    return;
  }

  const categoryNames = ["Strategy", "Marketing", "Technology", "Branding"];
  const categoryMap = new Map();

  for (const name of categoryNames) {
    const result = await query("INSERT INTO categories (name) VALUES (?)", [name]);
    categoryMap.set(name, result.insertId);
  }

  const subcategories = [
    ["Strategy", "Content Strategy"],
    ["Strategy", "Growth Planning"],
    ["Marketing", "Social Media"],
    ["Marketing", "Performance Marketing"],
    ["Technology", "AI"],
    ["Technology", "Automation"],
    ["Branding", "Brand Identity"],
    ["Branding", "Storytelling"],
  ];

  for (const [categoryName, subcategoryName] of subcategories) {
    await query(
      "INSERT INTO subcategories (category_id, name) VALUES (?, ?)",
      [categoryMap.get(categoryName), subcategoryName],
    );
  }
};

const ensureBlogTables = async () => {
  if (initialized) {
    return;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL UNIQUE
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS subcategories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      category_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
      UNIQUE KEY unique_subcategory_per_category (category_id, name)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      category VARCHAR(255) NOT NULL,
      subcategory VARCHAR(255) DEFAULT NULL,
      content LONGTEXT NOT NULL,
      image VARCHAR(255) DEFAULT NULL,
      tags TEXT DEFAULT NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      featured BOOLEAN NOT NULL DEFAULT FALSE,
      section VARCHAR(50) DEFAULT NULL,
      seo_title VARCHAR(255) DEFAULT NULL,
      seo_description TEXT DEFAULT NULL,
      seo_keywords TEXT DEFAULT NULL,
      focus_keyword VARCHAR(255) DEFAULT NULL,
      canonical_url VARCHAR(500) DEFAULT NULL,
      meta_robots VARCHAR(100) DEFAULT NULL,
      readability_notes TEXT DEFAULT NULL,
      seo_score INT DEFAULT NULL,
      seo_status VARCHAR(50) DEFAULT NULL,
      seo_breakdown JSON DEFAULT NULL,
      auto_generated BOOLEAN NOT NULL DEFAULT FALSE,
      social_title VARCHAR(255) DEFAULT NULL,
      social_description TEXT DEFAULT NULL,
      social_image VARCHAR(500) DEFAULT NULL,
      schema_type VARCHAR(100) DEFAULT NULL,
      schema_json LONGTEXT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  const postColumns = await query("SHOW COLUMNS FROM posts LIKE 'section'");
  if (postColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN section VARCHAR(50) DEFAULT NULL AFTER featured");
  }

  const seoTitleColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_title'");
  if (seoTitleColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_title VARCHAR(255) DEFAULT NULL AFTER section");
  }

  const seoDescriptionColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_description'");
  if (seoDescriptionColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_description TEXT DEFAULT NULL AFTER seo_title");
  }

  const seoKeywordsColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_keywords'");
  if (seoKeywordsColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_keywords TEXT DEFAULT NULL AFTER seo_description");
  }

  const focusKeywordColumns = await query("SHOW COLUMNS FROM posts LIKE 'focus_keyword'");
  if (focusKeywordColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN focus_keyword VARCHAR(255) DEFAULT NULL AFTER seo_keywords");
  }

  const canonicalUrlColumns = await query("SHOW COLUMNS FROM posts LIKE 'canonical_url'");
  if (canonicalUrlColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN canonical_url VARCHAR(500) DEFAULT NULL AFTER focus_keyword");
  }

  const metaRobotsColumns = await query("SHOW COLUMNS FROM posts LIKE 'meta_robots'");
  if (metaRobotsColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN meta_robots VARCHAR(100) DEFAULT NULL AFTER canonical_url");
  }

  const readabilityNotesColumns = await query("SHOW COLUMNS FROM posts LIKE 'readability_notes'");
  if (readabilityNotesColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN readability_notes TEXT DEFAULT NULL AFTER meta_robots");
  }

  const seoScoreColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_score'");
  if (seoScoreColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_score INT DEFAULT NULL AFTER readability_notes");
  }

  const seoStatusColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_status'");
  if (seoStatusColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_status VARCHAR(50) DEFAULT NULL AFTER seo_score");
  }

  const seoBreakdownColumns = await query("SHOW COLUMNS FROM posts LIKE 'seo_breakdown'");
  if (seoBreakdownColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN seo_breakdown JSON DEFAULT NULL AFTER seo_status");
  }

  const autoGeneratedColumns = await query("SHOW COLUMNS FROM posts LIKE 'auto_generated'");
  if (autoGeneratedColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN auto_generated BOOLEAN NOT NULL DEFAULT FALSE AFTER seo_breakdown");
  }

  const socialTitleColumns = await query("SHOW COLUMNS FROM posts LIKE 'social_title'");
  if (socialTitleColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN social_title VARCHAR(255) DEFAULT NULL AFTER seo_keywords");
  }

  const socialDescriptionColumns = await query("SHOW COLUMNS FROM posts LIKE 'social_description'");
  if (socialDescriptionColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN social_description TEXT DEFAULT NULL AFTER social_title");
  }

  const socialImageColumns = await query("SHOW COLUMNS FROM posts LIKE 'social_image'");
  if (socialImageColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN social_image VARCHAR(500) DEFAULT NULL AFTER social_description");
  }

  const schemaTypeColumns = await query("SHOW COLUMNS FROM posts LIKE 'schema_type'");
  if (schemaTypeColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN schema_type VARCHAR(100) DEFAULT NULL AFTER social_image");
  }

  const schemaJsonColumns = await query("SHOW COLUMNS FROM posts LIKE 'schema_json'");
  if (schemaJsonColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN schema_json LONGTEXT DEFAULT NULL AFTER schema_type");
  }

  const updatedAtColumns = await query("SHOW COLUMNS FROM posts LIKE 'updated_at'");
  if (updatedAtColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER created_at");
  }

  const publishedRows = await query(
    `SELECT id, section
     FROM posts
     WHERE status = 'published'
     ORDER BY featured DESC, created_at DESC, id DESC`,
  );

  for (let index = 0; index < publishedRows.length; index += 1) {
    const row = publishedRows[index];
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

    if (!SECTION_VALUES.includes(row.section)) {
      await query("UPDATE posts SET section = ? WHERE id = ?", [fallbackSection, row.id]);
    }
  }

  await seedCategories();
  initialized = true;
};

module.exports = ensureBlogTables;
