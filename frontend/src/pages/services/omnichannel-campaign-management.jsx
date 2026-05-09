import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Sparkles, PenTool, Users, Search, Share2, Bookmark,
  Mail, MapPin, Phone, CheckCircle2, ArrowUpRight, MousePointerClick,
  BarChart3, Layers, Zap
} from 'lucide-react';

const OmnichannelCampaign = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">

      {/* SEO Metadata & Schema */}
      <Helmet>
        <title>Omnichannel campaign management services in Islamabad | Blucom</title>
        <meta name="description" content="Discover our Omnichannel Campaign Management services in Islamabad. We deliver integrated digital marketing campaigns across multiple channels, boosting engagement, conversions, and brand growth." />
        <meta name="keywords" content="omnichannel campaign management, digital marketing agency, digital marketing strategy, B2B marketing solutions, performance marketing, digital marketing growth strategy, branding agency Islamabad" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.blucomtechnologies.com/services/omnichannel-campaign-management" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Omnichannel Campaign Management",
              "provider": {
                "@type": "Organization",
                "name": "Branding Agency Islamabad",
                "url": "https://www.blucomtechnologies.com",
                "logo": "https://www.blucomtechnologies.com/logo.png"
              },
              "description": "We provide Omnichannel Campaign Management services integrating multiple marketing channels to boost engagement, conversions, and brand growth.",
              "areaServed": {
                "@type": "Place",
                "name": "Islamabad, Pakistan"
              },
              "keywords": "omnichannel campaign management, digital marketing agency, digital marketing strategy, B2B marketing solutions, performance marketing",
              "url": "https://www.blucomtechnologies.com/services/omnichannel-campaign-management"
            }
          `}
        </script>
      </Helmet>

      {/* Hero section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-gradient-to-r from-[#F0FFF4] via-[#D9FFE5] to-[#E6FFF2]">
        <div className="max-w-7xl mx-auto relative z-10 text-[#011f18]">
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md mb-8 border border-white/20">
              <Sparkles size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-wide uppercase">2026: omnichannel insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Connect <br/>
              <span className="text-emerald-500 opacity-80 underline decoration-[#00FFC2] decoration-4 underline-offset-8">every channel</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed italic border-l-4 border-[#00AE80] pl-6 py-2">
              Omnichannel campaign management ensures your brand speaks consistently across all digital touchpoints.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-white/20">
            <div className="lg:col-span-2 bg-white p-12 flex flex-col justify-between relative text-[#011f18]">
              <div>
                <h3 className="text-3xl font-bold mb-6">Integrated strategies for measurable growth</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  At our branding agency in Islamabad, we help businesses craft campaigns that resonate across channels—from email and social media to search and paid advertising. Using AI-driven insights and human expertise, we optimize engagement, conversion, and brand loyalty.
                </p>
              </div>
              <div className="mt-12 flex items-end justify-between">
                <button className="bg-[#00AE80] text-white px-10 py-4 font-bold text-xs tracking-widest hover:bg-[#E6FFE8] transition-all flex items-center gap-3">
                  Explore our methodology <ArrowUpRight size={18} />
                </button>
                <PenTool size={80} className="text-[#00AE80]/10" />
              </div>
            </div>

            <div className="bg-[#E6FFE8] p-10 text-[#011f18] flex flex-col justify-center text-center border-l border-gray-200">
              <span className="text-[10px] font-bold tracking-wide uppercase opacity-70 mb-4">Retention lift</span>
              <h4 className="text-7xl font-bold mb-2">89%</h4>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                Average customer retention with strong omnichannel campaigns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our methodology section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-4">Our methodology</h2>
            <p className="text-gray-500 max-w-2xl">
              We craft light, high-contrast content systems replacing dark, traditional frameworks. Our methodology maximizes engagement, clarity, and readability across omnichannel campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            {[
              { icon: BarChart3, title: "Discovery and insights", color: "bg-white" },
              { icon: Layers, title: "Narrative architecture", color: "bg-[#E2E8F0]" },
              { icon: Zap, title: "Automation and rapid deployment", color: "bg-white" }
            ].map((step, i) => (
              <div key={i} className={`${step.color} p-12 flex flex-col gap-6 border-r border-gray-200 last:border-r-0`}>
                <step.icon size={40} className="text-[#00AE80]" />
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Leveraging analytics, AI personalization, and trend insights, we plan, optimize, and execute campaigns for measurable growth and high ROI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic pillars */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6">Core components</h2>
                <p className="text-sm text-gray-500 font-medium leading-relaxed uppercase tracking-wider">
                  Omnichannel campaigns combine multiple strategies to optimize every touchpoint.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-0 border border-gray-100">
              {[
                { icon: Users, title: "Multi-channel integration", desc: "Unified messaging across social media, email, search, paid ads, and offline campaigns ensures brand consistency." },
                { icon: Search, title: "Data-driven insights", desc: "KPIs, engagement metrics, and analytics refine campaigns for higher ROI and performance." },
                { icon: Share2, title: "Personalization & segmentation", desc: "AI-powered recommendations, behavioral triggers, and demographic targeting drive engagement and customer loyalty." },
                { icon: Bookmark, title: "Workflow automation", desc: "Marketing automation tools streamline tasks, enabling strategy-focused execution while ensuring campaign agility." }
              ].map((pillar, i) => (
                <div key={i} className="p-12 border border-gray-100 hover:bg-[#F1F5F9] transition-colors">
                  <pillar.icon className="text-[#00AE80] mb-6" size={32} />
                  <h4 className="font-bold text-lg mb-4">{pillar.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content / SEO */}
      <section className="py-32 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-[#00AE80] mb-8">
                  Omnichannel <br/>campaign management
                </h2>
                <div className="h-1 w-20 bg-[#00AE80] mb-8"></div>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Our omnichannel framework ensures brand engagement across email, social, search, paid media, and offline channels—delivering consistent messaging, measurable results, and increased customer retention.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-0">
              <div className="bg-[#F8FAFC] p-10 border border-gray-200 border-b-0">
                <p className="text-xl text-[#011f18] leading-relaxed italic">
                  Our campaigns integrate data, AI insights, and creative strategy to boost engagement, conversions, and lifetime value. We enable B2B and B2C brands to scale their marketing with precision and personalization.
                </p>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="bg-white p-10 border border-gray-200 hover:bg-[#F1F5F9] transition-colors group">
                  <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">01 / Awareness</span>
                  <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
                    Enhance brand consistency
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every interaction reflects brand voice, positioning, and messaging, increasing audience trust and loyalty.
                  </p>
                </div>

                <div className="bg-[#E2E8F0]/30 p-10 border border-gray-200 border-l-0 hover:bg-white transition-colors group">
                  <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">02 / Engagement</span>
                  <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
                    Optimize customer journey
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Map touchpoints effectively to guide leads from awareness to conversion, increasing ROI and reducing wasted spend.
                  </p>
                </div>

                <div className="bg-[#E2E8F0]/30 p-10 border border-gray-200 border-t-0 hover:bg-white transition-colors group">
                  <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">03 / Conversion</span>
                  <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
                    Personalization & automation
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    AI-driven recommendations and automation workflows deliver relevant messaging to the right audience at the right time.
                  </p>
                </div>

                <div className="bg-white p-10 border border-gray-200 border-t-0 border-l-0 hover:bg-[#F1F5F9] transition-colors group">
                  <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">04 / Analytics</span>
                  <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
                    Measure & refine
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Track cross-channel engagement, cost per lead, and campaign attribution to optimize performance and enhance growth.
                  </p>
                </div>
              </div>

              <div className="bg-[#00AE80] p-12 text-white">
                <p className="text-lg font-bold leading-relaxed">
                  Omnichannel campaign management is a necessity for modern brands. We help you engage, nurture, and convert audiences across every channel with measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OmnichannelCampaign;