import React from "react";
import {
  ShieldCheck,
  Activity,
  MessageCircle,
  AlertTriangle,
  TrendingUp,
  Search,
  Globe,
  Users,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ChevronRight,
  Database,
  Lock,
} from "lucide-react";

// Custom Layers Icon
const Layers = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ReputationManagementPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#00FFC2] text-gray-800">
      {/* SEO and JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Reputation Management",
          description:
            "Blucom Technologies provides expert reputation management services integrating brand strategy, digital marketing solutions, and performance marketing to protect and enhance your brand’s credibility.",
          provider: {
            "@type": "Organization",
            name: "Blucom Technologies",
          },
          keywords:
            "Branding Agency Islamabad, digital marketing agency, digital marketing services, digital marketing strategy, brand trust building, brand communication strategy, performance marketing strategy, B2B marketing insights, digital marketing growth strategy, online marketing strategy",
          url: "https://www.theblucom.com/services/reputation-management",
          areaServed: "PK",
          datePublished: "2026-03-18",
        })}
      </script>

      {/* Hero section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-white  text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-black text-xs font-black tracking-widest mb-6">
              <ShieldCheck size={14} />
              Leading branding agency Islamabad
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-emerald-500 leading-tight mb-6">
              Reputation <br />
              <span className="bg-clip-text text-transparent bg-emerald-500 from-white via-[#00FFC2] to-white">
                Management
              </span>
            </h1>
            <p className="text-gray-900 text-lg leading-relaxed max-w-xl">
              In the digital era, your brand’s reputation defines trust, loyalty, and growth. At Blucom Technologies, we deliver end-to-end solutions to protect, enhance, and amplify your brand across online and offline platforms.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full aspect-square border border-emerald-500/30 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-3/4 aspect-square border border-emerald-500/50 rounded-full flex items-center justify-center p-12">
                <ShieldCheck size={120} className="text-emerald-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-black mb-4">
                The <span className="text-emerald-500">Importance</span> of reputation
              </h2>
              <div className="h-1 w-20 bg-[#00AE80] mb-6"></div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <p className="text-gray-900 text-lg leading-relaxed">
                Reputation is more than perception; it is a critical asset influencing customer trust, loyalty, and long-term growth. Effective management ensures a strong brand presence, higher engagement, and measurable results across digital channels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { t: "Trust building", d: "Audiences perceive your business as reliable and authentic." },
                  { t: "Crisis mitigation", d: "Rapid response strategies reduce negative impacts and maintain credibility." },
                  { t: "Consistency", d: "Unified messaging ensures brand identity is reinforced at every touchpoint." },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#00AE80]">
                    <h4 className="font-black text-xs mb-2">{item.t}</h4>
                    <p className="text-[10px] text-gray-900 tracking-wide">{item.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 italic border-t border-gray-100 pt-6">
                A robust reputation amplifies marketing efforts, strengthens customer relationships, and accelerates business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology section */}
      <section className="py-32 bg-gray-50 px-6 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Our methodology</h2>
          <p className="text-[#00AE80] font-mono text-sm italic tracking-widest">
            Creativity + analytical rigor
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: "Monitoring",
              body: "Continuous monitoring of brand mentions, reviews, and online discourse to proactively address potential challenges before escalation.",
            },
            {
              icon: MessageCircle,
              title: "Messaging",
              body: "Consistent, targeted communication ensures that marketing messages resonate with your audience and align with your overall strategy.",
            },
            {
              icon: AlertTriangle,
              title: "Crisis management",
              body: "Predefined frameworks, rapid-response protocols, and contingency planning to protect your brand during sensitive events or crises.",
            },
            {
              icon: TrendingUp,
              title: "Enhancement",
              body: "Thought leadership, SEO, and strategic campaigns to position your brand as an industry authority and maximize B2B opportunities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl border border-[#00AE80]/30 hover:bg-[#00AE80] hover:text-white transition duration-500 group"
            >
              <item.icon size={32} className="text-[#00AE80] group-hover:text-white mb-4" />
              <h3 className="text-xl font-black mb-4">{item.title}</h3>
              <p className="text-sm text-gray-900 group-hover:text-white leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-black mb-6">
              Why reputation <span className="text-[#00AE80]">management matters</span>
            </h2>
            <p className="text-gray-900 mb-8 leading-relaxed">
              In a digital-first world, precise brand messaging ensures trust, customer retention, and long-term authority. Reputation management safeguards your growth and strengthens relationships.
            </p>
            <div className="space-y-4">
              {[
                "Maintain customer trust and loyalty",
                "Enhance social and content engagement",
                "Strengthen the B2B marketing funnel",
                "Align with digital growth and analytics",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                  <ChevronRight className="text-[#00AE80]" />
                  <span className="text-gray-700 font-bold text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#00AE80] p-1 rounded-3xl">
            <div className="bg-white p-12 rounded-3xl text-gray-900">
              <h3 className="text-2xl font-black mb-6 border-b border-[#00AE80]/30 pb-4">
                The Blucom advantage
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Database size={18} className="text-[#00AE80]" />
                  <p className="text-sm font-bold">Data-driven insights guiding every decision.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-[#00AE80]" />
                  <p className="text-sm font-bold">Integrated strategies across SEO, content, and digital marketing.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-[#00AE80]" />
                  <p className="text-sm font-bold">Growth solutions enhancing ROI across channels.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <footer className="py-32 bg-gray-50 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-6">
              Secure your <span className="text-[#00AE80]">authority</span>
            </h2>
            <p className="text-gray-900 mb-8">
              Partner with Blucom Technologies to develop strategies that protect your reputation, amplify brand trust, and generate measurable growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#00AE80] shrink-0" />
                <div>
                  <p className="text-sm font-bold">Islamabad</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="text-[#00AE80]" />
                  <p className="text-sm font-bold">connect@blucomtechnologies.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-[#00AE80]" />
                  <p className="text-sm font-bold">+92-303-5907230 | +92-334-0011126</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-300 p-12 rounded-3xl text-white flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-black mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">
              Receive insights, case studies, and reputation best practices.
            </p>
            <div className="w-full flex bg-white/10 p-2 rounded-full border border-white/20">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none flex-1 px-6 outline-none text-sm text-white"
              />
              <button className="bg-[#00AE80] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReputationManagementPage;