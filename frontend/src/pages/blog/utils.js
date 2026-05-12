export const FALLBACK_IMAGE_CLASSES = [
  "bg-indigo-100",
  "bg-blue-50",
  "bg-pink-50",
  "bg-emerald-50",
  "bg-blue-900",
];

export const formatDate = (value) => {
  if (!value) {
    return "";
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const getImageClass = (index) =>
  FALLBACK_IMAGE_CLASSES[index % FALLBACK_IMAGE_CLASSES.length];

export const estimateReadTime = (content = "") => {
  const plainText = content.replace(/<[^>]*>/g, " ").trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
