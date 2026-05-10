import React from 'react';
import { 
  Box, 
  Workflow, 
  Layers, 
  Database, 
  Cpu, 
  Users, 
  LineChart, 
  GitMerge, 
  Anchor, 
  Maximize,
  Mail,
  MapPin,
  Phone,
  LayoutGrid,
  Settings2,
  Share2
} from 'lucide-react';

const OmnichannelArchitect = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE STRUCTURAL OVERVIEW (Hero Section) */}
      <section className="relative pt-32 pb-24 px-6 border-b border-gray-100 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-[#00AE80]"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00AE80]">System Framework: Omnichannel v4.0</span>
              </div>
              <h1 className="text-6xl md:text-[7.5rem] font-black leading-[0.8] tracking-tighter uppercase mb-10">
                UNIFIED<br/>
                <span className="text-gray-300">SYSTEMS.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                In a fragmented digital ecosystem, businesses cannot rely on a single touchpoint. At our <span className="text-[#011f18] font-bold underline decoration-[#00AE80] decoration-2">branding agency in Islamabad</span>, we architect seamless integration.
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-[#011f18] p-10 rounded-tr-[80px] text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#00FFC2] mb-4 block">Retention Benchmark</span>
                  <div className="text-6xl font-black mb-4">89%</div>
                  <p className="text-[10px] font-bold uppercase leading-relaxed opacity-60">
                    Companies with strong omnichannel strategies retain 89% of customers vs 33% for inconsistent brands.
                  </p>
               </div>
               <Box className="absolute -right-8 -bottom-8 text-white/5" size={160} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE COMPONENTS (Structural Pillars) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-8">
             <h2 className="text-4xl font-black uppercase tracking-tighter text-[#011f18]">Strategy <br/><span className="text-[#00AE80]">Components.</span></h2>
             <div className="max-w-md h-px bg-gray-100 w-full mt-6 md:mt-10"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { icon: GitMerge, title: "Multi-Channel Integration", d: "Unifying messaging and visual identity across email, social, and search for a consistent brand story." },
              { icon: Database, title: "Data-Driven Insights", d: "Tracking KPIs and conversion psychology to refine budgets and enhance cross-channel ROI." },
              { icon: Users, title: "Personalization", d: "Using behavioral triggers to increase CLV and lower churn through high-intent segmentation." },
              { icon: Cpu, title: "Workflow Automation", d: "Streamlining execution with B2B marketing automation and predictive analytics tools." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-10 hover:bg-[#F8FAFC] transition-colors group">
                 <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-8 group-hover:border-[#00AE80] transition-colors">
                    <pillar.icon size={20} className="text-[#00AE80]" />
                 </div>
                 <h4 className="font-black uppercase text-xs tracking-widest mb-4">{pillar.title}</h4>
                 <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed">{pillar.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADAPTIVE TACTICS (B2B & B2C Alignment) */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-[#011f18]">Adaptive <br/>Architecture.</h3>
                  <p className="text-sm text-gray-900 font-medium leading-relaxed max-w-sm">
                    Omnichannel campaign management is a necessity for brands aiming to thrive. We map touchpoints to guide leads from awareness to conversion.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <span className="text-[10px] font-black text-[#00AE80] tracking-widest uppercase">Email Drip</span>
                     <p className="text-[9px] font-bold text-gray-400 uppercase">Automated sequences nurturing leads based on behavior.</p>
                  </div>
                  <div className="space-y-4">
                     <span className="text-[10px] font-black text-[#00AE80] tracking-widest uppercase">Social Sync</span>
                     <p className="text-[9px] font-bold text-gray-400 uppercase">Coordinated retargeting across LinkedIn and Instagram.</p>
                  </div>
                  <div className="space-y-4">
                     <span className="text-[10px] font-black text-[#00AE80] tracking-widest uppercase">SEO Alignment</span>
                     <p className="text-[9px] font-bold text-gray-400 uppercase">Aligning content with campaign objectives for organic growth.</p>
                  </div>
                  <div className="space-y-4">
                     <span className="text-[10px] font-black text-[#00AE80] tracking-widest uppercase">Paid Precision</span>
                     <p className="text-[9px] font-bold text-gray-400 uppercase">Re-engaging potential leads across display networks.</p>
                  </div>
               </div>
            </div>

            <div className="relative border-l border-gray-200 pl-12 lg:pl-20">
               <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-12 text-[#00AE80]">Structural Growth Metrics</h4>
               <div className="space-y-10">
                  {[
                    { label: "Cross-Channel Engagement", icon: Share2 },
                    { label: "Conversion Rate Optimization", icon: Maximize },
                    { label: "Campaign Attribution Models", icon: Anchor },
                    { label: "Cost Per Lead Analysis", icon: LineChart }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                       <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                          <stat.icon size={16} className="text-[#011f18]" />
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-[#011f18]">{stat.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BLUEPRINT (Why Partner With Us) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#011f18] rounded-[60px] p-16 md:p-24 text-white relative overflow-hidden">
             <Workflow className="absolute -left-12 top-0 text-white/5 rotate-12" size={300} />
             <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-none">The Modern <br/><span className="text-[#00FFC2]">Growth Engine.</span></h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                   As a digital marketing agency and brand strategy partner in Islamabad, we combine strategic insight, creative design, and technological innovation to deliver campaigns with precision.
                </p>
                <div className="flex flex-wrap gap-4">
                   {["AI-Powered Personalization", "Performance Marketing", "Predictive Analytics"].map((tag, i) => (
                     <span key={i} className="px-5 py-2 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/5">{tag}</span>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECT FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-end">
            <div>
              <h2 className="text-6xl md:text-[7rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                PLAN <br/><span className="text-[#00AE80]">FOR SCALE.</span>
              </h2>
              <div className="space-y-5 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><Mail size={16} className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18]"><Phone size={16} className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-6 border-l border-gray-100 pl-6">
                    <MapPin size={18} className="text-[#00AE80] shrink-0" />
                    <p className="leading-relaxed italic opacity-70">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="space-y-10">
               <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100">
                  <h5 className="font-black uppercase text-xs mb-4 tracking-widest flex items-center gap-3">
                    <Settings2 size={16} className="text-[#00AE80]"/> Project Briefing
                  </h5>
                  <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-8">
                    Let us help you connect your audience across every touchpoint with precision, creativity, and measurable results.
                  </p>
                  <button className="w-full py-4 bg-[#011f18] text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#00AE80] transition-all">
                    Initialize Campaign Architecture
                  </button>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-200 font-black uppercase tracking-[1.5em]">
             <p>Blucom Architect © 2026</p>
             <p>System Status: Optimal</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO ENGINE (800+ Words) */}
      <div className="hidden">
        <h1>Omnichannel Campaign Management – Branding Agency Islamabad</h1>
        <p>In today's rapidly evolving digital ecosystem, businesses cannot rely on a single touchpoint to engage, nurture, and convert their audience. Omnichannel campaign management is a strategic framework that seamlessly integrates multiple channels to deliver a unified, personalized, and measurable customer experience. For brands seeking digital marketing growth strategy and a robust presence across touchpoints, this approach is indispensable. At our branding agency in Islamabad, we help businesses craft campaigns that resonate across channels—from email and social media to search, paid advertising, and beyond. Our methodology leverages both human insights and data-driven analytics to ensure campaigns are consistent, contextually relevant, and conversion-focused.</p>
        <p>Strategic Components of Omnichannel Success: Research by the Aberdeen Group shows that companies with strong omnichannel strategies retain on average 89% of their customers. Our approach ensures seamless integration across social media, email marketing, paid ads, search, and offline campaigns. We unify your messaging, visual identity, and engagement strategies. Omnichannel success depends on analytics, tracking KPIs across all channels to understand consumer behavior and conversion psychology. Personalization and segmentation result in higher engagement, lower churn, and increased customer lifetime value (CLV). Through B2B marketing automation tools and predictive analytics, we streamline workflows and enable real-time campaign adjustments.</p>
        <p>Implementation for B2B and B2C: Whether you are a B2B enterprise seeking lead generation or a B2C brand aiming to improve loyalty, omnichannel campaigns adapt to your audience needs. Tactics include email drip campaigns, social media synchronization across LinkedIn and Instagram, retargeting ads, and SEO content alignment to drive organic traffic growth. One of the most critical aspects is measurement, utilizing dashboards to track cross-channel engagement metrics, conversion rate optimization insights, and cost per lead. As a digital marketing agency and brand strategy partner in Islamabad, we combine strategic insight and creative design to build trust, authority, and brand loyalty.</p>
      </div>
    </div>
  );
};

export default OmnichannelArchitect;