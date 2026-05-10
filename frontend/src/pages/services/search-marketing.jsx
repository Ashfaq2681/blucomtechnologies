import React from 'react';
import { 
  Search, 
  Target, 
  MousePointer2, 
  TrendingUp, 
  Globe, 
  BarChart4, 
  Compass, 
  Zap, 
  Layers, 
  Maximize2,
  Mail,
  MapPin,
  Phone,
  Link,
  ChevronRight
} from 'lucide-react';

const SearchMarketingBlueprint = () => {
  return (
    <div className="bg-[#FAFAFA] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* 1. HERO SECTION - BRIGHT GRADIENT BACKGROUND */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-r from-gray-50 via-white to-[#E0FFE0]">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
      <div className="lg:w-2/3">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-gray-100"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
            Strategic visibility protocol
          </span>
        </div>
        <h1 className="text-6xl md:text-[7rem] font-black leading-[0.9] mb-8 text-gray-900">
          Search<br/>
          <span className="italic text-[#00AE80]">Marketing</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 font-light max-w-2xl leading-relaxed">
          Visibility is currency. At our <span className="font-bold">Branding Agency Islamabad</span>, we specialize in meeting consumers at the exact point of intent, ensuring every interaction is strategic and measurable.
        </p>
      </div>

      <div className="lg:w-1/3 bg-white border border-gray-200 p-8 shadow-xl hidden lg:block">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
            Market reach index
          </span>
          <Compass size={16} className="text-[#00AE80] animate-spin-slow" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-bold">
            <span>SEO organic</span>
            <span className="text-[#00AE80]">93%</span>
          </div>
          <div className="h-1 bg-gray-100 overflow-hidden">
            <div className="h-full bg-[#00AE80] w-[93%]"></div>
          </div>
          <p className="text-[9px] text-gray-400 leading-relaxed italic uppercase">
            "93% of online experiences begin with a search engine."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 2. METHODOLOGY - WHITE/GREEN CONTRAST SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">SEO: The Organic Base</h2>
            <p className="text-gray-900 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our foundation starts with comprehensive keyword research, competitive analysis, and technical SEO audits. Every element—from meta tags to page speed—is optimized to boost organic traffic growth and maintain authority within your niche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { 
      icon: Globe, 
      title: "Technical calibration", 
      desc: "Search engine algorithms evolve rapidly. Our team monitors digital marketing trends to adapt strategies and maintain high rankings." 
    },
    { 
      icon: TrendingUp, 
      title: "Authority building", 
      desc: "Integrating authority content strategy and long-form content marketing positions your brand as a trusted resource, enhancing credibility." 
    },
    { 
      icon: BarChart4, 
      title: "Data insights", 
      desc: "Performance tracking metrics such as dwell time, click-through rates, and conversions guide our iterative optimization process." 
    }
  ].map((item, i) => (
    <div key={i} className="border border-gray-200 p-8 flex flex-col gap-4">
      <item.icon size={28} className="text-[#00AE80]" />
      <h4 className="font-black text-sm tracking-widest">{item.title}</h4>
      <p className="text-xs text-gray-900 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* 3. PAID SEARCH & ROI - CONTRAST DARK SECTION */}
      <section className="py-32 px-6 text-[#011f18]">
  <div className="max-w-7xl mx-auto">
    <div className="mb-20 text-center lg:text-left">
      <h2 className="text-5xl font-black tracking-tight text-[#00AE80] mb-4">The conversion accelerator</h2>
      <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">SEO: The Organic Base</h2>
            <p className="text-gray-900 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              we design paid media strategies that maximize reach, relevance, and return. From Google Ads and Microsoft Ads to programmatic advertising, each campaign is crafted to target high-intent prospects, ensuring that every marketing dollar contributes to measurable growth.
            </p>
          </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { icon: Target, title: "PPC media", desc: "Designing paid media strategies across Google and Microsoft Ads to maximize return." },
        { icon: MousePointer2, title: "High-intent targeting", desc: "Target prospects at the exact point of transactional intent for better ROI." },
        { icon: Zap, title: "AI-powered iteration", desc: "Leveraging predictive analytics and AI tools to optimize campaigns rapidly and stay relevant." }
      ].map((box, i) => (
        <div key={i} className="bg-white p-12 border border-gray-200 flex flex-col gap-6 group hover:bg-[#D1FFE6] transition-colors">
          <box.icon size={32} className="text-[#00AE80] group-hover:scale-110 transition-transform" />
          <h5 className="font-black text-xs tracking-widest">{box.title}</h5>
          <p className="text-xs text-gray-900 leading-relaxed">{box.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. B2B/B2C SECTOR STRATEGY */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 border border-gray-200">
          <div className="bg-white p-12 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <Layers size={28} className="text-[#00AE80]" />
            <h4 className="text-2xl font-black mb-4">B2B reach</h4>
            <p className="text-xs text-gray-900 leading-relaxed">Target decision-makers through remarketing funnels, optimized landing pages, and sustainable strategies that enhance business outcomes.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#00AE80]">
              <span className="w-1.5 h-1.5 bg-[#00AE80]"></span> LinkedIn synergy integrated
            </div>
          </div>
          <div className="bg-white p-12 flex flex-col gap-6">
            <Maximize2 size={28} className="text-[#00AE80]" />
            <h4 className="text-2xl font-black mb-4">B2C growth</h4>
            <p className="text-xs text-gray-900 leading-relaxed">Social proof marketing and engagement-driven SEO content converts casual browsers into loyal brand advocates.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#00AE80]">
              <span className="w-1.5 h-1.5 bg-[#00AE80]"></span> Instagram marketing optimized
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-32 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85]">Bridging <span className="text-[#00AE80]">Intent</span></h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-black uppercase text-gray-400"><Mail className="text-[#00AE80]" size={16}/> connect@blucomtechnologies.com</div>
                <div className="flex items-center gap-4 text-xs font-black uppercase text-gray-400"><Phone className="text-[#00AE80]" size={16}/> +92-303-5907230 | +92-334-0011126</div>
              </div>
            </div>
            <div className="border-l-4 border-[#00AE80] pl-12">
              <p className="text-sm text-gray-900 leading-relaxed font-bold mb-4">
                Search marketing bridges intent and action. Our agency ensures your brand is not only seen but remembered.
              </p>
              <div className="flex items-start gap-4 opacity-50">
                <MapPin size={18} className="text-[#011f18] shrink-0" />
                <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">Islamabad</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 text-[9px] text-gray-400 font-black uppercase tracking-[1.5em]">
            <p>Blucom Blueprint © 2026</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-[#00AE80] cursor-pointer">Protocol</span>
              <span className="hover:text-[#00AE80] cursor-pointer">Relevance</span>
            </div>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT & SOCIAL SCHEMA */}
      <div className="hidden">
        <h1>Search Marketing Services | Branding Agency Islamabad</h1>
        <p>In the digital age, visibility is currency. Every day, millions of searches occur across Google, Bing, and other search engines. At our Branding Agency Islamabad, we specialize in search marketing, helping businesses harness search engines to amplify reach, generate leads, and drive conversions. Search marketing combines content and optimization to meet consumers at the point of intent, strategically positioning your brand as the preferred solution.</p>
        <p>SEO forms the organic foundation of growth. Comprehensive keyword research, competitive analysis, technical SEO audits, structured data, and URL hierarchy ensure optimal visibility. Paid search complements SEO, providing immediate impact with PPC campaigns, programmatic strategy, and high-intent targeting. Data-driven insights guide iterative improvements, boosting click-through rates, conversions, and overall ROI.</p>
        <p>B2B campaigns capture decision-makers through remarketing and optimized landing pages. B2C campaigns leverage engagement-driven content, social proof, and personalization. Integrating search with content marketing, social media, and performance marketing creates a cohesive ecosystem for measurable growth. Search marketing is a long-term growth engine, establishing authority, increasing engagement, and maximizing revenue potential.</p>

        {/* JSON-LD Social Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "Unlocking Visibility and Growth with Strategic Search Marketing",
            "description": "Enhance your brand’s visibility with expert search marketing from a top Branding Agency Islamabad. Leverage SEO, PPC, and data-driven strategies to drive engagement, leads, and growth.",
            "keywords": "Branding Agency Islamabad, search marketing, digital marketing agency, digital marketing services, digital marketing strategy, SEO content strategy, PPC advertising services, online marketing strategy",
            "publisher": {
              "@type": "Organization",
              "name": "Blucom Technologies HQ",
              "logo": "https://www.blucomtechnologies.com/logo.png",
              "url": "https://www.blucomtechnologies.com"
            }
          }
        `}} />
      </div>
    </div>
  );
};

export default SearchMarketingBlueprint;