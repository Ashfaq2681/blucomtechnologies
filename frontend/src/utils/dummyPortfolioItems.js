const dummyPortfolioItems = [
  {
    id: "demo-hyundai",
    title: "Hyundai Pakistan",
    slug: "hyundai",
    category: "Portfolio",
    status: "published",
    createdAt: "2026-05-01T00:00:00.000Z",
    isDummy: true,
  },
  {
    id: "demo-toyota",
    title: "Toyota Motors",
    slug: "toyota-motors",
    category: "Portfolio",
    status: "published",
    createdAt: "2026-05-01T00:00:00.000Z",
    isDummy: true,
  },
];

export const mergePortfolioItems = (items = []) => {
  const slugs = new Set(items.map((item) => item.slug));
  return [...items, ...dummyPortfolioItems.filter((item) => !slugs.has(item.slug))];
};
