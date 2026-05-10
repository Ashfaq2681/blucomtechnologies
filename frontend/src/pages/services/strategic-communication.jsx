import React from 'react';
import { 
  MessageSquare, 
  Layers, 
  UnfoldHorizontal, 
  BarChart3, 
  Workflow, 
  Zap, 
  Search, 
  Target, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone,
  ShieldCheck,
  Globe2,
  Mic2
} from 'lucide-react';

const StrategicCommunication = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* 1. HERO (The Voice) with Bright Gradient */}
      <section
  className="relative pt-32 pb-20 px-6"
  style={{ background: "linear-gradient(120deg, #E0FFF9 0%, #B8FFD6 100%)" }} // lighter gradient
>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-[#00AE80]"></div> {/* accent line stays bright */}
          <span className="text-[10px] font-black tracking-[0.5em] text-[#011f18]">
            Branding agency Islamabad
          </span>
        </div>
        <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-emerald-600">
          Strategic<br/>
          <span className="text-emerald-600">voice.</span>
        </h1>
      </div>
      <div className="text-right hidden md:block">
        <Mic2 size={120} className="text-gray-300 mb-4 ml-auto" />
        <p className="text-[10px] font-mono tracking-widest text-gray-900">Code: BLU-COMM-09</p>
      </div>
    </div>

    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-7">
        <p className="text-2xl md:text-3xl font-light leading-snug text-gray-700">
          In a world saturated with content, communication without strategy is <span className="font-black italic text-[#00AE80]">just noise.</span> We transform brand communication into a powerful business asset.
        </p>
      </div>
      <div className="md:col-span-5 pt-4">
        <p className="text-sm text-gray-900 mb-8 leading-relaxed">
          Our strategic communication services align your messaging with business objectives, ensuring every word, campaign, and interaction drives clarity, credibility, and conversion.
        </p>
        <button className="flex items-center gap-6 bg-[#00AE80] text-white px-8 py-4 font-black text-[10px] tracking-[0.3em] hover:bg-[#00FFC2] transition-colors">
          Start the dialogue <ArrowUpRight size={18}/>
        </button>
      </div>
    </div>
  </div>
</section>

      {/* 2. DEFINITION & LOGIC */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="relative">
            <div className="sticky top-20">
              <h2 className="text-4xl font-black mb-8 tracking-tighter">
                What is <span className="text-[#00AE80]">strategic communication?</span>
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-8">
                Strategic communication is the deliberate, data-driven approach to delivering the right message to the right audience at the right time—across the right channels. It bridges brand identity with execution, ensuring consistency and purpose across all touchpoints.
              </p>
              <div className="space-y-4">
                {["Consistent voice", "Audience alignment", "Platform strength", "Performance ROI"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-l-4 border-[#00AE80] pl-6 py-2 bg-white shadow-sm">
                    <span className="font-black text-xs tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-gray-100 p-12 border border-gray-200">
              <UnfoldHorizontal className="text-[#00AE80] mb-6" size={40} />
              <h4 className="text-xl font-black mb-4 tracking-tight text-[#00AE80]">Intentionality</h4>
              <p className="text-sm text-gray-900 leading-relaxed italic">
                Brands must go beyond visibility. They must communicate with intent. A refined digital marketing strategy ensures every message converts and resonates.
              </p>
            </div>
            <div className="bg-white p-12 border border-gray-200">
              <Layers className="text-[#00AE80] mb-6" size={40} />
              <h4 className="text-xl font-black mb-4 tracking-tight">The Bridge</h4>
              <p className="text-sm text-gray-900 leading-relaxed">
                Strategic communication builds a consistent voice that aligns with audience behaviors, enhancing performance marketing campaigns and brand recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">The methodology</h2>
            <div className="w-24 h-2 bg-[#00AE80] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            {[
              { icon: Search, title: "Audience intelligence", desc: "Understanding personas, behavioral patterns, market trends, and competitor messaging." },
              { icon: Workflow, title: "Messaging architecture", desc: "Defining core value propositions, brand tone, and narratives for consistency." },
              { icon: Target, title: "Channel integration", desc: "Aligning messaging across social, SEO, and paid media to reinforce brand story." },
              { icon: BarChart3, title: "Performance optimization", desc: "Tracking engagement and sentiment to refine messaging and maximize ROI." }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-12 group hover:bg-[#00AE80] transition-colors duration-500">
                <phase.icon className="mb-8 group-hover:text-white transition-colors" size={32} />
                <h3 className="font-black text-sm mb-6 group-hover:text-white">{`0${i+1}. ${phase.title}`}</h3>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT */}
      <section className="py-24 px-6 bg-[#00AE80] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">
              Why strategic <br/>communication <span className="text-white/90">matters</span>
            </h2>
            <div className="space-y-6">
              {[
                { t: "Clarity & consistency", d: "Unified voice across all touchpoints." },
                { t: "Stronger engagement", d: "Messaging that resonates with target audiences." },
                { t: "Higher conversions", d: "Alignment with conversion psychology for maximum impact." },
                { t: "Brand trust", d: "Credibility reinforced through consistent communication." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-black text-xs mb-2">{item.t}</h4>
                  <p className="text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video bg-white flex flex-col justify-center p-12 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-20"><Zap size={100}/></div>
             <p className="text-4xl font-black tracking-tighter leading-none mb-8 text-[#00AE80]">
               Scalable growth <br/>for the B2B funnel
             </p>
             <div className="w-16 h-1 bg-[#00AE80]"></div>
          </div>
        </div>
      </section>

      {/* 5. THE BLUCOM ADVANTAGE */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <Globe2 className="mx-auto text-[#00AE80] mb-8" size={80} />
          <h2 className="text-5xl font-black mb-12 tracking-tighter">The Blucom <span className="text-[#00AE80]">advantage</span></h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Insight-driven", desc: "Backed by analytics and deep market research." },
              { title: "Integrated alignment", desc: "Messaging connected across all digital platforms." },
              { title: "Conversion-focused", desc: "Designed to drive measurable, high-impact outcomes." }
            ].map((item, i) => (
              <div key={i} className="border-t-2 border-[#00AE80] pt-6">
                <h5 className="font-black text-xs mb-4 text-[#00AE80]">{item.title}</h5>
                <p className="text-xs text-gray-900 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <footer className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85]">
                Be heard, <br/><span className="text-[#00AE80]">understood.</span>
              </h2>
              <p className="text-gray-400 font-bold text-[10px] tracking-[0.4em] mb-8">Trusted branding agency Islamabad</p>
            </div>
            <div className="bg-white p-12 flex flex-col gap-6">
               <div className="flex items-center gap-4"><Mail className="text-[#00AE80]"/><span className="font-black text-xs">connect@blucomtechnologies.com</span></div>
               <div className="flex items-center gap-4"><Phone className="text-[#00AE80]"/><span className="font-black text-xs">+92-303-5907230 | +92-334-0011126</span></div>
               <div className="flex items-start gap-4">
                 <MapPin className="text-[#00AE80] shrink-0" />
                 <p className="text-[10px] font-bold text-gray-900 uppercase leading-relaxed">
                  Islamabad
                 </p>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 text-center">
            <p className="text-[10px] text-gray-900 font-black tracking-[1.5em]">Blucom Technologies © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT & SOCIAL SCHEMA */}
      <div className="hidden">
        <h1>Strategic communication services – Blucom Technologies | Branding agency Islamabad</h1>
        <p>In a world saturated with content, communication without strategy is just noise. At Blucom Technologies, a leading Branding Agency Islamabad, we transform brand communication into a powerful business asset. Our strategic communication services are designed to align your messaging with business objectives, ensuring every word, campaign, and interaction drives clarity, credibility, and conversion.</p>
        <p>Strategic communication enables brands to build a consistent and recognizable voice, align messaging with audience expectations, strengthen communication strategy, and enhance performance marketing campaigns. Our methodology includes audience & market intelligence, messaging architecture, channel integration, and performance optimization.</p>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Strategic Communication",
            "description": "Blucom Technologies provides expert Strategic Communication services integrating brand messaging, digital marketing solutions, and performance marketing to drive engagement and business growth.",
            "provider": { "@type": "Organization", "name": "Blucom Technologies" },
            "keywords": "Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, strategic communication, performance marketing, online marketing strategy, B2B marketing insights, digital marketing growth strategy, brand communication strategy",
            "url": "https://www.theblucom.com/services/strategic-communication",
            "areaServed": "PK",
            "datePublished": "2026-03-18"
          })}
        </script>
      </div>
    </div>
  );
};

export default StrategicCommunication;