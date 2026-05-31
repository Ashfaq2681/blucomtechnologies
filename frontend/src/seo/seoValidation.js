const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";

const scoreStatus = (score) => {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor";
};

const scoreGroup = (checks, weight) => {
  if (checks.length === 0) return weight;
  const passed = checks.filter(Boolean).length;
  return Math.round((passed / checks.length) * weight);
};

export const validateSeoPayload = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  schemaGraph,
  primaryImage,
  breadcrumbs,
  contentSignals = [],
}) => {
  const errors = [];
  const warnings = [];
  const recommendations = [];
  const schemaItems = schemaGraph?.["@graph"] || [];
  const schemaTypes = schemaItems.map((item) => item?.["@type"]).filter(Boolean);

  if (!hasValue(title)) errors.push("Missing title.");
  if (!hasValue(description)) errors.push("Missing meta description.");
  if (!hasValue(canonicalUrl)) errors.push("Missing canonical URL.");
  if (!hasValue(primaryImage?.url)) errors.push("Missing featured or primary image.");
  if (!hasValue(ogTitle) || !hasValue(ogDescription) || !hasValue(ogImage)) {
    errors.push("Missing required Open Graph tags.");
  }
  if (!hasValue(twitterTitle) || !hasValue(twitterDescription) || !hasValue(twitterImage)) {
    warnings.push("Missing recommended Twitter card tags.");
  }
  if (!schemaTypes.includes("Organization")) errors.push("Missing Organization schema.");
  if (!schemaTypes.includes("WebSite")) errors.push("Missing WebSite schema.");
  if (!schemaTypes.includes("WebPage")) errors.push("Missing WebPage schema.");
  if (!schemaTypes.includes("BreadcrumbList")) warnings.push("Missing BreadcrumbList schema.");
  if (!breadcrumbs?.length) warnings.push("Missing breadcrumb trail.");

  if (description && (description.length < 120 || description.length > 165)) {
    recommendations.push(`Meta description is ${description.length} characters; 120-165 is preferred.`);
  }

  if (title && (title.length < 35 || title.length > 65)) {
    recommendations.push(`Title is ${title.length} characters; 35-65 is preferred.`);
  }

  const categories = {
    technicalSeo: scoreGroup([title, description, canonicalUrl, ogImage], 40),
    schemaCompleteness: scoreGroup(
      [
        schemaTypes.includes("Organization"),
        schemaTypes.includes("WebSite"),
        schemaTypes.includes("WebPage"),
        schemaTypes.includes("BreadcrumbList"),
        Boolean(primaryImage?.url),
      ],
      25,
    ),
    metadataQuality: scoreGroup([ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage], 20),
    contentSignals: scoreGroup(contentSignals, 15),
  };

  const score = Object.values(categories).reduce((total, value) => total + value, 0);

  return {
    score,
    status: scoreStatus(score),
    errors,
    warnings: [...new Set(warnings)],
    recommendations: [...new Set(recommendations)],
    categories,
  };
};
