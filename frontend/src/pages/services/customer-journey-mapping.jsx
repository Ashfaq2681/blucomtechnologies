import React from 'react';
import {
  Milestone,
  Search,
  Fingerprint,
  Combine,
  Workflow,
  BarChart4,
  Zap,
  Users,
  Brain,
  ShieldCheck,
  MousePointerClick,
  Mail,
  MapPin,
  Phone,
  ArrowDown
} from 'lucide-react';

const CustomerJourneyMapping = () => {
  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-gray-100 text-gray-800 font-sans selection:bg-emerald-300">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-200/30 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 px-6 py-2 rounded-full mb-12 animate-bounce">
            <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-600">Branding agency Islamabad</span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tight leading-[0.9] mb-12">
            Customer<br/><span className="text-emerald-600">journey mapping</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-2xl leading-relaxed font-light mb-16 px-4">
            In today’s hyper-competitive market, the shortest distance between a brand and conversion is not a straight line — <span className="font-bold text-emerald-700">it’s a story shaped by customer interactions.</span>
          </p>
          <div className="flex flex-col items-center gap-4">
             <div className="w-12 h-20 border-2 border-emerald-600 rounded-full flex justify-center p-2">
                <div className="w-1 h-3 bg-emerald-600 rounded-full animate-scroll-down"></div>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Scroll to explore the path</span>
          </div>
        </div>
      </section>

      {/* Psychology of the path */}
      <section className="py-32 px-6 bg-gray-50 rounded-[60px] mx-4 lg:mx-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12">
           <Brain size={500} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight leading-none">
                The psychology of the <span className="text-emerald-600">customer path</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Customer journey mapping is more than charting clicks or page visits. Each step represents emotions, expectations, and decision points. From initial awareness to consideration and commitment, customers navigate doubts and choices. Understanding this evolution allows brands to build trust, enhance engagement, and anticipate needs.
                </p>
                <p>
                  At <span className="text-emerald-600 font-bold">Blucom Technologies</span>, we blend marketing psychology, behavioral research, and analytics to translate complex customer behavior into actionable insights, ensuring every touchpoint delivers value and aligns with business goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Trust building", icon: ShieldCheck },
                 { label: "Friction removal", icon: Zap },
                 { label: "Intent logic", icon: Brain },
                 { label: "Conversion CRO", icon: MousePointerClick }
               ].map((box, i) => (
                 <div key={i} className="aspect-square bg-white/10 border border-gray-200 rounded-3xl flex flex-col items-center justify-center group hover:bg-emerald-200 transition-all cursor-default">
                    <box.icon className="text-emerald-600 group-hover:text-white mb-4" size={40} />
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">{box.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-dimensional process */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-24 tracking-tight">
            Our multi-dimensional process
          </h2>
          <div className="grid md:grid-cols-12 gap-6">
            {/* Step 1 */}
            <div className="md:col-span-8 bg-white rounded-[40px] p-12 border border-gray-100 hover:border-emerald-300 transition-all">
              <Search className="text-emerald-600 mb-8" size={48} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Data mining & behavioral research</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Collecting and analyzing user behavior, website analytics, social interactions, and competitor benchmarking provides insights for identifying friction points, optimizing campaigns, and predicting customer decisions.
              </p>
              <div className="flex gap-4">
                 <span className="bg-gray-100 px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-gray-200">Historical benchmarking</span>
                 <span className="bg-gray-100 px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-gray-200">Drop-off analytics</span>
              </div>
            </div>
            {/* Step 2 */}
            <div className="md:col-span-4 bg-emerald-100 rounded-[40px] p-12 flex flex-col justify-between">
              <Fingerprint className="text-emerald-600" size={48} />
              <div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Moments of truth</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Identifying decision points and optimizing messaging for persuasion ensures maximum conversion impact.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="md:col-span-4 bg-gray-50 rounded-[40px] p-12 border border-emerald-200 group">
              <Combine className="text-emerald-600 mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-bold mb-4 tracking-tight">Cross-channel alignment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Align all marketing channels from social media to email campaigns for a seamless customer narrative.
              </p>
            </div>
            {/* Step 4 */}
            <div className="md:col-span-8 bg-white border border-gray-100 rounded-[40px] p-12 hover:shadow-2xl transition-all">
              <Workflow className="text-emerald-600 mb-8" size={48} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Predictive growth & automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Using predictive analytics and marketing automation, we ensure continuous lead nurturing and optimized B2B conversion strategies.
              </p>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & committee mapping */}
      <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8 leading-none tracking-tight">
                B2B complexity: <span className="text-emerald-600">committee mapping</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                <p>
                  In B2B environments, decisions involve multiple stakeholders. Mapping sub-journeys for decision makers, technical evaluators, and end users ensures your campaigns resonate across the committee.
                </p>
                <p>
                  Thought leadership marketing combined with solution-based strategies improves engagement, trust, and brand authority in complex sales cycles.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
               {["Executive decision journey", "Technical evaluation path", "Operational user experience"].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all">{i+1}</div>
                    <span className="font-bold text-xs tracking-wide">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blucom advantage */}
      <footer className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
                Map your <span className="text-emerald-600">growth</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h5 className="font-bold text-xs tracking-widest text-emerald-600 mb-4">Location</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Islamabad.
                    </p>
                 </div>
                 <div className="space-y-2">
                    <h5 className="font-bold text-xs tracking-widest text-emerald-600 mb-4">Contact</h5>
                    <p className="text-sm font-bold flex items-center gap-2"><Mail size={14}/> connect@blucomtechnologies.com</p>
                    <p className="text-sm font-bold flex items-center gap-2"><Phone size={14}/> +92-303-5907230 | +92-334-0011126</p>
                 </div>
              </div>
            </div>
           
            <div className="bg-emerald-600 text-white p-12 rounded-[50px] flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-6 tracking-tight">The Blucom advantage</h4>
              <ul className="space-y-6">
                 <li className="flex items-center gap-4 text-sm font-bold tracking-wide"><ShieldCheck className="text-white"/> Data-driven precision</li>
                 <li className="flex items-center gap-4 text-sm font-bold tracking-wide"><Zap className="text-white"/> Holistic strategy integration</li>
                 <li className="flex items-center gap-4 text-sm font-bold tracking-wide"><Users className="text-white"/> Global standards, local expertise</li>
              </ul>
              <button className="mt-12 bg-white text-emerald-600 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-emerald-700 hover:text-white transition-all">
                Elevate your narrative
              </button>
            </div>
          </div>
          <div className="text-center pt-10 border-t border-gray-200">
            <p className="text-[10px] text-gray-400 font-bold tracking-[1em]">Blucom Technologies © 2026</p>
          </div>
        </div>
      </footer>

      {/* Hidden SEO Content */}
      <div className="hidden">
        <h1>Customer Journey Mapping Services – Blucom Technologies | Branding Agency Islamabad</h1>
        <p>Customer journey mapping transforms fragmented touchpoints into cohesive brand experiences. At Blucom Technologies, we combine research, strategy, and creativity to optimize customer engagement, increase conversion rates, and build brand authority. Our multi-stage approach covers research, journey visualization, cross-channel alignment, predictive marketing automation, and continuous optimization, ensuring sustained growth and measurable ROI for every business.</p>
      </div>
    </div>
  );
};

export default CustomerJourneyMapping;