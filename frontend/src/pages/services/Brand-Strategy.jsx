import React from 'react';
import { 
  Compass, 
  Target, 
  BarChart, 
  Users, 
  ArrowUpRight, 
  Search, 
  Eye, 
  PenTool, 
  Activity, 
  MapPin, 
  Mail, 
  Phone,
  ShieldCheck,
  Zap,
  Layout
} from 'lucide-react';

const BrandStrategyBento = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#011f18] selection:bg-[#00FFC2] selection:text-white p-4 md:p-8 lg:p-12">
      
      {/* MASTER GRID CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        
        {/* 1. HERO TILE */}
        <div className="md:col-span-8 bg-[#00AE80]/20 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col justify-between min-h-[550px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2] opacity-15 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[#00AE80] opacity-15 blur-[120px]"></div>
          
          <div className="z-10">
            <p className="text-[#00AE80] font-black text-xs uppercase tracking-[0.4em] mb-6">
              Top branding agency Islamabad
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#011f18] leading-none tracking-tight">
              Brand <br/>
              <span className="relative inline-block text-[#00AE80]">
                Strategy
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#00FFC2] opacity-40 -z-10"></span>
              </span>
            </h1>
          </div>

          <div className="z-10 mt-12">
            <p className="text-gray-700 text-lg max-w-xl leading-relaxed mb-8">
              In today’s fast-paced business environment, a strong brand strategy separates companies that thrive from those that struggle to capture attention. At Blucom Technologies, we create brand strategies that align with business objectives, audience insights, and market opportunities, ensuring your brand communicates value, trust, and relevance across every touchpoint.
            </p>
            <button className="flex items-center gap-3 bg-gradient-to-r from-[#00AE80] to-[#00FFC2] text-[#011f18] px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
              Elevate your brand <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* 2. STAT TILE */}
        <div className="md:col-span-4 bg-[#00FFC2]/40 rounded-[40px] p-8 flex flex-col justify-center items-center text-center group">
          <Zap size={64} className="text-white mb-6 group-hover:scale-110 transition-transform" />
          <h2 className="text-4xl font-black text-[#011f18] leading-none mb-2">Growth</h2>
          <p className="text-[#011f18]/70 font-bold text-xs uppercase tracking-widest">Optimized ROI</p>
          <div className="mt-8 pt-8 border-t border-[#011f18]/10 w-full">
            <p className="text-sm font-medium italic">"The blueprint for how your company presents itself to the world."</p>
          </div>
        </div>

        {/* 3. UNDERSTANDING TILE */}
        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-[40px] p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
            <Compass className="text-[#00AE80]" /> Understanding brand strategy
          </h3>
          <ul className="space-y-4">
            {[
              { t: "Positioning your brand", d: "A precise brand positioning strategy ensures your business stands out against competitors, highlighting your unique value proposition and core strengths." },
              { t: "Building trust", d: "Through consistent messaging, visual identity, and customer engagement, we help foster long-term loyalty and credibility in your target audience." },
              { t: "Driving growth", d: "A strategic brand plan enhances digital marketing campaigns, improves conversion rates, and boosts measurable business performance, aligning with both B2B and B2C growth objectives." },
              { t: "Integrating with marketing", d: "Your brand strategy seamlessly aligns with digital marketing, social media campaigns, and content strategies to reinforce core messaging at every touchpoint." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 p-4 bg-[#F8FAFC] rounded-2xl shadow-sm border border-[#00AE80]/20">
                <CheckCircle2 className="text-[#00AE80] shrink-0" size={18} />
                <div>
                  <span className="font-black text-xs block">{item.t}</span>
                  <span className="text-xs text-gray-600">{item.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. PROCESS TILE */}
        <div className="md:col-span-12 lg:col-span-8 bg-white border border-gray-200 rounded-[40px] p-8 md:p-12 shadow-sm">
          <h3 className="text-3xl font-black mb-10 text-center">Our approach to brand strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Search, name: "Research & analysis", text: "We study market trends, competitor strategies, and audience behavior to uncover insights that inform data-driven strategies, ensuring campaigns resonate and deliver results." },
              { icon: Eye, name: "Defining vision & messaging", text: "We define your brand’s mission, vision, and messaging pillars to create a cohesive framework guiding all communications, campaigns, and content strategies." },
              { icon: PenTool, name: "Visual & verbal identity", text: "We design logos, typography, color palettes, and storytelling frameworks that strengthen recognition and engage audiences across digital and offline channels." },
              { icon: Activity, name: "Implementation & optimization", text: "We roll out your strategy across all channels, monitor performance metrics, refine campaigns, and ensure continuous improvement for measurable growth." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-[#E6FFF9] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00AE80] transition-colors">
                  <item.icon className="text-[#00AE80] group-hover:text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-sm mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. WHY CRITICAL TILE */}
        <div className="md:col-span-6 lg:col-span-3 bg-[#00AE80]/70 rounded-[40px] p-8 text-white shadow-md">
          <ShieldCheck className="text-[#00FFC2] mb-6" size={40} />
          <h3 className="text-xl font-black mb-4 tracking-tight">Why strategy is critical</h3>
          <p className="text-white text-xs leading-relaxed">
            A strong brand strategy ensures clarity, authority, and trust in a crowded marketplace. It helps businesses communicate with purpose, build lasting relationships, and convert awareness into measurable growth. 
          </p>
        </div>

        {/* 6. ADVANTAGE TILE */}
        <div className="md:col-span-6 lg:col-span-6 bg-gradient-to-br from-[#00FFC2]/70 to-[#00AE80]/70 rounded-[40px] p-8 flex flex-col justify-between shadow-md">
          <div className="flex justify-between items-start">
             <h3 className="text-3xl font-black text-[#011f18]">The Blucom Advantage</h3>
             <Layout className="text-[#011f18] opacity-30" size={48} />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/20 p-4 rounded-2xl border border-white/20">
              <p className="text-[10px] font-black uppercase">Research driven</p>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl border border-white/20">
              <p className="text-[10px] font-black uppercase">Integrated marketing</p>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl border border-white/20">
              <p className="text-[10px] font-black uppercase">Growth focused</p>
            </div>
          </div>
        </div>

        {/* 7. CONTACT TILE */}
        <div className="md:col-span-12 lg:col-span-3 bg-white rounded-[40px] p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
          <h4 className="font-black text-xs mb-6 tracking-widest text-[#00AE80]">Contact Blucom</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
               <MapPin size={16} className="text-gray-400" />
               <p className="text-[10px] text-gray-500 font-medium">Islamabad</p>
            </div>
            <div className="flex gap-3">
               <Mail size={16} className="text-gray-400" />
               <p className="text-[10px] text-gray-500 font-medium">connect@blucomtechnologies.com</p>
            </div>
            <div className="flex gap-3">
               <Phone size={16} className="text-gray-400" />
               <p className="text-[10px] text-gray-500 font-medium">+92-303-5907230 | +92-334-0011126</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER INFO */}
      <div className="max-w-7xl mx-auto mt-12 px-8 flex justify-between items-center opacity-40">
        <p className="text-[10px] font-black tracking-[0.4em]">Blucom Technologies • 2026</p>
        <p className="text-[10px] font-black tracking-widest">B2B brand strategy agency</p>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default BrandStrategyBento;