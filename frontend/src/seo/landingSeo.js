import {
  buildBreadcrumbSchema,
  buildImageObject,
  buildOrganizationSchema,
  buildSchemaGraph,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "./jsonLdBuilder";
import { validateSeoPayload } from "./seoValidation";

export const SITE_URL = String(
  import.meta.env.VITE_SITE_URL || "https://www.blucomtechnologies.com",
).replace(/\/+$/, "");

const publishedDate = "2024-01-01";
const modifiedDate = "2026-05-31";

export const landingSeoPayload = {
  path: "/",
  title: "Brand Strategy & Digital Marketing Agency | Blucom Technologies",
  description:
    "Blucom Technologies helps brands grow through positioning, digital marketing, UX/UI design, web development, and SEO-driven content.",
  keywords:
    "Brand Strategy, Digital Marketing, SEO, UX/UI Design, Content Marketing, Web Development, Social Media Marketing",
  author: "Blucom Technologies",
  canonicalUrl: SITE_URL,
  language: "en",
  datePublished: publishedDate,
  dateModified: modifiedDate,
  primaryImage: {
    url: `${SITE_URL}/landing/heroimage.svg`,
    width: 1200,
    height: 630,
    caption: "Blucom Technologies brand strategy and digital marketing services",
  },
  ogImage: {
    url: `${SITE_URL}/landing/tucson.png`,
    width: 1200,
    height: 630,
    caption: "Blucom Technologies digital growth preview image",
  },
  organization: {
    companyName: "Blucom Technologies",
    websiteUrl: SITE_URL,
    description:
      "Blucom Technologies is a brand strategy, digital marketing, UX/UI design, SEO, and web development agency.",
    logo: {
      url: `${SITE_URL}/logo_main.png`,
      width: 512,
      height: 512,
      caption: "Blucom Technologies logo",
    },
    socialProfiles: [
      "https://www.facebook.com/blucomtechnologies",
      "https://www.linkedin.com/company/blucomtechnologies",
      "https://x.com/blucomtech",
      "https://instagram.com/blucomtechnologies",
    ],
    contactPoint: {
      contactType: "customer support",
      email: "connect@blucomtechnologies.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    language: "en",
  },
  breadcrumbs: [
    {
      name: "Home",
      url: SITE_URL,
    },
  ],
};

export const buildLandingSchemaGraph = () => {
  const payload = landingSeoPayload;
  const imageSchemas = [
    buildImageObject({
      ...payload.primaryImage,
      id: `${payload.canonicalUrl}/#primaryimage`,
    }),
    buildImageObject({
      ...payload.ogImage,
      id: `${payload.canonicalUrl}/#ogimage`,
    }),
  ];

  return buildSchemaGraph([
    buildOrganizationSchema(payload.organization),
    buildWebsiteSchema(payload.organization),
    buildWebPageSchema({
      title: payload.title,
      description: payload.description,
      url: payload.canonicalUrl,
      canonicalUrl: payload.canonicalUrl,
      siteUrl: SITE_URL,
      image: payload.primaryImage,
      datePublished: payload.datePublished,
      dateModified: payload.dateModified,
      breadcrumbs: payload.breadcrumbs,
      language: payload.language,
    }),
    buildBreadcrumbSchema({
      siteUrl: SITE_URL,
      breadcrumbs: payload.breadcrumbs,
    }),
    ...imageSchemas,
  ]);
};

export const buildLandingSeo = () => {
  const schemaGraph = buildLandingSchemaGraph();
  const seo = {
    ...landingSeoPayload,
    socialTitle: "Blucom Technologies - Brand Strategy & Digital Solutions",
    socialDescription:
      "Expert brand positioning, SEO, UX/UI design, web development, and content strategies for growth-focused businesses.",
    socialImage: landingSeoPayload.ogImage.url,
    twitterCard: "summary_large_image",
    schemaGraph,
  };

  return {
    ...seo,
    validation: validateSeoPayload({
      title: seo.title,
      description: seo.description,
      canonicalUrl: seo.canonicalUrl,
      ogTitle: seo.socialTitle,
      ogDescription: seo.socialDescription,
      ogImage: seo.socialImage,
      twitterTitle: seo.socialTitle,
      twitterDescription: seo.socialDescription,
      twitterImage: seo.socialImage,
      schemaGraph,
      primaryImage: seo.primaryImage,
      breadcrumbs: seo.breadcrumbs,
      contentSignals: [true, true, true],
    }),
  };
};
