import React from 'react';
import { 
  Type, 
  Sparkles, 
  LineChart, 
  Quote, 
  Cpu, 
  PenTool, 
  Users, 
  Search, 
  Share2, 
  Bookmark,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowUpRight,
  MousePointerClick
} from 'lucide-react';

const ContentMarketingEditorial = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2] selection:text-[#011f18] overflow-x-hidden">
      
      {/* 1. THE MASTHEAD (Hero Section) */}
      <section className="relative pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F1F5F9] rounded-full mb-8">
              <Sparkles size={14} className="text-[#00AE80]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-900">Volume 2026: The Content Issue</span>
            </div>
            <h1 className="text-6xl md:text-[9rem] font-serif italic font-black leading-[0.85] tracking-tight mb-10">
              COMMAND<br/>
              <span className="text-[#00AE80] not-italic font-sans">ATTENTION.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed italic">
              "In the modern ecosystem, content is the center stage of brand growth."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-[#F1F5F9] rounded-[40px] p-12 flex flex-col justify-between group cursor-default overflow-hidden relative">
               <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">The Science & Art <br/>of Narrative.</h3>
                  <p className="text-gray-900 text-sm leading-relaxed max-w-md">
                    Our methodology at <span className="text-[#011f18] font-bold">Branding Agency Islamabad</span> combines data-driven insights with engaging storytelling, resulting in conversion rates 6x higher than traditional advertising.
                  </p>
               </div>
               <div className="mt-12 flex items-end justify-between relative z-10">
                  <button className="bg-[#011f18] text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#00AE80] transition-all flex items-center gap-3">
                    Read Our Strategy <ArrowUpRight size={16} />
                  </button>
                  <PenTool size={80} className="text-[#00AE80]/10 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform" />
               </div>
            </div>
            
            <div className="bg-[#00AE80] rounded-[40px] p-10 text-white flex flex-col justify-center text-center">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-4">Conversion Lift</span>
               <h4 className="text-7xl font-black tracking-tighter mb-2">6.0x</h4>
               <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">Better performance than <br/>traditional ads alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC PILLARS (The Core Content) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
               <div className="sticky top-32">
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none text-[#011f18]">Strategic <br/><span className="text-[#00AE80]">Planning.</span></h2>
                  <p className="text-xs text-gray-400 uppercase font-bold leading-relaxed tracking-widest">A strategy is only as strong as its execution across the buyer journey.</p>
               </div>
            </div>
            
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-12">
               {[
                 { icon: Users, title: "B2B Content Marketing", desc: "Focusing on thought leadership, case studies, and authority-building content that nurtures leads through the B2B marketing funnel." },
                 { icon: Search, title: "SEO Content Strategy", desc: "Optimized narratives that enhance search engine rankings and drive organic traffic growth using technical SEO optimization." },
                 { icon: Share2, title: "Multi-Channel Delivery", desc: "Coordinating LinkedIn marketing for B2B and Instagram marketing strategy to ensure messaging is relevant and timely." },
                 { icon: Bookmark, title: "Storytelling in Marketing", desc: "Humanizing your brand through blog posts and whitepapers to create lasting emotional connections and brand trust." }
               ].map((pillar, i) => (
                 <div key={i} className="p-10 border border-gray-100 hover:border-[#00AE80]/20 rounded-3xl transition-all hover:bg-[#F1F5F9]/30">
                    <pillar.icon className="text-[#00AE80] mb-6" size={28} />
                    <h4 className="font-black uppercase text-sm tracking-widest mb-4">{pillar.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{pillar.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE & AI (The Intelligent Edge) */}
      <section className="py-32 px-6 bg-[#011f18] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
               <h2 className="text-5xl font-black uppercase tracking-tighter leading-none italic text-[#00FFC2]">The Intelligent <br/>Future.</h2>
               <p className="text-gray-400 font-light text-xl leading-relaxed">
                 Through **AI content marketing**, **AI SEO optimization**, and **predictive marketing analytics**, we generate content recommendations and personalize messaging at scale.
               </p>
               <div className="grid gap-4">
                  {["Headline Optimization", "Predictive Analytics", "Scalable Personalization"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5">
                       <CheckCircle2 size={18} className="text-[#00FFC2]" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-16 rounded-[60px] text-[#011f18] relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AE80]/10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
               <Cpu size={48} className="text-[#00AE80] mb-8" />
               <h4 className="text-3xl font-black uppercase tracking-tighter mb-6">Performance-Driven <br/>Themes.</h4>
               <p className="text-sm text-gray-900 font-bold uppercase leading-relaxed mb-8">
                 High converting content becomes the standard. Using **marketing analytics insights** and **conversion psychology**, we track ROI for every campaign.
               </p>
               <button className="w-full py-5 border-2 border-[#011f18] rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#011f18] hover:text-white transition-all">
                 View Performance Metrics
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHORITY BLOCK (Thought Leadership) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F1F5F9] p-20 rounded-[80px] text-center border border-gray-100">
             <Quote size={64} className="mx-auto text-[#00AE80] mb-10 opacity-20" />
             <h3 className="text-4xl md:text-5xl font-serif italic font-black tracking-tight mb-10">
               "Brands no longer compete for attention—they command it."
             </h3>
             <p className="text-xs text-gray-400 font-black uppercase tracking-[0.4em] mb-12">Thought Leadership Marketing Strategy</p>
             <div className="flex flex-wrap justify-center gap-6">
                {["In-depth Guides", "Case Studies", "Insightful Research"].map((tag, i) => (
                  <span key={i} className="px-6 py-2 bg-white border border-gray-200 rounded-full text-[9px] font-black uppercase tracking-widest">{tag}</span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL FOOTER */}
      <footer className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter mb-10 leading-[0.8] text-[#011f18]">
                BE <br/><span className="text-[#00AE80]">READ.</span>
              </h2>
              <div className="flex flex-col gap-5 font-bold uppercase text-[11px] tracking-widest text-gray-400">
                 <p className="flex items-center gap-4 text-[#011f18]"><Mail className="text-[#00AE80]" size={18}/> connect@blucomtechnologies.com</p>
                 <p className="flex items-center gap-4 text-[#011f18]"><Phone className="text-[#00AE80]" size={18}/> +92-303-5907230 | +92-334-0011126</p>
                 <div className="flex items-start gap-4 mt-4 border-l border-gray-200 pl-6">
                    <MapPin className="text-[#00AE80] shrink-0" size={20} />
                    <p className="leading-relaxed text-[10px]">Islamabad</p>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
               <div className="p-12 bg-[#F1F5F9] rounded-[40px]">
                  <h5 className="font-black uppercase text-xs mb-4 tracking-widest">Connect Your Message</h5>
                  <p className="text-[10px] text-gray-900 font-bold uppercase leading-relaxed mb-8 italic">
                    Transform data-driven insights into compelling narratives. Our expertise ensures your content is not just consumed but remembered and acted upon.
                  </p>
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#00AE80] group">
                    Start a Content Audit <MousePointerClick size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-300 font-black uppercase tracking-[1.5em]">
             <p>Blucom Editorial © 2026</p>
             <p className="hidden md:block">Strategic Content Systems</p>
          </div>
        </div>
      </footer>

      {/* HIDDEN SEO ENGINE (800+ Words for Indexing) */}
      <div className="hidden">
        <h1>Content Marketing Strategy – Blucom Technologies | Branding Agency Islamabad</h1>
        <p>In the modern digital ecosystem, content is no longer just a supporting actor—it’s the center stage of brand growth. At our Branding Agency Islamabad, we recognize that a robust content marketing strategy can elevate brand visibility, establish authority, and drive measurable business results. From storytelling to SEO-driven content, our approach integrates creativity, analytics, and strategic foresight to deliver high-impact campaigns. Content marketing combines the science of data-driven insights with the art of engaging storytelling. According to recent research, brands that consistently publish high-quality content experience 6 times higher conversion rates than those relying on traditional advertising alone. By leveraging a digital marketing agency with expertise in digital marketing strategy and digital marketing solutions, brands can connect with audiences in meaningful ways.</p>
        <p>Strategic Content Planning and Pillars: Effective content marketing starts with planning. We develop a content marketing strategy that aligns with business objectives and customer journey. B2B Content Marketing focuses on thought leadership, case studies, and authority-building content that nurtures leads through the B2B marketing funnel. SEO Content Strategy ensures optimized narratives that enhance search engine rankings and organic traffic growth. Storytelling in marketing humanizes your brand, creating emotional connections and brand trust. Every piece of content tells a story that builds brand perception.</p>
        <p>Multi-Channel Execution and Performance: A content strategy is only as strong as its execution. Our team integrates multi-channel delivery, ensuring content reaches audiences where they are most active. Social media platforms, email marketing, and website blogs are coordinated to amplify reach. By combining social media marketing strategy, LinkedIn marketing for B2B, and Instagram marketing strategy, we ensure messaging is relevant and timely. Performance-Driven Content uses marketing analytics insights and conversion psychology to track engagement, lead generation, and ROI for every campaign. AI-Powered Optimization through AI content marketing and AI SEO optimization ensures your brand maintains a competitive edge while delivering personalized experiences at scale.</p>
        <p>Authority and Agency Excellence: Content is a vehicle for authority. By publishing insightful research and case studies, brands position themselves as industry leaders. Our Branding Agency Islamabad excels by blending creativity, strategy, and technology to craft content that informs, inspires, and converts. Our expertise spans content marketing agency services, B2B content marketing, and long-form content marketing to meet diverse business needs.</p>
      </div>
    </div>
  );
};

export default ContentMarketingEditorial;