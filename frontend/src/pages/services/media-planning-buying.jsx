import React from 'react';
import { 
  Layers, 
  Maximize, 
  BarChart3, 
  Zap, 
  Crosshair, 
  PieChart,
  Share2,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  TrendingUp,
  Search,
  Cpu
} from 'lucide-react';

const MediaCatalyst = () => {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-[#00FFC2] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-gradient-to-r from-[#CFFFEA] via-[#B8FFD3] to-[#E0FFEC]">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-8">
          Precision in <br />
          <span className="text-emerald-500 ">placement</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed max-w-lg mb-10">
          In today’s digitally saturated marketplace, a brand’s message is only as strong as its placement. At our <span className="font-bold">Branding Agency Islamabad</span>, we turn data-driven insights into actionable media strategies that amplify visibility and maximize ROI.
        </p>
        <button className="bg-white text-[#00AE80] px-12 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-gray-50 transition-all shadow-lg flex items-center gap-3">
          Activate My Media <PlayCircle size={18} />
        </button>
      </div>

      <div className="bg-white p-10 border border-gray-200 flex flex-col gap-6">
        <h3 className="text-gray-700 font-bold text-xs uppercase tracking-widest">Efficiency index</h3>
        <div className="flex justify-between text-sm font-black text-[#00AE80]">
          <span>Campaign effectiveness</span>
          <span>+30%</span>
        </div>
        <div className="h-2 bg-gray-200 w-full overflow-hidden">
          <div className="h-full bg-[#00AE80] w-[30%]"></div>
        </div>
        <p className="text-[10px] text-gray-500 italic leading-relaxed">
          Businesses implementing structured media planning see an average of 25–30% improvement in campaign effectiveness.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Methodology Section */}
      <section className="py-32 px-6 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-[#00AE80]">Our methodology</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 border border-gray-200 bg-gray-50 flex flex-col gap-4">
              <Crosshair size={32} className="text-[#00AE80]" />
              <h3 className="font-bold text-lg text-gray-800">Audience intelligence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Using consumer behavior insights and predictive analytics, we map out demographics, psychographics, and online habits of your target audience.
              </p>
            </div>
            <div className="p-6 border border-gray-200 bg-gray-50 flex flex-col gap-4">
              <Share2 size={32} className="text-[#00AE80]" />
              <h3 className="font-bold text-lg text-gray-800">Integrated media buying</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Negotiating, optimizing, and managing media across programmatic, social, and search channels to maximize visibility and ROI.
              </p>
            </div>
            <div className="p-6 border border-gray-200 bg-gray-50 flex flex-col gap-4">
              <PieChart size={32} className="text-[#00AE80]" />
              <h3 className="font-bold text-lg text-gray-800">AI-driven optimization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI automation, predictive analytics, and real-time personalization forecast audience behavior and optimize campaigns continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-[#011f18]">Channels and optimization</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Crosshair, title: "Programmatic ads", desc: "Targeting based on intent, behavior, and past interactions to ensure every impression counts." },
              { icon: Share2, title: "Social brand strategy", desc: "Leveraging LinkedIn, Instagram, and Facebook with highly personalized messaging for segmented audiences." },
              { icon: Search, title: "SEO and search marketing", desc: "Integrating SEO for businesses with paid campaigns to capture high-intent traffic and reduce CPL." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 bg-white flex flex-col gap-4">
                <item.icon size={32} className="text-[#00AE80]" />
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B/B2C Section */}
      <section className="py-32 px-6 bg-[#00AE80] text-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-black leading-tight">Tailored deployment</h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              Whether B2B lead generation or B2C brand engagement, understanding where your audience consumes content is crucial to media placement decisions.
            </p>
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-white border border-gray-200 text-gray-900">
                <h4 className="font-bold mb-2">B2B strategy</h4>
                <p className="text-sm">Targeting decision-makers via LinkedIn, industry publications, and content syndication.</p>
              </div>
              <div className="p-6 bg-white border border-gray-200 text-gray-900">
                <h4 className="font-bold mb-2">B2C strategy</h4>
                <p className="text-sm">Deploying viral marketing and social engagement campaigns to rapidly build trust and brand loyalty.</p>
              </div>
            </div>
          </div>
          <div className="p-12 bg-white border border-gray-200 text-gray-900">
            <Cpu size={64} className="text-[#00AE80] mb-6" />
            <h3 className="text-2xl font-black mb-4">AI-driven optimization</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              AI marketing automation, predictive analytics, and AI-powered personalization forecast audience behavior, optimize bids, and deliver hyper-personalized campaigns.
            </p>
            <div className="flex items-center gap-4 bg-gray-50 p-4 border border-gray-200">
              <Zap size={20} className="text-[#00AE80]" />
              <span className="font-bold text-xs uppercase tracking-wide">Deployment: real-time sync</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-5xl font-black mb-6 text-gray-900">Resonate. <span className="text-[#00AE80]">Engage.</span></h3>
            <div className="flex flex-col gap-4 text-gray-700 font-bold text-sm">
              <p className="flex items-center gap-3"><Mail className="text-[#00AE80]" /> connect@blucomtechnologies.com</p>
              <p className="flex items-center gap-3"><Phone className="text-[#00AE80]" /> +92-303-5907230 | +92-334-0011126</p>
            </div>
          </div>
          <div className="bg-[#011f18] text-white p-12 border border-gray-800 flex flex-col gap-6">
            <h4 className="font-black text-sm uppercase tracking-wide text-emerald-500">Scale your impact</h4>
            <p className="text-gray-200 text-sm leading-relaxed">
              Underperforming placements are revised and emerging digital trends incorporated to ensure your budget is efficiently deployed.
            </p>
            <button className="w-full bg-[#00AE80] text-[#011f18] py-4 font-black uppercase hover:bg-[#00FFC2] transition-all flex justify-center items-center gap-3">
              Request Media Audit <BarChart3 size={16}/>
            </button>
          </div>
        </div>
        <div className="pt-10 text-center text-xs text-gray-400 font-bold tracking-widest">
          Blucom Technologies © 2026
        </div>
      </footer>
    </div>
  );
};

export default MediaCatalyst;