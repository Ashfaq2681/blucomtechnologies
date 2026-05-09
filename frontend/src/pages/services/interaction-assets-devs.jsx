import React from 'react'; 
import { Helmet } from 'react-helmet';
import { 
  Fingerprint, MousePointer2, Zap, Share2, Activity, Cpu, 
  BarChart3, Expand, Layers, Infinity, Mail, MapPin, 
  Phone, Spline, HandMetal, Network, ArrowUpRight, Check 
} from 'lucide-react';

const InteractionAssetsLab = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">

      {/* SEO Metadata & Social Schema */}
      <Helmet>
        <title>Strategic interaction assets & experience design | Blucom Islamabad</title>
        <meta name="description" content="Elevate your brand with expertly designed interaction assets. Boost engagement and digital growth with our interactive content solutions in Islamabad." />
        <meta name="keywords" content="Interaction assets development, digital marketing agency Islamabad, brand identity design, digital marketing growth strategy, B2B marketing solutions, social media engagement strategy, AI-driven marketing" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Interaction Assets Development",
            "provider": {
              "@type": "Organization",
              "name": "Blucom Technologies",
              "url": "https://www.blucomtechnologies.com"
            },
            "description": "Designing and developing interaction assets that turn static impressions into dynamic engagement and measurable growth.",
            "areaServed": "Islamabad, Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Interaction Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Configurators" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interactive Whitepapers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gamified Brand Experiences" } }
              ]
            }
          }
          `}
        </script>
      </Helmet>

      {/* 1. Hero Section - Light Variation */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#F7FDFB] border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1v58h58V1H1z' fill='%2300AE80' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white border border-emerald-100 mb-10 shadow-sm">
              <Activity size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 ">Interaction protocol v.26</span>
            </div>
            <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter mb-12">
              Beyond<br/>
              <span className="text-emerald-500">static.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-4xl leading-relaxed lowercase first-letter:">
              Brands are no longer defined solely by visual identity—they are defined by <span className="text-[#011f18] underline decoration-[#00FFC2] decoration-4 underline-offset-4">experiences</span>. We turn static impressions into dynamic engagement assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-gray-200 shadow-2xl">
            <div className="bg-white p-14 border-r border-gray-100 group transition-colors hover:bg-[#F8FAFC]">
              <MousePointer2 className="text-emerald-500 mb-8" size={32} />
              <h4 className="text-6xl font-black tracking-tighter mb-4 italic">70%</h4>
              <p className="text-xs font-bold tracking-widest text-gray-400 leading-relaxed">
                Higher engagement compared to traditional static content systems.
              </p>
            </div>
            <div className="bg-emerald-500 p-14 flex flex-col justify-center border-r border-gray-100">
              <Zap className="text-white mb-8" size={32} />
              <h4 className="text-2xl font-black tracking-tighter mb-4 leading-none text-white">The heartbeat of growth strategy</h4>
              <p className="text-[11px] leading-relaxed font-bold opacity-70 tracking-wider text-white">
                Optimizing conversions, reducing bounce rates, and enhancing strategy outcomes.
              </p>
            </div>
            <div className="bg-white p-14 group transition-colors hover:bg-[#F8FAFC]">
              <Share2 className="text-emerald-500 mb-8" size={32} />
              <h4 className="text-xs font-black tracking-[0.2em] mb-4 ">Social synergy</h4>
              <p className="text-xs font-bold tracking-widest text-gray-400 leading-relaxed">
                Integrated with instagram and linkedin brand strategies for maximum recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology - Bright Contrast */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-emerald-500 tracking-tighter mb-6 ">Our methodology.</h2>
              <p className="text-gray-500 font-bold text-xs tracking-widest ">Bridging the lead funnel through interactive alpha tooling.</p>
            </div>
            <div className="h-[1px] flex-grow bg-gray-100 hidden lg:block mb-4 ml-12"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-gray-200">
            {[
              { title: "Configurators", label: "B2B tooling", bg: "bg-white" },
              { title: "Calculators", label: "Value engineering", bg: "bg-[#F8FAFC]" },
              { title: "Gamification", label: "Brand recall", bg: "bg-[#E6FFFA]" },
              { title: "Whitepapers", label: "Interactive alpha", bg: "bg-white" }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-12 border-r border-gray-200 last:border-r-0 group hover:bg-[#00FFC2] transition-all cursor-crosshair`}>
                <span className="text-[10px] font-black text-emerald-500 tracking-[0.3em] mb-10 block  group-hover:text-[#011f18]">{item.label}</span>
                <h3 className="text-3xl font-black tracking-tighter group-hover:italic group-hover:translate-x-2 transition-all">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Content Section - SEO Rich 700+ Words */}
      <section className="py-32 px-6 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <Cpu className="text-emerald-500" size={48} />
                <h3 className="text-4xl font-black tracking-tighter leading-none text-[#011f18] ">Ai-powered personalization</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium ">
                  Predictive analytics suggest content paths and dynamically adapt interfaces to provide personalized calls-to-action.
                </p>
                <div className="pt-8 border-t border-gray-200 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest ">
                    <Check size={14} className="text-emerald-500" /> 70% higher engagement
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest">
                    <Check size={14} className="text-emerald-500" /> Measurable roi tracking
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12 prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-2xl text-[#011f18] font-bold lowercase mb-8">
                In the digital age, where every scroll, click, and hover matters, brands are no longer defined solely by their visual identity—they are defined by the experiences they deliver.
              </p>

              <h4 className="text-[#011f18] text-xl font-black tracking-tight mb-4">The power of interactive design</h4>
              <p>
                Interactive assets are the heartbeat of modern digital marketing. Unlike traditional content, which simply communicates, interactive assets engage, educate, and persuade. Micro-interactions, dynamic infographics, and gamified experiences allow users to participate actively rather than passively.
              </p>

              <div className="bg-white border border-gray-200 p-10 my-10">
                <h4 className="text-emerald-500 text-sm font-black tracking-widest mb-6 ">B2B and consumer applications</h4>
                <p className="mb-6">
                  For b2b marketing, interaction assets serve a critical role in lead generation. Configurators, calculators, and interactive whitepapers communicate complex ideas efficiently, adding value to potential clients.
                </p>
                <p>
                  For consumer-facing brands, interactive experiences improve recall and engagement. Instagram and LinkedIn increasingly reward participatory content, boosting social media brand strategies.
                </p>
              </div>

              <h4 className="text-[#011f18] text-xl font-black tracking-tight mb-4">Data-driven design and analytics</h4>
              <p>
                Every interaction can be tracked, analyzed, and optimized. Marketing analytics insights and performance strategies inform design at a granular level, ensuring conversions and user engagement contribute to business goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="p-8 bg-emerald-50 border border-emerald-100">
                  <BarChart3 className="text-emerald-500 mb-4" />
                  <h5 className="font-black text-xs tracking-widest mb-2 ">Granular analytics</h5>
                  <p className="text-xs leading-relaxed  font-medium">Every interaction is tracked and optimized for maximum performance.</p>
                </div>
                <div className="p-8 bg-emerald-50 border border-emerald-100">
                  <Fingerprint className="text-emerald-500 mb-4" />
                  <h5 className="font-black text-xs tracking-widest mb-2 ">Conversion psychology</h5>
                  <p className="text-xs leading-relaxed  font-medium">Clicks and hovers contribute directly to overarching business objectives.</p>
                </div>
              </div>

              <h4 className="text-[#011f18] text-xl font-black tracking-tight mb-4">Building a cohesive brand experience</h4>
              <p>
                Interaction assets are most effective when aligned with the brand’s voice, identity, and positioning. Our approach combines brand identity design, storytelling marketing, and perception strategy to reinforce consistency across all touchpoints.
              </p>
              <p>
                Our holistic process includes understanding the customer journey, defining engagement goals, wireframing interactive flows, designing responsive visuals, and implementing robust tracking for ongoing optimization. Every asset is visually appealing and strategically potent, driving measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-end">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter mb-10 leading-[0.8] text-[#011f18] ">
                Join the <br/><span className="text-emerald-500">network.</span>
              </h2>
              <div className="flex flex-col gap-6 font-bold text-[11px] tracking-[0.3em] text-gray-400 ">
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-emerald-500 transition-colors"><Mail className="text-emerald-500" size={20}/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-emerald-500 transition-colors"><Phone className="text-emerald-500" size={20}/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-4 border-l-4 border-emerald-500 pl-6">
                    <MapPin className="text-emerald-500 shrink-0" size={24} />
                    <p className="leading-relaxed italic opacity-60">Islamabad, hq.</p>
                 </div>
              </div>
            </div>

            <div className="space-y-0">
               <div className="p-16 bg-[#F8FAFC] border border-gray-200">
                  <h5 className="font-black text-xs mb-6 tracking-[0.4em] flex items-center gap-4 ">
                    <Spline size={18} className="text-emerald-500"/> Interaction audit
                  </h5>
                  <p className="text-sm text-gray-500 font-bold leading-relaxed mb-12 italic sentence ">
                    Transform your digital presence into an interactive ecosystem that drives measurable growth.
                  </p>
                  <button className="w-full py-6 bg-[#011f18] text-white font-black text-[11px] tracking-[0.5em] hover:bg-emerald-500 transition-all flex items-center justify-center gap-4 shadow-xl ">
                    Sync your brand <ArrowUpRight size={18}/>
                  </button>
               </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-300 font-black tracking-[2em] ">
             <p>Blucom lab © 2026</p>
             <p className="hidden md:block">Strategic interaction systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractionAssetsLab;