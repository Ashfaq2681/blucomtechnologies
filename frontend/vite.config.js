import { createRequire } from "node:module";
import path from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

const siteUrl = String(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    "https://www.blucomtechnologies.com",
).replace(/\/+$/, "");

const hasValue = (value) => value !== undefined && value !== null && String(value).trim() !== "";
const useValue = (value, fallback = "") => (hasValue(value) ? String(value).trim() : fallback);
const stripHtml = (value = "") => String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const truncate = (value, maxLength = 160) => {
  const text = String(value || "").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
};
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const absoluteUrl = (value, fallback = "") => {
  const candidate = useValue(value, fallback);

  if (!candidate) {
    return "";
  }

  return /^https?:\/\//i.test(candidate)
    ? candidate
    : `${siteUrl}${candidate.startsWith("/") ? "" : "/"}${candidate}`;
};

const landingSeo = {
  title: "Brand Strategy & Digital Marketing Agency | Blucom Technologies",
  description:
    "Blucom Technologies helps brands grow through positioning, digital marketing, UX/UI design, web development, and SEO-driven content.",
  keywords:
    "Brand Strategy, Digital Marketing, SEO, UX/UI Design, Content Marketing, Web Development, Social Media Marketing",
  canonical: siteUrl,
  primaryImage: `${siteUrl}/landing/heroimage.svg`,
  socialImage: `${siteUrl}/landing/tucson.png`,
};

const defaultSocialImage = `${siteUrl}/landing/tucson.png`;
const defaultLogo = `${siteUrl}/logo_main.png`;

const collectionPagePaths = new Set(["/blog", "/ideas", "/news", "/portfolio"]);
const systemNoindexPaths = new Set(["/login", "/testpage", "/multistepform", "/notfound"]);

function formatRouteSegment(value = "") {
  return String(value)
    .replace(/\.[a-z0-9]+$/i, "")
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildRouteLabel(pathname = "/") {
  if (pathname === "/") {
    return "Home";
  }

  const parts = pathname.split("/").filter(Boolean);
  const lastPart = parts[parts.length - 1] || "Page";
  return formatRouteSegment(lastPart);
}

function buildRouteDescription(pathname = "/", label = "Page") {
  if (pathname.startsWith("/services/")) {
    return `Explore ${label.toLowerCase()} services from Blucom Technologies for clearer brand strategy, stronger digital execution, and measurable growth.`;
  }

  if (pathname.startsWith("/portfolio/")) {
    return `Review ${label} portfolio work from Blucom Technologies across strategy, design, digital experience, and growth-focused execution.`;
  }

  if (pathname.startsWith("/blog/") || pathname.startsWith("/ideas/") || pathname.startsWith("/news/")) {
    return `Read ${label} from Blucom Technologies for practical thinking on brand strategy, digital marketing, technology, and growth.`;
  }

  return `Explore ${label} from Blucom Technologies, covering brand strategy, digital marketing, web development, UX/UI design, and growth systems.`;
}

function getFallbackRouteSeo(pathname = "/") {
  if (pathname === "/") {
    return {
      title: landingSeo.title,
      description: landingSeo.description,
      keywords: landingSeo.keywords,
      socialTitle: "Blucom Technologies - Brand Strategy & Digital Solutions",
      socialDescription:
        "Expert brand positioning, SEO, UX/UI design, web development, and content strategies for growth-focused businesses.",
      image: landingSeo.socialImage,
      schemaType: "WebPage",
    };
  }

  const label = buildRouteLabel(pathname);

  return {
    title: `${label} | Blucom Technologies`,
    description: buildRouteDescription(pathname, label),
    keywords: `${label}, Blucom Technologies, Brand Strategy, Digital Marketing, SEO, Web Development`,
    socialTitle: `${label} | Blucom Technologies`,
    socialDescription: buildRouteDescription(pathname, label),
    image: defaultSocialImage,
    schemaType: collectionPagePaths.has(pathname) ? "CollectionPage" : "WebPage",
  };
}

function buildLandingSchemaJson() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Blucom Technologies",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/logo_main.png`,
          contentUrl: `${siteUrl}/logo_main.png`,
          width: 512,
          height: 512,
          caption: "Blucom Technologies logo",
        },
        image: `${siteUrl}/logo_main.png`,
        sameAs: [
          "https://www.facebook.com/blucomtechnologies",
          "https://www.linkedin.com/company/blucomtechnologies",
          "https://x.com/blucomtech",
          "https://instagram.com/blucomtechnologies",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "connect@blucomtechnologies.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Blucom Technologies",
        url: siteUrl,
        description:
          "Blucom Technologies is a brand strategy, digital marketing, UX/UI design, SEO, and web development agency.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: landingSeo.title,
        headline: landingSeo.title,
        description: landingSeo.description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${siteUrl}/#primaryimage` },
        image: landingSeo.primaryImage,
        breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
        datePublished: "2024-01-01",
        dateModified: "2026-05-31",
        mainEntityOfPage: siteUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#primaryimage`,
        url: landingSeo.primaryImage,
        contentUrl: landingSeo.primaryImage,
        width: 1200,
        height: 630,
        caption: "Blucom Technologies brand strategy and digital marketing services",
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#ogimage`,
        url: landingSeo.socialImage,
        contentUrl: landingSeo.socialImage,
        width: 1200,
        height: 630,
        caption: "Blucom Technologies digital growth preview image",
      },
    ],
  });
}

function buildLandingTags() {
  return [
    `<title>${escapeHtml(landingSeo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(landingSeo.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(landingSeo.keywords)}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<link rel="canonical" href="${escapeHtml(landingSeo.canonical)}" />`,
    `<meta property="og:title" content="Blucom Technologies - Brand Strategy & Digital Solutions" />`,
    `<meta property="og:description" content="Expert brand positioning, SEO, UX/UI design, web development, and content strategies for growth-focused businesses." />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtml(landingSeo.canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(landingSeo.socialImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="Blucom Technologies - Brand Strategy & Digital Solutions" />`,
    `<meta name="twitter:description" content="Expert brand positioning, SEO, UX/UI design, web development, and content strategies for growth-focused businesses." />`,
    `<meta name="twitter:image" content="${escapeHtml(landingSeo.socialImage)}" />`,
    `<script type="application/ld+json">${buildLandingSchemaJson()}</script>`,
  ];
}

function buildBreadcrumbGraph(pathname = "/", canonical = siteUrl) {
  const parts = pathname === "/" ? [] : pathname.split("/").filter(Boolean);
  const elements = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    ...parts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: formatRouteSegment(part),
      item: `${siteUrl}/${parts.slice(0, index + 1).join("/")}`,
    })),
  ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical}/#breadcrumb`,
    itemListElement: elements,
  };
}

function buildBaseSchemaGraph({ pathname, title, description, canonical, image, schemaType }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Blucom Technologies",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: defaultLogo,
          contentUrl: defaultLogo,
          width: 512,
          height: 512,
          caption: "Blucom Technologies logo",
        },
        image: defaultLogo,
        sameAs: [
          "https://www.facebook.com/blucomtechnologies",
          "https://www.linkedin.com/company/blucomtechnologies",
          "https://x.com/blucomtech",
          "https://instagram.com/blucomtechnologies",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "connect@blucomtechnologies.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Blucom Technologies",
        url: siteUrl,
        description:
          "Blucom Technologies is a brand strategy, digital marketing, UX/UI design, SEO, and web development agency.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": schemaType || "WebPage",
        "@id": `${canonical}/#webpage`,
        url: canonical,
        name: title,
        headline: title,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: { "@id": `${canonical}/#primaryimage` },
        image,
        breadcrumb: { "@id": `${canonical}/#breadcrumb` },
        dateModified: "2026-05-31",
        mainEntityOfPage: canonical,
      },
      buildBreadcrumbGraph(pathname, canonical),
      {
        "@type": "ImageObject",
        "@id": `${canonical}/#primaryimage`,
        url: image,
        contentUrl: image,
        width: 1200,
        height: 630,
        caption: title,
      },
    ],
  };
}

function buildRouteTags(pathname = "/", storedPage = {}) {
  const fallback = getFallbackRouteSeo(pathname);
  const canonical = absoluteUrl(storedPage.canonical_url, pathname === "/" ? "" : pathname);
  const image = absoluteUrl(storedPage.social_image, fallback.image);
  const title = useValue(storedPage.seo_title, fallback.title);
  const description = useValue(storedPage.seo_description, fallback.description);
  const keywords = useValue(storedPage.seo_keywords, useValue(storedPage.focus_keyword, fallback.keywords));
  const schemaType = useValue(storedPage.schema_type, fallback.schemaType);
  const robots = useValue(
    storedPage.meta_robots,
    systemNoindexPaths.has(pathname) ? "noindex,nofollow" : "index,follow",
  );
  const ogTitle = useValue(storedPage.social_title, fallback.socialTitle || title);
  const ogDescription = useValue(storedPage.social_description, fallback.socialDescription || description);
  const twitterCard = useValue(storedPage.twitter_card, image ? "summary_large_image" : "summary");
  const schemaJson = hasValue(storedPage.schema_json)
    ? (() => {
        try {
          return JSON.stringify(JSON.parse(storedPage.schema_json));
        } catch (_error) {
          return JSON.stringify(
            buildBaseSchemaGraph({ pathname, title, description, canonical, image, schemaType }),
          );
        }
      })()
    : JSON.stringify(buildBaseSchemaGraph({ pathname, title, description, canonical, image, schemaType }));

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta property="og:type" content="${schemaType === "Article" ? "article" : "website"}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<script type="application/ld+json">${schemaJson}</script>`,
  ];

  return tags;
}

function svgReactPlugin() {
  return {
    name: "local-svg-react",
    enforce: "pre",
    load(id) {
      if (!id.endsWith(".svg?react")) {
        return null;
      }

      const svg = readFileSync(id.replace("?react", ""), "utf8");

      return `
        import React from "react";

        const svg = ${JSON.stringify(svg)};

        function SvgReact(props) {
          const { title, role, ...rest } = props;

          return React.createElement("span", {
            ...rest,
            role: title ? "img" : role,
            "aria-hidden": title ? undefined : rest["aria-hidden"] ?? true,
            dangerouslySetInnerHTML: { __html: svg },
          });
        }

        export const ReactComponent = SvgReact;
        export default SvgReact;
      `;
    },
  };
}

function removeDefaultSeo(headHtml) {
  return headHtml
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']keywords["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']robots["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']author["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

function injectSeoIntoHtml(html, tags) {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);

  if (!headMatch) {
    return html;
  }

  const cleanedHead = removeDefaultSeo(headMatch[1]).trimEnd();
  return html.replace(
    /<head>[\s\S]*?<\/head>/i,
    `<head>${cleanedHead}\n${tags.map((tag) => `    ${tag}`).join("\n")}\n  </head>`,
  );
}

function buildBlogTags(post, generateFinalSeo) {
  const finalSeo = generateFinalSeo(post);
  const title = useValue(finalSeo.seoTitle, useValue(post.title, "Blog Post"));
  const description = useValue(
    finalSeo.seoDescription,
    truncate(stripHtml(post.content), 160),
  );
  const canonical = absoluteUrl(finalSeo.canonicalUrl, `/blog/${post.slug}`);
  const robots = useValue(finalSeo.metaRobots, "index, follow");
  const ogTitle = useValue(finalSeo.ogTitle, title);
  const ogDescription = useValue(finalSeo.ogDescription, description);
  const image = absoluteUrl(finalSeo.ogImage, absoluteUrl(post.image));
  const keywords = useValue(post.seo_keywords, useValue(finalSeo.focusKeyword, post.tags));
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
  ];

  if (keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(keywords)}" />`);
  }

  if (image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(image)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  }

  tags.push(
    `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        ...buildBaseSchemaGraph({
          pathname: `/blog/${post.slug}`,
          title,
          description,
          canonical,
          image: image || defaultSocialImage,
          schemaType: "WebPage",
        })["@graph"],
        {
          "@type": useValue(post.schema_type, "BlogPosting"),
          "@id": `${canonical}/#article`,
          headline: title,
          description,
          image: image || defaultSocialImage,
          author: {
            "@type": "Person",
            name: useValue(post.author, "Blucom Technologies"),
          },
          publisher: { "@id": `${siteUrl}/#organization` },
          articleSection: useValue(post.category, "Blog"),
          keywords: keywords || undefined,
          datePublished: post.publish_date || post.created_at || undefined,
          dateModified: post.update_date || post.updated_at || post.publish_date || undefined,
          mainEntityOfPage: canonical,
        },
      ],
    })}</script>`,
  );

  return tags;
}

function buildPageSchemaJson(page, seo) {
  if (hasValue(page.schema_json)) {
    try {
      return JSON.stringify(JSON.parse(page.schema_json));
    } catch (error) {
      console.warn(`[dev-page-seo] Ignoring invalid schema_json for page "${page.path}":`, error.message || error);
    }
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": useValue(page.schema_type, "WebPage"),
    name: seo.title,
    headline: seo.title,
    description: seo.description,
    url: seo.canonical,
    image: seo.image || undefined,
    publisher: {
      "@type": "Organization",
      name: "Blucom Technologies",
      url: siteUrl,
      logo: defaultLogo,
    },
  });
}

function buildPageTags(page) {
  const title = useValue(page.seo_title, "Blucom Technologies");
  const description = useValue(page.seo_description, "Blucom Technologies");
  const robots = useValue(page.meta_robots, "index, follow");
  const canonical = absoluteUrl(page.canonical_url, page.path);
  const image = absoluteUrl(page.social_image);
  const ogTitle = useValue(page.social_title, title);
  const ogDescription = useValue(page.social_description, description);
  const keywords = useValue(page.seo_keywords, useValue(page.focus_keyword));
  const twitterCard = useValue(page.twitter_card, image ? "summary_large_image" : "summary");
  const schemaJson = buildPageSchemaJson(page, {
    title,
    description,
    canonical,
    image,
  });
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta property="og:type" content="${useValue(page.schema_type) === "Article" ? "article" : "website"}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
  ];

  if (keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(keywords)}" />`);
  }

  if (image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(image)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  }

  tags.push(`<script type="application/ld+json">${schemaJson}</script>`);

  return tags;
}

const normalizeRoutePath = (value = "/") => {
  const normalized = String(value || "/").split("?")[0].split("#")[0].trim().toLowerCase().replace(/\/+$/, "");
  return normalized || "/";
};

const isPageSeoPath = (pathname) => {
  const normalized = normalizeRoutePath(pathname);

  if (["/blog", "/ideas", "/news"].some((prefix) => normalized.startsWith(`${prefix}/`))) {
    return false;
  }

  return !["/dashboard", "/admindashboard"].some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
};

function devBlogSeoPlugin() {
  return {
    name: "dev-blog-seo",
    apply: "serve",
    async transformIndexHtml(html, context) {
      const pathname = context?.originalUrl?.split("?")[0] || "";
      const match = pathname.match(/^\/blog\/([^/]+)\/?$/i);

      if (!match) {
        return html;
      }

      const slug = decodeURIComponent(match[1]).replace(/[^a-zA-Z0-9-]/g, "");

      if (!slug) {
        return html;
      }

      try {
        const { query } = require(path.join(projectRoot, "backend/config/db.js"));
        const { generateFinalSeo } = require(path.join(projectRoot, "backend/utils/seoQuality.js"));
        const rows = await query(
          `SELECT *
           FROM posts
           WHERE status = 'published'
             AND slug = ?
           LIMIT 1`,
          [slug],
        );

        if (!rows[0]) {
          return html;
        }

        return injectSeoIntoHtml(html, buildBlogTags(rows[0], generateFinalSeo));
      } catch (error) {
        console.warn(`[dev-blog-seo] Unable to inject SEO for slug "${slug}":`, error.message || error);
        return html;
      }
    },
  };
}

function devPageSeoPlugin() {
  return {
    name: "dev-page-seo",
    async transformIndexHtml(html, context) {
      const pathname = normalizeRoutePath(context?.originalUrl || "/");

      if (!isPageSeoPath(pathname)) {
        return html;
      }

      if (!context?.server) {
        return injectSeoIntoHtml(html, buildRouteTags(pathname));
      }

      try {
        const { query } = require(path.join(projectRoot, "backend/config/db.js"));
        const ensurePageSeoTable = require(path.join(projectRoot, "backend/utils/ensurePageSeoTable.js"));

        await ensurePageSeoTable();

        const rows = await query(
          `SELECT *
           FROM page_seo
           WHERE path = ?
           LIMIT 1`,
          [pathname],
        );

        return injectSeoIntoHtml(html, buildRouteTags(pathname, rows[0] || {}));
      } catch (error) {
        console.warn(`[dev-page-seo] Using generated SEO for path "${pathname}":`, error.message || error);
        return injectSeoIntoHtml(html, buildRouteTags(pathname));
      }
    },
  };
}

function landingSeoPlugin() {
  return {
    name: "landing-page-seo",
    transformIndexHtml(html, context) {
      const pathname = normalizeRoutePath(context?.originalUrl || "/");

      if (pathname !== "/") {
        return html;
      }

      return injectSeoIntoHtml(html, buildLandingTags());
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  envDir: projectRoot,
  plugins: [svgReactPlugin(), react(), devBlogSeoPlugin(), devPageSeoPlugin()],
});
