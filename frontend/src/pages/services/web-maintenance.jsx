import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  RefreshCw, 
  Search, 
  Smartphone, 
  BarChart3, 
  Lock, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Terminal,
  Server,
  Database,
  CheckCircle2,
  AlertCircle,
  HardDrive
} from 'lucide-react';

const WebMaintenanceGuardian = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* 1. THE UPTIME PROTOCOL (Hero Section) */}
      <section className="relative pt-44 pb-36 px-6">
        {/* Light grid background variation */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#E5F9F1 1px, transparent 1px), linear-gradient(90deg, #E5F9F1 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F0FDFA] border border-[#00AE80]/20 mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AE80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AE80]"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#00AE80]">System Status: Optimal v.24</span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter mb-10">
            Web<br/>
            <span className="text-[#00AE80]">Fortress</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-12">
              Your website is the <span className="font-bold text-[#011f18]">frontline</span> of your brand experience. At our Branding Agency in Islamabad, we protect your digital assets through strategic maintenance, optimization, and security best practices.
            </p>
            
            <div className="grid grid-cols-3 gap-6 border-y border-gray-100 py-10">
              {[
                { label: "Secured Daily", val: "30k+" },
                { label: "Bounce Risk", val: "60%" },
                { label: "Uptime", val: "99.9%" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="block text-3xl font-black text-[#011f18]">{stat.val}</span>
                  <span className="text-[10px] font-black tracking-widest text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FACETS (Methodology Section) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#011f18] mb-12">Our Methodology</h2>
          <div className="grid lg:grid-cols-4 gap-px border border-gray-200">
            {[
              { title: "Enhanced Security", desc: "Daily monitoring, updates, and protection to reinforce brand trust and safeguard customer data.", icon: ShieldCheck },
              { title: "Optimized Performance", desc: "Technical audits, caching, and compression to improve speed, SEO optimization, and engagement.", icon: Zap },
              { title: "Content Accuracy", desc: "Routine checks and content updates aligned with marketing trends to maintain relevance and authority.", icon: RefreshCw },
              { title: "Device Consistency", desc: "Ensuring responsive experiences across all devices for multi-channel marketing alignment.", icon: Smartphone }
            ].map((facet, i) => (
              <div key={i} className="bg-white p-10 border-b border-gray-200 group cursor-default">
                <facet.icon className="text-[#00AE80] mb-6" size={28} />
                <h4 className="text-sm font-black tracking-tighter mb-3 text-[#011f18]">{facet.title}</h4>
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed">{facet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL INTELLIGENCE (The Grid) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h3 className="text-4xl font-black mb-6">Preventive. Proactive. Strategic.</h3>
            <p className="text-gray-600 leading-relaxed">
              Our approach combines AI-powered analytics with expert maintenance, anticipating issues before they impact performance or ROI. From performance tracking to B2B authority maintenance, our preventive strategy ensures your website drives business outcomes.
            </p>
            <div className="space-y-4">
              {[
                "Analytics & insights tracking",
                "Performance marketing alignment",
                "Security patch deployment",
                "B2B authority maintenance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-3 border-b border-gray-100">
                  <CheckCircle2 size={16} className="text-[#00AE80]" />
                  <span className="text-[11px] font-bold text-[#011f18]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 p-10 border border-gray-200">
              <Terminal className="text-[#00AE80] mb-4" />
              <div className="font-mono text-[10px] text-gray-500 leading-relaxed space-y-2">
                <p>// Initializing Performance Audit...</p>
                <p className="text-[#00AE80]">: Caching layer enabled</p>
                <p>// Image compression: 85% reduction</p>
                <p className="text-[#00AE80]">: Vulnerability scan: 0 threats</p>
                <p>// Compliance check: Passed</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs font-bold text-gray-600 italic">Web maintenance is not merely fixing issues; it is a continuous strategy for growth and optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GROWTH DRIVE (Integration) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart3 className="mx-auto text-[#00AE80] mb-8" size={48} />
          <h2 className="text-3xl font-black mb-6">Maintenance as a <span className="text-[#00AE80]">Growth Driver</span></h2>
          <p className="text-[12px] text-gray-600 leading-relaxed mb-12">
            By integrating website upkeep with SEO strategy, B2B digital marketing campaigns, and content marketing trends, we help businesses convert traffic into leads and leads into loyal customers. Every update supports measurable growth and ROI.
          </p>
          <div className="inline-flex items-center gap-6 text-[10px] font-black text-[#011f18] uppercase tracking-widest">
            <span>SEO Strategy</span>
            <div className="w-1 h-1 bg-gray-400"></div>
            <span>Lead Nurturing</span>
            <div className="w-1 h-1 bg-gray-400"></div>
            <span>Retargeting</span>
          </div>
        </div>
      </section>

      {/* 5. GUARDIAN FOOTER */}
      <footer className="pt-24 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-start">
            <div>
              <h2 className="text-6xl md:text-[7rem] font-black mb-6">Always <span className="text-[#00AE80]">Active</span></h2>
              <p className="text-[11px] text-gray-600 leading-relaxed font-bold mb-4">
                Protecting digital assets while enhancing brand impact, engagement, and ROI.
              </p>
              <p className="flex items-center gap-3 text-gray-500"><Globe size={14}/> Islamabad, PK</p>
            </div>

            <div className="relative p-1 border border-gray-200">
              <div className="bg-white p-10 shadow-sm border border-gray-100">
                <h5 className="font-black text-xs mb-4 flex items-center gap-3">
                  <HardDrive size={16} className="text-[#00AE80]" /> Start Maintenance
                </h5>
                <p className="text-[10px] text-gray-500 font-bold italic mb-6">
                  Keep your website secure, fast, and fully functional to support digital growth and ROI.
                </p>
                <button className="w-full bg-[#00AE80] text-white py-4 font-black text-[11px] hover:bg-[#00CC95] transition-all flex items-center justify-center gap-2">
                  Secure My Platform <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[9px] text-gray-400 font-black uppercase tracking-widest">
            <p>Blucom Defense © 2026</p>
            <div className="flex gap-6">
              <span className="flex items-center gap-1"><Lock size={10}/> Encrypted</span>
              <span className="flex items-center gap-1"><Server size={10}/> Monitored</span>
            </div>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>Web Maintenance Services | Branding Agency Islamabad</h1>
        <p>
          In today’s fast-paced digital ecosystem, a website is more than just a presence—it is the frontline of your brand experience. Web maintenance protects your investment, ensures seamless user experience, and integrates with marketing strategies. Our methodology combines proactive monitoring, security audits, performance optimization, content accuracy, and responsive design maintenance. Leveraging AI-powered analytics and predictive tools, we anticipate issues before they affect performance. Maintenance aligns technical upkeep with marketing campaigns, SEO strategy, and B2B growth initiatives, turning updates into opportunities for engagement and lead conversion. From startups to enterprise B2B businesses, our web maintenance services enhance brand trust, digital authority, and measurable ROI.
        </p>
      </div>

    </div>
  );
};

export default WebMaintenanceGuardian;