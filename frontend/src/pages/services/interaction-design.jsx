import React from 'react';
import { 
  Compass, 
  Map, 
  Layers, 
  MousePointer2, 
  Users, 
  LineChart, 
  Workflow, 
  Lightbulb, 
  Target, 
  Heart, 
  ChevronRight, 
  Spline,
  Eye,
  BarChart4,
  Cpu,
  MessagesSquare,
  Sparkles,
  ArrowUpRight,
  Navigation,
  Telescope,
  Wind
} from 'lucide-react';

const InteractionDesign = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-emerald-300 overflow-x-hidden">

      {/* 1. HERO SECTION - Interaction Design */}
      <section className="relative pt-48 pb-40 px-6">
        {/* Suggested Light Background Variations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E6FFFA,transparent_70%)] pointer-events-none" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500 opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gray-100 mb-12 bg-white/50 backdrop-blur-md">
            <Telescope size={14} className="text-emerald-500" />
            <span className="text-[9px] font-black tracking-[0.4em] text-gray-400">Interaction Protocol v.23</span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.8] mb-12">
            Interaction <br />
            <span className="text-emerald-500">Design</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16">
              In an increasingly digital world, the way users interact with a product defines brand success. Our <span className="text-[#011f18] font-bold">branding agency in Islamabad</span> creates intuitive, engaging experiences that align user needs with business goals.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-t border-gray-50 pt-16">
              <div className="text-center">
                <span className="block text-4xl font-black text-[#011f18] tracking-tighter">20-30%</span>
                <span className="text-[10px] font-black tracking-widest text-gray-300">Conversion lift</span>
              </div>
              <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
              <div className="text-center">
                <span className="block text-4xl font-black text-[#011f18] tracking-tighter">ROI</span>
                <span className="text-[10px] font-black tracking-widest text-gray-300">Driven methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC BENEFITS */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12">The essence of interaction design</h2>
          <p className="text-gray-500 leading-relaxed mb-16">
            Interaction design goes beyond aesthetics. It shapes how users navigate, respond, and perceive a digital interface. Poor interaction design can result in up to 70% drop-offs, emphasizing the importance of thoughtful design.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Enhanced User Engagement", list: ["Capture attention effortlessly", "Apply consumer behavior principles", "Drive meaningful actions"], icon: Users },
              { title: "Optimized User Flows", list: ["Identify friction points", "Guide users toward goals", "Improve conversion rates"], icon: MousePointer2 },
              { title: "Brand Consistency", list: ["Integrate brand identity", "Strengthen trust", "Maintain cohesive experience"], icon: Map }
            ].map((card, i) => (
              <div key={i} className="p-12 bg-white border-l-4 border-gray-100 hover:border-emerald-500 transition-all">
                <card.icon className="text-gray-200 group-hover:text-emerald-500 mb-6" size={32} />
                <h4 className="text-lg font-black mb-4">{card.title}</h4>
                <ul className="space-y-2 text-gray-500 text-[11px] font-bold leading-snug">
                  {card.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DATA + HUMAN INSIGHTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h3 className="text-5xl font-black mb-6 text-emerald-500">Human-Centered Intelligence</h3>
            <p className="text-gray-500 leading-relaxed mb-12">
              Our process blends data-driven insights with human-centered design. We use heatmaps, session recordings, and analytics to understand behavior while uncovering emotional triggers and decision-making patterns.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 group hover:bg-[#F0FFF8] transition-all">
                <Cpu className="text-emerald-500 mb-4" size={24} />
                <h5 className="text-[10px] font-black mb-2">AI-powered</h5>
                <p className="text-[9px] text-gray-400">Predictive analytics for behavior forecasting.</p>
              </div>
              <div className="p-6 border border-gray-100 group hover:bg-[#F0FFF8] transition-all">
                <Sparkles className="text-emerald-500 mb-4" size={24} />
                <h5 className="text-[10px] font-black mb-2">Emotional resonance</h5>
                <p className="text-[9px] text-gray-400">Understanding emotional triggers and user patterns.</p>
              </div>
            </div>
          </div>

          <div className="relative bg-white/5 border border-gray-100 p-12">
            <Navigation className="text-emerald-500 mb-6 animate-pulse" size={36} />
            <h4 className="text-2xl font-black mb-4">Stakeholder Alignment</h4>
            <p className="text-[11px] text-gray-500 mb-6">
              Journey maps act as communication tools. For B2B clients, we align complex buying processes with marketing automation and lead generation strategies.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-gray-100 text-[#011f18] font-black text-[9px]">Sales Harmony</div>
              <div className="px-4 py-2 bg-gray-100 text-[#011f18] font-black text-[9px]">Marketing Sync</div>
            </div>
            <Spline size={300} className="absolute -right-20 -bottom-20 opacity-10" />
          </div>
        </div>
      </section>

      {/* 4. BRAND EXPERIENCE */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 block mb-4">Brand experience marketing</span>
          <h3 className="text-5xl font-black mb-6 leading-tight">Storytelling Meets Strategy</h3>
          <p className="text-gray-500 text-[11px] leading-relaxed mb-12">
            Every interaction reflects your brand positioning strategy and storytelling marketing. Users experience your narrative, creating emotional resonance that fosters loyalty and advocacy.
          </p>
          <div className="h-[2px] w-32 bg-gray-200 mx-auto"></div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <div className="w-12 h-[2px] bg-emerald-500 mb-6"></div>
            <h2 className="text-6xl font-black leading-tight mb-6">Beyond clicks</h2>
            <p className="text-gray-400 text-[11px] font-bold mb-6 flex items-center gap-2"><MessagesSquare className="text-emerald-500" size={16} /> connect@blucomtechnologies.com</p>
            <p className="text-[9px] leading-relaxed">Islamabad HQ</p>
          </div>

          <div className="bg-[#F0FFF8] p-12 border border-gray-100">
            <h5 className="font-black text-xs mb-4 text-[#011f18]">Transform interactions</h5>
            <p className="text-[10px] text-gray-500 mb-6">From startups to enterprise-level B2B, we help brands create meaningful digital interactions that drive growth, engagement, and loyalty.</p>
            <button className="flex items-center justify-between w-full bg-[#011f18] text-white px-8 py-4 font-black text-[11px] hover:bg-emerald-500 transition-all">
              Request Your Journey Audit <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-gray-200 text-[10px] font-black tracking-widest flex justify-between">
          <p>Blucom Interaction Div. © 2026</p>
        </div>
      </footer>

      {/* HIDDEN SEO + Social Schema */}
      <div className="hidden">
        <h1>Interaction Design Services | Branding Agency Islamabad</h1>
        <p>Elevate user experiences with expert interaction design. Enhance engagement, optimize flows, and drive business growth through human-centered digital interactions. Our Branding Agency in Islamabad creates intuitive interfaces that guide users from discovery to action while maximizing conversions. We integrate brand experience marketing, digital marketing strategy, and UX design to deliver seamless, meaningful experiences. Using analytics, heatmaps, and predictive marketing, we optimize every touchpoint for measurable impact.</p>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Blucom Technologies",
            "url": "https://www.blucomtechnologies.com",
            "logo": "https://www.blucomtechnologies.com/logo.png",
            "sameAs": ["https://www.facebook.com/blucomtechnologies","https://www.linkedin.com/company/blucom-technologies"],
            "description": "Expert interaction design services to enhance user engagement and business growth."
          }
          `}
        </script>
      </div>
    </div>
  );
};

export default InteractionDesign;