import http from "./http";

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";
const pickValue = (...values) => {
  const match = values.find((value) => hasValue(value));
  return match === undefined ? "" : String(match);
};

export const normalizeSeoPath = (path = "/") => {
  const normalized = String(path || "/").toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

const normalizePageSeo = (entry = {}) => ({
  ...entry,
  path: normalizeSeoPath(entry.path),
  seoTitle: pickValue(entry.seoTitle, entry.seo_title),
  seoDescription: pickValue(entry.seoDescription, entry.seo_description),
  seoKeywords: pickValue(entry.seoKeywords, entry.seo_keywords, entry.metaKeywords),
  metaKeywords: pickValue(entry.metaKeywords, entry.seoKeywords, entry.seo_keywords),
  focusKeyword: pickValue(entry.focusKeyword, entry.focus_keyword),
  canonicalUrl: pickValue(entry.canonicalUrl, entry.canonical_url),
  metaRobots: pickValue(entry.metaRobots, entry.meta_robots),
  readabilityNotes: pickValue(entry.readabilityNotes, entry.readability_notes),
  socialTitle: pickValue(entry.socialTitle, entry.social_title),
  socialDescription: pickValue(entry.socialDescription, entry.social_description),
  socialImage: pickValue(entry.socialImage, entry.social_image),
  schemaType: pickValue(entry.schemaType, entry.schema_type),
  schemaJson: pickValue(entry.schemaJson, entry.schema_json),
  twitterCard: pickValue(entry.twitterCard, entry.twitter_card),
});

export const getPageSeoEntries = async () => {
  const { data } = await http.get("/api/page-seo");
  return Array.isArray(data) ? data.map(normalizePageSeo) : [];
};

export const getPageSeoEntry = async (path) => {
  const { data } = await http.get("/api/page-seo", {
    params: { path: normalizeSeoPath(path) },
  });
  return data ? normalizePageSeo(data) : null;
};

export const updatePageSeoEntry = async (payload) => {
  const { data } = await http.put("/api/page-seo", {
    ...payload,
    path: normalizeSeoPath(payload.path),
  });
  return normalizePageSeo(data);
};
