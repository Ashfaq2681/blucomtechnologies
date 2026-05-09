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
  Command,
  Search,
  Binary,
  Microscope,
  Box
} from 'lucide-react';

const UIOracle = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-emerald-300 overflow-x-hidden">
      
      {/* 1. THE REVELATION (Hero Section) */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Topographical Line Art Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0,600 Q250,500 500,600 T1000,600" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M0,400 Q250,300 500,400 T1000,400" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#F1F5F9] border border-gray-100 mb-10">
              <Binary size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black  tracking-[0.4em] text-emerald-500">Strategic Insight Engine v.21</span>
            </div>
            <h1 className="not-italic text-7xl md:text-[9.5rem] font-black leading-[0.8] tracking-tighter mb-12 italic">
            UI<br/>
              <span className="text-emerald-500 not-italic">Oracle.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Design is more than aesthetics—it’s a fusion of <span className="text-[#011f18] font-bold underline decoration-emerald-300 decoration-2 underline-offset-4">psychology, functionality, and strategy</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
             <div className="lg:col-span-2 bg-emerald-500 p-12  text-white flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10">
                   <Microscope className="text- mb-8" size={40} />
                   <h2 className="text-4xl font-black  tracking-tighter mb-6">The 50ms <br/>Determinant.</h2>
                   <p className="text-xs opacity-60 leading-relaxed  font-bold tracking-wide max-w-xs">
                     Users form opinions in as little as 50 milliseconds. We ensure first impressions translate into long-term loyalty.
                   </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                   <div className="h-[1px] flex-grow bg-white/20"></div>
                   <span className="text-[10px] font-black tracking-[0.3em] text-emerald-300">ORACLE DATA POINT</span>
                </div>
                <Search className="absolute -right-10 -bottom-10 text-white/5" size={240} />
             </div>

             <div className="bg-[#F8FAFC] p-12 border border-gray-100 flex flex-col justify-center text-center">
                <Eye className="mx-auto text-emerald-500 mb-6" />
                <h4 className="text-3xl font-black tracking-tighter mb-2 text-emerald-500">90%</h4>
                <p className="text-[9px] font-black  tracking-widest text-gray-400 leading-tight">Retention focus <br/>via intuitive flow.</p>
             </div>

             <div className="bg-white p-12 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow group">
                <Box className="text-emerald-500 group-hover:rotate-45 transition-transform" />
                <div>
                   <h4 className="text-xs font-black  tracking-widest mb-4">Prevision Branding: UI Wireframes</h4>
                   <p className="text-[10px] text-gray-400 font-bold  leading-relaxed">
                     In the world of digital design, every pixel tells a story. Prevision Branding transforms ideas into seamless experiences through meticulously crafted UI wireframes. Our wireframes serve as the blueprint of innovation, mapping user journeys with clarity and precision. Each screen balances aesthetics and functionality, ensuring intuitive navigation and engagement. By visualizing interactions before development, we eliminate guesswork and foster creativity. From initial sketches to interactive prototypes, Prevision Branding bridges vision and execution, turning concepts into compelling digital experiences that resonate with users and elevate brand identity.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE BLUEPRINT (Human-Centered Design) */}
      <section className="py-32 px-6 bg-[#F1F5F9]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
               <h2 className="text-5xl font-black  tracking-tighter mb-8 text-[#011f18]">Human-Centered <br/><span className="text-emerald-500">Architecture.</span></h2>
               <p className="text-sm text-gray-500 font-bold  tracking-widest leading-relaxed mb-12">
                 Every element, from buttons to navigation bars, is crafted to align with user expectations and reduce friction.
               </p>
               
               <div className="space-y-4">
                  {[
                    { title: "Strategic Alignment", body: "Connecting UI to brand perception strategy.", icon: Target },
                    { title: "B2B Precision", body: "Navigation for complex solutions and products.", icon: Layers },
                    { title: "Visual Language", body: "Typography and icons reinforcing recognition.", icon: Palette }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 group hover:border-emerald-500/40 transition-colors">
                       <item.icon className="text-emerald-500 shrink-0" size={24} />
                       <div>
                          <h5 className="text-[11px] font-black  tracking-widest">{item.title}</h5>
                          <p className="text-[10px] text-gray-400  font-bold">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
               <div className="p-12 bg-white shadow-sm border border-gray-100">
                  <BrainCircuit className="text-emerald-500 mb-8" size={48} />
                  <h3 className="text-3xl font-black  tracking-tighter mb-6">AI-Driven Usability.</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed  font-bold mb-8 italic">
                    We leverage AI-driven marketing strategies to analyze behavior in real-time, identifying pain points and optimizing flow with predictive analytics.
                  </p>
                  <div className="flex gap-2">
                     <span className="w-8 h-1 bg-emerald-500"></span>
                     <span className="w-8 h-1 bg-gray-100"></span>
                     <span className="w-8 h-1 bg-gray-100"></span>
                  </div>
               </div>
               <div className="p-12 bg-emerald-500 text-white flex items-center justify-between group cursor-pointer overflow-hidden relative">
                  <div className="relative z-10">
                    <h4 className="text-xl font-black  tracking-tighter">Performance Insight</h4>
                    <p className="text-[10px] font-bold  opacity-60">Drive measurable business outcomes.</p>
                  </div>
                  <Sparkles size={32} className="relative z-10 text-emerald-300" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADAPTIVE GEOMETRY (Multi-Device) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border-x border-emerald-500 px-12 mb-10">
            <h2 className="text-5xl font-black  tracking-tighter">Multi-Device <br/>Optimization.</h2>
          </div>
          <p className="text-gray-400 font-bold  text-[11px] tracking-[0.3em] max-w-2xl mx-auto mb-20 leading-loose">
            High-converting content experiences across desktops, tablets, and mobile devices. Usability, speed, and aesthetic appeal maintained irrespective of size.
          </p>
          
          <div className="grid md:grid-cols-3 gap-24 items-center opacity-40">
             <div className="flex flex-col items-center gap-4">
                <Monitor size={60} strokeWidth={1} />
                <span className="text-[9px] font-black  tracking-[0.5em]">Frame_01: Desktop</span>
             </div>
             <div className="flex flex-col items-center gap-4 text-emerald-500 opacity-100">
                <Tablet size={80} strokeWidth={1} />
                <span className="text-[9px] font-black  tracking-[0.5em]">Frame_02: Tablet</span>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Smartphone size={60} strokeWidth={1} />
                <span className="text-[9px] font-black  tracking-[0.5em]">Frame_03: Mobile</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. MEASURING IMPACT (Intelligence) */}
      <section className="py-32 px-6 bg-[#011f18] text-white mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
             <BarChart3 className="text-emerald-500 mb-10" size={60} />
             <h2 className="text-6xl font-black  tracking-tighter mb-8 leading-none">Evolving <br/><span className="text-emerald-500">Intelligence.</span></h2>
             <p className="text-xs opacity-60 leading-relaxed  font-bold tracking-[0.2em] mb-12 italic">
               Effective UI design is measurable. We track task completion time, conversion ratios, and engagement rates to refine the overall digital marketing strategy.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-emerald-300 pl-6 py-2">
                   <span className="block text-2xl font-black tracking-tighter">ROI Max</span>
                   <span className="text-[8px]  tracking-widest opacity-40">Design Efficiency</span>
                </div>
                <div className="border-l-2 border-emerald-300 pl-6 py-2">
                   <span className="block text-2xl font-black tracking-tighter">Behavioral</span>
                   <span className="text-[8px]  tracking-widest opacity-40">Pattern Mapping</span>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center animate-spin-slow">
                <Activity size={100} className="text-emerald-300 opacity-20" />
             </div>
             <Framer className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-300" size={40} />
          </div>
        </div>
      </section>

      {/* 5. ORACLE FOOTER */}
      <footer className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-24 items-start">
            <div>
              <h2 className="text-7xl md:text-[8rem] font-black  tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                REVEAL <br/><span className="text-emerald-500">GROWTH.</span>
              </h2>
              <div className="space-y-6 font-bold  text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-emerald-500 transition-colors cursor-pointer"><Command size={16} className="text-emerald-500"/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-emerald-500 transition-colors cursor-pointer"><Command size={16} className="text-emerald-500"/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="pt-6 border-t border-gray-100 flex items-start gap-4">
                    <span className="text-emerald-500 font-black">REGIONAL HUB:</span>
                    <p className="leading-relaxed opacity-60">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-16 border border-gray-100 relative overflow-hidden">
               <h5 className="font-black  text-xs mb-6 tracking-[0.3em] text-emerald-500">Initialize UI Protocol</h5>
               <p className="text-[10px] text-gray-500 font-bold  leading-relaxed mb-12">
                 We integrate brand strategy agency expertise with cutting-edge digital marketing services to craft interfaces that captivate and convert.
               </p>
               <button className="group w-full py-6 bg-[#011f18] text-white font-black  text-[11px] tracking-[0.4em] hover:bg-emerald-500 transition-all flex items-center justify-center gap-4">
                 Audit Your Interface <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </button>
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 blur-3xl"></div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex justify-between items-center text-[9px] text-gray-300 font-black  tracking-[2.5em]">
             <p>Blucom Oracle © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT (Utilizing all original text) */}
      <div className="hidden">
        <h1>UI Designing | Branding Agency Islamabad</h1>
        <p>In the modern digital ecosystem, a brand’s success hinges not only on its products or services but on the experiences it delivers. The design of user interfaces (UI) has become a critical determinant of engagement, conversion, and long-term loyalty. At our Branding Agency in Islamabad, we believe that UI Designing is more than aesthetics—it’s a fusion of psychology, functionality, and strategic storytelling that guides users effortlessly through a digital journey. UI design is the bridge between a brand’s vision and its audience’s experience. Research shows that users form opinions about a website or app in as little as 50 milliseconds. By integrating digital marketing solutions and performance marketing insights, UI designers can craft interfaces that drive measurable business outcomes. Human-centered design principles prioritize consumer behavior marketing and customer journey optimization. Every element is crafted to align with user expectations and reduce friction. We leverage AI-driven marketing strategies to analyze behavior in real-time, identifying pain points and optimizing flow with predictive analytics. UI designing is intrinsically linked to brand identity design and brand perception strategy. A consistent visual language—colors, typography, icons—reinforces brand recognition and communicates credibility. For B2B marketing agencies, this alignment is crucial for building trust. Multi-device optimization ensures interfaces deliver high-converting content experiences across desktops, tablets, and mobile devices. Effective UI design is measurable through metrics like engagement rate, task completion time, and conversion ratio. Our iterative, research-driven process combines creativity with analytics to transform digital touchpoints into powerful drivers of trust and growth.</p>
      </div>
    </div>
  );
};

export default UIOracle;