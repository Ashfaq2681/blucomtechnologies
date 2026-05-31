import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageSeoEntry } from "../api/pageSeo";
import { buildLandingSeo } from "../seo/landingSeo";

const SITE_URL = "https://www.blucomtechnologies.com";
const DEFAULT_IMAGE = `${SITE_URL}/landing/tucson.png`;
const DEFAULT_TITLE = "Blucom Technologies | Brand Strategy and Digital Marketing";
const DEFAULT_DESCRIPTION =
  "Blucom Technologies builds brand, marketing, and digital systems for companies that need sharper strategy and stronger execution.";

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";
const pickValue = (...values) => {
  const match = values.find((value) => hasValue(value));
  return match === undefined ? "" : String(match);
};

const normalizeStoredSeo = (entry = {}) => ({
  ...entry,
  seoTitle: pickValue(entry.seoTitle, entry.seo_title),
  seoDescription: pickValue(entry.seoDescription, entry.seo_description),
  seoKeywords: pickValue(entry.seoKeywords, entry.seo_keywords, entry.metaKeywords),
  metaKeywords: pickValue(entry.metaKeywords, entry.seoKeywords, entry.seo_keywords),
  focusKeyword: pickValue(entry.focusKeyword, entry.focus_keyword),
  canonicalUrl: pickValue(entry.canonicalUrl, entry.canonical_url),
  metaRobots: pickValue(entry.metaRobots, entry.meta_robots),
  readabilityNotes: pickValue(entry.readabilityNotes, entry.readability_notes),
  socialTitle: pickValue(entry.socialTitle, entry.social_title),
  socialDescription: pickValue(entry.socialDescription, entry.social_description),
  socialImage: pickValue(entry.socialImage, entry.social_image),
  schemaType: pickValue(entry.schemaType, entry.schema_type),
  schemaJson: pickValue(entry.schemaJson, entry.schema_json),
  twitterCard: pickValue(entry.twitterCard, entry.twitter_card),
});

const getPrerenderedPageSeo = (path) => {
  if (typeof window === "undefined") {
    return null;
  }

  const injected = window.__PRERENDERED_PAGE_SEO__;
  if (!injected) {
    return null;
  }

  if (Array.isArray(injected)) {
    return injected.find((entry) => normalizePath(entry?.path) === path) || null;
  }

  if (injected[path]) {
    return injected[path];
  }

  if (!injected.path || normalizePath(injected.path) === path) {
    return injected;
  }

  return null;
};

export const footerLinkedSeoPaths = [
  "/about",
  "/work",
  "/ideas",
  "/news",
  "/careers",
  "/investors",
  "/for-startups",
  "/for-small-business",
  "/for-agencies",
  "/for-ecommerce",
  "/enterprise",
  "/documentation",
  "/guides",
  "/api-reference",
  "/blog",
  "/community",
  "/press",
  "/partners",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/gdpr-compliance",
  "/security",
];

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
  "/portfolio/single": {
    title: "Portfolio Detail | Blucom Technologies",
    description:
      "Review a Blucom Technologies portfolio detail with brand, digital experience, campaign, and growth-focused project context.",
  },
  "/portfolio/hyundai": {
    title: "Hyundai Pakistan Case Study | Blucom Technologies",
    description:
      "See how Blucom Technologies supported Hyundai Pakistan with activation, discovery, design, and digital strategy for the Tucson launch.",
  },
  "/portfolio/toyota-motors": {
    title: "Toyota Motors Digital Experience | Blucom Technologies",
    description:
      "Explore Blucom Technologies work for Toyota Motors Islamabad across interaction design, automation, and digital customer experience.",
  },
  "/portfolio/codility-hub": {
    title: "Codility Hub Interaction Design | Blucom Technologies",
    description:
      "Review Blucom Technologies identity, interface, and interaction design work for Codility Hub Technologies.",
  },
  "/portfolio/fantasy-rewind": {
    title: "Fantasy Rewind Case Study | Blucom Technologies",
    description:
      "Explore Blucom Technologies portfolio work for Fantasy Rewind across digital strategy, activation, and design execution.",
  },
  "/portfolio/hassan-bukhari": {
    title: "Hassan Bukhari Portfolio Work | Blucom Technologies",
    description:
      "Review Blucom Technologies portfolio work for Hassan Bukhari across activation, discovery, design, and digital brand execution.",
  },
  "/contact": {
    title: "Contact Blucom Technologies",
    description:
      "Contact Blucom Technologies to discuss brand strategy, digital marketing, web development, UX/UI design, or content growth.",
  },
  "/notfound": {
    title: "Page Not Found | Blucom Technologies",
    description:
      "The requested Blucom Technologies page could not be found. Return to the main site to explore services, work, insights, and contact options.",
  },
  "/login": {
    title: "Login | Blucom Technologies",
    description:
      "Access the Blucom Technologies dashboard for authorized users managing content, leads, SEO, and website operations.",
  },
  "/multistepform": {
    title: "Project Inquiry Form | Blucom Technologies",
    description:
      "Share project goals, service needs, timelines, and contact details with Blucom Technologies through the guided inquiry form.",
  },
  "/testpage": {
    title: "Project Intake Test Page | Blucom Technologies",
    description:
      "Review Blucom Technologies project intake fields, service selections, and form flow for internal testing and validation.",
  },
  "/admindashboard": {
    title: "Admin Dashboard | Blucom Technologies",
    description:
      "Blucom Technologies internal dashboard for reviewing leads, content, SEO, careers, and operational website activity.",
  },
  "/admin": {
    title: "Admin | Blucom Technologies",
    description:
      "Administrative access for Blucom Technologies website management, content workflows, and internal operational tools.",
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
  "/for-startups": {
    title: "For Startups | Blucom Technologies",
    description:
      "Explore Blucom Technologies services for startups that need focused brand strategy, launch planning, digital execution, and growth foundations.",
  },
  "/for-small-business": {
    title: "For Small Business | Blucom Technologies",
    description:
      "Explore practical branding, marketing, web, and digital growth services from Blucom Technologies for small business teams.",
  },
  "/for-agencies": {
    title: "For Agencies | Blucom Technologies",
    description:
      "Partner with Blucom Technologies for agency support across strategy, design, development, content, campaigns, and digital delivery.",
  },
  "/for-ecommerce": {
    title: "For Ecommerce | Blucom Technologies",
    description:
      "Build stronger ecommerce growth systems with Blucom Technologies through positioning, content, performance marketing, and digital experience design.",
  },
  "/enterprise": {
    title: "Enterprise Solutions | Blucom Technologies",
    description:
      "Explore enterprise-ready brand, digital marketing, content, analytics, and web solutions from Blucom Technologies.",
  },
  "/documentation": {
    title: "Documentation | Blucom Technologies",
    description:
      "Read Blucom Technologies documentation for platform information, workflows, service references, and implementation guidance.",
  },
  "/guides": {
    title: "Guides | Blucom Technologies",
    description:
      "Explore Blucom Technologies guides covering brand strategy, marketing execution, digital systems, content planning, and growth workflows.",
  },
  "/api-reference": {
    title: "API Reference | Blucom Technologies",
    description:
      "Review Blucom Technologies API reference information for integrations, technical workflows, and implementation details.",
  },
  "/community": {
    title: "Community | Blucom Technologies",
    description:
      "Learn about Blucom Technologies community initiatives, collaboration opportunities, mentorship, and digital ecosystem support.",
  },
  "/press": {
    title: "Press | Blucom Technologies",
    description:
      "Find Blucom Technologies press information, company background, announcements, and media resources.",
  },
  "/partners": {
    title: "Partners | Blucom Technologies",
    description:
      "Explore partnership opportunities with Blucom Technologies across brand strategy, digital marketing, technology, and creative delivery.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Blucom Technologies",
    description:
      "Read the Blucom Technologies privacy policy covering data handling, website usage, communications, and user privacy rights.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Blucom Technologies",
    description:
      "Review Blucom Technologies terms of service for website usage, service conditions, responsibilities, and legal information.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Blucom Technologies",
    description:
      "Read the Blucom Technologies cookie policy covering website cookies, tracking technologies, preferences, and analytics usage.",
  },
  "/gdpr-compliance": {
    title: "GDPR Compliance | Blucom Technologies",
    description:
      "Review Blucom Technologies GDPR compliance information, privacy rights, data processing practices, and user request options.",
  },
  "/security": {
    title: "Security | Blucom Technologies",
    description:
      "Learn about Blucom Technologies security practices for website operations, data protection, access control, and platform reliability.",
  },
  "/blogsingle": {
    title: "Blog Detail | Blucom Technologies",
    description:
      "Read Blucom Technologies blog detail content with practical thinking for brand strategy, marketing execution, and digital growth.",
  },
  "/overviewsingle": {
    title: "Investor Overview Detail | Blucom Technologies",
    description:
      "Review Blucom Technologies investor overview details, company context, and business information.",
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

const serviceDefaults = {
  "/services/analysis-measurement": {
    title: "Analysis and Measurement Services | Blucom Technologies",
    description:
      "Turn campaign, channel, and customer data into clear measurement systems that help teams understand performance and improve marketing decisions.",
  },
  "/services/analytics-implementation": {
    title: "Analytics Implementation Services | Blucom Technologies",
    description:
      "Set up reliable analytics, tracking, dashboards, and reporting foundations so marketing and sales teams can act on trustworthy performance data.",
  },
  "/services/brand-awareness": {
    title: "Brand Awareness Services | Blucom Technologies",
    description:
      "Build stronger brand visibility through audience insight, campaign planning, creative messaging, and media strategies designed for recognition.",
  },
  "/services/brand-strategy": {
    title: "Brand Strategy Services | Blucom Technologies",
    description:
      "Define positioning, messaging, identity direction, and growth strategy so your brand communicates clearly across every customer touchpoint.",
  },
  "/services/campaign-optimization": {
    title: "Campaign Optimization Services | Blucom Technologies",
    description:
      "Improve marketing campaign performance through audience refinement, creative testing, conversion analysis, and ongoing budget optimization.",
  },
  "/services/content-marketing": {
    title: "Content Marketing Services | Blucom Technologies",
    description:
      "Plan and produce content that supports search visibility, brand trust, lead generation, and customer education across digital channels.",
  },
  "/services/content-strategy": {
    title: "Content Strategy Services | Blucom Technologies",
    description:
      "Create content systems, topics, formats, and publishing plans that connect brand messaging with measurable business and audience goals.",
  },
  "/services/customer-journey-mapping": {
    title: "Customer Journey Mapping Services | Blucom Technologies",
    description:
      "Map customer touchpoints, pain points, and decision paths to improve user experience, campaign planning, and conversion opportunities.",
  },
  "/services/data-visualization": {
    title: "Data Visualization Services | Blucom Technologies",
    description:
      "Convert complex marketing and business data into clear dashboards, reports, and visual systems that support faster decision making.",
  },
  "/services/identity": {
    title: "Brand Identity Services | Blucom Technologies",
    description:
      "Develop visual and verbal identity systems including logos, typography, messaging, and design rules that make brands easier to recognize.",
  },
  "/services/impact-measurement": {
    title: "Impact Measurement Services | Blucom Technologies",
    description:
      "Measure marketing impact across channels, campaigns, and customer outcomes with practical frameworks for ROI, growth, and accountability.",
  },
  "/services/interaction-assets-devs": {
    title: "Interaction Assets Development | Blucom Technologies",
    description:
      "Create interactive digital assets, interface elements, and campaign experiences that support clearer engagement across web and marketing channels.",
  },
  "/services/interaction-design": {
    title: "Interaction Design Services | Blucom Technologies",
    description:
      "Design user interactions, flows, and digital experiences that make websites, products, and campaigns easier to understand and use.",
  },
  "/services/lead-gen": {
    title: "Lead Generation Services | Blucom Technologies",
    description:
      "Build lead generation systems using landing pages, content, paid media, automation, and conversion-focused campaign strategy.",
  },
  "/services/media-planning-buying": {
    title: "Media Planning and Buying Services | Blucom Technologies",
    description:
      "Plan, buy, and optimize media across digital channels with audience strategy, budget control, and performance measurement built in.",
  },
  "/services/messaging-positioning": {
    title: "Messaging and Positioning Services | Blucom Technologies",
    description:
      "Shape brand positioning, value propositions, messaging pillars, and communication frameworks that make offers easier to understand and choose.",
  },
  "/services/nurture-strategies": {
    title: "Nurture Strategy Services | Blucom Technologies",
    description:
      "Develop email, content, retargeting, and automation strategies that move prospects from initial interest to stronger buying readiness.",
  },
  "/services/omnichannel-campaign-management": {
    title: "Omnichannel Campaign Management | Blucom Technologies",
    description:
      "Coordinate campaigns across search, social, email, paid media, and content so audiences receive consistent messages across every touchpoint.",
  },
  "/services/persona-creation": {
    title: "Persona Creation Services | Blucom Technologies",
    description:
      "Build practical audience personas using research, behavioral signals, market context, and customer needs to guide messaging and campaigns.",
  },
  "/services/product-mapping": {
    title: "Product Mapping Services | Blucom Technologies",
    description:
      "Clarify product portfolios, positioning, audience fit, and opportunity areas so teams can market offerings with stronger strategic focus.",
  },
  "/services/prototyping-and-wireframing": {
    title: "Prototyping and Wireframing Services | Blucom Technologies",
    description:
      "Create wireframes and prototypes that validate page structure, user flows, content hierarchy, and interface behavior before development.",
  },
  "/services/reputation-management": {
    title: "Reputation Management Services | Blucom Technologies",
    description:
      "Protect and improve brand reputation through monitoring, response planning, review strategy, sentiment insight, and communication systems.",
  },
  "/services/search-marketing": {
    title: "Search Marketing Services | Blucom Technologies",
    description:
      "Improve search visibility through SEO strategy, keyword planning, content optimization, technical signals, and paid search campaign support.",
  },
  "/services/strategic-communication": {
    title: "Strategic Communication Services | Blucom Technologies",
    description:
      "Plan clear communication strategies for brand launches, campaigns, stakeholders, and market moments that require consistent messaging.",
  },
  "/services/ui-designing": {
    title: "UI Design Services | Blucom Technologies",
    description:
      "Design clean, usable interfaces for websites, dashboards, and digital products with clear hierarchy, brand consistency, and conversion focus.",
  },
  "/services/user-journey-mapping": {
    title: "User Journey Mapping Services | Blucom Technologies",
    description:
      "Map user behavior, decision points, and experience gaps to improve website structure, campaign journeys, and digital product flows.",
  },
  "/services/web-development": {
    title: "Web Development Services | Blucom Technologies",
    description:
      "Build responsive, performance-focused websites and web experiences that support brand credibility, search visibility, and conversion goals.",
  },
  "/services/web-maintenance": {
    title: "Web Maintenance Services | Blucom Technologies",
    description:
      "Keep websites stable, secure, updated, and performance-ready with ongoing maintenance, monitoring, fixes, and content support.",
  },
  "/services/new-folder/buying": {
    title: "Media Buying Services | Blucom Technologies",
    description:
      "Plan and manage media buying with budget discipline, audience targeting, channel selection, and performance tracking for growth campaigns.",
  },
  "/services/new-folder/omnichannel-campaign-management": {
    title: "Omnichannel Campaign Services | Blucom Technologies",
    description:
      "Manage integrated campaigns across digital channels with coordinated messaging, audience planning, optimization, and performance reporting.",
  },
};

const normalizePath = (path = "/") => {
  const normalized = path.toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

export const getKnownPageSeoPaths = () =>
  Array.from(new Set([...footerLinkedSeoPaths, ...Object.keys(pageDefaults), ...Object.keys(serviceDefaults)]))
    .map(normalizePath)
    .sort((first, second) => first.localeCompare(second));

const formatTitleCase = (value = "") =>
  String(value)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getPageSeo = (path) => {
  const normalizedPath = normalizePath(path);

  if (normalizedPath.startsWith("/services/")) {
    if (serviceDefaults[normalizedPath]) {
      return serviceDefaults[normalizedPath];
    }

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
  "@type": type || "WebPage",
  name: metaTitle,
  headline: metaTitle,
  description: metaDescription,
  url: canonicalUrl,
  image,
  publisher: {
    "@type": "Organization",
    name: "Blucom Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/logo_main.png`,
  },
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blucom Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/logo_main.png`,
  sameAs: [
    "https://www.facebook.com/blucomtechnologies",
    "https://www.linkedin.com/company/blucomtechnologies",
    "https://x.com/blucomtech",
    "https://instagram.com/blucomtechnologies",
  ],
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
  const isLandingPage = canonicalPath === "/";
  const landingSeo = isLandingPage ? buildLandingSeo() : null;
  const isCompletedContentPath = /^\/(blog|ideas|news)\//.test(canonicalPath);
  const [storedSeo, setStoredSeo] = useState(() => {
    const prerenderedSeo = getPrerenderedPageSeo(canonicalPath);
    return prerenderedSeo ? normalizeStoredSeo(prerenderedSeo) : undefined;
  });
  const fallbackSeo = getPageSeo(canonicalPath);
  const canonicalUrl =
    landingSeo?.canonicalUrl ||
    storedSeo?.canonicalUrl ||
    `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const metaTitle = landingSeo?.title || storedSeo?.seoTitle || title || fallbackSeo.title;
  const metaDescription =
    landingSeo?.description || storedSeo?.seoDescription || description || fallbackSeo.description;
  const metaKeywords = landingSeo?.keywords || storedSeo?.metaKeywords || storedSeo?.seoKeywords || keywords;
  const socialTitle = landingSeo?.socialTitle || storedSeo?.socialTitle || metaTitle;
  const socialDescription = landingSeo?.socialDescription || storedSeo?.socialDescription || metaDescription;
  const socialImage = landingSeo?.socialImage || storedSeo?.socialImage || image;
  const twitterCard = landingSeo?.twitterCard || storedSeo?.twitterCard || "summary_large_image";
  const schemaType = storedSeo?.schemaType || (type === "article" ? "Article" : "WebPage");
  const openGraphType = schemaType === "Article" || type === "article" ? "article" : type;
  const storedSchema = storedSeo?.schemaJson
    ? (() => {
        try {
          return JSON.parse(storedSeo.schemaJson);
        } catch (_error) {
          return null;
        }
      })()
    : null;
  const metaRobots =
    robots ||
    storedSeo?.metaRobots ||
    (canonicalPath.startsWith("/dashboard") ||
    canonicalPath.startsWith("/admin") ||
    canonicalPath === "/login" ||
    canonicalPath === "/testpage" ||
    canonicalPath === "/multistepform"
      ? "noindex, nofollow"
      : "index, follow");
  const schemas = landingSeo
    ? landingSeo.schemaGraph
    : [
        organizationSchema,
        websiteSchema,
        buildPageSchema({ metaTitle, metaDescription, canonicalUrl, image: socialImage, type: schemaType }),
        buildBreadcrumbSchema(canonicalPath, canonicalUrl),
        ...(storedSchema ? [storedSchema] : []),
        ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
      ];

  useEffect(() => {
    let mounted = true;
    const prerenderedSeo = getPrerenderedPageSeo(canonicalPath);

    if (isLandingPage) {
      setStoredSeo(null);
      return () => {
        mounted = false;
      };
    }

    if (isCompletedContentPath) {
      setStoredSeo(null);
      return () => {
        mounted = false;
      };
    }

    if (prerenderedSeo) {
      setStoredSeo(normalizeStoredSeo(prerenderedSeo));
    } else {
      setStoredSeo(undefined);
    }

    const loadStoredSeo = async () => {
      try {
        const entry = await getPageSeoEntry(canonicalPath);
        if (mounted) {
          setStoredSeo(entry ? normalizeStoredSeo(entry) : null);
        }
      } catch (_error) {
        if (mounted) {
          setStoredSeo(null);
        }
      }
    };

    loadStoredSeo();

    return () => {
      mounted = false;
    };
  }, [canonicalPath, isCompletedContentPath, isLandingPage]);

  if (isCompletedContentPath) {
    return null;
  }

  if (!isLandingPage && storedSeo === undefined) {
    return null;
  }

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <meta name="robots" content={metaRobots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:type" content={openGraphType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={socialImage} />
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
};

export default PageSeo;
