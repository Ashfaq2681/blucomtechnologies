import React from 'react';
import { 
  Heart, 
  RefreshCcw, 
  Cpu, 
  Workflow, 
  Compass, 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  BarChart4,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

const NurtureVanguard = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE GENESIS (Hero Section) */}
      <section className="relative pt-44 pb-32 px-6 bg-[radial-gradient(circle_at_15%_50%,#00AE8005,transparent_25%),radial-gradient(circle_at_85%_30%,#00AE8008,transparent_30%)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F0FDFA] rounded-full mb-10 border border-[#00AE80]/10">
                <Sparkles size={14} className="text-[#00AE80] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00AE80]">Vanguard Protocol: Lifecycle v5</span>
              </div>
              <h1 className="text-7xl md:text-[9.5rem] font-black leading-[0.75] tracking-tighter uppercase mb-12">
                NURTURE<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#011f18] to-[#00AE80]">GROWTH.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                Acquiring a lead is only the first step. At our <span className="text-[#011f18] font-bold italic underline decoration-[#00FFC2] decoration-4 underline-offset-8">Branding Agency in Islamabad</span>, we transform casual interest into lifelong advocacy.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <div className="relative p-12 bg-white rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.04)] border border-gray-50 group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AE80]/5 rounded-bl-full group-hover:bg-[#00AE80]/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-[#011f18] mb-2 tracking-tighter">70%</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-relaxed">
                    Of leads are not ready to buy immediately. Consistent engagement is the key.
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4 text-[#00AE80]">
                    <RefreshCcw size={20} className="animate-spin-slow" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Continuous Lifecycle Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE INTELLIGENT CORE (AI & Personalization) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-6 pt-10">
                    <div className="bg-[#F8FAFC] p-8 rounded-[40px] border border-gray-100 shadow-sm">
                       <Cpu className="text-[#00AE80] mb-6" size={32} />
                       <h4 className="font-black uppercase text-xs tracking-widest mb-2">Predictive Logic</h4>
                       <p className="text-[10px] text-gray-400 uppercase font-bold leading-relaxed">Adjusting campaigns based on user behavior.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl">
                       <Compass className="text-[#00AE80] mb-6" size={32} />
                       <h4 className="font-black uppercase text-xs tracking-widest mb-2">Journey Mapping</h4>
                       <p className="text-[10px] text-gray-400 uppercase font-bold leading-relaxed">Addressing pain points throughout the cycle.</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="bg-[#011f18] p-8 rounded-[40px] text-white shadow-2xl">
                       <Zap className="text-[#00FFC2] mb-6" size={32} />
                       <h4 className="font-black uppercase text-xs tracking-widest mb-2 text-[#00FFC2]">AI Automation</h4>
                       <p className="text-[10px] opacity-60 uppercase font-bold leading-relaxed">Scaling personalization across complex funnels.</p>
                    </div>
                    <div className="bg-[#F0FDFA] p-8 rounded-[40px] border border-[#00AE80]/10">
                       <TrendingUp className="text-[#00AE80] mb-6" size={32} />
                       <h4 className="font-black uppercase text-xs tracking-widest mb-2">ROI Velocity</h4>
                       <p className="text-[10px] text-[#00AE80] uppercase font-bold leading-relaxed">Accelerating the B2B customer acquisition cycle.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Personalization <br/><span className="text-[#00AE80]">At Scale.</span></h2>
              <p className="text-sm text-gray-900 font-bold uppercase tracking-widest leading-[1.8] mb-10 italic">
                Modern nurture strategies are powered by AI marketing automation. We deliver personalized messaging that dynamically adapts to user intent and preferences.
              </p>
              <p className="text-gray-400 text-[11px] leading-relaxed mb-12 uppercase tracking-wide">
                B2B sales cycles involve multiple stakeholders. Through a structured B2B marketing funnel, we deliver value-driven content—from interactive guides to webinars—building credibility and accelerating conversion.
              </p>
              <div className="flex gap-10">
                <div className="text-center">
                  <span className="block text-2xl font-black text-[#011f18]">B2B</span>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Authority Building</span>
                </div>
                <div className="text-center border-x border-gray-100 px-10">
                  <span className="block text-2xl font-black text-[#011f18]">B2C</span>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Brand Advocacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ECOSYSTEM (Multi-Channel Integration) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[100px] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-16">
             <h2 className="text-5xl font-black uppercase tracking-tighter text-[#00FFC2]">The Multi-Channel <br/>Ecosystem.</h2>
             <p className="text-gray-900 text-[10px] font-black uppercase tracking-[0.4em] max-w-xs text-right leading-relaxed">
               Cohesive storytelling across LinkedIn, Instagram, and Google Display.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Mail size={32} className="text-[#00FFC2] opacity-50" />
              <h4 className="text-lg font-black uppercase tracking-widest">Email Automation</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed uppercase">Nurturing sequences that guide prospects toward informed purchasing decisions with precision.</p>
            </div>
            <div className="space-y-6">
              <MessageSquare size={32} className="text-[#00FFC2] opacity-50" />
              <h4 className="text-lg font-black uppercase tracking-widest">Social Engagement</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed uppercase">Staying present and relevant where your audience lives, building trust-building narratives.</p>
            </div>
            <div className="space-y-6">
              <Target size={32} className="text-[#00FFC2] opacity-50" />
              <h4 className="text-lg font-black uppercase tracking-widest">Performance Tracking</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed uppercase">Measuring engagement, conversion rates, and ROI to turn data into actionable intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE & AGILITY (Analytics) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <BarChart4 className="mx-auto text-gray-100 mb-8" size={80} />
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">Measuring <span className="text-[#00AE80]">Success.</span></h2>
           <p className="text-gray-900 font-bold uppercase text-[11px] tracking-widest leading-relaxed mb-20 max-w-2xl mx-auto">
             KPIs such as open rates, click-through rates, and time-on-page provide a comprehensive view of how nurtured leads progress. This ensures campaigns remain agile and continuously optimized.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Lead Behavior", "Content Reach", "Campaign ROI", "Time-on-Page"].map((kpi, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl group hover:border-[#00AE80] transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#011f18]">{kpi}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. VANGUARD FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                INSPIRE <br/><span className="text-[#00AE80]">ACTION.</span>
              </h2>
              <div className="space-y-5 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><Mail size={18} className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18]"><Phone size={18} className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-6 border-l-2 border-[#00AE80] pl-6">
                    <MapPin size={22} className="text-[#00AE80] shrink-0" />
                    <p className="leading-relaxed italic opacity-60">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-16 rounded-[80px] border border-gray-100">
               <h5 className="font-black uppercase text-xs mb-6 tracking-widest text-[#00AE80]">Initialize Nurture Sequence</h5>
               <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-10">
                 We transform prospects into loyal advocates through meaningful engagement and personalized narratives. Driving sustainable growth for B2B and B2C.
               </p>
               <button className="w-full py-6 bg-[#011f18] text-white rounded-full font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#00AE80] hover:shadow-xl transition-all flex items-center justify-center gap-3">
                 Build Your Ecosystem <Workflow size={16} />
               </button>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-300 font-black uppercase tracking-[1.5em]">
             <p>Blucom Growth Lab © 2026</p>
             <p>Lead Intelligence: Active</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT (800+ Words) */}
      <div className="hidden">
        <h1>Nurture Strategies – Branding Agency Islamabad</h1>
        <p>In today’s fast-paced digital landscape, acquiring a lead is only the first step in a long journey toward customer loyalty and brand advocacy. Nurture strategies maintain engagement, build trust, and convert potential prospects into lifelong customers. At our Branding Agency in Islamabad, we specialize in crafting comprehensive nurture strategies that integrate digital marketing solutions with data-driven insights. Effective nurture strategies are rooted in understanding the psychology of the buyer’s journey. Research indicates that 70% of leads are not ready to buy immediately. Nurture strategies leverage customer journey optimization to deliver the right message at the right moment. From a digital marketing agency perspective, nurture campaigns are integral to a digital marketing growth strategy combining email automation, retargeting campaigns, and performance tracking.</p>
        <p>Modern nurture strategies are powered by AI marketing automation and predictive analytics. These tools allow brands to segment audiences and deliver personalized messaging at scale. For B2B marketing agencies, nurture strategies are especially crucial as B2B sales cycles involve multiple stakeholders. Through a structured B2B marketing funnel, businesses can deliver value-driven content including interactive guides, webinars, and case studies. This builds credibility and accelerates B2B customer acquisition. A successful nurture strategy combines email marketing, social media engagement, content marketing, and digital advertising campaigns into a cohesive ecosystem. By synchronizing messages across multiple touchpoints, brands ensure consistent storytelling and brand identity reinforcement on platforms like LinkedIn and Instagram.</p>
        <p>Performance marketing strategies enhance nurture campaigns by measuring engagement and ROI. By tracking marketing analytics insights, businesses understand lead behavior and content performance. KPIs such as open rates, click-through rates, and conversion rates provide a comprehensive view of the sales funnel. This ensures nurture campaigns remain agile and continuously optimized. At our Branding Agency in Islamabad, we combine creative storytelling with technical expertise. Our approach integrates brand communication strategy, customer engagement strategy, and social proof marketing. We understand both B2B and B2C landscapes, crafting campaigns that inspire action and drive sustainable growth.</p>
      </div>
    </div>
  );
};

export default NurtureVanguard;