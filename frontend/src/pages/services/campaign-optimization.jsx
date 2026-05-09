import React from 'react';
import { 
  Zap, 
  RotateCcw, 
  BarChart3, 
  Target, 
  Cpu, 
  Users, 
  Layers, 
  ArrowRightLeft, 
  Gauge,
  MousePointerClick,
  Mail,
  MapPin,
  Phone,
  Maximize
} from 'lucide-react';

const CampaignOptimization = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. HERO SECTION (Bright Gradient) */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFC2]/30 via-[#00AE80]/20 to-[#E6FFF9]/10 opacity-80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#00AE80] text-[#00AE80] text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                <Gauge size={14} /> Optimization protocol active
              </div>
              <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-8">
                Maximize<br/>
                <span className="text-[#00AE80]">the ROI</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-10">
                Launching a campaign is just the beginning. At our <span className="font-bold">Branding Agency Islamabad</span>, we refine campaigns so every touchpoint converts and every marketing dollar drives measurable results.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#011f18] text-white px-10 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-[#00AE80] transition-all flex items-center gap-3">
                  Optimize my campaign <Zap size={16} />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-6">
                <div className="p-8 bg-[#00AE80] shadow-lg cursor-default">
                  <h3 className="text-4xl font-black mb-2 tracking-tighter italic text-white">Never static</h3>
                  <p className="text-xs font-bold tracking-widest opacity-80 leading-relaxed text-white">
                    Campaign optimization is a continuous cycle of monitoring, analyzing, and refining for maximum performance across all channels.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-200 text-center">
                    <span className="block text-2xl font-black mb-1">94%</span>
                    <span className="text-[9px] tracking-widest opacity-60">accuracy</span>
                  </div>
                  <div className="p-6 bg-white border border-gray-200 text-center">
                    <span className="block text-2xl font-black mb-1">Real-time</span>
                    <span className="text-[9px] tracking-widest opacity-60">sync frequency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Granular insights */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
               The power of <span className="text-[#00AE80]">granular insights</span>
             </h2>
             <p className="text-gray-400 text-xs font-bold tracking-widest max-w-xs mt-6 md:mt-0">
               We prioritize performance over visibility, ensuring impact at every interaction.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: MousePointerClick, title: "Click-through", desc: "Refining creative elements to drive higher interaction rates and engagement." },
              { icon: ArrowRightLeft, title: "Conversion", desc: "Optimizing the path from first touch to loyal customer acquisition." },
              { icon: Target, title: "Cost-per-acquisition", desc: "Granular strategy to lower acquisition costs while scaling campaigns." },
              { icon: BarChart3, title: "Engagement", desc: "Analyzing qualitative and quantitative metrics to align with business goals." }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                 <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-[#00AE80] mb-6 group-hover:bg-[#00AE80] group-hover:text-white transition-colors">
                    <item.icon size={24} />
                 </div>
                 <h4 className="font-black text-sm tracking-tighter mb-4">{item.title}</h4>
                 <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Methodology (bright white/gray/green contrast) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-[#011f18]">
                Integrated <span className="text-[#00AE80]">methodology</span>
              </h2>
              <p className="text-gray-600 leading-relaxed font-light">
                Insights from campaigns inform social media content strategies, email targeting, and website UX. We adopt a digital marketing growth strategy that leverages A/B testing, multivariate experiments, and real-time dashboards to continuously optimize campaigns for performance.
              </p>
              <div className="grid gap-4">
                 {["A/B Testing", "Multivariate Testing", "Real-Time Dashboards"].map((tech, i) => (
                   <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-200 cursor-pointer">
                      <div className="w-2 h-2 bg-[#00AE80]"></div>
                      <span className="font-black text-xs tracking-widest">{tech}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="bg-white p-12 text-[#011f18] border border-gray-200">
               <Cpu className="text-[#00AE80] mb-8" size={48} />
               <h3 className="text-3xl font-black mb-6 tracking-tighter italic">AI-powered refinement</h3>
               <p className="text-sm text-gray-500 leading-relaxed mb-8">
                 Predictive analytics allow us to anticipate audience needs, personalize content, and optimize marketing campaigns in real time, ensuring measurable growth.
               </p>
               <div className="p-6 bg-gray-100 border-l-4 border-[#00AE80]">
                  <p className="text-[10px] font-black tracking-widest text-[#00AE80]">Dynamic feedback loop enabled</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. B2B vs B2C */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-1 bg-gray-100 border border-gray-100">
           <div className="bg-white p-12 hover:bg-[#E6FFF9] transition-colors">
              <Layers className="text-[#00AE80] mb-6" />
              <h4 className="text-xl font-black mb-4 tracking-tighter">B2B lead generation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Optimizing long sales cycles by combining content marketing, SEO, and paid media to nurture multiple decision-makers.
              </p>
           </div>
           <div className="bg-white p-12 hover:bg-[#E6FFF9] transition-colors">
              <Users className="text-[#00AE80] mb-6" />
              <h4 className="text-xl font-black mb-4 tracking-tighter">B2C amplification</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Rapid engagement, personalization, and viral amplification for emotional and cognitive resonance.
              </p>
           </div>
        </div>
      </section>

      {/* 5. CONTACT & FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                Stay ahead of <span className="text-[#00AE80]">the curve</span>
              </h2>
              <p className="text-gray-400 uppercase text-[10px] font-black tracking-[0.4em] mb-12">Trusted Branding Agency Islamabad</p>
              <div className="flex flex-col gap-6 font-bold text-xs tracking-widest">
                 <p className="flex items-center gap-4"><Mail className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4"><Phone className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</p>
              </div>
            </div>
            
            <div className="lg:w-1/3">
               <div className="flex items-start gap-4 mb-10 opacity-60">
                  <MapPin className="text-[#00AE80] shrink-0" />
                  <p className="text-[10px] font-black leading-relaxed tracking-widest">Islamabad</p>
               </div>
               <div className="border border-gray-200 p-8 group hover:bg-[#00AE80] hover:text-white transition-all">
                  <h5 className="font-black text-xs mb-4">Post-campaign analysis</h5>
                  <p className="text-[10px] opacity-60 mb-6">Creating a feedback loop that maximizes long-term growth.</p>
                  <button className="flex items-center gap-2 font-black text-[#00AE80] text-[10px] uppercase">Learn more <Maximize size={14}/></button>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 text-center text-[10px] text-gray-500 font-black tracking-[1.5em]">
             Blucom Technologies © 2026
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO & Social Schema */}
      <div className="hidden">
        <h1>Campaign Optimization – Blucom Technologies | Branding Agency Islamabad</h1>
        <p>
          Campaign optimization transforms digital marketing campaigns into measurable growth engines. At our Branding Agency Islamabad, we combine predictive analytics, real-time dashboards, and AI-powered refinement to improve ROI, enhance audience targeting, and ensure every campaign touchpoint converts. From B2B lead generation to B2C amplification, granular insights and data-driven strategies maximize efficiency and customer engagement.
        </p>
        <p>
          Advanced AI tools allow us to anticipate audience behavior, personalize content, and optimize campaigns continuously. Our methodology includes A/B testing, multivariate testing, and dynamic feedback loops to refine creative, targeting, and engagement. Social media, email campaigns, and UX improvements are integrated for multi-channel synergy. Analytics, performance marketing, and content marketing insights inform actionable strategies that strengthen brand authority and accelerate growth.
        </p>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Campaign Optimization",
          "description": "In-depth content on campaign optimization, analytics, AI refinement, and performance marketing by Branding Agency Islamabad.",
          "keywords": "Campaign Optimization, Branding Agency Islamabad, digital marketing agency, AI marketing, B2B marketing, B2C growth strategy, performance marketing, social media analytics, digital marketing growth",
          "robots": "index, follow"
        })}
        </script>
      </div>
    </div>
  );
};

export default CampaignOptimization;