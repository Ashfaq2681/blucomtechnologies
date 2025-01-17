import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const wantTalk = () => {
    navigate("/multistepform");
  };
  

  return (
    
    <section className="">
      <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto px-8 md:px-32 py-5 h-lvh">
        <img
          loading="lazy"
          src="./hero/hero.png"
          alt="heroImage"
          className="w-[200px] lg:w-[400px] xl:w-[850px] h-[182px] lg:h-[300px] xl:h-[600px]"
        />
        <div className="max-w-[525px] min-w-[360px] leading-none mt-60">
          <p className="text-[30px] text-[#727277]">
            It starts from
            <br />
            <p className="text-[70px] text-[#1169DA] underline decoration-8 decoration-[#A2C5F3]">
              Simple Idea
              <br />
            </p>
            to next unicorn
          </p>
          <div className="mt-24">
            <a
              href="/"
              className="text-[18px] text-[#727277] flex flex-row justify-start items-center"
            >
              Read More
              <img src="./icons/arrow_1.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-5">
        <img
          src="/hero/landing_bg_1.png"
          alt="image.."
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-start sm:justify-center items-start w-full text-white p-4 mt-10 xl:mt-20">
          <div className="sm:w-[70%] lg:w-[50%] w-full lg:p-4 p-2 text-left flex flex-col">
            <p>Let's Build Your Brand</p>
            <p className="text-[60px] underline underline-offset-[15px] decoration-[#A2C5F3] decoration-2">
              Beyond Visuals
            </p>
            <p className="w-full">
              at blucom we create valuable brands for your customers rather than
              just a simple visual,we exist to put all our effort in not only
              creating beautiful visuals. but strategic design driven by
              cultural aesthetics put brands into more known and culturally
              connected spaces. Let us know what your next idea is?
            </p>
            <p className="text-[40px] font-bold mt-5">I want to...</p>

            <label htmlFor="dropdown" className="step6-form-label">
              What industry are you in?
            </label>
            <select
              style={{ color: "black" }}
              id="dropdown"
              className="step6-select"
              aria-label="Industry"
            >
              <option value="" selected disabled>
                Launch a new product or service
              </option>
              <option value="1">Identify Concept</option>
              <option value="2">UI UX Design</option>
              <option value="3">Brand Positioning</option>
              <option value="4">Business Plan</option>
              <option value="5">Market Research</option>
              <option value="6">Digital Marketing</option>
            </select>
            <div className="bg-black text-[#ffff] font-bold px-2 py-1 w-[150px] text-center mt-10">
              <button onClick={wantTalk}> Want to Talk? </button>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex flex-col md:flex-row text-[#727277] leading-none w-full flex-wrap">
        <img
          src="./landing/interactive_design.png"
          alt="interactive_design"
          className="w-auto h-auto lg:w-[50%] sm:w-[100%]"
        />
        <div className="flex flex-col justify-center items-center md:items-start m-10 md:ml-20 md:w-[26%]">
          <p className="text-[24px]">Codility hub technologies</p>
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Interaction Design
          </p>
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
      <div className="flex flex-col items-center justify-center py-40 px-10 md:px-0">
        <div className="flex flex-col justify-center items-center m-10 w-auto">
          <p className="text-[24px]">This is how we make it</p>
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Possible
          </p>
          <p className="flex flex-row text-[18px] mt-5">
            Discovery/Strategy/Interaction
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-10 text-[34px] text-[#727277] mx-10">
          <div className="flex flex-col gap-10">
            <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Discovery
            </p>
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
            <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Strategy
            </p>
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
            <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Digital
            </p>
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
            <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Interaction
            </p>
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
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Insights
          </p>
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
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Happening
          </p>
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
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            What you're Thinking?
          </p>
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



// const Landing = () => {
//   throw new Error("Simulated error");
//   return <h1>Landing Page</h1>;
// };

// export default Landing;