import React from 'react';
import { 
  Users, UserCheck, Fingerprint, Brain, Target, 
  BarChart, Search, MessageSquare, Zap, MapPin, 
  Mail, Phone, ArrowRight, Globe, PieChart 
} from 'lucide-react';

const PersonaCreationPage = () => {
  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-gray-100 text-gray-800 font-sans selection:bg-emerald-300">
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <p className="text-emerald-600 font-bold text-xs tracking-[0.4em] mb-6">
              Branding agency islamabad
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              Persona creation
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Understanding your customers is the foundation of every successful marketing strategy. At Blucom Technologies, we build data-driven personas that help you predict behavior, improve engagement, and drive measurable growth.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col justify-center">
            <button className="flex items-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-full hover:bg-emerald-700 transition">
              <ArrowRight /> Identify your ideal customer
            </button>
          </div>
        </div>
      </section>

      {/* What is persona */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">What is persona creation?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Persona creation is the process of building detailed, research-based profiles of your target audience. Each persona represents a segment of your customers, including their demographics, motivations, challenges, and behaviors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These insights allow businesses to craft highly targeted marketing strategies, optimize campaigns, and deliver messaging that truly resonates with their audience.
            </p>
          </div>

          <div className="grid gap-6">
            {[{
              icon: <Users />,
              t: "Customer-centric marketing",
              d: "Deliver relevant and impactful messaging to each segment"
            },{
              icon: <Target />,
              t: "Strategic decisions",
              d: "Use data to guide campaigns and product direction"
            },{
              icon: <BarChart />,
              t: "Improved roi",
              d: "Reduce wasted spend and increase conversions"
            }].map((item,i)=> (
              <div key={i} className="bg-white shadow-sm p-6 rounded-2xl flex gap-4 items-start hover:shadow-lg transition">
                <div className="text-emerald-600">{item.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{item.t}</h4>
                  <p className="text-sm text-gray-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-28 px-6 bg-gradient-to-r from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Our methodology</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[{
              t:"In-depth market research",
              d:"We analyze your market, competitors, and audience using surveys, interviews, and behavioral analytics to uncover real insights."
            },{
              t:"Persona development",
              d:"We build detailed profiles including demographics, goals, motivations, and content consumption behavior."
            },{
              t:"Strategy integration",
              d:"Personas are integrated into content marketing, paid campaigns, and social media strategies."
            },{
              t:"Continuous refinement",
              d:"We continuously update personas based on trends, feedback, and performance data."
            }].map((item,i)=> (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-300 transition">
                <h3 className="text-xl font-semibold mb-3">{item.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why it matters</h2>
          <p className="text-gray-500">The foundation of every growth initiative</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{
            icon:<Zap />,
            t:"Conversion",
            d:"Increase customer engagement and rates"
          },{
            icon:<Users />,
            t:"Optimization",
            d:"Lead generation and marketing funnel"
          },{
            icon:<Target />,
            t:"Alignment",
            d:"Aligning product offerings with needs"
          },{
            icon:<MessageSquare />,
            t:"Consistency",
            d:"Messaging across all digital channels"
          },{
            icon:<Globe />,
            t:"Authority",
            d:"Building brand trust and success"
          },{
            icon:<PieChart />,
            t:"Growth",
            d:"Informed online marketing strategy"
          }].map((item,i)=> (
            <div key={i} className="bg-white p-8 rounded-2xl border hover:shadow-xl transition text-left">
              <div className="text-emerald-600 mb-4">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.t}</h4>
              <p className="text-sm text-gray-500">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantage */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto bg-emerald-100 p-16 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6">The blucom advantage</h2>
          <p className="text-gray-700 mb-10 max-w-xl">
            We combine research, creativity, and strategy to deliver personas that are actionable and aligned with your business goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              t:"Data-driven personas",
              d:"Backed by real analytics and insights"
            },{
              t:"Integrated alignment",
              d:"Used across all marketing channels"
            },{
              t:"Growth focused",
              d:"Built to drive measurable results"
            }].map((item,i)=> (
              <div key={i}>
                <h4 className="font-semibold mb-2">{item.t}</h4>
                <p className="text-sm text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Connect with us</h3>
            <p className="text-gray-500 mb-6">
              Enhance your marketing campaigns and understand your customers better with Blucom Technologies.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><Mail className="text-emerald-600"/> connect@theblucom.com</div>
              <div className="flex items-center gap-2"><Phone className="text-emerald-600"/> +92-334-0011126</div>
            </div>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl">
            <h4 className="text-sm text-gray-500 mb-2">Location</h4>
            <div className="flex gap-2">
              <MapPin className="text-emerald-600"/>
              <p className="text-sm text-gray-600">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonaCreationPage;