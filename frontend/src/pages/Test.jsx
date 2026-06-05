import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowRight, Check, Search, Target, FileText, 
  Users, Cpu, BarChart3, ChevronRight, Layers, Lightbulb, 
  TrendingUp, ShieldCheck, HelpCircle, Briefcase, Building, Globe
} from 'lucide-react';
import heroImage from '../assets/heroimage.svg';
import brandingImage from '../assets/icons/Branding.png';
import digitalMarketingImage from '../assets/icons/Digital Marketing.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('Launch');

  const industries = [
    "Technology & SaaS", "Education & EdTech", "Healthcare", "Manufacturing", 
    "Construction", "Automotive", "Real Estate", "Retail", 
    "Professional Services", "Financial Services", "E-Commerce", 
    "Consumer Goods", "Logistics & Transportation", "Telecommunications"
  ];

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
      <section id="about" className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 border-x border-slate-200">
          
          <div className="lg:col-span-8 p-6 sm:p-12 space-y-6 flex flex-col justify-center">
            <span className="font-mono text-[10px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-200 inline-block w-fit font-bold">
              Brand strategy and digital marketing agency in Islamabad
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal tracking-tight leading-[1.15]">
              Every Great Brand Starts <br />With an <span className="italic font-normal text-blue-600">Idea</span>
            </h1>
            <div className="max-w-3xl space-y-5 pt-2">
              <p>
                In today's highly competitive business environment, having a great product or service is no longer enough to guarantee success. Customers are exposed to thousands of marketing messages every day, making it increasingly difficult for businesses to capture attention, build trust, and maintain long-term customer relationships.
              </p>
              <p>
                To stand out in a crowded marketplace, organizations need more than advertising. They need a clear brand strategy, a compelling identity, a strong digital presence, and a marketing ecosystem designed to generate measurable business growth.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-2">
              <a href="#contact" className="bg-slate-950 text-white font-mono text-[11px] font-bold px-5 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">Start a Project <ArrowRight size={14} /></a>
              <a href="#marketing" className="bg-slate-50 text-slate-700 font-mono text-[11px] font-bold px-5 py-3 rounded-lg border border-slate-200 hover:bg-slate-100 transition">Explore Services</a>
            </div>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex items-center justify-center">
            <img
              src={heroImage}
              alt="Blucom Technologies brand and digital growth illustration"
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>
      </section>

      {/* --- SECTION 1: BRAND STRATEGY --- */}
      <section id="branding" className="border-b border-slate-200 bg-white">
        <div className="w-full bg-emerald-600 py-8 sm:py-2">
          <div className="mx-auto max-9xl px-4 sm:px-6 lg:px-8">
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

        <div className="mx-auto max-w-7xl border-x border-slate-200 border-b bg-slate-50/50">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <img
                src={brandingImage}
                alt="Brand strategy planning illustration"
                className="mx-auto w-full max-w-sm object-contain"
              />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">Module 01</span>
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
      <section id="marketing" className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white">
        <div className="border-b border-slate-200">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-emerald-600 font-bold">Module 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Digital marketing solutions designed for growth</h2>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                Digital marketing should not be treated as disconnected activities. As a full-service digital marketing agency in Islamabad, we align strategy, content, advertising, analytics, and customer experience so every effort contributes to a unified growth objective.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <img
                src={digitalMarketingImage}
                alt="Digital marketing growth illustration"
                className="mx-auto w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* SEO */}
          <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200"><Search size={16} /></div>
              <h3 className="font-serif text-base font-bold text-slate-900">Search engine optimization (SEO)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">We improve visibility, rankings, and customer acquisition from people already searching for solutions your business provides.</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["Technical SEO audits", "Keyword research and mapping", "Local SEO optimization", "On-page SEO", "Content optimization", "Link building strategies", "Schema markup", "Core web vitals", "SEO analytics"].map((t, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 rounded font-medium">{t}</span>
                ))}
              </div>
            </div>
            <a href="#contact" className="font-mono text-[11px] text-blue-600 hover:text-slate-950 font-bold flex items-center gap-1 pt-4 border-t border-slate-100">View service specs <ChevronRight size={12} /></a>
          </div>

          {/* Performance Marketing */}
          <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between border-t md:border-t-0 border-slate-200">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200"><Target size={16} /></div>
              <h3 className="font-serif text-base font-bold text-slate-900">Performance Marketing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Paid advertising gives businesses the opportunity to reach targeted audiences and generate immediate results instead of vanity metrics.</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["Google Ads", "Meta Advertising", "Instagram Advertising", "LinkedIn Advertising", "YouTube Advertising", "Display Networks", "Remarketing Campaigns"].map((t, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 rounded font-medium">{t}</span>
                ))}
              </div>
            </div>
            <a href="#contact" className="font-mono text-[11px] text-blue-600 hover:text-slate-950 font-bold flex items-center gap-1 pt-4 border-t border-slate-100">View service specs <ChevronRight size={12} /></a>
          </div>

          {/* Content Marketing */}
          <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between border-t lg:border-t-0 border-slate-200">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200"><FileText size={16} /></div>
              <h3 className="font-serif text-base font-bold text-slate-900">Content Marketing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Content builds trust, improves search visibility, and nurtures relationships by positioning your brand as a trusted authority.</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["Website copywriting", "SEO content creation", "Blog development", "Case studies", "Whitepapers", "Landing pages", "Email marketing", "Thought leadership", "Lead magnets"].map((t, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] px-1.5 py-0.5 rounded font-medium">{t}</span>
                ))}
              </div>
            </div>
            <a href="#contact" className="font-mono text-[11px] text-blue-600 hover:text-slate-950 font-bold flex items-center gap-1 pt-4 border-t border-slate-100">View service specs <ChevronRight size={12} /></a>
          </div>

        </div>

        {/* Extended Services Row */}
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-t border-slate-200 bg-slate-50/30">
          <div className="p-6 space-y-2">
            <h4 className="font-serif text-xs font-bold text-slate-900">04. Social media marketing</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Build vibrant communities, strengthen awareness, and engage directly with platform-specific content frameworks.</p>
            <a href="#contact" className="text-[11px] font-mono font-bold text-blue-600 block pt-1">View service <ChevronRight size={12} className="inline" /></a>
          </div>
          <div className="p-6 space-y-2">
            <h4 className="font-serif text-xs font-bold text-slate-900">05. Lead gen and automation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Create operational funnels and workflows that qualify, nurture, and route prospects so systems scale efficiently.</p>
            <a href="#contact" className="text-[11px] font-mono font-bold text-blue-600 block pt-1">View service <ChevronRight size={12} className="inline" /></a>
          </div>
          <div className="p-6 space-y-2">
            <h4 className="font-serif text-xs font-bold text-slate-900">06. Analytics and optimization</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Track complete cross-channel performance with granular dashboard reporting, audit matrices, and continuous test loops.</p>
            <a href="#contact" className="text-[11px] font-mono font-bold text-blue-600 block pt-1">View service <ChevronRight size={12} className="inline" /></a>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: UX/UI & CUSTOM WEB DEVELOPMENT --- */}
      <section id="experience" className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white">
        <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          <div className="lg:col-span-4 p-6 sm:p-12 space-y-4 bg-slate-50/50">
            <span className="font-mono text-[10px] text-purple-600 font-bold">Module 03</span>
            <h2 className="font-serif text-2xl font-bold text-slate-950">Building digital experiences that customers love</h2>
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
              Modern customers expect intuitive, fast, and engaging digital experiences. A poorly designed website or application can quickly undermine trust. Our design philosophy focuses smoothly on digital products combining usability, performance, and clear business targets.
            </p>
          </div>

          <div className="lg:col-span-8 p-6 sm:p-12">
            <span className="font-mono text-[10px] text-slate-400 block mb-6">UX/UI direction and design focus elements:</span>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "User Experience Research", desc: "We study user behavior, customer needs, and business objectives to identify opportunities for improving engagement and reducing friction." },
                { title: "User Interface Design", desc: "We create visually appealing interfaces that align with your brand identity while maintaining accessibility, clarity, and ease of use." },
                { title: "Wireframing & Prototyping", desc: "Before development begins, we visualize experiences through detailed wireframes and interactive prototypes to validate concepts and reduce risk." },
                { title: "Interaction Design", desc: "Every interaction matters. We design workflows and navigation systems that make digital experiences intuitive, efficient, and enjoyable." },
                { title: "Data Visualization", desc: "We turn complex information into clear dashboards and visual reporting systems that support faster, better business decisions." },
                { title: "Custom Web Design & Development", desc: "Your website is the center of your ecosystem. We build performance platforms that serve as lead engines, information hubs, and tools." }
              ].map((ux, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-600"></span> {ux.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed pl-3">{ux.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Custom Web Engineering Matrix Block */}
        <div className="border-t border-slate-200 p-6 sm:p-12 bg-slate-950 text-white">
          <div className="max-w-xl mb-8">
            <span className="font-mono text-[9px] text-blue-400 block font-bold">Specification module</span>
            <h3 className="font-serif text-lg font-bold text-white mt-1">Custom Web Design and Development Deliverables</h3>
            <p className="text-slate-400 text-xs mt-1">Every project is designed with structural user experience, clean performance, and localized search visibility parameters in front view.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs text-slate-300 font-mono">
            {["Corporate websites", "E-commerce development", "Landing page design", "Custom web applications", "CMS development", "Website maintenance", "API integrations", "Conversion optimization", "Website security", "Performance optimization"].map((w, idx) => (
              <div key={idx} className="p-3 rounded border border-slate-800 bg-slate-900/40 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: STRATEGIC GROWTH FRAMEWORK --- */}
      <section id="framework" className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white">
        <div className="p-6 sm:p-12 text-center max-w-3xl mx-auto space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">Operations step block</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">Our strategic growth framework</h2>
          <p className="text-slate-500 text-xs sm:text-[13px]">Successful digital initiatives require a structured process. Our framework helps businesses move from ideas to measurable outcomes with clarity and accountability.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-slate-200 divide-x divide-slate-200">
          {[
            { num: "01", name: "Discovery", desc: "We learn about your organization, objectives, audience, competitors, and market opportunities." },
            { num: "02", name: "Research", desc: "We analyze customer behaviors, market trends, and growth opportunities that inform decisions." },
            { num: "03", name: "Strategy", desc: "We build a roadmap that aligns branding, marketing, design, and technology initiatives with goals." },
            { num: "04", name: "Creative Dev", desc: "Our designers and strategists create assets that communicate your message and engage your audience." },
            { num: "05", name: "Execution", desc: "We implement campaigns, websites, digital products, and content strategies with precision." },
            { num: "06", name: "Optimization", desc: "Continuous monitoring, testing, and refinement keep every initiative delivering value over time." }
          ].map((f, i) => (
            <div key={i} className="p-4 sm:p-6 space-y-3 bg-white hover:bg-slate-50 transition">
              <span className="font-mono font-black text-slate-300 text-lg sm:text-xl block">{f.num}</span>
              <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm">{f.name}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3 bg-slate-50 border-t border-slate-200 font-mono text-[10px] text-center text-slate-400">
          This structured methodology helps ensure every project delivers measurable value and sustainable business impact.
        </div>
      </section>

      {/* --- SECTION 5: CUSTOM SOLUTIONS SEGMENTS --- */}
      <section className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* Startup Solutions */}
        <div className="p-6 sm:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-blue-600 font-bold"><Briefcase size={14} /> Target deployment A</div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950">Supporting Startups from Idea to Market</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Startups face unique challenges including limited resources, intense competition, and uncertainty about product-market fit. Our team works closely with founders to create strong foundations that support sustainable growth while reducing costly tactical mistakes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
            {["Startup Branding", "Product Launch Planning", "Go-To-Market Strategy", "Market Validation", "Investor Pitch Deck Design", "Website Development", "Customer Acquisition", "Growth Marketing Systems", "Digital Advertising"].map((t, i) => (
              <span key={i} className="bg-slate-50 border border-slate-200 rounded p-2 text-[11px] font-mono text-slate-700">✓ {t}</span>
            ))}
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="p-6 sm:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-purple-600 font-bold"><Building size={14} /> Target deployment B</div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950">Enterprise Solutions for Digital Transformation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Large organizations often face challenges related to legacy systems, fragmented customer experiences, and changing market expectations. Digital transformation requires strategic alignment across people, processes, and platforms to unlock new growth opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
            {["Digital Transformation", "CX Optimization", "MarTech Integration", "Enterprise Web Dev", "Analytics Implementation", "Marketing Automation", "Omnichannel Strategies", "Data Dashboards", "Process Digitization"].map((t, i) => (
              <span key={i} className="bg-slate-50 border border-slate-200 rounded p-2 text-[11px] font-mono text-slate-700">✓ {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED HORIZONTAL BAR --- */}
      <section className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-slate-50/50 p-6 sm:p-8">
        <div className="mb-4">
          <span className="font-mono text-[10px] text-slate-400 block">Vertical market footprint</span>
          <h4 className="font-serif font-bold text-slate-900 text-sm mt-0.5">Cross-industry expertise adapted to each market</h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {industries.map((ind, i) => (
            <span key={i} className="bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 rounded-sm">
              <span className="text-blue-600 font-mono text-[9px] mr-1">{(i+1).toString().padStart(2, '0')}.</span> {ind}
            </span>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: WHY CHOOSE US --- */}
      <section className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white p-6 sm:p-12">
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

      {/* --- SECTION 7: PROVEN CASE ARCHIVES --- */}
      <section id="cases" className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white p-6 sm:p-12">
        <div className="mb-8">
          <span className="font-mono text-[10px] text-slate-400 block">Archived outcomes</span>
          <h2 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">From Concept to Impact: Our creative process ensures real results</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Hyundai */}
          <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between bg-slate-50/30">
            <div className="p-5 space-y-3">
              <div className="flex gap-1">
                {["#Activation", "#Discovery", "#Design"].map((t, idx) => <span key={idx} className="font-mono text-[9px] bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded">{t}</span>)}
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Hyundai Pakistan</span>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">Tuscon 2020 launch campaign</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hyundai Pakistan launched the new mini SUV category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <a href="#contact" className="font-mono text-[11px] font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">View case study <ArrowUpRight size={12} /></a>
            </div>
          </div>

          {/* Toyota */}
          <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between bg-slate-50/30">
            <div className="p-5 space-y-3">
              <div className="flex gap-1">
                {["#Automation", "#Interaction", "#Digital Experience"].map((t, idx) => <span key={idx} className="font-mono text-[9px] bg-purple-50 text-purple-600 border border-purple-100 px-1.5 py-0.5 rounded">{t}</span>)}
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Toyota Motors Islamabad</span>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">Digital Experience System</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Toyota Motors Islamabad partnered with us to enhance their digital presence and create a seamless brand experience for buyers. Designed interactions allowing customers to explore features.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <a href="#contact" className="font-mono text-[11px] font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">View case study <ArrowUpRight size={12} /></a>
            </div>
          </div>

          {/* Codility */}
          <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between bg-slate-50/30">
            <div className="p-5 space-y-3">
              <div className="flex gap-1">
                {["#Identity", "#Interaction", "#Interface"].map((t, idx) => <span key={idx} className="font-mono text-[9px] bg-orange-50 text-orange-600 border border-orange-100 px-1.5 py-0.5 rounded">{t}</span>)}
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Codility Hub Technologies</span>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">Interaction & Asset Design</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development. Brought this idea to life through identity and interaction.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <a href="#contact" className="font-mono text-[11px] font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">View case study <ArrowUpRight size={12} /></a>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 8: FULL DYNAMIC ROUTING PLANNER / FORM --- */}
      <section id="contact" className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-slate-50/50 p-6 sm:p-12">
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

      {/* --- SECTION 9: REFINED INSIGHTS DISPATCH --- */}
      <section className="max-w-7xl mx-auto border-x border-b border-slate-200 bg-white p-6 sm:p-12">
        <div className="mb-8 text-center sm:text-left">
          <span className="font-mono text-[10px] text-slate-400 block">Repository exports</span>
          <h2 className="font-serif text-xl font-bold text-slate-950 mt-0.5">Insights for modern brands and evolving landscapes</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { cat: "Blog: economics", title: "Why attention economy is becoming new economy, and how...", desc: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems." },
            { cat: "Blog: communication", title: "The art of visual communication, how visual grammar can be...", desc: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems." },
            { cat: "Insight: media", title: "Rideshare advertising to a new outdoor world strategy", desc: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems." },
            { cat: "Insight: industry", title: "12 must-attend trade conferences for agency professionals", desc: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems." }
          ].map((blog, i) => (
            <div key={i} className="flex flex-col justify-between space-y-4 group">
              <div className="space-y-1">
                <span className="font-mono text-[9px] font-bold text-blue-600 block">{blog.cat}</span>
                <h4 className="font-serif font-bold text-slate-950 text-xs sm:text-sm group-hover:text-blue-600 transition leading-snug">{blog.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-4 pt-1">{blog.desc}</p>
              </div>
              <a href="#about" className="font-mono text-[11px] text-slate-900 font-bold hover:text-blue-600 flex items-center gap-0.5 transition w-fit">Read more <ChevronRight size={12} /></a>
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
