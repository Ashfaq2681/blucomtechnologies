const { pool, query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");
const slugify = require("../utils/slugify");

const posts = [
  {
    title: "How Brand Teams Can Build Faster Review Cycles Without Losing Quality",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "brand reviews, approvals, creative workflow",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Creative reviews slow down when feedback lacks structure. Stronger review cycles separate strategic concerns from execution notes and assign clear approval ownership.</p><p>That makes output faster without lowering the standard. Teams spend less time re-litigating basics and more time improving the work itself.</p><p>Quality improves when process is designed to protect it instead of relying on last-minute heroics.</p>",
  },
  {
    title: "The Smartest Use of Case Studies in Mid-Market B2B Marketing",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "case studies, b2b marketing, pipeline content",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Case studies become more persuasive when they frame a recognizable business problem before showing the solution. Buyers want to see themselves in the before-state.</p><p>The strongest examples highlight operational context, not just the final result. That helps prospects understand how outcomes were achieved.</p><p>Done well, case studies reduce sales friction and make claims feel substantially more credible.</p>",
  },
  {
    title: "Why Marketing Calendars Fail When They Ignore Production Reality",
    category: "Technology",
    subcategory: "Automation",
    tags: "marketing calendar, production planning, workflows",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Calendar planning often looks clean on paper and chaotic in practice. Deadlines fail when planners underestimate review loops, design dependencies, and publishing operations.</p><p>A realistic calendar accounts for production capacity as much as campaign ambition.</p><p>The teams that ship consistently build schedules around actual throughput, not optimistic assumptions.</p>",
  },
  {
    title: "What High-Performing Social Teams Track Beyond Engagement Rates",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "social media metrics, engagement, analytics",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Engagement still matters, but it rarely tells the whole performance story. Strong social teams also monitor saves, profile actions, assisted conversions, comment quality, and audience retention.</p><p>Those signals show whether content is creating durable value instead of temporary interaction spikes.</p><p>Measurement gets better when reporting connects attention to business movement.</p>",
  },
  {
    title: "How Positioning Workshops Should Actually Be Run",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "positioning workshop, brand strategy, messaging",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Positioning workshops fail when they become group brainstorming with no decision framework. The goal is not volume of ideas. It is a sharper answer to where the brand should win.</p><p>Good workshops use evidence, clear tradeoffs, and a facilitator willing to push vague language into concrete choices.</p><p>The real output is a better strategic narrative, not a larger whiteboard.</p>",
  },
  {
    title: "The Role of Creative Constraints in Stronger Campaign Ideas",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "creative constraints, campaign strategy, ideation",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Constraints improve ideas when they narrow the problem intelligently. Teams generate better campaign concepts when they know the audience, objective, proof, and channel realities upfront.</p><p>Too much freedom often creates diluted thinking rather than originality.</p><p>Creative quality rises when boundaries force sharper decisions instead of limiting imagination.</p>",
  },
  {
    title: "Why More Brands Need Better Internal Content Distribution",
    category: "Technology",
    subcategory: "Automation",
    tags: "internal distribution, content reuse, enablement",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Published content often reaches external channels but never gets adopted internally. Sales, partnerships, customer success, and recruiting teams then recreate explanations the company already solved.</p><p>Internal distribution multiplies content value by making strong assets reusable across more workflows.</p><p>The gain is not only efficiency. It is also message consistency across the business.</p>",
  },
  {
    title: "How to Build Stronger Category Signals in Early-Stage Brands",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "category signals, early-stage brands, positioning",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Early-stage brands often struggle because they are recognizable to founders but unclear to the market. Category signals help by showing how the company should be understood quickly.</p><p>Those signals appear through terminology, proof, design choices, and the type of comparison the brand invites.</p><p>When the category frame is stronger, comprehension and trust both improve.</p>",
  },
  {
    title: "What Better Reporting Looks Like for Executive Stakeholders",
    category: "Technology",
    subcategory: "AI",
    tags: "executive reporting, dashboards, marketing leadership",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Executives do not need more dashboards. They need fewer metrics with stronger narrative framing around trend direction, commercial impact, and required decisions.</p><p>Good reporting reduces ambiguity. It explains what changed and what leadership should care about next.</p><p>That shift turns reporting from a passive artifact into an operating tool.</p>",
  },
  {
    title: "The Difference Between Content Volume and Content Leverage",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "content leverage, editorial strategy, repurposing",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Publishing more does not guarantee better outcomes. Leverage comes from creating assets that can influence multiple stages of the buyer journey and support several teams at once.</p><p>That requires stronger topic selection, clearer reuse plans, and more intentional distribution.</p><p>Volume fills calendars. Leverage compounds value.</p>",
  },
  {
    title: "How Retargeting Creative Should Change Across Funnel Stages",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "retargeting, funnel strategy, ad creative",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Retargeting often feels repetitive because the same message is shown to everyone who visited once. Better retargeting adapts creative to the stage of evaluation and the signal the user already gave.</p><p>That means stronger proof for comparers, clearer urgency for near-buyers, and better education for early evaluators.</p><p>More relevance usually outperforms more frequency.</p>",
  },
  {
    title: "Why Great Marketing Ops Teams Obsess Over Handoffs",
    category: "Technology",
    subcategory: "Automation",
    tags: "marketing ops, handoffs, process design",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Most operational delays live in the spaces between teams. Strategy finishes late, design starts without context, QA happens too close to launch, and no one owns the transition.</p><p>High-functioning ops teams focus on those handoffs because that is where friction compounds.</p><p>Fixing transfer points often creates more speed than adding headcount.</p>",
  },
  {
    title: "How Buyer Enablement Content Shortens Sales Conversations",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "buyer enablement, sales content, decision support",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Enablement content works best when it helps buyers explain the decision internally, not just understand it individually. That means creating content people can forward to finance, leadership, and implementation stakeholders.</p><p>Useful buyer enablement reduces repetitive sales explanation and keeps momentum alive between calls.</p><p>Strong content shortens the distance between interest and internal alignment.</p>",
  },
  {
    title: "What Makes a Strong Marketing Experiment Worth Running",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "experimentation, testing, growth marketing",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Not every test is worth the effort required to execute it. Strong experiments address a meaningful uncertainty, have a realistic path to action, and isolate variables well enough to learn from the outcome.</p><p>Good testing programs prioritize decision value over sheer volume.</p><p>Learning matters more than activity theater.</p>",
  },
  {
    title: "Why Fewer KPIs Often Lead to Better Marketing Decisions",
    category: "Technology",
    subcategory: "AI",
    tags: "KPIs, decision making, reporting discipline",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Too many KPIs create false clarity. Teams end up watching everything and prioritizing nothing, which makes course correction slower instead of smarter.</p><p>Better KPI design focuses on a small set of measures with clear strategic meaning.</p><p>Decision quality improves when the system highlights what actually matters.</p>",
  },
  {
    title: "How Social Listening Becomes More Valuable After Launch",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "social listening, launch monitoring, audience insights",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Listening is most useful when it continues after launch rather than ending at planning. Post-launch conversation reveals where the message resonated, where confusion appeared, and what objections still need content support.</p><p>That feedback loop improves both communications and product understanding.</p><p>The value is not just monitoring sentiment. It is learning what to adjust next.</p>",
  },
  {
    title: "The Best Brand Messages Usually Start as Better Customer Questions",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "messaging, customer questions, brand clarity",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Weak messaging often comes from answering the wrong question. When brands focus on what they want to say instead of what the audience needs resolved, relevance drops immediately.</p><p>Stronger messaging begins with sharper customer questions about risk, value, timing, and differentiation.</p><p>Answering those questions clearly is what makes the message land.</p>",
  },
  {
    title: "How Marketing Leaders Can Spot Process Debt Early",
    category: "Technology",
    subcategory: "Automation",
    tags: "process debt, operations, marketing leadership",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Process debt builds quietly. Teams work around missing systems, unclear ownership, and brittle workflows until the friction becomes normalized.</p><p>Leaders should watch for repeated bottlenecks, emergency dependencies, and approval confusion as early warning signs.</p><p>Addressing those issues early protects speed and morale before output quality starts slipping.</p>",
  },
  {
    title: "Why Conversion Copy Improves When Product Teams Are Involved",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "conversion copy, product marketing, collaboration",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Copy gets stronger when it reflects the product truth more precisely. Product teams often understand hidden objections, implementation friction, and feature relevance in a way marketing alone cannot.</p><p>That collaboration makes messaging more accurate and more persuasive at the same time.</p><p>Better conversion copy usually comes from better cross-functional input.</p>",
  },
  {
    title: "How to Make Evergreen Content Stay Commercially Relevant",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "evergreen content, relevance, content refresh",
    status: "published",
    featured: false,
    section: "archive",
    content: "<p>Evergreen content loses value when it remains technically accurate but commercially stale. Search traffic can continue while buyer relevance declines quietly over time.</p><p>Maintaining evergreen quality means refreshing examples, repositioning framing, and improving calls to action as market conditions change.</p><p>The best evergreen content is maintained like a product, not abandoned like an old post.</p>",
  },
];

const seedPosts = async () => {
  await ensureBlogTables();

  let inserted = 0;
  let skipped = 0;

  for (const post of posts) {
    const slug = slugify(post.title);
    const existing = await query("SELECT id FROM posts WHERE slug = ? LIMIT 1", [slug]);

    if (existing.length > 0) {
      skipped += 1;
      continue;
    }

    await query(
      `INSERT INTO posts
        (title, slug, category, subcategory, content, image, tags, status, featured, section)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        post.section,
      ],
    );

    inserted += 1;
  }

  const [{ total, published }] = await query(
    "SELECT COUNT(*) AS total, SUM(CASE WHEN status = 'published' THEN 1 ELSE 0 END) AS published FROM posts",
  );

  console.log(JSON.stringify({ inserted, skipped, totalPosts: total, publishedPosts: published }, null, 2));
};

seedPosts()
  .then(async () => {
    await pool.end();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("Failed to seed twenty more published posts:", error.message || error);
    try {
      await pool.end();
    } catch (_poolError) {}
    process.exit(1);
  });
