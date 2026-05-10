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
      <section className="relative pt-44 pb-32 px-6 border-b border-gray-50">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#011f18 1px, transparent 1px), linear-gradient(90deg, #011f18 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F0FDFA] rounded-full mb-10 border border-[#00AE80]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AE80]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00AE80]">System Status: Optimal v.24</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              WEB<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#011f18] to-[#00AE80]">FORTRESS.</span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                A website is the <span className="text-[#011f18] font-bold">frontline</span> of your brand experience. At our Branding Agency in Islamabad, we protect your investment through expert maintenance and proactive strategy.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-y border-gray-100 py-10">
                {[
                  { label: "Secured Daily", val: "30k+" },
                  { label: "Bounce Risk", val: "60%" },
                  { label: "Uptime", val: "99.9%" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-2xl font-black text-[#011f18]">{stat.val}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE FACETS (Proactive Maintenance) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: "Enhanced Security", desc: "Regular updates and monitoring to reinforce brand trust building and protect customer data.", icon: ShieldCheck },
              { title: "Optimized Performance", desc: "Image compression and code refinement for SEO content optimization and organic growth.", icon: Zap },
              { title: "Content Accuracy", desc: "Routine checks and content marketing integration to sustain engagement and authority.", icon: RefreshCw },
              { title: "Device Consistency", desc: "Responsive maintenance ensuring social media brand strategy and multi-channel marketing support.", icon: Smartphone }
            ].map((facet, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#F8FAFC] transition-colors group">
                <facet.icon className="text-[#00AE80] mb-8 group-hover:rotate-12 transition-transform" size={28} />
                <h4 className="text-sm font-black uppercase tracking-tighter mb-4">{facet.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase">{facet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL INTELLIGENCE (The Grid) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[40px] mx-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">Preventive. Proactive. <br/><span className="text-[#00AE80]">Strategic.</span></h3>
                  <p className="text-sm opacity-50 leading-relaxed uppercase font-bold tracking-widest">
                    Leveraging AI-powered personalization and predictive marketing analytics to anticipate potential problems before they impact your ROI.
                  </p>
               </div>
               
               <div className="space-y-6">
                  {[
                    "Analytics & Insights Tracking",
                    "Performance Marketing Alignment",
                    "Security Patch Deployment",
                    "B2B Authority Maintenance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-4 border-b border-white/5 group cursor-default">
                       <CheckCircle2 size={16} className="text-[#00FFC2]" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]">
                  <Terminal className="text-[#00AE80] mb-6" />
                  <div className="space-y-4 font-mono text-[10px] opacity-40 uppercase tracking-widest leading-loose">
                    <p>// Initializing Performance Audit...</p>
                    <p className="text-[#00FFC2]"> :Caching Layer: Enabled</p>
                    
                    <p>// Image Compression: 85% Reduction</p>
                    <p className="text-[#00FFC2]"> : Vulnerability Scan: 0 Threats</p>
                    <p>// Compliance Check: Passed</p>
                  </div>
                  <div className="mt-12 pt-10 border-t border-white/5">
                     <p className="text-xs font-bold uppercase leading-relaxed italic">
                       Web maintenance is not merely about fixing links; it is an ongoing commitment to your digital brand growth.
                     </p>
                  </div>
               </div>
               {/* Decorative Element */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00AE80] opacity-20 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GROWTH DRIVE (Integration) */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart3 className="mx-auto text-gray-200 mb-12" size={48} />
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Maintenance as a <span className="text-[#00AE80]">Growth Driver.</span></h2>
          <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] leading-loose mb-16">
            By combining web upkeep with B2B digital marketing strategy and content marketing trends, we help businesses convert traffic into leads. Your brand stays ahead of technology and security risks while leveraging every update for high ROI.
          </p>
          <div className="inline-flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-[#011f18]">
             <span>SEO Strategy</span>
             <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
             <span>Lead Nurturing</span>
             <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
             <span>Retargeting</span>
          </div>
        </div>
      </section>

      {/* 5. GUARDIAN FOOTER */}
      <footer className="pt-24 pb-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
            <div>
              <h2 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-12">
                ALWAYS <br/><span className="text-[#00AE80]">ACTIVE.</span>
              </h2>
              <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-[#00AE80] transition-colors cursor-pointer">
                    <Globe size={14}/> ISLAMABAD, PK
                 </p>
                 <div className="pt-10 border-t border-gray-200 max-w-sm">
                    <p className="text-gray-400 leading-relaxed font-bold">Protecting digital assets while amplifying brand impact, engagement, and ROI.</p>
                 </div>
              </div>
            </div>

            <div className="relative p-1 bg-gradient-to-br from-gray-100 to-white rounded-[40px]">
               <div className="bg-white p-12 rounded-[38px] shadow-sm">
                  <h5 className="font-black uppercase text-xs mb-6 tracking-widest flex items-center gap-3">
                    <HardDrive size={16} className="text-[#00AE80]" /> Start Maintenance
                  </h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed mb-10 italic">
                    Ensuring your website remains secure, fast, and fully functional is a strategic investment in your digital future.
                  </p>
                  <button className="w-full bg-[#011f18] text-white py-6 rounded-lg font-black uppercase text-[11px] tracking-widest hover:bg-[#00AE80] transition-all flex items-center justify-center gap-4">
                    Secure My Platform <ChevronRight size={18} />
                  </button>
               </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-200 flex justify-between items-center text-[9px] text-gray-300 font-black uppercase tracking-[2em]">
             <p>Blucom Defense © 2026</p>
             <div className="flex gap-10 opacity-0 md:opacity-100">
                <span className="flex items-center gap-2 italic"><Lock size={10}/> Encrypted</span>
                <span className="flex items-center gap-2 italic"><Server size={10}/> Monitored</span>
             </div>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>Web Maintenance Services | Branding Agency Islamabad</h1>
        <p>In today’s fast-paced digital ecosystem, a website is the frontline of your brand experience. Ensuring it remains secure, fast, and fully functional is critical. At our Branding Agency in Islamabad, we offer expert Web Maintenance services to protect your investment and enhance user experience. Web maintenance is an ongoing commitment to your digital brand. 60% of users abandon websites that load slowly. By integrating digital marketing solutions with consistent maintenance, businesses ensure their platforms contribute to lead generation and conversion. Maintenance encompasses security, performance optimization, and compliance with digital marketing trends. Core benefits include enhanced security with over 30,000 websites hacked daily, optimized performance through caching and image compression, and content accuracy via routine SEO checks. Responsive design maintenance ensures consistency across devices and social media brand strategy integration. We use a preventive and proactive methodology, leveraging AI-powered personalization and predictive marketing analytics to anticipate problems. Our approach aligns technical maintenance with marketing goals, from performance marketing campaigns to chatbot integration. Web maintenance directly contributes to growth by combining upkeep with B2B digital marketing strategy and content marketing trends. We are a leading digital marketing company in Islamabad that integrates brand experience marketing and customer journey optimization to protect your digital presence while amplifying ROI.</p>
      </div>
    </div>
  );
};

export default WebMaintenanceGuardian;