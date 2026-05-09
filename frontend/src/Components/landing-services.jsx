import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const LandingServices = () => {
  const sections = [
    {
      title: "Discovery",
      items: [
        { name: "Identity", path: "/services/identity" },
        { name: "Brand Strategy", path: "/services/brand-strategy" },
        { name: "Messaging Positioning", path: "/services/messaging-positioning" },
        { name: "Reputation Management", path: "/services/reputation-management" },
        { name: "Product Mapping", path: "/services/product-mapping" },
        { name: "Persona Creation", path: "/services/persona-creation" },
        { name: "Customer Journey Mapping", path: "/services/customer-journey-mapping" },
      ],
    },
    {
      title: "Strategy",
      items: [
        { name: "Brand Awareness", path: "/services/brand-awareness" },
        { name: "Strategic Communication", path: "/services/strategic-communication" },
        { name: "Analysis / Measurement", path: "/services/analysis-measurement" },
        { name: "Impact Measurement", path: "/services/impact-measurement" },
        { name: "Analytics Implementation", path: "/services/analytics-implementation" },
        { name: "Campaign Optimization", path: "/services/campaign-optimization" },
        { name: "Content Strategy", path: "/services/content-strategy" },
      ],
    },
    {
      title: "Digital",
      items: [
        { name: "Search Marketing", path: "/services/search-marketing" },
        { name: "Lead Gen", path: "/services/lead-gen" },
        { name: "Media Planning / Buying", path: "/services/media-planning-buying" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Omnichannel Campaigns", path: "/services/omnichannel-campaign-management" },
        { name: "Interaction Assets Devs", path: "/services/interaction-assets-devs" },
        { name: "Nurture Strategies", path: "/services/nurture-strategies" },
      ],
    },
    {
      title: "Interaction",
      items: [
        { name: "UI Designing", path: "/services/ui-designing" },
        { name: "Prototyping & Wireframing", path: "/services/prototyping-and-wireframing" },
        { name: "User Journey Mapping", path: "/services/user-journey-mapping" },
        { name: "Interaction Design", path: "/services/interaction-design" },
        { name: "Web Maintenance", path: "/services/web-maintenance" },
        { name: "Data Visualization", path: "/services/data-visualization" },
        { name: "Web Development", path: "/services/web-development" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">We provide a complete range of</span>
            <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Creative & Digital Services
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Discovery / Strategy / Interaction</span>
          </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#727277] mx-auto w-full max-w-6xl">
     
      {sections.map((section, secIndex) => (
        <div key={secIndex} className="flex flex-col gap-6">
          <span className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
            {section.title}
          </span>
          <ul className="flex flex-col gap-6">
            {section.items.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-gray-500 hover:text-emerald-500 transition duration-300"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default LandingServices;