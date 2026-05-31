const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";

export const normalizeUrl = (value = "", siteUrl = "") => {
  const candidate = String(value || "").trim();
  if (!candidate) return "";
  if (/^https?:\/\//i.test(candidate)) return candidate;
  const base = String(siteUrl || "").replace(/\/+$/, "");
  return `${base}${candidate.startsWith("/") ? "" : "/"}${candidate}`;
};

export const removeEmptySchemaValues = (input) => {
  if (Array.isArray(input)) {
    return input.map(removeEmptySchemaValues).filter((value) => {
      if (Array.isArray(value)) return value.length > 0;
      if (value && typeof value === "object") return Object.keys(value).length > 0;
      return hasValue(value);
    });
  }

  if (!input || typeof input !== "object") {
    return input;
  }

  return Object.entries(input).reduce((schema, [key, value]) => {
    const normalized = removeEmptySchemaValues(value);
    const isEmptyArray = Array.isArray(normalized) && normalized.length === 0;
    const isEmptyObject =
      normalized &&
      typeof normalized === "object" &&
      !Array.isArray(normalized) &&
      Object.keys(normalized).length === 0;

    if (hasValue(normalized) && !isEmptyArray && !isEmptyObject) {
      schema[key] = normalized;
    }

    return schema;
  }, {});
};

export const buildImageObject = ({ url, width, height, caption, id }) =>
  removeEmptySchemaValues({
    "@type": "ImageObject",
    "@id": id,
    url,
    contentUrl: url,
    width,
    height,
    caption,
  });

export const buildOrganizationSchema = (settings) =>
  removeEmptySchemaValues({
    "@type": "Organization",
    "@id": `${settings.websiteUrl}/#organization`,
    name: settings.companyName,
    url: settings.websiteUrl,
    logo: buildImageObject({
      ...settings.logo,
      id: `${settings.websiteUrl}/#logo`,
      caption: `${settings.companyName} logo`,
    }),
    image: settings.logo?.url,
    sameAs: settings.socialProfiles || [],
    contactPoint: settings.contactPoint
      ? {
          "@type": "ContactPoint",
          contactType: settings.contactPoint.contactType || "customer support",
          telephone: settings.contactPoint.telephone,
          email: settings.contactPoint.email,
          areaServed: settings.contactPoint.areaServed,
          availableLanguage: settings.contactPoint.availableLanguage,
        }
      : undefined,
  });

export const buildWebsiteSchema = (settings) =>
  removeEmptySchemaValues({
    "@type": "WebSite",
    "@id": `${settings.websiteUrl}/#website`,
    name: settings.companyName,
    url: settings.websiteUrl,
    description: settings.description,
    inLanguage: settings.language || "en",
    publisher: {
      "@id": `${settings.websiteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${settings.websiteUrl}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });

export const buildBreadcrumbSchema = ({ siteUrl, breadcrumbs = [] }) =>
  removeEmptySchemaValues({
    "@type": "BreadcrumbList",
    "@id": `${breadcrumbs[breadcrumbs.length - 1]?.url || siteUrl}/#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

export const buildWebPageSchema = (page) =>
  removeEmptySchemaValues({
    "@type": "WebPage",
    "@id": `${page.canonicalUrl}/#webpage`,
    url: page.url,
    name: page.title,
    headline: page.title,
    description: page.description,
    inLanguage: page.language || "en",
    isPartOf: {
      "@id": `${page.siteUrl}/#website`,
    },
    primaryImageOfPage: page.image
      ? buildImageObject({
          ...page.image,
          id: `${page.canonicalUrl}/#primaryimage`,
        })
      : undefined,
    image: page.image?.url,
    breadcrumb: {
      "@id": `${page.canonicalUrl}/#breadcrumb`,
    },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    mainEntityOfPage: page.canonicalUrl,
  });

export const buildSchemaGraph = (schemas) =>
  removeEmptySchemaValues({
    "@context": "https://schema.org",
    "@graph": schemas,
  });
