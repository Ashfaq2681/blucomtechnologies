import React from 'react';
import { 
  Compass, 
  Map, 
  Layers, 
  MousePointer2, 
  Users, 
  LineChart, 
  Workflow, 
  Lightbulb, 
  Target, 
  Heart, 
  ChevronRight, 
  Spline,
  Eye,
  BarChart4,
  Cpu,
  MessagesSquare,
  Sparkles,
  ArrowUpRight,
  Navigation,
  Telescope,
  Wind
} from 'lucide-react';

const UserJourneyHorizon = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE VANISHING POINT (Hero Section) */}
      <section className="relative pt-48 pb-40 px-6">
        {/* Horizon Line Background Animation */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00AE80] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gray-100 rounded-full mb-12 bg-white/50 backdrop-blur-md">
            <Telescope size={14} className="text-[#00AE80]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Future-Mapping Protocol v.23</span>
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.75] tracking-tighter uppercase mb-12">
            THE<br/>
            <span className="text-[#00AE80]">HORIZON.</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16">
              User Journey Mapping is the <span className="text-[#011f18] font-bold">compass</span> that guides businesses through complex pathways. At our Branding Agency in Islamabad, we uncover insights that fuel measurable growth.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-t border-gray-50 pt-16">
              <div className="text-center">
                <span className="block text-4xl font-black text-[#011f18] tracking-tighter">20-30%</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Conversion Lift</span>
              </div>
              <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
              <div className="text-center">
                <span className="block text-4xl font-black text-[#011f18] tracking-tighter">ROI</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Driven Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PATHWAY DECODING (Narrative Mapping) */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <div className="lg:w-1/2">
               <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Decoding the <br/>User Narrative.</h2>
               <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em] leading-relaxed italic">
                 A journey is more than a sequence of clicks; it's a narrative of perception and decision-making. We integrate digital marketing strategy into every touchpoint.
               </p>
            </div>
            <div className="lg:w-1/2 flex justify-end">
               <div className="p-8 bg-[#F0FDFA] rounded-[40px] flex items-center gap-6 border border-[#00AE80]/10">
                  <Wind className="text-[#00AE80]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Optimizing friction-free flows</span>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategic Benefits", list: ["Enhanced Customer Understanding", "B2B Marketing Insights", "Life-cycle Visualization"], icon: Target },
              { title: "Optimized Conversions", list: ["Conversion Psychology", "Anticipating Friction", "Effortless Guidance"], icon: MousePointer2 },
              { title: "Aligned Branding", list: ["Consistent Messaging", "Brand Trust Building", "Design Consistency"], icon: Map }
            ].map((card, i) => (
              <div key={i} className="group p-12 bg-white border-b-4 border-gray-50 hover:border-[#00AE80] transition-all">
                <card.icon className="text-gray-200 group-hover:text-[#00AE80] transition-colors mb-10" size={32} />
                <h4 className="text-lg font-black uppercase tracking-tighter mb-6">{card.title}</h4>
                <ul className="space-y-4">
                  {card.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[10px] font-bold uppercase text-gray-400 tracking-wide">
                      <div className="w-1 h-1 bg-[#00AE80] rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE INTELLIGENCE HUB (Data + Human) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[60px] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div>
                  <h3 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-[#00AE80]">Human-Centered <br/><span className="text-white">Intelligence.</span></h3>
                  <p className="text-sm opacity-60 leading-relaxed uppercase font-bold tracking-[0.1em]">
                    At our agency, we approach journey mapping with a dual lens: data-driven insights and human-centered design. Heatmaps and session recordings inform our understanding.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 border border-white/10 rounded-3xl group hover:bg-white/5 transition-colors">
                     <Cpu className="text-[#00FFC2] mb-6" size={24} />
                     <h5 className="text-[10px] font-black uppercase tracking-widest mb-2">AI-Powered</h5>
                     <p className="text-[9px] opacity-40 uppercase font-bold">Predictive analytics for behavior forecasting.</p>
                  </div>
                  <div className="p-8 border border-white/10 rounded-3xl group hover:bg-white/5 transition-colors">
                     <Sparkles className="text-[#00FFC2] mb-6" size={24} />
                     <h5 className="text-[10px] font-black uppercase tracking-widest mb-2">Resonance</h5>
                     <p className="text-[9px] opacity-40 uppercase font-bold">Uncovering emotional triggers and patterns.</p>
                  </div>
               </div>
            </div>

            <div className="relative aspect-video bg-white/5 rounded-[40px] border border-white/10 p-12 flex flex-col justify-center overflow-hidden">
               <Navigation className="text-[#00FFC2] mb-8 animate-pulse" size={40} />
               <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Stakeholder Alignment</h4>
               <p className="text-[11px] opacity-50 uppercase font-bold leading-relaxed mb-10">
                 Journey maps act as a communication tool. For B2B clients, we align complex buying processes with B2B marketing automation and lead generation strategies.
               </p>
               <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-black uppercase">Sales Harmony</div>
                  <div className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-black uppercase">Marketing Sync</div>
               </div>
               <Spline size={400} className="absolute -right-40 -bottom-40 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE NARRATIVE ARC (Branding) */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00AE80] block mb-8">Brand Experience Marketing</span>
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Storytelling Meets <br/>Strategy.</h3>
          <p className="text-gray-400 font-bold uppercase text-[11px] tracking-widest leading-loose mb-16 italic">
            Every interaction reflects your brand positioning strategy and storytelling marketing. We ensure users don’t just navigate—they experience the brand narrative, fostering emotional resonance and advocacy.
          </p>
          <div className="h-[2px] w-40 bg-gray-100 mx-auto"></div>
        </div>
      </section>

      {/* 5. HORIZON FOOTER */}
      <footer className="pt-24 pb-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
            <div>
              <div className="w-12 h-[2px] bg-[#00AE80] mb-10"></div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                BEYOND <br/><span className="text-[#00AE80]">CLICKS.</span>
              </h2>
              <div className="flex flex-col gap-5 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><MessagesSquare className="text-[#00AE80]" size={16}/> connect@blucomtechnologies.com</p>
                 <div className="pt-8 border-t border-gray-200">
                    <span className="text-[#00AE80] block mb-2 font-black">ISLAMABAD HQ:</span>
                    <p className="leading-relaxed text-[9px]">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[50px] shadow-sm border border-gray-100 relative group overflow-hidden">
               <h5 className="font-black uppercase text-xs mb-4 tracking-widest text-[#011f18]">Transform Interactions</h5>
               <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-10">
                 From startups to enterprise-level B2B companies, we help brands transform interactions into opportunities for growth, engagement, and loyalty.
               </p>
               <button className="flex items-center justify-between w-full bg-[#011f18] text-white px-10 py-6 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-[#00AE80] transition-all">
                 Request Your Journey Audit <ArrowUpRight size={18}/>
               </button>
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AE80]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-200 font-black uppercase tracking-[2em]">
             <p>Blucom Horizon Div. © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>User Journey Mapping | Branding Agency Islamabad</h1>
        <p>In today’s competitive digital landscape, understanding your audience is no longer optional—it’s a prerequisite for success. User Journey Mapping is the compass that guides businesses through complex pathways of customer interaction. At our Branding Agency in Islamabad, we leverage this methodology to design intuitive, persuasive experiences aligned with strategic business objectives. A user journey is more than a sequence of clicks; it’s a narrative of perception, emotion, and decision-making. Research shows that optimizing user journeys sees a 20-30% increase in conversion rates. Integrating digital marketing strategy ensures interactions drive actionable outcomes from online marketing strategy to performance marketing. Strategic benefits include enhanced customer understanding, optimized conversions, and aligned marketing and design. Our process is data-driven and human-centered, combining heatmaps, session recordings, and clickstream analysis with qualitative research. AI-powered analytics and predictive marketing insights allow us to forecast behaviors and tailor experiences. Visualization acts as a communication tool for stakeholders, especially for B2B clients with complex buying processes. We integrate branding and storytelling, reflecting your brand positioning strategy and brand experience marketing. When storytelling intersects with strategy, users experience the brand’s narrative, creating emotional resonance that drives retention and advocacy. From startups to enterprise B2B, our approach ensures every touchpoint is optimized for measurable results.</p>
      </div>
    </div>
  );
};

export default UserJourneyHorizon;