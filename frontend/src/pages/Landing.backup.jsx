import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landingImg from "/landing/heroimage.svg";
import Button from "../Components/Button";
import { getPublishedPosts } from "../api/blogs";
import { getContents } from "../api/content";
import { getPostDescription, getPostTitle } from "../utils/postDescriptions";

const postMatchesType = (post, contentType) => {
  const target = contentType.toLowerCase();
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return values.includes(target);
};

const PREVIEW_POST_LIMIT = 2;
const PORTFOLIO_PREVIEW_LIMIT = 3;

const fallbackPortfolioItems = [
  {
    title: "TUSCON 2020",
    slug: "hyundai",
    name: "Hyundai Pakistan",
    category: "Automotive",
    image: "./landing/tucson.png",
    tags: ["#Activation", "#Discovery", "#Design"],
    excerpt:
      "Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new revolution in the mini SUV Category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.",
  },
  {
    title: "Digital Experience",
    slug: "toyota-motors",
    name: "Toyota Motors Islamabad",
    category: "Automotive",
    image: "./landing/toyota.png",
    tags: ["#Automation", "#Interaction", "#Digital Experience"],
    excerpt:
      "Toyota Motors Islamabad partnered with us to enhance their digital presence and create a seamless brand experience for modern car buyers. Our role was to design engaging digital interactions that allow customers to explore Toyota vehicles, discover features, and connect with the brand effortlessly.",
  },
  {
    title: "Interaction Design",
    slug: "codility-hub",
    name: "Codility Hub Technologies",
    category: "Technology",
    image: "./landing/interactive_design.png",
    tags: ["#Identity", "#Interaction", "#Interface"],
    excerpt:
      "Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development with fast turnaround. We were asked to bring this idea to life through identity and interaction.",
  },
];

const Discovery = [
  <div>
    <ul className="flex flex-col gap-6 hover cursor-pointer">
    <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/identity">Identity</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/brand-strategy">Brand Strategy</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/messaging-positioning">Messaging Positioning</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/reputation-management">Reputation Management</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/product-mapping">Product Mapping</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/persona-creation">Persona Creation</Link></li>
      <li><Link to="/services/customer-journey-mapping">Customer Journey Mapping</Link></li>
    </ul>
  </div>
  
];
const Strategy = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/brand-awareness">Brand Awareness</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/strategic-communication">Strategic Communication</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/analysis-measurement">Analysis / Measurement</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/impact-measurement">Impact Measurement</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/analytics-implementation">Analytics Implementation</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/campaign-optimization">Campaign Optimization</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/content-strategy">Content Strategy</Link></li>
    </ul>
  </div>
  
];
const Digital = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/search-marketing">Search Marketing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/lead-gen">Lead Gen</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/media-planning-buying">Media Planning / Buying</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/content-marketing">Content Marketing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/omnichannel-campaign-management">Omnichannel Campaigns</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/interaction-assets-devs">Interaction Assets Devs</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/nurture-strategies">Nurture Strategies</Link></li>
    </ul>
  </div>
  
];
const Interaction = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/ui-designing">UI Designing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/prototyping-and-wireframing">Prototyping & Wireframing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300"   to="/services/user-journey-mapping">User Journey Mapping</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/interaction-design">Interaction Design</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/web-maintenance">Web Maintenance</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/data-visualization">Data Visualization</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/web-development">Web Development</Link></li>
    </ul>
  </div>
 
];

const brandFoundationItems = [
  { title: "Brand Discovery Workshops", link: "/services/brand-strategy" },
  { title: "Brand Identity Development", link: "/services/identity" },
  { title: "Brand Architecture", link: "/services/brand-strategy" },
  { title: "Market Research & Analysis", link: "/services/persona-creation" },
  { title: "Competitor Benchmarking", link: "/services/analysis-measurement" },
  { title: "Brand Positioning", link: "/services/messaging-positioning" },
  { title: "Messaging Frameworks", link: "/services/messaging-positioning" },
  { title: "Visual Identity Systems", link: "/services/identity" },
  { title: "Customer Persona Development", link: "/services/persona-creation" },
  { title: "Product Positioning", link: "/services/product-mapping" },
  { title: "Strategic Communication Planning", link: "/services/strategic-communication" },
  { title: "Customer Journey Mapping", link: "/services/customer-journey-mapping" },
  { title: "Reputation Management", link: "/services/reputation-management" },
  { title: "Brand Guidelines Development", link: "/services/identity" },
];

const digitalMarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Search engines remain one of the most important sources of qualified traffic. We improve visibility, rankings, and customer acquisition from people already searching for solutions your business provides.",
    services: [
      "Technical SEO Audits",
      "Keyword Research & Mapping",
      "Local SEO Optimization",
      "On-Page SEO",
      "Content Optimization",
      "Link Building Strategies",
      "Schema Markup Implementation",
      "Core Web Vitals Optimization",
      "SEO Analytics & Reporting",
    ],
    link: "/services/search-marketing",
  },
  {
    title: "Performance Marketing",
    description:
      "Paid advertising gives businesses the opportunity to reach highly targeted audiences and generate immediate results. We develop campaigns focused on measurable outcomes instead of vanity metrics.",
    services: [
      "Google Ads",
      "Meta Advertising",
      "Instagram Advertising",
      "LinkedIn Advertising",
      "YouTube Advertising",
      "Display Networks",
      "Remarketing Campaigns",
    ],
    link: "/services/media-planning-buying",
  },
  {
    title: "Content Marketing",
    description:
      "Content builds trust, improves search visibility, and nurtures customer relationships by answering questions, solving problems, and positioning your brand as a trusted authority.",
    services: [
      "Website Copywriting",
      "SEO Content Creation",
      "Blog Development",
      "Case Studies",
      "Whitepapers",
      "Landing Pages",
      "Email Marketing Content",
      "Thought Leadership Articles",
      "Lead Magnets",
    ],
    link: "/services/content-marketing",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build communities, strengthen awareness, and engage directly with customers through platform-specific content and campaigns designed to improve visibility, engagement, and conversions.",
    link: "/services/brand-awareness",
  },
  {
    title: "Lead Generation & Marketing Automation",
    description:
      "Generating leads is only the first step. We create funnels and automation workflows that qualify, nurture, and convert prospects so your customer acquisition systems can scale efficiently.",
    link: "/services/lead-gen",
  },
  {
    title: "Analytics, Measurement & Optimization",
    description:
      "Track performance with analytics implementation, conversion tracking, reporting dashboards, impact measurement, and continuous campaign optimization.",
    link: "/services/analytics-implementation",
  },
];

const digitalExperienceServices = [
  {
    title: "User Experience Research",
    description:
      "We study user behavior, customer needs, and business objectives to identify opportunities for improving engagement and reducing friction.",
    link: "/services/user-journey-mapping",
  },
  {
    title: "User Interface Design",
    description:
      "We create visually appealing interfaces that align with your brand identity while maintaining accessibility, clarity, and ease of use.",
    link: "/services/ui-designing",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Before development begins, we visualize experiences through detailed wireframes and interactive prototypes to validate concepts and reduce risk.",
    link: "/services/prototyping-and-wireframing",
  },
  {
    title: "Interaction Design",
    description:
      "Every interaction matters. We design workflows and navigation systems that make digital experiences intuitive, efficient, and enjoyable.",
    link: "/services/interaction-design",
  },
  {
    title: "Data Visualization",
    description:
      "We turn complex information into clear dashboards and visual reporting systems that support faster, better business decisions.",
    link: "/services/data-visualization",
  },
  {
    title: "Custom Web Design & Development",
    description:
      "Your website is often the center of your digital ecosystem. We build performance-focused platforms that serve as marketing systems, lead generation engines, information hubs, and customer engagement tools.",
    link: "/services/web-development",
  },
];

const webDevelopmentServices = [
  { title: "Corporate Websites", link: "/services/web-development" },
  { title: "E-Commerce Development", link: "/services/web-development" },
  { title: "Landing Page Design", link: "/services/web-development" },
  { title: "Custom Web Applications", link: "/services/web-development" },
  { title: "CMS Development", link: "/services/web-development" },
  { title: "Website Maintenance", link: "/services/web-maintenance" },
  { title: "API Integrations", link: "/services/web-development" },
  { title: "Conversion Rate Optimization", link: "/services/campaign-optimization" },
  { title: "Website Security Enhancements", link: "/services/web-maintenance" },
  { title: "Performance Optimization", link: "/services/web-maintenance" },
];

const growthFrameworkSteps = [
  {
    title: "Discovery",
    description: "We learn about your organization, objectives, audience, competitors, and market opportunities.",
  },
  {
    title: "Research",
    description: "We analyze customer behaviors, market trends, and growth opportunities that inform strategic decisions.",
  },
  {
    title: "Strategy",
    description: "We build a roadmap that aligns branding, marketing, design, and technology initiatives with your goals.",
  },
  {
    title: "Creative Development",
    description: "Our designers and strategists create assets that communicate your message and engage your audience.",
  },
  {
    title: "Execution",
    description: "We implement campaigns, websites, digital products, and content strategies with precision and accountability.",
  },
  {
    title: "Optimization",
    description: "Continuous monitoring, testing, and refinement keep every initiative delivering value over time.",
  },
];

const startupServices = [
  { title: "Startup Branding", link: "/services/brand-strategy" },
  { title: "Product Launch Planning", link: "/services/product-mapping" },
  { title: "Go-To-Market Strategy", link: "/services/strategic-communication" },
  { title: "Market Validation", link: "/services/persona-creation" },
  { title: "Investor Pitch Deck Design", link: "/services/identity" },
  { title: "Website Development", link: "/services/web-development" },
  { title: "Customer Acquisition Strategy", link: "/services/lead-gen" },
  { title: "Growth Marketing Systems", link: "/services/campaign-optimization" },
  { title: "Digital Advertising Campaigns", link: "/services/media-planning-buying" },
];

const enterpriseServices = [
  { title: "Digital Transformation Consulting", link: "/services/brand-strategy" },
  { title: "Customer Experience Optimization", link: "/services/customer-journey-mapping" },
  { title: "Marketing Technology Integration", link: "/services/analytics-implementation" },
  { title: "Enterprise Web Development", link: "/services/web-development" },
  { title: "Analytics Implementation", link: "/services/analytics-implementation" },
  { title: "Marketing Automation Systems", link: "/services/nurture-strategies" },
  { title: "Omnichannel Marketing Strategies", link: "/services/omnichannel-campaign-management" },
  { title: "Data Reporting Dashboards", link: "/services/data-visualization" },
  { title: "Process Digitization Initiatives", link: "/services/web-development" },
];

const industriesServed = [
  "Technology & SaaS",
  "Education & EdTech",
  "Healthcare",
  "Manufacturing",
  "Construction",
  "Automotive",
  "Real Estate",
  "Retail",
  "Professional Services",
  "Financial Services",
  "E-Commerce",
  "Consumer Goods",
  "Logistics & Transportation",
  "Telecommunications",
];

const whyChooseItems = [
  {
    title: "Strategy Before Execution",
    description:
      "Every recommendation is guided by business objectives, customer insights, and market realities.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Analytics and performance metrics help us make informed decisions and continuously improve results.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our team combines strategic thinking with innovative design to create experiences that capture attention and inspire action.",
  },
  {
    title: "Technology Expertise",
    description:
      "We leverage modern technologies and best practices to build scalable, future-ready solutions.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clients receive clear reporting, regular updates, and complete visibility into project progress.",
  },
  {
    title: "Long-Term Partnership Approach",
    description:
      "We view every engagement as the beginning of a long-term relationship focused on continuous growth and improvement.",
  },
];



{/* Seo section end) */ }


  const Landing = () => {

  const [dropDownOpen, setDropDownOpen] = useState(true)
  const [landingPosts, setLandingPosts] = useState([]);
  const [portfolioPreviewItems, setPortfolioPreviewItems] = useState(fallbackPortfolioItems);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
    console.log(dropDownOpen)
  }  

  useEffect(() => {
    let mounted = true;

    const loadHomeContent = async () => {
      try {
        const [postsResult, portfolioResult] = await Promise.allSettled([
          getPublishedPosts(),
          getContents({ type: "portfolio" }),
        ]);
        const posts = postsResult.status === "fulfilled" ? postsResult.value : [];
        const portfolioItems = portfolioResult.status === "fulfilled" ? portfolioResult.value : [];

        if (mounted) {
          setLandingPosts(posts);
          const publishedPortfolioItems = portfolioItems
            .filter((item) => item.slug && item.title)
            .slice(0, PORTFOLIO_PREVIEW_LIMIT);

          setPortfolioPreviewItems(
            publishedPortfolioItems.length > 0 ? publishedPortfolioItems : fallbackPortfolioItems
          );
        }
      } catch (_error) {
        if (mounted) {
          setLandingPosts([]);
          setPortfolioPreviewItems(fallbackPortfolioItems);
        }
      }
    };

    loadHomeContent();

    return () => {
      mounted = false;
    };
  }, []);

  const newsPreviewPosts = landingPosts
    .filter((post) => postMatchesType(post, "News"))
    .slice(0, PREVIEW_POST_LIMIT);
  const blogPreviewPosts = landingPosts
    .filter((post) => !postMatchesType(post, "Ideas") && !postMatchesType(post, "News"))
    .slice(0, PREVIEW_POST_LIMIT);
  const insightPosts = newsPreviewPosts;
  const conceptImpactPosts = blogPreviewPosts;

  return (
    <section className="bg-[#F8FAFC] min-h-screen">
      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center gap-10 lg:gap-20 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
          <img
            src={landingImg}
            alt="Brand Strategy & Digital Marketing Agency in Islamabad"
            className="w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[520px] xl:max-w-[650px] h-auto mx-auto md:mx-0"
          />

          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-lg sm:text-xl text-gray-500">Brand Strategy & Digital Marketing Agency in Islamabad</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-emerald-500 underline decoration-8 decoration-green-300 underline-offset-8">
              Every Great Brand Starts With an Idea
            </h1>
            <div className="mt-8 space-y-5 text-base sm:text-lg leading-8 text-gray-500">
              <p>
                In today's highly competitive business environment, having a great product or service is no longer enough to guarantee success. Customers are exposed to thousands of marketing messages every day, making it increasingly difficult for businesses to capture attention, build trust, and maintain long-term customer relationships.
              </p>
              <p>
                To stand out in a crowded marketplace, organizations need more than advertising. They need a clear brand strategy, a compelling identity, a strong digital presence, and a marketing ecosystem designed to generate measurable business growth.
              </p>
              <p>
                Blucom Technologies is a leading Brand Strategy and Digital Marketing Agency in Islamabad helping startups, small businesses, enterprises, and growing organizations build meaningful brands and scalable digital growth systems.
              </p>
              <p>
                Whether you are launching a new product, entering a new market, repositioning an existing brand, improving your customer experience, or accelerating online growth, our team works closely with you to develop customized strategies aligned with your objectives.
              </p>
              <p>
                We combine strategic thinking, creative excellence, modern technology, and data-driven marketing to transform ideas into impactful brands and marketing systems that drive awareness, engagement, conversions, and long-term success.
              </p>
            </div>
            <div className="mt-10 flex justify-center md:justify-start">
              <Link to="/multistepform">
                <Button variant="black">Start a Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div>
        <section className="bg-white py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-lg text-gray-500">Why modern businesses need strategic branding</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Creating brands that inspire trust and loyalty.
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
                A brand is far more than a logo or visual identity. It is the complete perception customers have about your company based on every interaction they experience, from your website and campaigns to customer service and product delivery.
              </p>
              <p className="mt-5 text-base sm:text-lg leading-8 text-gray-500">
                Strong brands establish credibility, communicate value clearly, and create emotional connections that influence purchasing decisions. Businesses with a clearly defined brand strategy often experience stronger customer loyalty, higher conversion rates, and greater resilience in competitive markets.
              </p>
              <p className="mt-5 text-base sm:text-lg leading-8 text-gray-500">
                At Blucom Technologies, we help organizations build powerful brand foundations through a structured and research-driven approach that creates clarity, consistency, and long-term competitive advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandFoundationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="border border-gray-200 bg-[#F8FAFC] p-5 transition hover:border-emerald-300 hover:shadow-sm"
                >
                  <p className="text-base sm:text-lg font-medium text-gray-600">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-500">Digital marketing solutions designed for growth</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Digital marketing services designed for sustainable growth.
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
                Digital marketing should not be treated as disconnected activities. As a full-service digital marketing agency in Islamabad, we align strategy, content, advertising, analytics, and customer experience so every effort contributes to a unified growth objective.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {digitalMarketingServices.map((service) => (
                <Link key={service.title} to={service.link} className="block bg-white border border-gray-200 p-6 transition hover:border-emerald-300 hover:shadow-sm">
                  <h3 className="text-xl sm:text-2xl text-emerald-500">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-500">{service.description}</p>
                  {service.services ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.services.map((item) => (
                        <span key={item} className="border border-gray-200 bg-[#F8FAFC] px-3 py-2 text-sm text-gray-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-500">Building digital experiences that customers love</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                UX/UI design, digital experiences, and custom web development.
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
                Modern customers expect intuitive, fast, and engaging digital experiences. A poorly designed website or application can quickly undermine trust and reduce conversion opportunities.
              </p>
              <p className="mt-5 text-base sm:text-lg leading-8 text-gray-500">
                Our design philosophy focuses on digital products that combine usability, functionality, visual excellence, performance, search visibility, and business growth.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {digitalExperienceServices.map((service) => (
                <Link key={service.title} to={service.link} className="block bg-[#F8FAFC] border border-gray-200 p-5 transition hover:border-emerald-300 hover:shadow-sm">
                  <h3 className="text-xl text-emerald-500">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-500">{service.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-10 bg-white border border-gray-200 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl text-emerald-500">Custom Web Design and Development</h3>
              <p className="mt-4 text-base sm:text-lg leading-8 text-gray-500">
                Your website is often the center of your digital ecosystem. It serves as a marketing platform, lead generation engine, information hub, and customer engagement tool. Every project is designed with user experience, search engine visibility, and business objectives in mind.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {webDevelopmentServices.map((service) => (
                  <Link key={service.title} to={service.link} className="border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-gray-600 transition hover:border-emerald-300">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-500">Our strategic growth framework</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Every successful project follows a proven process.
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
                Successful digital initiatives require a structured process. Our framework helps businesses move from ideas to measurable outcomes with clarity, accountability, and continuous improvement.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {growthFrameworkSteps.map((step, index) => (
                <div key={step.title} className="bg-white border border-gray-200 p-6">
                  <span className="text-sm font-semibold text-gray-400">0{index + 1}</span>
                  <h3 className="mt-3 text-2xl text-emerald-500">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
              This structured methodology helps ensure every project delivers measurable value and sustainable business impact.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
            <article className="bg-[#F8FAFC] border border-gray-200 p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Supporting Startups from Idea to Market
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-500">
                Startups face unique challenges including limited resources, intense competition, and uncertainty about product-market fit. Our team works closely with founders to create strong foundations that support sustainable growth.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-gray-500">
                By combining strategic planning with practical execution, we help startups accelerate growth while reducing costly mistakes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {startupServices.map((item) => (
                  <Link key={item.title} to={item.link} className="bg-white border border-gray-200 px-4 py-2 text-sm sm:text-base text-gray-600 transition hover:border-emerald-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            </article>
            <article className="bg-[#F8FAFC] border border-gray-200 p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Enterprise Solutions for Digital Transformation
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-500">
                Large organizations often face challenges related to legacy systems, fragmented customer experiences, and changing market expectations. Digital transformation requires more than technology implementation; it requires strategic alignment across people, processes, and platforms.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-gray-500">
                These solutions help organizations improve operational efficiency, increase customer satisfaction, and unlock new growth opportunities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {enterpriseServices.map((item) => (
                  <Link key={item.title} to={item.link} className="bg-white border border-gray-200 px-4 py-2 text-sm sm:text-base text-gray-600 transition hover:border-emerald-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-lg text-gray-500">Industries we serve</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                Cross-industry expertise adapted to each market.
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-8 text-gray-500">
                Our diverse experience allows us to apply proven methodologies across multiple industries while tailoring strategies to unique business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industriesServed.map((industry) => (
                <div key={industry} className="bg-white border border-gray-200 p-5 text-gray-600">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-500">Why choose Blucom Technologies?</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-500 underline decoration-emerald-300 underline-offset-8">
                We focus on outcomes, not vanity metrics.
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseItems.map((item) => (
                <article key={item.title} className="border border-gray-200 bg-[#F8FAFC] p-6">
                  <h3 className="text-xl sm:text-2xl text-emerald-500">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-500">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-500 px-6 sm:px-10 py-16 sm:py-20 text-white">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight underline decoration-green-300 underline-offset-8">
                Let's Build Something Great Together
              </h2>
              <p className="mt-8 max-w-4xl text-base sm:text-lg leading-8 text-white/90">
                The digital landscape continues to evolve at an unprecedented pace. Businesses that invest in strategic branding, customer-centric experiences, and measurable digital marketing gain significant advantages over competitors.
              </p>
              <p className="mt-5 max-w-4xl text-base sm:text-lg leading-8 text-white/90">
                Blucom Technologies helps businesses navigate this complexity with confidence. Through brand strategy, digital marketing, UX/UI design, web development, performance marketing, content strategy, and digital transformation consulting, we provide the expertise needed to achieve meaningful business growth.
              </p>
              <p className="mt-5 max-w-4xl text-base sm:text-lg leading-8 text-white/90">
                Whether you are building a new brand, launching a product, generating leads, improving customer experiences, increasing search visibility, or scaling operations, our team is ready to help.
              </p>
              <p className="mt-5 max-w-4xl text-base sm:text-lg leading-8 text-white/90">
                Partner with Blucom Technologies and discover how strategic thinking, innovative design, and performance-driven digital solutions can transform your business.
              </p>
            </div>
            <Link to="/multistepform" className="lg:justify-self-end">
              <Button variant="white">Contact Blucom</Button>
            </Link>
          </div>
        </section>


        {/*form start share*/}
       <section className="form">
  <div className="relative w-full min-h-screen flex justify-center items-center bg-emerald-500 text-white p-4 xl:p-10">
    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 p-4 md:p-6 flex flex-col items-start">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold underline decoration-green-300 underline-offset-8 mb-4">
        Let's Bring Your Idea to Life
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10">
        Tell us a little about your project so we can understand your goals and recommend
        the best creative and digital solutions for your business.
      </p>

      {/* Dropdown Section */}
      <div className="w-full">
        {/* Dropdown Button */}
        <div
          className="bg-white text-gray-500 flex justify-between items-center p-4 shadow-md cursor-pointer w-full transition hover:bg-gray-100"
          onClick={toggleDropDown}
        >
          <p className="truncate">I want to Launch a new product or service</p>
          <img src="./icons/dropDown.png" alt="Dropdown Icon" className="w-5 h-5 ml-3" />
        </div>

        {/* Dropdown Content with Gradient */}
        <div
          className={`flex flex-col gap-3 mt-2 p-4 w-full transition-all duration-300 ease-in-out 
          ${dropDownOpen ? "flex" : "hidden"} 
          bg-gradient-to-b from-emerald-500 to-emerald-300 bg-opacity-90 text-white shadow-lg`}
        >
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Product%20Mapping&intent=Identity%20Concept">Identity Concept</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=UI%20Designing&intent=UI%20UX%20Design">UI UX Design</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Brand%20Strategy&intent=Brand%20Positioning">Brand Positioning</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Strategic%20Communication&intent=Business%20Plan">Business Plan</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Persona%20Creation&intent=Market%20Research">Market Research</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Search%20Marketing&intent=Digital%20Marketing">Digital Marketing</Link>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="w-full flex justify-start mt-10">
        <Link to="/multistepform">
          <Button variant="white">Let's Get Started</Button>
        </Link>
      </div>

    </div>
  </div>
</section>



        {/* Call-to-Action Button */}

        <section className="Portfolio w-full bg-white">
          {portfolioPreviewItems.slice(0, PORTFOLIO_PREVIEW_LIMIT).map((item, index) => {
            const isReversed = index % 2 === 1;
            const tags = (item.tags?.length ? item.tags : item.services || [item.category || "Portfolio"])
              .filter(Boolean)
              .slice(0, 3);
            const image = item.image || item.socialImage || fallbackPortfolioItems[index]?.image || "./landing/tucson.png";
            const eyebrow = item.name || item.client || item.category || "Portfolio";
            const description = item.excerpt || "Explore this Blucom Technologies portfolio case study.";

            const textPanel = (
              <div className={`w-full md:w-1/2 flex flex-col justify-center items-center ${isReversed ? "md:items-end" : "md:items-start"} p-6 md:p-12`}>
                <span className="text-2xl text-gray-500">{eyebrow}</span>
                <Link
                  to={`/portfolio/${item.slug}`}
                  className={`text-5xl sm:text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300 transition hover:text-emerald-600 ${isReversed ? "md:text-right" : "md:text-left"}`}
                >
                  {item.title}
                </Link>
                <div className={`text-2xl text-gray-500 flex flex-wrap gap-2 mt-5 ${isReversed ? "md:justify-end" : ""}`}>
                  {tags.map((tag) => (
                    <span key={tag}>{String(tag).startsWith("#") ? tag : `#${tag}`}</span>
                  ))}
                </div>
                <span className={`text-lg text-gray-500 mt-10 leading-normal text-left ${isReversed ? "md:text-right" : "md:text-left"}`}>
                  {description}
                </span>
                <Link to={`/portfolio/${item.slug}`} className="mt-8">
                  <Button variant="gray">View Case Study</Button>
                </Link>
              </div>
            );

            const imagePanel = (
              <Link to={`/portfolio/${item.slug}`} className="group w-full md:w-1/2 flex justify-center overflow-hidden">
                <img
                  src={image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            );

            return (
              <div
                key={item.slug || item.title}
                className={`${isReversed ? "flex flex-col-reverse md:flex-row" : "flex flex-col md:flex-row"} w-full items-center`}
              >
                {isReversed ? (
                  <>
                    {textPanel}
                    {imagePanel}
                  </>
                ) : (
                  <>
                    {imagePanel}
                    {textPanel}
                  </>
                )}
              </div>
            );
          })}
        </section>

        <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
          {/* Title Section */}
          <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">We provide a complete range of</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Creative & Digital Services
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Discovery / Strategy / Interaction</span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#727277] mx-auto w-full max-w-6xl">
            {/* Discovery Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Discovery
              </span>
              {Discovery.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Strategy Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Strategy
              </span>
              {Strategy.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Digital Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Digital
              </span>
              {Digital.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Interaction Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Interaction
              </span>
              {Interaction.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Call-to-Action Button */}
        </div>
        
            <div className="flex flex-col items-center gap-4">
                {/* Filled Buttons */}
                <Button variant="black">Want to Talk?</Button>
            </div>
       


        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <span className="text-4xl sm:text-5xl lg:text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              From Concept to Impact
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
              Our creative process ensures every project delivers real results.
            </span>
          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            {(conceptImpactPosts.length > 0 ? conceptImpactPosts : [
              {
                id: "static-impact-1",
                title: "Why attention economy is becoming new ecomony, and how brands can take leverage",
                slug: "Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage",
                image: "./landing/insight1.jpg",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                link: "Blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage",
              },
              {
                id: "static-impact-2",
                title: "The art of visual communication, how visual grammer can be utilized by the brands",
                slug: "The-art-of-visual-communication",
                image: "./landing/insight2.jpg",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                link: "Blog/The-art-of-visual-communication",
              },
            ]).map((post) => (
              <div key={post.id || post.slug} className="flex flex-col gap-5 justify-start items-start w-full max-w-[600px]">
                <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">{post.category || "Blog"}</span>
                {post.image && <img src={post.image} alt={post.title} className="w-full h-auto aspect-[12/7] object-cover" />}
                <span className="text-3xl sm:text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">{getPostTitle(post)}</span>
                <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">{getPostDescription(post)}</span>
                <Link to={post.link || `/blog/${post.slug}`}>
                  <Button variant="gray">Read More</Button>
                </Link>
              </div>
            ))}
          </div>
          {/* Call-to-Action Button */}

        </div>
        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">The digital landscape is constantly evolving. </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Insights for Modern Brands
            </span>

          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            {(insightPosts.length > 0 ? insightPosts : [
              {
                id: "static-news-1",
                title: "Rideshare Advertising To A New Outdoor World",
                slug: "Rideshare-Advertising-To-A-New-Outdoor-World",
                image: "./landing/news1.png",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                logo: "./icons/forbes_logo.png",
                logoAlt: "forbes logo",
                link: "/Ideas/Rideshare-Advertising-To-A-New-Outdoor-World",
              },
              {
                id: "static-news-2",
                title: "12 Must-Attend Trade Conferences For Agency Professionals",
                slug: "Must-Attend-Advertising-Confrence",
                image: "./landing/news2.png",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                logo: "./icons/adobe_logo_1.png",
                logoAlt: "adobe logo",
                link: "/Ideas/Must-Attend-Advertising-Confrence",
              },
            ]).map((post) => (
              <div key={post.id || post.slug} className="flex flex-col gap-5 justify-start items-start w-full max-w-[600px]">
                {post.logo && <img src={post.logo} alt={post.logoAlt || ""} className="w-auto h-[40px]" />}
                {post.image && <img src={post.image} alt={post.title} className="w-full h-auto aspect-[12/7] object-cover" />}
                <span className="text-3xl sm:text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">{getPostTitle(post)}</span>
                <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">{getPostDescription(post)}</span>
                <Link to={post.link || `/blog/${post.slug}`}>
                  <Button variant="gray">Read More</Button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Landing;
