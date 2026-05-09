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

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6">
        {/* Light Grid Hero Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#00AE80 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-10 bg-[#F1F5F9] px-4 py-2 border border-gray-300">
              <Terminal size={14} className="text-[#00AE80]" />
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-gray-500">
                System.initialize(Web_dev_v.26)
              </span>
            </div>
            
            <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tight mb-12">
              Digital<br/>
              <span className="text-[#00AE80]">Engine.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start w-full">
              <p className="text-2xl md:text-3xl text-gray-600 font-light leading-snug max-w-xl">
                More than a business card—it is the <span className="text-[#011f18] font-bold">backbone</span> of your digital strategy, empowering brands to engage, convert, and scale online.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 p-6 bg-[#F8FAFC] border-l-4 border-[#00AE80]">
                  <div className="text-4xl font-black text-[#011f18]">53%</div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                    Users abandon websites taking longer than three seconds.
                  </p>
                </div>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em] italic">
                  Scalable. Engaging. Revenue-driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS SECTION */}
      <section className="py-32 px-6 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-4">
                Effective <span className="text-[#00AE80]">components</span>
              </h2>
              <p className="text-[11px] text-gray-600 font-bold tracking-[0.3em]">
                Built for performance and digital growth.
              </p>
            </div>
            <Boxes className="text-gray-300" size={40} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300 border">
            {[
              { title: "Custom UX/UI", icon: Layout },
              { title: "Mobile-first", icon: Smartphone },
              { title: "Speed optimized", icon: Zap },
              { title: "SEO-ready", icon: Search },
              { title: "Secure infra", icon: ShieldCheck },
              { title: "Scalable build", icon: Maximize2 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 border-b border-r border-gray-200 hover:bg-[#F1F5F9] transition-all">
                <item.icon className="text-[#00AE80] mb-6" size={24} />
                <h4 className="text-[12px] font-black tracking-widest">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Advanced <span className="text-[#00AE80]">engagement</span>
            </h3>

            {[{ label: "Dashboards", icon: BarChart3 },
              { label: "CRO pages", icon: MousePointerClick },
              { label: "AI personalization", icon: Cpu },
              { label: "CMS flexibility", icon: ArrowUpDown }].map((f, i) => (
              <div key={i} className="flex gap-4 items-center">
                <f.icon className="text-[#00AE80]" size={20} />
                <span className="text-xs font-bold">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#F8FAFC] text-[#011f18] p-12 border border-gray-200">
            <Code2 size={40} className="text-[#00AE80] mb-6"/>
            <h4 className="text-2xl font-black mb-4">Agile development</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We combine technical excellence, performance optimization, and growth strategy to deliver measurable ROI and seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-32 px-6 bg-[#F0FFF9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h4 className="text-sm font-black tracking-widest text-[#00AE80]">Our methodology</h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                At our agency, web development is not just about coding—it is about <span className="font-bold text-[#011f18]">storytelling, clarity, and strategy</span>. We merge design, performance, and digital marketing insights to craft sites that convert.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: "High-converting dashboards", icon: MousePointerClick },
                  { label: "SEO content strategy integration", icon: Search },
                  { label: "Predictive analytics integration", icon: Cpu },
                  { label: "Customer journey optimization", icon: UserCheck },
                  { label: "Performance-focused coding", icon: Code2 }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <item.icon className="text-[#00AE80]" size={20} />
                    <span className="text-sm font-bold text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 p-10 flex flex-col gap-6 bg-white">
              <div className="flex flex-col gap-4">
                <Database size={30} className="text-[#00AE80]" />
                <p className="text-sm text-gray-500">
                  Secure and scalable backend infrastructure ensures reliability and long-term growth.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Globe size={30} className="text-[#00AE80]" />
                <p className="text-sm text-gray-500">
                  Responsive, mobile-first architecture guarantees your users experience seamless interactions across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 bg-[#00AE80] text-white text-center">
        <Globe size={40} className="mx-auto mb-6"/>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Build <span className="text-white">smarter</span>
        </h2>
        <p className="opacity-80 mb-10">
          Create a scalable digital ecosystem that drives engagement, growth, and measurable results.
        </p>

        <button className="bg-white text-[#011f18] px-10 py-4 border border-[#011f18] font-bold flex items-center gap-3 mx-auto">
          Start project <ChevronRight size={16}/>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 text-center text-xs text-gray-500">
        Blucom Development © 2026
      </footer>

      {/* SEO & Social Schema */}
      <div className="hidden">
        <h1>Web Development Services | Branding Agency Islamabad</h1>
        <p>Elevate your brand with professional web development. Enhance UX/UI, optimize performance, and support digital marketing growth strategy. Our services include agile development, SEO integration, predictive analytics, high-converting dashboards, and mobile-first design. Partner with our agency to transform your digital presence into a growth engine that engages, converts, and scales.</p>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Blucom Development",
            "url": "https://www.blucomtechnologies.com",
            "logo": "https://www.blucomtechnologies.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/blucom",
              "https://www.facebook.com/blucom",
              "https://twitter.com/blucom"
            ],
            "description": "Professional web development services combining UX/UI, performance, and digital marketing growth strategy.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Islamabad",
              "addressCountry": "PK"
            }
          }
          `}
        </script>
      </div>

    </div>
  );
};

export default WebDevelopmentKinetic;