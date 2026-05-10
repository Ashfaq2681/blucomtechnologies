import React from "react";

const CodilityHubPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-white">
      {/* Full Page Section */}
      <section className="w-full h-full flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-0 h-full">
          <div className="w-full h-full max-h-screen overflow-hidden">
            <img
              src="./landing/interactive_design.png"
              alt="Codility Hub Interaction Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:p-12">
          <span className="text-2xl text-gray-900">Codility Hub Technologies</span>
          <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300 mt-2">
            Interaction Design
          </span>
          <div className="text-2xl text-gray-900 flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
            <span>#Identity</span>
            <span>#Interaction</span>
            <span>#Interface</span>
          </div>
          <p className="text-lg text-gray-900 mt-10 leading-normal text-center md:text-left px-4 md:px-0">
            Codility Hub came to us with just a name but an amazing proposition. A
            well-defined brand in the tech sector focused on core development with
            fast turnaround. We were asked to bring this idea to life through identity
            and interaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CodilityHubPage;