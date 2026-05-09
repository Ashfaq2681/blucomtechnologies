import http from "./http";

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const normalizePost = (post = {}) => ({
  ...post,
  description: post.description || stripHtml(post.content || "").slice(0, 180),
});

export const getPublishedPosts = async () => {
  const { data } = await http.get("/api/posts");
  return Array.isArray(data) ? data.map(normalizePost) : [];
};

export const getDashboardPosts = async () => {
  const { data } = await http.get("/api/dashboard/posts");
  return Array.isArray(data) ? data.map(normalizePost) : [];
};

export const getPostBySlug = async (slug) => {
  const { data } = await http.get(`/api/posts/${slug}`);
  return normalizePost(data);
};

export const getPostById = async (id) => {
  const { data } = await http.get(`/api/posts/${id}`);
  return normalizePost(data);
};

export const getCategories = async () => {
  const { data } = await http.get("/api/categories");
  return Array.isArray(data) ? data : [];
};

export const createPost = async (payload) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const { data } = await http.post("/api/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const updatePost = async (id, payload) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const { data } = await http.put(`/api/posts/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deletePost = async (id) => {
  const { data } = await http.delete(`/api/posts/${id}`);
  return data;
};
