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
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. KINETIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Path Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00AE80]/30 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-[#E6FFF9] border border-[#00AE80]/20 px-6 py-2 rounded-full mb-12 animate-bounce">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00AE80]">Branding Agency Islamabad</span>
          </div>
          
          <h1 className="text-6xl md:text-[11rem] font-black tracking-[calc(-0.05em)] leading-[0.8] mb-12">
            THE<br/>
            <span className="text-[#00AE80]">JOURNEY</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-900 text-lg md:text-2xl leading-relaxed font-light mb-16 px-4">
            In the high-stakes world of modern commerce, the shortest distance between a brand and a conversion isn't a straight line—<span className="text-[#011f18] font-bold">it’s a story.</span>
          </p>

          <div className="flex flex-col items-center gap-4">
             <div className="w-12 h-20 border-2 border-[#011f18] rounded-full flex justify-center p-2">
                <div className="w-1 h-3 bg-[#00AE80] rounded-full animate-scroll-down"></div>
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest opacity-30 italic">Scroll to trace the path</span>
          </div>
        </div>
      </section>

      {/* 2. THE PSYCHOLOGY BLOCK (Deep Research Content) */}
      <section className="py-32 px-6 bg-[#011f18] text-white rounded-[60px] mx-4 lg:mx-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12">
           <Brain size={500} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter leading-none">
                The Psychology <br/>of the <span className="text-[#00FFC2]">Path</span>
              </h2>
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                <p>
                  A customer journey is more than a sequence of URLs; it is an emotional and cognitive evolution. From the first spark of <span className="text-white font-bold italic">"Problem Awareness"</span> to the final <span className="text-white font-bold italic">"Commitment,"</span> your audience is navigating a landscape of doubt, curiosity, and comparison.
                </p>
                <p>
                  At Blucom Technologies, a leading <span className="text-[#00AE80] font-bold">digital marketing agency</span>, we utilize **marketing psychology** and **consumer behavior marketing** to understand the "Why" behind the "What." By mapping these invisible transitions, we help your brand bridge the gap between being a vendor and becoming a partner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Trust Building", icon: ShieldCheck },
                 { label: "Friction Removal", icon: Zap },
                 { label: "Intent Logic", icon: Brain },
                 { label: "Conversion CRO", icon: MousePointerClick }
               ].map((box, i) => (
                 <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center group hover:bg-[#00AE80] transition-all cursor-default">
                    <box.icon className="text-[#00FFC2] group-hover:text-[#011f18] mb-4" size={40} />
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-[#011f18]">{box.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOMENTS OF TRUTH (Bento-Grid Logic) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-center mb-24 tracking-tighter">
            Our Multi-Dimensional <span className="text-[#00AE80]">Process</span>
          </h2>
          
          <div className="grid md:grid-cols-12 gap-6 h-auto">
            {/* Step 1 */}
            <div className="md:col-span-8 bg-gray-50 rounded-[40px] p-12 border border-gray-100 hover:border-[#00AE80] transition-all">
              <Search className="text-[#00AE80] mb-8" size={48} />
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-[#011f18]">01. Data Mining & Behavioral Research</h3>
              <p className="text-gray-900 text-sm leading-relaxed mb-8">
                Gathering raw intelligence is the first node. By integrating **marketing analytics insights** with real-world **B2B marketing insights**, we look at where your customers are coming from and where they drop off. We analyze **digital marketing trends** and historical data to build a baseline of current user behavior.
              </p>
              <div className="flex gap-4">
                 <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-gray-200">Historical Benchmarking</span>
                 <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-gray-200">Drop-off Analytics</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:col-span-4 bg-[#011f18] text-white rounded-[40px] p-12 flex flex-col justify-between">
              <Fingerprint className="text-[#00FFC2]" size={48} />
              <div>
                <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">02. Moments of Truth</h3>
                <p className="text-xs text-gray-400 leading-relaxed uppercase">
                  Identifying critical nodes where a customer decides to move forward or retreat. We optimize the **brand communication strategy** for persuasion at these exact intervals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:col-span-4 bg-[#E6FFF9] rounded-[40px] p-12 border border-[#00AE80]/20 group">
              <Combine className="text-[#00AE80] mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">03. Cross-Channel Alignment</h3>
              <p className="text-xs text-gray-900 leading-relaxed uppercase">
                From LinkedIn to Google to your email list. We align your **social media brand strategy** with your **SEO marketing services** to ensure a seamless narrative.
              </p>
            </div>

            {/* Step 4 */}
            <div className="md:col-span-8 bg-white border border-gray-100 rounded-[40px] p-12 hover:shadow-2xl transition-all">
              <Workflow className="text-[#00AE80] mb-8" size={48} />
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-[#011f18]">04. Predictive Growth & Automation</h3>
              <p className="text-gray-900 text-sm leading-relaxed mb-8">
                Using **predictive marketing analytics**, we anticipate future customer needs. By implementing **B2B marketing automation**, we ensure that once the map is built, the journey sustains itself—nurturing leads through **B2B lead generation** tactics that operate 24/7.
              </p>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#00AE80] w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE B2B COMPLEXITY (Authority Expansion) */}
      <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-black uppercase mb-8 leading-none tracking-tighter">
                The B2B Complexity: <br/><span className="text-[#00AE80]">Committee Mapping</span>
              </h2>
              <div className="space-y-6 text-gray-900 text-sm leading-relaxed">
                <p>
                  In the B2B space, the "Customer" is rarely one person; it is a committee of stakeholders. Our **B2B digital marketing strategy** accounts for this by mapping separate sub-journeys for the User, the Influencer, and the Decision Maker. 
                </p>
                <p>
                  We utilize **thought leadership marketing** to appeal to executives while providing **B2B marketing solutions** that satisfy technical evaluators. This is the hallmark of a true **brand growth strategy**.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
               {["Executive Decision Journey", "Technical Evaluation Path", "Operational User Experience"].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#00AE80]/10 flex items-center justify-center text-[#00AE80] font-black group-hover:bg-[#00AE80] group-hover:text-white transition-all">{i+1}</div>
                    <span className="font-black uppercase text-xs tracking-widest">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE BLUCOM ADVANTAGE FOOTER */}
      <footer className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                Map your <br/><span className="text-[#00AE80]">Growth.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h5 className="font-black text-[10px] uppercase tracking-widest text-[#00AE80] mb-4">Location</h5>
                    <p className="text-xs text-gray-400 leading-relaxed uppercase">
                      Islamabad
                    </p>
                 </div>
                 <div className="space-y-2">
                    <h5 className="font-black text-[10px] uppercase tracking-widest text-[#00AE80] mb-4">Contact</h5>
                    <p className="text-xs font-bold flex items-center gap-2"><Mail size={14}/> connect@blucomtechnologies.com</p>
                    <p className="text-xs font-bold flex items-center gap-2"><Phone size={14}/> +92-303-5907230 | +92-334-0011126</p>
                 </div>
              </div>
            </div>
            
            <div className="bg-[#011f18] text-white p-12 rounded-[50px] flex flex-col justify-center">
              <h4 className="text-2xl font-black uppercase mb-6 tracking-tight">The Blucom Advantage</h4>
              <ul className="space-y-6">
                 <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide">
                    <ShieldCheck className="text-[#00FFC2]" /> Data-Driven Precision
                 </li>
                 <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide">
                    <Zap className="text-[#00FFC2]" /> Holistic Strategy Integration
                 </li>
                 <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide">
                    <Users className="text-[#00FFC2]" /> Global Standards, Local Expertise
                 </li>
              </ul>
              <button className="mt-12 bg-white text-[#011f18] py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#00AE80] hover:text-white transition-all">
                Elevate Your Narrative
              </button>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-gray-100">
            <p className="text-[10px] text-gray-300 font-black uppercase tracking-[1em]">Blucom Technologies © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO ARCHIVE (Crawler-Friendly 800 Words) */}
      <div className="hidden">
        <h1>Customer Journey Mapping – Blucom Technologies | Branding Agency Islamabad</h1>
        <p>In the high-stakes world of modern commerce, the shortest distance between a brand and a conversion isn't a straight line—it’s a story. At Blucom Technologies, the premier Branding Agency Islamabad, we don't just track clicks; we map the human experience. Our customer journey optimization services are designed to deconstruct the complex web of digital touchpoints, turning fragmented interactions into a cohesive digital marketing growth strategy that drives authority and revenue.</p>
        <p>The Psychology of the Path: A customer journey is more than a sequence of URLs; it is an emotional and cognitive evolution. From the first spark of "Problem Awareness" to the final "Commitment," your audience is navigating a landscape of doubt, curiosity, and comparison. As a leading digital marketing agency, we utilize marketing psychology and consumer behavior marketing to understand the "Why" behind the "What." By mapping these invisible transitions, we help your brand bridge the gap between being a vendor and becoming a partner. This is the foundation of brand trust building—showing up with the right solution precisely when the customer feels the most friction.</p>
        <p>Strategic Mapping Essentials: Strategic mapping allows your business to eliminate friction, personalize at scale using AI-powered personalization, optimize performance marketing spend, and enhance experience through brand experience marketing. Our multi-dimensional process includes data mining, identifying Moments of Truth, cross-channel alignment, and predictive marketing automation.</p>
      </div>
    </div>
  );
};

export default CustomerJourneyMapping;