import React from 'react';
import { 
  Eye, 
  Sparkles, 
  Share2, 
  TrendingUp, 
  Search, 
  Tv, 
  Megaphone, 
  Heart,
  Globe,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Maximize2
} from 'lucide-react';

const BrandAwarenessPage = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-Emerald-500 overflow-x-hidden">

      {/* SEO and JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Brand Awareness",
          description: "Blucom Technologies provides expert Brand Awareness services combining customer insights, digital marketing solutions, and multi-channel campaigns to optimize visibility, engagement, and growth.",
          provider: {
            "@type": "Organization",
            name: "Blucom Technologies"
          },
          keywords: "Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, brand awareness, performance marketing, online marketing strategy, B2B marketing insights, digital brand growth, content marketing trends",
          url: "https://www.theblucom.com/services/brand-awareness",
          areaServed: "PK",
          datePublished: "2026-03-18"
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-gradient-to-r from-gray-100 via-gray-100 to-emerald-100 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center z-10">
          <div>
            <div className="inline-block px-4 py-1 border border-emerald-500  text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
              Branding Agency Islamabad
            </div>
            <h1 className="text-emerald-500 text-7xl md:text-[7rem] font-black leading-[0.8] tracking-tighter mb-10">
              Beyond<br/>
              <span className="text-emerald-500">Seen</span>
            </h1>
            <p className=" text-xl md:text-2xl text-gray-900 font-light max-w-lg leading-relaxed mb-12">
              Visibility is the currency of the modern market. We create robust brand awareness strategies that ensure your audience doesn't just notice you—they remember your brand and story.
            </p>
            <div className="flex gap-6">
              <button className="bg-gray-500 text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-gray-400 transition-all">
                The Awareness Audit
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 opacity-30 blur-2xl animate-pulse"></div>
            <div className="relative aspect-square bg-[#00AE80] flex items-center justify-center p-20 overflow-hidden group">
              <Eye size={200} className="text-white group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between text-white font-black text-[10px] uppercase tracking-widest">
                <span>Brand Recall</span>
                <span>Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Brand Awareness */}
      <section className="py-32 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6 leading-snug">Understanding brand awareness</h2>
              <p className="text-gray-900 text-sm leading-relaxed mb-6">
                Brand awareness is the degree to which consumers recognize and recall a brand. It is the foundation of loyalty, trust, and preference. Strong awareness ensures your audience not only knows your brand exists but understands its values, mission, and unique proposition.
              </p>
              <div className="w-20 h-1 bg-[#00AE80]"></div>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "In a digital ecosystem flooded with thousands of messages daily, a strong awareness strategy ensures your audience understands your unique reason for being."
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { t: "Recognition", d: "Ease of identification among competitors." },
                  { t: "Recall", d: "Spontaneous brand surfacing when a category is mentioned." },
                  { t: "Engagement", d: "Depth of interaction across content, campaigns, and touchpoints." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="font-black text-[#00AE80] mb-2 uppercase text-xs tracking-widest">{item.t}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-[#011f18] transition-colors">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6 bg-gray-50 text-[#011f18]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Our methodology</h2>
          <p className="text-[#00AE80] font-mono text-sm italic tracking-widest mb-12">
            Creativity + analytical rigor
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Search, title: "Strategic research", body: "We analyze audience behavior, competitors, and market trends to identify opportunities to elevate your brand presence." },
              { icon: Share2, title: "Multi-channel campaigns", body: "Social media, content marketing, SEO, and paid campaigns integrated to maximize reach and engagement." },
              { icon: Sparkles, title: "Creative storytelling", body: "Crafting narratives that resonate, build emotional connections, and reinforce brand identity." },
              { icon: TrendingUp, title: "Continuous measurement", body: "Analytics and KPI tracking for engagement, reach, impressions, and performance marketing ROI." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200 flex flex-col items-start text-left hover:bg-[#00AE80] hover:text-white transition duration-500">
                <item.icon size={32} className="text-[#00AE80] mb-4 group-hover:text-white" />
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-sm text-gray-900 group-hover:text-white leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-black mb-10">Strategic growth & <span className="text-[#00AE80]">tangible impact</span></h3>
            <p className="text-gray-900 text-sm leading-relaxed mb-10">
              Investing in brand awareness is an asset. Brands with top-of-mind awareness experience higher engagement, loyalty, and conversions, driving measurable business growth.
            </p>
            <button className="flex items-center gap-4 font-black uppercase text-[10px] tracking-widest text-[#011f18] group">
              Explore case studies
              <div className="w-10 h-10 bg-[#00AE80] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <ArrowRight size={16}/>
              </div>
            </button>
          </div>
          <div className="space-y-6">
            {[
              "Increased market visibility",
              "Trust and brand authority",
              "Higher engagement across channels",
              "Lower customer acquisition costs",
              "Enhanced brand storytelling"
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-center bg-white p-6 border-b-2 border-transparent hover:border-[#00AE80] transition-all">
                <Heart className="text-[#00AE80] shrink-0" size={18} />
                <span className="text-[11px] font-black text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>Emerald-500
      </section>

      {/* Blucom Advantage Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Maximize2 className="mx-auto text-gray-200 mb-10" size={60} />
          <h2 className="text-5xl md:text-7xl font-black mb-10">Why choose <span className="text-[#00AE80]">Blucom?</span></h2>
          <div className="grid md:grid-cols-3 gap-12 text-left mt-20">
            {[
              { title: "Data-driven insights", desc: "Customer behavior and market trends guide every strategy." },
              { title: "Multi-channel expertise", desc: "Social media, content, SEO, and paid campaigns for maximum reach." },
              { title: "Creative excellence", desc: "Storytelling and brand communication leaving lasting impact." }
            ].map((item, i) => (
              <div key={i}>
                <h5 className="font-black text-xs mb-4 tracking-widest text-[#00AE80]">{item.title}</h5>
                <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-24 px-6 bg-[#011f18] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-none">
              Stay top <br/><span className="text-Emerald-500">of mind.</span>
            </h2>
            <div className="flex flex-col gap-4 text-sm font-bold opacity-80 uppercase tracking-widest">
              <p className="flex items-center gap-3"><Mail className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
              <p className="flex items-center gap-3"><Phone className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</p>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-12">
            <div className="flex gap-4 items-start">
              <MapPin className="text-[#00AE80] shrink-0" />
              <p className="text-[10px] text-gray-400 font-black tracking-widest">Islamabad</p>
            </div>
            <div className="border-t border-white/10 pt-10 flex gap-4">
              <div className="w-10 h-10 border flex items-center justify-center hover:border-Emerald-500 transition-colors"><Globe size={16}/></div>
              <div className="w-10 h-10 border flex items-center justify-center hover:border-Emerald-500 transition-colors"><Megaphone size={16}/></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandAwarenessPage;