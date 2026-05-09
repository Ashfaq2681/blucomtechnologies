import React from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Activity, 
  Target, 
  Database, 
  Layers, 
  TrendingUp, 
  Search, 
  RefreshCcw, 
  ShieldCheck,
  Zap,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Terminal
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const AnalysisMeasurementPage = () => {
  return (
    <div className="bg-[#f7fdf9] text-gray-900 font-sans selection:bg-[#00AE80] overflow-x-hidden">

      {/* SEO Metadata */}
      <Helmet>
        <title>Analysis & Measurement Services – Blucom Technologies | Branding Agency Islamabad</title>
        <meta name="description" content="Unlock data-driven growth with Blucom Technologies’ Analysis & Measurement services. Leading Branding Agency Islamabad offering digital marketing strategy, performance marketing, and advanced analytics for measurable success." />
        <meta name="keywords" content="Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, analysis and measurement, performance marketing, online marketing strategy, marketing analytics insights, digital marketing growth strategy, conversion rate optimization" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Analysis & Measurement",
            "description": "Blucom Technologies provides expert analysis and measurement services integrating marketing analytics, digital marketing solutions, and performance marketing to optimize campaigns and drive growth.",
            "provider": {
              "@type": "Organization",
              "name": "Blucom Technologies"
            },
            "keywords": "Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, analysis and measurement, performance marketing, online marketing strategy, marketing analytics insights, digital marketing growth strategy, conversion rate optimization",
            "url": "https://www.theblucom.com/services/analysis-measurement",
            "areaServed": "PK",
            "datePublished": "2026-03-18"
          }
          `}
        </script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6" style={{ background: "linear-gradient(120deg, #E0FFF9 0%, #B8FFD6 100%)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-3 bg-[#00AE80]/10 border border-[#00AE80]/30 px-4 py-2 rounded-none mb-8">
                <Terminal size={14} className="text-[#00AE80]" />
                <span className="text-[10px] font-black tracking-[0.3em] text-[#00AE80]">
                  System status: optimized / Islamabad HQ
                </span>
              </div>
              <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-10">
                Data<br/>
                <span className="text-[#00AE80]">intelligence.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                In a digital ecosystem driven by data, assumptions are expensive—and <span className="font-bold italic text-[#011f18]">guesswork is dangerous.</span> Blucom Technologies transforms raw data into actionable intelligence that fuels sustainable growth.
              </p>
            </div>

            <div className="lg:w-1/3 bg-white/10 border border-white/20 p-8 rounded-none backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold tracking-widest text-gray-600">Live ROI Tracking</span>
                <Activity size={16} className="text-[#00AE80] animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-white/20 rounded-none overflow-hidden"><div className="h-full bg-[#00AE80] w-[88%]"></div></div>
                <div className="h-2 bg-white/20 rounded-none overflow-hidden"><div className="h-full bg-[#00AE80] w-[64%]"></div></div>
                <div className="h-2 bg-white/20 rounded-none overflow-hidden"><div className="h-full bg-[#00AE80] w-[92%]"></div></div>
              </div>
              <p className="mt-6 text-[11px] text-gray-500 leading-relaxed">
                Transforming raw metrics into actionable digital marketing strategy for brands in Islamabad and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY / ANALYSIS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Campaign sync", icon: RefreshCcw },
                { label: "Predictive AI", icon: Zap },
                { label: "Data integrity", icon: ShieldCheck },
                { label: "ROI mapping", icon: Target }
              ].map((card, i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-none hover:bg-[#00AE80]/20 transition-all group">
                  <card.icon className="text-[#00AE80] group-hover:text-white mb-4" size={32} />
                  <h5 className="font-black text-[10px] tracking-widest group-hover:text-white">{card.label}</h5>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                What is <br/><span className="text-[#00AE80]">analysis & measurement?</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Analysis and measurement are the backbone of every successful marketing initiative. Collecting, interpreting, and applying data allows brands to evaluate performance and guide strategic direction. Each click, impression, and interaction is accounted for to ensure competitive advantage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Businesses empowered with precise measurement can track campaign performance in real time, understand customer engagement, optimize digital strategy, and improve ROI across performance marketing initiatives. Even the most creative campaigns risk underperforming without accurate analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY / 4-STEP FRAMEWORK */}
      <section className="py-32 px-6 bg-white/20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl font-black tracking-tighter mb-4 text-center">Technical <span className="text-[#00AE80]">Framework</span></h2>
            <p className="text-center text-gray-600 text-xs tracking-[0.3em]">Proprietary data-to-intelligence workflow</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                step: "01. Collection",
                desc: "Consolidating website analytics, social engagement, and CRM insights into a unified view for holistic measurement."
              },
              {
                icon: Layers,
                step: "02. KPI design",
                desc: "Defining conversion rates, customer acquisition costs, and ROI attribution to focus on outcomes that truly matter."
              },
              {
                icon: LineChart,
                step: "03. Analytics",
                desc: "Utilizing predictive marketing analytics to identify drop-off points and conversion rate optimization gaps."
              },
              {
                icon: BarChart3,
                step: "04. Optimization",
                desc: "Actionable reports and continuous monitoring that refine strategies and maximize high-performance outcomes."
              }
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-white/5 border border-gray-200 group hover:border-[#00AE80] transition-all rounded-none">
                <item.icon className="text-[#00AE80] mb-12" size={40} />
                <h4 className="text-xl font-black mb-4 tracking-tighter">{item.step}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                <ChevronRight className="absolute bottom-10 right-10 text-gray-300 group-hover:text-[#00AE80]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE OF EVIDENCE */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto border border-[#00AE80]/30 p-12 md:p-24 bg-gradient-to-br from-[#00AE80]/5 to-transparent rounded-none">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">The value of <span className="text-[#00AE80]">evidence</span></h2>
            <p className="text-gray-600 text-xs tracking-widest font-bold leading-relaxed">In a competitive market, data is your most valuable asset.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Eliminate inefficiencies & reduced spend",
              "Identification of high-performing channels",
              "Enhanced customer journey optimization",
              "B2B marketing funnel support",
              "Informed, faster decision making"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-2 h-2 bg-[#00AE80] shadow-[0_0_10px_#00AE80]"></div>
                <span className="text-sm font-black tracking-wider group-hover:text-[#00AE80]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-40 pb-20 px-6 border-t border-gray-200 bg-[#f0fdf6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-40">
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-12">
                Bridge <br/>the <span className="text-[#00AE80]">gap.</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-4 text-sm font-bold"><Mail size={16} /> connect@blucomtechnologies.com</div>
                <div className="flex items-center gap-4 text-sm font-bold"><Phone size={16} /> +92-303-5907230 | +92-334-0011126</div>
                <div className="flex items-start gap-4 text-[10px] tracking-widest leading-relaxed mt-8">
                  <MapPin size={16} className="shrink-0" /> Islamabad
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#00AE80] opacity-5 blur-[120px]"></div>
              <div className="relative z-10 border-l-2 border-[#00AE80] pl-12 space-y-12">
                <div>
                  <h5 className="font-black text-xs tracking-[0.3em] text-[#00AE80] mb-4">Actionable insights</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">Data translated into clear strategic recommendations for branding and growth.</p>
                </div>
                <div>
                  <h5 className="font-black text-xs tracking-[0.3em] text-[#00AE80] mb-4">Integrated systems</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">Unified tracking across all marketing channels—from SEO to paid social.</p>
                </div>
                <button className="bg-[#00AE80] text-white px-10 py-5 font-black text-[10px] tracking-widest hover:scale-105 transition-transform">
                  Unlock your intelligence
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 text-[10px] text-gray-600 font-black tracking-[1em]">
            <p>Blucom Technologies © 2026</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-[#00AE80] cursor-pointer">Security</span>
              <span className="hover:text-[#00AE80] cursor-pointer">Protocol</span>
              <span className="hover:text-[#00AE80] cursor-pointer">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnalysisMeasurementPage;