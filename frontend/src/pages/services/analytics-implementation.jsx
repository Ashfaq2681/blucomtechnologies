import React from 'react';
import { 
  Cpu, 
  Network, 
  Binary, 
  Settings2, 
  BarChart4, 
  Activity, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Share2,
  Database,
  LineChart,
  Terminal,
  Code2,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const AnalyticsImplementation = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">

      {/* 1. Hero Section: Bright Gradient + Modern Tech Lines */}
      <section className="relative min-h-screen flex items-center px-6 border-b border-gray-200 overflow-hidden">
        {/* Gradient + Diagonal Lines Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFC2]/30 via-[#00AE80]/20 to-[#E6FFF9]/10 opacity-80"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="#00AE80" strokeWidth="0.2"/>
          <line x1="0" y1="100" x2="100" y2="0" stroke="#00AE80" strokeWidth="0.2"/>
        </svg>

        <div className="max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E6FFF9] border-l-4 border-[#00AE80] px-4 py-2 mb-6">
              <Activity size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#00AE80]">Branding Agency Islamabad</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Analytics implementation<br/>
              <span className="text-[#00AE80]">for measurable growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-10">
              Data is the most valuable currency for brands aiming to establish authority. At our <span className="text-[#011f18] font-bold">Branding Agency Islamabad</span>, we translate analytics into actionable insights that drive measurable <span className="text-[#00AE80] font-bold">marketing performance</span>.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#00AE80] text-white px-10 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-[#00FFC2] transition-all flex items-center gap-3">
                Request Analytics Setup <Settings2 size={16}/>
              </button>
              <div className="px-6 py-4 border border-[#00AE80]/40 text-[10px] font-bold tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00FFC2] animate-pulse"></span> System Active
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-[#00AE80]/10 blur-[100px]"></div>
            <div className="bg-white p-6 border border-gray-200 flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <Terminal size={14} className="text-[#00AE80]"/>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data log</span>
              </div>
              <div className="space-y-2 text-[10px] font-mono text-gray-900">
                <p>{">"} GA4 initialized successfully</p>
                <p>{">"} Tag manager container deployed</p>
                <p>{">"} Tracking pixels consolidated</p>
                <p>{">"} AI dashboard synced [100%]</p>
                <div className="h-24 flex items-end gap-1 mt-2">
                  {[50, 75, 40, 85, 60, 70, 35, 90].map((h, i) => (
                    <div key={i} className="flex-grow bg-[#00AE80]/30 border-t border-[#00AE80]" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Methodology Section (Bright White/Green Boxes, No Roundness) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#011f18] mb-12">Our methodology for analytics implementation</h2>
          <p className="text-gray-900 mb-16 leading-relaxed">
            Analytics implementation is not merely about installing tracking codes or monitoring clicks. It involves a holistic framework integrating digital marketing services, online marketing strategy, and performance marketing. Each touchpoint in the customer journey becomes measurable and actionable. By translating raw data into strategic guidance, we optimize campaigns, improve ROI, and enhance brand perception.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Binary, title: "Data collection", desc: "Capturing website traffic, engagement patterns, and conversion paths using GA4 and Tag Manager." },
              { icon: Cpu, title: "Performance optimization", desc: "Fine-tuning paid media, PPC advertising, and programmatic campaigns for maximum ROI." },
              { icon: Network, title: "Predictive strategy", desc: "Identifying audience patterns using AI-powered personalization to anticipate customer needs." },
              { icon: Zap, title: "AI insights", desc: "Leveraging AI dashboards and predictive analytics for data-driven marketing decisions." },
              { icon: ShieldCheck, title: "Brand trust", desc: "Ensuring hyper-relevant messaging that enhances engagement and strengthens your brand." },
              { icon: Globe, title: "B2B funnels", desc: "Analyzing lead generation, marketing automation, and multi-touch B2B campaigns for growth." }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 flex flex-col gap-4">
                <item.icon className="text-[#00AE80]" size={28}/>
                <h4 className="font-black text-[#011f18] text-sm">{item.title}</h4>
                <p className="text-gray-900 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Analytical Core */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Database className="mx-auto text-[#00AE80] mb-12 opacity-70" size={60} />
          <h3 className="text-4xl font-black text-[#011f18] mb-8">The backbone of marketing transformation</h3>
          <p className="text-gray-900 leading-relaxed mb-12">
            Our Branding Agency Islamabad systematically captures, analyzes, and acts on data to enable businesses to navigate modern marketing with confidence. Tools like GA4, Tag Manager, BigQuery, and Looker provide accurate tracking across all touchpoints, empowering actionable insights and measurable growth.
          </p>
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-4">
            {["GA4", "GTM", "BigQuery", "Looker"].map((tool, i) => (
              <div key={i} className="px-4 py-2 border border-gray-200 text-[#00AE80] font-bold text-[10px] uppercase">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer / Contact */}
      <footer className="py-24 px-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black text-[#011f18] mb-8">Start your analytics journey</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4"><Mail className="text-[#00AE80]"/> connect@blucomtechnologies.com</div>
              <div className="flex items-center gap-4"><Phone className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-[#00AE80]"/>
              <p className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Islamabad</p>
            </div>
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.5em] text-gray-400">
              <p>Blucom © 2026</p>
              <p>Version: 1.12</p>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO / Social Schema */}
      <div className="hidden">
        <h1>Analytics Implementation | Branding Agency Islamabad</h1>
        <p>Analytics implementation transforms data into actionable insights for measurable marketing performance. At our Branding Agency Islamabad, we integrate digital marketing services, performance marketing, AI dashboards, and predictive analytics to optimize ROI and strengthen brand growth.</p>
        <p>Our holistic framework includes B2B funnels, content marketing insights, AI-powered personalization, lead generation measurement, and social media monitoring. By tracking engagement patterns, conversion rates, and retention metrics, we help brands implement data-driven growth strategies. Analytics implementation empowers brands to anticipate audience behavior, optimize marketing campaigns, and enhance digital authority.</p>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "headline": "Analytics Implementation",
              "description": "Deeply researched, creative content on analytics implementation for brands by Branding Agency Islamabad, highlighting digital marketing strategy, performance marketing, and data-driven growth.",
              "keywords": "Branding Agency Islamabad, digital marketing agency, digital marketing services, online marketing strategy, performance marketing, digital marketing growth strategy, B2B marketing agency, brand growth strategy, content marketing strategy, AI in digital marketing",
              "robots": "index, follow"
            }
          `}
        </script>
      </div>
    </div>
  );
};

export default AnalyticsImplementation;