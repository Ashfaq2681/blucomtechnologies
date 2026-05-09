const { pool, query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");
const slugify = require("../utils/slugify");

const samplePosts = [
  {
    title: "Designing B2B Content Systems That Compound Over Time",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "content strategy, b2b, editorial systems",
    status: "published",
    featured: true,
    content: [
      "<p>Most B2B teams publish in bursts and then go quiet. The result is an archive of isolated assets instead of a system that compounds.</p>",
      "<p>A stronger approach starts with a repeatable publishing engine: a clear point of view, pillar topics, reusable research inputs, and a distribution plan that treats every article as a long-term asset.</p>",
      "<p>When the content model is consistent, marketing teams can turn one strong idea into blog posts, landing page copy, sales enablement, and social content without diluting the message.</p>",
    ].join(""),
  },
  {
    title: "Why Brand Positioning Breaks When Messaging Gets Too Generic",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "brand positioning, messaging, storytelling",
    status: "published",
    featured: false,
    content: [
      "<p>Generic messaging usually appears when teams try to please every audience at once. The language becomes broad, safe, and forgettable.</p>",
      "<p>Clear positioning requires sharper tradeoffs. A brand should sound like it understands a specific market problem better than its competitors, not like a diluted category summary.</p>",
      "<p>The practical fix is to define audience pain points, proof points, and tonal rules before any campaign work starts.</p>",
    ].join(""),
  },
  {
    title: "AI Workflows That Actually Save Time for Marketing Teams",
    category: "Technology",
    subcategory: "AI",
    tags: "ai, workflows, marketing operations",
    status: "published",
    featured: false,
    content: [
      "<p>AI saves time only when it is attached to a defined workflow. Without process discipline, it tends to create more review overhead than real leverage.</p>",
      "<p>The highest-value use cases are predictable and repetitive: summarizing interviews, drafting content variants, tagging assets, and turning raw notes into structured briefs.</p>",
      "<p>Teams that win with AI set quality thresholds, maintain approved prompts, and keep a human editor responsible for the final output.</p>",
    ].join(""),
  },
  {
    title: "How Performance Marketing Improves When Creative and Analytics Share One Brief",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "performance marketing, analytics, creative strategy",
    status: "published",
    featured: false,
    content: [
      "<p>Performance marketing underperforms when creative and measurement are developed in separate lanes. One side optimizes for click-throughs while the other side reports on conversions after the fact.</p>",
      "<p>A unified brief fixes that disconnect by aligning audience, offer, hypotheses, metrics, and creative constraints before production begins.</p>",
      "<p>That shared planning layer produces cleaner experiments and makes iteration much faster once campaigns are live.</p>",
    ].join(""),
  },
  {
    title: "The Case for Editorial Calendars Built Around Buyer Questions",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "editorial calendar, buyer journey, seo",
    status: "published",
    featured: false,
    content: [
      "<p>Editorial calendars often fail because they are built around output quotas instead of buyer intent.</p>",
      "<p>A better model starts with the real questions prospects ask across awareness, consideration, and decision stages. That gives the calendar commercial relevance from day one.</p>",
      "<p>Once those questions are mapped, content sequencing becomes much easier and internal stakeholders can see why each article exists.</p>",
    ].join(""),
  },
  {
    title: "Building Trust Signals Into High-Intent Landing Pages",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "landing pages, trust signals, conversion",
    status: "published",
    featured: false,
    content: [
      "<p>High-intent pages do not need more decoration. They need stronger evidence.</p>",
      "<p>Trust is built with visible proof: client outcomes, recognizable brand markers, product clarity, response expectations, and frictionless contact paths.</p>",
      "<p>When those trust signals are arranged with a clear hierarchy, conversion rates tend to improve without aggressive copy changes.</p>",
    ].join(""),
  },
  {
    title: "Automation Gaps That Quietly Slow Down Content Production",
    category: "Technology",
    subcategory: "Automation",
    tags: "automation, content ops, workflow design",
    status: "published",
    featured: false,
    content: [
      "<p>Many teams believe they have a production bottleneck when the real issue is workflow fragmentation.</p>",
      "<p>Approvals, asset retrieval, link reviews, and CMS entry often live across separate tools with no handoff rules. That creates hidden delays no one owns directly.</p>",
      "<p>Small automation improvements in these handoffs can remove more cycle time than adding another writer or designer.</p>",
    ].join(""),
  },
  {
    title: "What Strong Category Pages Teach Us About Information Architecture",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "information architecture, ux writing, category pages",
    status: "published",
    featured: false,
    content: [
      "<p>Category pages work best when they act as decision environments rather than content dumps.</p>",
      "<p>The structure should help users compare options, understand scope, and move naturally toward deeper pages without losing context.</p>",
      "<p>That means strong labeling, meaningful summaries, and visible cues about what each next click will deliver.</p>",
    ].join(""),
  },
];

const seedPosts = async () => {
  await ensureBlogTables();

  let inserted = 0;
  let skipped = 0;

  for (const post of samplePosts) {
    const slug = slugify(post.title);
    const existing = await query("SELECT id FROM posts WHERE slug = ? LIMIT 1", [slug]);

    if (existing.length > 0) {
      skipped += 1;
      continue;
    }

    await query(
      `INSERT INTO posts
        (title, slug, category, subcategory, content, image, tags, status, featured)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        post.title,
        slug,
        post.category,
        post.subcategory,
        post.content,
        null,
        post.tags,
        post.status,
        post.featured,
      ],
    );

    inserted += 1;
  }

  const [{ total }] = await query("SELECT COUNT(*) AS total FROM posts");

  console.log(
    JSON.stringify(
      {
        inserted,
        skipped,
        totalPosts: total,
      },
      null,
      2,
    ),
  );
};

seedPosts()
  .then(async () => {
    await pool.end();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("Failed to seed sample posts:", error.message);
    try {
      await pool.end();
    } catch (_poolError) {
      // Ignore pool shutdown errors during failure handling.
    }
    process.exit(1);
  });
