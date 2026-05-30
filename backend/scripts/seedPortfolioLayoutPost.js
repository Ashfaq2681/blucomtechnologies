const { pool, query } = require("../config/db");
const ensurePagesTable = require("../utils/ensurePagesTable");

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
  ["schema_type", "VARCHAR(100) DEFAULT 'CreativeWork'"],
  ["schema_json", "LONGTEXT DEFAULT NULL"],
  ["social_title", "VARCHAR(255) DEFAULT NULL"],
  ["social_description", "TEXT DEFAULT NULL"],
  ["social_image", "VARCHAR(500) DEFAULT NULL"],
  ["twitter_card", "VARCHAR(100) DEFAULT 'summary_large_image'"],
  ["component_path", "VARCHAR(500) DEFAULT NULL"],
];

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

const ensureWorkContentColumns = async () => {
  await ensurePagesTable();
  await query(
    "ALTER TABLE work MODIFY status ENUM('draft', 'published', 'scheduled') NOT NULL DEFAULT 'draft'",
  );

  for (const [columnName, definition] of contentColumns) {
    if (!(await columnExists("work", columnName))) {
      await query(`ALTER TABLE work ADD COLUMN ${columnName} ${definition}`);
    }
  }
};

const portfolioPost = {
  title: "Codility Hub Digital Experience",
  slug: "codility-hub-digital-experience",
  category: "Technology",
  subcategory: "Digital Experience",
  image: "/portfolio/22copy.png",
  tags: "Identity, UX/UI, Web Experience, Content Strategy",
  excerpt:
    "A complete digital identity and website experience shaped for a fast-moving technology education brand.",
  content: [
    "<p>Codility Hub needed a sharper digital presence that could explain a technical offer quickly, build trust with learners, and give the team a flexible foundation for future campaigns.</p>",
    "<h2>Challenge</h2>",
    "<p>The brand had strong subject matter expertise, but its digital experience did not yet communicate the value of its programs with enough clarity. Course information, credibility signals, and conversion points needed to feel connected instead of scattered.</p>",
    "<h2>Approach</h2>",
    "<p>We started by mapping the user journey from first discovery to inquiry. That helped define the information hierarchy, landing page structure, visual rhythm, and calls to action. The design direction used a clean interface language, direct messaging, and focused content blocks that support scanning on desktop and mobile.</p>",
    "<figure><img src='/portfolio/22copy.png' alt='Codility Hub portfolio visual' /></figure>",
    "<h2>Execution</h2>",
    "<p>The work covered brand positioning, page architecture, interface design, content structure, and launch-ready campaign assets. Each section was designed to answer a specific user question: what the program offers, who it is for, why the team is credible, and how to take the next step.</p>",
    "<ul><li>Defined a clearer brand and product story for a technical audience.</li><li>Designed a modular website structure for courses, outcomes, and inquiries.</li><li>Created a visual system that balances technology cues with approachable learning content.</li><li>Prepared content sections that can be reused across campaigns and future pages.</li></ul>",
    "<h2>Outcome</h2>",
    "<p>The final experience gives Codility Hub a more credible and conversion-focused presence. The layout is easier to navigate, the message is easier to understand, and the brand now has a foundation that can support paid campaigns, organic traffic, and direct sales conversations.</p>",
    "<blockquote><p>The goal was not only to make the brand look polished. The goal was to make the offer easier to understand, trust, and act on.</p></blockquote>",
  ].join(""),
  status: "published",
  featured: true,
  section: "latest",
  seoTitle: "Codility Hub Digital Experience | Blucom Technologies Portfolio",
  seoDescription:
    "Explore a Blucom Technologies portfolio case study for Codility Hub covering identity, UX/UI, website structure, and digital experience design.",
  canonicalUrl: "https://www.blucomtechnologies.com/portfolio/codility-hub-digital-experience",
  metaRobots: "index,follow",
  focusKeyword: "Codility Hub digital experience",
  readabilityNotes: "Sample portfolio content seeded to test the generic portfolio single-page layout.",
  schemaType: "CreativeWork",
  socialTitle: "Codility Hub Digital Experience",
  socialDescription:
    "A sample portfolio case study covering brand clarity, UX/UI design, and web experience for Codility Hub.",
  socialImage: "/portfolio/22copy.png",
  twitterCard: "summary_large_image",
  componentPath: "",
};

const seedPortfolioLayoutPost = async () => {
  await ensureWorkContentColumns();

  await query(
    `INSERT INTO work
      (title, slug, excerpt, content, status, seo_title, seo_description, canonical_url, meta_robots, category, subcategory, image, tags, scheduled_at, featured, section, focus_keyword, readability_notes, schema_type, schema_json, social_title, social_description, social_image, twitter_card, component_path)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
      title = VALUES(title),
      excerpt = VALUES(excerpt),
      content = VALUES(content),
      status = VALUES(status),
      seo_title = VALUES(seo_title),
      seo_description = VALUES(seo_description),
      canonical_url = VALUES(canonical_url),
      meta_robots = VALUES(meta_robots),
      category = VALUES(category),
      subcategory = VALUES(subcategory),
      image = VALUES(image),
      tags = VALUES(tags),
      featured = VALUES(featured),
      section = VALUES(section),
      focus_keyword = VALUES(focus_keyword),
      readability_notes = VALUES(readability_notes),
      schema_type = VALUES(schema_type),
      social_title = VALUES(social_title),
      social_description = VALUES(social_description),
      social_image = VALUES(social_image),
      twitter_card = VALUES(twitter_card),
      component_path = VALUES(component_path)`,
    [
      portfolioPost.title,
      portfolioPost.slug,
      portfolioPost.excerpt,
      portfolioPost.content,
      portfolioPost.status,
      portfolioPost.seoTitle,
      portfolioPost.seoDescription,
      portfolioPost.canonicalUrl,
      portfolioPost.metaRobots,
      portfolioPost.category,
      portfolioPost.subcategory,
      portfolioPost.image,
      portfolioPost.tags,
      portfolioPost.featured,
      portfolioPost.section,
      portfolioPost.focusKeyword,
      portfolioPost.readabilityNotes,
      portfolioPost.schemaType,
      portfolioPost.socialTitle,
      portfolioPost.socialDescription,
      portfolioPost.socialImage,
      portfolioPost.twitterCard,
      portfolioPost.componentPath,
    ],
  );

  return portfolioPost.slug;
};

seedPortfolioLayoutPost()
  .then(async (slug) => {
    console.log(JSON.stringify({ seeded: true, slug, url: `/portfolio/${slug}` }, null, 2));
    await pool.end();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("Failed to seed portfolio layout post:", error.message || error);
    try {
      await pool.end();
    } catch (_poolError) {
      // Ignore pool shutdown errors during failure handling.
    }
    process.exit(1);
  });
