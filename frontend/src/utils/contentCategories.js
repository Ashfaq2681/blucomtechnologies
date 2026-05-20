const categoriesByType = {
  portfolio: [
    {
      id: "portfolio-case-studies",
      name: "Portfolio",
      subcategories: [
        { id: "portfolio-branding", name: "Branding" },
        { id: "portfolio-digital", name: "Digital Experience" },
        { id: "portfolio-campaigns", name: "Campaigns" },
        { id: "portfolio-growth", name: "Growth" },
      ],
    },
  ],
  idea: [{ id: "ideas", name: "Ideas", subcategories: [] }],
  news: [{ id: "news", name: "News", subcategories: [] }],
};

export const dedupeCategories = (categories = []) => {
  const seen = new Set();
  return categories.filter((category) => {
    const key = String(category.name || "").trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const getDefaultCategoriesByType = (type) => categoriesByType[type] || categoriesByType.portfolio;
