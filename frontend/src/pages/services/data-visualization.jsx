import React from 'react';
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
  Search
} from 'lucide-react';

const DataVisualizationSpectrum = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* 1. HERO SECTION - VELOCITY OF SIGHT */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Light background gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AE80] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0FDFA] opacity-[0.08] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-10 bg-white px-5 py-2 border border-gray-100 shadow-sm">
              <BrainCircuit size={16} className="text-[#00AE80]" />
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-500">Cognitive velocity v.25</span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] tracking-tight mb-12">
              Data<br/>
              <span className="text-[#00AE80]">Vision.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
              <p className="text-2xl md:text-3xl text-gray-600 font-light leading-snug max-w-xl">
                Raw data alone does not drive decisions—<span className="text-[#011f18] font-bold italic underline decoration-[#00AE80] decoration-4 underline-offset-8">insightful narratives do.</span> At our branding agency in Islamabad, we transform complexity into actionable insights for business growth.
              </p>

              <div className="relative group">
                <div className="bg-[#F8FAFC] p-10 border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-end mb-8">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black tracking-widest text-gray-400">Processing speed</span>
                      <div className="text-4xl font-black text-[#00AE80]">60,000<span className="text-[#00FFC2]">x</span></div>
                    </div>
                    <Zap className="text-[#00AE80] animate-pulse" size={24} />
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold leading-relaxed tracking-wide">
                    The brain processes visuals faster than text. Our visualizations bridge the gap between analytics and strategic action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE BENEFITS - ANALYTIC ENGINE */}
      <section className="py-32 px-6 relative bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black tracking-tight mb-6">Strategic <span className="text-[#00AE80]">utility</span></h2>
              <p className="text-sm text-gray-600 font-bold tracking-widest leading-relaxed">
                From B2B digital marketing strategy to real-time performance tracking, our professional visualization services deliver measurable business outcomes and actionable insights.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm border text-[#00AE80]"><PieChart size={20}/></div>
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm border text-[#00AE80]"><BarChart3 size={20}/></div>
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm border text-[#00AE80]"><LineChart size={20}/></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[{
              title: "Simplified logic", body: "Identify trends and anomalies quickly for strategic planning.", icon: Eye
            },{
              title: "Brand stories", body: "Visual data ensures insights resonate with stakeholders.", icon: Share2
            },{
              title: "Real-time clarity", body: "Instant monitoring of ROI and lead generation metrics.", icon: MonitorDot
            },{
              title: "Team alignment", body: "Optimize customer journey across marketing, sales, and operations.", icon: Network
            },{
              title: "30% efficiency", body: "Implement digital marketing solutions to maximize growth.", icon: TrendingUp
            }].map((benefit,i)=>(
              <div key={i} className="p-8 bg-white border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-10 h-10 bg-[#F0FDFA] flex items-center justify-center mb-6">
                  <benefit.icon className="text-[#00AE80]" size={18}/>
                </div>
                <h4 className="text-[12px] font-black tracking-widest mb-4 leading-tight">{benefit.title}</h4>
                <p className="text-[10px] text-gray-500 font-bold leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY - DESIGN MEETS DATA */}
      <section className="py-32 px-6 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#FFFFFF] p-10 flex flex-col justify-between border border-gray-200 group overflow-hidden">
                  <Shapes className="text-[#00AE80] group-hover:scale-125 transition-transform"/>
                  <span className="text-[11px] font-black tracking-[0.2em] text-gray-700">Tableau / Power BI / Custom dashboards</span>
                </div>
                <div className="aspect-square bg-[#E6FDF5] p-10 flex flex-col justify-between border border-gray-200">
                  <Target className="text-[#00AE80]"/>
                  <span className="text-[11px] font-black tracking-[0.2em] text-gray-700">Customer journey optimization</span>
                </div>
              </div>

              {/* Floating Meta Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-200 shadow-lg w-64">
                <div className="flex items-center gap-3 mb-4">
                  <Fingerprint className="text-[#00AE80]" size={16}/>
                  <span className="text-[9px] font-black tracking-widest text-gray-700">Predictive insights</span>
                </div>
                <p className="text-[9px] text-gray-500 font-bold leading-tight">AI-powered analytics to anticipate behavior and refine messaging.</p>
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-xs font-black tracking-[0.3em] text-[#00AE80]">Our methodology</h4>
              <p className="text-3xl font-light text-gray-600 leading-tight">
                Data visualization is not just charts—it is <span className="text-[#011f18] font-bold">storytelling, clarity, and strategy</span>. Every dashboard is designed to inform decisions and align with business growth.
              </p>
              <div className="space-y-6">
                {[{
                  label:"High-converting dashboards", icon: MousePointerClick
                },{
                  label:"SEO content strategy integrated reporting", icon: Search
                },{
                  label:"Predictive analytics integration", icon: BrainCircuit
                }].map((item, idx)=>(
                  <div key={idx} className="flex items-center gap-6 group cursor-default">
                    <item.icon size={20} className="text-gray-400 group-hover:text-[#00AE80] transition-colors"/>
                    <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 group-hover:text-[#011f18] transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANDED REPRESENTATION */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Activity className="mx-auto text-[#00AE80] mb-12 animate-bounce" size={48}/>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-none">Numbers into <span className="text-[#00AE80]">stories</span></h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-16">
            Combining data visualization with brand experience marketing ensures every visual reinforces identity, enhances decision-making, and drives measurable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Decision-making","ROI growth","B2B marketing insights"].map((tag,i)=>(
              <div key={i} className="px-8 py-4 border border-gray-100 text-[10px] font-black tracking-[0.3em] text-gray-600">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="pt-32 pb-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
            <div>
              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_,i)=>(
                  <div key={i} className="w-8 h-1 bg-[#00AE80]" style={{opacity:1-(i*0.2)}}/>
                ))}
              </div>
              <h2 className="text-7xl md:text-[9rem] font-black tracking-tight leading-[0.8] mb-12">Clear <br/><span className="text-[#00AE80]">Impact</span></h2>
              <div className="flex flex-col gap-6 text-[10px] font-black tracking-widest text-gray-600">
                <p className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F0FDFA] flex items-center justify-center text-[#00AE80]"><TrendingUp size={16}/></div>
                  Accelerate B2B growth marketing
                </p>
                <div className="pt-10 border-t border-gray-200 max-w-sm">
                  <p className="leading-relaxed text-[11px]">Islamabad</p>
                  <p className="text-[#00AE80] mt-2 tracking-[0.5em]">connect@blucomtechnologies.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 border border-gray-200 relative overflow-hidden">
              <h5 className="font-black text-xs mb-6 tracking-widest">Transform your analytics</h5>
              <p className="text-[11px] text-gray-500 font-bold leading-relaxed mb-12">
                Partner with us to turn analytics into intuitive, impactful visuals that inform, engage, and inspire business growth.
              </p>
              <button className="w-full py-6 bg-[#00AE80] text-white font-black text-[11px] tracking-[0.4em] hover:bg-[#00FFC2] transition-all flex items-center justify-center gap-4">
                Visualize your growth <ChevronRight size={18}/>
              </button>
            </div>
          </div>

          {/* SEO Metadata */}
          <div className="hidden">
            <h1>Data visualization services | Branding agency Islamabad</h1>
            <p>
              Transform complex data into actionable insights with professional data visualization. Enhance decision-making, brand storytelling, and digital marketing strategy. Leveraging AI-powered analytics and predictive insights, our visualizations align with B2B growth marketing and customer journey optimization.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataVisualizationSpectrum;