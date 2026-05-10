import { useState } from "react";
import { Link } from "react-router-dom";

const launchOptions = [
  { label: "Identify Concept", service: "Product Mapping" },
  { label: "UI UX Design", service: "UI Designing" },
  { label: "Brand Positioning", service: "Brand Strategy" },
  { label: "Business Plan", service: "Strategic Communication" },
  { label: "Market Research", service: "Persona Creation" },
  { label: "Digital Marketing", service: "Search Marketing" },
];

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

          <button
            type="button"
            className="mt-6 flex w-full max-w-screen-lg cursor-pointer flex-row items-center justify-between border border-white bg-white p-3 text-left text-gray-900 shadow-lg transition hover:bg-emerald-50 sm:p-4"
            onClick={toggleDropDown}
            aria-expanded={dropDownOpen}
          >
            <span className="pr-4 text-sm font-semibold sm:text-base">
              I want to Launch a new product or service
            </span>
            <img
              src="./icons/dropDown.png"
              alt=""
              className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                dropDownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`w-full max-w-screen-lg overflow-hidden border-x border-b border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out ${
              dropDownOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col px-3 py-3 text-sm sm:px-4 sm:text-base">
              {launchOptions.map((option) => (
                <li key={option.label}>
                  <Link
                    to={`/multistepform?service=${encodeURIComponent(option.service)}&intent=${encodeURIComponent(option.label)}`}
                    className="block border-b border-white/20 px-3 py-3 font-medium transition hover:bg-white/25 hover:pl-5 focus:bg-white/25 focus:outline-none sm:px-4"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex justify-start">
            <Link
              to="/multistepform"
              className="bg-white text-gray-900 font-bold px-4 py-2 w-40 text-center mt-10 border border-gray-400 cursor-pointer"
            >
              Lets Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsGetStarted;
