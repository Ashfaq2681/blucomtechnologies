import { useState } from "react";

const LetsGetStarted = () => {
  const [dropDownOpen, setDropDownOpen] = useState(true);

  const toggleDropDown = () => {
    setDropDownOpen((current) => !current);
  };

  return (
    <section className="form">
      <div className="relative w-full h-screen flex justify-center items-center bg-emerald-500 text-white p-4 xl:p-10">
        <div className="sm:w-[70%] lg:w-[50%] w-full lg:p-4 p-2 text-left flex flex-col items-center">
          <p className="text-6xl underline underline-offset-8 decoration-green-300 decoration-5 text-left">
            Let's build your Brand Beyond Visuals
          </p>
          <p className="w-full text-2l mt-4 text-left">
            At Blucom, we create valuable brands for your customers rather than just a simple visual.
            We exist to put all our effort into not only creating beautiful visuals but strategic
            design driven by cultural aesthetics to put brands into more known and culturally
            connected spaces. Let us know what your next idea is!
          </p>

          <p className="text-lg font-normal mt-12 text-left"></p>

          <div
            className="bg-white flex flex-row justify-between items-center mt-2 cursor-pointer p-3 w-full max-w-screen-lg"
            onClick={toggleDropDown}
          >
            <p className="text-gray-900">I want to Launch a new product or service</p>
            <img src="./icons/dropDown.png" alt="Dropdown Icon" className="w-5 h-5 mr-3" />
          </div>

          <div
            className={`bg-gray-200 text-gray-900 flex-col justify-center items-start py-6 px-10 w-full max-w-screen-lg ${dropDownOpen ? "flex" : "hidden"} transition duration-300 ease-in-out`}
          >
            <p>Identify Concept</p>
            <p>UI UX Design</p>
            <p>Brand Positioning</p>
            <p>Business Plan</p>
            <p>Market Research</p>
            <p>Digital Marketing</p>
          </div>

          <div className="w-full flex justify-start">
            <div className="bg-white text-gray-600 font-bold px-4 py-2 w-40 text-center mt-10 border border-gray-400 cursor-pointer">
              Lets Get Started
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsGetStarted;
