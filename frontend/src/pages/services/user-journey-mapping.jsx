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
  Sparkles
} from 'lucide-react';

const UserJourneyPrism = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE SPECTRUM (Hero Section) */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Prismatic Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#00AE8008,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100">
              <Compass size={16} className="text-[#00AE80] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Navigation Intelligence v.22</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase mb-12">
              USER<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AE80] to-[#011f18]">JOURNEY.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-end w-full">
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-xl">
                The compass for the complex pathways of interaction. At our <span className="text-[#011f18] font-bold">Branding Agency in Islamabad</span>, we uncover insights that fuel meaningful engagement.
              </p>
              
              <div className="flex flex-col items-end gap-6">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-1 text-[#00AE80] bg-current opacity-20 rounded-full" style={{ opacity: i * 0.2 }} />
                  ))}
                </div>
                <div className="text-right">
                  <span className="block text-4xl font-black text-[#011f18] tracking-tighter">+30%</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Conversion Increase Potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DECODING THE NARRATIVE (The Prism Logic) */}
      <section className="py-32 px-6 bg-[#F9FAFB]/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Decoding the <span className="text-[#00AE80]">Narrative.</span></h2>
            <p className="text-sm text-gray-900 font-bold uppercase tracking-widest leading-relaxed max-w-2xl">
              A user journey is more than a sequence of clicks; it’s a narrative of perception, emotion, and decision-making. We align marketing objectives with user expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Enhanced Understanding", body: "Identifying pain points, moments of delight, and engagement opportunities for complex B2B decision-making.", icon: Users },
              { title: "Optimized Conversion", body: "Anticipating friction and using conversion psychology to guide users effortlessly toward desired actions.", icon: Target },
              { title: "Strategic Alignment", body: "Bridging the gap between digital marketing, UX design, and brand strategy for cross-channel consistency.", icon: Layers }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-white border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                <item.icon className="text-[#00AE80] mb-8 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-lg font-black uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase">{item.body}</p>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <item.icon size={120} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DUAL LENS (Data + Human) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#011f18] rounded-[60px] p-16 text-white flex flex-col justify-between overflow-hidden">
                <Cpu className="text-[#00FFC2] animate-pulse" size={48} />
                <div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Data-Driven <br/><span className="text-[#00AE80]">Humanity.</span></h3>
                  <p className="text-xs opacity-60 leading-relaxed uppercase font-black tracking-widest">
                    Merging Heatmaps, Session Recordings, and Clickstream Analysis with Qualitative Research.
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Spline size={300} />
                </div>
              </div>
              {/* Floating Meta Card */}
              <div className="absolute -bottom-10 -right-10 bg-white shadow-2xl p-8 rounded-3xl border border-gray-50 max-w-xs hidden md:block">
                 <div className="flex items-center gap-4 mb-4">
                    <Sparkles className="text-[#00AE80]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">AI Forecasting</span>
                 </div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">
                   Tailoring experiences via predictive marketing insights to maximize long-term engagement.
                 </p>
              </div>
            </div>

            <div className="space-y-16">
               <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#00AE80] mb-4 italic underline decoration-2 underline-offset-8">Visualization Protocol</h4>
                  <p className="text-gray-900 font-bold uppercase text-[11px] tracking-widest leading-relaxed">
                    A well-structured journey map acts as a communication tool. For B2B clients, we align buying processes with automation and lead generation strategies.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                     <span className="block h-1 w-full bg-[#011f18]"></span>
                     <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Identify Friction</span>
                  </div>
                  <div className="space-y-3">
                     <span className="block h-1 w-full bg-[#00AE80]"></span>
                     <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Innovate Experience</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STORYTELLING INTERSECTION (Brand Resonance) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[100px] mx-4 overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Heart className="mx-auto text-[#00FFC2] mb-12 animate-bounce" size={48} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">Refracting <br/>the <span className="text-[#00AE80]">Brand Story.</span></h2>
          <p className="text-xl opacity-60 font-light leading-relaxed mb-16">
            When storytelling intersects with strategy, users don’t just navigate a platform—they experience the brand’s narrative, creating emotional resonance.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
             {["Positioning Strategy", "Storytelling Marketing", "Experience Marketing"].map((tag, i) => (
               <div key={i} className="px-6 py-3 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#00AE80] hover:border-[#00AE80] transition-all cursor-crosshair">
                 {tag}
               </div>
             ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#ffffff,transparent_70%)]" />
      </section>

      {/* 5. PRISM FOOTER */}
      <footer className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                MAP THE <br/><span className="text-[#00AE80]">FUTURE.</span>
              </h2>
              <div className="flex flex-col gap-6 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18] group cursor-pointer">
                   <div className="w-8 h-8 rounded-full bg-[#F9FAFB] flex items-center justify-center group-hover:bg-[#00AE80] group-hover:text-white transition-colors"><MessagesSquare size={14}/></div>
                   connect@blucomtechnologies.com
                 </p>
                 <div className="pt-10 border-t border-gray-100 max-w-sm">
                    <p className="leading-relaxed italic opacity-60">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="bg-[#F9FAFB] p-16 rounded-[60px] relative overflow-hidden group">
               <h5 className="font-black uppercase text-xs mb-6 tracking-[0.4em] text-[#00AE80]">Request Journey Audit</h5>
               <p className="text-[11px] text-gray-900 font-bold uppercase leading-relaxed mb-12">
                 From startups to enterprise B2B, we transform complex data into actionable journeys that delight users and meet objectives.
               </p>
               <button className="w-full py-6 bg-[#011f18] text-white rounded-sm font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#00AE80] transition-all flex items-center justify-center gap-4">
                 Start The Mapping <ChevronRight size={18} />
               </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-300 font-black uppercase tracking-[2em] border-t border-gray-100 pt-10">
             <p>Blucom Navigation © 2026</p>
             <p className="opacity-0 md:opacity-100 italic">Designing with Intent</p>
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

export default UserJourneyPrism;