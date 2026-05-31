const SITE_URL = String(
  process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.blucomtechnologies.com",
).replace(/\/+$/, "");

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";

const removeEmptySchemaValues = (input) => {
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
    const emptyArray = Array.isArray(normalized) && normalized.length === 0;
    const emptyObject =
      normalized &&
      typeof normalized === "object" &&
      !Array.isArray(normalized) &&
      Object.keys(normalized).length === 0;

    if (hasValue(normalized) && !emptyArray && !emptyObject) {
      schema[key] = normalized;
    }

    return schema;
  }, {});
};

const imageObject = ({ url, width, height, caption, id }) =>
  removeEmptySchemaValues({
    "@type": "ImageObject",
    "@id": id,
    url,
    contentUrl: url,
    width,
    height,
    caption,
  });

const organizationSchema = (settings) =>
  removeEmptySchemaValues({
    "@type": "Organization",
    "@id": `${settings.websiteUrl}/#organization`,
    name: settings.companyName,
    url: settings.websiteUrl,
    logo: imageObject({
      ...settings.logo,
      id: `${settings.websiteUrl}/#logo`,
      caption: `${settings.companyName} logo`,
    }),
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

const websiteSchema = (settings) =>
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

const breadcrumbSchema = ({ breadcrumbs, currentUrl }) =>
  removeEmptySchemaValues({
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}/#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

const webPageSchema = (page) =>
  removeEmptySchemaValues({
    "@type": "WebPage",
    "@id": `${page.canonicalUrl}/#webpage`,
    url: page.canonicalUrl,
    name: page.title,
    headline: page.title,
    description: page.description,
    inLanguage: page.language || "en",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    primaryImageOfPage: page.primaryImage
      ? imageObject({
          ...page.primaryImage,
          id: `${page.canonicalUrl}/#primaryimage`,
        })
      : undefined,
    breadcrumb: {
      "@id": `${page.canonicalUrl}/#breadcrumb`,
    },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
  });

const schemaGraph = (schemas) =>
  removeEmptySchemaValues({
    "@context": "https://schema.org",
    "@graph": schemas,
  });

const buildLandingSchema = () => {
  const settings = {
    companyName: "Blucom Technologies",
    websiteUrl: SITE_URL,
    description:
      "Blucom Technologies is a brand strategy, digital marketing, UX/UI design, SEO, and web development agency.",
    logo: {
      url: `${SITE_URL}/logo_main.png`,
      width: 512,
      height: 512,
    },
    socialProfiles: [
      "https://www.facebook.com/blucomtechnologies",
      "https://www.linkedin.com/company/blucomtechnologies",
      "https://twitter.com/blucomtech",
    ],
    contactPoint: {
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    language: "en",
  };
  const canonicalUrl = SITE_URL;
  const breadcrumbs = [{ name: "Home", url: SITE_URL }];
  const primaryImage = {
    url: `${SITE_URL}/landing/heroimage.svg`,
    width: 1200,
    height: 630,
    caption: "Blucom Technologies brand strategy and digital marketing services",
  };

  return schemaGraph([
    organizationSchema(settings),
    websiteSchema(settings),
    webPageSchema({
      title: "Brand Strategy & Digital Marketing Agency | Blucom Technologies",
      description:
        "Blucom Technologies helps brands grow through positioning, digital marketing, UX/UI design, web development, and SEO-driven content.",
      canonicalUrl,
      primaryImage,
      datePublished: "2024-01-01",
      dateModified: "2026-05-31",
      language: "en",
    }),
    breadcrumbSchema({ breadcrumbs, currentUrl: canonicalUrl }),
    imageObject({
      ...primaryImage,
      id: `${canonicalUrl}/#primaryimage`,
    }),
    imageObject({
      url: `${SITE_URL}/preview.jpg`,
      width: 1200,
      height: 630,
      caption: "Blucom Technologies digital growth preview image",
      id: `${canonicalUrl}/#ogimage`,
    }),
  ]);
};

module.exports = {
  SITE_URL,
  buildLandingSchema,
  imageObject,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  schemaGraph,
};
