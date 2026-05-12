const { pool, query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");

const dummyPost = {
  title: "Dummy Preview Post",
  slug: "dummy-preview-post",
  category: "Strategy",
  subcategory: "Content Strategy",
  tags: "dummy, preview, blog",
  status: "published",
  featured: false,
  section: "latest",
  content: [
    "<p>This is a dummy blog post added so the blog preview and single-post page can be tested end to end.</p>",
    "<p>It uses the same published post data model as production blog entries, including category, tags, slug, and HTML content.</p>",
    "<p>You can replace this content later from the dashboard or remove the post after preview checks are complete.</p>",
  ].join(""),
};

const seedDummyPreviewPost = async () => {
  await ensureBlogTables();

  const existingRows = await query("SELECT id FROM posts WHERE slug = ? LIMIT 1", [
    dummyPost.slug,
  ]);

  if (existingRows.length > 0) {
    await query(
      `UPDATE posts
       SET title = ?, category = ?, subcategory = ?, content = ?, tags = ?, status = ?, featured = ?, section = ?
       WHERE slug = ?`,
      [
        dummyPost.title,
        dummyPost.category,
        dummyPost.subcategory,
        dummyPost.content,
        dummyPost.tags,
        dummyPost.status,
        dummyPost.featured,
        dummyPost.section,
        dummyPost.slug,
      ],
    );

    return { inserted: false, updated: true, slug: dummyPost.slug };
  }

  await query(
    `INSERT INTO posts
      (title, slug, category, subcategory, content, image, tags, status, featured, section)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      dummyPost.title,
      dummyPost.slug,
      dummyPost.category,
      dummyPost.subcategory,
      dummyPost.content,
      null,
      dummyPost.tags,
      dummyPost.status,
      dummyPost.featured,
      dummyPost.section,
    ],
  );

  return { inserted: true, updated: false, slug: dummyPost.slug };
};

seedDummyPreviewPost()
  .then(async (result) => {
    console.log(JSON.stringify(result, null, 2));
    await pool.end();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("Failed to seed dummy preview post:", error.message || error);
    try {
      await pool.end();
    } catch (_poolError) {
      // Ignore pool shutdown errors during failure handling.
    }
    process.exit(1);
  });
