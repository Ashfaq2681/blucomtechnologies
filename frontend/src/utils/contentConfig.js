const configs = {
  blog: {
    singular: "Blog",
    plural: "Blogs",
    publicBasePath: "/blog",
    dashboardListPath: "/Dashboard/blog",
    dashboardCreatePath: "/Dashboard/write-blog",
    dashboardEditPath: (id) => `/Dashboard/edit-blog/${id}`,
  },
  idea: {
    singular: "Idea",
    plural: "Ideas",
    publicBasePath: "/ideas",
    dashboardListPath: "/Dashboard/ideas",
    dashboardCreatePath: "/Dashboard/write-ideas",
    dashboardEditPath: (id) => `/Dashboard/edit-ideas/${id}`,
  },
  news: {
    singular: "News",
    plural: "News",
    publicBasePath: "/news",
    dashboardListPath: "/Dashboard/news",
    dashboardCreatePath: "/Dashboard/write-news",
    dashboardEditPath: (id) => `/Dashboard/edit-news/${id}`,
  },
  portfolio: {
    singular: "Portfolio Page",
    plural: "Portfolio Pages",
    publicBasePath: "/portfolio",
    dashboardListPath: "/Dashboard/portfolio",
    dashboardCreatePath: "/Dashboard/portfolio",
    dashboardEditPath: (id) => `/Dashboard/edit-portfolio/${id}`,
  },
};

export const getContentConfig = (type = "blog") => configs[type] || configs.blog;

export default configs;
