const { pool, query } = require("../config/db");
const ensureBlogTables = require("../utils/ensureBlogTables");
const slugify = require("../utils/slugify");

const contentLibraryPosts = [
  {
    title: "Building Resolute Trust: Strategies for Winning and Keeping Customer Confidence",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "trust, branding, customer confidence, loyalty",
    status: "published",
    featured: true,
    content: [
      "<p>Trust is still the most valuable conversion asset a brand can build. When buyers feel uncertainty, they look for transparent pricing, consistent messaging, and visible proof that other customers have had a good experience.</p>",
      "<p>That means strong trust signals need to be designed into every touchpoint: product pages, landing pages, follow-up emails, case studies, and customer support flows. A brand that communicates clearly reduces friction before it ever asks for a sale.</p>",
      "<p>The teams that retain customers longest are usually the teams that make trust operational. They publish honest expectations, protect user data, and reinforce credibility with proof instead of inflated claims.</p>",
    ].join(""),
  },
  {
    title: "Why Social Proof Is Every Marketer's Secret Sauce",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "social proof, reviews, testimonials, conversion",
    status: "published",
    featured: false,
    content: [
      "<p>Social proof works because people use the behavior of others as a shortcut when evaluating risk. Reviews, user stories, ratings, and community signals all help answer the same buyer question: can I trust this choice?</p>",
      "<p>For marketers, the practical takeaway is simple. Bring customer evidence closer to the decision point instead of leaving it buried on a separate page. Proof should sit next to the offer, not somewhere users need to hunt for it.</p>",
      "<p>When that proof feels specific and credible, it improves both brand perception and conversion efficiency. The strongest examples are concrete, recent, and tied to outcomes buyers actually care about.</p>",
    ].join(""),
  },
  {
    title: "Trust the Crowd: Why Social Proof Remains a Conversion Multiplier",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "social proof, persuasion, conversion optimization",
    status: "published",
    featured: false,
    content: [
      "<p>Consumers rarely make decisions in isolation. They look for reassurance from people who have already gone first, which is why testimonials, usage numbers, and recommendation patterns influence action so strongly.</p>",
      "<p>Used well, social proof lowers hesitation and shortens the path to purchase. Used poorly, it feels generic and staged. The difference usually comes down to specificity, context, and timing.</p>",
      "<p>Brands that turn customer voices into part of the core experience create more confidence with less pressure. Instead of forcing urgency, they show that the decision is already validated by others.</p>",
    ].join(""),
  },
  {
    title: "The Science Behind Curiosity in Digital Advertising",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "curiosity, advertising, engagement, click-through",
    status: "published",
    featured: false,
    content: [
      "<p>Curiosity works when a message creates just enough information gap to pull the audience forward. It gives people a reason to keep reading, click for context, or stay with a story long enough to absorb the offer.</p>",
      "<p>That principle is especially useful in digital advertising, where attention is fragmented and most messages get dismissed instantly. Headlines, teaser copy, and visual framing all benefit from a measured amount of intrigue.</p>",
      "<p>The balance matters. Curiosity should lead to value, not bait-and-switch. The best campaigns promise something specific and then reward the audience with substance once they engage.</p>",
    ].join(""),
  },
  {
    title: "The Opportunity Code: How Visionary Brands Break Free from the Competition",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "brand strategy, market positioning, category creation",
    status: "published",
    featured: false,
    content: [
      "<p>Brands get trapped in comparison when they define themselves too narrowly against competitors. Visionary companies do the opposite: they reframe the market around a larger opportunity that only they seem built to capture.</p>",
      "<p>That shift changes the story from feature parity to strategic leadership. It lets messaging focus on future value, unmet demand, and a clearer reason for the market to pay attention.</p>",
      "<p>The opportunity-first lens is what helps brands escape commoditization. When the narrative is strong, the conversation moves from price and sameness to momentum and distinctiveness.</p>",
    ].join(""),
  },
  {
    title: "Science of Persuasion: How Behavioral Economics Shapes Advertising Success",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "behavioral economics, persuasion, advertising psychology",
    status: "published",
    featured: false,
    content: [
      "<p>Behavioral economics gives marketers a more realistic model of how decisions happen. People do not compare every option rationally; they use heuristics, emotional cues, and contextual framing to decide quickly.</p>",
      "<p>That is why persuasive advertising depends as much on structure as it does on message. Friction, sequencing, defaults, and proof all influence how an offer is interpreted.</p>",
      "<p>The strongest campaigns understand those patterns and use them responsibly. They reduce confusion, clarify value, and make the next step feel natural rather than forced.</p>",
    ].join(""),
  },
  {
    title: "The Art of Visual Communication for Modern Brands",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "visual communication, design systems, brand storytelling",
    status: "published",
    featured: false,
    content: [
      "<p>Visual communication is not decoration layered on top of strategy. It is part of how a brand explains itself, creates memory, and signals quality before a user reads a single line of body copy.</p>",
      "<p>Typography, layout, color, and image treatment all work like a language. When those elements are aligned, the brand feels deliberate. When they are inconsistent, the experience feels weaker than the message intended.</p>",
      "<p>Design systems matter because they let teams communicate with more clarity and less noise across campaigns, landing pages, social media, and product marketing.</p>",
    ].join(""),
  },
  {
    title: "The Evolution of Corporate Storytelling in the Digital Era",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "corporate storytelling, brand narrative, digital content",
    status: "published",
    featured: false,
    content: [
      "<p>Corporate storytelling has moved beyond polished brand manifestos. Audiences now expect proof, perspective, and a clearer connection between what a company says and how it behaves.</p>",
      "<p>That change has made storytelling more operational. It shows up in founder narratives, product education, employee voices, customer outcomes, and the tone a brand uses when addressing real market tension.</p>",
      "<p>The best stories are not abstract. They give the company a point of view and make its choices legible to the people it wants to serve.</p>",
    ].join(""),
  },
  {
    title: "The Rise of Influencer-Driven Marketing",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "influencer marketing, creator economy, brand reach",
    status: "published",
    featured: false,
    content: [
      "<p>Influencer marketing matured when brands stopped treating creators as simple reach rentals and started using them as distribution partners with distinct audience trust.</p>",
      "<p>The value is not just visibility. It is context. Creators translate products into formats their audiences already pay attention to, which gives campaigns more relevance than standard ad creative often can.</p>",
      "<p>Performance improves when the collaboration respects the creator's voice, aligns with a clear offer, and measures outcomes beyond vanity engagement.</p>",
    ].join(""),
  },
  {
    title: "Effective Motivation in Advertising: What Actually Drives Consumer Action",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "consumer behavior, motivation, advertising strategy",
    status: "published",
    featured: false,
    content: [
      "<p>Good advertising identifies the tension a buyer already feels and connects it to a credible path forward. Motivation is rarely created from scratch; it is activated by relevance.</p>",
      "<p>That is why the strongest campaigns speak to urgency, aspiration, identity, convenience, or security in language people recognize from their own lives. Abstract messaging almost always underperforms concrete motivation.</p>",
      "<p>When creative, offer, and landing experience reinforce the same behavioral trigger, campaign results become much easier to improve.</p>",
    ].join(""),
  },
  {
    title: "Why the Attention Economy Is Becoming the New Competitive Battleground",
    category: "Technology",
    subcategory: "Automation",
    tags: "attention economy, media strategy, digital competition",
    status: "published",
    featured: false,
    content: [
      "<p>Attention has become one of the scarcest resources in digital markets. More channels, more creators, and more automation mean buyers are constantly filtering what deserves even a few seconds.</p>",
      "<p>That changes how brands compete. Distribution is no longer enough. Teams need stronger hooks, clearer positioning, and content systems that earn repeat attention rather than one-off impressions.</p>",
      "<p>The companies that adapt best build for relevance and consistency. They understand that attention is won through repeated value, not just louder promotion.</p>",
    ].join(""),
  },
  {
    title: "Advertisers Are More Focused on Digital Marketing Expansion Than Ever",
    category: "Technology",
    subcategory: "AI",
    tags: "digital marketing, expansion, media budgets, growth",
    status: "published",
    featured: false,
    content: [
      "<p>Marketing budgets continue shifting toward channels that can be measured, iterated, and connected more directly to revenue. That is a major reason digital expansion remains a priority across industries.</p>",
      "<p>But expansion only works when operating systems evolve with it. More channels require better planning, cleaner attribution, and tighter coordination between creative, media, and analytics.</p>",
      "<p>Growth comes from disciplined scale, not channel sprawl. The smartest advertisers expand into digital where they can maintain both visibility and control.</p>",
    ].join(""),
  },
  {
    title: "Rideshare Advertising: The Gateway to a New Outdoor Media World",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "rideshare advertising, out of home, media strategy",
    status: "published",
    featured: false,
    content: [
      "<p>Rideshare advertising sits in the space between outdoor visibility and digital measurability. It gives brands mobile placements that move through high-value urban routes instead of waiting for audiences to come to a fixed screen.</p>",
      "<p>That mobility creates new planning advantages. Campaigns can be aligned with neighborhoods, commuting patterns, and event zones in ways traditional out-of-home formats often cannot match.</p>",
      "<p>For modern marketers, the interesting part is not novelty alone. It is how these placements can support broader awareness and search demand across the rest of the funnel.</p>",
    ].join(""),
  },
  {
    title: "Must-Attend Advertising Conferences for Growth-Focused Marketers",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "advertising conferences, industry events, marketers",
    status: "published",
    featured: false,
    content: [
      "<p>Conferences still matter when they provide more than stage content. The best events compress industry learning, partnership opportunities, and market intelligence into a few days of focused exposure.</p>",
      "<p>For growth-focused marketers, the right conference can reshape planning priorities for the next quarter. It surfaces new tools, sharper benchmarks, and a more realistic view of where competitors are investing.</p>",
      "<p>The value depends on intent. Teams that attend with clear goals around networking, capability building, or vendor evaluation typically extract far more from the event calendar.</p>",
    ].join(""),
  },
  {
    title: "12 Must-Attend Advertising Conferences in 2026",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "2026 conferences, advertising events, industry calendar",
    status: "published",
    featured: false,
    content: [
      "<p>The 2026 conference calendar gives marketers multiple ways to benchmark strategy, discover new media opportunities, and track where the industry is headed next.</p>",
      "<p>A strong event shortlist should include a mix of creative, performance, technology, and leadership-focused gatherings. That balance helps teams avoid over-indexing on one discipline while missing broader market shifts.</p>",
      "<p>The practical goal is not to attend everything. It is to choose the events most likely to improve planning quality, partnerships, and execution speed for the year ahead.</p>",
    ].join(""),
  },
  {
    title: "How Content Operations Teams Reduce Bottlenecks Without Hiring More Writers",
    category: "Technology",
    subcategory: "Automation",
    tags: "content operations, workflow, editorial systems, automation",
    status: "published",
    featured: false,
    content: [
      "<p>Content bottlenecks are often blamed on limited headcount, but the real problem is usually fragmented workflow. Drafts stall in review, assets arrive late, and no one owns the handoff between stages.</p>",
      "<p>Operations-minded teams fix that by standardizing briefs, review rules, approval timing, and publishing checklists. Once the flow is visible, delays become easier to remove.</p>",
      "<p>The result is not just faster output. It is more predictable quality and less wasted effort across strategy, writing, design, and distribution.</p>",
    ].join(""),
  },
  {
    title: "Why Messaging Audits Should Happen Before Campaign Planning",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "messaging audit, campaign planning, brand voice",
    status: "published",
    featured: false,
    content: [
      "<p>Campaigns fail when they are built on unclear language. If positioning is vague, every ad, landing page, and sales asset ends up repeating that vagueness at scale.</p>",
      "<p>A messaging audit creates the correction layer before launch. It clarifies what the brand actually promises, what proof supports that promise, and how the market should hear it.</p>",
      "<p>That upstream discipline makes downstream creative stronger because teams stop inventing the message in every channel separately.</p>",
    ].join(""),
  },
  {
    title: "The Anatomy of a Landing Page That Converts High-Intent Traffic",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "landing pages, CRO, paid traffic, conversion",
    status: "published",
    featured: false,
    content: [
      "<p>High-intent traffic does not need more persuasion theater. It needs a page that answers the right questions in the right order with as little friction as possible.</p>",
      "<p>The best pages create a clear chain: promise, proof, explanation, objection handling, and action. When any part is missing, conversion drops even if traffic quality is strong.</p>",
      "<p>That is why landing page performance is usually a structure problem before it is a copy problem. Order matters as much as wording.</p>",
    ].join(""),
  },
  {
    title: "What B2B Buyers Actually Want From Thought Leadership Content",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "thought leadership, b2b content, buyer intent",
    status: "published",
    featured: false,
    content: [
      "<p>Most thought leadership underperforms because it is too self-congratulatory to be useful. Buyers do not want polished abstraction. They want sharper understanding of the problems they are already trying to solve.</p>",
      "<p>Useful authority content gives people frameworks, language, and perspective they can apply immediately. It should help them think better, not just think more highly of the publisher.</p>",
      "<p>When thought leadership becomes genuinely clarifying, it earns trust and commercial attention at the same time.</p>",
    ].join(""),
  },
  {
    title: "Design Systems for Marketing Teams: Faster Output, Stronger Consistency",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "design systems, brand consistency, creative operations",
    status: "published",
    featured: false,
    content: [
      "<p>Marketing teams move faster when recurring design decisions are already solved. A strong design system removes unnecessary debate around layout, typography, spacing, components, and hierarchy.</p>",
      "<p>That consistency also improves recognition. Audiences learn what the brand looks like across pages, ads, social posts, and downloadable assets.</p>",
      "<p>The system is not there to make work generic. It exists to preserve distinctiveness while reducing avoidable production drag.</p>",
    ].join(""),
  },
  {
    title: "How Search Intent Should Shape Your Editorial Calendar",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "search intent, editorial calendar, SEO, planning",
    status: "published",
    featured: false,
    content: [
      "<p>Editorial calendars become more commercially useful when they are built around intent rather than arbitrary publishing quotas. Search data is one of the clearest signals of what buyers are actively trying to understand.</p>",
      "<p>But intent mapping should go beyond keywords. Teams need to understand whether the user is exploring, comparing, validating, or preparing to buy.</p>",
      "<p>Once that layer is clear, the calendar becomes easier to prioritize and far more relevant to revenue goals.</p>",
    ].join(""),
  },
  {
    title: "Why Creative Testing Fails When the Hypothesis Is Weak",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "creative testing, hypothesis, paid media, optimization",
    status: "published",
    featured: false,
    content: [
      "<p>Many testing programs create volume without generating insight. The issue is not too little data. It is that the variables being tested were never tied to a meaningful hypothesis in the first place.</p>",
      "<p>Good tests isolate a clear assumption about audience, message, framing, or offer. Weak tests compare random variants and then pretend the result was strategic learning.</p>",
      "<p>Testing becomes useful when it sharpens decision quality, not just reporting cadence.</p>",
    ].join(""),
  },
  {
    title: "From Brief to Launch: A Cleaner Workflow for Multi-Channel Campaigns",
    category: "Technology",
    subcategory: "Automation",
    tags: "campaign workflow, launch process, multi-channel marketing",
    status: "published",
    featured: false,
    content: [
      "<p>Multi-channel campaigns break down when every team works from its own partial brief. The media team sees targeting, the creative team sees concepts, and the content team sees deadlines, but no one sees the whole system.</p>",
      "<p>A cleaner launch workflow creates one shared source of truth for audience, objective, proof points, constraints, and measurement. That alignment reduces rework and makes iteration faster once campaigns go live.</p>",
      "<p>Execution improves when complexity is designed, not merely tolerated.</p>",
    ].join(""),
  },
  {
    title: "How Brand Voice Guidelines Prevent Generic Marketing",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "brand voice, messaging, tone, copywriting",
    status: "published",
    featured: false,
    content: [
      "<p>Generic marketing usually sounds like a team without language standards. Everyone writes with decent intent, but the result is interchangeable because the voice is undefined.</p>",
      "<p>Clear voice guidelines do more than set tone. They establish what the brand emphasizes, what it avoids, and how it handles complexity, confidence, and clarity.</p>",
      "<p>Once that operating language exists, content becomes more recognizable and much easier to review.</p>",
    ].join(""),
  },
  {
    title: "Why Audience Research Gets More Valuable When Sales Teams Participate",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "audience research, sales alignment, customer insight",
    status: "published",
    featured: false,
    content: [
      "<p>Research often misses urgency because the people closest to objections were not included. Sales teams hear the friction, hesitation, and buying language that marketing teams often only infer.</p>",
      "<p>When those conversations are folded into research, audience profiles become less generic and far more commercially useful.</p>",
      "<p>The strongest insights usually come from combining qualitative sales reality with broader market signals.</p>",
    ].join(""),
  },
  {
    title: "Email Nurture Sequences That Move Buyers Instead of Stalling Them",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "email nurture, lifecycle marketing, buyer journey",
    status: "published",
    featured: false,
    content: [
      "<p>Nurture sequences underperform when every email tries to sound helpful without creating movement. Buyers need progression, not just polite reminders that the brand still exists.</p>",
      "<p>Effective sequences change the state of understanding over time. They answer objections, introduce proof, frame urgency, and clarify the next action.</p>",
      "<p>Good email nurture respects where the buyer is, but it does not stay static there.</p>",
    ].join(""),
  },
  {
    title: "Building a Category Page That Helps Users Decide Faster",
    category: "Marketing",
    subcategory: "Social Media",
    tags: "category pages, UX writing, conversion design",
    status: "published",
    featured: false,
    content: [
      "<p>Category pages should reduce decision friction, not simply organize content. If the user still has to decode every option manually, the page is not doing its job.</p>",
      "<p>Strong category pages explain differences, clarify scope, and help visitors self-sort with minimal effort. Labels matter. Summaries matter. Page hierarchy matters.</p>",
      "<p>When the structure is clear, users move forward with more confidence and less bounce behavior.</p>",
    ].join(""),
  },
  {
    title: "How to Turn One Research Asset Into a Month of Distribution",
    category: "Strategy",
    subcategory: "Growth Planning",
    tags: "content repurposing, research, distribution strategy",
    status: "published",
    featured: false,
    content: [
      "<p>Research is expensive to produce and often under-distributed. Teams publish one article or report and then move on before the asset has delivered its full value.</p>",
      "<p>A better approach treats each research asset like a content engine. Quotes become social posts, findings become sales enablement, themes become short videos, and charts become email hooks.</p>",
      "<p>Distribution improves when teams plan the derivative outputs before the core asset is even published.</p>",
    ].join(""),
  },
  {
    title: "The Role of Proof Points in Mid-Funnel Marketing",
    category: "Marketing",
    subcategory: "Performance Marketing",
    tags: "proof points, mid-funnel, conversion strategy",
    status: "published",
    featured: false,
    content: [
      "<p>Mid-funnel prospects are rarely waiting for more awareness. They are waiting for stronger evidence. Proof points close that gap by making value more believable and risk feel lower.</p>",
      "<p>The strongest proof is concrete: outcomes, implementation details, before-and-after contrasts, and language that maps directly to buyer concerns.</p>",
      "<p>When proof points are weak, otherwise strong campaigns lose momentum in evaluation stages.</p>",
    ].join(""),
  },
  {
    title: "Why Editorial Governance Matters as Teams Scale",
    category: "Technology",
    subcategory: "Automation",
    tags: "editorial governance, scaling teams, content quality",
    status: "published",
    featured: false,
    content: [
      "<p>As teams scale, inconsistency usually expands faster than output. More contributors create more content, but without governance the quality curve becomes unpredictable.</p>",
      "<p>Editorial governance creates the rules that keep content aligned: who approves what, how quality is judged, which standards are non-negotiable, and what escalation looks like.</p>",
      "<p>That structure protects the brand while still allowing production volume to increase.</p>",
    ].join(""),
  },
  {
    title: "The Best Marketing Dashboards Tell a Story, Not Just a Number",
    category: "Technology",
    subcategory: "AI",
    tags: "marketing dashboards, analytics, reporting, decision making",
    status: "published",
    featured: false,
    content: [
      "<p>Dashboards become noise when they display metrics without narrative context. Decision-makers do not just need data access. They need signal about what changed, why it matters, and what should happen next.</p>",
      "<p>The best dashboards frame performance around goals, trend movement, and exceptions that need action. That turns reporting into decision support rather than passive visibility.</p>",
      "<p>Good analytics design reduces interpretation time and improves operating clarity.</p>",
    ].join(""),
  },
  {
    title: "Why Offer Positioning Matters More Than Feature Volume",
    category: "Branding",
    subcategory: "Brand Identity",
    tags: "offer positioning, product marketing, differentiation",
    status: "published",
    featured: false,
    content: [
      "<p>More features do not automatically create more demand. Buyers respond more strongly to a clear offer than to a long list of capabilities they have to interpret themselves.</p>",
      "<p>Offer positioning explains why the solution matters, who it is for, and what outcome becomes easier or faster because it exists. That framing is what gives features commercial meaning.</p>",
      "<p>Strong positioning compresses understanding. Weak positioning forces the buyer to do strategic work the company should have done already.</p>",
    ].join(""),
  },
  {
    title: "A Better Way to Prioritize Topics for SEO and Sales Alignment",
    category: "Strategy",
    subcategory: "Content Strategy",
    tags: "seo, sales alignment, topic prioritization",
    status: "published",
    featured: false,
    content: [
      "<p>SEO topic planning often drifts away from the sales reality of the business. Teams chase volume while ignoring the questions that actually appear in buying conversations.</p>",
      "<p>A better prioritization model scores topics across search demand, commercial relevance, objection coverage, and repurposing value. That creates a more balanced backlog.</p>",
      "<p>When SEO and sales alignment improve, content does more than attract traffic. It supports movement through the funnel.</p>",
    ].join(""),
  },
  {
    title: "How Marketing Teams Can Use AI Without Lowering Content Quality",
    category: "Technology",
    subcategory: "AI",
    tags: "AI content, quality control, workflows, marketing teams",
    status: "published",
    featured: false,
    content: [
      "<p>AI lowers effort fastest in repetitive production tasks, but quality drops when teams treat it like a substitute for editorial judgment. The tool is useful; the operating model is what determines whether the result is publishable.</p>",
      "<p>High-performing teams define approved use cases, enforce human review, and keep prompts tied to a clear standard for tone, structure, and factual reliability.</p>",
      "<p>The goal is not to automate taste. It is to remove low-value repetition while protecting strategic quality.</p>",
    ].join(""),
  },
  {
    title: "What Makes a Brand Memorable in Crowded Digital Markets",
    category: "Branding",
    subcategory: "Storytelling",
    tags: "brand memory, differentiation, digital markets",
    status: "published",
    featured: false,
    content: [
      "<p>Memorability is usually the result of repeated distinctiveness, not one brilliant campaign. Brands get remembered when they are recognizable in message, design, and point of view over time.</p>",
      "<p>That requires consistency without becoming dull. The strongest brands repeat core signals while varying the format enough to stay fresh.</p>",
      "<p>In crowded markets, memory is one of the few durable advantages. It makes future acquisition cheaper and trust easier to earn.</p>",
    ].join(""),
  },
];

const seedPosts = async () => {
  await ensureBlogTables();

  let inserted = 0;
  let skipped = 0;

  for (const post of contentLibraryPosts) {
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
    console.error("Failed to seed content library posts:", error.message || error);
    try {
      await pool.end();
    } catch (_poolError) {
      // Ignore pool shutdown errors during failure handling.
    }
    process.exit(1);
  });
