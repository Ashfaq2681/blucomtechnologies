const SITE_URL = String(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    "https://www.blucomtechnologies.com",
).replace(/\/+$/, "");
const DEFAULT_OG_IMAGE =
  process.env.DEFAULT_OG_IMAGE || `${SITE_URL}/assets/blucom-og-default.jpg`;
const DEFAULT_SEO_SCORE_THRESHOLD = Number(process.env.SEO_SCORE_THRESHOLD || 70);
const DEFAULT_MIN_CONTENT_WORDS = Number(process.env.SEO_MIN_CONTENT_WORDS || 300);
const ENABLE_AUTO_SEO = process.env.ENABLE_AUTO_SEO !== "false";
const ENABLE_SEO_SCORING = process.env.ENABLE_SEO_SCORING !== "false";
const ENABLE_SCHEMA_GENERATION = process.env.ENABLE_SCHEMA_GENERATION !== "false";
const SEO_ENFORCE_PUBLISH = process.env.SEO_ENFORCE_PUBLISH !== "false";

const scoreChecks = [
  ["seoTitle", "SEO title", 15, "Missing SEO title", "Add a concise SEO title."],
  ["seoDescription", "SEO description", 15, "Missing meta description", "Add a keyword-focused meta description."],
  ["focusKeyword", "Focus keyword", 10, "Missing focus keyword", "Choose a primary keyword."],
  ["keywordInTitle", "Keyword in SEO title", 10, "Focus keyword not used in SEO title", "Use the focus keyword in the SEO title."],
  ["keywordInDescription", "Keyword in meta description", 10, "Focus keyword not used in meta description", "Use the focus keyword in the meta description."],
  ["canonicalUrl", "Canonical URL", 10, "Missing canonical URL", "Add or generate the canonical URL."],
  ["schemaGenerated", "Schema generated", 10, "Missing structured data", "Generate Article and Breadcrumb schema."],
  ["ogImage", "OG image", 5, "Missing OG image", "Add a featured or branded default image."],
  ["internalLinks", "Internal links", 5, "Missing internal links", "Add at least one internal link."],
  ["contentLength", "Content length", 5, "Content too short", "Expand the article to meet the minimum content length."],
  ["readability", "Readability", 5, "Readability score needs review", "Add readability notes and keep paragraphs scannable."],
];

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";

const stripHtml = (value = "") =>
  String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value = "", maxLength = 160) => {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
};

const countWords = (value = "") => {
  const text = stripHtml(value);
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
};

const countSentences = (value = "") => {
  const text = stripHtml(value);
  return text ? Math.max(1, (text.match(/[.!?]+/g) || []).length) : 0;
};

const includesKeyword = (value, keyword) =>
  hasValue(value) && hasValue(keyword)
    ? String(value).toLowerCase().includes(String(keyword).trim().toLowerCase())
    : false;

const hasInternalLink = (content = "") =>
  /href=["'](?:\/(?!\/)|https?:\/\/(?:www\.)?blucomtechnologies\.com\/)/i.test(String(content));

const absoluteUrl = (value, fallback = "") => {
  const candidate = hasValue(value) ? String(value).trim() : fallback;

  if (!hasValue(candidate)) {
    return "";
  }

  if (/^https?:\/\//i.test(candidate)) {
    return candidate;
  }

  return `${SITE_URL}${candidate.startsWith("/") ? "" : "/"}${candidate}`;
};

const normalizeSlug = (slug = "") =>
  String(slug)
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\.\./g, "")
    .replace(/[\\?#]+/g, "-");

const toTagArray = (tags) => {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (!hasValue(tags)) {
    return [];
  }

  return String(tags)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
};

const inferFocusKeyword = (post = {}) => {
  const manual = post.focusKeyword ?? post.focus_keyword;
  if (hasValue(manual)) {
    return String(manual).trim();
  }

  const tags = toTagArray(post.tags);
  if (tags.length > 0) {
    return tags[0];
  }

  if (hasValue(post.category)) {
    return String(post.category).trim();
  }

  return stripHtml(post.title || "")
    .split(/\s+/)
    .slice(0, 4)
    .join(" ");
};

const buildSeoTitle = (post, keyword) => {
  const title = stripHtml(post.title || "");
  const base = hasValue(keyword) && !includesKeyword(title, keyword)
    ? `${keyword} Strategies for Modern Businesses`
    : title || keyword;
  const suffix = " | Blucom Technologies";
  const candidate = `${base}${suffix}`;

  if (candidate.length <= 65) {
    return candidate;
  }

  return `${truncate(base, Math.max(28, 65 - suffix.length))}${suffix}`;
};

const buildSeoDescription = (post, keyword) => {
  const excerpt = truncate(stripHtml(post.content || ""), 155);
  const subject = hasValue(keyword) ? keyword : post.title;
  const generated = `Learn how ${subject} can improve visibility, conversions, and brand trust with practical strategies from Blucom Technologies.`;

  if (generated.length >= 140 && generated.length <= 160) {
    return generated;
  }

  return truncate(generated, 160) || excerpt;
};

const buildReadabilityNote = (post) => {
  const wordCount = countWords(post.content);
  const sentenceCount = countSentences(post.content);
  const averageSentenceLength = sentenceCount ? Math.round(wordCount / sentenceCount) : 0;

  if (wordCount === 0) {
    return "";
  }

  return `Auto check: ${wordCount} words, about ${averageSentenceLength} words per sentence.`;
};

const getSeoStatus = (score) => {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor";
};

const normalizePostForSeo = (post = {}) => ({
  id: post.id,
  title: post.title || "",
  slug: normalizeSlug(post.slug || ""),
  category: post.category || "",
  content: post.content || "",
  tags: post.tags || "",
  image: post.image || "",
  createdAt: post.createdAt || post.created_at,
  updatedAt: post.updatedAt || post.updated_at || post.created_at,
  seoTitle: post.seoTitle ?? post.seo_title ?? "",
  seoDescription: post.seoDescription ?? post.seo_description ?? "",
  focusKeyword: post.focusKeyword ?? post.focus_keyword ?? "",
  canonicalUrl: post.canonicalUrl ?? post.canonical_url ?? "",
  metaRobots: post.metaRobots ?? post.meta_robots ?? "",
  readabilityNotes: post.readabilityNotes ?? post.readability_notes ?? "",
  socialTitle: post.socialTitle ?? post.social_title ?? "",
  socialDescription: post.socialDescription ?? post.social_description ?? "",
  socialImage: post.socialImage ?? post.social_image ?? post.image ?? "",
  schemaType: post.schemaType ?? post.schema_type ?? "BlogPosting",
  schemaJson: post.schemaJson ?? post.schema_json ?? "",
});

const buildArticleSchema = (post, finalSeo) => ({
  "@context": "https://schema.org",
  "@type": finalSeo.schemaType || "BlogPosting",
  headline: post.title,
  description: finalSeo.seoDescription,
  image: finalSeo.ogImage || undefined,
  author: {
    "@type": "Organization",
    name: "Blucom Technologies",
  },
  publisher: {
    "@type": "Organization",
    name: "Blucom Technologies",
  },
  datePublished: post.createdAt || undefined,
  dateModified: post.updatedAt || post.createdAt || undefined,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": finalSeo.canonicalUrl,
  },
});

const buildBreadcrumbSchema = (post, finalSeo) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_URL}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: post.title,
      item: finalSeo.canonicalUrl,
    },
  ],
});

const buildStructuredData = (post, finalSeo) => {
  if (!ENABLE_SCHEMA_GENERATION) {
    return {
      schemaJson: hasValue(post.schemaJson) ? String(post.schemaJson).trim() : "",
      schemaGenerated: false,
    };
  }

  if (hasValue(post.schemaJson)) {
    try {
      JSON.parse(post.schemaJson);
      return { schemaJson: post.schemaJson, schemaGenerated: true };
    } catch (_error) {
      // Fall through to safe generated schema.
    }
  }

  return {
    schemaJson: JSON.stringify([
      buildArticleSchema(post, finalSeo),
      buildBreadcrumbSchema(post, finalSeo),
    ]),
    schemaGenerated: true,
  };
};

const generateFinalSeo = (post = {}, options = {}) => {
  const normalized = normalizePostForSeo(post);
  const autoEnabled = options.enableAutoSeo ?? ENABLE_AUTO_SEO;
  const keyword = hasValue(normalized.focusKeyword)
    ? normalized.focusKeyword
    : autoEnabled
    ? inferFocusKeyword(normalized)
    : "";
  const excerpt = truncate(stripHtml(normalized.content), 160);
  const generated = {
    seoTitle: buildSeoTitle(normalized, keyword),
    seoDescription: buildSeoDescription(normalized, keyword),
    focusKeyword: keyword,
    canonicalUrl: `${SITE_URL}/blog/${normalized.slug}`,
    metaRobots: "index, follow",
    readabilityNotes: buildReadabilityNote(normalized),
  };

  const finalSeo = {
    seoTitle: hasValue(normalized.seoTitle)
      ? normalized.seoTitle
      : autoEnabled
      ? generated.seoTitle
      : normalized.title,
    seoDescription: hasValue(normalized.seoDescription)
      ? normalized.seoDescription
      : autoEnabled
      ? generated.seoDescription
      : excerpt,
    focusKeyword: hasValue(normalized.focusKeyword)
      ? normalized.focusKeyword
      : autoEnabled
      ? generated.focusKeyword
      : "",
    canonicalUrl: hasValue(normalized.canonicalUrl)
      ? normalized.canonicalUrl
      : autoEnabled
      ? generated.canonicalUrl
      : `${SITE_URL}/blog/${normalized.slug}`,
    metaRobots: hasValue(normalized.metaRobots) ? normalized.metaRobots : generated.metaRobots,
    readabilityNotes: hasValue(normalized.readabilityNotes)
      ? normalized.readabilityNotes
      : autoEnabled
      ? generated.readabilityNotes
      : "",
    schemaType: normalized.schemaType || "BlogPosting",
  };

  finalSeo.ogTitle = hasValue(normalized.socialTitle) ? normalized.socialTitle : finalSeo.seoTitle;
  finalSeo.ogDescription = hasValue(normalized.socialDescription)
    ? normalized.socialDescription
    : finalSeo.seoDescription;
  finalSeo.ogImage = absoluteUrl(normalized.socialImage || normalized.image, DEFAULT_OG_IMAGE);
  finalSeo.twitterTitle = finalSeo.ogTitle;
  finalSeo.twitterDescription = finalSeo.ogDescription;
  finalSeo.twitterImage = finalSeo.ogImage;

  const structuredData = buildStructuredData(normalized, finalSeo);

  return {
    ...finalSeo,
    schemaJson: structuredData.schemaJson,
    schemaGenerated: structuredData.schemaGenerated,
    autoGenerated:
      autoEnabled &&
      (!hasValue(normalized.seoTitle) ||
        !hasValue(normalized.seoDescription) ||
        !hasValue(normalized.focusKeyword) ||
        !hasValue(normalized.canonicalUrl) ||
        !hasValue(normalized.readabilityNotes)),
    generated,
  };
};

const computeSeoQuality = (post, options = {}) => {
  const normalizedPost = normalizePostForSeo(post);
  const finalSeo = options.finalSeo || generateFinalSeo(normalizedPost, options);
  const minContentWords = Number(options.minContentWords || DEFAULT_MIN_CONTENT_WORDS);
  const wordCount = countWords(normalizedPost.content);
  const sentenceCount = countSentences(normalizedPost.content);
  const averageSentenceLength = sentenceCount ? Math.round(wordCount / sentenceCount) : 0;
  const readableByNote = hasValue(finalSeo.readabilityNotes);
  const readableByLength = averageSentenceLength > 0 && averageSentenceLength <= 28;
  const passed = {
    seoTitle: hasValue(finalSeo.seoTitle),
    seoDescription: hasValue(finalSeo.seoDescription),
    focusKeyword: hasValue(finalSeo.focusKeyword),
    keywordInTitle: includesKeyword(finalSeo.seoTitle, finalSeo.focusKeyword),
    keywordInDescription: includesKeyword(finalSeo.seoDescription, finalSeo.focusKeyword),
    canonicalUrl: hasValue(finalSeo.canonicalUrl),
    schemaGenerated: Boolean(finalSeo.schemaGenerated && hasValue(finalSeo.schemaJson)),
    ogImage: hasValue(finalSeo.ogImage),
    internalLinks: hasInternalLink(normalizedPost.content),
    contentLength: wordCount >= minContentWords,
    readability: readableByNote || readableByLength,
  };

  const details = scoreChecks.map(([key, label, weight, warning, improvement]) => ({
    key,
    label,
    weight,
    warning,
    improvement,
    passed: Boolean(passed[key]),
  }));
  const score = ENABLE_SEO_SCORING
    ? details.reduce((total, detail) => total + (detail.passed ? detail.weight : 0), 0)
    : 0;
  const missingFields = details
    .filter((detail) => !detail.passed)
    .map((detail) => detail.warning);
  const warnings = [...missingFields];

  if (wordCount < minContentWords) {
    warnings.push(`Content has ${wordCount} words; minimum is ${minContentWords}.`);
  }

  if (finalSeo.seoTitle.length > 65 || finalSeo.seoTitle.length < 50) {
    warnings.push(`SEO title is ${finalSeo.seoTitle.length} characters; 50-65 preferred.`);
  }

  if (finalSeo.seoDescription.length > 160 || finalSeo.seoDescription.length < 140) {
    warnings.push(
      `Meta description is ${finalSeo.seoDescription.length} characters; 140-160 preferred.`,
    );
  }

  return {
    score,
    status: getSeoStatus(score),
    threshold: Number(options.threshold || DEFAULT_SEO_SCORE_THRESHOLD),
    passed: score >= Number(options.threshold || DEFAULT_SEO_SCORE_THRESHOLD),
    missingFields,
    warnings: [...new Set(warnings)],
    improvements: details
      .filter((detail) => !detail.passed)
      .map((detail) => detail.improvement),
    details,
    wordCount,
    minContentWords,
    averageSentenceLength,
    finalSeo,
    featureFlags: {
      ENABLE_AUTO_SEO,
      ENABLE_SEO_SCORING,
      ENABLE_SCHEMA_GENERATION,
    },
    enforcementEnabled:
      options.enforcementEnabled === undefined
        ? SEO_ENFORCE_PUBLISH
        : Boolean(options.enforcementEnabled),
  };
};

const shouldBlockPublishForSeo = (status, seoQuality) =>
  status === "published" &&
  ENABLE_SEO_SCORING &&
  seoQuality.enforcementEnabled &&
  seoQuality.score < seoQuality.threshold;

module.exports = {
  DEFAULT_MIN_CONTENT_WORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_SEO_SCORE_THRESHOLD,
  ENABLE_AUTO_SEO,
  ENABLE_SCHEMA_GENERATION,
  ENABLE_SEO_SCORING,
  SEO_ENFORCE_PUBLISH,
  SITE_URL,
  absoluteUrl,
  computeSeoQuality,
  generateFinalSeo,
  getSeoStatus,
  hasInternalLink,
  shouldBlockPublishForSeo,
  stripHtml,
  truncate,
};
