import React from 'react';

// ✅ Lucide Icons (ONLY icons here)
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Activity, 
  Layers, 
  Fingerprint, 
  Zap, 
  Share2, 
  TrendingUp, 
  BrainCircuit, 
  MonitorDot, 
  Target, 
  ChevronRight, 
  Shapes,
  Eye,
  MousePointerClick,
  Network,
  Search // ✅ FIXED (added)
} from 'lucide-react';

const DataVisualizationSpectrum = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE VELOCITY OF SIGHT (Hero Section) */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Prismatic Mesh Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AE80] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#011f18] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-10 bg-white/80 backdrop-blur-xl px-5 py-2 rounded-full border border-gray-100 shadow-sm">
              <BrainCircuit size={16} className="text-[#00AE80]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Cognitive Velocity v.25</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase mb-12">
              DATA<br/>
              <span className="text-[#00AE80]">VISION.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-xl">
                Raw data alone does not drive decisions—<span className="text-[#011f18] font-bold italic underline decoration-[#00AE80] decoration-4 underline-offset-8">insightful narratives do.</span> At our Branding Agency in Islamabad, we transform complexity into action.
              </p>
              
              <div className="relative group">
                <div className="bg-[#F8FAFC] p-10 rounded-[40px] border border-gray-100 relative overflow-hidden">
                  <div className="flex justify-between items-end mb-8">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">Processing Speed</span>
                      <div className="text-4xl font-black text-[#011f18]">60,000<span className="text-[#00AE80]">x</span></div>
                    </div>
                    <Zap className="text-[#00AE80] animate-pulse" size={24} />
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed tracking-wider">
                    The brain processes visuals faster than text. Our visualizations bridge the gap between analytics and action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ANALYTIC ENGINE (Core Benefits) */}
      <section className="py-32 px-6 relative bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Strategic <span className="text-[#00AE80]">Utility.</span></h2>
              <p className="text-sm text-gray-900 font-bold uppercase tracking-widest leading-relaxed">
                From B2B digital marketing strategy to real-time performance tracking, our professional visualization services deliver measurable business outcomes.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100 text-[#00AE80]"><PieChart size={20}/></div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100 text-[#00AE80]"><BarChart3 size={20}/></div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100 text-[#00AE80]"><LineChart size={20}/></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Simplified Logic", body: "Identify trends and anomalies at a glance for faster strategic planning.", icon: Eye },
              { title: "Brand Stories", body: "Visual data ensures insights resonate deeply with your stakeholders.", icon: Share2 },
              { title: "Real-Time Clarity", body: "Instant monitoring of campaign ROI and lead generation metrics.", icon: MonitorDot },
              { title: "Team Alignment", body: "Optimizing the customer journey across marketing, sales, and operations.", icon: Network },
              { title: "30% Efficiency", body: "Implementing digital marketing solutions that maximize growth.", icon: TrendingUp }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[30px] hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-10 h-10 rounded-full bg-[#F0FDFA] flex items-center justify-center mb-6">
                  <benefit.icon className="text-[#00AE80]" size={18} />
                </div>
                <h4 className="text-[12px] font-black uppercase tracking-widest mb-4 leading-tight">{benefit.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGN MEETS DATA (The Methodology) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#011f18] rounded-[40px] p-10 flex flex-col justify-between text-white group overflow-hidden">
                  <Shapes className="text-[#00FFC2] group-hover:scale-125 transition-transform" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Tableau / Power BI / Custom</span>
                </div>
                <div className="aspect-square bg-[#00AE80] rounded-[40px] p-10 flex flex-col justify-between text-white">
                  <Target />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Customer Journey Optimization</span>
                </div>
              </div>
              {/* Floating Meta Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-100 w-64">
                <div className="flex items-center gap-3 mb-4">
                  <Fingerprint className="text-[#00AE80]" size={16} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Predictive Insights</span>
                </div>
                <p className="text-[9px] text-gray-400 font-bold uppercase leading-tight">AI-powered analytics to anticipate behavior and refine messaging.</p>
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#00AE80]">Our Methodology</h4>
              <p className="text-3xl font-light text-gray-900 leading-tight">
                At our agency, data visualization is not just about charts—it’s about <span className="text-[#011f18] font-bold">storytelling, clarity, and strategy.</span>
              </p>
              <div className="space-y-6">
                 {[
                   { label: "High-Converting Dashboards", icon: MousePointerClick },
                   { label: "SEO Content Strategy Integrated Reporting", icon: Search },
                   { label: "Predictive Analytics Integration", icon: BrainCircuit }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-6 group cursor-default">
                      <item.icon size={20} className="text-gray-200 group-hover:text-[#00AE80] transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#011f18] transition-colors">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANDED REPRESENTATION (Resonance) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[80px] mx-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Activity className="mx-auto text-[#00FFC2] mb-12 animate-bounce" size={48} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">Numbers <br/>into <span className="text-[#00AE80]">Stories.</span></h2>
          <p className="text-xl opacity-60 font-light leading-relaxed mb-16">
            We combine data visualization with brand experience marketing, ensuring every visual reinforces your identity. Tracking KPIs, monitoring engagement, or exploring predictive analytics—we provide a clear lens into your performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             {["Decision-Making", "ROI Growth", "B2B Marketing Insights"].map((tag, i) => (
               <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                 {tag}
               </div>
             ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#ffffff,transparent_70%)]" />
      </section>

      {/* 5. SPECTRUM FOOTER */}
      <footer className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
            <div>
              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-1 bg-[#00AE80]" style={{ opacity: 1 - (i * 0.2) }} />
                ))}
              </div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                CLEAR <br/><span className="text-[#00AE80]">IMPACT.</span>
              </h2>
              <div className="flex flex-col gap-6 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]">
                    <div className="w-10 h-10 rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#00AE80]"><TrendingUp size={16}/></div>
                    Accelerate B2B Growth Marketing
                 </p>
                 <div className="pt-10 border-t border-gray-100 max-w-sm">
                    <p className="leading-relaxed text-[11px]">Islamabad</p>
                    <p className="text-[#00AE80] mt-2 tracking-[0.5em]">connect@blucomtechnologies.com</p>
                 </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-16 rounded-[60px] border border-gray-100 relative overflow-hidden group">
               <h5 className="font-black uppercase text-xs mb-6 tracking-widest">Transform Your Analytics</h5>
               <p className="text-[11px] text-gray-900 font-bold uppercase leading-relaxed mb-12">
                 Partner with us to transform your analytics into intuitive, impactful visuals that inform, engage, and inspire growth. Smarter strategies start here.
               </p>
               <button className="w-full py-6 bg-[#011f18] text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#00AE80] transition-all flex items-center justify-center gap-4 group">
                 Visualize Your Growth <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform"/>
               </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-300 font-black uppercase tracking-[2em] border-t border-gray-100 pt-10">
             <p>Blucom Visual Intelligence © 2026</p>
             <p className="opacity-0 md:opacity-100 italic">Insight Over Information</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>Data Visualization Services | Branding Agency Islamabad</h1>
        <p>In an era dominated by information, raw data alone does not drive business decisions—insightful, visually compelling representation does. At our Branding Agency in Islamabad, we specialize in Data Visualization services that transform complex datasets into actionable narratives. Studies reveal the brain processes visuals 60,000 times faster than text. Visual data leads to 20% faster decision-making and increased stakeholder engagement. For B2B enterprises, clear B2B marketing insights and dashboards enable marketing teams to optimize lead generation and refine digital marketing growth strategy. Core benefits of professional data visualization include simplified decision-making, enhanced brand storytelling, and real-time monitoring of campaign ROI and performance marketing metrics. Our approach combines technical expertise in tools like Tableau and Power BI with UX principles and marketing intelligence. We integrate AI-powered analytics for predictive insights, enabling brands to optimize online marketing strategy. Every visualization is designed with customer journey optimization in mind. As a leading digital marketing agency in Islamabad, we combine data visualization with brand experience marketing to accelerate B2B growth marketing and elevate digital brand growth. Partner with us to transform analytics into impactful visuals that inform, engage, and inspire growth.</p>
      </div>
    </div>
  );
};

export default DataVisualizationSpectrum;