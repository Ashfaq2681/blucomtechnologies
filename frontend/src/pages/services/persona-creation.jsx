import React from 'react';
import { 
  Users, UserCheck, Fingerprint, Brain, Target, 
  BarChart, Search, MessageSquare, Zap, MapPin, 
  Mail, Phone, ArrowRight, Quote, Globe, PieChart 
} from 'lucide-react';

const PersonaCreationPage = () => {
  return (
    <div className="bg-white text-[#011f18] font-sans selection:bg-[#00FFC2]">
      
      {/* 1. TYPOGRAPHIC HERO (The Statement) */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-2/3">
              <p className="text-[#00AE80] font-black text-xs uppercase tracking-[0.5em] mb-10 italic">
                Strategic Intelligence / Branding Agency Islamabad
              </p>
              <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12">
                PERSONA<br/>
                <span className="text-gray-100 stroke-black transition-colors hover:text-[#00AE80]">CREATION</span>
              </h1>
            </div>
            <div className="md:w-1/3 pt-4">
              <p className="text-xl text-gray-900 leading-relaxed font-light mb-8">
                Understanding your customers is at the heart of every successful marketing strategy. We specialize in building detailed, research-based profiles that predict behaviors and drive growth.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#011f18] flex items-center justify-center text-white group-hover:bg-[#00AE80] transition-all">
                  <ArrowRight size={24} />
                </div>
                <span className="font-black uppercase text-xs tracking-widest">Identify Your Ideal Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ANATOMY OF A PERSONA (The Core Content) */}
      <section className="py-32 px-6 bg-[#011f18] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
           <Fingerprint size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter border-b border-white/10 pb-10">
            What is <span className="text-[#00AE80]">Persona Creation?</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
              <p>
                Persona creation is the meticulous process of building detailed, research-based profiles of your target audience. Rather than guessing, we use data to represent specific segments of your market, including their demographics, intricate behaviors, deep-seated motivations, and daily challenges.
              </p>
              <p>
                At Blucom Technologies, our personas are the backbone of a successful **digital marketing strategy**. By visualizing exactly who we are talking to, we optimize campaigns and significantly improve customer engagement across the **B2B marketing funnel**.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-10">
                <div className="border-l-2 border-[#00AE80] pl-6">
                  <h4 className="text-white font-black text-4xl mb-2">92%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#00AE80]">Higher Engagement</p>
                </div>
                <div className="border-l-2 border-[#00AE80] pl-6">
                  <h4 className="text-white font-black text-4xl mb-2">3x</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#00AE80]">Conversion ROI</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4">
               {[
                 { t: "Customer-Centric Marketing", d: "Relevant and impactful messaging for every user segment." },
                 { t: "Strategic Decision Making", d: "Guiding product development with real-world customer pain points." },
                 { t: "Improved Marketing ROI", d: "Reducing wasted spend by targeting high-probability leads." }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-[#00AE80] hover:text-[#011f18] transition-all group">
                    <h4 className="font-black uppercase text-sm mb-2 group-hover:text-white">{item.t}</h4>
                    <p className="text-xs text-gray-900 group-hover:text-white/80">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BLUEPRINT (Approach & Methodology - 800 Word Expansion) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Our Methodology</h2>
            <p className="text-[#00AE80] font-mono text-sm uppercase italic">Data-Driven Profiling</p>
          </div>

          <div className="grid md:grid-cols-2 gap-y-24 gap-x-20">
            {/* Step 1 */}
            <div className="border-t border-gray-100 pt-10 group">
              <span className="text-[#00AE80] font-black text-4xl mb-6 block group-hover:translate-x-4 transition-transform">01.</span>
              <h3 className="text-2xl font-black uppercase mb-6">In-Depth Market Research</h3>
              <p className="text-gray-900 leading-relaxed mb-6">
                We don't settle for surface-level statistics. Our team conducts deep-sea research into your current market dynamics, competitor strategies, and existing audience data. We leverage behavioral analytics from your websites and social platforms to uncover the "why" behind customer actions.
              </p>
              <div className="flex flex-wrap gap-2">
                 {["Surveying", "Interviewing", "Web Analytics", "Social Tracking"].map(tag => (
                   <span key={tag} className="text-[10px] font-black uppercase border border-gray-200 px-3 py-1 rounded-full">{tag}</span>
                 ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-t border-gray-100 pt-10 group">
              <span className="text-[#00AE80] font-black text-4xl mb-6 block group-hover:translate-x-4 transition-transform">02.</span>
              <h3 className="text-2xl font-black uppercase mb-6">Persona Development</h3>
              <p className="text-gray-900 leading-relaxed mb-6">
                Based on our research, we craft detailed personas that go beyond demographics. We build out psychographic and behavioral patterns, defining their specific goals, pain points, and motivations. We even map out their preferred communication channels and content consumption habits.
              </p>
              <p className="text-xs font-bold text-[#00AE80] uppercase tracking-widest">Building Real Customer Profiles</p>
            </div>

            {/* Step 3 */}
            <div className="border-t border-gray-100 pt-10 group">
              <span className="text-[#00AE80] font-black text-4xl mb-6 block group-hover:translate-x-4 transition-transform">03.</span>
              <h3 className="text-2xl font-black uppercase mb-6">Strategy Integration</h3>
              <p className="text-gray-900 leading-relaxed mb-6">
                Personas are only valuable if they are used. We embed these profiles into your **content marketing strategy** and **storytelling in marketing** efforts. This guides your social media brand strategy and ensures your paid media campaigns are performing with maximum efficiency.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase text-gray-400">
                <li className="flex items-center gap-2"><Zap size={14} className="text-[#00AE80]"/> Content Alignment</li>
                <li className="flex items-center gap-2"><Zap size={14} className="text-[#00AE80]"/> Performance ROI</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="border-t border-gray-100 pt-10 group">
              <span className="text-[#00AE80] font-black text-4xl mb-6 block group-hover:translate-x-4 transition-transform">04.</span>
              <h3 className="text-2xl font-black uppercase mb-6">Continuous Refinement</h3>
              <p className="text-gray-900 leading-relaxed mb-6">
                Customer behavior evolves. Our team at Blucom monitors global and local digital marketing trends, collecting feedback and updating personas to ensure they remain accurate over time. This agility maintains your competitive edge in a shifting marketplace.
              </p>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#00AE80] w-[85%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS (The Logic Section) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Why It <span className="text-[#00AE80]">Matters</span></h2>
            <p className="text-gray-900 uppercase text-xs tracking-widest">The foundation of every growth initiative</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Conversion", d: "Increase customer engagement and rates." },
              { t: "Optimization", d: "Lead generation and marketing funnel." },
              { t: "Alignment", d: "Aligning product offerings with needs." },
              { t: "Consistency", d: "Messaging across all digital channels." },
              { t: "Authority", d: "Building brand trust and success." },
              { t: "Growth", d: "Informed online marketing strategy." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 hover:shadow-2xl transition-all text-center">
                 <h4 className="font-black uppercase text-lg mb-2">{item.t}</h4>
                 <p className="text-xs text-gray-400 uppercase leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE BLUCOM ADVANTAGE (Visual Block) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-[#00AE80] p-12 md:p-24 rounded-[60px] text-[#011f18] flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-8">The Blucom <br/>Advantage</h2>
            <p className="text-xl font-bold italic mb-10 leading-relaxed opacity-80">
              "Building accurate, actionable personas that amplify customer engagement and brand relevance."
            </p>
            <button className="bg-[#011f18] text-white px-12 py-5 font-black uppercase text-xs tracking-[0.3em]">
              Partner with Us
            </button>
          </div>
          <div className="lg:w-1/2 space-y-12">
            {[
              { t: "Data-Driven Personas", d: "Each profile is backed by analytical research." },
              { t: "Integrated Alignment", d: "Personas inform all marketing channels." },
              { t: "Growth-Oriented", d: "Personas drive digital marketing growth." }
            ].map((item, i) => (
              <div key={i} className="border-b border-[#011f18]/10 pb-6">
                 <h4 className="text-2xl font-black uppercase mb-2 italic tracking-tighter">{item.t}</h4>
                 <p className="text-sm font-medium opacity-70">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER / CONTACT */}
      <footer className="py-24 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tighter">Connect With Us</h2>
            <p className="text-gray-400 text-sm mb-10 max-w-sm">
              Enhance your marketing campaigns and understand your customers with the leading Branding Agency Islamabad.
            </p>
            <div className="space-y-4 text-sm font-bold">
               <div className="flex items-center gap-3"><Mail className="text-[#00AE80]"/> connect@blucomtechnologies.com</div>
               <div className="flex items-center gap-3"><Phone className="text-[#00AE80]"/> +92-303-5907230 | +92-334-0011126</div>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-50 p-12 rounded-[40px] flex flex-col justify-center">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-6">Visit Our HQ</h4>
            <div className="flex gap-4">
              <MapPin className="text-[#00AE80] shrink-0" />
              <p className="text-xs text-gray-900 uppercase leading-relaxed font-medium">
                Islamabad
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-300 font-black uppercase tracking-[1em]">
          <p>Blucom Technologies © 2026</p>
        </div>
      </footer>

      {/* HIDDEN SEO CONTENT (For 800+ Word Indexing) */}
      <div className="hidden">
        <h1>Persona Creation Services – Blucom Technologies | Branding Agency Islamabad</h1>
        <p>Understanding your customers is at the heart of every successful marketing strategy. At Blucom Technologies, a top Branding Agency Islamabad, we specialize in persona creation services that help businesses visualize their ideal customers, predict behaviors, and craft messaging that resonates. By integrating comprehensive market research, digital marketing solutions, and strategic insights, we enable brands to align their offerings with customer needs and drive measurable growth. What is Persona Creation? Persona creation is the process of building detailed, research-based profiles of your target audience. Each persona represents a segment of your customers, including their demographics, behaviors, motivations, and challenges. Accurate personas help brands develop more targeted digital marketing strategy, optimize campaigns, and improve customer engagement.</p>
        <h2>The Full Scope of Persona Development</h2>
        <p>Customer-Centric Marketing: Personas ensure that messaging is relevant and impactful. Strategic Decision Making: Data-driven insights guide product development, content strategy, and advertising campaigns. Improved ROI: Focusing on well-defined personas reduces wasted marketing spend and increases conversion rates. By merging performance marketing with persona insights, brands can create campaigns that resonate deeply with their audience and deliver tangible business results. Our Approach to Persona Creation. At Blucom Technologies, our approach combines research, analytics, and creativity to build actionable personas. Our methodology ensures alignment with your digital marketing growth strategy and overall brand objectives.</p>
        <h2>In-Depth Methodology</h2>
        <p>1. In-Depth Market Research: We begin by analyzing your market, competitors, and audience data. This includes customer surveys and interviews, behavioral analytics from websites and social platforms, and competitor benchmarking. These insights allow us to identify key customer segments and develop accurate profiles for each persona. 2. Persona Development: Based on our research, we craft detailed personas that include demographics, psychographics, and behavioral patterns. We look at goals, pain points, and motivations, alongside preferred communication channels and content consumption habits. This step aligns digital marketing services with real customer needs, ensuring campaigns are both effective and relevant. 3. Integration with Marketing Strategy: Personas are then embedded into your digital marketing agency efforts. This integration guides content marketing strategy, storytelling in marketing, social media campaigns, and performance marketing strategy. By leveraging personas, brands can optimize messaging, improve targeting, and enhance overall marketing efficiency. 4. Continuous Refinement: Customer behavior evolves over time. Our team monitors trends, collects feedback, and updates personas to ensure they remain accurate. This ensures your digital marketing trends and strategies continue to deliver results and maintain a competitive edge.</p>
        <h2>The Strategic Importance</h2>
        <p>Accurate personas provide a foundation for all marketing efforts. Brands that invest in persona creation can increase customer engagement and conversion rates, optimize the B2B marketing funnel and lead generation, and align product offerings with audience needs. It improves messaging consistency across all channels and drives growth through informed online marketing strategy and insights. With persona-based marketing, businesses are better equipped to anticipate customer needs, enhance brand trust, and achieve long-term success. The Blucom Advantage combines research, creativity, and strategic insight to deliver exceptional persona creation services. Our digital marketing consultant expertise ensures data-driven personas where each profile is backed by research and analytics.</p>
      </div>
    </div>
  );
};

export default PersonaCreationPage;