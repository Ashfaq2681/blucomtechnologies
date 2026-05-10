import React from 'react';
import { 
  MousePointer2, 
  Zap, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Activity, 
  Framer, 
  Palette, 
  Target, 
  BrainCircuit,
  Eye,
  Layers,
  BarChart3,
  MoveRight,
  Sparkles,
  Command
} from 'lucide-react';

const UIKinetic = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE VIEWPORT (Hero Section) */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[linear-gradient(130deg,#f8fafc_0%,#ffffff_100%)]">
        {/* Kinetic Motion Lines Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#011f18] rounded-md mb-8">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00FFC2]">System Status: High Fidelity</span>
              </div>
              <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase mb-10">
                KINETIC<br/>
                <span className="text-[#00AE80]">INTERFACES.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                UI is the bridge between a brand’s vision and its audience’s experience. At our <span className="text-[#011f18] font-bold">Branding Agency in Islamabad</span>, we fuse psychology with functionality to guide users effortlessly.
              </p>
              <div className="flex items-center gap-8">
                <button className="group bg-[#011f18] text-white px-10 py-5 rounded-sm font-black uppercase text-[11px] tracking-widest hover:bg-[#00AE80] transition-all flex items-center gap-4">
                  Initialize Design <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border-[12px] border-[#F1F5F9] rounded-[40px] p-8 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)] relative z-10 animate-float">
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <Command size={16} className="text-gray-200" />
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center text-[#00AE80]"><Eye size={20}/></div>
                       <div>
                          <span className="block text-[10px] font-black uppercase text-gray-400 tracking-widest">First Impression</span>
                          <span className="block text-xl font-black text-[#011f18]">50 Milliseconds</span>
                       </div>
                    </div>
                    <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                       <div className="h-full bg-[#00AE80] w-[90%]"></div>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed italic">
                      "Users form opinions about an interface in as little as 50ms, highlighting the critical importance of aesthetics."
                    </p>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00AE80]/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE HUMAN CORE (Psychology & AI) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-[#011f18]">Human-Centered <br/><span className="text-[#00AE80]">Flow.</span></h2>
               <p className="text-xs text-gray-400 uppercase font-bold leading-relaxed tracking-widest mb-10">
                 Prioritizing consumer behavior marketing and customer journey optimization to reduce friction.
               </p>
               <div className="p-8 bg-[#011f18] text-white rounded-2xl relative overflow-hidden">
                  <BrainCircuit className="text-[#00FFC2] mb-6" size={32} />
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">AI-Driven Insights</h4>
                  <p className="text-[10px] opacity-60 leading-relaxed uppercase font-medium">Predictive analytics reveal where users hesitate, allowing for iterative usability enhancements.</p>
                  <Sparkles className="absolute -right-4 -bottom-4 text-white/5" size={100} />
               </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               {[
                 { icon: Target, title: "Strategic Alignment", d: "Connecting UI to brand identity design and perception strategy to communicate credibility and trust." },
                 { icon: Layers, title: "B2B Precision", d: "Integrating B2B marketing insights to ensure stakeholders navigate complex solutions effortlessly." },
                 { icon: Palette, title: "Visual Language", d: "Consistent colors, typography, and icons that reflect tone and personality while building affinity." },
                 { icon: Activity, title: "Conversion Logic", d: "Crafting interfaces that look appealing while driving measurable outcomes like click-through rates." }
               ].map((item, i) => (
                 <div key={i} className="p-10 border border-gray-100 hover:border-[#00AE80]/30 transition-all group hover:bg-[#F8FAFC]">
                    <item.icon className="text-[#00AE80] mb-6 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-black uppercase text-xs tracking-widest mb-4">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-DEVICE RESPONSIVENESS (The Kinetic Grid) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[60px] mx-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Framer size={400} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 text-[#00FFC2]">Responsive <br/>Continuity.</h2>
          <p className="text-gray-400 font-light text-xl leading-relaxed max-w-3xl mx-auto mb-20">
            UI designing must be adaptive. We ensure interfaces deliver high-converting experiences across desktops, tablets, and mobile devices with absolute speed and aesthetic appeal.
          </p>
          
          <div className="flex flex-wrap justify-center gap-16 md:gap-32">
             <div className="flex flex-col items-center gap-6 group">
                <Monitor size={48} className="text-[#00FFC2] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Desktop</span>
             </div>
             <div className="flex flex-col items-center gap-6 group">
                <Tablet size={48} className="text-[#00FFC2] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Tablet</span>
             </div>
             <div className="flex flex-col items-center gap-6 group">
                <Smartphone size={48} className="text-[#00FFC2] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Mobile</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. MEASURING IMPACT (The Feedback Loop) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <BarChart3 className="mx-auto text-gray-100 mb-10" size={80} />
           <h3 className="text-4xl font-black uppercase tracking-tighter mb-10">Data-Driven <br/><span className="text-[#00AE80]">Intelligence.</span></h3>
           <p className="text-gray-900 font-bold uppercase text-[11px] tracking-widest leading-relaxed mb-16 max-w-2xl mx-auto italic">
             UI design is not static; it evolves. We track how design influences user behavior to maximize ROI and drive sustainable growth for our clients.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { label: "Engagement Rate", val: "Active Tracking" },
                { label: "Task Completion", val: "Optimized" },
                { label: "Conversion Ratio", val: "High Growth" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <span className="block text-[10px] font-black text-gray-300 uppercase mb-2 tracking-widest">{stat.label}</span>
                   <span className="block text-xl font-black text-[#011f18] tracking-tighter">{stat.val}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. KINETIC FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-100 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-end">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                SHAPE <br/><span className="text-[#00AE80]">USER PATHS.</span>
              </h2>
              <div className="flex flex-col gap-5 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><Zap className="text-[#00AE80]" size={16}/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18]"><Zap className="text-[#00AE80]" size={16}/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-6 border-l border-gray-200 pl-6">
                    <span className="text-[#00AE80] font-black">LOC:</span>
                    <p className="leading-relaxed text-[9px] uppercase">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="space-y-10">
               <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#00AE80] group-hover:w-full transition-all opacity-10"></div>
                  <h5 className="font-black uppercase text-xs mb-4 tracking-widest text-[#011f18]">Captivate & Convert</h5>
                  <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-8">
                    Our UI design process is iterative, research-driven, and research-backed. We help brands transform touchpoints into powerful drivers of trust.
                  </p>
                  <button className="flex items-center justify-between w-full bg-[#011f18] text-white px-8 py-5 rounded-md font-black uppercase text-[11px] tracking-widest hover:bg-[#00AE80] transition-all">
                    Start Your UI Audit <MousePointer2 size={16}/>
                  </button>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-300 font-black uppercase tracking-[2em]">
             <p>Blucom Interface Div. © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>UI Designing | Branding Agency Islamabad</h1>
        <p>In the modern digital ecosystem, a brand’s success hinges on the experiences it delivers. UI design is critical for engagement, conversion, and long-term loyalty. At our Branding Agency in Islamabad, we believe UI Designing is more than aesthetics—it’s a fusion of psychology, functionality, and strategic storytelling. UI design is the bridge between a brand’s vision and its audience’s experience. Research shows users form opinions about a website in 50 milliseconds. By integrating digital marketing solutions and performance marketing insights, UI designers craft interfaces that drive measurable business outcomes. Human-centered design methodology prioritizes consumer behavior marketing and customer journey optimization. Every element—buttons, navigation—is crafted to reduce friction. We leverage AI-driven marketing strategies to identify pain points and optimize flow accordingly using predictive analytics. UI designing is linked to brand identity design and brand perception strategy. A consistent visual language reinforces brand recognition. For B2B marketing agencies, this alignment is crucial for building trust and affinity. UI design must be responsive and adaptive across desktops, tablets, and mobile devices. Metrics like engagement rate and conversion ratio provide intelligence to refine digital marketing strategies. Our UI design process is iterative, research-driven, and purposeful, transforming touchpoints into drivers of growth.</p>
      </div>
    </div>
  );
};

export default UIKinetic;