const { query } = require("../config/db");

let initialized = false;
const SITE_URL = "https://www.blucomtechnologies.com";

const pageSeoDefaults = [
  {
    path: "/",
    title: "Brand Strategy & Digital Marketing Agency | Blucom Technologies",
    description:
      "Blucom Technologies helps brands grow through positioning, digital marketing, UX/UI design, web development, and SEO-driven content.",
  },
  {
    path: "/about",
    title: "About Blucom Technologies | Brand and Digital Growth Team",
    description:
      "Learn how Blucom Technologies combines brand strategy, creative execution, and digital systems for growth-focused companies.",
  },
  {
    path: "/contact",
    title: "Contact Blucom Technologies",
    description:
      "Contact Blucom Technologies to discuss brand strategy, digital marketing, web development, UX/UI design, or content growth.",
  },
  {
    path: "/portfolio",
    title: "Portfolio | Blucom Technologies",
    description:
      "Review Blucom Technologies work across brand identity, digital experiences, campaigns, and growth-focused creative projects.",
  },
  {
    path: "/portfolio/hyundai",
    title: "Hyundai Pakistan Case Study | Blucom Technologies",
    description:
      "See how Blucom Technologies supported Hyundai Pakistan with activation, discovery, design, and digital strategy for the Tucson launch.",
  },
  {
    path: "/portfolio/toyota-motors",
    title: "Toyota Motors Digital Experience | Blucom Technologies",
    description:
      "Explore Blucom Technologies work for Toyota Motors Islamabad across interaction design, automation, and digital customer experience.",
  },
  {
    path: "/portfolio/codility-hub",
    title: "Codility Hub Interaction Design | Blucom Technologies",
    description:
      "Review Blucom Technologies identity, interface, and interaction design work for Codility Hub Technologies.",
  },
  {
    path: "/portfolio/fantasy-rewind",
    title: "Fantasy Rewind Case Study | Blucom Technologies",
    description:
      "Explore Blucom Technologies portfolio work for Fantasy Rewind across digital strategy, activation, and design execution.",
  },
  {
    path: "/portfolio/hassan-bukhari",
    title: "Hassan Bukhari Portfolio Work | Blucom Technologies",
    description:
      "Review Blucom Technologies portfolio work for Hassan Bukhari across activation, discovery, design, and digital brand execution.",
  },
  {
    path: "/careers",
    title: "Careers | Blucom Technologies",
    description:
      "Explore career opportunities at Blucom Technologies for people interested in brand strategy, marketing, design, development, and digital growth.",
  },
  {
    path: "/ideas",
    title: "Ideas | Blucom Technologies",
    description:
      "Explore practical ideas, reports, and creative thinking from Blucom Technologies for modern brand and marketing teams.",
  },
  {
    path: "/news",
    title: "News | Blucom Technologies",
    description:
      "Follow Blucom Technologies news, announcements, and timely updates on marketing, technology, and brand growth.",
  },
  {
    path: "/notfound",
    title: "Page Not Found | Blucom Technologies",
    description:
      "The requested Blucom Technologies page could not be found. Return to the main site to explore services, work, insights, and contact options.",
    robots: "noindex,nofollow",
  },
  {
    path: "/login",
    title: "Login | Blucom Technologies",
    description:
      "Access the Blucom Technologies dashboard for authorized users managing content, leads, SEO, and website operations.",
    robots: "noindex,nofollow",
  },
  {
    path: "/multistepform",
    title: "Project Inquiry Form | Blucom Technologies",
    description:
      "Share project goals, service needs, timelines, and contact details with Blucom Technologies through the guided inquiry form.",
    robots: "noindex,nofollow",
  },
  {
    path: "/testpage",
    title: "Project Intake Test Page | Blucom Technologies",
    description:
      "Review Blucom Technologies project intake fields, service selections, and form flow for internal testing and validation.",
    robots: "noindex,nofollow",
  },
  {
    path: "/the-shift-towards-commerce-driven-marketing",
    title: "The Shift Towards Commerce Driven Marketing | Blucom Technologies",
    description:
      "Read Blucom Technologies thinking on commerce-driven marketing, customer behavior, and growth strategy.",
  },
  {
    path: "/work",
    title: "Work | Blucom Technologies",
    description:
      "Explore Blucom Technologies work across strategy, digital products, creative execution, and measurable marketing outcomes.",
  },
  {
    path: "/investors",
    title: "Investors | Blucom Technologies",
    description:
      "Review Blucom Technologies investor information, business direction, and growth overview.",
  },
  {
    path: "/admindashboard",
    title: "Admin Dashboard | Blucom Technologies",
    description:
      "Blucom Technologies internal dashboard for reviewing leads, content, SEO, careers, and operational website activity.",
    robots: "noindex,nofollow",
  },
  {
    path: "/admin",
    title: "Admin | Blucom Technologies",
    description:
      "Administrative access for Blucom Technologies website management, content workflows, and internal operational tools.",
    robots: "noindex,nofollow",
  },
  {
    path: "/blog",
    title: "Blucom Technologies Blog | Marketing and Brand Strategy Insights",
    description:
      "Read Blucom Technologies insights on brand strategy, marketing systems, social media, SEO, and digital growth.",
  },
  {
    path: "/blog/blog-single-b",
    title: "Marketing Insight | Blucom Technologies Blog",
    description:
      "Read Blucom Technologies marketing insight for practical brand, campaign, and digital growth thinking.",
  },
  {
    path: "/blog/blog-single-the-oportunity-code",
    title: "The Opportunity Code | Blucom Technologies Blog",
    description:
      "Read The Opportunity Code from Blucom Technologies for insight into brand growth and marketing strategy.",
  },
  {
    path: "/ideas/ideas-single",
    title: "Ideas Report | Blucom Technologies",
    description:
      "Read a Blucom Technologies ideas report with practical thinking for brand, marketing, and digital growth teams.",
  },
  {
    path: "/services/analysis-measurement",
    title: "Analysis and Measurement Services | Blucom Technologies",
    description:
      "Turn campaign, channel, and customer data into clear measurement systems that help teams understand performance and improve marketing decisions.",
  },
  {
    path: "/services/analytics-implementation",
    title: "Analytics Implementation Services | Blucom Technologies",
    description:
      "Set up reliable analytics, tracking, dashboards, and reporting foundations so marketing and sales teams can act on trustworthy performance data.",
  },
  {
    path: "/services/brand-awareness",
    title: "Brand Awareness Services | Blucom Technologies",
    description:
      "Build stronger brand visibility through audience insight, campaign planning, creative messaging, and media strategies designed for recognition.",
  },
  {
    path: "/services/brand-strategy",
    title: "Brand Strategy Services | Blucom Technologies",
    description:
      "Define positioning, messaging, identity direction, and growth strategy so your brand communicates clearly across every customer touchpoint.",
  },
  {
    path: "/services/campaign-optimization",
    title: "Campaign Optimization Services | Blucom Technologies",
    description:
      "Improve marketing campaign performance through audience refinement, creative testing, conversion analysis, and ongoing budget optimization.",
  },
  {
    path: "/services/content-marketing",
    title: "Content Marketing Services | Blucom Technologies",
    description:
      "Plan and produce content that supports search visibility, brand trust, lead generation, and customer education across digital channels.",
  },
  {
    path: "/services/content-strategy",
    title: "Content Strategy Services | Blucom Technologies",
    description:
      "Create content systems, topics, formats, and publishing plans that connect brand messaging with measurable business and audience goals.",
  },
  {
    path: "/services/customer-journey-mapping",
    title: "Customer Journey Mapping Services | Blucom Technologies",
    description:
      "Map customer touchpoints, pain points, and decision paths to improve user experience, campaign planning, and conversion opportunities.",
  },
  {
    path: "/services/data-visualization",
    title: "Data Visualization Services | Blucom Technologies",
    description:
      "Convert complex marketing and business data into clear dashboards, reports, and visual systems that support faster decision making.",
  },
  {
    path: "/services/identity",
    title: "Brand Identity Services | Blucom Technologies",
    description:
      "Develop visual and verbal identity systems including logos, typography, messaging, and design rules that make brands easier to recognize.",
  },
  {
    path: "/services/impact-measurement",
    title: "Impact Measurement Services | Blucom Technologies",
    description:
      "Measure marketing impact across channels, campaigns, and customer outcomes with practical frameworks for ROI, growth, and accountability.",
  },
  {
    path: "/services/interaction-assets-devs",
    title: "Interaction Assets Development | Blucom Technologies",
    description:
      "Create interactive digital assets, interface elements, and campaign experiences that support clearer engagement across web and marketing channels.",
  },
  {
    path: "/services/interaction-design",
    title: "Interaction Design Services | Blucom Technologies",
    description:
      "Design user interactions, flows, and digital experiences that make websites, products, and campaigns easier to understand and use.",
  },
  {
    path: "/services/lead-gen",
    title: "Lead Generation Services | Blucom Technologies",
    description:
      "Build lead generation systems using landing pages, content, paid media, automation, and conversion-focused campaign strategy.",
  },
  {
    path: "/services/media-planning-buying",
    title: "Media Planning and Buying Services | Blucom Technologies",
    description:
      "Plan, buy, and optimize media across digital channels with audience strategy, budget control, and performance measurement built in.",
  },
  {
    path: "/services/messaging-positioning",
    title: "Messaging and Positioning Services | Blucom Technologies",
    description:
      "Shape brand positioning, value propositions, messaging pillars, and communication frameworks that make offers easier to understand and choose.",
  },
  {
    path: "/services/nurture-strategies",
    title: "Nurture Strategy Services | Blucom Technologies",
    description:
      "Develop email, content, retargeting, and automation strategies that move prospects from initial interest to stronger buying readiness.",
  },
  {
    path: "/services/omnichannel-campaign-management",
    title: "Omnichannel Campaign Management | Blucom Technologies",
    description:
      "Coordinate campaigns across search, social, email, paid media, and content so audiences receive consistent messages across every touchpoint.",
  },
  {
    path: "/services/persona-creation",
    title: "Persona Creation Services | Blucom Technologies",
    description:
      "Build practical audience personas using research, behavioral signals, market context, and customer needs to guide messaging and campaigns.",
  },
  {
    path: "/services/product-mapping",
    title: "Product Mapping Services | Blucom Technologies",
    description:
      "Clarify product portfolios, positioning, audience fit, and opportunity areas so teams can market offerings with stronger strategic focus.",
  },
  {
    path: "/services/prototyping-and-wireframing",
    title: "Prototyping and Wireframing Services | Blucom Technologies",
    description:
      "Create wireframes and prototypes that validate page structure, user flows, content hierarchy, and interface behavior before development.",
  },
  {
    path: "/services/reputation-management",
    title: "Reputation Management Services | Blucom Technologies",
    description:
      "Protect and improve brand reputation through monitoring, response planning, review strategy, sentiment insight, and communication systems.",
  },
  {
    path: "/services/search-marketing",
    title: "Search Marketing Services | Blucom Technologies",
    description:
      "Improve search visibility through SEO strategy, keyword planning, content optimization, technical signals, and paid search campaign support.",
  },
  {
    path: "/services/strategic-communication",
    title: "Strategic Communication Services | Blucom Technologies",
    description:
      "Plan clear communication strategies for brand launches, campaigns, stakeholders, and market moments that require consistent messaging.",
  },
  {
    path: "/services/ui-designing",
    title: "UI Design Services | Blucom Technologies",
    description:
      "Design clean, usable interfaces for websites, dashboards, and digital products with clear hierarchy, brand consistency, and conversion focus.",
  },
  {
    path: "/services/user-journey-mapping",
    title: "User Journey Mapping Services | Blucom Technologies",
    description:
      "Map user behavior, decision points, and experience gaps to improve website structure, campaign journeys, and digital product flows.",
  },
  {
    path: "/services/web-development",
    title: "Web Development Services | Blucom Technologies",
    description:
      "Build responsive, performance-focused websites and web experiences that support brand credibility, search visibility, and conversion goals.",
  },
  {
    path: "/services/web-maintenance",
    title: "Web Maintenance Services | Blucom Technologies",
    description:
      "Keep websites stable, secure, updated, and performance-ready with ongoing maintenance, monitoring, fixes, and content support.",
  },
  {
    path: "/services/new-folder/buying",
    title: "Media Buying Services | Blucom Technologies",
    description:
      "Plan and manage media buying with budget discipline, audience targeting, channel selection, and performance tracking for growth campaigns.",
  },
  {
    path: "/services/new-folder/omnichannel-campaign-management",
    title: "Omnichannel Campaign Services | Blucom Technologies",
    description:
      "Manage integrated campaigns across digital channels with coordinated messaging, audience planning, optimization, and performance reporting.",
  },
];

const canonicalForPath = (path) => `${SITE_URL}${path === "/" ? "" : path}`;

const focusKeywordForTitle = (title) =>
  String(title || "")
    .replace(/\s*\|\s*Blucom Technologies.*$/i, "")
    .replace(/\s*Services$/i, "")
    .trim();

const seedPageSeoRows = async () => {
  for (const item of pageSeoDefaults) {
    await query(
      `INSERT INTO page_seo
        (path, seo_title, seo_description, focus_keyword, canonical_url, meta_robots, schema_type, twitter_card)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        seo_title = COALESCE(NULLIF(seo_title, ''), VALUES(seo_title)),
        seo_description = COALESCE(NULLIF(seo_description, ''), VALUES(seo_description)),
        focus_keyword = COALESCE(NULLIF(focus_keyword, ''), VALUES(focus_keyword)),
        canonical_url = COALESCE(NULLIF(canonical_url, ''), VALUES(canonical_url)),
        meta_robots = COALESCE(NULLIF(meta_robots, ''), VALUES(meta_robots)),
        schema_type = COALESCE(NULLIF(schema_type, ''), VALUES(schema_type)),
        twitter_card = COALESCE(NULLIF(twitter_card, ''), VALUES(twitter_card))`,
      [
        item.path,
        item.title,
        item.description,
        focusKeywordForTitle(item.title),
        canonicalForPath(item.path),
        item.robots || "index,follow",
        "WebPage",
        "summary_large_image",
      ],
    );
  }
};

const ensurePageSeoTable = async () => {
  if (initialized) {
    return;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS page_seo (
      id INT PRIMARY KEY AUTO_INCREMENT,
      path VARCHAR(255) NOT NULL UNIQUE,
      seo_title VARCHAR(255) DEFAULT NULL,
      seo_description TEXT DEFAULT NULL,
      focus_keyword VARCHAR(255) DEFAULT NULL,
      canonical_url VARCHAR(500) DEFAULT NULL,
      meta_robots VARCHAR(100) DEFAULT NULL,
      readability_notes TEXT DEFAULT NULL,
      social_title VARCHAR(255) DEFAULT NULL,
      social_description TEXT DEFAULT NULL,
      social_image VARCHAR(500) DEFAULT NULL,
      schema_type VARCHAR(100) DEFAULT NULL,
      schema_json LONGTEXT DEFAULT NULL,
      twitter_card VARCHAR(100) DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await seedPageSeoRows();

  initialized = true;
};

module.exports = ensurePageSeoTable;
