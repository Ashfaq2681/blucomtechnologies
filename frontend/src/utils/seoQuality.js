export const SITE_URL = String(
  import.meta.env.VITE_SITE_URL || "https://www.blucomtechnologies.com",
).replace(/\/+$/, "");
export const DEFAULT_OG_IMAGE =
  import.meta.env.VITE_DEFAULT_OG_IMAGE || `${SITE_URL}/assets/blucom-og-default.jpg`;
export const SEO_SCORE_THRESHOLD = Number(import.meta.env.VITE_SEO_SCORE_THRESHOLD || 70);
export const SEO_MIN_CONTENT_WORDS = Number(import.meta.env.VITE_SEO_MIN_CONTENT_WORDS || 300);

const checks = [
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

export const stripHtml = (value = "") =>
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
  if (!hasValue(candidate)) return "";
  if (/^https?:\/\//i.test(candidate)) return candidate;
  return `${SITE_URL}${candidate.startsWith("/") ? "" : "/"}${candidate}`;
};

const inferFocusKeyword = (post = {}) => {
  if (hasValue(post.focusKeyword)) return String(post.focusKeyword).trim();
  if (hasValue(post.metaKeywords)) return String(post.metaKeywords).split(",")[0].trim();
  if (hasValue(post.category)) return String(post.category).trim();
  return stripHtml(post.title || "").split(/\s+/).slice(0, 4).join(" ");
};

const buildSeoTitle = (post, keyword) => {
  const title = stripHtml(post.title || "");
  const base = hasValue(keyword) && !includesKeyword(title, keyword)
    ? `${keyword} Strategies for Modern Businesses`
    : title || keyword;
  const suffix = " | Blucom Technologies";
  const candidate = `${base}${suffix}`;
  return candidate.length <= 65 ? candidate : `${truncate(base, 65 - suffix.length)}${suffix}`;
};

const buildSeoDescription = (post, keyword) => {
  const generated = `Learn how ${keyword || post.title} can improve visibility, conversions, and brand trust with practical strategies from Blucom Technologies.`;
  return truncate(generated, 160) || truncate(stripHtml(post.content || ""), 160);
};

export const getSeoStatus = (score) => {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor";
};

export const generateFinalSeo = (post = {}) => {
  const slug = String(post.slug || "").replace(/^\/+|\/+$/g, "");
  const keyword = hasValue(post.focusKeyword) ? post.focusKeyword : inferFocusKeyword(post);
  const seoTitle = hasValue(post.seoTitle) ? post.seoTitle : buildSeoTitle(post, keyword);
  const seoDescription = hasValue(post.seoDescription)
    ? post.seoDescription
    : buildSeoDescription(post, keyword);
  const canonicalUrl = hasValue(post.canonicalUrl)
    ? post.canonicalUrl
    : `${SITE_URL}/blog/${slug}`;
  const socialImage = absoluteUrl(post.socialImage || post.image, DEFAULT_OG_IMAGE);
  const wordCount = countWords(post.content);
  const sentenceCount = countSentences(post.content);

  return {
    seoTitle,
    seoDescription,
    focusKeyword: keyword,
    canonicalUrl,
    metaRobots: hasValue(post.metaRobots) ? post.metaRobots : "index, follow",
    readabilityNotes: hasValue(post.readabilityNotes)
      ? post.readabilityNotes
      : wordCount
      ? `Auto check: ${wordCount} words, about ${Math.round(wordCount / Math.max(1, sentenceCount))} words per sentence.`
      : "",
    ogTitle: post.socialTitle || seoTitle,
    ogDescription: post.socialDescription || seoDescription,
    ogImage: socialImage,
    twitterTitle: post.socialTitle || seoTitle,
    twitterDescription: post.socialDescription || seoDescription,
    twitterImage: socialImage,
    schemaGenerated: true,
    schemaJson: post.schemaJson || "{}",
  };
};

export const computeSeoQuality = (post = {}) => {
  const finalSeo = generateFinalSeo(post);
  const wordCount = countWords(post.content);
  const sentenceCount = countSentences(post.content);
  const averageSentenceLength = sentenceCount ? Math.round(wordCount / sentenceCount) : 0;
  const passed = {
    seoTitle: hasValue(finalSeo.seoTitle),
    seoDescription: hasValue(finalSeo.seoDescription),
    focusKeyword: hasValue(finalSeo.focusKeyword),
    keywordInTitle: includesKeyword(finalSeo.seoTitle, finalSeo.focusKeyword),
    keywordInDescription: includesKeyword(finalSeo.seoDescription, finalSeo.focusKeyword),
    canonicalUrl: hasValue(finalSeo.canonicalUrl),
    schemaGenerated: Boolean(finalSeo.schemaGenerated),
    ogImage: hasValue(finalSeo.ogImage),
    internalLinks: hasInternalLink(post.content),
    contentLength: wordCount >= SEO_MIN_CONTENT_WORDS,
    readability: hasValue(finalSeo.readabilityNotes) || (averageSentenceLength > 0 && averageSentenceLength <= 28),
  };
  const details = checks.map(([key, label, weight, warning, improvement]) => ({
    key,
    label,
    weight,
    warning,
    improvement,
    passed: Boolean(passed[key]),
  }));
  const score = details.reduce((total, detail) => total + (detail.passed ? detail.weight : 0), 0);
  const missingFields = details.filter((detail) => !detail.passed).map((detail) => detail.warning);
  const warnings = [...missingFields];

  if (finalSeo.seoTitle.length > 65 || finalSeo.seoTitle.length < 50) {
    warnings.push(`SEO title is ${finalSeo.seoTitle.length} characters; 50-65 preferred.`);
  }

  if (finalSeo.seoDescription.length > 160 || finalSeo.seoDescription.length < 140) {
    warnings.push(`Meta description is ${finalSeo.seoDescription.length} characters; 140-160 preferred.`);
  }

  return {
    score,
    status: getSeoStatus(score),
    threshold: SEO_SCORE_THRESHOLD,
    passed: score >= SEO_SCORE_THRESHOLD,
    missingFields,
    warnings: [...new Set(warnings)],
    improvements: details.filter((detail) => !detail.passed).map((detail) => detail.improvement),
    details,
    wordCount,
    minContentWords: SEO_MIN_CONTENT_WORDS,
    averageSentenceLength,
    finalSeo,
  };
};
