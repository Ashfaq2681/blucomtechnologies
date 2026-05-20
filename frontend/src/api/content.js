import http from "./http";

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";
const pickValue = (...values) => {
  const match = values.find(hasValue);
  return match === undefined ? "" : String(match);
};

const normalizeContent = (item = {}) => ({
  ...item,
  tags: Array.isArray(item.tags)
    ? item.tags
    : pickValue(item.tags)
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
  scheduledAt: pickValue(item.scheduledAt, item.scheduled_at),
  seoTitle: pickValue(item.seoTitle, item.seo_title),
  seoDescription: pickValue(item.seoDescription, item.seo_description),
  focusKeyword: pickValue(item.focusKeyword, item.focus_keyword),
  canonicalUrl: pickValue(item.canonicalUrl, item.canonical_url),
  metaRobots: pickValue(item.metaRobots, item.meta_robots, "index,follow"),
  readabilityNotes: pickValue(item.readabilityNotes, item.readability_notes),
  schemaType: pickValue(item.schemaType, item.schema_type, "Article"),
  schemaJson: pickValue(item.schemaJson, item.schema_json),
  socialTitle: pickValue(item.socialTitle, item.social_title),
  socialDescription: pickValue(item.socialDescription, item.social_description),
  socialImage: pickValue(item.socialImage, item.social_image),
  twitterCard: pickValue(item.twitterCard, item.twitter_card, "summary_large_image"),
  componentPath: pickValue(item.componentPath, item.component_path),
  createdAt: pickValue(item.createdAt, item.created_at),
  updatedAt: pickValue(item.updatedAt, item.updated_at),
});

const toFormData = (payload) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });
  return formData;
};

export const getContents = async ({ type, includeDrafts = false }) => {
  const { data } = await http.get("/api/content", { params: { type, includeDrafts } });
  return Array.isArray(data) ? data.map(normalizeContent) : [];
};

export const getContentByIdentifier = async (identifier, { type } = {}) => {
  const { data } = await http.get(`/api/content/${identifier}`, { params: { type } });
  return normalizeContent(data);
};

export const createContent = async (payload) => {
  const { data } = await http.post("/api/content", toFormData(payload), {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return normalizeContent(data);
};

export const updateContent = async (id, payload) => {
  const { data } = await http.put(`/api/content/${id}`, toFormData(payload), {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return normalizeContent(data);
};

export const deleteContent = async (id, { type = "portfolio" } = {}) => {
  const { data } = await http.delete(`/api/content/${id}`, { params: { type } });
  return data;
};
