import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Sparkles, PenTool, Users, Search, Share2, Bookmark,
  Mail, MapPin, Phone, CheckCircle2, ArrowUpRight, MousePointerClick,
  BarChart3, Layers, Zap
} from 'lucide-react';

const ContentMarketingEditorial = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">
      
      {/* SEO Metadata */}
      <Helmet>
        <title>Strategic content marketing & SEO services in Islamabad | Blucom</title>
        <meta name="description" content="Unlock growth with premium content marketing strategy. We specialize in B2B storytelling, AI-driven SEO, and high-converting narrative systems designed for modern brands in Islamabad." />
        <link rel="canonical" href="https://www.blucomtechnologies.com/services/content-marketing" />
      </Helmet>

      {/* 1. Hero section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-gradient-to-r from-[#CFFFEA] via-[#B8FFD3] to-[#E0FFEC]">
        <div className="max-w-7xl mx-auto relative z-10 text-[#011f18]">
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md mb-8 border border-white/20">
              <Sparkles size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-wide uppercase">Volume 2026: the content issue</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Command <br/>
              <span className="text-emerald-500 opacity-80 underline decoration-[#00FFC2] decoration-4 underline-offset-8">attention.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed italic border-l-4 border-[#00AE80] pl-6 py-2">
              In the modern ecosystem, content is the center stage of brand growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-white/20">
            <div className="lg:col-span-2 bg-white p-12 flex flex-col justify-between relative text-[#011f18]">
              <div>
                <h3 className="text-3xl font-bold mb-6">The science and art of narrative</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  At our branding agency in Islamabad, we combine data-driven insights with engaging storytelling to create content ecosystems that guide users from discovery to conversion, achieving up to 6x higher conversion rates than traditional approaches.
                </p>
              </div>
              <div className="mt-12 flex items-end justify-between">
                <button className="bg-[#00AE80] text-white px-10 py-4 font-bold text-xs tracking-widest hover:bg-[#011f18] transition-all flex items-center gap-3">
                  Read our strategy <ArrowUpRight size={18} />
                </button>
                <PenTool size={80} className="text-[#00AE80]/10" />
              </div>
            </div>

            <div className="bg-[#E6FFE8] p-10 text-[#011f18] flex flex-col justify-center text-center border-l border-gray-200">
              <span className="text-[10px] font-bold tracking-wide uppercase opacity-70 mb-4">conversion lift</span>
              <h4 className="text-7xl font-bold mb-2">6.0x</h4>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                Better performance than traditional ads alone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our methodology */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-4">Our methodology</h2>
            <p className="text-gray-500 max-w-2xl">
              We replace dark traditional frameworks with light, agile, high-contrast content systems designed to maximize engagement and readability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            {[
              { icon: BarChart3, title: "Discovery and insights", color: "bg-white" },
              { icon: Layers, title: "Narrative architecture", color: "bg-[#E2E8F0]" },
              { icon: Zap, title: "Rapid deployment", color: "bg-white" }
            ].map((step, i) => (
              <div key={i} className={`${step.color} p-12 flex flex-col gap-6 border-r border-gray-200 last:border-r-0`}>
                <step.icon size={40} className="text-[#00AE80]" />
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We leverage analytics, research, and trend insights before creating a single piece of content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic pillars */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6">Strategic planning</h2>
                <p className="text-sm text-gray-500 font-medium leading-relaxed uppercase tracking-wider">
                  A strategy is only as strong as its execution across the buyer journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-0 border border-gray-100">
              {[
                { icon: Users, title: "B2b content marketing", desc: "Focusing on thought leadership, case studies, and authority-building content that nurtures leads through the b2b marketing funnel." },
                { icon: Search, title: "Seo content strategy", desc: "Optimized narratives that enhance search engine rankings and drive organic traffic growth using technical seo optimization." },
                { icon: Share2, title: "Multi-channel delivery", desc: "Coordinating linkedin marketing for b2b and instagram marketing strategy to ensure messaging is relevant and timely." },
                { icon: Bookmark, title: "Storytelling in marketing", desc: "Humanizing your brand through blog posts and whitepapers to create lasting emotional connections and brand trust." }
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

      {/* 4. Long-form SEO content */}
      <section className="py-32 px-6 bg-[#F8FAFC] border-t border-gray-200">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-16">
      
      {/* Left Column: Sticky Title - Sentence Case */}
      <div className="lg:w-1/3">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-[#011f18] mb-8">
            Comprehensive <br />
            <span className="text-[#00AE80]">content systems</span>
          </h2>
          <div className="h-1 w-20 bg-[#00AE80] mb-8"></div>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            At our branding agency in Islamabad, content is the pulse of modern digital identity. To succeed in 2026, brands must navigate the complex attention economy where every second of engagement is a hard-won asset.
          </p>
        </div>
      </div>

      {/* Right Column: Grid Content - Sentence Case */}
      <div className="lg:w-2/3 space-y-0">
        
        {/* Intro Block */}
        <div className="bg-white p-10 border border-gray-200 border-b-0">
          <p className="text-xl text-[#011f18] leading-relaxed italic">
            "Our strategy is built on three pillars: relevance, authority, and conversion. We architect content ecosystems that guide a user from initial discovery to final purchase."
          </p>
        </div>

        {/* Feature Grid - Straight Boxes, Lighter Colors */}
        <div className="grid md:grid-cols-2">
          
          <div className="bg-white p-10 border border-gray-200 hover:bg-[#F1F5F9] transition-colors group">
            <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">01 / Strategy</span>
            <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
              The evolution of B2B content marketing
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Today's B2B buyers demand high-value insights, not generic AI filler. Thought leadership marketing involves deep-dive research, whitepapers, and case studies that demonstrate expertise.
            </p>
          </div>

          <div className="bg-[#E2E8F0]/30 p-10 border border-gray-200 border-l-0 hover:bg-white transition-colors group">
            <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">02 / SEO</span>
            <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
              The science of SEO content strategy
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Effective SEO is about topical authority, not keyword stuffing. Google prioritizes content demonstrating E-E-A-T: experience, expertise, authoritativeness, and trustworthiness.
            </p>
          </div>

          <div className="bg-[#E2E8F0]/30 p-10 border border-gray-200 border-t-0 hover:bg-white transition-colors group">
            <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">03 / Intelligence</span>
            <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
              AI-powered marketing and future trends
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI content tools amplify human creativity. Predictive analytics identify optimal headlines, while scalable personalization tailors messaging across demographics.
            </p>
          </div>

          <div className="bg-white p-10 border border-gray-200 border-t-0 border-l-0 hover:bg-[#F1F5F9] transition-colors group">
            <span className="text-[#00AE80] font-mono text-xs mb-4 block tracking-widest uppercase">04 / Performance</span>
            <h3 className="text-[#011f18] text-xl font-black mb-4 group-hover:text-[#00AE80] transition-colors">
              Conversion psychology and performance metrics
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              By applying conversion psychology, every element—from CTAs to landing pages—is crafted to drive measurable growth. Marketing analytics track every interaction for clear ROI.
            </p>
          </div>

        </div>

        {/* Final Conclusion Block */}
        <div className="bg-[#00AE80] p-12 text-white">
          <p className="text-lg font-bold leading-relaxed">
            Ultimately, content builds trust. Consistent value transforms your audience's perception from vendor to partner. Our branding agency in Islamabad helps you establish that bridge through superior content marketing and strategic digital marketing solutions.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* 5. Footer */}
      <footer className="py-24 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-bold mb-10 leading-[0.8] text-[#011f18]">
                Be <br/><span className="text-[#00AE80]">Read.</span>
              </h2>
              <div className="flex flex-col gap-5 font-bold text-[11px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><Mail className="text-[#00AE80]" size={18}/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18]"><Phone className="text-[#00AE80]" size={18}/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-4 border-l-2 border-[#00AE80] pl-6 uppercase">
                    <MapPin className="text-[#00AE80] shrink-0" size={20} />
                    <p className="leading-relaxed">Islamabad.</p>
                 </div>
              </div>
            </div>
            <div className="bg-[#F1F5F9] p-12 border border-gray-200">
              <h5 className="font-bold text-xs mb-4 tracking-widest">Connect your message</h5>
              <p className="text-xs text-gray-500 font-bold leading-relaxed mb-8 italic">
                Transform insights into compelling narratives. Ensure content is not just consumed but remembered.
              </p>
              <button className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#00AE80] group underline underline-offset-4">
                Start a content audit <MousePointerClick size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-300 font-bold tracking-[1em]">
             <p>Blucom Editorial © 2026</p>
             <p className="hidden md:block">Strategic content systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentMarketingEditorial;