export const POST_DESCRIPTION_WORD_LIMIT = 189;
export const POST_TITLE_CHARACTER_LIMIT = 60;

export const stripHtml = (value = "") =>
  String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export const clampWords = (value = "", limit = POST_DESCRIPTION_WORD_LIMIT) => {
  const words = stripHtml(value).split(/\s+/).filter(Boolean);

  if (words.length <= limit) {
    return words.join(" ");
  }

  return `${words.slice(0, limit).join(" ")}...`;
};

export const getPostDescription = (post = {}, limit = POST_DESCRIPTION_WORD_LIMIT) =>
  clampWords(
    post.description || post.seoDescription || post.socialDescription || post.content || "",
    limit,
  );

export const clampCharacters = (value = "", limit = POST_TITLE_CHARACTER_LIMIT) => {
  const normalized = stripHtml(value);

  if (normalized.length <= limit) {
    return normalized;
  }

  const nextValue = normalized.slice(0, limit + 1);
  const lastSpaceIndex = nextValue.lastIndexOf(" ");
  const trimmed =
    lastSpaceIndex >= 50 ? nextValue.slice(0, lastSpaceIndex) : normalized.slice(0, limit);

  return `${trimmed.trim()}...`;
};

export const getPostTitle = (post = {}, limit = POST_TITLE_CHARACTER_LIMIT) =>
  clampCharacters(post.title || "", limit);
