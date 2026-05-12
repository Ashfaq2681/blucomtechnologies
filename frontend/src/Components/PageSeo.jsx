import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.blucomtechnologies.com";
const DEFAULT_IMAGE = `${SITE_URL}/preview.jpg`;
const DEFAULT_TITLE = "Blucom Technologies | Brand Strategy and Digital Marketing";
const DEFAULT_DESCRIPTION =
  "Blucom Technologies builds brand, marketing, and digital systems for companies that need sharper strategy and stronger execution.";

const pageDefaults = {
  "/": {
    title: "Brand Strategy & Digital Marketing Agency | Blucom Technologies",
    description:
      "Blucom Technologies helps brands grow through positioning, digital marketing, UX/UI design, web development, and SEO-driven content.",
  },
  "/about": {
    title: "About Blucom Technologies | Brand and Digital Growth Team",
    description:
      "Learn how Blucom Technologies combines brand strategy, creative execution, and digital systems for growth-focused companies.",
  },
  "/blog": {
    title: "Blucom Technologies Blog | Marketing and Brand Strategy Insights",
    description:
      "Read Blucom Technologies insights on brand strategy, marketing systems, social media, SEO, and digital growth.",
  },
  "/ideas": {
    title: "Ideas | Blucom Technologies",
    description:
      "Explore practical ideas, reports, and creative thinking from Blucom Technologies for modern brand and marketing teams.",
  },
  "/news": {
    title: "News | Blucom Technologies",
    description:
      "Follow Blucom Technologies news, announcements, and timely updates on marketing, technology, and brand growth.",
  },
  "/portfolio": {
    title: "Portfolio | Blucom Technologies",
    description:
      "Review Blucom Technologies work across brand identity, digital experiences, campaigns, and growth-focused creative projects.",
  },
  "/contact": {
    title: "Contact Blucom Technologies",
    description:
      "Contact Blucom Technologies to discuss brand strategy, digital marketing, web development, UX/UI design, or content growth.",
  },
  "/careers": {
    title: "Careers | Blucom Technologies",
    description:
      "Explore career opportunities at Blucom Technologies for people interested in brand strategy, marketing, design, development, and digital growth.",
  },
  "/work": {
    title: "Work | Blucom Technologies",
    description:
      "Explore Blucom Technologies work across strategy, digital products, creative execution, and measurable marketing outcomes.",
  },
  "/investors": {
    title: "Investors | Blucom Technologies",
    description:
      "Review Blucom Technologies investor information, business direction, and growth overview.",
  },
  "/the-shift-towards-commerce-driven-marketing": {
    title: "The Shift Towards Commerce Driven Marketing | Blucom Technologies",
    description:
      "Read Blucom Technologies thinking on commerce-driven marketing, customer behavior, and growth strategy.",
  },
  "/ideas/ideas-single": {
    title: "Ideas Report | Blucom Technologies",
    description:
      "Read a Blucom Technologies ideas report with practical thinking for brand, marketing, and digital growth teams.",
  },
  "/blog/blog-single-b": {
    title: "Marketing Insight | Blucom Technologies Blog",
    description:
      "Read Blucom Technologies marketing insight for practical brand, campaign, and digital growth thinking.",
  },
  "/blog/blog-single-the-oportunity-code": {
    title: "The Opportunity Code | Blucom Technologies Blog",
    description:
      "Read The Opportunity Code from Blucom Technologies for insight into brand growth and marketing strategy.",
  },
};

const normalizePath = (path = "/") => {
  const normalized = path.toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

const formatTitleCase = (value = "") =>
  String(value)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getPageSeo = (path) => {
  const normalizedPath = normalizePath(path);

  if (normalizedPath.startsWith("/services/")) {
    const serviceName = formatTitleCase(normalizedPath.replace("/services/", ""));

    return {
      title: `${serviceName} Services | Blucom Technologies`,
      description: `Blucom Technologies provides ${serviceName.toLowerCase()} services for brands that need clearer positioning, better digital execution, and measurable growth.`,
    };
  }

  return pageDefaults[normalizedPath] || {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
};

const buildBreadcrumbSchema = (canonicalPath, canonicalUrl) => {
  const pathParts = canonicalPath === "/" ? [] : canonicalPath.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...pathParts.map((part, index) => {
      const itemPath = `/${pathParts.slice(0, index + 1).join("/")}`;

      return {
        "@type": "ListItem",
        position: index + 2,
        name: formatTitleCase(part),
        item: `${SITE_URL}${itemPath}`,
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const buildPageSchema = ({ metaTitle, metaDescription, canonicalUrl, image, type }) => ({
  "@context": "https://schema.org",
  "@type": type === "article" ? "Article" : "WebPage",
  name: metaTitle,
  headline: metaTitle,
  description: metaDescription,
  url: canonicalUrl,
  image,
  publisher: {
    "@type": "Organization",
    name: "Blucom Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  },
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blucom Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blucom Technologies",
  url: SITE_URL,
};

const PageSeo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  robots,
  schema,
}) => {
  const canonicalPath = normalizePath(path);
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const metaTitle = title || getPageSeo(canonicalPath).title;
  const metaDescription = description || getPageSeo(canonicalPath).description;
  const metaRobots =
    robots ||
    (canonicalPath.startsWith("/dashboard") ||
    canonicalPath.startsWith("/admin") ||
    canonicalPath === "/login" ||
    canonicalPath === "/testpage" ||
    canonicalPath === "/multistepform"
      ? "noindex, nofollow"
      : "index, follow");
  const schemas = [
    organizationSchema,
    websiteSchema,
    buildPageSchema({ metaTitle, metaDescription, canonicalUrl, image, type }),
    buildBreadcrumbSchema(canonicalPath, canonicalUrl),
    ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
  ];

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={metaRobots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
};

export default PageSeo;
