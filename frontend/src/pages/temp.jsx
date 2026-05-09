import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Services from "../Components/landing-services.jsx";
import Hero from "../Components/Hero.jsx";
import Button from "../Components/Button";
import Portfoliothumb from "./portfolio/portfolio-hyundai.jsx"
import Portfoliothumb2 from "../pages/portfolio/portfolio-toyotamotors.jsx"
import Portfoliothumb3 from "../pages/portfolio/portfolio-codilityhub.jsx"
import Contact from "../pages/Contactform.jsx";

// DevGridBody.jsx
import React from "react";

const DevGridBody = ({ children }) => {
  // 12 columns for lg, 8 columns for md
  const totalColumns = 12;

  return (
    <div className="relative min-h-screen bg-gray-100">

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 pointer-events-none z-0">
        {[...Array(totalColumns)].map((_, i) => (
          <div
            key={i}
            className="bg-white/50 border border-dashed border-gray-300"
          />
        ))}
      </div>


      {/* Actual Content goes here */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default DevGridBody;







<Helmet>
  <title>Brand Strategy & Digital Marketing Agency | Blucom Technologies</title>
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
  <meta property="og:title" content="blucomtechnologies - Creative Agency in Islamabad for Brand Strategy & Digital Marketing" />
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
<section className="bg-[#F8FAFC] min-h-screen">
    <div className="hero ">
      <Hero />
    </div>
    
    <div>

        {/*form start share*/}
        <div className="form">
          <div className="relative w-full min-h-screen flex justify-center items-center bg-emerald-500 text-white p-4 xl:p-10">
            <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 p-4 md:p-6 flex flex-col items-start">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold underline decoration-green-300 underline-offset-8 mb-4">
                Let’s Bring Your Idea to Life
              </h1>

              {/* Description */}
              <p className="paragraph">
                Tell us a little about your project so we can understand your goals and recommend
                the best creative and digital solutions for your business.
              </p>

              {/* Dropdown Section */}
              <div className="w-full">
                {/* Dropdown Button */}
                <div
                  className="bg-white text-gray-900 flex justify-between items-center p-4 shadow-md cursor-pointer w-full transition hover:bg-gray-100"
                  onClick={toggleDropDown}
                >
                  <p className="truncate">I want to Launch a new product or service</p>
                  <img src="./icons/dropDown.png" alt="Dropdown Icon" className="w-5 h-5 ml-3" />
                </div>

                {/* Dropdown Content with Gradient */}
                <div
                  className={`flex flex-col gap-3 mt-2 p-4 w-full transition-all duration-300 ease-in-out 
          ${dropDownOpen ? "flex" : "hidden"} 
          bg-gradient-to-b from-emerald-500 to-emerald-300 bg-opacity-90 text-white shadow-lg`}
                >
                  <span className="cursor-pointer hover:text-gray-100">Identity Concept</span>
                  <span className="cursor-pointer hover:text-gray-100">UI UX Design</span>
                  <span className="cursor-pointer hover:text-gray-100">Brand Positioning</span>
                  <span className="cursor-pointer hover:text-gray-100">Business Plan</span>
                  <span className="cursor-pointer hover:text-gray-100">Market Research</span>
                  <span className="cursor-pointer hover:text-gray-100">Digital Marketing</span>
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="w-full flex justify-start mt-10">
                <Link to={`/getstarted`}>
                  <Button variant="white">Let's Get Started</Button>
                </Link>
              </div>

            </div>
          </div>
    </div>



        {/* Call-to-Action Button */}

        <section className="Portfoio">
          {/* Hyundai Pakistan */}
          <div>
            <Portfoliothumb />
          </div>
          <div>
            <Portfoliothumb2 />
          </div>

          <div>
            <Portfoliothumb3 />
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
          <Services />
          {/* Services Section */}     
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Filled Buttons */}
          <Button variant="black">Want to Talk?</Button>
        </div>



        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              From Concept to Impact
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
              Our creative process ensures every project delivers real results.
            </span>
          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">


            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</span>
              <img src="./landing/insight1.jpg" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">Why attention economy is becoming new ecomony, and how brands can take leverage</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity
                and applies econom ic theory to solve various information management problems</span>
              <Link to={`Blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage`}>
                <Button variant="gray">Read More</Button>
              </Link>

            </div>

            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</span>
              <img src="./landing/insight2.jpg" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">The art of visual communication, how visual grammer can be utilized by the brands</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity
                and applies economic theory to solve various information management problems</span>

              <Link to={`Blog/The-art-of-visual-communication`}>
                <Button variant="gray">Read More</Button>
              </Link>
            </div>
          </div>
          {/* Call-to-Action Button */}

        </div>
        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">The digital landscape is constantly evolving. </span>
            <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Insights for Modern Brands
            </span>

          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/forbes_logo.png" alt="forbes logo" className="w-auto h-[40px]" />
              <img src="./landing/news1.png" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">Rideshare Advertising To A New Outdoor World</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              <Link to={`/Ideas/Rideshare-Advertising-To-A-New-Outdoor-World`}>
                <Button variant="gray">Read More</Button>
              </Link>

            </div>
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/adobe_logo_1.png" alt="adobe logo" className="w-auto h-[40px]" />
              <img src="./landing/news2.png" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">12 Must-Attend Trade Conferences For Agency Professionals</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              <Link to={`/Ideas/Must-Attend-Advertising-Confrence`} >
                <Button variant="gray">Read More</Button>
              </Link>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center py-20 px-10 md:px-0 flex flex-wrap gap-2 mt-5">
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </section>



