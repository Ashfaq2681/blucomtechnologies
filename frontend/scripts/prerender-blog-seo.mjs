import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendRoot = path.resolve(__dirname, "..");
const projectRoot = path.resolve(frontendRoot, "..");
const distRoot = path.join(frontendRoot, "dist");
const distIndexPath = path.join(distRoot, "index.html");
const skipPrerender = process.env.SKIP_PRERENDER === "true";
const strictSeo = process.env.PRERENDER_STRICT_SEO !== "false";
const enforceBuildSeo = process.env.SEO_ENFORCE_BUILD !== "false";
const processingConcurrency = Number(process.env.PRERENDER_CONCURRENCY || 8);
const maxRelatedPosts = Number(process.env.PRERENDER_RELATED_POSTS || 5);
const maxInlineInternalLinks = Number(process.env.PRERENDER_INLINE_LINKS || 3);
const disableRelatedPosts = process.env.DISABLE_RELATED_POSTS === "true";
const disableAutoLinkInjection = process.env.DISABLE_AUTO_LINK_INJECTION === "true";
const siteUrl = trimTrailingSlash(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    "https://www.blucomtechnologies.com",
);

const require = createRequire(import.meta.url);
const { query, pool } = require(path.join(projectRoot, "backend/config/db.js"));
const ensureBlogTables = require(path.join(projectRoot, "backend/utils/ensureBlogTables.js"));
const { computeSeoQuality, generateFinalSeo } = require(path.join(projectRoot, "backend/utils/seoQuality.js"));

const hasValue = (value) => typeof value === "string" && value.trim().length > 0;
const useValue = (value, fallback = "") => (hasValue(value) ? value.trim() : fallback);
const requiredSeoFields = [
  "seo_title",
  "seo_description",
  "focus_keyword",
  "canonical_url",
  "meta_robots",
];

const stripHtml = (value = "") =>
  String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "into",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "this",
  "to",
  "with",
  "why",
]);

const truncate = (value, maxLength = 160) => {
  const text = String(value || "").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

function absoluteUrl(value, fallback = "") {
  const candidate = hasValue(value) ? value.trim() : fallback;

  if (!hasValue(candidate)) {
    return "";
  }

  if (/^https?:\/\//i.test(candidate)) {
    return candidate;
  }

  return `${siteUrl}${candidate.startsWith("/") ? "" : "/"}${candidate}`;
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenize(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function toTermSet(...values) {
  return new Set(values.flatMap((value) => tokenize(value)));
}

function intersectCount(leftSet, rightSet) {
  let count = 0;

  for (const value of leftSet) {
    if (rightSet.has(value)) {
      count += 1;
    }
  }

  return count;
}

function collectMissingSeoFields(post) {
  const finalSeo = generateFinalSeo(post);
  const resolvedFields = {
    seo_title: finalSeo.seoTitle,
    seo_description: finalSeo.seoDescription,
    focus_keyword: finalSeo.focusKeyword,
    canonical_url: finalSeo.canonicalUrl,
    meta_robots: finalSeo.metaRobots,
  };

  return requiredSeoFields.filter((field) => !hasValue(resolvedFields[field]));
}

function assertRequiredSeo(post) {
  if (!strictSeo) {
    return;
  }

  const missingFields = collectMissingSeoFields(post);

  if (missingFields.length > 0) {
    throw new Error(
      `[prerender] Missing required SEO field(s) for slug "${post.slug}": ${missingFields.join(", ")}`,
    );
  }
}

export async function fetchPublishedBlogSlugs() {
  await ensureBlogTables();

  const rows = await query(
    `SELECT slug
     FROM posts
     WHERE status = 'published'
       AND slug IS NOT NULL
       AND slug <> ''
     ORDER BY created_at DESC, id DESC`,
  );

  return rows.map((row) => row.slug).filter(Boolean);
}

export async function fetchBlogBySlug(slug) {
  const rows = await query(
    `SELECT
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
       created_at,
       updated_at,
       seo_title,
       seo_description,
       seo_keywords,
       focus_keyword,
       canonical_url,
       meta_robots,
       readability_notes,
       seo_score,
       seo_breakdown,
       social_title,
       social_description,
       social_image,
       schema_type,
       schema_json
     FROM posts
     WHERE status = 'published'
       AND slug = ?
     LIMIT 1`,
    [slug],
  );

  return rows[0] || null;
}

export async function fetchPublishedBlogsForInternalLinks() {
  await ensureBlogTables();

  return query(
    `SELECT
       id,
       title,
       slug,
       category,
       subcategory,
       content,
       image,
       tags,
       created_at,
       updated_at,
       seo_title,
       seo_description,
       focus_keyword
     FROM posts
     WHERE status = 'published'
       AND slug IS NOT NULL
       AND slug <> ''
     ORDER BY updated_at DESC, created_at DESC, id DESC`,
  );
}

function buildBlogSeo(post) {
  assertRequiredSeo(post);
  const finalSeo = generateFinalSeo(post);
  const seoQuality = computeSeoQuality(post, { finalSeo });

  if (enforceBuildSeo && seoQuality.score < seoQuality.threshold) {
    throw new Error(
      `[prerender] SEO score ${seoQuality.score} is below threshold ${seoQuality.threshold} for slug "${post.slug}". Missing: ${seoQuality.missingFields.join(", ")}`,
    );
  }

  const canonical = absoluteUrl(finalSeo.canonicalUrl, `/blog/${post.slug}/`);
  const image = absoluteUrl(finalSeo.ogImage, absoluteUrl(post.image));
  const title = useValue(finalSeo.seoTitle, post.title);
  const description = useValue(finalSeo.seoDescription, truncate(stripHtml(post.content), 160));
  const robots = useValue(finalSeo.metaRobots, "index, follow");
  const ogTitle = useValue(finalSeo.ogTitle, title);
  const ogDescription = useValue(finalSeo.ogDescription, description);
  const keywords = useValue(
    post.seo_keywords,
    useValue(finalSeo.focusKeyword, useValue(post.tags)),
  );

  return {
    title,
    description,
    robots,
    canonical,
    ogTitle,
    ogDescription,
    image,
    keywords,
    schemaJson: finalSeo.schemaJson || buildSchemaJson(post, { title, description, canonical, image }),
  };
}

function buildSchemaJson(post, seo) {
  if (hasValue(post.schema_json)) {
    try {
      return JSON.stringify(JSON.parse(post.schema_json));
    } catch (_error) {
      console.warn(`[prerender] Ignoring invalid schema_json for slug "${post.slug}".`);
    }
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": hasValue(post.schema_type) ? post.schema_type.trim() : "BlogPosting",
    headline: post.title,
    description: seo.description,
    url: seo.canonical,
    image: seo.image || undefined,
    datePublished: post.created_at || undefined,
    dateModified: post.updated_at || post.created_at || undefined,
    author: {
      "@type": "Organization",
      name: "Blucom Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Blucom Technologies",
    },
  });
}

function toTagArray(tags) {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (!hasValue(tags)) {
    return [];
  }

  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function buildPostSummary(post) {
  return {
    id: post.id,
    title: post.title,
    slug: normalizePathSegment(post.slug),
    url: `/blog/${normalizePathSegment(post.slug)}`,
    category: useValue(post.category),
    subcategory: useValue(post.subcategory),
    description: useValue(
      post.seo_description,
      truncate(stripHtml(post.content), 150),
    ),
    focusKeyword: useValue(post.focus_keyword),
    image: absoluteUrl(post.image),
    tags: toTagArray(post.tags),
    createdAt: post.created_at,
    updatedAt: post.updated_at || post.created_at,
  };
}

function scoreRelatedPost(source, candidate) {
  if (!candidate || source.id === candidate.id || source.slug === candidate.slug) {
    return -1;
  }

  const sourceTags = new Set(toTagArray(source.tags).map((tag) => tag.toLowerCase()));
  const candidateTags = new Set(toTagArray(candidate.tags).map((tag) => tag.toLowerCase()));
  const sourceTerms = toTermSet(
    source.focus_keyword,
    source.tags,
    source.category,
    source.title,
  );
  const candidateTerms = toTermSet(
    candidate.focus_keyword,
    candidate.tags,
    candidate.category,
    candidate.title,
  );

  let score = 0;

  if (hasValue(source.category) && source.category === candidate.category) {
    score += 8;
  }

  if (hasValue(source.subcategory) && source.subcategory === candidate.subcategory) {
    score += 4;
  }

  score += intersectCount(sourceTags, candidateTags) * 5;
  score += intersectCount(sourceTerms, candidateTerms) * 2;

  if (
    hasValue(source.focus_keyword) &&
    hasValue(candidate.focus_keyword) &&
    source.focus_keyword.toLowerCase() === candidate.focus_keyword.toLowerCase()
  ) {
    score += 8;
  }

  return score;
}

function buildRelatedPosts(post, allPosts) {
  if (disableRelatedPosts) {
    return [];
  }

  const scoredPosts = allPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score: scoreRelatedPost(post, candidate),
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return new Date(right.post.updated_at || 0) - new Date(left.post.updated_at || 0);
    })
    .map((entry) => entry.post);

  const fallbackPosts = allPosts
    .filter(
      (candidate) =>
        candidate.slug !== post.slug &&
        !scoredPosts.some((scoredPost) => scoredPost.slug === candidate.slug),
    )
    .sort(
      (left, right) =>
        new Date(right.updated_at || right.created_at || 0) -
        new Date(left.updated_at || left.created_at || 0),
    );

  return [...scoredPosts, ...fallbackPosts]
    .slice(0, Math.max(3, Math.min(maxRelatedPosts, 5)))
    .map(buildPostSummary);
}

function hasInternalLinkTo(content, slug) {
  const normalizedSlug = normalizePathSegment(slug);
  return new RegExp(`href=["'][^"']*/blog/${escapeRegExp(normalizedSlug)}/?["']`, "i").test(
    content,
  );
}

function buildAnchorTextCandidates(post) {
  return [
    useValue(post.focusKeyword),
    useValue(post.title),
    ...toTagArray(post.tags),
  ]
    .map((value) => value.trim())
    .filter((value) => value.length >= 4)
    .filter((value, index, values) => values.findIndex((item) => item.toLowerCase() === value.toLowerCase()) === index)
    .sort((left, right) => right.length - left.length);
}

function linkTextSegment(text, anchorText, href) {
  const pattern = new RegExp(`\\b(${escapeRegExp(anchorText)})\\b`, "i");

  if (!pattern.test(text)) {
    return { text, linked: false };
  }

  return {
    text: text.replace(
      pattern,
      `<a href="${href}" class="internal-blog-link">$1</a>`,
    ),
    linked: true,
  };
}

function injectInternalLinks(content, relatedPosts) {
  if (
    disableAutoLinkInjection ||
    !hasValue(content) ||
    relatedPosts.length === 0 ||
    maxInlineInternalLinks <= 0
  ) {
    return { content: content || "", links: [] };
  }

  const tokens = String(content).split(/(<[^>]+>)/g);
  const insertedLinks = [];
  const linkedSlugs = new Set();
  let anchorDepth = 0;

  for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex += 1) {
    const token = tokens[tokenIndex];

    if (!token) {
      continue;
    }

    if (token.startsWith("<")) {
      if (/^<a[\s>]/i.test(token)) {
        anchorDepth += 1;
      } else if (/^<\/a\s*>/i.test(token)) {
        anchorDepth = Math.max(0, anchorDepth - 1);
      }
      continue;
    }

    if (anchorDepth > 0 || insertedLinks.length >= maxInlineInternalLinks) {
      continue;
    }

    for (const relatedPost of relatedPosts) {
      if (
        insertedLinks.length >= maxInlineInternalLinks ||
        linkedSlugs.has(relatedPost.slug) ||
        hasInternalLinkTo(content, relatedPost.slug)
      ) {
        continue;
      }

      const href = `/blog/${relatedPost.slug}`;
      const anchorCandidates = buildAnchorTextCandidates(relatedPost);

      for (const anchorText of anchorCandidates) {
        const linkedSegment = linkTextSegment(tokens[tokenIndex], anchorText, href);

        if (!linkedSegment.linked) {
          continue;
        }

        tokens[tokenIndex] = linkedSegment.text;
        linkedSlugs.add(relatedPost.slug);
        insertedLinks.push({
          slug: relatedPost.slug,
          href,
          anchorText,
        });
        break;
      }
    }
  }

  return {
    content: tokens.join(""),
    links: insertedLinks,
  };
}

function validateInternalLinks(post, relatedPosts, internalLinks, publishedSlugSet) {
  const sourceSlug = normalizePathSegment(post.slug);
  const seenRelatedSlugs = new Set();

  for (const relatedPost of relatedPosts) {
    if (relatedPost.slug === sourceSlug) {
      throw new Error(`[prerender] Related posts for "${sourceSlug}" include a self-link.`);
    }

    if (seenRelatedSlugs.has(relatedPost.slug)) {
      throw new Error(
        `[prerender] Related posts for "${sourceSlug}" include duplicate slug "${relatedPost.slug}".`,
      );
    }

    if (!publishedSlugSet.has(relatedPost.slug)) {
      throw new Error(
        `[prerender] Related posts for "${sourceSlug}" include unpublished or missing slug "${relatedPost.slug}".`,
      );
    }

    seenRelatedSlugs.add(relatedPost.slug);
  }

  const seenInlineSlugs = new Set();

  for (const internalLink of internalLinks) {
    if (internalLink.slug === sourceSlug) {
      throw new Error(`[prerender] Inline links for "${sourceSlug}" include a self-link.`);
    }

    if (seenInlineSlugs.has(internalLink.slug)) {
      throw new Error(
        `[prerender] Inline links for "${sourceSlug}" include duplicate slug "${internalLink.slug}".`,
      );
    }

    if (!publishedSlugSet.has(internalLink.slug)) {
      throw new Error(
        `[prerender] Inline links for "${sourceSlug}" include unpublished or missing slug "${internalLink.slug}".`,
      );
    }

    seenInlineSlugs.add(internalLink.slug);
  }
}

function buildStaticBlogPayload(post, seo, relatedPosts, linkedContent, internalLinks) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    category: useValue(post.category),
    subcategory: useValue(post.subcategory),
    content: linkedContent || post.content || "",
    originalContent: post.content || "",
    image: absoluteUrl(post.image),
    tags: toTagArray(post.tags),
    status: post.status || "published",
    featured: Boolean(post.featured),
    section: useValue(post.section),
    description: seo.description,
    seoTitle: seo.title,
    seoDescription: seo.description,
    seoKeywords: seo.keywords,
    focusKeyword: useValue(post.focus_keyword),
    canonicalUrl: seo.canonical,
    metaRobots: seo.robots,
    readabilityNotes: useValue(post.readability_notes),
    socialTitle: seo.ogTitle,
    socialDescription: seo.ogDescription,
    socialImage: seo.image,
    schemaType: useValue(post.schema_type, "BlogPosting"),
    schemaJson: seo.schemaJson,
    createdAt: post.created_at,
    updatedAt: post.updated_at || post.created_at,
    relatedPosts,
    internalLinks,
    isPrerendered: true,
  };
}

function serializeForInlineScript(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function buildHeadTags(seo) {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.ogDescription)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta name="twitter:card" content="${seo.image ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.ogDescription)}" />`,
  ];

  if (seo.keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(seo.keywords)}" />`);
  }

  if (seo.image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(seo.image)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(seo.image)}" />`);
  }

  if (seo.schemaJson) {
    tags.push(`<script type="application/ld+json">${seo.schemaJson}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

function countMatches(value, pattern) {
  const matches = value.match(pattern);
  return matches ? matches.length : 0;
}

function removeDefaultSeo(headHtml) {
  return headHtml
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']keywords["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']robots["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']author["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

export function injectSeoIntoHtml(html, seo) {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);

  if (!headMatch) {
    throw new Error("Unable to find <head> in dist/index.html.");
  }

  const cleanedHead = removeDefaultSeo(headMatch[1]).trimEnd();
  const headTags = buildHeadTags(seo);
  const nextHead = `<head>${cleanedHead}\n${headTags}\n  </head>`;

  return html.replace(/<head>[\s\S]*?<\/head>/i, nextHead);
}

function injectStaticBlogPayload(html, payload) {
  const payloadScript = [
    "    <script>",
    `      window.__PRERENDERED_BLOG_POST__ = ${serializeForInlineScript(payload)};`,
    "    </script>",
  ].join("\n");

  if (!/<\/body>/i.test(html)) {
    throw new Error("Unable to find </body> in dist/index.html.");
  }

  return html.replace(/<\/body>/i, `${payloadScript}\n  </body>`);
}

function validateGeneratedHtml(html, seo, outputPath) {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  const headHtml = headMatch ? headMatch[1] : "";
  const relativePath = path.relative(projectRoot, outputPath);

  if (!headMatch) {
    throw new Error(`[prerender] Missing <head> in ${relativePath}`);
  }

  if (!headHtml.includes(`<title>${escapeHtml(seo.title)}</title>`)) {
    throw new Error(`[prerender] Missing expected title in ${relativePath}`);
  }

  if (!headHtml.includes(`<meta name="description" content="${escapeHtml(seo.description)}" />`)) {
    throw new Error(`[prerender] Missing expected meta description in ${relativePath}`);
  }

  if (!headHtml.includes(`<meta name="robots" content="${escapeHtml(seo.robots)}" />`)) {
    throw new Error(`[prerender] Missing expected robots meta in ${relativePath}`);
  }

  if (!headHtml.includes(`<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`)) {
    throw new Error(`[prerender] Missing expected canonical link in ${relativePath}`);
  }

  if (!headHtml.includes(`<meta property="og:title" content="${escapeHtml(seo.ogTitle)}" />`)) {
    throw new Error(`[prerender] Missing expected og:title in ${relativePath}`);
  }

  if (!headHtml.includes(`<meta property="og:description" content="${escapeHtml(seo.ogDescription)}" />`)) {
    throw new Error(`[prerender] Missing expected og:description in ${relativePath}`);
  }

  if (countMatches(headHtml, /<title>[\s\S]*?<\/title>/gi) !== 1) {
    throw new Error(`[prerender] Expected exactly one <title> in ${relativePath}`);
  }

  if (countMatches(headHtml, /<meta\s+name=["']description["'][^>]*>/gi) !== 1) {
    throw new Error(`[prerender] Expected exactly one meta description in ${relativePath}`);
  }

  if (/blucomtechnologies \| Innovative B2B Solutions/i.test(headHtml)) {
    throw new Error(`[prerender] Default title still exists in ${relativePath}`);
  }

  if (/Your trusted partner in web design, brand positioning/i.test(headHtml)) {
    throw new Error(`[prerender] Default description still exists in ${relativePath}`);
  }
}

async function writeBlogHtml(templateHtml, post, allPosts, publishedSlugSet) {
  const slug = normalizePathSegment(post.slug);
  const seo = buildBlogSeo(post);
  const relatedPosts = buildRelatedPosts(post, allPosts);
  const linkedContent = injectInternalLinks(post.content, relatedPosts);
  validateInternalLinks(post, relatedPosts, linkedContent.links, publishedSlugSet);
  const staticPayload = buildStaticBlogPayload(
    post,
    seo,
    relatedPosts,
    linkedContent.content,
    linkedContent.links,
  );
  const html = injectStaticBlogPayload(injectSeoIntoHtml(templateHtml, seo), staticPayload);
  const outputDir = path.join(distRoot, "blog", slug);
  const outputPath = path.join(outputDir, "index.html");

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, html, "utf8");
  validateGeneratedHtml(html, seo, outputPath);

  console.log(
    [
      `[prerender] slug="${slug}"`,
      `seo_title="${seo.title}"`,
      `seo_description="${seo.description}"`,
      `canonical="${seo.canonical}"`,
      `robots="${seo.robots}"`,
      `related_posts="${relatedPosts.map((relatedPost) => relatedPost.slug).join(",")}"`,
      `inline_links="${linkedContent.links.length}"`,
      `file="${path.relative(projectRoot, outputPath)}"`,
    ].join(" "),
  );
}

async function processInBatches(items, worker, concurrency) {
  const safeConcurrency = Math.max(1, Math.min(Number(concurrency) || 1, items.length || 1));
  let nextIndex = 0;

  const workers = Array.from({ length: safeConcurrency }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex], currentIndex);
    }
  });

  await Promise.all(workers);
}

async function prerenderBlogSeo() {
  if (skipPrerender) {
    console.log("[prerender] Skipped because SKIP_PRERENDER=true.");
    return;
  }

  const templateHtml = await fs.readFile(distIndexPath, "utf8");
  const slugs = await fetchPublishedBlogSlugs();
  const allPosts = await fetchPublishedBlogsForInternalLinks();
  const publishedSlugSet = new Set(allPosts.map((post) => normalizePathSegment(post.slug)));

  console.log(`[prerender] Found ${slugs.length} published blog post(s).`);
  console.log(`[prerender] Loaded ${allPosts.length} post(s) for internal linking.`);
  console.log(`[prerender] Related posts: ${disableRelatedPosts ? "disabled" : "enabled"}.`);
  console.log(`[prerender] Auto link injection: ${disableAutoLinkInjection ? "disabled" : "enabled"}.`);
  console.log(`[prerender] Strict SEO validation: ${strictSeo ? "enabled" : "disabled"}.`);
  console.log(`[prerender] SEO quality gate: ${enforceBuildSeo ? "enabled" : "monitoring only"}.`);

  await processInBatches(slugs, async (slug) => {
    console.log(`[prerender] Processing slug="${slug}"`);
    const post = await fetchBlogBySlug(slug);

    if (!post) {
      throw new Error(`[prerender] Could not fetch published post for slug "${slug}".`);
    }

    await writeBlogHtml(templateHtml, post, allPosts, publishedSlugSet);
  }, processingConcurrency);
}

prerenderBlogSeo()
  .catch((error) => {
    console.error("[prerender] Failed to generate static blog SEO pages.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (pool?.end) {
      await pool.end();
    }
  });
