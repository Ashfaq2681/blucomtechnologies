import React from 'react';
import { 
  Compass, Map, Layers, MousePointer2, Users, LineChart, Workflow, 
  Lightbulb, Target, Heart, ChevronRight, Spline, Eye, BarChart4, Cpu, 
  MessagesSquare, Sparkles
} from 'lucide-react';

const UserJourneyPrism = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. The Spectrum (Hero Section) */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Light Prismatic Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#00AE8008,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8 bg-white/50 backdrop-blur-sm px-4 py-2 border border-gray-100">
              <Compass size={16} className="text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.5em] text-gray-400">Navigation intelligence v.22</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] tracking-tighter mb-12">
              User<br/>
              <span className="text-transparent bg-clip-text bg-emerald-500">Journey.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-end w-full">
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-xl">
                The compass for the complex pathways of interaction. At our <span className="text-[#011f18] font-bold">Branding Agency in Islamabad</span>, we uncover insights that fuel meaningful engagement and measurable results.
              </p>
              
              <div className="flex flex-col items-end gap-6">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-1 text-emerald-500 bg-current opacity-20" style={{ opacity: i * 0.2 }} />
                  ))}
                </div>
                <div className="text-right">
                  <span className="block text-4xl font-black text-[#011f18] tracking-tighter">+30%</span>
                  <span className="text-[9px] font-black tracking-widest text-gray-400">Conversion increase potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Decoding the narrative (The prism logic) */}
      <section className="py-32 px-6 bg-[#F9FAFB]/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl font-black tracking-tighter mb-6 text-[#011f18]">Decoding the <span className="text-emerald-500">narrative</span></h2>
            <p className="text-sm text-gray-500 font-bold tracking-widest leading-relaxed max-w-2xl">
              A user journey is more than a sequence of clicks; it’s a narrative of perception, emotion, and decision-making. We align marketing objectives with user expectations, ensuring every interaction delivers value and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Enhanced understanding", body: "Identifying pain points, moments of delight, and engagement opportunities for complex B2B decision-making.", icon: Users },
              { title: "Optimized conversion", body: "Anticipating friction and using conversion psychology to guide users effortlessly toward desired actions.", icon: Target },
              { title: "Strategic alignment", body: "Bridging the gap between digital marketing, UX design, and brand strategy for cross-channel consistency.", icon: Layers }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-white border border-gray-300 hover:shadow-lg transition-all group relative overflow-hidden">
                <item.icon className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-lg font-black tracking-tighter mb-4">{item.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-bold">{item.body}</p>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <item.icon size={120} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The dual lens (Data + human) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#F9FAFB] border border-gray-200 p-16 flex flex-col justify-between overflow-hidden">
                <Cpu className="text-emerald-500 animate-pulse" size={48} />
                <div>
                  <h3 className="text-5xl font-black tracking-tighter mb-6 leading-none text-[#011f18]">Data-driven <br/><span className="text-emerald-500">humanity</span></h3>
                  <p className="text-xs opacity-60 leading-relaxed font-black tracking-widest">
                    Merging heatmaps, session recordings, and clickstream analysis with qualitative research to understand real user behavior.
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Spline size={300} />
                </div>
              </div>

              {/* Floating meta card */}
              <div className="absolute -bottom-10 -right-10 bg-white border border-gray-100 p-8 shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="text-emerald-500" size={20} />
                  <span className="text-[10px] font-black tracking-widest">AI forecasting</span>
                </div>
                <p className="text-[10px] text-gray-400 font-bold leading-relaxed">
                  Tailoring experiences via predictive marketing insights to maximize engagement, retention, and conversion.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h4 className="text-xs font-black tracking-[0.4em] text-emerald-500 mb-4 italic underline decoration-2 underline-offset-8">Visualization protocol</h4>
                <p className="text-gray-500 font-bold text-[11px] tracking-widest leading-relaxed">
                  A well-structured journey map acts as a communication tool for stakeholders. Especially for B2B clients, we align buying processes with automation and lead generation strategies for seamless collaboration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-3">
                  <span className="block h-1 w-full bg-gray-400"></span>
                  <span className="text-[9px] font-black text-gray-400 tracking-widest">Identify friction</span>
                </div>
                <div className="space-y-3">
                  <span className="block h-1 w-full bg-emerald-500"></span>
                  <span className="text-[9px] font-black text-gray-400 tracking-widest">Innovate experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Storytelling intersection (Brand resonance) */}
      <section className="py-32 px-6 bg-[#F9FAFB] text-[#011f18] border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <Heart className="mx-auto text-emerald-500 mb-12 animate-bounce" size={48} />
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">Refracting <br/>the <span className="text-emerald-500">brand story</span></h2>
          <p className="text-xl opacity-70 font-light leading-relaxed mb-16">
            When storytelling intersects with strategy, users experience the brand narrative, creating emotional resonance, trust, and advocacy across digital touchpoints.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {["Positioning strategy", "Storytelling marketing", "Experience marketing"].map((tag, i) => (
              <div key={i} className="px-6 py-3 border border-gray-200 text-[10px] font-black tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Prism footer */}
      <footer className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-12">
                Map the <br/><span className="text-emerald-500">future</span>
              </h2>
              <div className="flex flex-col gap-6 font-bold text-[10px] tracking-widest text-gray-400">
                <p className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors"><MessagesSquare size={14} /></div>
                  connect@blucomtechnologies.com
                </p>
                <div className="pt-10 border-t border-gray-100 max-w-sm">
                  <p className="leading-relaxed italic opacity-60">Islamabad</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 border border-gray-200 relative overflow-hidden group">
              <h5 className="font-black text-xs mb-6 tracking-[0.4em] text-emerald-500 uppercase">Request journey audit</h5>
              <p className="text-[11px] text-gray-500 font-bold leading-relaxed mb-12 uppercase">
                From startups to enterprise B2B, we transform complex data into actionable journeys that delight users and meet objectives.
              </p>
              <button className="w-full py-6 bg-[#011f18] text-white font-black text-[11px] tracking-[0.4em] uppercase hover:bg-emerald-500 transition-all flex items-center justify-center gap-4">
                Start the mapping <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-300 font-black tracking-[2em] border-t border-gray-100 pt-10">
            <p>Blucom Navigation © 2026</p>
            <p className="opacity-0 md:opacity-100 italic">Designing with intent</p>
          </div>
        </div>
      </footer>

      {/* SEO & Schema Metadata */}
      <div className="hidden">
        <h1>User journey mapping | Branding agency Islamabad</h1>
        <p>Optimize customer interactions and boost conversions with expert user journey mapping. Understand user behavior, streamline touchpoints, integrate branding and storytelling, and drive business growth through actionable insights and predictive analytics. Our dual approach combines data-driven insights with human-centered design to enhance usability, optimize conversion, and align marketing strategy across all touchpoints.</p>
      </div>
    </div>
  );
};

export default UserJourneyPrism;