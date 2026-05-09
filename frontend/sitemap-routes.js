export const sitemapRoutes = [
  // Top-level pages
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio", changefreq: "weekly", priority: 0.8 },
  { path: "/careers", changefreq: "weekly", priority: 0.8 },
  { path: "/ideas", changefreq: "daily", priority: 0.8 },
  { path: "/news", changefreq: "daily", priority: 0.8 },
  { path: "/notfound", changefreq: "weekly", priority: 0.5 },
  { path: "/login", changefreq: "weekly", priority: 0.8 },
  { path: "/multistepform", changefreq: "weekly", priority: 0.8 },
  { path: "/testpage", changefreq: "weekly", priority: 0.8 },
  { path: "/the-shift-towards-commerce-driven-marketing", changefreq: "weekly", priority: 0.8 },
  { path: "/work", changefreq: "weekly", priority: 0.8 },
  { path: "/admindashboard", changefreq: "weekly", priority: 0.8 },
  { path: "/admin", changefreq: "weekly", priority: 0.8 },

  // Blog pages
  { path: "/blog", changefreq: "daily", priority: 0.9 },
  { path: "/blog/blog-single-b", changefreq: "daily", priority: 0.9 },
  { path: "/blog/blog-single-the-oportunity-code", changefreq: "daily", priority: 0.9 },

  // Ideas pages
  { path: "/ideas/ideas-single", changefreq: "daily", priority: 0.8 },

  // Services pages
  { path: "/services/analysis-measurement", changefreq: "weekly", priority: 0.8 },
  { path: "/services/analytics-implementation", changefreq: "weekly", priority: 0.8 },
  { path: "/services/brand-awareness", changefreq: "weekly", priority: 0.8 },
  { path: "/services/brand-strategy", changefreq: "weekly", priority: 0.8 },
  // … add the rest of your routes here similarly
];