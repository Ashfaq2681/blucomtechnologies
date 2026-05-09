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
import { Helmet } from 'react-helmet';

const UIKinetic = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* SEO Metadata */}
      <Helmet>
        <title>UI Designing | Branding Agency Islamabad</title>
        <meta name="description" content="Craft intuitive, engaging, and high-converting digital experiences with expert UI designing. Build trust, enhance brand perception, and drive conversions." />
        <meta name="keywords" content="UI designing, digital marketing agency, brand identity design, customer journey optimization, digital marketing growth strategy, AI-driven marketing strategy, performance marketing insights" />
        <meta name="robots" content="index, follow" />

        {/* Social Schema */}
        <meta property="og:title" content="UI Designing | Branding Agency Islamabad" />
        <meta property="og:description" content="Craft intuitive, engaging, and high-converting digital experiences with expert UI designing. Build trust, enhance brand perception, and drive conversions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blucomtechnologies.com/ui-designing" />
        <meta property="og:image" content="https://www.blucomtechnologies.com/assets/ui-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[linear-gradient(130deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00FFC2] mb-8">
                <span className="text-[9px] font-black tracking-[0.3em] text-[#011f18]">System status: high fidelity</span>
              </div>
              <h1 className="text-6xl md:text-[6rem] font-black leading-[0.85] tracking-tighter mb-10">
                Kinetic<br/>
                <span className="text-[#00AE80]">interfaces.</span>
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-lg mb-12">
                UI is the bridge between a brand’s vision and its audience’s experience. At our <span className="font-bold text-[#011f18]">branding agency in Islamabad</span>, we fuse psychology with functionality to guide users effortlessly through every digital interaction.
              </p>
              <div className="flex items-center gap-8">
                <button className="group bg-[#00AE80] text-white px-10 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-[#00FFC2] transition-all flex items-center gap-4">
                  Initialize design <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border-[6px] border-gray-200 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] animate-float">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400"></div>
                    <div className="w-3 h-3 bg-yellow-400"></div>
                    <div className="w-3 h-3 bg-green-400"></div>
                  </div>
                  <Command size={16} className="text-gray-200" />
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F0FDFA] flex items-center justify-center text-[#00AE80]"><Eye size={20}/></div>
                    <div>
                      <span className="block text-[10px] font-black tracking-widest text-gray-500">First impression</span>
                      <span className="block text-xl font-black text-[#011f18]">50 milliseconds</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-100">
                    <div className="h-full bg-[#00AE80] w-[90%]"></div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold italic">
                    "Users form opinions about an interface in as little as 50ms, highlighting the importance of first impressions."
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00AE80]/10 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Core Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6 text-[#011f18]">Human-centered <br/><span className="text-[#00AE80]">flow.</span></h2>
              <p className="text-xs text-gray-500 font-bold leading-relaxed mb-10">
                Prioritizing consumer behavior, marketing, and customer journey optimization to reduce friction and enhance usability.
              </p>
              <div className="p-8 bg-white border border-gray-200 text-[#011f18]">
                <BrainCircuit className="text-[#00AE80] mb-4" size={32} />
                <h4 className="text-xs font-black mb-2 tracking-widest">Ai-driven insights</h4>
                <p className="text-[10px] opacity-70 leading-relaxed">
                  Predictive analytics reveal where users hesitate, allowing iterative usability enhancements and measurable improvements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: "Strategic alignment", d: "Connecting UI to brand identity and perception strategy to communicate credibility and trust." },
                { icon: Layers, title: "B2B precision", d: "Integrating B2B insights so stakeholders navigate complex solutions effortlessly." },
                { icon: Palette, title: "Visual language", d: "Consistent colors, typography, and icons that reflect brand tone and personality." },
                { icon: Activity, title: "Conversion logic", d: "Designing interfaces that look appealing while driving measurable outcomes like click-throughs." }
              ].map((item, i) => (
                <div key={i} className="p-10 border border-gray-200 hover:bg-gray-100 transition-all">
                  <item.icon className="text-[#00AE80] mb-4" size={24} />
                  <h4 className="font-black text-xs mb-2 tracking-widest">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 font-bold leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-device Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-[#00AE80]">Responsive continuity.</h2>
          <p className="text-gray-600 font-light text-xl leading-relaxed max-w-3xl mx-auto mb-20">
            Interfaces that deliver seamless experiences across desktop, tablet, and mobile, optimized for speed, usability, and conversion.
          </p>

          <div className="flex flex-wrap justify-center gap-16 md:gap-32">
            <div className="flex flex-col items-center gap-6">
              <Monitor size={48} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-widest">Desktop</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Tablet size={48} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-widest">Tablet</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Smartphone size={48} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-widest">Mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Measuring Impact */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <BarChart3 className="mx-auto text-gray-300 mb-10" size={80} />
          <h3 className="text-4xl font-black mb-10 text-[#011f18]">Data-driven <br/><span className="text-[#00AE80]">intelligence.</span></h3>
          <p className="text-gray-500 font-bold text-[11px] leading-relaxed mb-16 max-w-2xl mx-auto italic">
            We track how design influences user behavior to maximize ROI, refine campaigns, and drive sustainable growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { label: "Engagement rate", val: "Active tracking" },
              { label: "Task completion", val: "Optimized" },
              { label: "Conversion ratio", val: "High growth" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-[10px] font-black text-gray-400 mb-2 tracking-widest">{stat.label}</span>
                <span className="block text-xl font-black text-[#011f18]">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-end">
            <div>
              <h2 className="text-7xl font-black mb-10 leading-[0.8] text-[#011f18]">
                Shape <br/><span className="text-[#00AE80]">user paths.</span>
              </h2>
              <div className="flex flex-col gap-5 text-gray-600 font-bold text-[10px] tracking-widest">
                <p className="flex items-center gap-4 text-[#011f18]"><Zap className="text-[#00AE80]" size={16}/> connect@blucomtechnologies.com</p>
                <p className="flex items-center gap-4 text-[#011f18]"><Zap className="text-[#00AE80]" size={16}/> +92-303-5907230 | +92-334-0011126</p>
                <div className="flex items-start gap-4 mt-6 border-l border-gray-200 pl-6">
                  <span className="text-[#00AE80] font-black">Loc:</span>
                  <p className="leading-relaxed text-[9px] uppercase">Islamabad</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white p-12 border border-gray-200 text-[#011f18]">
                <h5 className="font-black text-xs mb-4 tracking-widest">Captivate & convert</h5>
                <p className="text-[10px] text-gray-500 font-bold leading-relaxed mb-8">
                  Our UI design process is iterative, research-driven, and purpose-built to transform touchpoints into drivers of engagement and trust.
                </p>
                <button className="flex items-center justify-between w-full bg-[#00AE80] text-white px-8 py-5 font-black text-[11px] tracking-widest hover:bg-[#00FFC2] transition-all">
                  Start your UI audit <MousePointer2 size={16}/>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-300 font-black tracking-[2em]">
            <p>Blucom Interface Div. © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UIKinetic;