import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendRoot = path.resolve(__dirname, "..");
const projectRoot = path.resolve(frontendRoot, "..");
const publicSitemapPath = path.join(frontendRoot, "public", "sitemap.xml");
const distSitemapPath = path.join(frontendRoot, "dist", "sitemap.xml");
const skipSitemap = process.env.SKIP_SITEMAP === "true";
const siteUrl = trimTrailingSlash(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    "https://www.blucomtechnologies.com",
);
const staticPublicRoutes = [
  { routePath: "/", changefreq: "weekly", priority: "1.0" },
  { routePath: "/about", changefreq: "weekly", priority: "0.8" },
  { routePath: "/contact", changefreq: "weekly", priority: "0.8" },
  { routePath: "/portfolio", changefreq: "weekly", priority: "0.8" },
  { routePath: "/careers", changefreq: "weekly", priority: "0.8" },
  { routePath: "/ideas", changefreq: "daily", priority: "0.8" },
  { routePath: "/news", changefreq: "daily", priority: "0.8" },
  { routePath: "/work", changefreq: "weekly", priority: "0.8" },
  { routePath: "/blog", changefreq: "daily", priority: "0.9" },
  { routePath: "/the-shift-towards-commerce-driven-marketing", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/analysis-measurement", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/analytics-implementation", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/brand-awareness", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/brand-strategy", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/campaign-optimization", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/content-marketing", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/content-strategy", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/customer-journey-mapping", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/data-visualization", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/identity", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/impact-measurement", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/interaction-assets-devs", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/interaction-design", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/lead-gen", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/media-planning-buying", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/messaging-positioning", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/nurture-strategies", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/omnichannel-campaign-management", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/persona-creation", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/product-mapping", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/prototyping-and-wireframing", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/reputation-management", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/search-marketing", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/strategic-communication", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/ui-designing", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/user-journey-mapping", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/web-development", changefreq: "weekly", priority: "0.8" },
  { routePath: "/services/web-maintenance", changefreq: "weekly", priority: "0.8" },
];

const require = createRequire(import.meta.url);
const { query, pool } = require(path.join(projectRoot, "backend/config/db.js"));
const ensureBlogTables = require(path.join(projectRoot, "backend/utils/ensureBlogTables.js"));

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function normalizePathSegment(slug) {
  return String(slug || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\.\./g, "")
    .replace(/[\\?#]+/g, "-");
}

function absoluteUrl(routePath) {
  const normalizedPath = String(routePath || "/").startsWith("/")
    ? routePath
    : `/${routePath}`;

  return `${siteUrl}${normalizedPath}`;
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatLastmod(value) {
  if (!value) {
    return "";
  }

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString();
}

function assertLastmod(value, context) {
  const lastmod = formatLastmod(value);

  if (!lastmod) {
    throw new Error(`[sitemap] Missing or invalid lastmod for ${context}.`);
  }

  return lastmod;
}

export async function fetchPublishedBlogSitemapRows() {
  await ensureBlogTables();

  const rows = await query(
    `SELECT slug, updated_at
     FROM posts
     WHERE status = 'published'
       AND slug IS NOT NULL
       AND slug <> ''
     ORDER BY updated_at DESC, created_at DESC, id DESC`,
  );

  return rows
    .map((row) => ({
      slug: normalizePathSegment(row.slug),
      updatedAt: row.updated_at,
    }))
    .filter((row) => row.slug);
}

function buildSitemapEntries(blogRows) {
  const latestBlogLastmod =
    blogRows.length > 0
      ? assertLastmod(blogRows[0].updatedAt, `latest blog "${blogRows[0].slug}"`)
      : new Date().toISOString();
  const entries = new Map();

  const addEntry = ({ routePath, lastmod, changefreq, priority }) => {
    const loc = absoluteUrl(routePath);

    if (entries.has(loc)) {
      return;
    }

    entries.set(loc, {
      loc,
      lastmod,
      changefreq,
      priority,
    });
  };

  for (const route of staticPublicRoutes) {
    addEntry({
      ...route,
      lastmod: latestBlogLastmod,
    });
  }

  for (const row of blogRows) {
    addEntry({
      routePath: `/blog/${row.slug}`,
      lastmod: assertLastmod(row.updatedAt, `blog "${row.slug}"`),
      changefreq: "weekly",
      priority: "0.8",
    });
  }

  return [...entries.values()];
}

function renderSitemap(entries) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${escapeXml(entry.changefreq)}</changefreq>
    <priority>${escapeXml(entry.priority)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function writeIfDirectoryExists(filePath, contents) {
  const directory = path.dirname(filePath);

  try {
    await fs.access(directory);
  } catch (_error) {
    return false;
  }

  await fs.writeFile(filePath, contents, "utf8");
  return true;
}

async function generateSitemap() {
  if (skipSitemap) {
    console.log("[sitemap] Skipped because SKIP_SITEMAP=true.");
    return;
  }

  const blogRows = await fetchPublishedBlogSitemapRows();
  const entries = buildSitemapEntries(blogRows);
  const sitemapXml = renderSitemap(entries);

  await fs.mkdir(path.dirname(publicSitemapPath), { recursive: true });
  await fs.writeFile(publicSitemapPath, sitemapXml, "utf8");

  const wroteDist = await writeIfDirectoryExists(distSitemapPath, sitemapXml);

  console.log(`[sitemap] Found ${blogRows.length} published blog post(s).`);
  console.log(`[sitemap] Generated ${entries.length} unique URL(s).`);
  console.log(`[sitemap] Wrote ${path.relative(projectRoot, publicSitemapPath)}.`);

  if (wroteDist) {
    console.log(`[sitemap] Wrote ${path.relative(projectRoot, distSitemapPath)}.`);
  }
}

generateSitemap()
  .catch((error) => {
    console.error("[sitemap] Failed to generate sitemap.xml.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (pool?.end) {
      await pool.end();
    }
  });
