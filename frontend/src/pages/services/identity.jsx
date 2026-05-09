import React from 'react';
import {
  ArrowUpRight,
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  TrendingUp,
  Target
} from 'lucide-react';

const Identity = () => {
  return (
    <div className="bg-white text-[#F8FAFC] font-sans selection:bg-[#00AE80] selection:text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#F8FAFC] text-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00FFC2] opacity-5 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00AE80] opacity-5 blur-[100px]"></div>

        <div className="max-w-5xl z-10">
          <p className="text-[#00AE80] tracking-[0.2em] text-xs mb-8 font-bold">
            Leading Branding Agency Islamabad
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8 tracking-tight">
            <span className="text-gray-400 text-3xl md:text-4xl block mb-4 font-medium tracking-tight">
              Identity design:
            </span>
            <span className="relative inline-block text-black">
              Innovation
              <span className="absolute bottom-2 md:bottom-4 left-0 w-full h-4 md:h-8 bg-gradient-to-r from-[#00AE80] to-[#00FFC2] -z-10 opacity-60"></span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AE80] via-[#00FFC2] to-[#00AE80]">
              For Your Company
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            In a saturated marketplace, a brand is more than a logo; it is a living, breathing identity that shapes perception, builds trust, and drives action. At Blucom Technologies, a leading branding agency in Islamabad, we craft brand identities that are visually compelling and strategically aligned with your business objectives. Every touchpoint, from visual assets to messaging, tells your story and reinforces your brand promise.
          </p>

          <button className="group flex items-center gap-3 bg-gradient-to-r from-[#00AE80] to-[#00FFC2] text-[#011f18] px-12 py-5 rounded-full font-black text-sm tracking-tight hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,174,128,0.3)] mx-auto">
            Connect with us
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* POWER OF BRAND IDENTITY */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-emerald-500">The Power Of Brand Identity</h2>
            <div className="w-24 h-2 bg-[#00AE80] mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Brand identity communicates who you are, what you stand for, and why your audience should engage with you. A well-defined identity creates consistency, strengthens recognition, and amplifies the impact of your digital marketing services. Every element, from typography to tone, becomes part of a cohesive story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-black">
            {[
              { title: "Strategic positioning", desc: "Our team develops a positioning strategy that differentiates your business in competitive markets. We ensure your brand resonates with the right audience and supports growth objectives." },
              { title: "Visual storytelling", desc: "From logos to digital collateral, we craft visuals that resonate with your audience and enhance recall, engagement, and loyalty." },
              { title: "Consistency across channels", desc: "Every touchpoint, online or offline, reinforces the same narrative, ensuring cohesive messaging that strengthens brand trust and recognition." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-[#00AE80]/10 transition-all">
                <CheckCircle2 className="text-[#00AE80] mb-6" size={40} />
                <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE BUILD IDENTITY */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b-2 border-[#00AE80]/20 pb-10">
            <h2 className="text-5xl md:text-7xl text-black">How we build identity</h2>
            <p className="max-w-md text-gray-400 mt-6 md:mt-0 font-medium italic">
              We combine consumer behavior insights, performance marketing, and creative storytelling to create identities that leave a lasting impression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
            {[
              { step: "01", icon: Search, name: "Discovery & research", desc: "We analyze your market, competitors, and audience behavior to create informed, innovative strategies that align with business goals." },
              { step: "02", icon: Lightbulb, name: "Brand strategy & concept", desc: "Defining vision, mission, and values, we translate them into actionable frameworks guiding design and messaging." },
              { step: "03", icon: PenTool, name: "Visual & verbal design", desc: "Designing logos, color palettes, typography, and messaging frameworks that inspire recognition, trust, and engagement." },
              { step: "04", icon: Rocket, name: "Implementation & activation", desc: "Rolling out your identity across digital and offline platforms, integrating campaigns, social media, and content strategies for measurable results." }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-gray-50 hover:bg-[#00AE80] transition-all duration-500 rounded-[40px]">
                <item.icon className="text-[#00AE80] group-hover:text-white mb-8 transition-colors" size={48} />
                <span className="text-xs font-black text-gray-300 group-hover:text-[#011f18] mb-2 block tracking-[0.3em]">{item.step}</span>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white">{item.name}</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IDENTITY MATTERS */}
      <section className="bg-[#00AE80] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl font-black mb-6 leading-none">Why identity matters</h2>
            <p className="font-bold mb-4">
              In the digital era, brand identity is a strategic differentiator. A clear identity can:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Enhance trust and loyalty through visual and narrative consistency.</li>
              <li>Improve engagement and conversion across digital channels.</li>
              <li>Strengthen recognition in crowded B2B markets.</li>
              <li>Align with evolving marketing trends to stay ahead of competitors.</li>
            </ul>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8">
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto mb-2 text-white" />
              <p className="text-xs font-black uppercase text-white">Scale growth</p>
            </div>
            <div className="text-center">
              <Target size={48} className="mx-auto mb-2 text-white" />
              <p className="text-xs font-black uppercase text-white">Target results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section className="py-32 px-6 bg-[#011f18] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tight">Let’s Craft your <span className="text-[#00AE80]">Identity</span></h2>
            <p className="text-gray-200 mb-10 leading-relaxed">
              Partner with Blucom Technologies to transform your vision into a performance-driven identity. Whether launching a new brand or refreshing an existing one, we ensure your brand is positioned for success across B2B and B2C markets.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">

                <MapPin className="text-[#00AE80]" />
                <p className="text-sm text-gray-200">Islamabad</p>

              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#00AE80]" />
                <p className="text-sm text-gray-200">connect@blucomtechnologies.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#00AE80]" />
                <p className="text-sm text-gray-200">+92-303-5907230 | +92-334-0011126</p>
              </div>
            </div>
          </div>

          <div className="bg-[#00AE80] p-12 rounded-[50px] border border-[#00AE80]/20 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-black mb-6">Stay updated</h3>
            <div className="flex bg-white/10 rounded-full p-2 border border-white/10">
              <input type="text" placeholder="Your Email" className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm text-white" />
              <button className="bg-white text-[#00AE80] px-6 py-3 rounded-full font-black text-xs uppercase">Subscribe</button>
            </div>
            <p className="text-[10px] text-gray-200 mt-6 text-center tracking-widest">Blucom Technologies © 2026 | Islamabad</p>
          </div>
        </div>
      </section>

      {/* SEO JSON-LD SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Identity Design – Blucom Technologies",
          "description": "Blucom Technologies, a leading branding agency in Islamabad, specializes in creating strategic brand identities, visual storytelling, and digital marketing solutions for businesses.",
          "publisher": {
            "@type": "Organization",
            "name": "Blucom Technologies",
            "logo": {
              "@type": "ImageObject",
              "url": "https://theblucom.com/logo.png"
            }
          },
          "keywords": "Brand identity, branding agency Islamabad, visual storytelling, digital marketing, logo design, brand strategy, B2B marketing, brand activation"
        })}
      </script>
    </div>
  );
};

export default Identity;