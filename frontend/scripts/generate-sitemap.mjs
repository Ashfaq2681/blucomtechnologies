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
const pagesTable = process.env.SITEMAP_PAGES_TABLE || "pages";
const pageSlugColumn = process.env.SITEMAP_PAGE_SLUG_COLUMN || "slug";
const pageUpdatedAtColumn = process.env.SITEMAP_PAGE_UPDATED_AT_COLUMN || "updated_at";
const pageStatusColumn = process.env.SITEMAP_PAGE_STATUS_COLUMN || "status";
const pagePublishedValue = process.env.SITEMAP_PAGE_PUBLISHED_VALUE || "published";
const pageListingPath = process.env.SITEMAP_PAGE_LISTING_PATH || "";
const pageDetailBasePath = process.env.SITEMAP_PAGE_DETAIL_BASE_PATH || "";
const excludedPrefixes = ["/blog", "/news", "/ideas"];

const require = createRequire(import.meta.url);
const { query, pool } = require(path.join(projectRoot, "backend/config/db.js"));
const ensurePageSeoTable = require(path.join(projectRoot, "backend/utils/ensurePageSeoTable.js"));
const ensurePagesTable = require(path.join(projectRoot, "backend/utils/ensurePagesTable.js"));

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function normalizeRoutePath(value = "/") {
  const withoutQuery = String(value || "/").trim().split(/[?#]/)[0] || "/";
  const normalized = `/${withoutQuery.replace(/^\/+|\/+$/g, "")}`.replace(/\/{2,}/g, "/");
  return normalized === "/" ? "/" : normalized.toLowerCase();
}

function normalizePathSegment(slug) {
  return String(slug || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\.\./g, "")
    .replace(/[\\?#]+/g, "-");
}

function normalizeDetailPath(slug) {
  const normalizedSlug = normalizePathSegment(slug);
  const normalizedBase = normalizePathSegment(pageDetailBasePath);
  return normalizeRoutePath(normalizedBase ? `/${normalizedBase}/${normalizedSlug}` : `/${normalizedSlug}`);
}

function isExcludedPath(routePath) {
  const normalizedPath = normalizeRoutePath(routePath);
  return excludedPrefixes.some(
    (prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );
}

function absoluteUrl(routePath) {
  const normalizedPath = normalizeRoutePath(routePath);
  return `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
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

function quoteIdentifier(identifier) {
  if (!/^[A-Za-z0-9_]+$/.test(identifier)) {
    throw new Error(`[sitemap] Invalid MySQL identifier: ${identifier}`);
  }

  return `\`${identifier}\``;
}

async function tableExists(tableName) {
  const rows = await query(
    `SELECT COUNT(*) AS count
     FROM information_schema.tables
     WHERE table_schema = DATABASE()
       AND table_name = ?`,
    [tableName],
  );

  return Number(rows[0]?.count || 0) > 0;
}

async function columnExists(tableName, columnName) {
  const rows = await query(
    `SELECT COUNT(*) AS count
     FROM information_schema.columns
     WHERE table_schema = DATABASE()
       AND table_name = ?
       AND column_name = ?`,
    [tableName, columnName],
  );

  return Number(rows[0]?.count || 0) > 0;
}

export async function fetchPublishedPageRows() {
  await ensurePagesTable();

  if (!(await tableExists(pagesTable))) {
    console.warn(
      `[sitemap] Table "${pagesTable}" was not found. Set SITEMAP_PAGES_TABLE or create the pages table to include detail pages.`,
    );
    return [];
  }

  const hasSlugColumn = await columnExists(pagesTable, pageSlugColumn);
  const hasUpdatedAtColumn = await columnExists(pagesTable, pageUpdatedAtColumn);
  const hasStatusColumn = await columnExists(pagesTable, pageStatusColumn);

  if (!hasSlugColumn) {
    throw new Error(`[sitemap] Missing required column "${pageSlugColumn}" on table "${pagesTable}".`);
  }

  if (!hasUpdatedAtColumn) {
    throw new Error(`[sitemap] Missing required column "${pageUpdatedAtColumn}" on table "${pagesTable}".`);
  }

  const table = quoteIdentifier(pagesTable);
  const slug = quoteIdentifier(pageSlugColumn);
  const updatedAt = quoteIdentifier(pageUpdatedAtColumn);
  const whereClauses = [`${slug} IS NOT NULL`, `${slug} <> ''`];
  const params = [];

  if (hasStatusColumn) {
    whereClauses.push(`${quoteIdentifier(pageStatusColumn)} = ?`);
    params.push(pagePublishedValue);
  } else {
    console.warn(
      `[sitemap] Column "${pageStatusColumn}" was not found on "${pagesTable}". Including all rows with a slug.`,
    );
  }

  const rows = await query(
    `SELECT ${slug} AS slug, ${updatedAt} AS updated_at
     FROM ${table}
     WHERE ${whereClauses.join(" AND ")}
     ORDER BY ${updatedAt} DESC`,
    params,
  );

  return rows
    .map((row) => ({
      routePath: normalizeDetailPath(row.slug),
      updatedAt: row.updated_at,
    }))
    .filter((row) => row.routePath !== "/" && !isExcludedPath(row.routePath));
}

export async function fetchPageListingRows() {
  await ensurePageSeoTable();

  const rows = await query(
    `SELECT path, updated_at
     FROM page_seo
     WHERE path IS NOT NULL
       AND path <> ''
       AND COALESCE(meta_robots, 'index,follow') NOT LIKE '%noindex%'
     ORDER BY updated_at DESC, path ASC`,
  );

  return rows
    .map((row) => ({
      routePath: normalizeRoutePath(row.path),
      updatedAt: row.updated_at,
    }))
    .filter((row) => !isExcludedPath(row.routePath));
}

function buildSitemapEntries(pageRows, listingRows) {
  const now = new Date().toISOString();
  const entries = new Map();

  const addEntry = ({ routePath, lastmod, changefreq = "weekly", priority = "0.8" }) => {
    if (isExcludedPath(routePath)) {
      return;
    }

    const loc = absoluteUrl(routePath);

    if (entries.has(loc)) {
      return;
    }

    entries.set(loc, {
      loc,
      lastmod: assertLastmod(lastmod, `page "${routePath}"`),
      changefreq,
      priority,
    });
  };

  addEntry({
    routePath: "/",
    lastmod:
      listingRows.find((row) => row.routePath === "/")?.updatedAt ||
      pageRows[0]?.updatedAt ||
      now,
  });

  if (pageListingPath) {
    addEntry({
      routePath: pageListingPath,
      lastmod:
        listingRows.find((row) => row.routePath === normalizeRoutePath(pageListingPath))?.updatedAt ||
        pageRows[0]?.updatedAt ||
        now,
    });
  }

  for (const row of listingRows) {
    addEntry({
      routePath: row.routePath,
      lastmod: row.updatedAt,
    });
  }

  for (const row of pageRows) {
    addEntry({
      routePath: row.routePath,
      lastmod: row.updatedAt,
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

async function removeGeneratedFiles() {
  for (const filePath of [publicSitemapPath, distSitemapPath]) {
    try {
      await fs.rm(filePath, { force: true });
    } catch (_error) {
      // Best effort cleanup keeps a failed build from leaving a partial sitemap.
    }
  }
}

async function generateSitemap() {
  if (skipSitemap) {
    console.log("[sitemap] Skipped because SKIP_SITEMAP=true.");
    return;
  }

  const [pageRows, listingRows] = await Promise.all([
    fetchPublishedPageRows(),
    fetchPageListingRows(),
  ]);
  const entries = buildSitemapEntries(pageRows, listingRows);
  const sitemapXml = renderSitemap(entries);

  await fs.mkdir(path.dirname(publicSitemapPath), { recursive: true });
  await fs.writeFile(publicSitemapPath, sitemapXml, "utf8");

  const wroteDist = await writeIfDirectoryExists(distSitemapPath, sitemapXml);

  console.log(`[sitemap] Found ${pageRows.length} published page detail row(s).`);
  console.log(`[sitemap] Found ${listingRows.length} indexable page listing row(s).`);
  console.log(`[sitemap] Generated ${entries.length} unique URL(s).`);
  console.log(`[sitemap] Wrote ${path.relative(projectRoot, publicSitemapPath)}.`);

  if (wroteDist) {
    console.log(`[sitemap] Wrote ${path.relative(projectRoot, distSitemapPath)}.`);
  }
}

generateSitemap()
  .catch(async (error) => {
    console.error("[sitemap] Failed to generate sitemap.xml.");
    console.error(error);
    await removeGeneratedFiles();
    process.exitCode = 1;
  })
  .finally(async () => {
    if (pool?.end) {
      await pool.end();
    }
  });
