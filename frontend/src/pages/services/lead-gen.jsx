import React from 'react';
import { 
  Users, 
  Filter, 
  Target, 
  Zap, 
  BarChart3, 
  Fingerprint, 
  RefreshCcw, 
  Layers, 
  Mail, 
  MapPin, 
  Phone,
  Maximize2,
  Binary,
  ArrowDownCircle,
  ShieldCheck
} from 'lucide-react';

const LeadGenBlueprint = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* SEO Metadata & Social Schema */}
      <head>
        <title>Transforming Prospects into Revenue | Branding Agency Islamabad</title>
        <meta name="description" content="Maximize revenue with expert lead generation from a top Branding Agency Islamabad. Leverage data-driven B2B and B2C strategies, digital marketing services, and conversion-optimized campaigns." />
        <meta name="keywords" content="Branding Agency Islamabad, lead generation, B2B lead generation, digital marketing agency, digital marketing services, digital marketing strategy, performance marketing, customer journey optimization" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Transforming Prospects into Revenue: The Science of Lead Generation",
          "description": "Maximize revenue with expert lead generation from a top Branding Agency Islamabad. Leverage data-driven B2B and B2C strategies, digital marketing services, and conversion-optimized campaigns.",
          "keywords": "Branding Agency Islamabad, lead generation, B2B lead generation, digital marketing agency, digital marketing services, digital marketing strategy, performance marketing, customer journey optimization",
          "publisher": {
            "@type": "Organization",
            "name": "Blucom Technologies HQ",
            "logo": "https://www.blucomtechnologies.com/logo.png",
            "url": "https://www.blucomtechnologies.com"
          }
        })}} />
      </head>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-[#E0FFF4] via-[#CFFFE0] to-[#B8FFE0]">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
      <div className="lg:w-2/3">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-gray-300"></div>
          <span className="text-[10px] font-black tracking-[0.4em] text-gray-700">
            Lead acquisition blueprint v2.0
          </span>
        </div>
        <h1 className="text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter mb-8 text-gray-800">
          Revenue<br/>
          <span className=" text-[#00AE80]">science.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl leading-relaxed">
          Visibility alone is not enough. At our <span className="font-bold text-gray-800">Branding Agency Islamabad</span>, we turn attention into actionable leads, bridging awareness with measurable conversions.
        </p>
      </div>

      <div className="lg:w-1/3 bg-white border border-gray-200 p-8 hidden lg:block">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-black tracking-widest text-gray-400">B2B priority index</span>
          <Binary size={16} className="text-[#00AE80]" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-bold">
            <span>Lead gen focus</span>
            <span className="text-[#00AE80]">68%</span>
          </div>
          <div className="h-1 bg-gray-100 overflow-hidden">
            <div className="h-full bg-[#00AE80] w-[68%]"></div>
          </div>
          <p className="text-[9px] text-gray-500 leading-relaxed italic uppercase">
            "68% of B2B companies cite lead generation as their top priority."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 2. Methodology / Multi-Channel Engine */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-4">Integrated <span className="text-[#00AE80]">acquisition</span></h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Relying on a single channel is no longer viable. We employ an integrated strategy combining SEO, PPC, content marketing, and social media to capture leads at multiple touchpoints.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="w-10 h-10 border border-[#00AE80] flex items-center justify-center text-[#00AE80] shrink-0">
                    <Target size={20}/>
                  </div>
                  <div>
                    <h4 className="font-black text-xs mb-1">Seo for lead capture</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Optimizing landing pages with keywords and structured data to attract high-intent visitors.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 border border-[#00AE80] flex items-center justify-center text-[#00AE80] shrink-0">
                    <Zap size={20}/>
                  </div>
                  <div>
                    <h4 className="font-black text-xs mb-1">Performance marketing</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Leveraging PPC advertising and programmatic campaigns to increase conversion rates with precision.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 border border-[#00AE80] flex items-center justify-center text-[#00AE80] shrink-0">
                    <Fingerprint size={20}/>
                  </div>
                  <div>
                    <h4 className="font-black text-xs mb-1">Authority content</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Building trust through storytelling and B2B content marketing to engage decision-makers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F0FDF4] border border-gray-200 p-12 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Filter size={120} /></div>
              <h3 className="text-2xl font-black mb-8">The conversion <span className="text-[#00AE80]">funnel</span></h3>
              <div className="space-y-6 relative z-10">
                <div className="p-4 border-l-2 border-gray-300 bg-gray-50 flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-widest">Awareness stage</span>
                  <ArrowDownCircle size={14} className="text-gray-400"/>
                </div>
                <div className="p-4 border-l-2 border-[#00AE80] bg-[#D1FFE6] flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-widest text-[#00AE80]">Engagement & lead capture</span>
                  <Maximize2 size={14} className="text-[#00AE80]"/>
                </div>
                <div className="p-4 border-l-2 border-gray-300 bg-gray-50 flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-widest">Nurture & conversion</span>
                  <ShieldCheck size={14} className="text-gray-400"/>
                </div>
              </div>
              <p className="mt-8 text-[10px] text-gray-500 font-bold leading-relaxed">
                Using lead magnets, webinars, and AI-driven personalization to move prospects seamlessly through the customer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Data & Technical Advantage */}
      <section className="py-32 px-6 bg-[#D1FFE6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6 p-10 border border-gray-200 bg-white">
              <BarChart3 className="text-[#00AE80]" size={32} />
              <h3 className="text-3xl font-black mb-2">Data-driven optimization</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Measurement is the engine. We track cost per lead, lead quality, and engagement through analytics dashboards for actionable insights.
              </p>
            </div>
            <div className="p-10 border border-gray-200 bg-white">
              <h4 className="text-[#00AE80] font-black text-[10px] tracking-widest mb-6">B2B strategy</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed mb-6">Focus on B2B marketing automation, LinkedIn campaigns, and personalized content to engage decision-makers.</p>
            </div>
            <div className="p-10 border border-gray-200 bg-white">
              <h4 className="text-[#00AE80] font-black text-[10px] tracking-widest mb-6">B2C acquisition</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed mb-6">Leveraging social proof marketing, Instagram and Facebook campaigns to drive awareness and actionable engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Growth Core */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <RefreshCcw className="mx-auto text-[#00AE80] mb-8 animate-spin-slow" size={48} />
          <h2 className="text-4xl font-black mb-8 leading-none">A sustainable <br/>revenue engine</h2>
          <p className="text-gray-700 font-bold text-[11px] leading-relaxed mb-12">
            Our agency combines technical expertise with brand communication. Every lead we capture becomes a measurable opportunity, creating growth engines that transform digital interactions into revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <span className="block text-2xl font-black text-[#011f18]">B2B</span>
              <span className="text-[9px] font-bold text-gray-500 tracking-widest">Growth marketing</span>
            </div>
            <div className="text-center border-x border-gray-200 px-12">
              <span className="block text-2xl font-black text-[#011f18]">B2C</span>
              <span className="text-[9px] font-bold text-gray-500 tracking-widest">Lead acquisition</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-[#011f18]">ROI</span>
              <span className="text-[9px] font-bold text-gray-500 tracking-widest">Measurement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-24 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-end">
            <div>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85]">
                Turn data <br/>into <span className="text-[#00AE80]">revenue.</span>
              </h2>
              <div className="space-y-4 font-bold text-[10px] tracking-widest text-gray-500">
                <p className="flex items-center gap-4 text-[#011f18]"><Mail className="text-[#00AE80]" size={16}/> connect@blucomtechnologies.com</p>
                <p className="flex items-center gap-4 text-[#011f18]"><Phone className="text-[#00AE80]" size={16}/> +92-303-5907230 | +92-334-0011126</p>
              </div>
            </div>
            <div className="border-l-4 border-[#00AE80] pl-12">
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Lead generation is the engine of business growth. At our Branding Agency Islamabad, we ensure campaigns are measurable growth engines designed to deliver scale and sustainability.
              </p>
              <div className="flex items-start gap-4 opacity-40">
                <MapPin size={18} className="text-[#011f18] shrink-0" />
                <p className="text-[9px] font-black tracking-[0.2em] leading-relaxed">Islamabad</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 text-[9px] text-gray-400 font-black tracking-[1.5em]">
            <p>Blucom Revenue Logic © 2026</p>
            <p>System Status: Active</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadGenBlueprint;