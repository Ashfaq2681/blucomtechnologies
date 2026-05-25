const page = (content) => content;

export const footerPagesContent = {
  documentation: page({
    variant: "resource",
    eyebrow: "Documentation",
    title: "Working notes for planning, building, launching, and improving Blucom projects.",
    intro: [
      "Blucom documentation is written for the people who have to keep a digital project moving: founders, marketers, product owners, operations teams, and internal stakeholders who need clarity before design or development begins. It explains how we collect inputs, translate business goals into a practical build plan, and document the decisions that keep websites, campaigns, dashboards, and content systems maintainable after launch.",
      "This page is not a software manual with narrow instructions. It is a delivery guide for the way Blucom works. It covers what we need from a client, what we check before implementation, how we treat approvals, and how teams can reduce avoidable delays. The goal is simple: fewer assumptions, stronger handoffs, and a project record that remains useful long after the first version goes live.",
    ],
    panel: {
      label: "Documentation scope",
      title: "What this page helps clarify",
      items: [
        "The inputs that make discovery, architecture, design, and development easier to validate.",
        "The standards we use for responsive layouts, SEO foundations, analytics, accessibility, and launch checks.",
        "The handoff habits that help internal teams update content and plan future iterations confidently.",
      ],
    },
    sections: [
      {
        id: "project-inputs",
        heading: "Project Inputs",
        summary: "A strong engagement starts with context that can be used, tested, and shared.",
        body: [
          "Before a project begins, we ask for the material that explains what the business is trying to change. That includes audience details, current website access, analytics accounts, brand assets, product or service information, conversion goals, competitor references, and the practical constraints around timeline, budget, approvals, and internal ownership. The more complete the input, the less the project depends on guesswork.",
          "Useful documentation is not about collecting files for the sake of process. It helps us identify gaps early. A missing brand guideline, an unclear contact workflow, or an unavailable domain login can slow a launch more than a design decision. We prefer to surface those issues in discovery, assign owners, and decide what can move forward while another dependency is being resolved.",
        ],
        points: [
          "Share source files, not only screenshots, whenever logos, illustrations, icons, or diagrams need to be reused.",
          "Confirm who can approve structure, copy, design, integrations, compliance wording, and launch timing.",
          "List the systems that must connect to the website, including CRM, email, payment, analytics, and support tools.",
        ],
      },
      {
        id: "delivery-rhythm",
        heading: "Delivery Rhythm",
        summary: "The process stays flexible, but the purpose of each phase remains clear.",
        body: [
          "Most Blucom projects move through discovery, information architecture, design direction, content alignment, development, review, testing, launch, and post-launch improvement. Smaller projects may combine phases, while larger projects may split them into workstreams. In both cases, the rhythm exists to protect momentum. Each stage should answer a specific question before the next stage absorbs its assumptions.",
          "Discovery defines the problem and success measures. Architecture defines the pages, journeys, and content priorities. Design turns the structure into a usable interface. Development makes the experience responsive, stable, and measurable. Review and testing catch the details that affect trust: broken links, unclear forms, slow assets, missing metadata, inconsistent spacing, and weak mobile behavior.",
        ],
        points: [
          "Reviews are strongest when feedback is grouped by page, priority, and business impact.",
          "Late changes are possible, but they should be tied to a clear reason and checked against scope.",
          "Launch planning includes redirects, analytics, form testing, ownership, and rollback awareness.",
        ],
      },
      {
        id: "technical-standards",
        heading: "Technical Standards",
        summary: "The visible interface and the underlying implementation need to support future work.",
        body: [
          "Our technical standards focus on practical durability. A website should load quickly, behave consistently across screen sizes, use semantic structure where it matters, keep content editable, and avoid unnecessary complexity. We check heading order, image treatment, form behavior, navigation states, metadata, URL patterns, and the component structure that future maintainers will have to understand.",
          "Documentation also records choices that are easy to forget: why a landing page uses a certain form, which analytics events were configured, where key images came from, what integrations are active, and what needs to be reviewed before a seasonal campaign or product update. These notes turn the first delivery into a foundation instead of a one-time handoff.",
        ],
        points: [
          "Performance work includes image sizing, bundle awareness, caching behavior, and avoiding layout instability.",
          "SEO foundations include meaningful titles, descriptions, internal links, indexable copy, and clean page intent.",
          "Accessibility checks include contrast, focus states, keyboard navigation, labels, and readable content hierarchy.",
        ],
      },
      {
        id: "handoff-improvement",
        heading: "Handoff And Improvement",
        summary: "Launch is the start of measurement, not the end of responsibility.",
        body: [
          "After launch, documentation becomes the operating memory for the site. It should help a team understand what was built, how to update it, where important accounts live, and which improvements are worth considering next. We often include notes on content ownership, analytics dashboards, common support questions, campaign readiness, and backlog items that were intentionally deferred.",
          "The best digital systems improve through evidence. Post-launch work may include conversion review, search performance checks, campaign landing page changes, heatmap analysis, content expansion, speed improvements, or integration refinements. Documentation keeps those improvements grounded in what already exists, reducing duplication and making the next decision faster.",
        ],
        points: [
          "Keep a simple change log for major content, tracking, integration, and design updates.",
          "Review forms and notifications regularly so lead routing does not silently break.",
          "Use analytics to decide what to improve, not only to report what happened.",
        ],
      },
    ],
    notes: [
      { title: "Shared Record", body: "Project notes give everyone a reliable source of truth for decisions, dependencies, credentials, assets, and follow-up actions." },
      { title: "Decision Trace", body: "Important choices are easier to defend when the business reason, user impact, and implementation tradeoff are captured clearly." },
      { title: "Useful After Launch", body: "Good documentation helps teams maintain the website, onboard new contributors, and plan the next release without restarting discovery." },
    ],
    closing: {
      eyebrow: "Need project clarity?",
      title: "Bring the current material and we will turn it into a usable delivery path.",
      body: "Blucom can audit existing assets, identify missing inputs, and shape a practical documentation set for a new website, campaign, portal, or content system.",
    },
  }),

  guides: page({
    variant: "guide",
    eyebrow: "Guides",
    title: "Practical digital guides for teams that need better decisions before bigger spending.",
    intro: [
      "Blucom guides are built around the questions clients ask repeatedly: what should a website say first, how should a service page be structured, when is a landing page ready for paid traffic, which analytics events matter, and how can a small team improve content without turning every update into a redesign. The answers are practical because the problems are practical.",
      "The purpose of these guides is to help teams move from scattered opinions to usable decision frameworks. A good guide should make the next action clearer. It should help a founder brief a designer, help a marketer review a campaign, help an operator understand a form workflow, or help a product owner decide which page deserves deeper measurement.",
    ],
    panel: {
      label: "Guide library",
      title: "How to use these ideas",
      items: [
        "Start with the business decision the page, campaign, or workflow needs to support.",
        "Use the guide as a checklist before investing in design, development, media, or automation.",
        "Return after launch to compare assumptions against real visitor behavior and lead quality.",
      ],
    },
    sections: [
      {
        id: "website-planning",
        heading: "Website Planning",
        summary: "Structure should come from the decisions a visitor needs to make.",
        body: [
          "A website plan begins with audience, promise, proof, and action. Who is the page for, what problem are they trying to solve, what claim is the business making, what evidence supports that claim, and what should the visitor do next? When those questions are clear, the layout becomes easier to judge. Sections are no longer decorative blocks; they become steps in a decision path.",
          "Planning also protects the team from overbuilding. Many websites do not fail because they lack animation or visual variety. They fail because the offer is unclear, the content is thin, trust signals are buried, forms ask too much too soon, or navigation sends visitors away from the main conversion path. A strong plan makes these weaknesses visible before production starts.",
        ],
        points: [
          "Define primary and secondary audiences before writing page copy.",
          "Map every major page to one main user question and one desired action.",
          "Use proof that matches the claim: numbers, examples, process detail, testimonials, or credentials.",
        ],
      },
      {
        id: "content-strategy",
        heading: "Content Strategy",
        summary: "Content should reduce uncertainty, not simply fill available space.",
        body: [
          "Strong content answers buying questions in the language a real customer would use. Service pages should explain problems, outcomes, process, timelines, deliverables, and fit. Case studies should show context and constraints, not only polished results. FAQs should remove hesitation. Blog and insight content should be connected to commercial intent instead of floating separately from the website journey.",
          "A content strategy also defines maintenance. Teams need to know which pages change often, which claims require review, which examples can become outdated, and which topics deserve ongoing expansion. Without that discipline, content either goes stale or becomes inconsistent as different people add material without a shared editorial standard.",
        ],
        points: [
          "Write for the person comparing options, not only the person already convinced.",
          "Use headings that communicate substance without requiring visitors to read every paragraph.",
          "Keep claims specific enough to be credible and measurable.",
        ],
      },
      {
        id: "campaign-readiness",
        heading: "Campaign Readiness",
        summary: "Traffic only creates value when the destination is prepared for it.",
        body: [
          "Before a campaign goes live, the landing page, message, form, tracking, and follow-up process should be checked together. Paid media cannot fix a weak destination. If the ad promises one thing and the page emphasizes another, visitors lose confidence. If the form is too long or notification routing is unclear, leads are wasted. If tracking is missing, the team cannot learn which spend produced useful demand.",
          "Campaign readiness is partly creative and partly operational. The creative side asks whether the offer is compelling and easy to understand. The operational side asks whether the business can respond quickly, qualify leads, and measure outcomes. Both sides matter. A beautiful page with poor follow-up is as fragile as a strong sales team receiving low-quality enquiries.",
        ],
        points: [
          "Check message match between ad, email, landing page headline, proof, and CTA.",
          "Test the form on desktop and mobile before media spend begins.",
          "Track events that connect to decisions, such as lead quality, source, and conversion path.",
        ],
      },
      {
        id: "measurement",
        heading: "Measurement And Improvement",
        summary: "Analytics should explain what to do next, not only what happened last month.",
        body: [
          "Measurement starts by deciding which actions matter. Page views can be useful, but they rarely tell the full story. A better setup may track quote requests, newsletter signups, downloads, scroll depth, outbound clicks, campaign source, form abandonment, booking starts, or account creation. The right events depend on the business model and the questions the team needs to answer.",
          "Improvement is a cycle. Review behavior, identify friction, choose one meaningful change, measure again, and document what changed. This rhythm keeps websites from becoming static brochures. It also keeps optimization grounded in evidence rather than internal preference, which is especially important when several stakeholders have different opinions about what the homepage or service pages should emphasize.",
        ],
        points: [
          "Separate vanity metrics from signals that affect revenue, trust, or operational efficiency.",
          "Review conversion paths by source, device, and audience segment where possible.",
          "Document experiments so future teams understand what was tried and why.",
        ],
      },
    ],
    notes: [
      { title: "Reusable Frameworks", body: "Guides turn repeated project lessons into checklists that can be used before a build, during review, and after launch." },
      { title: "Decision Focus", body: "The best guidance connects design, content, marketing, and operations to a clear business decision." },
      { title: "Iteration Habit", body: "Guides are most useful when teams return to them after seeing real customer behavior." },
    ],
    closing: {
      eyebrow: "Need a working framework?",
      title: "Use a guide to shape the next website, campaign, or content review.",
      body: "Blucom can help turn your current questions into a practical plan with clear priorities, measurement, and implementation steps.",
    },
  }),

  apiReference: page({
    variant: "technical",
    eyebrow: "API Reference",
    title: "Integration guidance for forms, CRMs, dashboards, automation, and connected workflows.",
    intro: [
      "This API reference is a client-facing guide to how Blucom approaches integrations. It is not a public product API manual. Instead, it explains the planning discipline required when a website, portal, campaign, or dashboard needs to exchange information with another system. The work may involve forms, CRMs, payment tools, email platforms, analytics services, inventory systems, custom dashboards, or internal databases.",
      "Reliable integrations are built on agreement. Teams need to define fields, validation, ownership, access, authentication, error handling, notification behavior, reporting needs, and fallback steps before the first endpoint is connected. When those details are skipped, the integration may technically work but still fail the business process it was meant to support.",
    ],
    panel: {
      label: "Integration scope",
      title: "What we define before build",
      items: [
        "Data contracts that list required fields, accepted formats, labels, and validation rules.",
        "Access and credential practices that limit exposure while giving the build team what it needs.",
        "Testing scenarios that cover successful submissions, downtime, duplicates, missing values, and reporting gaps.",
      ],
    },
    sections: [
      {
        id: "data-contracts",
        heading: "Data Contracts",
        summary: "An integration is only as stable as the agreement behind the data.",
        body: [
          "A data contract describes what information moves between systems and how each system expects to receive it. For a lead form, this may include name, email, phone, company, service interest, source, consent status, and campaign parameters. For a dashboard, it may include event names, date formats, IDs, status labels, revenue fields, or regional filters. Small inconsistencies can create duplicate records, broken reports, or follow-up delays.",
          "We prefer to document field names, required values, optional values, accepted formats, error states, and ownership before development. This gives stakeholders a shared reference and gives developers something concrete to test. It also helps non-technical teams understand why a field cannot be renamed casually or why a CRM dropdown must match the values used on the website.",
        ],
        points: [
          "Confirm which system is the source of truth for each field.",
          "Document required, optional, derived, and hidden fields separately.",
          "Include campaign and consent fields when submissions connect to marketing workflows.",
        ],
      },
      {
        id: "access-security",
        heading: "Access And Security",
        summary: "Integrations require enough access to work, but not more access than necessary.",
        body: [
          "Credential handling is part of integration design. We request the minimum access needed, prefer named accounts over shared logins, and recommend secure credential sharing channels. API keys, tokens, admin accounts, and webhook URLs should not be pasted casually into chat threads or documents where they can be copied without control. When work is complete, unnecessary access should be revoked or rotated.",
          "Security decisions also depend on the sensitivity of the data. A newsletter form and a financial application workflow do not carry the same risk. The more sensitive the information, the more attention should be given to encryption, retention, permission levels, audit trails, spam protection, rate limits, and the systems that store or process the submitted data.",
        ],
        points: [
          "Use least-privilege access and remove temporary users after handoff.",
          "Avoid exposing tokens, private keys, or admin credentials in tickets, screenshots, or public repositories.",
          "Review where submitted data is stored, who can view it, and how long it remains there.",
        ],
      },
      {
        id: "testing-scenarios",
        heading: "Testing Scenarios",
        summary: "A workflow is reliable when edge cases are tested, not only the happy path.",
        body: [
          "Testing should include successful submissions, incomplete submissions, invalid values, duplicate records, slow API responses, temporary service outages, spam-like behavior, notification failures, and unusual device or browser behavior. A form that works once in ideal conditions is not enough. The business needs to know what happens when something is missing, delayed, rejected, or retried.",
          "Good testing also checks visibility. If an integration fails, who notices? Does the user see a clear message? Is the submission stored for retry? Does the internal team receive an alert? Are errors logged in a place that can be reviewed? These questions protect revenue and trust because silent failure is usually more damaging than a visible issue that can be resolved quickly.",
        ],
        points: [
          "Test with realistic data instead of only placeholder names and email addresses.",
          "Confirm user-facing messages for success, validation, and temporary failure states.",
          "Check internal notifications, CRM records, analytics events, and source attribution together.",
        ],
      },
      {
        id: "reporting-automation",
        heading: "Reporting And Automation",
        summary: "Connected systems should help teams act faster, not create another place to check manually.",
        body: [
          "Integrations are often justified by reporting or automation. A dashboard may combine website events, CRM stages, campaign spend, and sales outcomes. An automation may route leads, trigger email sequences, assign tasks, update records, or notify a team. The value comes from reducing manual work while improving visibility, but that only happens when the workflow reflects how the business actually operates.",
          "We define reporting needs before building visualizations. Teams should know which metrics matter, how often data updates, which filters are required, and which decisions the dashboard will support. For automation, we document triggers, conditions, exceptions, and ownership. The aim is not to automate everything; it is to remove avoidable friction while keeping important judgment in human hands.",
        ],
        points: [
          "Connect reports to decisions such as budget shifts, follow-up priorities, and content improvements.",
          "Avoid automations that hide important exceptions or make ownership unclear.",
          "Review dashboards periodically so labels, goals, and sources remain aligned with the business.",
        ],
      },
    ],
    notes: [
      { title: "Contracts First", body: "Clear field definitions prevent fragile integrations and make future changes easier to assess." },
      { title: "Secure Access", body: "Credentials, permissions, and retention rules are part of the workflow, not an afterthought." },
      { title: "Visible Failure", body: "A mature integration makes errors detectable, understandable, and recoverable." },
    ],
    closing: {
      eyebrow: "Planning an integration?",
      title: "Define the workflow before connecting the tools.",
      body: "Blucom can help map fields, permissions, testing scenarios, dashboards, and automation rules before development begins.",
    },
  }),

  community: page({
    variant: "community",
    eyebrow: "Community",
    title: "A practical community for builders, founders, marketers, and digital operators.",
    intro: [
      "Blucom's community focus is built around useful knowledge and real project discipline. Digital work improves when people can talk honestly about strategy, design, development, marketing operations, analytics, content, and the everyday decisions that shape online growth. Community, for us, is not a slogan. It is a way to share what works, learn from local businesses, and help emerging talent understand the standard expected in professional delivery.",
      "We support conversations that are practical rather than performative. A founder may need help clarifying an offer before building a website. A marketing team may need a better way to judge campaign readiness. A junior designer may need portfolio feedback that goes beyond visual taste. A partner may need a reliable specialist for a client problem. These are the moments where community has real value.",
    ],
    panel: {
      label: "Community role",
      title: "Where Blucom contributes",
      items: [
        "Workshops and sessions on web planning, SEO foundations, content systems, analytics, and campaign performance.",
        "Founder and small-business support that helps teams avoid expensive false starts.",
        "Mentorship, portfolio feedback, and collaboration with specialists across the digital ecosystem.",
      ],
    },
    sections: [
      {
        id: "learning-sessions",
        heading: "Learning Sessions",
        summary: "The best sessions help people make sharper decisions the same week.",
        body: [
          "Our learning sessions focus on the choices teams actually face: what a homepage needs to communicate, how to prioritize SEO work, when a landing page is ready for traffic, how to read basic analytics, how to prepare content for a redesign, and how to judge whether a digital tool is solving a real operational problem. The format is intentionally direct because busy teams need usable guidance.",
          "A strong learning environment respects different experience levels. Some participants are exploring digital strategy for the first time, while others are refining mature systems. We try to make the material accessible without flattening it. The aim is to create shared language so business owners, marketers, designers, developers, and operators can work together with less confusion.",
        ],
        points: [
          "Sessions prioritize examples, checklists, and review patterns over abstract theory.",
          "Participants are encouraged to bring real pages, campaigns, or workflows for practical discussion.",
          "Follow-up notes help teams turn workshop insight into action.",
        ],
      },
      {
        id: "founder-support",
        heading: "Founder Support",
        summary: "Early teams often need clarity before they need a large engagement.",
        body: [
          "Founders are often under pressure to build quickly, but speed without clarity can become expensive. A new business may not yet know which audience is most valuable, which service promise is strongest, what proof is available, or which digital channel should come first. Community support gives founders a place to test those assumptions before committing to a full build or campaign.",
          "This kind of support is not a replacement for strategy, design, or development work. It is a bridge. A focused conversation can help a founder understand whether they need a landing page, a service website, a content plan, a CRM cleanup, a pitch deck, or simply a sharper offer. Better early decisions reduce rework and make later investment more productive.",
        ],
        points: [
          "Clarify the offer, audience, and next action before choosing technology.",
          "Review proof points and objections early so content is not built around vague claims.",
          "Start with the smallest digital system that can validate demand responsibly.",
        ],
      },
      {
        id: "talent-development",
        heading: "Talent Development",
        summary: "Better digital work depends on people learning professional standards early.",
        body: [
          "Talent development is part of a healthier digital ecosystem. Designers, developers, writers, analysts, and marketers need feedback that connects craft to business outcomes. A portfolio can look polished but still miss content hierarchy, accessibility, conversion logic, or maintainability. A campaign can be creative but lack measurement discipline. Mentorship helps people see the full system.",
          "We value practical review: what problem was solved, why the structure makes sense, what tradeoffs were made, how the work would perform on mobile, how a client would update it, and what should be measured after launch. This kind of feedback prepares emerging talent for real projects where taste, speed, communication, and responsibility all matter.",
        ],
        points: [
          "Portfolio feedback covers context, process, constraints, outcomes, and presentation.",
          "Mentorship emphasizes communication and ownership, not only technical skill.",
          "Real project discipline helps new talent understand how teams make decisions under constraints.",
        ],
      },
      {
        id: "partner-network",
        heading: "Partner Network",
        summary: "Community also means knowing who can help when a project needs another skill.",
        body: [
          "No single team should pretend to cover every digital need equally well. Strong outcomes often involve specialists: brand strategists, photographers, copywriters, SEO consultants, media buyers, CRM experts, developers, analysts, and operations advisors. A trusted network makes it easier to match the right capability to the right problem without forcing every project through the same internal lens.",
          "Partnerships inside a community work best when expectations are clear. Scope, communication, timelines, ownership, confidentiality, and quality standards should be discussed openly. When specialists respect each other's roles, the client experience becomes smoother and the work becomes stronger. The community becomes more than a referral list; it becomes a delivery advantage.",
        ],
        points: [
          "Refer work based on fit, capacity, and trust, not only availability.",
          "Define responsibilities early so clients do not receive conflicting direction.",
          "Share standards and lessons that raise the quality of the wider ecosystem.",
        ],
      },
    ],
    notes: [
      { title: "Useful Knowledge", body: "Community work is strongest when people leave with a clearer decision, not only inspiration." },
      { title: "Local Relevance", body: "Regional businesses need digital guidance that respects their market, constraints, and growth stage." },
      { title: "Shared Standards", body: "Mentorship and collaboration help raise expectations across design, development, marketing, and analytics." },
    ],
    closing: {
      eyebrow: "Want to collaborate?",
      title: "Bring a real question, project, or learning need.",
      body: "Blucom is open to useful sessions, partner conversations, founder reviews, and community initiatives that improve digital execution.",
    },
  }),

  press: page({
    variant: "company",
    eyebrow: "Press",
    title: "Newsroom information for Blucom Technologies, our work, and our point of view.",
    intro: [
      "This press page is for journalists, partners, event organizers, and researchers who need a clear overview of Blucom Technologies. We help organizations improve digital presence through strategy, web systems, content, marketing operations, analytics, and practical implementation. Our work sits between business clarity and technical delivery, which means we are often involved where teams need a stronger digital foundation rather than isolated visual updates.",
      "Blucom's perspective is simple: a digital presence should make a business easier to understand, easier to trust, easier to measure, and easier to improve. Good design is not decoration alone. It is visible structure for the way a company explains value, captures demand, supports customers, and learns from behavior. That point of view shapes our client work and the topics we can speak about publicly.",
    ],
    panel: {
      label: "Media details",
      title: "Useful information for coverage",
      items: [
        "Company name: Blucom Technologies.",
        "Focus areas: digital strategy, websites, content systems, marketing operations, analytics, and growth workflows.",
        "Media enquiries can be sent to connect@blucomtechnologies.com with topic, deadline, outlet, and preferred format.",
      ],
    },
    sections: [
      {
        id: "company-overview",
        heading: "Company Overview",
        summary: "Blucom helps teams turn digital ambition into usable systems.",
        body: [
          "Blucom Technologies works with organizations that need their online presence to perform more clearly. The work may include a new website, improved service pages, landing pages for campaigns, content planning, analytics setup, dashboard thinking, or technical integrations. In many cases, the challenge is not a single missing feature. It is a lack of alignment between message, design, technology, and operations.",
          "We approach projects by clarifying the business goal, the audience, the journey, and the measurement plan before production becomes heavy. This helps clients avoid websites that look new but still leave visitors confused. It also helps internal teams understand what they own after launch, from content updates to campaign review and lead follow-up.",
        ],
        points: [
          "Blucom combines strategy, design, development, content, and analytics thinking.",
          "Projects are planned around business decisions and user behavior, not only page count.",
          "The company supports practical improvement after launch through measurement and iteration.",
        ],
      },
      {
        id: "point-of-view",
        heading: "Point Of View",
        summary: "Digital work should create operational clarity as much as visual polish.",
        body: [
          "We believe a website is part of a business system. It affects sales conversations, hiring, support, investor confidence, partner trust, media perception, and campaign performance. When a site is unclear, the cost appears in many places: weaker leads, repeated explanations, poor attribution, lower search visibility, and slower internal updates. Strong digital work reduces those costs.",
          "Our public commentary can cover website planning, conversion journeys, content strategy, local business digitization, SEO foundations, campaign readiness, analytics maturity, integration planning, and the gap between attractive design and measurable performance. We prefer grounded commentary based on what teams can actually implement.",
        ],
        points: [
          "Good design makes value, structure, and trust easier to understand.",
          "Measurement should support better decisions, not just reporting rituals.",
          "Digital systems improve when teams document decisions and learn from behavior.",
        ],
      },
      {
        id: "media-requests",
        heading: "Media Requests",
        summary: "Clear request details help us respond with the right person and context.",
        body: [
          "For interviews, background information, quotes, expert commentary, or event participation, please include the topic, publication or organization, deadline, expected format, and any specific questions. If the request concerns a technical or legal topic, include enough context for us to decide whether Blucom is the right source or whether another specialist should be recommended.",
          "We aim to be useful and accurate. That may mean declining a request if the topic is outside our expertise, or asking for clarification before commenting. For events and panels, we prefer formats where the discussion is practical and useful for the audience rather than limited to broad promotional statements.",
        ],
        points: [
          "Send press enquiries to connect@blucomtechnologies.com.",
          "Include deadline, format, topic, outlet, and contact details.",
          "For event requests, include audience profile, session length, and expected contribution.",
        ],
      },
      {
        id: "brand-usage",
        heading: "Brand Usage",
        summary: "Brand references should keep the company name and visual assets intact.",
        body: [
          "Please refer to the company as Blucom Technologies. If logo files, screenshots, founder details, or company descriptions are required, request current assets rather than copying outdated material from third-party sources. Visual assets should not be stretched, recolored, cropped in a misleading way, or placed on backgrounds that reduce legibility.",
          "When describing our work, avoid presenting Blucom as only a design studio or only a marketing agency. The company works across digital strategy, web implementation, content systems, analytics, and operational workflows. That broader framing is important because many client challenges sit between those disciplines.",
        ],
        points: [
          "Use current approved assets when available.",
          "Do not modify the company name, logo proportions, or colors without permission.",
          "Describe Blucom's work as digital strategy and implementation across web, content, analytics, and operations.",
        ],
      },
    ],
    notes: [
      { title: "Clear Positioning", body: "Blucom is best understood as a practical digital partner connecting strategy, build quality, content, and measurement." },
      { title: "Useful Commentary", body: "We can contribute on topics where execution, customer journeys, and business outcomes intersect." },
      { title: "Current Assets", body: "For accurate coverage, request up-to-date company details and brand files instead of relying on old references." },
    ],
    closing: {
      eyebrow: "Press enquiry",
      title: "Send the topic, deadline, and format so we can respond accurately.",
      body: "Blucom can support media requests, expert commentary, event participation, and company background when the topic matches our expertise.",
    },
  }),

  partners: page({
    variant: "company",
    eyebrow: "Partners",
    title: "Partnerships built around clear roles, dependable delivery, and useful expertise.",
    intro: [
      "Blucom partners with agencies, consultants, technology providers, media teams, and specialist operators when collaboration creates a better result for the client. The strongest partnerships are not vague networking arrangements. They are practical working relationships with clear standards, honest communication, defined responsibilities, and shared respect for the client's time and trust.",
      "Partnerships may involve behind-the-scenes website delivery, landing page production, analytics setup, content support, CRM or automation planning, technical troubleshooting, or strategic review. In every case, the aim is to add capability without adding confusion. A partner should make the client experience smoother, not create another layer of coordination without purpose.",
    ],
    panel: {
      label: "Partner fit",
      title: "Who we collaborate with",
      items: [
        "Agencies that need reliable web, landing page, analytics, or technical delivery support.",
        "Consultants and advisors who need a build partner for client recommendations.",
        "Technology, media, and specialist teams whose work connects to client growth systems.",
      ],
    },
    sections: [
      {
        id: "agency-collaboration",
        heading: "Agency Collaboration",
        summary: "We can support agency teams quietly or join client conversations when useful.",
        body: [
          "Agencies often need flexible delivery capacity without diluting their client relationship. Blucom can help with website builds, landing pages, performance fixes, content structures, analytics events, SEO foundations, and technical execution. Some partnerships are white-label or quiet delivery arrangements. Others include direct participation in discovery, review, or technical explanation when the agency wants specialist support in the room.",
          "Good agency collaboration depends on communication discipline. We define scope, review cycles, ownership, source files, staging access, technical decisions, and handoff expectations early. This prevents common friction such as unclear approval paths, duplicated feedback, or last-minute asset requests. The client should experience one coherent team, even when several specialists contribute behind the scenes.",
        ],
        points: [
          "Support can be white-label, co-branded, or client-facing depending on the engagement.",
          "Scope and review responsibilities should be clear before production begins.",
          "We respect the agency's client relationship and communication preferences.",
        ],
      },
      {
        id: "consultant-referrals",
        heading: "Consultants And Referrals",
        summary: "Advisors need implementation partners who can protect the quality of the recommendation.",
        body: [
          "Consultants often identify a strategic need before a client has the internal capacity to execute it. A digital audit may reveal weak service pages, broken tracking, poor lead routing, unclear content, or outdated site structure. Blucom can help turn those recommendations into practical implementation while keeping the consultant's strategic context intact.",
          "Referral relationships work best when expectations are transparent. We discuss whether the consultant remains involved, how communication should flow, what success looks like, and which parts of the project are outside Blucom's scope. That clarity protects the client and the relationship. It also reduces the risk of a recommendation becoming distorted during delivery.",
        ],
        points: [
          "We can translate strategic recommendations into phased implementation plans.",
          "Referral expectations, commercial terms, and communication roles should be explicit.",
          "Clients benefit when advisors and delivery teams share context before work starts.",
        ],
      },
      {
        id: "technology-media",
        heading: "Technology And Media Partners",
        summary: "Tools and campaigns perform better when the surrounding system is ready.",
        body: [
          "Technology providers and media teams often rely on the client's website, forms, analytics, and content to make their own work successful. A campaign may drive traffic to a weak page. A CRM may collect incomplete fields. A dashboard may display data that was never named consistently. Blucom can help strengthen the surrounding system so partner work has a better chance of producing value.",
          "This collaboration may include landing page preparation, tracking plans, integration mapping, content improvements, form testing, or performance review. We do not treat tools as magic fixes. A platform or media budget creates value only when the journey, data, and follow-up process are ready to support it.",
        ],
        points: [
          "Campaign and technology work should be checked against page experience and data quality.",
          "Integration requirements need shared definitions before implementation.",
          "Partner reporting improves when events, sources, and outcomes are named consistently.",
        ],
      },
      {
        id: "working-standards",
        heading: "Working Standards",
        summary: "Partnerships should reduce risk through clarity, not create informal dependency.",
        body: [
          "We look for partners who communicate clearly, respect deadlines, acknowledge constraints, and care about the quality of the final client experience. Responsiveness matters, but so does judgment. A dependable partner knows when to ask questions, when to challenge an assumption, when to document a decision, and when to escalate a risk before it becomes a delivery problem.",
          "Commercial terms, confidentiality, file ownership, client communication, and post-launch responsibility should be discussed before work begins. These details may feel administrative, but they protect the relationship. When partners understand the rules of engagement, the team can focus on solving the client's problem instead of negotiating process midstream.",
        ],
        points: [
          "Define ownership for communication, deliverables, approvals, and post-launch support.",
          "Respect confidentiality and client context across all shared material.",
          "Escalate risks early so the partner team can solve them before they affect trust.",
        ],
      },
    ],
    notes: [
      { title: "Role Clarity", body: "Partnerships work when every contributor knows what they own and how decisions will be made." },
      { title: "Client Trust", body: "The client should experience coordinated expertise, not fragmented vendors." },
      { title: "Shared Standards", body: "Quality, communication, and responsible handoff matter as much as individual capability." },
    ],
    closing: {
      eyebrow: "Partner with Blucom",
      title: "Start with fit, role, and the client problem.",
      body: "If your team needs a practical digital partner for web, content, analytics, campaign, or integration work, begin with the outcome you want to protect.",
    },
  }),

  privacyPolicy: page({
    variant: "legal",
    eyebrow: "Privacy Policy",
    title: "How Blucom handles personal information with purpose, restraint, and accountability.",
    intro: [
      "This privacy policy explains how Blucom Technologies may collect, use, protect, and manage information through our website, enquiry forms, newsletter activity, client conversations, project workflows, analytics tools, and support channels. We have written it in plain language so visitors and clients can understand the practical choices behind our data handling.",
      "Privacy is not only a legal topic. It affects trust, project delivery, marketing communication, account access, and the way teams work with shared systems. Blucom aims to collect only information that has a clear purpose, use it responsibly, limit access where possible, and keep privacy questions visible during website, campaign, analytics, and integration work.",
    ],
    panel: {
      label: "Privacy commitments",
      title: "What guides our handling",
      items: [
        "We collect information for communication, project delivery, analytics, support, and consent-based updates.",
        "We do not sell personal information or treat contact details as a commodity.",
        "We use trusted service providers only where they support the website, client work, communication, or measurement.",
      ],
    },
    sections: [
      {
        id: "information-collected",
        heading: "Information We Collect",
        summary: "The information we collect depends on how you interact with Blucom.",
        body: [
          "When you contact Blucom, we may collect your name, email address, phone number, company name, role, location, project details, budget range, timeline, and any message or files you choose to share. If you subscribe to updates, we may store your email address and subscription preferences. If you become a client, project records may include brand assets, content drafts, access notes, approvals, invoices, meeting notes, and communication history.",
          "Our website may also collect technical and usage information such as browser type, device category, approximate location, referring page, pages visited, form interactions, campaign parameters, and analytics events. This information helps us understand site performance, improve content, detect issues, and evaluate whether our digital presence is serving visitors properly.",
        ],
        points: [
          "We avoid requesting sensitive information unless it is necessary for a specific project or workflow.",
          "Files and project materials should be shared through appropriate channels when they contain confidential details.",
          "Analytics information is used to improve experience and measurement rather than identify individual visitors unnecessarily.",
        ],
      },
      {
        id: "use-of-information",
        heading: "How We Use Information",
        summary: "Information is used to respond, deliver services, improve systems, and maintain records.",
        body: [
          "We use information to answer enquiries, prepare proposals, deliver services, manage projects, provide support, send operational messages, improve website content, measure campaign performance, maintain business records, and communicate updates when consent or a relevant business relationship exists. In client work, information may also be used to configure forms, integrations, dashboards, content workflows, or analytics reports.",
          "We do not use personal information in ways that are unrelated to the reason it was provided without a valid basis. For example, a project enquiry may be used to respond to your request and discuss relevant services, but it should not become an uncontrolled marketing list. Where marketing updates are sent, recipients should be able to unsubscribe or ask questions about the source of the communication.",
        ],
        points: [
          "Project data is used for delivery, review, support, and documentation connected to the engagement.",
          "Website analytics are used to understand performance, content value, and technical issues.",
          "Marketing communication is handled with consent, relationship context, and opt-out expectations in mind.",
        ],
      },
      {
        id: "sharing-retention",
        heading: "Sharing, Storage, And Retention",
        summary: "Service providers may support our work, but access should remain limited and purposeful.",
        body: [
          "Blucom may use third-party services for hosting, analytics, forms, email, CRM, project management, cloud storage, scheduling, payment administration, and security monitoring. These providers process information so the website and business workflows can operate. We aim to limit access to what is needed and choose tools that are appropriate for the nature of the information being handled.",
          "Retention periods vary depending on the context. Enquiry records may be kept for follow-up and business reference. Client records may be retained for operational, legal, tax, support, and project history reasons. Analytics data may be retained according to the settings of the tools being used. When information is no longer needed, we aim to delete, archive, or anonymize it where practical.",
        ],
        points: [
          "We may disclose information if required by law, to protect rights, or to respond to valid legal requests.",
          "Access to client material should be reviewed when a project ends or when team members change.",
          "Retention decisions balance operational usefulness, legal requirements, and privacy expectations.",
        ],
      },
      {
        id: "your-choices",
        heading: "Your Choices And Contact",
        summary: "You can ask questions, request corrections, or manage marketing communication.",
        body: [
          "You may contact Blucom to ask what information we hold, request correction of inaccurate details, unsubscribe from marketing communication, ask about deletion where applicable, or raise a privacy concern. Some requests may require identity verification, and some information may need to be retained for legal, contractual, security, or legitimate business reasons.",
          "Privacy expectations can vary by location and by the nature of the interaction. If your request involves regulated data, client systems, or information controlled by another organization, we may need to coordinate with the relevant data owner or service provider. Contact connect@blucomtechnologies.com with enough detail for us to identify the relevant interaction.",
        ],
        points: [
          "Use the same email address involved in the original interaction when possible.",
          "Include project name, form name, or communication date if it helps locate the record.",
          "Do not send highly sensitive information through a general contact form unless requested through a secure process.",
        ],
      },
    ],
    notes: [
      { title: "Purpose Matters", body: "We collect information to support communication, delivery, measurement, and improvement, not to gather data without a reason." },
      { title: "Limited Access", body: "Project and contact information should be available only to people and tools that need it for a defined purpose." },
      { title: "Open Questions", body: "Privacy requests and concerns can be sent to connect@blucomtechnologies.com with relevant context." },
    ],
    closing: {
      eyebrow: "Privacy question?",
      title: "Ask clearly and include the context we need to find the record.",
      body: "Blucom can review enquiries, subscriptions, client records, and project workflows when you need clarification about personal information.",
    },
  }),

  termsOfService: page({
    variant: "legal",
    eyebrow: "Terms of Service",
    title: "The basic terms for using our website and engaging Blucom services.",
    intro: [
      "These terms describe the general expectations that apply when you use the Blucom Technologies website, submit information through our forms, review our content, or discuss professional services with us. Specific client work may also be governed by proposals, statements of work, invoices, service agreements, acceptance emails, or other written terms that are more detailed than this page.",
      "The purpose of these terms is to keep basic responsibilities visible. Visitors should use the website lawfully and responsibly. Clients should provide accurate information, timely approvals, and the rights needed to use supplied materials. Blucom should deliver the agreed scope with professional care while being clear about dependencies, assumptions, and third-party limitations.",
    ],
    panel: {
      label: "Terms focus",
      title: "What these terms cover",
      items: [
        "Responsible website use, prohibited behavior, and reliance on published information.",
        "How project scope, approvals, payment, content, and delays are generally handled.",
        "Ownership expectations for final deliverables, third-party assets, and pre-existing materials.",
      ],
    },
    sections: [
      {
        id: "website-use",
        heading: "Website Use",
        summary: "You may browse and use our website for lawful informational purposes.",
        body: [
          "You agree not to misuse the website, interfere with its operation, attempt unauthorized access, submit malicious material, scrape content in a harmful way, impersonate another person, or use the website to violate applicable laws. We may update, remove, restructure, or restrict parts of the website at any time, especially where content becomes outdated or a technical issue needs attention.",
          "Information on the website is provided for general business and informational purposes. It should not be treated as legal, financial, regulatory, or technical advice for a specific situation. Before making decisions that carry risk, you should obtain advice from qualified professionals who understand your context, location, obligations, and business model.",
        ],
        points: [
          "Do not attempt to disrupt forms, infrastructure, accounts, or analytics systems.",
          "Do not copy website content or assets in a way that misrepresents Blucom or violates rights.",
          "Links to third-party websites are provided for convenience and are not endorsements of every external practice.",
        ],
      },
      {
        id: "project-scope",
        heading: "Project Scope And Responsibilities",
        summary: "Client work depends on written scope, timely inputs, and clear approval authority.",
        body: [
          "Professional services are defined through written documents or confirmed communication that describes deliverables, timeline, assumptions, pricing, responsibilities, and approval points. Scope may include strategy, design, development, content, analytics, integrations, support, or consulting. Work outside the agreed scope may require a change request, revised timeline, or additional fee.",
          "Clients are responsible for providing accurate content, brand assets, access credentials, legal approvals, product details, images, stakeholder feedback, and timely decisions. Delays in these inputs can affect delivery dates. Blucom will communicate dependencies where practical, but a project cannot remain on schedule if essential approvals or materials are unavailable.",
        ],
        points: [
          "Scope changes should be confirmed in writing before additional work proceeds.",
          "One clear approval owner helps prevent conflicting feedback and repeated revisions.",
          "Client-supplied content should be accurate, lawful, and cleared for use.",
        ],
      },
      {
        id: "payment-ownership",
        heading: "Payment And Ownership",
        summary: "Commercial terms and final ownership depend on the agreed project documents.",
        body: [
          "Fees, payment schedules, taxes, deposits, milestones, and late-payment expectations are normally stated in the relevant proposal, invoice, or agreement. Work may pause if payments are overdue or if required approvals are delayed. Any expenses, third-party subscriptions, premium plugins, stock assets, fonts, hosting, domains, advertising spend, or software licenses may be billed separately unless included in the written scope.",
          "Ownership of final deliverables depends on the agreement and payment status. Client content and brand assets usually remain the client's property. Blucom may retain rights to pre-existing methods, frameworks, reusable code patterns, internal tools, and general know-how. Third-party assets remain subject to their own license terms, which may restrict transfer, modification, or reuse.",
        ],
        points: [
          "Final files, credentials, and handoff details may depend on payment and contract completion.",
          "Third-party tools may require the client to maintain subscriptions or accounts after launch.",
          "Blucom may reference completed work in portfolios unless confidentiality terms say otherwise.",
        ],
      },
      {
        id: "limitations",
        heading: "Limitations And Updates",
        summary: "Digital services depend on third parties, changing platforms, and client-side decisions.",
        body: [
          "Blucom cannot guarantee uninterrupted website availability, specific search rankings, campaign performance, platform behavior, or third-party service continuity. We can apply professional standards, testing, and practical recommendations, but outcomes may be affected by hosting providers, browsers, algorithms, client content, market conditions, budget, competitors, and changes made after handoff.",
          "We may update these terms from time to time to reflect service changes, operational needs, or legal developments. The version published on the website applies to general website use. For active client work, the signed or accepted project documents should be reviewed alongside these terms where there is a specific question.",
        ],
        points: [
          "Backups, updates, monitoring, and support should be agreed rather than assumed.",
          "Client changes after handoff can affect performance, accessibility, security, or SEO.",
          "Questions about a specific agreement should be raised directly with Blucom.",
        ],
      },
    ],
    notes: [
      { title: "Written Scope", body: "A clear statement of work protects both the client and Blucom by making deliverables, assumptions, and approvals explicit." },
      { title: "Shared Responsibility", body: "Successful delivery depends on professional execution and timely client inputs." },
      { title: "Third-Party Limits", body: "Hosting, platforms, plugins, fonts, ad systems, and analytics tools may have their own terms and risks." },
    ],
    closing: {
      eyebrow: "Terms question?",
      title: "Review the project document first, then ask about the specific clause.",
      body: "For active work, Blucom can clarify how these general terms relate to your proposal, invoice, or service agreement.",
    },
  }),

  cookiePolicy: page({
    variant: "legal",
    eyebrow: "Cookie Policy",
    title: "How cookies and similar technologies support functionality, measurement, and improvement.",
    intro: [
      "Cookies, local storage, pixels, tags, and similar technologies help websites remember settings, understand visitor behavior, improve performance, protect forms, and measure marketing activity. This cookie policy explains how Blucom Technologies may use those technologies on our website and in related digital workflows.",
      "Cookies are not all the same. Some are needed for basic functionality or security. Some help analytics tools understand which pages are useful. Some support campaign attribution or remarketing where enabled. Our approach is to use these technologies for clear operational reasons and to give visitors practical ways to manage them through browser settings and consent tools where applicable.",
    ],
    panel: {
      label: "Cookie categories",
      title: "Common uses",
      items: [
        "Essential technologies that support core page behavior, security, forms, and session continuity.",
        "Analytics technologies that help us understand traffic, engagement, performance, and content value.",
        "Marketing technologies that may measure campaign effectiveness or support audience management where enabled.",
      ],
    },
    sections: [
      {
        id: "essential-cookies",
        heading: "Essential Technologies",
        summary: "Some browser storage is required for a website to work reliably.",
        body: [
          "Essential cookies or local storage items may support page routing, form behavior, security checks, spam prevention, accessibility preferences, load balancing, or session continuity. These technologies are generally not used to build marketing profiles. They help the website function and protect the experience from misuse or avoidable technical failure.",
          "If essential technologies are blocked, some parts of the website may not behave as expected. Forms may fail to submit, preferences may not be remembered, or security tools may not be able to distinguish normal visitors from automated abuse. For this reason, essential technologies are often treated differently from optional analytics or marketing cookies.",
        ],
        points: [
          "Essential technologies support operation, reliability, security, and basic user experience.",
          "They may be set by Blucom or by service providers that support the website.",
          "Blocking them may reduce functionality or prevent forms from working properly.",
        ],
      },
      {
        id: "analytics-cookies",
        heading: "Analytics Technologies",
        summary: "Measurement helps us improve pages, content, performance, and user journeys.",
        body: [
          "Analytics tools may collect information about pages visited, time on page, device type, browser, approximate location, referral source, scroll behavior, clicks, form interactions, and campaign parameters. This information helps us understand which content is useful, where visitors drop off, which devices need attention, and whether the website is supporting business goals.",
          "Analytics should be used to make better decisions, not to create unnecessary surveillance. We focus on patterns that help improve the website and evaluate marketing performance. Depending on the tools configured, data may be aggregated, sampled, anonymized, or retained according to provider settings. Visitors can manage many analytics cookies through browser controls or consent preferences where available.",
        ],
        points: [
          "Analytics data helps prioritize content, UX, SEO, and performance improvements.",
          "Campaign parameters can show which channels bring useful traffic.",
          "Measurement settings may change as tools, laws, and business needs evolve.",
        ],
      },
      {
        id: "marketing-cookies",
        heading: "Marketing Technologies",
        summary: "Marketing cookies may help measure ads and manage campaign audiences.",
        body: [
          "When enabled, marketing cookies, pixels, or tags may help measure ad performance, attribute conversions, manage remarketing audiences, limit repetition, or understand how visitors arrive from paid and social channels. These technologies may be provided by advertising platforms, social networks, analytics suites, or campaign tools used by Blucom or our clients.",
          "Marketing technologies should be connected to a clear campaign purpose. They are most useful when the landing page, conversion event, consent expectations, and reporting needs are already defined. Without that discipline, tags can accumulate without improving decisions. Blucom prefers a documented tracking plan so teams know what is installed and why.",
        ],
        points: [
          "Marketing tags should be reviewed before and after campaign launches.",
          "Conversion events need clear names and business definitions.",
          "Remarketing and audience tools should be used responsibly and in line with applicable requirements.",
        ],
      },
      {
        id: "managing-cookies",
        heading: "Managing Cookies",
        summary: "Visitors can control many cookie settings through browsers and consent tools.",
        body: [
          "Most browsers allow you to block, delete, or limit cookies. You can usually manage these settings in the privacy or security section of the browser. Some tools also provide opt-out mechanisms. If a consent banner or preference center is available on the website, it may allow you to manage optional categories such as analytics or marketing cookies.",
          "Changing cookie settings may affect the website experience. Some preferences may not be saved, forms may behave differently, or analytics may become less accurate. If you use multiple devices or browsers, you may need to manage settings separately. For questions about Blucom's cookie use, contact connect@blucomtechnologies.com.",
        ],
        points: [
          "Browser controls are the most common way to delete or block cookies.",
          "Private browsing modes may limit storage but do not replace privacy settings.",
          "Consent choices may need to be renewed if cookies are cleared or a different device is used.",
        ],
      },
    ],
    notes: [
      { title: "Functional First", body: "Some technologies are needed for the website to operate, protect forms, and maintain basic preferences." },
      { title: "Measured Improvement", body: "Analytics helps us improve content, journeys, and performance when events are planned responsibly." },
      { title: "Visitor Control", body: "Cookie settings can usually be managed through browsers and consent tools where available." },
    ],
    closing: {
      eyebrow: "Cookie question?",
      title: "Ask about the category, tool, or page involved.",
      body: "Blucom can review cookie and tracking questions when you provide the page, browser context, or campaign where the issue appears.",
    },
  }),

  gdprCompliance: page({
    variant: "legal",
    eyebrow: "GDPR Compliance",
    title: "A practical approach to privacy rights, lawful processing, and responsible data workflows.",
    intro: [
      "Blucom Technologies supports responsible data practices and recognizes the importance of privacy rights under GDPR and similar privacy frameworks. This page summarizes how we think about lawful basis, consent, access requests, correction, deletion, portability, processor relationships, and project workflows that involve personal data.",
      "GDPR compliance is not a single checkbox. It requires clarity about why information is collected, who controls it, where it is stored, which providers process it, how long it is retained, and how people can exercise rights. In client work, Blucom may act as a service provider, implementation partner, or advisor, while the client may remain the data controller for many business records.",
    ],
    panel: {
      label: "GDPR focus",
      title: "Rights and responsibilities",
      items: [
        "Lawful basis, consent, legitimate interest, contractual need, and operational processing should be documented.",
        "Individuals may have rights to access, correction, deletion, restriction, objection, or portability depending on context.",
        "Client projects should clarify controller, processor, provider, and access responsibilities early.",
      ],
    },
    sections: [
      {
        id: "lawful-basis",
        heading: "Lawful Basis And Consent",
        summary: "Every data workflow should have a reason that can be explained.",
        body: [
          "Personal information may be processed for different reasons depending on the situation. A contact form may be processed to respond to an enquiry. A client project record may be processed because it is necessary to deliver agreed services. A newsletter may rely on consent or a relevant business relationship. Analytics may rely on consent or legitimate interest depending on jurisdiction, configuration, and the nature of the data collected.",
          "Consent should be specific enough to be meaningful and easy enough to withdraw where required. It should not be hidden in unclear language or bundled with unrelated purposes. Where legitimate interest is used, organizations should consider whether the processing is necessary, proportionate, and expected by the individual. Blucom encourages teams to document these decisions rather than relying on memory.",
        ],
        points: [
          "Identify the purpose before collecting information.",
          "Separate operational communication from optional marketing where appropriate.",
          "Review consent language when forms, campaigns, or tracking tools change.",
        ],
      },
      {
        id: "individual-rights",
        heading: "Individual Rights",
        summary: "People may be able to ask about, correct, delete, restrict, or export their data.",
        body: [
          "Depending on location and context, individuals may have rights to access personal data, correct inaccurate data, request deletion, restrict processing, object to certain uses, withdraw consent, or receive data in a portable format. These rights may be subject to verification, legal exceptions, contractual obligations, security considerations, and the responsibilities of the organization that controls the data.",
          "Requests should include enough detail to identify the relevant record, such as email address, project name, form submission date, or communication channel. Blucom may need to verify identity before acting. If the data belongs to a client-controlled system, we may direct the request to the relevant client or coordinate with them as appropriate.",
        ],
        points: [
          "Rights requests should be sent to connect@blucomtechnologies.com with useful identifying context.",
          "Some information may need to be retained for legal, contractual, security, or accounting reasons.",
          "Requests involving client systems may require the client's instruction or involvement.",
        ],
      },
      {
        id: "processor-relationships",
        heading: "Processor Relationships",
        summary: "Digital projects often involve several systems that touch personal data.",
        body: [
          "A website or campaign may involve hosting providers, analytics tools, email platforms, form processors, CRM systems, scheduling tools, payment services, cloud storage, and project management software. Each provider may process information for a specific function. The responsibilities of controllers, processors, and sub-processors should be understood, especially when the data is sensitive or crosses borders.",
          "For client projects, Blucom encourages clear access rules, limited permissions, documented tool choices, and practical data maps where needed. This does not mean every small website requires a complex compliance program, but it does mean teams should know which systems collect information and who is responsible for managing them after launch.",
        ],
        points: [
          "Document which tools collect, store, or transmit personal information.",
          "Use named accounts and limited permissions where possible.",
          "Review providers when changing forms, CRM workflows, email tools, or analytics platforms.",
        ],
      },
      {
        id: "privacy-by-design",
        heading: "Privacy By Design In Projects",
        summary: "Privacy is easier to manage when it is considered during planning.",
        body: [
          "Privacy by design means asking data questions before implementation becomes difficult to change. Does the form need every field? Is the consent language clear? Where will submissions go? Who receives notifications? Are files stored securely? Is analytics configured responsibly? Are retention expectations known? These questions influence UX, content, technical setup, and operational ownership.",
          "Blucom can support privacy-aware implementation by reducing unnecessary fields, clarifying form labels, documenting integrations, limiting access, and recommending workflows that make responsibilities visible. We are not a substitute for legal counsel, but we can help translate privacy requirements into practical website and marketing operations.",
        ],
        points: [
          "Collect the minimum information needed for the stated purpose.",
          "Make consent, submission outcomes, and contact expectations clear to users.",
          "Include privacy checks in launch reviews for forms, analytics, integrations, and storage.",
        ],
      },
    ],
    notes: [
      { title: "Explain The Purpose", body: "Teams should be able to describe why information is collected and how it supports the interaction." },
      { title: "Map The Tools", body: "Compliance is easier when systems, providers, and access responsibilities are visible." },
      { title: "Design For Restraint", body: "The simplest privacy improvement is often collecting less data and routing it more carefully." },
    ],
    closing: {
      eyebrow: "GDPR request?",
      title: "Send enough detail to identify the relevant interaction.",
      body: "Blucom can review privacy rights requests, project workflows, and client implementation questions with the appropriate context.",
    },
  }),

  security: page({
    variant: "security",
    eyebrow: "Security",
    title: "Security-minded delivery for websites, forms, dashboards, integrations, and operations.",
    intro: [
      "Security is not a single plugin, password, or launch checklist. It is a set of habits that shape how a digital system is planned, built, accessed, updated, and handed over. Blucom approaches security through practical controls: limited permissions, careful credential handling, clean dependencies, protected forms, reliable hosting, backups, monitoring awareness, and clear ownership after launch.",
      "Different projects carry different levels of risk. A brochure website, ecommerce store, client portal, investor dashboard, and application form do not require the same controls. The right approach depends on data sensitivity, user roles, integrations, operational impact, and the client's internal capacity. Our role is to keep those risks visible and make sensible security decisions part of normal delivery.",
    ],
    panel: {
      label: "Security focus",
      title: "Practical controls",
      items: [
        "Least-privilege access, named accounts, credential rotation, and secure sharing practices.",
        "Form validation, spam protection, HTTPS, dependency awareness, backups, and update discipline.",
        "Ownership clarity for domains, hosting, analytics, admin accounts, integrations, and incident response.",
      ],
    },
    sections: [
      {
        id: "access-management",
        heading: "Access Management",
        summary: "Most avoidable security problems begin with unclear access and shared credentials.",
        body: [
          "Access should be granted intentionally. We request only what is needed for the task and prefer named accounts where possible so activity can be traced and permissions can be removed later. Shared admin logins create confusion because no one knows who changed what, and credentials often remain active long after a project ends. Temporary access should be reviewed during handoff.",
          "Credential sharing also matters. Passwords, API keys, tokens, hosting logins, and recovery codes should not be pasted into casual channels or stored in public documents. Teams should use secure password managers or approved sharing processes. When a team member leaves or an external partner completes work, access should be revoked or rotated to reduce unnecessary exposure.",
        ],
        points: [
          "Use named accounts and role-based permissions whenever the platform supports them.",
          "Remove temporary users after launch or when support responsibilities change.",
          "Store passwords, tokens, and recovery codes in secure systems instead of chat threads.",
        ],
      },
      {
        id: "website-hygiene",
        heading: "Website Hygiene",
        summary: "Routine maintenance prevents many small issues from becoming serious incidents.",
        body: [
          "Security-minded website hygiene includes updated dependencies, HTTPS, secure hosting configuration, form validation, spam protection, sensible admin permissions, protected environment variables, backup routines, and careful handling of file uploads. None of these controls are glamorous, but together they reduce common points of failure.",
          "Performance and security are also connected. Bloated pages, outdated scripts, abandoned plugins, and unmanaged third-party tags can create risk as well as slow experiences. A clean website is easier to monitor, easier to update, and easier to recover. Blucom encourages clients to treat maintenance as an operating responsibility rather than an occasional emergency.",
        ],
        points: [
          "Review plugins, libraries, scripts, and third-party tags periodically.",
          "Protect forms against spam, invalid input, and unclear failure states.",
          "Keep backups accessible, tested, and owned by the right team.",
        ],
      },
      {
        id: "data-integrations",
        heading: "Data And Integrations",
        summary: "Connected systems expand both capability and responsibility.",
        body: [
          "Forms, CRMs, dashboards, email tools, payment systems, and automation platforms move information between services. Every connection creates questions: what data is sent, where it is stored, who can view it, how errors are handled, and what happens if the service is unavailable. Security planning should be part of integration design, not something added after the workflow is live.",
          "Sensitive workflows deserve additional care. Application forms, customer portals, finance-related submissions, health-related content, and internal dashboards may require stronger validation, permission controls, logging, retention rules, and legal review. Even for ordinary lead forms, teams should know who receives notifications and whether submissions are stored in a place that remains secure over time.",
        ],
        points: [
          "Map where submitted data travels and which systems store it.",
          "Use environment variables and server-side protections for sensitive credentials.",
          "Plan failure states so users and internal teams know when an integration has not completed.",
        ],
      },
      {
        id: "incident-readiness",
        heading: "Incident Readiness",
        summary: "Recovery is faster when ownership and contact paths are known before trouble starts.",
        body: [
          "Incident readiness does not mean expecting failure every day. It means knowing who controls the domain, hosting, DNS, email, analytics, forms, admin accounts, backups, and third-party tools. In many organizations, these details are scattered across former employees, agencies, freelancers, and personal accounts. That confusion makes recovery slower when a site goes down or an account is compromised.",
          "A practical readiness plan includes ownership records, escalation contacts, backup access, update responsibility, and a basic response sequence. Who checks the issue first? Who can contact hosting? Who can pause a campaign? Who can restore a backup? Who informs stakeholders? These answers protect time, trust, and revenue during an incident.",
        ],
        points: [
          "Maintain a current register of domains, hosting, DNS, admin accounts, and critical services.",
          "Know who can approve emergency changes or downtime decisions.",
          "Review access and backup status after major launches, team changes, or vendor transitions.",
        ],
      },
    ],
    notes: [
      { title: "Least Privilege", body: "Give people and tools the access they need, then remove it when the need ends." },
      { title: "Maintenance Habit", body: "Security improves through regular updates, reviews, backups, and ownership checks." },
      { title: "Recovery Clarity", body: "Incidents are easier to handle when accounts, contacts, and responsibilities are documented." },
    ],
    closing: {
      eyebrow: "Security review",
      title: "Start with access, forms, hosting, integrations, and ownership.",
      body: "Blucom can help review practical security gaps in websites, dashboards, campaign systems, and handoff processes.",
    },
  }),
};
