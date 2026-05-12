import { Link } from "react-router-dom";

const serviceLinks = {
  Identity: "/services/identity",
  "Brand Strategy": "/services/brand-strategy",
  "Messaging Positioning": "/services/messaging-positioning",
  "Reputation Management": "/services/reputation-management",
  "Product Mapping": "/services/product-mapping",
  "Persona Creation": "/services/persona-creation",
  "Strategy Design": "/services/content-strategy",
  "Brand Awareness": "/services/brand-awareness",
  "Strategic Communication": "/services/strategic-communication",
  "Analysis/Measurement": "/services/analysis-measurement",
  "Impact Measurement": "/services/impact-measurement",
  "Analytics Implementation": "/services/analytics-implementation",
  "Search marketing": "/services/search-marketing",
  "Lead Gen": "/services/lead-gen",
  "Media Planning/Buying": "/services/media-planning-buying",
  "Content Marketing": "/services/content-marketing",
  "Interaction assets Devs": "/services/interaction-assets-devs",
  "Nurture Strageties": "/services/nurture-strategies",
  "Ui Designing": "/services/ui-designing",
  "User Journey Mapping": "/services/user-journey-mapping",
  "UX  Design": "/services/prototyping-and-wireframing",
  "Interaction Design": "/services/interaction-design",
  "Web Maintenance": "/services/web-maintenance",
  "Data Visualization": "/services/data-visualization",
};

const serviceGroups = [
  {
    title: "Discovery",
    items: [
      "Identity",
      "Brand Strategy",
      "Messaging Positioning",
      "Reputation Management",
      "Product Mapping",
      "Persona Creation",
    ],
  },
  {
    title: "Strategy",
    items: [
      "Strategy Design",
      "Brand Awareness",
      "Strategic Communication",
      "Analysis/Measurement",
      "Impact Measurement",
      "Analytics Implementation",
    ],
  },
  {
    title: "Digital",
    items: [
      "Search marketing",
      "Lead Gen",
      "Media Planning/Buying",
      "Content Marketing",
      "Interaction assets Devs",
      "Nurture Strageties",
    ],
  },
  {
    title: "Interaction",
    items: [
      "Ui Designing",
      "User Journey Mapping",
      "UX  Design",
      "Interaction Design",
      "Web Maintenance",
      "Data Visualization",
    ],
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
      <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
        <p className="text-2xl text-gray-900 flex flex-wrap gap-2 mt-5">This is</p>
        <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
          How We make Possible
        </p>
        <p className="text-2xl text-gray-900 flex flex-wrap gap-2 mt-5">
          Discovery / Strategy / Interaction
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#111827] mx-auto w-full max-w-6xl">
        {serviceGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-6">
            <p className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
              {group.title}
            </p>
            {group.items.map((item) => (
              <Link
                key={item}
                to={serviceLinks[item] || "/services/brand-strategy"}
                className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4] transition hover:text-emerald-600"
              >
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <div className="text-white font-bold px-4 py-2 w-40 text-center mt-10 border bg-gray-400 cursor-pointer">
          Want to Talk?
        </div>
      </div>
    </div>
  );
};

export default Services;
