const { query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");

const getCategories = async (_req, res) => {
  try {
    await ensureBlogTables();

    const rows = await query(`
      SELECT
        c.id AS category_id,
        c.name AS category_name,
        s.id AS subcategory_id,
        s.name AS subcategory_name
      FROM categories c
      LEFT JOIN subcategories s ON s.category_id = c.id
      ORDER BY c.name ASC, s.name ASC
    `);

    const categoriesMap = new Map();

    for (const row of rows) {
      if (!categoriesMap.has(row.category_id)) {
        categoriesMap.set(row.category_id, {
          id: row.category_id,
          name: row.category_name,
          subcategories: [],
        });
      }

      if (row.subcategory_id) {
        categoriesMap.get(row.category_id).subcategories.push({
          id: row.subcategory_id,
          name: row.subcategory_name,
        });
      }
    }

    return res.json(Array.from(categoriesMap.values()));
  } catch (error) {
    console.error("[categories][list]", error);
    return res.status(500).json({ message: "Failed to fetch categories." });
  }
};

module.exports = {
  getCategories,
};
