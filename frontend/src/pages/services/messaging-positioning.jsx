import React from 'react';
import {
  MessageSquare,
  Target,
  Layers,
  Zap,
  Quote,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const Messaging = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#011f18] selection:bg-[#00FFC2] selection:text-white">
      
      {/* 1. SYMMETRICAL SPLIT HERO */}
      <section className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white border-r border-gray-100">
          <p className="text-[#00AE80] font-black text-xs mb-4 tracking-[0.4em] uppercase">Premier Branding Agency Islamabad</p>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-8">
            Messaging <br/>
            <span className="relative inline-block text-[#00AE80]">
              Positioning
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#00FFC2] -z-10 opacity-60"></span>
            </span>
          </h1>
          <p className="text-gray-900 text-lg max-w-md mb-10 leading-relaxed">
            In today’s digital landscape, effective messaging is the difference between being overlooked and becoming a thought leader. Our strategies ensure your brand speaks with clarity, authority, and consistency across all platforms, engaging the right audiences and driving measurable business outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#00AE80] text-white px-10 py-5 font-black uppercase text-xs tracking-widest shadow-lg hover:scale-105 transition-transform">
              Connect with us
            </button>
            <div className="flex items-center gap-2 text-[#00AE80] font-bold text-xs uppercase tracking-widest px-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFC2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00AE80]"></span>
              </span>
              Authority driven
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#00AE80] to-[#00FFC2] flex items-center justify-center relative p-12 lg:p-24 overflow-hidden">
          <div className="z-10 text-center max-w-md">
            <div className="inline-block p-6 rounded-full border-2 border-white mb-8 animate-pulse">
              <MessageSquare size={64} className="text-white" />
            </div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-6">Strategic storytelling</h2>
            <p className="text-white text-sm leading-relaxed">
              We combine creativity, research, and analytics to craft messaging that resonates, builds trust, and accelerates business growth. Every word is aligned with your brand’s purpose and audience expectations.
            </p>
          </div>
          {/* Symmetrical Decoration */}
          <div className="absolute bottom-0 right-0 p-10 opacity-10">
            <h2 className="text-[12rem] font-black text-white leading-none">BC</h2>
          </div>
        </div>
      </section>

      {/* 2. IMPORTANCE & PILLARS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black mb-6">The importance of <span className="text-[#00AE80]">messaging positioning</span></h2>
              <div className="w-20 h-2 bg-[#00AE80] mb-8"></div>
              <p className="text-gray-900 text-sm leading-relaxed mb-6">
                Messaging positioning shapes how your brand is perceived, differentiates you from competitors, and builds authority. It ensures all communication—from digital campaigns to social media touchpoints—reinforces your unique value proposition.
              </p>
              <Quote className="text-[#00AE80]" size={40} />
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { title: "Brand differentiation", desc: "A clear positioning strategy sets your brand apart in competitive markets.", icon: Target },
                { title: "Audience alignment", desc: "Tailored messaging addresses customer pain points, enhancing engagement and conversion.", icon: Layers },
                { title: "Integrated marketing", desc: "Consistent messaging drives performance across digital campaigns and social initiatives.", icon: Zap },
                { title: "Brand recall", desc: "Amplifies awareness, strengthens recognition, and supports lead generation efforts.", icon: TrendingUp }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-8 border-b-4 border-[#00AE80] shadow-sm hover:-translate-y-2 transition-transform">
                    <Icon className="text-[#00AE80] mb-4" />
                    <h4 className="font-black text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-900 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end gap-4 mb-20">
            <h2 className="text-6xl md:text-9xl font-black text-[#011f18] opacity-5 leading-none">Process</h2>
            <div className="md:ml-[-100px] mb-4">
              <h3 className="text-4xl font-black">Our methodology</h3>
              <p className="text-[#00AE80] font-bold">Research. Framework. Integration. Optimization.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-gray-100">
            {[
              { num: "01", name: "Research", content: "We study demographics, psychographics, industry trends, and competitor messaging to uncover insights that drive results." },
              { num: "02", name: "Framework", content: "Define brand promises, key messages, and tone of voice to ensure every touchpoint is aligned." },
              { num: "03", name: "Integration", content: "Implement strategies across content marketing, social media, and performance advertising for maximum impact." },
              { num: "04", name: "Measurement", content: "Track metrics, analyze audience response, and optimize messaging to improve ROI." }
            ].map((item, i) => (
              <div key={i} className="p-12 border-r last-of-type:border-r-0 border-gray-100 hover:bg-[#00AE80]/10 group transition-all duration-500">
                <span className="text-5xl font-black text-gray-300 group-hover:text-[#00AE80] transition-colors">{item.num}</span>
                <h4 className="text-xl font-black my-6 group-hover:text-[#011f18] tracking-tight">{item.name}</h4>
                <p className="text-gray-900 text-sm group-hover:text-gray-800">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLUCOM ADVANTAGE */}
      <section className="bg-[#00AE80]/20 py-24 px-6 text-[#011f18]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-none">The Blucom advantage</h2>
              <div className="space-y-6">
                {[
                  "Research-backed insights derived from analytics.",
                  "Integrated strategy aligned with content marketing and performance campaigns.",
                  "Conversion-focused execution designed to maximize ROI and engagement."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle size={24} className="text-white shrink-0" />
                    <p className="font-bold text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[40px] text-[#011f18] shadow-lg">
              <h4 className="text-[#00AE80] font-black mb-4 tracking-widest text-xs">Why it matters</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-gray-300 pb-2"><span>Building trust</span> <span className="font-bold text-[#00AE80]">Authority</span></li>
                <li className="flex justify-between border-b border-gray-300 pb-2"><span>Driving engagement</span> <span className="font-bold text-[#00AE80]">Loyalty</span></li>
                <li className="flex justify-between border-b border-gray-300 pb-2"><span>Accelerating growth</span> <span className="font-bold text-[#00AE80]">B2B acquisition</span></li>
                <li className="flex justify-between"><span>Enhancing ROI</span> <span className="font-bold text-[#00AE80]">High impact</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT & FOOTER */}
      <footer className="bg-[#011f18] pt-32 pb-12 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">Let's craft <br/><span className="text-[#00AE80]">your voice.</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#00AE80] shrink-0" />
                  <p className="text-sm text-gray-400">Islamabad</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="text-[#00AE80] shrink-0" />
                  <p className="text-sm text-gray-400">connect@blucomtechnologies.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="text-[#00AE80] shrink-0" />
                  <p className="text-sm text-gray-400">+92-303-5907230 | +92-334-0011126</p>
                </div>
              </div>
              <div className="border-l border-gray-800 pl-12 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#00AE80] font-bold mb-4">Newsletter</p>
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                  <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 text-sm flex-1 px-4" />
                  <button className="bg-[#00AE80] text-[#011f18] px-6 py-2 rounded-full font-black text-[10px] uppercase">Join</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#00AE80] to-[#00FFC2] p-12 rounded-[50px] flex items-center justify-center text-center">
            <button className="text-[#011f18] text-2xl font-black uppercase tracking-tight leading-none group">
              Start your <br/>project now <br/>
              <ArrowRight className="inline-block mt-4 group-hover:translate-x-4 transition-transform" size={48}/>
            </button>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-900 flex justify-between items-center text-[10px] text-gray-900 uppercase tracking-widest">
          <p>© 2026 Blucom Technologies | Islamabad</p>
          <div className="flex gap-6">
            <span>B2B marketing</span>
            <span>Content strategy</span>
            <span>Performance ROI</span>
          </div>
        </div>
      </footer>

      {/* SEO + Social Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Messaging Positioning",
        "description": "Blucom Technologies offers expert messaging positioning services that integrate brand strategy, B2B marketing insights, and digital marketing solutions to strengthen engagement and business growth.",
        "provider": {
          "@type": "Organization",
          "name": "Blucom Technologies"
        },
        "keywords": "Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, B2B marketing agency, B2B brand strategy, brand positioning strategy, performance marketing, digital marketing growth strategy, online marketing strategy",
        "url": "https://www.theblucom.com/services/messaging-positioning",
        "areaServed": "PK",
        "datePublished": "2026-03-18"
      })}} />
    </div>
  );
};

export default Messaging;