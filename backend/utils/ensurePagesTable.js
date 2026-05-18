const { query } = require("../config/db");

let initialized = false;

const slugify = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const pageSeeds = [
  {
    title: "Landing",
    slug: "landing",
    excerpt: "Blucom Technologies landing page.",
    content: "Primary homepage experience for Blucom Technologies.",
    seoTitle: "Blucom Technologies | Landing",
    seoDescription: "Explore Blucom Technologies services, work, ideas, and contact options.",
    canonicalUrl: "https://www.blucomtechnologies.com/",
  },
  {
    title: "Work",
    slug: "work",
    excerpt: "Blucom Technologies work and portfolio overview.",
    content: "Portfolio and work overview for Blucom Technologies.",
    seoTitle: "Work | Blucom Technologies",
    seoDescription: "Explore Blucom Technologies work across digital strategy, design, campaigns, and growth.",
    canonicalUrl: "https://www.blucomtechnologies.com/work",
  },
  {
    title: "Career",
    slug: "career",
    excerpt: "Career opportunities at Blucom Technologies.",
    content: "Careers page for open roles, applications, and hiring information.",
    seoTitle: "Careers | Blucom Technologies",
    seoDescription: "Explore career opportunities and open roles at Blucom Technologies.",
    canonicalUrl: "https://www.blucomtechnologies.com/careers",
  },
  {
    title: "Investor",
    slug: "investor",
    excerpt: "Investor overview for Blucom Technologies.",
    content: "Investor overview page for Blucom Technologies.",
    seoTitle: "Investors | Blucom Technologies",
    seoDescription: "Review investor information and company overview details from Blucom Technologies.",
    canonicalUrl: "https://www.blucomtechnologies.com/investors",
  },
  {
    title: "Contact",
    slug: "contact",
    excerpt: "Contact Blucom Technologies.",
    content: "Contact page for inquiries, project requests, and business communication.",
    seoTitle: "Contact | Blucom Technologies",
    seoDescription: "Contact Blucom Technologies for services, partnerships, project requests, and support.",
    canonicalUrl: "https://www.blucomtechnologies.com/contact",
  },
];

const serviceTitles = [
  "Brand Strategy",
  "Messaging Positioning",
  "Reputation Management",
  "Product Mapping",
  "Persona Creation",
  "Customer Journey Mapping",
  "Brand Awareness",
  "Strategic Communication",
  "Analysis / Measurement",
  "Impact Measurement",
  "Analytics Implementation",
  "Campaign Optimization",
  "Content Strategy",
  "Search Marketing",
  "Lead Gen",
  "Media Planning / Buying",
  "Content Marketing",
  "Omnichannel Campaigns",
  "Interaction Assets Devs",
  "Nurture Strategies",
  "UI Designing",
  "Prototyping & Wireframing",
  "User Journey Mapping",
  "Interaction Design",
  "Web Maintenance",
  "Data Visualization",
  "Web Development",
];

const serviceSeeds = serviceTitles.map((title) => {
  const slug = slugify(title);

  return {
    title,
    slug,
    excerpt: `${title} services from Blucom Technologies.`,
    content: `${title} service page content for Blucom Technologies.`,
    seoTitle: `${title} | Blucom Technologies`,
    seoDescription: `Explore ${title.toLowerCase()} services from Blucom Technologies.`,
    canonicalUrl: `https://www.blucomtechnologies.com/services/${slug}`,
  };
});

const upsertContentRows = async (tableName, rows) => {
  for (const row of rows) {
    await query(
      `INSERT INTO ${tableName}
        (title, slug, excerpt, content, status, seo_title, seo_description, canonical_url, meta_robots)
       VALUES (?, ?, ?, ?, 'published', ?, ?, ?, 'index,follow')
       ON DUPLICATE KEY UPDATE
        title = VALUES(title),
        excerpt = VALUES(excerpt),
        content = VALUES(content),
        status = VALUES(status),
        seo_title = VALUES(seo_title),
        seo_description = VALUES(seo_description),
        canonical_url = VALUES(canonical_url),
        meta_robots = VALUES(meta_robots)`,
      [
        row.title,
        row.slug,
        row.excerpt,
        row.content,
        row.seoTitle,
        row.seoDescription,
        row.canonicalUrl,
      ],
    );
  }
};

const ensurePagesTable = async () => {
  if (initialized) {
    return;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS pages (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      excerpt TEXT DEFAULT NULL,
      content LONGTEXT DEFAULT NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      seo_title VARCHAR(255) DEFAULT NULL,
      seo_description TEXT DEFAULT NULL,
      canonical_url VARCHAR(500) DEFAULT NULL,
      meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_pages_status_updated_at (status, updated_at),
      INDEX idx_pages_slug_status (slug, status)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS services (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      excerpt TEXT DEFAULT NULL,
      content LONGTEXT DEFAULT NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      seo_title VARCHAR(255) DEFAULT NULL,
      seo_description TEXT DEFAULT NULL,
      canonical_url VARCHAR(500) DEFAULT NULL,
      meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_services_status_updated_at (status, updated_at),
      INDEX idx_services_slug_status (slug, status)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS work (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      excerpt TEXT DEFAULT NULL,
      content LONGTEXT DEFAULT NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      seo_title VARCHAR(255) DEFAULT NULL,
      seo_description TEXT DEFAULT NULL,
      canonical_url VARCHAR(500) DEFAULT NULL,
      meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_work_status_updated_at (status, updated_at),
      INDEX idx_work_slug_status (slug, status)
    )
  `);

  await upsertContentRows("pages", pageSeeds);
  await upsertContentRows("services", serviceSeeds);

  initialized = true;
};

module.exports = ensurePagesTable;
