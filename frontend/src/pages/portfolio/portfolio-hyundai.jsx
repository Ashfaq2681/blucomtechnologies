import React from "react";

const HyundaiPakistanPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-white ">

      {/* Full-width Section */}
      <div className="w-full flex flex-col md:flex-row items-center bg-white">

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/landing/tucson.png" // make sure this path is correct
            alt="Hyundai Tuscon 2020"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-12 md:px-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-12 md:px-12">
        </div>
        
        <span className="text-2xl text-gray-500">Hyundai Pakistan</span>
          <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300 mt-2">
            TUSCON 2020
          </span>

          {/* Tags */}
          <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
            <span>#Activation</span>
            <span>#Discovery</span>
            <span>#Design</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-500 mt-10 leading-normal text-center md:text-left px-4 md:px-0">
            Hyundai Pakistan launched a newly launched Hyundai Tuscon, a revolution in the mini SUV category.
            Our role was to enable the user to discover the new product, activate it, and create a digital
            strategy along with design collaterals.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HyundaiPakistanPage;