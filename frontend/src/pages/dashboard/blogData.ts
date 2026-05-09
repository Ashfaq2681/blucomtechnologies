export type BlogStatus = "Published" | "Draft" | "Scheduled";

export type BlogPostItem = {
  id: number;
  title: string;
  category: string;
  author: string;
  status: BlogStatus;
  publishDate: string;
  readTime: string;
  views: string;
  excerpt: string;
};

export const blogPosts: BlogPostItem[] = [
  {
    id: 1,
    title: "Building a sharper content engine for modern brands",
    category: "Strategy",
    author: "Ayesha Khan",
    status: "Published",
    publishDate: "Apr 06, 2026",
    readTime: "6 min read",
    views: "2.4K",
    excerpt:
      "A practical framework for planning, publishing, and measuring blog content without losing narrative quality.",
  },
  {
    id: 2,
    title: "How editorial calendars reduce campaign bottlenecks",
    category: "Operations",
    author: "Hamza Rafiq",
    status: "Scheduled",
    publishDate: "Apr 12, 2026",
    readTime: "4 min read",
    views: "1.1K",
    excerpt:
      "Turn scattered requests into a predictable publishing flow with clearer ownership and review stages.",
  },
  {
    id: 3,
    title: "Writing for attention without sounding manufactured",
    category: "Writing",
    author: "Sara Ahmed",
    status: "Draft",
    publishDate: "Apr 15, 2026",
    readTime: "8 min read",
    views: "680",
    excerpt:
      "A guide to stronger hooks, better structure, and more persuasive storytelling for brand teams.",
  },
  {
    id: 4,
    title: "SEO topics that still create long-tail growth",
    category: "SEO",
    author: "Bilal Noor",
    status: "Published",
    publishDate: "Apr 03, 2026",
    readTime: "5 min read",
    views: "3.2K",
    excerpt:
      "Content formats and topic clusters that continue to compound search visibility for service businesses.",
  },
];
