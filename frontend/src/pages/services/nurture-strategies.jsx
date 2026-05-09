import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, RefreshCcw, Cpu, Workflow, Compass, Target, 
  TrendingUp, Users, MessageSquare, Mail, MapPin, 
  Phone, BarChart4, Zap, Layers, Sparkles, Check, ArrowRight
} from 'lucide-react';

const NurtureVanguard = () => {
  // Schema.org JSON-LD for Social & Service SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lead nurture & lifecycle marketing",
    "provider": {
      "@type": "Organization",
      "name": "Blucom Technologies",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      }
    },
    "description": "Expert nurture strategies to build lasting relationships and convert leads through personalized, data-driven campaigns.",
    "keywords": "Nurture strategies, digital marketing agency Islamabad, B2B lead generation, AI marketing automation"
  };

  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">
      <Helmet>
        <title>Nurture strategies & lifecycle marketing | Blucom Islamabad</title>
        <meta name="description" content="Build lasting relationships and convert leads with expert nurture strategies. Personalized, data-driven campaigns for maximum engagement and business growth." />
        <meta name="keywords" content="Nurture strategies, digital marketing agency, digital marketing growth strategy, B2B lead generation, customer engagement strategy, AI marketing automation" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* 1. Hero Section - Light Technical Mesh */}
      <section className="relative pt-44 pb-32 px-6 bg-[#F9FBFA] border-b border-gray-100 overflow-hidden">
        {/* Light Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1v38h38V1H1z' fill='%2300AE80' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-gray-200 bg-white shadow-2xl">
            <div className="lg:w-2/3 p-12 md:p-20 border-r border-gray-200">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 mb-12">
                <Sparkles size={14} className="text-[#00AE80]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00AE80]">Vanguard protocol: lifecycle v5</span>
              </div>
              <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.8] tracking-tighter mb-12 lowercase first-letter:uppercase">
                nurture<br/>
                <span className="text-[#00AE80]">growth.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed lowercase first-letter:uppercase">
                Acquiring a lead is only the first step. At our <span className="text-[#011f18] border-b-4 border-[#00FFC2]">branding agency in Islamabad</span>, we transform casual interest into lifelong advocacy through structured engagement and predictive nurturing sequences.
              </p>
            </div>
            
            <div className="lg:w-1/3 bg-[#00FFC2] p-12 md:p-20 flex flex-col justify-center">
              <div className="text-7xl font-black text-[#011f18] mb-6 tracking-tighter italic">70%</div>
              <p className="text-xs font-black uppercase tracking-widest text-[#011f18] leading-relaxed opacity-80 mb-10 lowercase first-letter:uppercase">
                of leads are not ready to buy immediately. Consistent engagement is the mechanical key to conversion and sustainable growth.
              </p>
              <div className="pt-8 border-t border-[#011f18]/10 flex items-center gap-4 text-[#011f18]">
                <RefreshCcw size={20} />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] lowercase first-letter:uppercase">continuous lifecycle optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology - Bright Variation */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black lowercase first-letter:uppercase tracking-tighter mb-4">our methodology.</h2>
            <div className="h-1 w-24 bg-[#00AE80]"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-gray-200">
            {[
              { icon: <Cpu />, title: "Predictive logic", desc: "Adjusting campaigns based on real-time behavior.", bg: "bg-white" },
              { icon: <Compass />, title: "Journey mapping", desc: "Addressing pain points throughout the cycle.", bg: "bg-gray-50" },
              { icon: <Zap />, title: "Ai automation", desc: "Scaling personalization across complex funnels.", bg: "bg-[#F0FDFA]" },
              { icon: <TrendingUp />, title: "Roi velocity", desc: "Accelerating the b2b customer acquisition cycle.", bg: "bg-white" }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-12 border-r border-gray-200 last:border-r-0 hover:bg-[#00FFC2] transition-colors group cursor-crosshair`}>
                <div className="text-[#00AE80] group-hover:text-[#011f18] mb-8 transition-colors">{item.icon}</div>
                <h4 className="font-black lowercase first-letter:uppercase text-sm tracking-widest mb-4">{item.title}</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-[#011f18] lowercase first-letter:uppercase font-bold leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Enriched SEO Content Section (~700 words) */}
      <section className="py-32 px-6 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-4xl font-black lowercase first-letter:uppercase tracking-tighter leading-[0.9] mb-8">personalization <br/><span className="text-[#00AE80]">at scale.</span></h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-black lowercase first-letter:uppercase tracking-widest text-[#011f18]">
                    <div className="w-8 h-[1px] bg-[#00AE80]"></div> b2b authority building
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black lowercase first-letter:uppercase tracking-widest text-[#011f18]">
                    <div className="w-8 h-[1px] bg-[#00AE80]"></div> brand advocacy logic
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black lowercase first-letter:uppercase tracking-widest text-[#011f18]">
                    <div className="w-8 h-[1px] bg-[#00AE80]"></div> lifecycle sync
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                <p className="text-2xl text-[#011f18] font-bold mb-10 lowercase first-letter:uppercase">
                  In today’s fast-paced digital landscape, acquiring a lead is only the first step toward customer loyalty and brand advocacy. Nurture strategies ensure prospects stay engaged while building trust and converting over time.
                </p>

                <h4 className="text-[#011f18] text-xl font-black lowercase first-letter:uppercase tracking-tight mb-4">the science behind nurture marketing</h4>
                <p className="mb-8">
                  Effective nurture strategies rely on understanding buyer psychology. 70% of leads are not ready to buy immediately, yet relevant engagement converts them over time. Customer journey optimization ensures timely messages, builds credibility, and guides prospects through informed decisions.
                </p>

                <div className="grid md:grid-cols-2 gap-10 my-16">
                  <div className="bg-white p-10 border border-gray-200">
                    <Mail className="text-[#00AE80] mb-6" />
                    <h5 className="font-black lowercase first-letter:uppercase text-xs mb-4 tracking-widest">email automation</h5>
                    <p className="text-[11px] leading-relaxed lowercase first-letter:uppercase font-bold text-gray-400">Sequences guide prospects toward informed decisions efficiently, reducing friction in the buying process.</p>
                  </div>
                  <div className="bg-white p-10 border border-gray-200">
                    <MessageSquare className="text-[#00AE80] mb-6" />
                    <h5 className="font-black lowercase first-letter:uppercase text-xs mb-4 tracking-widest">social engagement</h5>
                    <p className="text-[11px] leading-relaxed lowercase first-letter:uppercase font-bold text-gray-400">Building trust and staying relevant where your audience interacts strengthens advocacy and engagement.</p>
                  </div>
                </div>

                <h4 className="text-[#011f18] text-xl font-black lowercase first-letter:uppercase tracking-tight mb-4">personalization at scale</h4>
                <p className="mb-8">
                  AI marketing automation and predictive analytics power modern nurture campaigns. Audience segmentation, dynamic content, and tailored recommendations improve engagement and conversion. This ensures campaigns are effective, scalable, and adaptable to complex customer journeys.
                </p>

                <p className="mb-8">
                  For B2B, nurture strategies are essential due to longer sales cycles with multiple stakeholders. Value-driven content—interactive guides, webinars, case studies, and B2B marketing assets—builds credibility and accelerates acquisition.
                </p>

                <h4 className="text-[#011f18] text-xl font-black lowercase first-letter:uppercase tracking-tight mb-4">multi-channel nurture ecosystem</h4>
                <p className="mb-12">
                  A cohesive ecosystem combines email, social, content marketing, and digital advertising. Consistent messaging across platforms like LinkedIn, Instagram, and Google Display ensures a seamless prospect journey, enhancing storytelling and brand recognition.
                </p>

                <h4 className="text-[#011f18] text-xl font-black lowercase first-letter:uppercase tracking-tight mb-4">measuring success</h4>
                <p className="mb-8">
                  Analytics track lead behavior, content performance, and campaign effectiveness. KPIs—open rates, click-throughs, time-on-page, and conversion ratios—provide actionable insights. This data-driven feedback loop continuously refines strategies and maximizes ROI.
                </p>

                <p className="mb-8">
                  Every interaction is purposeful. Meaningful engagement transforms prospects into loyal customers, driving sustainable growth for both B2B and B2C brands.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Performance Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <BarChart4 className="mx-auto text-emerald-50 mb-10" size={100} />
          <h2 className="text-5xl font-black lowercase first-letter:uppercase tracking-tighter mb-10 italic">measuring <span className="text-[#00AE80]">success</span></h2>
          <p className="text-gray-500 font-bold lowercase first-letter:uppercase text-[11px] tracking-[0.3em] leading-relaxed mb-20 max-w-2xl mx-auto">
            Kpis such as open rates, click-through rates, and time-on-page provide a comprehensive view of how nurtured leads progress.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200">
            {["Lead behavior", "Content reach", "Campaign roi", "Time on page"].map((kpi, i) => (
              <div key={i} className="p-12 border-r border-gray-200 last:border-r-0 hover:bg-[#F8FAFC] transition-colors">
                <span className="text-[10px] font-black lowercase first-letter:uppercase tracking-[0.2em] text-[#011f18]">{kpi}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Vanguard Footer */}
      <footer className="py-32 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-stretch mb-24">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-7xl md:text-[9rem] font-black lowercase first-letter:uppercase tracking-tighter mb-12 leading-[0.8] text-[#011f18]">
                  inspire <br/><span className="text-[#00AE80]">action</span>
                </h2>
                <div className="space-y-6 font-bold lowercase first-letter:uppercase text-[11px] tracking-[0.3em] text-gray-400">
                   <p className="flex items-center gap-5 text-[#011f18] hover:text-[#00AE80] transition-colors cursor-pointer"><Mail size={20} className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
                   <p className="flex items-center gap-5 text-[#011f18] hover:text-[#00AE80] transition-colors cursor-pointer"><Phone size={20} className="text-[#00AE80]"/> +92-303-5907230</p>
                   <div className="flex items-start gap-5 mt-8 border-l-4 border-[#00AE80] pl-8 py-2">
                      <MapPin size={24} className="text-[#00AE80] shrink-0" />
                      <p className="leading-relaxed italic opacity-60">Islamabad, HQ.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-16 border border-gray-200 shadow-xl">
               <h5 className="font-black lowercase first-letter:uppercase text-xs mb-8 tracking-[0.4em] text-[#00AE80]">initialize nurture sequence</h5>
               <p className="text-[12px] text-gray-500 font-bold lowercase first-letter:uppercase leading-relaxed mb-12 italic">
                 Transform prospects into loyal advocates through meaningful engagement and personalized narratives. Driving sustainable growth for B2B and B2C brands.
               </p>
               <button className="w-full py-6 bg-[#011f18] text-white font-black lowercase first-letter:uppercase text-[11px] tracking-[0.5em] hover:bg-[#00AE80] transition-all flex items-center justify-center gap-4">
                 build your ecosystem <ArrowRight size={18} />
               </button>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-300 font-black lowercase first-letter:uppercase tracking-[2em]">
             <p>Blucom growth lab © 2026</p>
             <p className="hidden md:block">Lead intelligence: active</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NurtureVanguard;