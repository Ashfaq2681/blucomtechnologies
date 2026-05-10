import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Search, 
  ShieldCheck, 
  Layout, 
  BarChart3, 
  UserCheck, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Database,
  Terminal,
  Maximize2,
  Boxes,
  MousePointerClick,
  ArrowUpDown
} from 'lucide-react';

const WebDevelopmentKinetic = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#011f18 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-10 bg-[#F1F5F9] px-4 py-2 rounded-lg border border-gray-100">
              <Terminal size={14} className="text-[#00AE80]" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-gray-900">
                System.Initialize(Web_Dev_v.26)
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              DIGITAL<br/>
              <span className="text-[#00AE80]">ENGINE.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-start w-full">
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-xl">
                More than a business card—it is the <span className="text-[#011f18] font-bold">backbone</span> of your digital strategy.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 p-6 bg-[#F8FAFC] rounded-2xl border-l-4 border-[#00AE80]">
                  <div className="text-4xl font-black text-[#011f18]">53%</div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">
                    Users abandon sites taking <br/>longer than 3 seconds.
                  </p>
                </div>
                <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em] italic">
                  Scalable. Engaging. Revenue-Driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="py-32 px-6 bg-[#F8FAFC]/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
                Effective <span className="text-[#00AE80]">Components.</span>
              </h2>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                Built for performance & growth.
              </p>
            </div>
            <Boxes className="text-gray-200" size={40} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border">
            {[
              { title: "Custom UX/UI", icon: Layout },
              { title: "Mobile-First", icon: Smartphone },
              { title: "Speed Optimized", icon: Zap },
              { title: "SEO-Ready", icon: Search },
              { title: "Secure Infra", icon: ShieldCheck },
              { title: "Scalable Build", icon: Maximize2 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 hover:bg-[#F1F5F9] transition-all">
                <item.icon className="text-[#00AE80] mb-6" size={24} />
                <h4 className="text-[12px] font-black uppercase tracking-widest">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-10">
            <h3 className="text-5xl font-black uppercase">
              Advanced <span className="text-[#00AE80]">Engagement.</span>
            </h3>

            {[
              { label: "Dashboards", icon: BarChart3 },
              { label: "CRO Pages", icon: MousePointerClick },
              { label: "AI Personalization", icon: Cpu },
              { label: "CMS Flexibility", icon: ArrowUpDown }
            ].map((f, i) => (
              <div key={i} className="flex gap-4 items-center">
                <f.icon className="text-[#00AE80]" size={20}/>
                <span className="text-xs font-bold uppercase">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#011f18] text-white p-12 rounded-[40px]">
            <Code2 size={40} className="text-[#00FFC2] mb-6"/>
            <h4 className="text-2xl font-black mb-4">Agile Development</h4>
            <p className="text-sm opacity-60">
              We combine technical excellence with growth strategy to deliver measurable ROI.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#011f18] text-white text-center rounded-[80px] mx-4">
        <Globe size={40} className="mx-auto text-[#00FFC2] mb-6"/>
        <h2 className="text-5xl font-black mb-6">
          BUILD <span className="text-[#00AE80]">SMARTER.</span>
        </h2>
        <p className="opacity-60 mb-10">
          Build a scalable digital ecosystem that drives growth.
        </p>

        <button className="bg-white text-black px-10 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto">
          Start Project <ChevronRight size={16}/>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 text-center text-xs text-gray-400">
        Blucom Development © 2026
      </footer>
    </div>
  );
};

export default WebDevelopmentKinetic;