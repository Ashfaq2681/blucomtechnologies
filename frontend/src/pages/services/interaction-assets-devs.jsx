import React from 'react';
import { 
  Fingerprint, 
  MousePointer2, 
  Zap, 
  Share2, 
  Activity, 
  Cpu, 
  BarChart3, 
  Expand, 
  Layers, 
  Infinity,
  Mail,
  MapPin,
  Phone,
  Spline,
  HandMetal,
  Network
} from 'lucide-react';

const InteractionNetwork = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. THE PULSE (Hero Section) */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[radial-gradient(circle_at_top_right,#00AE8008,transparent_50%)]">
        {/* Animated Background Nodes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00AE80]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#00AE80]/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0FDFA] border border-[#00AE80]/10 rounded-full mb-8">
              <Activity size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00AE80]">Live Interaction Protocol</span>
            </div>
            <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              BEYOND<br/>
              <span className="text-[#00AE80] italic">STATIC.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Brands are no longer defined solely by visual identity—they are defined by <span className="text-[#011f18] font-bold">experiences</span>. We turn static impressions into dynamic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white/40 backdrop-blur-md border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <MousePointer2 className="text-[#00AE80] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-4xl font-black tracking-tighter mb-2">70%</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Higher engagement compared to static content.</p>
             </div>
             <div className="bg-[#011f18] p-10 rounded-[40px] text-white md:scale-110 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                   <Zap className="text-[#00FFC2] mb-6" />
                   <h4 className="text-xl font-black uppercase tracking-tighter mb-4 leading-tight text-[#00FFC2]">The Heartbeat of <br/>Growth Strategy</h4>
                   <p className="text-[11px] leading-relaxed opacity-60 uppercase font-bold tracking-wide">
                     Optimizing conversions, reducing bounce rates, and enhancing strategy outcomes.
                   </p>
                </div>
                <Infinity className="absolute -right-8 -bottom-8 text-white/5" size={120} />
             </div>
             <div className="bg-white/40 backdrop-blur-md border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group text-right">
                <Share2 className="text-[#00AE80] mb-6 ml-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Social Synergy</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Integrated with Instagram and LinkedIn brand strategies.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM (B2B & B2C Applications) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <div className="bg-gray-50 h-48 rounded-[30px] flex flex-col items-center justify-center p-6 text-center border border-gray-100">
                        <span className="text-[#00AE80] font-black text-2xl mb-2 italic">Configurators</span>
                        <span className="text-[8px] uppercase font-bold text-gray-400">B2B Tooling</span>
                     </div>
                     <div className="bg-[#F0FDFA] h-64 rounded-[30px] flex flex-col items-center justify-center p-6 text-center border border-[#00AE80]/10">
                        <span className="text-[#011f18] font-black text-2xl mb-2 italic">Calculators</span>
                        <span className="text-[8px] uppercase font-bold text-gray-400">Value Engineering</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-[#011f18] h-64 rounded-[30px] flex flex-col items-center justify-center p-6 text-center text-white">
                        <span className="text-[#00FFC2] font-black text-2xl mb-2 italic">Gamification</span>
                        <span className="text-[8px] uppercase font-bold opacity-40">Brand Recall</span>
                     </div>
                     <div className="bg-gray-50 h-48 rounded-[30px] flex flex-col items-center justify-center p-6 text-center border border-gray-100">
                        <span className="text-[#00AE80] font-black text-2xl mb-2 italic">Whitepapers</span>
                        <span className="text-[8px] uppercase font-bold text-gray-400">Interactive Alpha</span>
                     </div>
                  </div>
               </div>
               <Network className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00AE80]/10 -z-10" size={300} />
            </div>

            <div className="order-1 lg:order-2">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-[#011f18]">Bridging the <br/><span className="text-[#00AE80]">Lead Funnel.</span></h2>
               <p className="text-sm text-gray-900 font-bold uppercase leading-relaxed mb-10 tracking-widest">
                 From B2B lead generation to consumer engagement, interactive experiences communicate complex ideas efficiently while building trust and authority.
               </p>
               <ul className="space-y-6">
                  {[
                    "Communicate complex product offerings",
                    "Position brand as a thought leader",
                    "Dramatically improve brand recall",
                    "Invite user participation in social narratives"
                  ].map((list, i) => (
                    <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                       <HandMetal size={16} className="text-[#00AE80]"/> {list}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NEURAL LINK (Data & AI) */}
      <section className="py-32 px-6 bg-[#011f18] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
               <Cpu className="text-[#00FFC2] mb-8" size={48} />
               <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">AI-Powered <br/>Personalization.</h3>
               <p className="text-xs text-gray-400 leading-relaxed uppercase font-medium italic">
                 Predictive analytics suggest content paths and dynamically adapt interfaces to provide personalized calls-to-action.
               </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               <div className="p-10 border border-white/10 rounded-[40px] hover:bg-white/5 transition-colors group">
                  <BarChart3 className="text-[#00FFC2] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <h5 className="font-black uppercase text-xs tracking-widest mb-4">Granular Analytics</h5>
                  <p className="text-[10px] text-gray-900 leading-relaxed uppercase">Every interaction is tracked and optimized ensuring data-informed design at every level.</p>
               </div>
               <div className="p-10 border border-white/10 rounded-[40px] hover:bg-white/5 transition-colors group">
                  <Fingerprint className="text-[#00FFC2] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <h5 className="font-black uppercase text-xs tracking-widest mb-4">Conversion Psychology</h5>
                  <p className="text-[10px] text-gray-900 leading-relaxed uppercase">We ensure that clicks and hovers contribute directly to overarching business objectives.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND CONSISTENCY (The Experience) */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <Layers className="mx-auto text-[#00AE80] mb-10" size={60} />
           <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 text-[#011f18]">The Cohesive <br/>Immersive Experience.</h2>
           <p className="text-gray-900 font-bold uppercase text-[11px] tracking-[0.2em] leading-relaxed mb-16 italic">
             Our approach combines brand identity design and storytelling marketing to reinforce brand consistency across all digital touchpoints—from web interfaces to mobile apps.
           </p>
           
           <div className="flex flex-wrap justify-center gap-12 text-[#011f18]">
              <div className="text-center group">
                <span className="block text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#00AE80] transition-colors mb-2">Build</span>
                <span className="block text-2xl font-black uppercase tracking-tighter">Brand Trust</span>
              </div>
              <div className="text-center group">
                <span className="block text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#00AE80] transition-colors mb-2">Define</span>
                <span className="block text-2xl font-black uppercase tracking-tighter">Perception</span>
              </div>
              <div className="text-center group">
                <span className="block text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#00AE80] transition-colors mb-2">Deepen</span>
                <span className="block text-2xl font-black uppercase tracking-tighter">Relationships</span>
              </div>
           </div>
        </div>
      </section>

      {/* 5. THE CONNECTIVE FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-100 bg-[#F0FDFA]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24 items-end">
            <div>
              <h2 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                JOIN THE <br/><span className="text-[#00AE80]">NETWORK.</span>
              </h2>
              <div className="flex flex-col gap-5 font-bold uppercase text-[11px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-[#00AE80] cursor-pointer transition-colors"><Mail className="text-[#00AE80]" size={18}/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18] hover:text-[#00AE80] cursor-pointer transition-colors"><Phone className="text-[#00AE80]" size={18}/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-4 border-l-2 border-[#00AE80] pl-6">
                    <MapPin className="text-[#00AE80] shrink-0" size={20} />
                    <p className="leading-relaxed italic opacity-60">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="space-y-10">
               <div className="p-12 bg-white rounded-[50px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
                  <h5 className="font-black uppercase text-xs mb-4 tracking-widest flex items-center gap-3">
                    <Spline size={16} className="text-[#00AE80]"/> Interaction Audit
                  </h5>
                  <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-10 italic">
                    Transform your digital presence into an interactive ecosystem that drives measurable growth.
                  </p>
                  <button className="w-full py-5 bg-[#011f18] text-white rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#00AE80] transition-all flex items-center justify-center gap-3">
                    Sync Your Brand <Expand size={16}/>
                  </button>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-200 font-black uppercase tracking-[2em]">
             <p>Blucom Interaction Lab © 2026</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT */}
      <div className="hidden">
        <h1>Interaction Assets Development – Branding Agency Islamabad</h1>
        <p>In the digital age, brands are defined by the experiences they deliver. Interaction assets turn static impressions into dynamic engagement. At our Branding Agency in Islamabad, we specialize in interaction assets that capture attention and drive measurable outcomes. Interactive design generates up to 70% more engagement compared to static content. From a digital marketing agency perspective, these are strategic tools in a digital marketing growth strategy. B2B marketing agencies use interaction assets for lead generation through configurators and calculators, positioning brands as thought leaders in the B2B digital marketing strategy landscape. For consumers, these assets improve brand recall and are rewarded by social media brand strategies on Instagram and LinkedIn. Data-driven design allows brands to understand user behavior using marketing analytics insights and performance marketing strategies. Leveraging AI-powered personalization and predictive analytics ensures contextually relevant experiences. Our holistic development process ensures brand consistency across all digital touchpoints, from web interfaces to mobile apps, enhancing brand trust building and deepening customer relationships.</p>
      </div>
    </div>
  );
};

export default InteractionNetwork;