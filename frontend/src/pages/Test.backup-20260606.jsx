import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, ArrowRight, Check, Search, Target, FileText, 
  Users, Cpu, BarChart3, ChevronRight, Layers, Lightbulb, 
  TrendingUp, ShieldCheck, HelpCircle, Briefcase, Building, Globe, Zap
} from 'lucide-react';
import heroImage from '../assets/heroimage.svg';
import brandingImage from '../assets/icons/ModuleQuote.png';
import digitalMarketingImage from '../assets/icons/ModuleShape.png';
import ideasImage from '../assets/insight1.jpg';
import newsImage from '../assets/news1.png';
import blogImage from '../assets/Attention-Economy-is-the-new-economy.png';
import { getPublishedPosts } from '../api/blogs';

const postMatchesType = (post, contentType) => {
  const target = contentType.toLowerCase();
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return values.includes(target);
};

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getPostExcerpt = (post) =>
  post.description || post.seoDescription || stripHtml(post.content || "").slice(0, 140);

const sortLatestPosts = (posts) =>
  [...posts].sort((a, b) => {
    const aDate = new Date(a.createdAt || a.updatedAt || 0).getTime();
    const bDate = new Date(b.createdAt || b.updatedAt || 0).getTime();
    return bDate - aDate;
  });

export default function App() {
  const [activeTab, setActiveTab] = useState('Launch');
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [contentPosts, setContentPosts] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);
  const [contentError, setContentError] = useState("");

  const industries = [
    "Technology & SaaS", "Education & EdTech", "Healthcare", "Manufacturing", 
    "Construction", "Automotive", "Real Estate", "Retail", 
    "Professional Services", "Financial Services", "E-Commerce", 
    "Consumer Goods", "Logistics & Transportation", "Telecommunications"
  ];

  const serviceGroups = [
    {
      title: "Discovery",
      items: [
        ["Identity", "/services/identity"],
        ["Brand Strategy", "/services/brand-strategy"],
        ["Messaging Positioning", "/services/messaging-positioning"],
        ["Reputation Management", "/services/reputation-management"],
        ["Product Mapping", "/services/product-mapping"],
        ["Persona Creation", "/services/persona-creation"],
        ["Customer Journey Mapping", "/services/customer-journey-mapping"],
      ],
    },
    {
      title: "Strategy",
      items: [
        ["Brand Awareness", "/services/brand-awareness"],
        ["Strategic Communication", "/services/strategic-communication"],
        ["Analysis / Measurement", "/services/analysis-measurement"],
        ["Impact Measurement", "/services/impact-measurement"],
        ["Analytics Implementation", "/services/analytics-implementation"],
        ["Campaign Optimization", "/services/campaign-optimization"],
        ["Content Strategy", "/services/content-strategy"],
      ],
    },
    {
      title: "Digital",
      items: [
        ["Search Marketing", "/services/search-marketing"],
        ["Lead Gen", "/services/lead-gen"],
        ["Media Planning / Buying", "/services/media-planning-buying"],
        ["Content Marketing", "/services/content-marketing"],
        ["Omnichannel Campaigns", "/services/omnichannel-campaign-management"],
        ["Interaction Assets Devs", "/services/interaction-assets-devs"],
        ["Nurture Strategies", "/services/nurture-strategies"],
      ],
    },
    {
      title: "Interaction",
      items: [
        ["UI Designing", "/services/ui-designing"],
        ["Prototyping & Wireframing", "/services/prototyping-and-wireframing"],
        ["User Journey Mapping", "/services/user-journey-mapping"],
        ["Interaction Design", "/services/interaction-design"],
        ["Web Maintenance", "/services/web-maintenance"],
        ["Data Visualization", "/services/data-visualization"],
        ["Web Development", "/services/web-development"],
      ],
    },
  ];

  useEffect(() => {
    let mounted = true;

    const loadContentPosts = async () => {
      try {
        setContentLoading(true);
        const posts = await getPublishedPosts();

        if (mounted) {
          setContentPosts(sortLatestPosts(posts));
          setContentError("");
        }
      } catch (_error) {
        if (mounted) {
          setContentPosts([]);
          setContentError("Latest posts are unavailable right now.");
        }
      } finally {
        if (mounted) {
          setContentLoading(false);
        }
      }
    };

    loadContentPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const contentSections = useMemo(() => {
    const blogPosts = contentPosts.filter(
      (post) => !postMatchesType(post, "Ideas") && !postMatchesType(post, "News"),
    );
    const ideasPosts = contentPosts.filter((post) => postMatchesType(post, "Ideas"));
    const newsPosts = contentPosts.filter((post) => postMatchesType(post, "News"));

    const fallbackCards = {
      Blog: [
        {
          title: "Practical brand, content, and performance insights",
          desc: "Read articles on branding, digital marketing, design systems, analytics, and business growth.",
          image: blogImage,
        },
        {
          title: "Building a practical content calendar",
          desc: "A steady publishing rhythm helps teams plan campaigns, coordinate creative work, and keep audiences engaged.",
          image: blogImage,
        },
        {
          title: "Using analytics to shape better campaigns",
          desc: "Clear reporting turns campaign performance into useful decisions about budget, audience, messaging, and creative direction.",
          image: blogImage,
        },
      ],
      News: [
        {
          title: "Latest updates from the Blucom Technologies desk",
          desc: "Follow announcements, events, launches, and timely updates across marketing and technology.",
          image: newsImage,
        },
        {
          title: "Marketing and technology coverage for growth teams",
          desc: "Track practical updates that affect digital platforms, media planning, and brand communication.",
          image: newsImage,
        },
        {
          title: "Company updates and industry movement",
          desc: "Stay close to agency updates, new services, and relevant marketing shifts.",
          image: newsImage,
        },
      ],
      Ideas: [
        {
          title: "Strategic ideas that move from concept to market",
          desc: "Explore creative direction, campaign thinking, and research-backed approaches for growth teams.",
          image: ideasImage,
        },
        {
          title: "Creative thinking for brand and campaign teams",
          desc: "Review practical ideas for positioning, message testing, and audience engagement.",
          image: ideasImage,
        },
        {
          title: "Research-backed direction for modern brands",
          desc: "Turn insights into usable strategy across content, advertising, and digital experiences.",
          image: ideasImage,
        },
      ],
    };

    const buildCard = (type, post, fallback) => ({
      ...fallback,
      type,
      title: post?.title || fallback.title,
      desc: post ? getPostExcerpt(post) : fallback.desc,
      image: post?.image || fallback.image,
      href: post?.slug ? `/${type.toLowerCase()}/${post.slug}` : `/${type.toLowerCase()}`,
    });

    return [
      {
        type: "Blog",
        title: "Latest Blog Posts",
        desc: "Practical articles on branding, digital marketing, design systems, analytics, and business growth.",
        href: "/blog",
        posts: fallbackCards.Blog.map((fallback, index) => buildCard("Blog", blogPosts[index], fallback)),
      },
      {
        type: "News",
        title: "Latest News",
        desc: "Company updates, announcements, launches, and timely marketing and technology coverage.",
        href: "/news",
        posts: fallbackCards.News.map((fallback, index) => buildCard("News", newsPosts[index], fallback)),
      },
      {
        type: "Ideas",
        title: "Latest Ideas",
        desc: "Strategic thinking, creative direction, and research-backed concepts for modern growth teams.",
        href: "/ideas",
        posts: fallbackCards.Ideas.map((fallback, index) => buildCard("Ideas", ideasPosts[index], fallback)),
      },
    ];
  }, [contentPosts]);

  return (
    <div className="test-landing min-h-screen bg-gray-100 text-slate-900 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      <style>{`
        .test-landing,
        .test-landing .font-serif,
        .test-landing .font-mono {
          font-family: proximaNova, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          letter-spacing: 0;
        }

        .test-landing .text-blue-600,
        .test-landing .hover\\:text-blue-600:hover,
        .test-landing .group:hover .group-hover\\:text-blue-600 {
          color: #059669;
        }

        .test-landing .text-blue-400 {
          color: #34d399;
        }

        .test-landing .bg-blue-600,
        .test-landing .hover\\:bg-blue-600:hover {
          background-color: #059669;
        }

        .test-landing .bg-blue-50 {
          background-color: #ecfdf5;
        }

        .test-landing .bg-blue-100 {
          background-color: #d1fae5;
        }

        .test-landing .border-blue-600 {
          border-color: #059669;
        }

        .test-landing .border-blue-200 {
          border-color: #a7f3d0;
        }

        .test-landing .border-blue-100 {
          border-color: #d1fae5;
        }

        .test-landing h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: 0;
        }

        .test-landing h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0;
        }

        .test-landing h3 {
          font-weight: 700;
          letter-spacing: 0;
        }

        .test-landing p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.75;
        }

        .test-landing a,
        .test-landing button,
        .test-landing span {
          letter-spacing: 0;
        }

        .test-landing .framework-marquee {
          overflow: hidden;
        }

        .test-landing .framework-track {
          display: flex;
          width: max-content;
          gap: 0.75rem;
          animation: framework-scroll 36s linear infinite;
        }

        .test-landing .framework-marquee:hover .framework-track {
          animation-play-state: paused;
        }

        @keyframes framework-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      {/* --- HERO SECTION --- */}
      <section id="about" className="bg-white">
        <div className="mx-auto grid min-h-[900px] max-w-[1470px] lg:grid-cols-12">
          
          <div className="px-6 py-16 sm:px-8 lg:col-span-5 lg:px-0 lg:py-[60px] space-y-8 flex flex-col justify-start">
            <span className="font-mono text-[10px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-200 inline-block w-fit font-bold">
              Brand strategy and digital marketing agency in Islamabad
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal tracking-tight leading-[1.08]">
              Every Great Brand Starts <br />With an <span className="italic font-normal text-blue-600">Idea</span>
            </h1>
            <div className="max-w-[920px] space-y-5 pt-8">
              <p>
                In today's highly competitive business environment, having a great product or service is no longer enough to guarantee success. Customers are exposed to thousands of marketing messages every day, making it increasingly difficult for businesses to capture attention, build trust, and maintain long-term customer relationships.
              </p>
              <p>
                To stand out in a crowded marketplace, organizations need more than advertising. They need a clear brand strategy, a compelling identity, a strong digital presence, and a marketing ecosystem designed to generate measurable business growth.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-2">
              <a href="#contact" className="bg-slate-950 text-white font-mono text-[11px] font-bold px-5 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">Start a Project <ArrowRight size={14} /></a>
              <a href="#marketing" className="bg-slate-50 text-slate-700 font-mono text-[11px] font-bold px-5 py-3 rounded-lg border border-slate-200 hover:bg-slate-100 transition">Explore Services</a>
            </div>
          </div>

          <div className="relative hidden overflow-visible lg:col-span-7 lg:block">
            <img
              src={heroImage}
              alt="Blucom Technologies brand and digital growth illustration"
              className="absolute left-[-34px] top-[40px] w-[980px] max-w-none object-contain"
            />
          </div>

        </div>
      </section>

      {/* --- SECTION 1: BRAND STRATEGY --- */}
      <section id="branding" className="border-b border-slate-200 bg-white">
        <div className="w-full bg-emerald-600 py-2">
          <div className="mx-auto px-0">
            <div className="framework-marquee">
              <div className="framework-track">
                {[...[
                  "Brand Discovery Workshops", "Brand Identity Development", "Brand Architecture",
                  "Market Research & Analysis", "Competitor Benchmarking", "Brand Positioning",
                  "Messaging Frameworks", "Visual Identity Systems", "Customer Persona Development",
                  "Product Positioning", "Strategic Communication Planning", "Customer Journey Mapping",
                  "Reputation Management", "Brand Guidelines Development"
                ], ...[
                  "Brand Discovery Workshops", "Brand Identity Development", "Brand Architecture",
                  "Market Research & Analysis", "Competitor Benchmarking", "Brand Positioning",
                  "Messaging Frameworks", "Visual Identity Systems", "Customer Persona Development",
                  "Product Positioning", "Strategic Communication Planning", "Customer Journey Mapping",
                  "Reputation Management", "Brand Guidelines Development"
                ]].map((item, idx) => (
                <div key={idx} className="min-w-max p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                  <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs font-medium leading-tight">{item}</span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-b border-slate-200 bg-slate-50/50">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <img
                src={brandingImage}
                alt="Brand strategy planning illustration"
                className="mx-auto w-full max-w-sm object-contain"
              />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">Creative Branding</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Creating brands that inspire trust and loyalty</h2>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                A brand is far more than a logo or visual identity. It is the complete perception customers have about your company based on every interaction they experience, from your website and campaigns to customer service and product delivery. Strong brands experience stronger customer loyalty, higher conversion rates, and greater resilience in competitive markets.
              </p>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                At <strong className="text-slate-900 font-semibold">Blucom Technologies</strong>, we help organizations build powerful brand foundations through a structured and research-driven approach that creates clarity and long-term competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DIGITAL MARKETING SOLUTIONS --- */}
      <section id="marketing" className="bg-white">
        <div className="max-w-7xl mx-auto border-b border-slate-200 bg-white">
        <div className="border-b border-slate-200">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-emerald-600 font-bold">Module 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Digital marketing solutions designed for growth</h2>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                Digital marketing should not be treated as disconnected activities. As a full-service digital marketing agency in Islamabad, we align strategy, content, advertising, analytics, and customer experience so every effort contributes to a unified growth objective.
              </p>
            </div>
            <div className="rounded-lg border-y border-slate-200 bg-slate-50 p-6 sm:p-8">
              <img
                src={digitalMarketingImage}
                alt="Digital marketing growth illustration"
                className="mx-auto w-full max-w-sm object-contain"
              />
            </div>
          </div>
          <div className="border-t border-slate-200 bg-white px-6 py-10 sm:px-12 sm:py-12">
            <div className="mx-auto grid w-full overflow-hidden border border-gray-200 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-emerald-500 p-6 text-white sm:p-10">
                <Zap className="mb-6 h-10 w-10 text-white" />
                <h2 className="font-serif text-3xl font-bold leading-tight underline decoration-green-300 underline-offset-8 sm:text-4xl md:text-5xl">
                  Let's Bring Your Idea to Life
                </h2>
                <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg md:text-xl">
                  Tell us a little about your project so we can understand your goals and recommend the best creative and digital solutions for your business.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <span className="border border-white/20 bg-white/10 px-4 py-3">Brand foundations</span>
                  <span className="border border-white/20 bg-white/10 px-4 py-3">Marketing systems</span>
                  <span className="border border-white/20 bg-white/10 px-4 py-3">UX/UI direction</span>
                  <span className="border border-white/20 bg-white/10 px-4 py-3">Web growth platforms</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 sm:p-10">
                <div className="w-full">
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between border border-gray-200 bg-white p-4 text-left text-gray-700 shadow-sm transition hover:border-emerald-300"
                    onClick={() => setDropDownOpen((open) => !open)}
                  >
                    <span className="truncate">I want to Launch a new product or service</span>
                    <ChevronRight size={18} className={`ml-3 shrink-0 transition-transform ${dropDownOpen ? "rotate-90" : ""}`} />
                  </button>

                  <div className={`${dropDownOpen ? "grid" : "hidden"} mt-2 gap-5 bg-[#071813] p-4 text-white shadow-lg transition-all duration-300 ease-in-out sm:grid-cols-2`}>
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-3 font-mono text-[10px] font-bold uppercase text-emerald-300">{group.title}</p>
                        <div className="grid gap-2">
                          {group.items.map(([label, path]) => (
                            <Link key={label} className="cursor-pointer text-sm text-white/80 transition hover:text-white" to={path}>
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/multistepform">
                  <button className="mt-6 flex w-full items-center justify-center gap-2 bg-[#071813] px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-600">
                    Start a Project <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-slate-200">
          {[
            {
              icon: Search,
              title: "Search engine optimization (SEO)",
              text: "We improve visibility, rankings, and customer acquisition from people already searching for solutions your business provides.",
              items: ["Technical SEO audits", "Keyword research and mapping", "Local SEO optimization", "On-page SEO", "Content optimization", "Link building strategies", "Schema markup", "Core web vitals", "SEO analytics"],
            },
            {
              icon: Target,
              title: "Performance marketing",
              text: "Paid advertising gives businesses the opportunity to reach targeted audiences and generate immediate results instead of vanity metrics.",
              items: ["Google Ads", "Meta advertising", "Instagram advertising", "LinkedIn advertising", "YouTube advertising", "Display networks", "Remarketing campaigns"],
            },
            {
              icon: FileText,
              title: "Content marketing",
              text: "Content builds trust, improves search visibility, and nurtures relationships by positioning your brand as a trusted authority.",
              items: ["Website copywriting", "SEO content creation", "Blog development", "Case studies", "Whitepapers", "Landing pages", "Email marketing", "Thought leadership", "Lead magnets"],
            },
            {
              icon: Users,
              title: "Social media marketing",
              text: "Build vibrant communities, strengthen awareness, and engage directly with platform-specific content frameworks.",
              items: ["Social strategy", "Content calendars", "Community management", "Creative direction", "Engagement campaigns", "Influencer coordination", "Platform reporting"],
            },
            {
              icon: Cpu,
              title: "Lead gen and automation",
              text: "Create operational funnels and workflows that qualify, nurture, and route prospects so systems scale efficiently.",
              items: ["Lead capture forms", "CRM workflows", "Email sequences", "Lead scoring", "Nurture funnels", "Sales notifications", "Automation audits"],
            },
            {
              icon: BarChart3,
              title: "Analytics and optimization",
              text: "Track complete cross-channel performance with granular dashboard reporting, audit matrices, and continuous test loops.",
              items: ["Dashboard reporting", "Conversion tracking", "Campaign audits", "A/B testing", "Performance reviews", "Funnel analysis", "Optimization roadmaps"],
            },
          ].map((service, idx) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className={`p-6 sm:p-8 space-y-4 flex flex-col justify-between ${idx > 0 ? "border-t md:border-t-0" : ""} ${idx > 2 ? "lg:border-t border-slate-200" : "border-slate-200"}`}>
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.text}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {service.items.map((t, tagIdx) => (
                      <span key={tagIdx} className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 rounded font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <a href="#contact" className="font-mono text-[11px] text-blue-600 hover:text-slate-950 font-bold flex items-center gap-1 pt-4 border-t border-slate-100">View service specs <ChevronRight size={12} /></a>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* --- SECTION 3: UX/UI & CUSTOM WEB DEVELOPMENT --- */}
      <section id="experience" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-12 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5 lg:pr-8">
            <span className="font-mono text-[10px] text-purple-600 font-bold">Module 03</span>
            <h2 className="font-serif mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Building digital experiences that customers love
            </h2>
            <p className="mt-8 max-w-md text-slate-600 text-sm leading-relaxed">
              Modern customers expect intuitive, fast, and engaging digital experiences. A poorly designed website or application can quickly undermine trust. Our design philosophy focuses smoothly on digital products combining usability, performance, and clear business targets.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "User Experience Research", desc: "We study user behavior, customer needs, and business objectives to identify opportunities for improving engagement and reducing friction." },
                { icon: Layers, title: "User Interface Design", desc: "We create visually appealing interfaces that align with your brand identity while maintaining accessibility, clarity, and ease of use." },
                { icon: TrendingUp, title: "Wireframing & Prototyping", desc: "Before development begins, we visualize experiences through detailed wireframes and interactive prototypes to validate concepts and reduce risk.", dark: true },
                { icon: Cpu, title: "Interaction Design", desc: "Every interaction matters. We design workflows and navigation systems that make digital experiences intuitive, efficient, and enjoyable." },
                { icon: BarChart3, title: "Data Visualization", desc: "We turn complex information into clear dashboards and visual reporting systems that support faster, better business decisions." },
                { icon: Globe, title: "Custom Web Design & Development", desc: "Your website is the center of your ecosystem. We build performance platforms that serve as lead engines, information hubs, and tools." }
              ].map((ux) => {
                const Icon = ux.icon;

                return (
                  <div
                    key={ux.title}
                    className={`min-h-[210px] rounded-[28px] p-6 flex flex-col items-center justify-between text-center shadow-sm ${
                      ux.dark
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-900 border border-slate-200"
                    }`}
                  >
                    <h3 className={`font-serif text-sm font-bold leading-snug ${ux.dark ? "text-white" : "text-slate-900"}`}>
                      {ux.title}
                    </h3>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      ux.dark
                        ? "border-emerald-400/30 bg-slate-900 text-emerald-400"
                        : "border-white bg-white/70 text-slate-400"
                    }`}>
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <p className={`text-xs leading-relaxed ${ux.dark ? "text-slate-300" : "text-slate-500"}`}>
                      {ux.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Web Engineering Matrix Block */}
        <div className="border-t border-slate-200 bg-slate-950 px-6 py-14 text-white sm:px-12 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="font-mono text-[9px] text-blue-400 block font-bold">Specification module</span>
              <h3 className="font-serif mt-4 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Custom Web Design and Development Deliverables
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                Every project is designed with structural user experience, clean performance, and localized search visibility parameters in front view.
              </p>

              <div className="mt-8 grid max-w-xl gap-x-6 gap-y-4 sm:grid-cols-2">
                {["Corporate websites", "E-commerce development", "Landing page design", "Custom web applications", "CMS development", "Website maintenance", "API integrations", "Conversion optimization", "Website security", "Performance optimization"].map((w, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-mono text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.35)]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[360px] overflow-hidden lg:block">
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_52px_rgba(52,211,153,0.55)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2, 3, 4, 5].map((dot) => (
                      <span key={dot} className="h-3 w-3 rounded-full bg-slate-950" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-[17%] top-[48%] h-px w-[32%] bg-slate-700" />
              <div className="absolute left-[48%] top-[20%] h-[30%] w-px bg-slate-700" />
              <div className="absolute left-[55%] top-[50%] h-px w-[28%] bg-slate-700" />
              <div className="absolute left-[36%] top-[64%] h-px w-[20%] -rotate-45 bg-slate-700" />
              <div className="absolute left-[58%] top-[34%] h-px w-[22%] rotate-45 bg-slate-700" />
              <div className="absolute left-[58%] top-[64%] h-px w-[22%] -rotate-45 bg-slate-700" />

              {[
                "left-[14%] top-[45%] h-4 w-4 bg-white",
                "left-[22%] top-[45%] h-5 w-5 bg-slate-300",
                "left-[29%] top-[45%] h-6 w-6 bg-white",
                "left-[44%] top-[16%] h-4 w-4 border border-slate-500 bg-slate-950",
                "left-[45%] top-[28%] h-4 w-4 border border-slate-500 bg-slate-950",
                "left-[44%] top-[75%] h-7 w-7 border border-slate-500 bg-slate-950",
                "left-[45%] top-[86%] h-4 w-4 border border-slate-500 bg-slate-950",
                "left-[80%] top-[43%] h-3 w-3 bg-emerald-300",
                "left-[86%] top-[43%] h-2 w-2 bg-emerald-300",
                "left-[72%] top-[74%] h-4 w-4 bg-rose-500",
                "left-[78%] top-[77%] h-3 w-3 bg-rose-500",
              ].map((classes, idx) => (
                <span key={idx} className={`absolute rounded-full ${classes}`} />
              ))}

              <div className="absolute left-[14%] top-[20%] grid gap-4">
                <span className="h-4 w-4 rounded-full bg-white" />
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-6 w-6 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: STRATEGIC GROWTH FRAMEWORK --- */}
      <section id="framework" className="max-w-7xl mx-auto border-b border-slate-200 bg-white">
        <div className="p-6 sm:p-12 text-center max-w-3xl mx-auto space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">Operations step block</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Our strategic growth framework</h2>
          <p className="text-slate-500 text-xs sm:text-[13px]">Successful digital initiatives require a structured process. Our framework helps businesses move from ideas to measurable outcomes with clarity and accountability.</p>
        </div>

        <div className="group/framework flex flex-col gap-3 border-t border-slate-200 bg-slate-50 p-4 lg:h-[330px] lg:flex-row lg:gap-0 lg:p-0">
          {[
            { num: "01", name: "Discovery", desc: "We learn about your organization, objectives, audience, competitors, and market opportunities." },
            { num: "02", name: "Research", desc: "We analyze customer behaviors, market trends, and growth opportunities that inform decisions." },
            { num: "03", name: "Strategy", desc: "We build a roadmap that aligns branding, marketing, design, and technology initiatives with goals." },
            { num: "04", name: "Creative Dev", desc: "Our designers and strategists create assets that communicate your message and engage your audience." },
            { num: "05", name: "Execution", desc: "We implement campaigns, websites, digital products, and content strategies with precision." },
            { num: "06", name: "Optimization", desc: "Continuous monitoring, testing, and refinement keep every initiative delivering value over time." }
          ].map((f, i) => (
            <div
              key={i}
              className={`group/step relative min-h-[170px] overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:bg-slate-950 hover:text-white hover:shadow-xl lg:min-h-0 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:p-6 ${
                i === 0
                  ? "lg:flex-[2.15] lg:group-hover/framework:flex-[0.85] lg:hover:!flex-[2.6]"
                  : "lg:flex-[0.82] lg:hover:!flex-[2.25]"
              }`}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <span className="font-mono text-lg font-black text-slate-300 transition group-hover/step:text-emerald-400 sm:text-xl">{f.num}</span>
                  <h4 className="font-serif text-lg font-bold leading-tight text-slate-900 transition group-hover/step:text-white lg:text-xl">{f.name}</h4>
                </div>
                <p className={`max-w-xs text-xs leading-relaxed text-slate-500 transition-all duration-500 group-hover/step:max-h-40 group-hover/step:opacity-100 group-hover/step:text-slate-300 ${
                  i === 0
                    ? "max-h-40 opacity-100 lg:group-hover/framework:max-h-0 lg:group-hover/framework:opacity-0 lg:group-hover/step:max-h-40 lg:group-hover/step:opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                  {f.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-emerald-400 transition-all duration-500 group-hover/step:w-full" />
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 bg-white px-6 py-5 sm:px-8">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/70 px-5 py-4 text-center shadow-sm">
            <span className="hidden h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.5)] sm:block" />
            <p className="font-mono text-[11px] font-bold leading-6 text-slate-700 sm:text-xs">
              This structured methodology helps ensure every project delivers measurable value and sustainable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CUSTOM SOLUTIONS SEGMENTS --- */}
      <section className="max-w-7xl mx-auto border-b border-slate-200 bg-slate-50 px-6 py-10 sm:px-12 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            {
              label: "Target deployment A",
              icon: Briefcase,
              accent: "emerald",
              title: "Supporting Startups from Idea to Market",
              text: "Startups face unique challenges including limited resources, intense competition, and uncertainty about product-market fit. Our team works closely with founders to create strong foundations that support sustainable growth while reducing costly tactical mistakes.",
              services: ["Startup Branding", "Product Launch Planning", "Go-To-Market Strategy", "Market Validation", "Investor Pitch Deck Design", "Website Development", "Customer Acquisition", "Growth Marketing Systems", "Digital Advertising"],
            },
            {
              label: "Target deployment B",
              icon: Building,
              accent: "slate",
              title: "Enterprise Solutions for Digital Transformation",
              text: "Large organizations often face challenges related to legacy systems, fragmented customer experiences, and changing market expectations. Digital transformation requires strategic alignment across people, processes, and platforms to unlock new growth opportunities.",
              services: ["Digital Transformation", "CX Optimization", "MarTech Integration", "Enterprise Web Dev", "Analytics Implementation", "Marketing Automation", "Omnichannel Strategies", "Data Dashboards", "Process Digitization"],
            },
          ].map((deployment) => {
            const Icon = deployment.icon;
            const isEmerald = deployment.accent === "emerald";

            return (
              <div key={deployment.label} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-8">
                <div className={`absolute left-0 top-0 h-1 w-full ${isEmerald ? "bg-emerald-500" : "bg-slate-950"}`} />
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold uppercase ${
                      isEmerald
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-slate-100 text-slate-700"
                    }`}>
                      <Icon size={13} />
                      {deployment.label}
                    </div>
                    <h3 className="font-serif max-w-lg text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                      {deployment.title}
                    </h3>
                  </div>
                  <div className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg border transition group-hover:scale-105 sm:flex ${
                    isEmerald
                      ? "border-emerald-100 bg-emerald-50 text-emerald-600"
                      : "border-slate-200 bg-slate-950 text-white"
                  }`}>
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500">
                  {deployment.text}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {deployment.services.map((t, i) => (
                    <span key={i} className="flex min-h-10 items-center gap-2 rounded-md border border-emerald-200 bg-emerald-100/70 px-3 py-2 text-[11px] font-mono font-semibold text-emerald-950 transition group-hover:border-emerald-300 group-hover:bg-emerald-100">
                      <Check size={10} className="shrink-0 text-emerald-700" strokeWidth={2.5} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- INDUSTRIES SERVED HORIZONTAL BAR --- */}
      <section className="max-w-7xl mx-auto border-b border-slate-200 bg-white p-6 sm:p-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase text-emerald-600 block">Vertical market footprint</span>
            <h4 className="font-serif font-bold text-slate-950 text-xl mt-1">Cross-industry expertise adapted to each market</h4>
          </div>
          <p className="max-w-sm text-xs leading-6 text-slate-500">
            Service systems shaped around the buying behavior, operational pressure, and proof standards of each sector.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <span key={i} className="group flex min-h-12 items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/70 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-sm">
              <span className="font-mono text-[10px] font-black text-emerald-700">{(i+1).toString().padStart(2, '0')}</span>
              <span>{ind}</span>
            </span>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: PROVEN CASE ARCHIVES --- */}
      <section id="cases" className="max-w-7xl mx-auto border-b border-slate-900 bg-slate-950 text-white">
        <div className="px-6 py-10 sm:px-12 sm:py-14">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase text-emerald-400 block">Portfolio archive</span>
              <h2 className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl">Selected work, built around outcomes</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 lg:justify-self-end">
              Case studies from launch campaigns, digital products, and identity systems where strategy, design, and execution had to work together.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                tags: ["#Activation", "#Discovery", "#Design"],
                client: "Hyundai Pakistan",
                title: "Tuscon 2020 launch campaign",
                image: "./landing/tucson.png",
                text: "Hyundai Pakistan launched the new mini SUV category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.",
              },
              {
                tags: ["#Automation", "#Interaction", "#Digital Experience"],
                client: "Toyota Motors Islamabad",
                title: "Digital Experience System",
                image: "./landing/toyota.png",
                text: "Toyota Motors Islamabad partnered with us to enhance their digital presence and create a seamless brand experience for buyers. Designed interactions allowing customers to explore features.",
              },
            ].map((item, index) => (
              <article key={item.title} className={`group overflow-hidden border border-white/10 bg-white/[0.04] transition hover:border-emerald-400/50 ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={`${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"} overflow-hidden bg-slate-900`}>
                  <img
                    src={item.image}
                    alt={`${item.client} portfolio preview`}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase text-emerald-400">{item.client}</span>
                    <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-white">{item.title}</h3>
                  </div>
                  <div className="space-y-5">
                    <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-bold uppercase text-slate-300">{tag}</span>
                      ))}
                    </div>
                    <a href="#contact" className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-400 transition hover:text-white">
                      View case study <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10">
            {[
              {
                tags: ["#Identity", "#Interaction", "#Interface"],
                client: "Codility Hub Technologies",
                title: "Interaction & Asset Design",
                image: "./landing/interactive_design.png",
                text: "Codility Hub came to us with a strong proposition and needed a defined digital identity. We shaped the brand, interface direction, and interaction assets for a cleaner market entry.",
              },
              {
                tags: ["#Brand System", "#Web Experience", "#Growth"],
                client: "Fantasy Rewind",
                title: "Digital Product Experience",
                image: "/portfolio/22copy.png",
                text: "A sports-focused digital experience built around clear navigation, stronger user journeys, and visual systems that support content discovery across product touchpoints.",
              },
              {
                tags: ["#Creative", "#Campaign", "#Content"],
                client: "Hassan Bukhari",
                title: "Creative Portfolio System",
                image: "/portfolio/8copy.png",
                text: "A focused portfolio experience designed to organize visual work, sharpen presentation, and create a stronger first impression for prospective clients and collaborators.",
              },
            ].map((item, index) => (
              <article key={item.title} className="group grid gap-4 border-b border-white/10 py-5 transition hover:bg-white/[0.03] sm:grid-cols-[92px_1fr_auto] sm:items-center sm:px-4">
                <div className="aspect-square w-24 overflow-hidden bg-slate-900 sm:w-[92px]">
                  <img
                    src={item.image}
                    alt={`${item.client} portfolio preview`}
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[10px] font-black text-emerald-400">{String(index + 3).padStart(2, "0")}</span>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400">{item.client}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-400">{item.text}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] font-bold uppercase text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="#contact" className="inline-flex w-fit items-center gap-1 font-mono text-[11px] font-bold text-emerald-400 transition hover:text-white">
                  View <ArrowUpRight size={12} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: WHY CHOOSE US --- */}
      <section className="max-w-7xl mx-auto border-b border-slate-200 bg-white p-6 sm:p-12">
        <div className="mb-8 text-center sm:text-left">
          <span className="font-mono text-[10px] text-slate-400 block">Differentiators</span>
          <h2 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">Why choose Blucom Technologies? We focus on outcomes, not vanity metrics.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Strategy Before Execution", desc: "Every recommendation is guided by business objectives, customer insights, and market realities." },
            { title: "Data-Driven Decision Making", desc: "Analytics and performance metrics help us make informed decisions and continuously improve results." },
            { title: "Creative Excellence", desc: "Our team combines strategic thinking with innovative design to create experiences that capture attention." },
            { title: "Technology Expertise", desc: "We leverage modern technologies and best practices to build scalable, future-ready solutions." },
            { title: "Transparent Communication", desc: "Clients receive clear reporting, regular updates, and complete visibility into project progress." },
            { title: "Long-Term Partnership Approach", desc: "We view every engagement as the beginning of a long-term relationship focused on continuous growth." }
          ].map((item, i) => (
            <div key={i} className="space-y-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 text-blue-600">
                <ShieldCheck size={14} /> {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed pl-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 8: FULL DYNAMIC ROUTING PLANNER / FORM --- */}
      <section id="contact" className="max-w-7xl mx-auto border-b border-slate-200 bg-slate-50/50 p-6 sm:p-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] text-blue-600 font-bold block">Work routing console</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Let's build something great together</h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
              The digital landscape continues to evolve at an unprecedented pace. Partner with Blucom Technologies and discover how strategic thinking, innovative design, and performance solutions can transform your business. Tell us a little about your project so we can understand your goals.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-600 pt-2">
              <span>▪ Brand foundations</span>
              <span>▪ Marketing systems</span>
              <span>▪ UX/UI direction</span>
              <span>▪ Web growth platforms</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex border-b border-slate-200 font-mono text-[11px]">
              {['Launch', 'Identity', 'UI UX', 'Marketing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2.5 px-4 font-bold transition ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-900'}`}
                >
                  I want to: {tab}
                </button>
              ))}
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-mono text-[10px] text-slate-400 block font-bold">Dynamic scopes active:</span>
              <div className="flex flex-wrap gap-2 text-slate-700">
                {activeTab === 'Launch' && ["Identity Concept", "UI UX Design", "Brand Positioning", "Business Plan", "Market Research", "Digital Marketing"].map((t, i) => <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">✓ {t}</span>)}
                {activeTab === 'Identity' && ["Discovery Workshop", "Messaging Matrix", "Guidelines Manual", "Reputation Management"].map((t, i) => <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">✓ {t}</span>)}
                {activeTab === 'UI UX' && ["UX Wireframing", "Interface Mockups", "Interactive Prototype", "Usability Mapping"].map((t, i) => <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">✓ {t}</span>)}
                {activeTab === 'Marketing' && ["Technical SEO audit", "Paid Google/Meta ads", "Content systems", "Funnels optimization"].map((t, i) => <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">✓ {t}</span>)}
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 text-xs px-3 py-2.5 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white" required />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 text-xs px-3 py-2.5 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white" required />
              </div>
              <textarea placeholder="Describe your structural timeline requirements..." rows="3" className="w-full bg-slate-50 border border-slate-200 text-xs px-3 py-2.5 rounded-lg focus:outline-none focus:border-slate-400 focus:bg-white" required></textarea>
              <button type="submit" className="w-full bg-slate-950 hover:bg-blue-600 text-white font-mono text-[11px] font-bold py-3.5 rounded-lg transition">
                Let's get started
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* --- SECTION 9: IDEAS, NEWS & BLOG --- */}
      <section className="max-w-7xl mx-auto border-b border-slate-200 bg-white p-6 sm:p-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold uppercase text-emerald-600 block">Ideas, news and blog</span>
            <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">Fresh thinking for modern brand growth</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Browse the latest strategic ideas, company news, and practical blog insights from Blucom Technologies.
            </p>
          </div>
          <Link to="/blog" className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-[11px] font-bold text-slate-900 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 sm:flex">
            View all insights <ArrowUpRight size={14} />
          </Link>
        </div>

        {contentLoading && (
          <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
            Loading latest posts...
          </div>
        )}

        {!contentLoading && contentError && (
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
            {contentError} Preview cards are shown.
          </div>
        )}

        <div className="space-y-12">
          {contentSections.map((section) => (
            <div key={section.type}>
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase text-emerald-600">{section.type}</span>
                  <h3 className="font-serif text-xl font-bold text-slate-950 mt-1">{section.title}</h3>
                  <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500">{section.desc}</p>
                </div>
                <Link to={section.href} className="flex w-fit items-center gap-1 font-mono text-[11px] font-bold text-slate-900 transition hover:text-emerald-700">
                  View all {section.type} <ArrowUpRight size={12} />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {section.posts.map((item, index) => (
                  <article key={`${section.type}-${item.title}-${index}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl">
                    <Link to={item.href} className="block">
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={`${item.type} preview`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 p-5">
                        <span className="font-mono text-[10px] font-bold uppercase text-emerald-600">{item.type}</span>
                        <div className="space-y-2">
                          <h4 className="font-serif text-lg font-bold leading-snug text-slate-950 transition group-hover:text-emerald-700">
                            {item.title}
                          </h4>
                          <p className="text-xs leading-6 text-slate-500">{item.desc}</p>
                        </div>
                        <span className="flex w-fit items-center gap-1 font-mono text-[11px] font-bold text-slate-900 transition group-hover:text-emerald-700">
                          Open {item.type} <ChevronRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REFINED GRID FOOTER --- */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-12 border-t border-slate-900 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-white font-serif font-bold text-base tracking-tight block">Blucom Technologies</span>
            <p className="text-[10px] text-slate-600">Discovery, strategy, interaction, delivery hub — Islamabad</p>
          </div>
          <div className="text-center sm:text-right text-[10px] space-y-1 text-slate-600">
            <p>&copy; {new Date().getFullYear()} Blucom Technologies. All rights reserved.</p>
            <p>Integrated growth system v4.0, secure production</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
