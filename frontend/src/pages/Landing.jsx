import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


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

{/* Seo section end) */ }


const Landing = () => {

  const [dropDownOpen, setDropDownOpen] = useState(true)

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
    console.log(dropDownOpen)
  }

  return (
    <section>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">


          {/* Text Section */}
          <div className="max-w-[525px] min-w-[320px] text-center md:text-left">
            <p className="text-2xl text-gray-500">It starts from</p>
            <p className="text-6xl text-emerald-500 underline decoration-8 decoration-green-300">
              Simple Idea
            </p>
            <p className="text-2xl text-gray-500">to next unicorn</p>

            {/* Description Section */}
            <div className="mt-10">
              <a href="/" className="text-lg text-gray-500 inline-block">
                We create valuable brands for your customers rather than just a simple visual.
                We exist to put all our effort into not only creating beautiful visuals but also strategic experiences.
              </a>
            </div>
          </div>
          {/* Image Section */}
          <img
            loading="lazy"
            src="./src/assets/heroimage.png"
            alt="Brand Strategy & Digital Solutions"
            className="w-[250px] md:w-[350px] lg:w-[450px] xl:w-[600px] h-auto"
          />
        </div>

      </section>

      <div>


        {/*form start share*/}
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

              {/* Dropdown Section */}
              <p className="text-lg font-normal mt-12 text-left"></p>

              {/* Dropdown Button - Full Width */}
              <div
                className="bg-white flex flex-row justify-between items-center mt-2 cursor-pointer p-3 w-full max-w-screen-lg"
                onClick={toggleDropDown}
              >
                <p className="text-gray-900">I want to Launch a new product or service</p>
                <img src="./icons/dropDown.png" alt="Dropdown Icon" className="w-5 h-5 mr-3" />
              </div>

              {/* Dropdown Content - Full Width */}
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
              {/* Call-to-Action Button */}
              <div className="w-full flex justify-start">
                <div className="bg-white text-gray-600 font-bold px-4 py-2 w-40 text-center mt-10 border border-gray-400 cursor-pointer">
                  Lets Get Started
                </div>
              </div>

            </div>
          </div>
          </section>


{/* Call-to-Action Button */}

<section className="Portfolio w-full">
  {/* Hyundai Pakistan */}
  <div className="flex flex-col md:flex-row w-full items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="./landing/tucson.png"
        alt="tucson"
        className="w-full h-auto object-cover"
      />
    </div>
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:p-12">
      <p className="text-2xl text-gray-500">Hyundai Pakistan</p>
      <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
        TUSCON 2020
      </p>
      <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
        <p>#Activation</p>
        <p>#Discovery</p>
        <p>#Design</p>
      </div>
      <p className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
        Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new
        revolution in the mini SUV Category. Our part was to enable the user to
        discover the new product, activate the product, and create a digital
        strategy with design collaterals.
      </p>
    </div>
  </div>

  {/* Codility Hub */}
  <div className="flex flex-col-reverse md:flex-row w-full items-center">
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end p-6 md:p-12">
      <p className="text-2xl text-gray-500">Codility Hub Technologies</p>
      <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
        Interaction Design
      </p>
      <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
        <p>#Identity</p>
        <p>#Interaction</p>
        <p>#Website</p>
      </div>
      <p className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
        Codility Hub came to us with just a name but an amazing proposition. A
        well-defined brand in the tech sector focused on core development with
        fast turnaround. We were asked to bring this idea to life through identity
        and interaction.
      </p>
    </div>
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="./landing/toyota.png"
        alt="toyota"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Interactive Design */}
  <div className="flex flex-col md:flex-row w-full items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="./landing/interactive_design.png"
        alt="interactive_design"
        className="w-full h-auto object-cover"
      />
    </div>
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:p-12">
      <p className="text-2xl text-gray-500">Codility Hub Technologies</p>
      <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
        Interaction Design
      </p>
      <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
        <p>#Identity</p>
        <p>#Interaction</p>
        <p>#Interface</p>
      </div>
      <p className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
        Codility Hub came to us with just a name but an amazing proposition. A
        well-defined brand in the tech sector focused on core development with
        fast turnaround. We were asked to bring this idea to life through identity
        and interaction.
      </p>
    </div>
  </div>
</section>

<div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
  {/* Title Section */}
  <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
    <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">This is</p>
    <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
      How We make Possible
    </p>
    <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Discovery / Strategy / Interaction</p>
  </div>

  {/* Content Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#727277] mx-auto w-full max-w-6xl">
    {/* Discovery Section */}
    <div className="flex flex-col gap-6">
      <p className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
        Discovery
      </p>
      {Discovery.map((item, index) => (
        <p key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
          {item}
        </p>
      ))}
    </div>

    {/* Strategy Section */}
    <div className="flex flex-col gap-6">
      <p className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
        Strategy
      </p>
      {Strategy.map((item, index) => (
        <p key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
          {item}
        </p>
      ))}
    </div>

    {/* Digital Section */}
    <div className="flex flex-col gap-6">
      <p className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
        Digital
      </p>
      {Digital.map((item, index) => (
        <p key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
          {item}
        </p>
      ))}
    </div>

    {/* Interaction Section */}
    <div className="flex flex-col gap-6">
      <p className="font-bold text-black underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
        Interaction
      </p>
      {Interaction.map((item, index) => (
        <p key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
          {item}
        </p>
      ))}
    </div>
  </div>

    {/* Call-to-Action Button */}
    <div className="w-full flex justify-center">
                <div className="text-white font-bold px-4 py-2 w-40 text-center mt-10 border bg-gray-400 cursor-pointer">
                  Want to Talk?
                </div>
              </div>
</div>

        

        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Get used to industry Insights
            </p>
            <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
              As a guiding light for the brands
            </p>
          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</p>
              <img src="./landing/insight1.jpg" alt="insight" className="w-[600px] h-[350px]" />
              <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">Why attention economy is becoming new ecomony, and how brands can take leverage</p>
              <p className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</p>
                <Link to={`/blogsingle`} className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border  cursor-pointer">
            Read More
          </Link>
            </div>
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</p>
              <img src="./landing/insight2.jpg" alt="insight" className="w-[600px] h-[350px]" />
              <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">The art of visual communication, how visual grammer can be utilized by the brands</p>
              <p className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</p>
                <Link to={`/blogsingle`} className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border  cursor-pointer">
            Read More
          </Link>
            </div>
          </div>
          {/* Call-to-Action Button */}
          
        </div>
        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <p className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Industry news and what's </p>
            <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              See What's Happening
            </p>
      
          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/forbes_logo.png" alt="forbes logo" className="w-[80px] h-[30px]" />
              <img src="./landing/news1.png" alt="insight" className="w-[600px] h-[350px]" />
              <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">Rideshare Advertising To A New Outdoor World</p>
              <p className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</p>
                <Link to={`/blogsingle`} className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border  cursor-pointer">
            Read News
          </Link>
            </div>
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/adobe_logo_1.png" alt="adobe logo" className="w-[70px] h-[30px]" />
              <img src="./landing/news2.png" alt="insight" className="w-[600px] h-[350px]" />
              <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">12 Must-Attend Trade Conferences For Agency Professionals</p>
              <p className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</p>
                <Link to={`/blogsingle`} className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border  cursor-pointer">
            Read News
          </Link>
            </div>
          </div>
         
        </div>
        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <p className="text-2xl text-gray-500 flex flex-wrap gap-2 m-5">Have and idea? lets talk!</p>
            <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              What you're Thinking?
            </p>
          </div>
          <form action="" className="text-2xl text-gray-500 flex flex-col gap-10 w-full max-w-[1300px] px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
              <input type="text" className="landingInput" placeholder="First Name*" />
              <input type="text" className="landingInput" placeholder="Last Name*" />
              <input type="email" className="landingInput" placeholder="Email*" />
              <input type="text" className="landingInput" placeholder="Company Name*" />
            </div>
            <input type="text" className="landingInput" placeholder="YourTitle" />
            <textarea name="" id="" cols="5" className="landingInput" placeholder="What you want to say?" />
            <div className="w-full flex justify-start">
          <Link to={`/blogsingle`} className=" justify-start bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border  cursor-pointer">
            Contact
          </Link>
          </div>
          </form>
          
          
        </div>
      </div>
    </section>
  );
};

export default Landing;
