import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Fingerprint, 
  Navigation2, 
  Layers, 
  Zap, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  MousePointer2,
  Mail,
  MapPin,
  Phone,
  Quote,
  Activity
} from 'lucide-react';

const ImpactMeasurement = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 bg-gradient-to-tr from-[#00FFC2]/30 to-[#00AE80]/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E6FFF9] border border-[#00AE80]/30 px-4 py-2 mb-8">
              <Activity size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-[0.3em] text-[#00AE80]">Branding agency Islamabad</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
              Beyond the <br/>
              <span className="text-[#00AE80]">impression.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed mb-10 max-w-xl">
              Success is no longer measured solely by clicks. True success hinges on <span className="font-bold underline decoration-[#00FFC2] decoration-4">impact measurement</span> — quantifying how digital initiatives influence growth, audience perception, and revenue.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="bg-[#011f18] text-white px-10 py-4 font-black text-[10px] tracking-widest hover:bg-[#00AE80] transition-all flex items-center gap-3">
                 Request an impact audit <Navigation2 size={16} />
               </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#00FFC2]/20 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white border border-gray-200 p-10 shadow-md space-y-8">
               <div className="flex justify-between items-center">
                  <span className="font-black text-xs tracking-widest text-gray-900 italic">ROI correlation</span>
                  <div className="w-12 h-12 bg-[#00AE80] flex items-center justify-center text-white"><TrendingUp size={20}/></div>
               </div>
               <h3 className="text-5xl font-black text-[#011f18]">+30%</h3>
               <p className="text-xs text-gray-400 leading-relaxed tracking-widest">
                 Higher ROI reported by companies leveraging <span className="text-[#00AE80]">advanced marketing analytics</span> versus traditional reporting.
               </p>
               <div className="h-[1px] w-full bg-gray-200"></div>
               <span className="block text-[9px] font-bold text-gray-400 italic">*Source: HubSpot research analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIGGING DEEPER SECTION */}
      <section className="py-32 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Digging <span className="text-[#00AE80]">deeper</span></h2>
          <p className="text-gray-900 text-lg leading-relaxed mb-16 italic">
            "While many agencies focus on vanity metrics like likes and shares, we analyze lead generation efficiency, conversion rates, audience engagement quality, and retention metrics."
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { t: "Attribution", d: "Understanding exactly which channels contribute to brand engagement and conversions." },
              { t: "Performance", d: "Evaluating CPA, ROAS, and campaign efficiency across paid and organic channels." },
              { t: "Sentiment", d: "Leveraging social listening to assess brand perception, audience feedback, and trust levels." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                 <div className="w-8 h-8 bg-[#00AE80] text-white font-black flex items-center justify-center text-xs">{i+1}</div>
                 <h4 className="font-black text-sm tracking-tighter">{item.t}</h4>
                 <p className="text-xs text-gray-900 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="bg-white p-12 shadow-md border border-gray-200">
                <Quote className="text-[#00AE80] mb-8" size={48} />
                <h3 className="text-3xl font-black mb-8 tracking-tight leading-tight">
                  Real-world impact: <br/><span className="text-[#00AE80]">Islamabad enterprise study</span>
                </h3>
                <p className="text-gray-900 text-sm leading-relaxed mb-10">
                  By implementing our impact measurement framework, we identified that 60% of leads originated from a single channel, while email nurturing drove a 25% conversion increase. Reallocation resulted in a <span className="font-black text-[#011f18]">45% ROI increase</span> within 90 days.
                </p>
                <div className="flex items-center gap-6">
                   <div className="text-center">
                      <span className="block text-2xl font-black text-[#00AE80]">45%</span>
                      <span className="text-[9px] font-bold tracking-widest text-gray-900">ROI growth</span>
                   </div>
                   <div className="w-px h-10 bg-gray-200"></div>
                   <div className="text-center">
                      <span className="block text-2xl font-black text-[#00AE80]">3mo</span>
                      <span className="text-[9px] font-bold tracking-widest text-gray-900">duration</span>
                   </div>
                </div>
             </div>
             
             <div className="text-[#011f18] lg:pl-10 space-y-8">
                {[
                  { icon: Zap, title: "AI analytics", desc: "Predictive marketing models and real-time dashboards for accurate decisions." },
                  { icon: Layers, title: "B2B automation", desc: "Streamlining follow-ups and nurturing high-quality prospects for measurable growth." },
                  { icon: ShieldCheck, title: "Trust building", desc: "Going beyond numbers to reflect customer sentiment and brand perception." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                     <item.icon className="text-[#00AE80] shrink-0" size={28}/>
                     <div>
                        <h5 className="font-black text-xs tracking-widest mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-900 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* B2B ADVANTAGE SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-black leading-none tracking-tighter">The B2B <span className="text-[#00AE80]">growth strategy</span></h2>
            <p className="text-gray-900 max-w-sm text-xs font-bold tracking-widest leading-relaxed">
              We translate analytics into insights that guide decision-making, optimize resource allocation, and strengthen your competitive positioning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
             {[
               { t: "Funnel optimization", d: "Ensuring every touchpoint captures high-quality leads and converts effectively." },
               { t: "Revenue strategy", d: "Translating performance data into measurable business value and ROI improvements." },
               { t: "Market positioning", d: "Using brand measurement to strengthen competitive standing and perception." }
             ].map((box, i) => (
               <div key={i} className="bg-gray-50 p-12 border border-gray-200 hover:bg-[#E6FFF9] transition-colors">
                  <MousePointer2 className="mb-6 text-[#00AE80]" />
                  <h4 className="font-black text-sm mb-4 tracking-tighter">{box.t}</h4>
                  <p className="text-xs text-gray-900 leading-relaxed">{box.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-24 px-6 bg-[#011f18] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-6xl font-black leading-[0.8] tracking-tighter mb-10">
                Map your <span className="text-emerald-500">impact</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-[#00AE80] tracking-widest">Connect</span>
                    <p className="text-xs font-bold flex items-center gap-2 opacity-80"><Mail size={14}/> connect@blucomtechnologies.com</p>
                    <p className="text-xs font-bold flex items-center gap-2 opacity-80"><Phone size={14}/> +92-303-5907230 | +92-334-0011126</p>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-[#00AE80] tracking-widest">Location</span>
                    <p className="text-[10px] uppercase font-bold opacity-40 leading-relaxed">Islamabad</p>
                 </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 text-center">
               <h4 className="text-xl font-black mb-6 tracking-tighter italic text-emerald-500">Ready to go deeper?</h4>
               <p className="text-xs text-gray-400 tracking-widest mb-10 leading-relaxed">Join 50+ enterprises using data-driven narrative strategies.</p>
               <input type="email" placeholder="Your Business Email" className="w-full bg-white/10 border border-white/20 px-8 py-4 mb-4 text-xs font-bold placeholder:text-gray-900 focus:outline-none focus:border-[#00FFC2]" />
               <button className="w-full bg-gray-600 text-gray-300 py-4 font-black text-[12px] tracking-widest hover:bg-gray-400 transition-colors">Subscribe for Insights</button>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[1em] text-gray-900">
             <p>Blucom Technologies © 2026</p>
             <p>Data narrative division</p>
          </div>
        </div>
      </footer>

      {/* SEO & Social Schema */}
      <div className="hidden">
        <h1>Impact Measurement Services | Blucom Technologies | Branding Agency Islamabad</h1>
        <p>In today’s rapidly evolving digital landscape, the success of a brand is measured by true impact, not vanity metrics. At Blucom Technologies, our branding agency Islamabad transforms raw data into actionable insights, driving performance, ROI, and growth across digital channels. With methodologies like AI analytics, B2B automation, sentiment analysis, and predictive marketing dashboards, we empower brands to make informed decisions, optimize campaigns, and strengthen customer relationships. Companies leveraging advanced analytics report 20-30% higher ROI. Our frameworks allow B2B brands to optimize lead generation funnels, enhance automation, and achieve measurable revenue growth within months. Impact measurement informs strategy, marketing, and brand communications, turning insights into tangible business results.</p>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Impact Measurement",
            "description": "Blucom Technologies provides expert impact measurement services, transforming digital marketing data into actionable insights for growth and ROI optimization.",
            "provider": {
              "@type": "Organization",
              "name": "Blucom Technologies",
              "url": "https://www.blucomtechnologies.com",
              "logo": "https://www.blucomtechnologies.com/logo.png"
            },
            "serviceType": "Digital Marketing Analytics & Impact Measurement",
            "keywords": "Branding Agency Islamabad, digital marketing agency, digital marketing services, performance marketing, B2B marketing insights, digital brand growth",
            "url": "https://www.blucomtechnologies.com/services/impact-measurement"
          })}
        </script>
      </div>

    </div>
  );
};

export default ImpactMeasurement;