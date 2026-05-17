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

  return tags;
}

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

// https://vitejs.dev/config/
export default defineConfig({
  envDir: projectRoot,
  plugins: [svgReactPlugin(), react(), devBlogSeoPlugin()],
});
