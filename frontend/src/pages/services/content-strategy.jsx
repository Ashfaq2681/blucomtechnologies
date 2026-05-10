import React from 'react';
import { 
  PenTool, 
  Wind, 
  BarChart3, 
  Lightbulb, 
  Quote, 
  Share2, 
  MousePointer2, 
  Target, 
  Zap, 
  BookOpen,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const ContentStrategy = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Bright gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-gray-50 to-emerald-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00AE80]/10 border border-[#00AE80]/20 text-[#00AE80] text-[10px] font-black tracking-[0.3em] mb-6">
                <Wind size={14} /> cut through the noise
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                Building meaningful connections <br/>
                <span className="text-[#00AE80]">through data-driven content strategy</span>
              </h1>
              <p className="text-lg text-gray-700 font-light leading-relaxed max-w-lg mb-8">
                In a crowded digital landscape, brands that communicate without clarity get lost. At our <span className="font-bold text-[#011f18]">Branding Agency Islamabad</span>, we craft content that resonates, informs, and converts.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#00AE80] text-white px-8 py-4 font-black text-[10px] tracking-widest hover:bg-[#00FFC2] transition-all flex items-center gap-3">
                  design my strategy <PenTool size={16} />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="p-10 bg-white border border-gray-200 shadow-lg space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 border bg-gray-100 border-gray-200"></div>)}
                  </div>
                  <span className="text-[10px] font-black text-[#00AE80] tracking-widest">engagement lift</span>
                </div>
                <h3 className="text-4xl font-black text-[#011f18]">+67%</h3>
                <p className="text-xs text-gray-900 leading-relaxed font-medium">
                  Average engagement increase for organizations with well-defined content strategies.
                </p>
                <div className="h-px w-full bg-gray-50"></div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 italic">
                  <span>data-driven performance</span>
                  <TrendingUp size={12}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Methodology Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-center lg:text-left">
              Creativity meets insight
            </h2>
            <div className="w-20 h-1 bg-[#00AE80] mx-auto lg:mx-0"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Thought leadership", d: "Positioning your brand as an authority through long-form research, case studies, and expert insights." },
              { icon: Target, title: "Precision analytics", d: "Using dwell time, scroll depth, and conversion tracking to identify high-performing content assets." },
              { icon: Lightbulb, title: "Consumer psychology", d: "Crafting narratives that align with your audience's values, vision, and emotional triggers." },
              { icon: BarChart3, title: "Performance monitoring", d: "Tracking every campaign, identifying gaps, and continuously optimizing for maximum ROI." },
              { icon: Zap, title: "AI-powered insights", d: "Leveraging AI to predict trends, personalize messaging, and generate high-performing content recommendations." },
              { icon: Share2, title: "Social integration", d: "Ensuring content is optimized across LinkedIn, Instagram, and other platforms for measurable impact." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200">
                <div className="w-14 h-14 bg-[#F0FDF4] flex items-center justify-center text-[#00AE80] mb-4">
                  <item.icon size={28} />
                </div>
                <h4 className="font-black text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-900 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Multi-Channel Approach */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-[#00AE80]">Integrated multi-channel ecosystem</h2>
              <p className="text-gray-700 font-light leading-relaxed">
                Content strategy is multi-dimensional. Our approach distributes content across social media, email, websites, blogs, and SEO channels to create a cohesive experience and amplify brand recall.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["B2B funnel alignment","Viral B2C strategies","AI SEO optimization","Predictive analytics"].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00AE80]" />
                    <span className="text-[10px] font-bold">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="p-6 bg-white border border-gray-200">
                <Share2 className="text-[#00AE80] mb-4"/>
                <h4 className="font-black text-xs mb-2">cross-platform synergy</h4>
                <p className="text-[10px] text-gray-900 leading-relaxed">From LinkedIn for B2B engagement to Instagram for storytelling, every channel is executed for measurable impact.</p>
              </div>
              <div className="p-6 bg-[#00AE80] text-white">
                <Zap className="mb-4"/>
                <h4 className="font-black text-xs mb-2">AI-powered iteration</h4>
                <p className="text-[10px] leading-relaxed">Predictive analytics and AI insights allow rapid iteration, keeping content hyper-relevant and effective.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Measurable outcomes */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto text-gray-300 mb-6" size={60} />
          <h3 className="text-3xl font-black mb-6 text-[#00AE80] italic">"Credibility is currency."</h3>
          <p className="text-gray-900 text-sm leading-relaxed mb-8">
            Through thought leadership, research-backed articles, and multi-channel campaigns, we create trust, nurture leads, and accelerate conversions.
          </p>
          <div className="flex justify-center gap-12">
            {[
              { l: "Lead conversion", v: "72%" },
              { l: "Audience loyalty", v: "High" },
              { l: "Organic visibility", v: "Top" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl font-black text-[#011f18]">{stat.v}</span>
                <span className="text-[9px] text-gray-900 font-bold">{stat.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact & Footer */}
      <footer className="py-24 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Speak with <span className="text-[#00AE80]">purpose</span>
            </h2>
            <div className="flex flex-col gap-2 text-sm text-gray-700 font-bold">
              <p className="flex items-center gap-2"><Mail className="text-[#00AE80]"/> connect@blucomtechnologies.com</p>
              <p className="flex items-center gap-2"><Phone className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</p>
              <div className="flex items-start gap-2 mt-2 opacity-70">
                <MapPin className="text-[#00AE80]"/> Islamabad
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h5 className="font-black text-xs mb-2">continuous optimization</h5>
            <p className="text-[10px] font-bold mb-4 text-gray-900">Regular audits and performance reviews ensure your brand achieves sustainable growth.</p>
            <button className="flex items-center justify-center w-full bg-[#00AE80] text-white py-3 font-black text-[10px] hover:bg-[#00FFC2] transition-all gap-2">
              Audit my content <MousePointer2 size={14}/>
            </button>
          </div>
        </div>
        <div className="pt-10 text-center text-[10px] text-gray-400 font-bold tracking-widest">
          Blucom Technologies © 2026
        </div>
      </footer>

      {/* Hidden SEO Content + Social Schema */}
      <div className="hidden">
        <h1>Building Meaningful Connections Through Data-Driven Content Strategy – Blucom Technologies</h1>
        <p>In a crowded digital landscape, brands that communicate without clarity often get lost. At our Branding Agency Islamabad, content strategy is more than posting blogs or social updates—it’s about crafting narratives that resonate, inform, and convert. By combining creativity, data-driven insights, and consumer psychology, our approach ensures your content reaches and inspires your audience.</p>
        <p>Robust content strategy serves as the backbone of digital marketing success. Brands that invest in thoughtful content see measurable improvements in growth, organic visibility, and audience loyalty. Research shows organizations with well-defined content strategies experience 67% higher engagement and 72% higher lead conversion rates.</p>
        <p>Data-driven insights guide every decision. Metrics like dwell time, click-through rates, social engagement, and conversion rates allow continuous refinement. Predictive analytics and AI personalization enable hyper-relevant content at scale. Thought leadership content positions your brand as an authority, creating trust, nurturing leads, and accelerating conversions. Multi-channel integration ensures consistent brand storytelling across social media, email, websites, blogs, and SEO channels.</p>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Building Meaningful Connections Through Data-Driven Content Strategy",
          "description": "Elevate your brand with a research-backed content strategy from a top Branding Agency Islamabad. Leverage digital marketing insights, performance analytics, and storytelling to drive engagement and conversions.",
          "keywords": "Branding Agency Islamabad, content strategy, digital marketing agency, digital marketing services, digital marketing strategy, SEO content strategy, content marketing agency, thought leadership marketing",
          "publisher": {
            "@type": "Organization",
            "name": "Blucom Technologies HQ",
            "logo": "https://www.blucomtechnologies.com/logo.png",
            "url": "https://www.blucomtechnologies.com"
          }
        })}
        </script>
      </div>
    </div>
  );
};

export default ContentStrategy;