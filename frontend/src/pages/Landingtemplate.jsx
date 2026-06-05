import React, { useState } from 'react';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, 
  Layers, Search, ShieldCheck, Zap, Terminal, Sliders, Globe, Cpu 
} from 'lucide-react';

export default function App() {
  const [activeSegment, setActiveSegment] = useState('all');
  const [projectType, setProjectType] = useState('Launch');

  const servicesMatrix = [
    { cat: 'discovery', name: 'Brand Discovery Workshops' },
    { cat: 'discovery', name: 'Brand Identity Development' },
    { cat: 'discovery', name: 'Brand Architecture Systems' },
    { cat: 'strategy', name: 'Market Research & Analysis' },
    { cat: 'strategy', name: 'Competitor Benchmarking' },
    { cat: 'strategy', name: 'Brand Positioning Matrix' },
    { cat: 'strategy', name: 'Messaging Frameworks' },
    { cat: 'digital', name: 'Technical SEO Audits & Core Vitals' },
    { cat: 'digital', name: 'Performance Paid Marketing (Ads)' },
    { cat: 'digital', name: 'Content Marketing Systems' },
    { cat: 'interaction', name: 'UX/UI Wireframing & Prototyping' },
    { cat: 'interaction', name: 'Custom Full-Stack Web Dev' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased text-xs sm:text-sm selection:bg-slate-900 selection:text-white">
      
      {/* --- COMPACT TOP BAR --- */}
      <div className="bg-slate-900 text-[11px] font-mono text-slate-300 py-2 border-b border-slate-800 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>LOC // ISLAMABAD, PK</span>
          <span className="hidden sm:inline text-slate-500">SYSTEM ARCHITECTURE & BRAND ECOSYSTEMS</span>
          <a href="#contact" className="hover:text-white transition flex items-center gap-1">START_PROJ <Zap size={11} className="text-amber-400" /></a>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="font-serif text-lg font-black tracking-tight text-slate-950">
              Blucom <span className="font-sans text-xs text-blue-600 font-bold tracking-widest uppercase bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Tech</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-mono text-[12px] text-slate-600">
            <a href="#overview" className="hover:text-slate-950 transition">01//OVERVIEW</a>
            <a href="#solutions" className="hover:text-slate-950 transition">02//SOLUTIONS</a>
            <a href="#framework" className="hover:text-slate-950 transition">03//PROCESS</a>
            <a href="#cases" className="hover:text-slate-950 transition">04//CASES</a>
            <a href="#contact" className="hover:text-slate-950 transition">05//CONTACT</a>
          </nav>
        </div>
      </header>

      {/* --- HERO / ENTRY MATRIX --- */}
      <main id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Core Positioning */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-blue-600 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Brand Strategy & Digital Marketing Agency
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-950 leading-[1.15]">
              Every Great Brand Starts With an <span className="italic font-serif text-blue-600">Idea.</span>
            </h1>
            <div className="grid sm:grid-cols-2 gap-4 text-slate-600 text-xs sm:text-[13px] leading-relaxed pt-2">
              <p>
                In today's highly competitive business environment, having a great product or service is no longer enough. Customers are exposed to thousands of marketing messages every day, making it difficult for businesses to capture attention, build trust, and maintain long-term conversion ecosystems.
              </p>
              <p>
                To stand out, organizations need more than advertising. They need a clear brand strategy, a compelling identity, a strong digital presence, and a performance ecosystem designed specifically to generate measurable business growth parameters.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500 max-w-md">
              <strong className="text-slate-900 font-semibold">Blucom Technologies</strong> transforms scaling startups, small businesses, and large enterprises with structural research-driven systems.
            </p>
            <div className="flex gap-2 w-full sm:w-auto shrink-0">
              <a href="#contact" className="flex-1 sm:flex-none text-center bg-slate-950 text-white font-mono text-[11px] font-bold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition">START</a>
              <a href="#solutions" className="flex-1 sm:flex-none text-center bg-white text-slate-700 font-mono text-[11px] font-bold px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition">SERVICES</a>
            </div>
          </div>
        </div>

        {/* Right Column: High Density Feature Block */}
        <div className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase block border-b border-slate-800 pb-2">// CORE ARCHITECTURE</span>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="font-mono text-blue-400 text-xs mt-0.5">A_01</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Brand Foundations</h4>
                  <p className="text-xs text-slate-400">Clear custom strategic architecture built before executing paid marketing campaigns.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-emerald-400 text-xs mt-0.5">A_02</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Growth Systems</h4>
                  <p className="text-xs text-slate-400">Performance-oriented infrastructures designed carefully around measurable financial metrics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-purple-400 text-xs mt-0.5">A_03</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Digital Experiences</h4>
                  <p className="text-xs text-slate-400">Fluid interfaces shaped intentionally for structural absolute consumer trust and immediate conversion optimization.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] font-mono flex items-center justify-between text-slate-400">
            <span>TARGET ENGAGEMENT METRICS</span>
            <span className="text-emerald-400 font-bold">ACTIVE // STABLE</span>
          </div>
        </div>

      </main>

      {/* --- CORE CAPABILITIES COMPACT DASHBOARD --- */}
      <section id="solutions" className="bg-white border-t border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">// DEPLOYED SUITE</span>
              <h2 className="font-serif text-2xl text-slate-950 font-bold">Solutions Designed for Sustainable Growth</h2>
            </div>
            
            {/* Filter Pill Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-mono">
              {['all', 'discovery', 'strategy', 'digital', 'interaction'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSegment(tab)}
                  className={`px-2.5 py-1 rounded-md transition uppercase font-medium ${activeSegment === tab ? 'bg-white text-slate-950 shadow-xs border border-slate-200/60' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* High-density grid data matrix */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesMatrix
              .filter(item => activeSegment === 'all' || item.cat === activeSegment)
              .map((service, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-xs transition flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{service.name}</h4>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 px-1.5 py-0.5 bg-slate-200/50 rounded">{service.cat}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">Structured, research-driven component configured perfectly for scalability.</p>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* --- THE GROWTH FRAMEWORK --- */}
      <section id="framework" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10 text-center sm:text-left space-y-1">
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">// WORKFLOW LOGIC</span>
          <h2 className="font-serif text-2xl text-slate-950 font-bold">Our Strategic Growth Framework</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { num: '01', name: 'Discovery', text: 'Analyzing organization parameters, operational targets, and localized competitor footprints.' },
            { num: '02', name: 'Research', text: 'Studying structural consumer behaviors and market entry scaling opportunities.' },
            { num: '03', name: 'Strategy', text: 'Building technical roadmaps aligning marketing architecture smoothly with metrics.' },
            { num: '04', name: 'Creative', text: 'Crafting content frameworks, high-end interfaces, and high-conversion assets.' },
            { num: '05', name: 'Execution', text: 'Precision deployments across paid channels, search crawlers, and server engines.' },
            { num: '06', name: 'Optimization', text: 'Continuous technical monitoring, split testing, and granular refinement cycles.' }
          ].map((step, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-mono text-xs text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold border border-blue-100">{step.num}</span>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm pt-1">{step.name}</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal pt-1 border-t border-slate-100">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MATRIX SEGMENT COLLAPSIBLE PREVIEW --- */}
      <section className="bg-slate-950 text-slate-200 py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Startups */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-mono text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 inline-block">STAGE_A // STARTUP ECOSYSTEMS</div>
              <h3 className="font-serif text-xl font-bold text-white tracking-tight">Supporting Startups from Idea to Market</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Founders handle intense resource constraints and structural market validation anomalies. We configure agile launch blueprints that bypass early infrastructure errors.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-slate-300 font-mono">
              {["Go-To-Market Route", "Investor Pitch Assets", "Validation Framework", "Acquisition Matrix"].map((v, i) => (
                <span key={i} className="bg-slate-950 px-2 py-1 rounded border border-slate-800/80">■ {v}</span>
              ))}
            </div>
          </div>

          {/* Enterprises */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-mono text-[10px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20 inline-block">STAGE_B // ENTERPRISE INFRASTRUCTURE</div>
              <h3 className="font-serif text-xl font-bold text-white tracking-tight">Enterprise Solutions for Digital Transformation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Legacy software bottlenecks and fragmented multi-channel operational structures stall modern scale. We re-engineer internal frameworks for maximum clarity.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-slate-300 font-mono">
              {["MarTech Integration", "CX Optimization Hubs", "Process Digitization", "Omnichannel Delivery"].map((v, i) => (
                <span key={i} className="bg-slate-950 px-2 py-1 rounded border border-slate-800/80">■ {v}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- THE VERIFIABLE CASE TRACKER --- */}
      <section id="cases" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8 flex justify-between items-end">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">// METRIC ARCHIVES</span>
            <h2 className="font-serif text-2xl text-slate-950 font-bold">From Concept to Impact</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { client: 'Hyundai Pakistan', tag: '#Activation #Design', title: 'TUCSON 2020 Digital Strategy Launch', text: 'Enabled end-users to organically discover, analyze, and structurally activate newly landed mini-SUV models smoothly.' },
            { client: 'Toyota Motors Islamabad', tag: '#Automation #Interaction', title: 'Digital Brand Buying Interactive Systems', text: 'Constructed seamless cross-device configuration interfaces tracking feature matrices for modern vehicle acquisitions.' },
            { client: 'Codility Hub Technologies', tag: '#Identity #Interface', title: 'Corporate Sectors Positioning Realization', text: 'Brought an emerging structural software entity from raw conceptual drafts seamlessly to full functional market entry.' }
          ].map((c, i) => (
            <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl space-y-3 hover:border-slate-400 transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="font-bold text-slate-900 tracking-wider uppercase">{c.client}</span>
                  <span className="text-slate-400 font-medium">{c.tag}</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug">{c.title}</h4>
                <p className="text-xs text-slate-500 leading-normal">{c.text}</p>
              </div>
              <button className="pt-3 border-t border-slate-100 font-mono text-[11px] text-blue-600 hover:text-slate-950 transition text-left flex items-center gap-1">
                VIEW_CASE_DATA <ArrowUpRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPACT INTERACTIVE PROJECT FORM --- */}
      <section id="contact" className="bg-slate-100 border-t border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest uppercase block">// ROUTING CONFIGURATOR</span>
            <h2 className="font-serif text-3xl text-slate-950 font-medium tracking-tight">Let's Bring Your Idea to Life</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">Select a primary objective baseline to customize operational modules instantly.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 text-left">
            
            {/* Interactive Toggle Pill Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              {['Launch', 'Identity', 'UI UX', 'Marketing'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setProjectType(mode)}
                  className={`py-2 px-3 rounded-lg border transition font-bold ${projectType === mode ? 'bg-slate-950 text-white border-slate-950' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  {mode} Framework
                </button>
              ))}
            </div>

            {/* Dynamic Context Card Block */}
            <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-xs space-y-3">
              <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold">Active Pipeline Modules Includes:</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-medium text-slate-700">
                {projectType === 'Launch' && ["Identity Blueprinting", "UI UX Prototypes", "Positioning Maps", "Business Logic Sheets", "Market Validation Studies", "Growth Engines"].map((t, i) => <span key={i} className="flex items-center gap-1.5 text-slate-800">✓ {t}</span>)}
                {projectType === 'Identity' && ["Logo Variants Matrices", "Typography Rule Sheets", "Brand Guideline PDFs", "Messaging Core Rubrics"].map((t, i) => <span key={i} className="flex items-center gap-1.5 text-slate-800">✓ {t}</span>)}
                {projectType === 'UI UX' && ["Figma Wireframes", "High-Fi Clickable Prototypes", "Interface Audits", "Interaction Specs"].map((t, i) => <span key={i} className="flex items-center gap-1.5 text-slate-800">✓ {t}</span>)}
                {projectType === 'Marketing' && ["Google Ad Target Structuring", "Meta Ad Creative Sets", "SEO Keyword Frameworks", "Conversion Track Rules"].map((t, i) => <span key={i} className="flex items-center gap-1.5 text-slate-800">✓ {t}</span>)}
              </div>
            </div>

            {/* Inline Micro Form */}
            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-3 gap-2">
              <input type="text" placeholder="Your Name" className="bg-slate-50 text-slate-900 text-xs rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-slate-400 focus:bg-white" required />
              <input type="email" placeholder="Email Contact" className="bg-slate-50 text-slate-900 text-xs rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-slate-400 focus:bg-white" required />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-[11px] font-bold tracking-wider uppercase rounded-lg transition py-2.5">
                EXECUTE_ROUTING
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* --- KNOWLEDGE PILLS / KNOWLEDGE HUB --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8 space-y-1">
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">// INTERNAL REPOSITORY</span>
          <h2 className="font-serif text-xl text-slate-950 font-bold">Insights for Modern Brands</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { type: 'ECONOMICS', title: 'Why attention economy is becoming new economy, and how to map intent data pipelines.' },
            { type: 'VISUALS', title: 'The detailed art of visual communication, structural hierarchy guidelines, and visual grammar.' },
            { type: 'OUTDOOR', title: 'Rideshare Transit Advertising: Intersecting physical out-of-home platforms with digital funnels.' },
            { type: 'CONFERENCES', title: '12 Must-Attend Global Trade Conferences For Scale Agency Professionals & Enterprise Teams.' }
          ].map((b, i) => (
            <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between space-y-4 hover:border-slate-300 transition">
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">{b.type}</span>
                <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm pt-1 leading-snug">{b.title}</h4>
              </div>
              <a href="#overview" className="font-mono text-[11px] text-slate-900 hover:text-blue-600 transition inline-flex items-center gap-1 font-bold">READ_DOC <ChevronRight size={12} /></a>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPACT SYSTEM FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 font-mono text-[11px] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="text-white font-serif font-bold text-sm block">BLUCOM TECHNOLOGIES</span>
            <span className="text-[10px] text-slate-600">Full Stack Agency Deliverables // Rawalpindi-Islamabad Hub</span>
          </div>
          <span className="text-slate-700 text-[10px]">&copy; {new Date().getFullYear()} BLUCOM. SYSTEM REVISION // 4.0.0</span>
        </div>
      </footer>

    </div>
  );
}