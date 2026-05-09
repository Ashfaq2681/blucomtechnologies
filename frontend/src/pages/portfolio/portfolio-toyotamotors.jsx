import React from "react";

const ToyotaExperiencePage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-white">
      {/* Full Page Section */}
      <section className="w-full h-full flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end p-6 md:p-12">
          <span className="text-2xl text-gray-500">Toyota Motors Islamabad</span>
          <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300 mt-2">
            Digital Experience
          </span>
          
          <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5 justify-center md:justify-end">
            <span>#Automation</span>
            <span>#Interaction</span>
            <span>#Digital Experience</span>
          </div>
          <p className="text-lg text-gray-500 mt-10 leading-normal text-center md:text-right px-4 md:px-0">
            Toyota Motors Islamabad partnered with us to enhance their digital presence and
            create a seamless brand experience for modern car buyers. Our role was to design
            engaging digital interactions that allow customers to explore Toyota vehicles,
            discover features, and connect with the brand effortlessly. Through thoughtful
            design and strategic user experience, we helped translate Toyota’s legacy of
            reliability and innovation into a modern digital journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-full max-h-screen overflow-hidden">
            <img
              src="./landing/toyota.png"
              alt="Toyota Digital Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToyotaExperiencePage;