import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


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

  const [dropDownOpen, setDropDownOpen] = useState(true)

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
    console.log(dropDownOpen)
  }

  return (
    <div>
      <Header/>
      <section className="">
        <Helmet>
          <title>blucomtechnologies | Brand Strategy & Digital Solutions</title>
          <meta
            name="description"
            content="blucomtechnologies specializes in brand positioning, digital marketing, UX/UI design, and SEO-driven strategies for businesses."
          />
          <meta
            name="keywords"
            content="Brand Strategy, Digital Marketing, SEO, UX/UI Design, Content Marketing, Web Development, Social Media Marketing"
          />
          <meta name="author" content="blucomtechnologies" />

          {/* Open Graph for Social Media */}
          <meta property="og:title" content="blucomtechnologies - Brand Strategy & Digital Solutions" />
          <meta
            property="og:description"
            content="We offer top-notch digital solutions including SEO, brand strategy, UX/UI design, and content marketing to scale your business."
          />
          <meta property="og:image" content="https://www.blucomtechnologies.com/preview.jpg" />
          <meta property="og:url" content="https://www.blucomtechnologies.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="blucomtechnologies - Brand Strategy & Digital Solutions" />
          <meta name="twitter:description" content="Expert brand positioning, SEO, and UX/UI design strategies." />
          <meta name="twitter:image" content="https://www.blucomtechnologies.com/preview.jpg" />

          {/* Structured Data (Schema.org) */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "blucomtechnologies",
                "url": "https://www.blucomtechnologies.com",
                "logo": "https://www.blucomtechnologies.com/logo.png",
                "sameAs": [
                  "https://www.facebook.com/blucomtechnologies",
                  "https://www.linkedin.com/company/blucomtechnologies",
                  "https://twitter.com/blucomtech"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1234567890",
                  "contactType": "customer service",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
                }
              }
            `}
          </script>
        </Helmet>

        <div className="flex mt-[20px]">
          <div className="flex flex-col w-[40%] mt-[200px] ml-[50px] leading-none">
            <p className="text-[30px] text-[#727277] -mb-[12px]">It starts from</p>
              <br />
              <p className="text-[70px] text-[#10b981] underline decoration-8 decoration-[#86efac]">Simple Idea</p>
              <br />
            <p className="text-[30px] text-[#727277]">to next unicorn</p>
            <div className="mt-24">
              <p className="text-[#727277]">We create valuable brands for your customers rather than just a simple visual. We exist to put all our effort into not only creating beautiful visuals but also strategic experiences.</p>
            </div>
          </div>
          <img
            loading="lazy"
            src="/landing/hero.png"
            alt="Brand Strategy & Digital Solutions"
            className="w-[60%] aspect-square"
          />
        </div>

        <div className="flex justify-center text-white pt-[100px] pb-[60px] bg-[linear-gradient(92.76deg,_#10b981_20.14%,_#1da075_87.31%)]">
          <div className="sm:w-[70%] lg:w-[70%] lg:p-4 p-2 text-left flex flex-col">
            <p className="-mb-[16px]">Let&apos;s Build Your Brand</p>
            <p className="text-[60px] underline underline-offset-[15px] decoration-2">
              Beyond Visuals
            </p>
            <p className="w-full">
              At Blucom, we create valuable brands for your customers rather than just a simple visual. We exist to put all our effort into not only creating beautiful visuals but strategic design driven by cultural aesthetics to put brands into more known and culturally connected spaces. Let us know what your next idea is!
            </p>

            {/* Dropdown Section */}
            <p className="text-[40px] font-bold mt-5">I want to...</p>
            <div className="bg-white flex flex-row justify-between items-center border border-[#9A9A9A] mt-2 cursor-pointer" onClick={toggleDropDown}>
              <p className="p-3 text-[#1E2832]">
                Launch a new product or service
              </p>
              <img
                src="./icons/dropDown.png"
                alt="Dropdown Icon"
                className="w-5 h-5 mr-3 mb-2"
              />
            </div>

            {/* Dropdown Content */}
            <div className={`bg-[#F4F4F4] text-[#1E2832] flex-col justify-center items-start py-6 px-10 border border-[#9A9A9A] border-t-0 ${dropDownOpen ? "flex opacity-100" : "hidden opacity-0"} transition-all duration-300`}>
              <p>Identify Concept</p>
              <p>UI UX Design</p>
              <p>Brand Positioning</p>
              <p>Business Plan</p>
              <p>Market Research</p>
              <p>Digital Marketing</p>
            </div>

            {/* Call-to-Action Button */}
            <div className="bg-white text-[#5F5F5F] font-bold px-2 py-1 w-[150px] text-center mt-10">
              Want to Talk?
            </div>
          </div>
        </div>


        <div className="flex text-[#727277] leading-none">
          <img
            src="/landing/tucson.png"
            alt="tucson"
            className="w-1/2 aspect-auto"
          />
          <div className="flex flex-col justify-center m-20">
            <p className="text-[24px]">Hyundai Pakistan</p>
            <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
              TUSCON 2020
            </p>
            <div className="flex text-[18px] mt-5 gap-3">
              <p>#Activation</p>
              <p>#Discovery</p>
              <p>#Design</p>
            </div>
            <p className="text-[18px] mt-10 leading-normal">
              Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new revolution in the mini SUV Category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.
            </p>
          </div>
        </div>
        <div className="flex text-[#727277] leading-none">
          <div className="flex flex-col justify-center items-end text-end m-20">
            <p className="text-[24px]">Codility Hub Technologies</p>
            <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
              Interaction Design
            </p>
            <div className="flex text-[18px] mt-5 gap-3">
              <p>#identity</p>
              <p>#interaction</p>
              <p>#website</p>
            </div>
            <p className="text-[18px] mt-10 leading-normal">
              Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development with fast turnaround. We were asked to bring this idea to life through identity and interaction.
            </p>
          </div>
          <img
            src="/landing/toyota.png"
            alt="toyota"
            className="w-1/2 aspect-auto"
          />
        </div>
        <div className="flex text-[#727277] leading-none">
          <img
            src="/landing/interactive_design.png"
            alt="tucson"
            className="w-1/2 aspect-auto"
          />
          <div className="flex flex-col justify-center m-20">
            <p className="text-[24px]">Codility hub technologies</p>
            <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
              Interaction Design
            </p>
            <div className="flex text-[18px] mt-5 gap-3">
              <p>#identity</p>
              <p>#interaction</p>
              <p>#website-ui</p>
              <p>#interface</p>
            </div>
            <p className="text-[18px] mt-10 leading-normal">
              Codility hub came to us just with the name. but an amazing proposition, well-defined brand, in Tech Sector, focused on core Development, with an idea of Fast turnaround. we were asked to bring this idea to life through identity. and interaction
            </p>
          </div>
        </div>
        <div className="flex items-start px-[30px] py-[140px] justify-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-col leading-none mb-[50px]">
              <p className="text-[24px] text-[#727277]">This is how we make it</p>
              <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
                Possible
              </p>
              <p className="text-[18px] text-[#727277] mt-[14px]">
                Discovery/Strategy/Interaction
              </p>
            </div>
            <div className="flex flex-wrap gap-10 text-[18px] text-[#727277]">
              <div className="flex flex-col gap-10">
                <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4] text-[20px]">
                  Discovery
                </p>
                {Discovery.map((items, index) => (
                  <p
                    key={index}
                    className="underline underline-offset-[10px] decoration-2 decoration-[#C4C4C4]"
                  >
                    {items}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4] text-[20px]">
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
                <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4] text-[20px]">
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
                <p className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4] text-[20px]">
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
            <button className="bg-[#a8a8a8] text-white underline-offset-4 decoration-white/50 px-8 py-2 font-bold mt-10 self-center">
              Want to talk?
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col py-20 px-10 md:px-0 text-[#727277]">
            <div className="flex flex-col leading-none mb-[50px]">
              <p className="text-[24px] text-[#727277]">Get used to industry</p>
              <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
                Insights
              </p>
              <p className="text-[18px] text-[#727277] mt-[14px]">
                As a guiding light for the brands
              </p>
            </div>
            <div className="flex justify-center max-w-[1200px] gap-[20px]">
              <div className="flex flex-col gap-5 justify-start items-start w-1/2">
                <p className="underline decoration-[#1E2832]/30 decoration-2">INSIGHTS</p>
                <img src="/landing/insight1.jpg" alt="insight" className="w-full" />
                <p className="text-[30px]">Why attention economy is becoming new ecomony, and how brands can take leverage</p>
                <p className="text-[18px]">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                  ic theory to solve various information management problems</p>
                <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">Read Report</button>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start  w-1/2">
                <p className="underline decoration-[#1E2832]/30 decoration-2">INSIGHTS</p>
                <img src="/landing/insight2.jpg" alt="insight" className="w-full" />
                <p className="text-[30px]">The art of visual communication, how visual grammer can be utilized by the brands</p>
                <p className="text-[18px]">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                  ic theory to solve various information management problems</p>
                <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">Read Report</button>
              </div>
            </div>
            <Link to={`/blogsingle`} className="bg-[#a8a8a8] text-white underline-offset-4 decoration-white/50 px-8 py-2 font-bold mt-10 self-center">
              Read More
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col py-20 px-10 md:px-0 text-[#727277]">
            <div className="flex flex-col leading-none mb-[50px]">
              <p className="text-[24px] text-[#727277]">Industry news and what&apos;s</p>
              <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
                Happening
              </p>
              <p className="text-[18px] text-[#727277] mt-[14px]">
                As a guiding light for the brands
              </p>
            </div>
              <div className="flex justify-center max-w-[1200px] gap-[20px]">
                <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
                <img src="./icons/forbes_logo.png" alt="forbes logo" className="w-[80px] h-[30px]" />
                <img src="./landing/news1.png" alt="insight" className="w-[600px] h-[350px]" />
                <p className="text-[30px]">Rideshare Advertising To A New Outdoor World</p>
                <p className="text-[18px]">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                  ic theory to solve various information management problems</p>
                <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">Read Report</button>
              </div>
              <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
                <img src="./icons/adobe_logo_1.png" alt="adobe logo" className="w-[70px] h-[30px]" />
                <img src="./landing/news2.png" alt="insight" className="w-[600px] h-[350px]" />
                <p className="text-[30px]">12 Must-Attend Trade Conferences For Agency Professionals</p>
                <p className="text-[18px]">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                  ic theory to solve various information management problems</p>
                <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">Read Report</button>
              </div>
            </div>
            <Link to={`/blogsingle`} className="bg-[#a8a8a8] text-white underline-offset-4 decoration-white/50 px-8 py-2 font-bold mt-10 self-center">
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col m-10 leading-none">
            <p className="text-[24px]">Have and idea? lets talk!</p>
            <p className="text-[60px] text-[#10b981] underline decoration-[#1E2832] decoration-4">
              What you&apos;re Thinking?
            </p>
          </div>
          <form action="" className="flex flex-col gap-6 w-full max-w-[1300px] px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
              <input type="text" className="landingInput pt-6" placeholder="First Name*" />
              <input type="text" className="landingInput" placeholder="Last Name*" />
              <input type="email" className="landingInput pt-6" placeholder="Email*" />
              <input type="text" className="landingInput" placeholder="Company Name*" />
            </div>
            <input type="text" className="landingInput" placeholder="YourTitle" />
            <textarea name="" id="" cols="5" className="landingInput" placeholder="What you want to say?" />
            <button type="submit" className="bg-[#a8a8a8] text-white underline-offset-4 decoration-white/50 px-8 py-2 font-bold mt-10 self-center">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Landing;
