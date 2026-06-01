import http from "./http";
import { getDashboardToken } from "./auth";

const normalizeAssetUrl = (value = "") => {
  if (!value) {
    return "";
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const base = http.defaults.baseURL || "";
  return `${base}${value.startsWith("/") ? value : `/${value}`}`;
};

const normalizeVideo = (video = {}) => ({
  ...video,
  image: normalizeAssetUrl(video.thumbnail || video.image || ""),
  thumbnail: normalizeAssetUrl(video.thumbnail || video.image || ""),
  videoUrl: normalizeAssetUrl(video.videoUrl || video.video_url || ""),
  title: video.title || "Untitled video",
  description: video.description || "",
  category: video.category || "General",
  folder: video.folder || "All",
  status: video.status || "draft",
  duration: video.duration || "",
});

export const getVideos = async ({ includeDrafts = false } = {}) => {
  const token = getDashboardToken();
  const { data } = await http.get("/api/videos", {
    params: includeDrafts ? { includeDrafts: "true" } : undefined,
    headers: includeDrafts && token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  return Array.isArray(data) ? data.map(normalizeVideo) : [];
};

export const createVideo = async (payload) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const token = getDashboardToken();
  const { data } = await http.post("/api/videos", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return normalizeVideo(data);
};
