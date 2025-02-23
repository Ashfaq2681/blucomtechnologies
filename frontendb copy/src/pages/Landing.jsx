import { useState } from "react";
import { Link } from "react-router-dom";

const Discovery = [
  "Identity",
  "Brand Strategy",
  "Messaging Positioning",
  "Reputation Management",
  "Product Mapping",
  "Persona Creation",
];
const Strategy = [
  "Strategy Design",
  "Brand Awareness",
  "Strategic Communication",
  "Analysis/Measurement",
  "Impact Measurement",
  "Analytics Implementation",
];
const Digital = [
  "Search marketing",
  "Lead Gen",
  "Media Planning/Buying",
  "Content Marketing",
  "Interaction assets Devs",
  "Nurture Strageties",
];
const Interaction = [
  "Ui Designing",
  "User Journey Mapping",
  "UX  Design",
  "Interaction Design",
  "Web Maintenance",
  "Data Visualization",
];

const Landing = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <section className="">
      <div className="gap-10 flex flex-col md:flex-row-reverse items-center py-20">
        <div className="w-[90%] sm:w-[40%] mx-auto overflow-hidden">
          <img
            loading="lazy"
            src="./hero/hero.png"
            alt="heroImage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[90%] sm:w-[40%] mx-auto leading-none">
          <p className="text-[30px] text-[#727277]">
            It starts from
            <br />
            <h1 className="text-[70px] text-[#1169DA] underline decoration-8 decoration-[#A2C5F3]">
              Simple Idea
              <br />
            </h1>
            to next unicorn
          </p>
        </div>
      </div>
      <div className="relative w-full mt-5">
        <div className="overflow-hidden h-[800px]">
          <img
            src="/hero/landing_bg_1.png"
            alt="image.."
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center w-full text-white py-20">
          <div className="sm:w-[80%] lg:w-[70%] w-full lg:p-4 p-2 text-left flex flex-col">
            <p>Let's Build Your Brand</p>
            <h1 className="text-[40px] mb-5 underline underline-offset-[15px] decoration-[#A2C5F3] decoration-2">
              Beyond Visuals
            </h1>
            <p className="w-full">
              at blucom we create valuable brands for your customers rather than
              just a simple visual,we exist to put all our effort in not only
              creating beautiful visuals. but strategic design driven by
              cultural aesthetics put brands into more known and culturally
              connected spaces. Let us know what your next idea is?
            </p>
            <h1 className="text-[40px] font-semibold mt-5">I Want to...</h1>
            <div className="relative">
              <div
                className="bg-white w-[100%] flex flex-row justify-between items-center border border-[#9A9A9A] mt-2 cursor-pointer"
                onClick={toggleDropDown}
              >
                <p className="p-3 text-[#1E2832]">
                  Launch a new product or service
                </p>
                <img
                  src="./icons/dropDown.png"
                  alt="dropdown"
                  className="w-5 h-5 mr-3 mb-2"
                />
              </div>
              <div
                className={`bg-[#F4F4F4] text-[#1E2832]  w-[100%] absolute top-14 flex-col justify-center items-start py-6 px-10 border border-[#9A9A9A] border-t-0 ${
                  dropDownOpen ? "scale-y-100" : "scale-y-0"
                } origin-top transition-transform duration-300 ease-in-out`}
              >
                <p>Identify Concept</p>
                <p>UI UX Design</p>
                <p>Brand Positioning</p>
                <p>Business Plan</p>
                <p>Market Research</p>
                <p>Digital Marketing</p>
              </div>
            </div>
            <div className="bg-white text-[#5F5F5F] font-bold px-2 py-1 w-[150px] text-center mt-56">
              Want to Talk?
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start text-[#727277] leading-none w-full flex-wrap">
        <div className="w-[100%] sm:w-[50%]">
          <img
            src="./landing/tucson.png"
            alt="tucson"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Hyundai Pakistan</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            TUSCON 2020
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Activation</p>
            <p>#Discovery</p>
            <p>#Design</p>
            <p>#Digital</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new
            revolution in the mini SUV Category, our part is to enable the user
            to discover the new product, activate the product, digital strategy,
            and design collaterals.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-end text-[#727277] leading-none w-full  text-end flex-wrap">
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Codility hub technologies</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Interaction Design
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Identity</p>
            <p>#Interaction</p>
            <p>#Website</p>
            <p>#Interface</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Codility hub came to us just with the name. but an amazing
            proposition, well-defined brand, in Tech Sector, focused on core
            Development, with an idea of Fast turnaround. we were asked to bring
            this idea to life through identity. and interaction.
          </p>
        </div>
        <div className="w-[100%] sm:w-[50%]">
        <img
          src="./landing/toyota.png"
          alt="toyota"
          className="w-full h-full"
        />
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-[#727277] leading-none w-full">
        <div className="w-[100%] sm:w-[50%]">
        <img
          src="./landing/interactive_design.png"
          alt="interactive_design"
          className="w-full h-full"
        /></div>
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Codility hub technologies</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Interaction Design
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Identity</p>
            <p>#Interaction</p>
            <p>#Website</p>
            <p>#Interface</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Codility hub came to us just with the name. but an amazing
            proposition, well-defined brand, in Tech Sector, focused on core
            Development, with an idea of Fast turnaround. we were asked to bring
            this idea to life through identity. and interaction.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 w-[80%] mx-auto">
        <div className="flex flex-col m-10 w-full">
          <p className="text-[24px]">This is how we make it</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Possible
          </h1>
          <p className="flex flex-row gap-10 text-[18px] mt-5">
            Discovery/Strategy/Interaction
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-10 w-full text-[20px] text-[#727277]">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Discovery
            </h1>
            {Discovery.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Strategy
            </h1>
            {Strategy.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Digital
            </h1>
            {Digital.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Interaction
            </h1>
            {Interaction.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
        </div>
        <button className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10">
          Read More
        </button>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Get used to industry</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Insights
          </h1>
          <p className="flex flex-row text-[18px] mt-5">
            As a guiding light for the brands
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center flex-wrap">
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="underline decoration-[#1E2832]/30 decoration-2">
              INSIGHTS
            </p>
            <img
              src="./landing/insight1.jpg"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              Why attention economy is becoming new ecomony, and how brands can
              take leverage
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="underline decoration-[#1E2832]/30 decoration-2">
              INSIGHTS
            </p>
            <img
              src="./landing/insight2.jpg"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              The art of visual communication, how visual grammer can be
              utilized by the brands
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
        </div>
        <Link
          to={`/blogsingle`}
          className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Industry news and what's </p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Happening
          </h1>
          <p className="flex flex-row text-[18px] mt-5">
            As a guiding light for the brands
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center flex-wrap">
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <img
              src="./icons/forbes_logo.png"
              alt="forbes logo"
              className="w-[80px] h-[30px]"
            />
            <img
              src="./landing/news1.png"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              Rideshare Advertising To A New Outdoor World
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <img
              src="./icons/adobe_logo_1.png"
              alt="adobe logo"
              className="w-[70px] h-[30px]"
            />
            <img
              src="./landing/news2.png"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              12 Must-Attend Trade Conferences For Agency Professionals
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
        </div>
        <Link
          to={`/blogsingle`}
          className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Have and idea? lets talk!</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            What you're Thinking?
          </h1>
        </div>
        <form
          action=""
          className="flex flex-col gap-10 w-full max-w-[1300px] px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
            <input
              type="text"
              className="landingInput"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="landingInput"
              placeholder="Last Name*"
            />
            <input type="email" className="landingInput" placeholder="Email*" />
            <input
              type="text"
              className="landingInput"
              placeholder="Company Name*"
            />
          </div>
          <input type="text" className="landingInput" placeholder="YourTitle" />
          <textarea
            name=""
            id=""
            cols="5"
            className="landingInput"
            placeholder="What you want to say?"
          />
          <button
            type="submit"
            className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Landing;
