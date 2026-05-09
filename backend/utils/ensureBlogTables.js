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
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const postColumns = await query("SHOW COLUMNS FROM posts LIKE 'section'");
  if (postColumns.length === 0) {
    await query("ALTER TABLE posts ADD COLUMN section VARCHAR(50) DEFAULT NULL AFTER featured");
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
