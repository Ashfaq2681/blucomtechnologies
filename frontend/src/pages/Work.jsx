import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import landingImg from "/landing/heroimage.svg";

<Helmet>
  <title>Brand Strategy & Digital Marketing Agency | Blucom Technologies</title>
  <meta
    name="description"
    content="blucomtechnologies specializes in brand positioning, digital marketing, UX/UI design, and SEO-driven strategies for businesses."/>
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
{/* Hero Section */ }


<div className="relative w-flex bg-gradient-to-r from-[#00AE80] min-h-screen flex items-center justify-center p-6">
  <img
    src="/news/news_bg.png"
    alt="image.."
    className="w-full h-lvh object-cover"
  />
  <div className="absolute inset-0 bg-[#00AE80] opacity-80"></div>
  <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
    <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
      <p className="text-[20px] md:text-[40px] text-[#9A9A9A]">Codility Hub Sols</p>
      <p className="text-[20px] md:text-[40px] text-[#9A9A9A]">MZ-Cepra</p>
      <p className="text-[20px] md:text-[40px] text-[#9A9A9A]">Ace Intl.</p>
      <h1 className="text-[40px] md:text-[60px]">Hyundai-Pakistan</h1>
      <p className="text-[20px] md:text-[40px] text-[#9A9A9A]">Ace Intl.</p>
    </div>
    <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
      <h1 className=" text-lg md:text-2xl lg:text-4xl">Digital Creatives,</h1>
      <h1 className=" text-lg md:text-2xl lg:text-4xl">Impact analysis,</h1>
      <h1 className=" text-lg md:text-2xl lg:text-4xl">Digital Presence,</h1>
      <p className="text-[16px] md:text-[24px] text-[#9A9A9A] mt-2">
        At Blucom Technologies, we don’t just design; we craft narratives that resonate,
        engage, and convert. As a leading Branding Agency Islamabad, our approach combines
        data-driven insights with creative mastery to transform brand identities into tangible
        business results. Each project is a journey from concept to execution, designed to amplify
        digital presence, drive performance, and achieve measurable growth.
      </p>
    </div>
  </div>
</div>

{/* The rest of your Portfolio JSX remains unchanged */ }
{/* ... your showcase, images, collaterals, etc. ... */ }

const Work = () => {
  return (
    <div>
      <div className="relative w-full mt-5">
        <img
          src="/news/news_bg.png"
          alt="image.."
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-[#00AE80] opacity-80"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <p className="text-[20px] md:text-[40px] text-[#00000] opacity-80">
              Codility Hub Sols
            </p>
            <p className="text-[20px] md:text-[40px] text-[#00000] opacity-80">
              MZ-Cepra
            </p>
            <p className="text-[20px] md:text-[40px] text-[#00000] opacity-80">
              Ace Intl.
            </p>
            <h1 className="text-[40px] md:text-[60px]">Hyundai-Pakistan</h1>
            <p className="text-[20px] md:text-[40px] text-[#00000]">
              Ace Intl.
            </p>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Digital Creatives,
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Impact analysis,
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-4xl">
              Digital Presence,
            </h1>
            <p className="text-[16px] md:text-[24px] text-[#00000] mt-2">
              For Hyundai Pakistan, our mission was to elevate their digital footprint and reimagine their engagement
              strategy across multiple platforms. By integrating a robust online marketing strategy with visually compelling
              content, we ensured the brand’s messaging resonated with both existing customers and potential buyers.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-start gap-20 text-[#727277] my-40 mx-5 max-w-[1200px] md:mx-auto">
        <div className="text-[24px] min-w-[400px] mt-20">
          <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
            <div className="text-[24px]">
              <p>Creative showcase</p>
              <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Hyundai- Pakistan</h1>
              <p>Digital Collaterals & Creative Identity</p>
            </div>
          </div>
        </div>
        <div >
          <p className="text-[25px]">Hyundai Pakistan</p>
          <p className="text-[#1E2832] text-[40px] leading-tight">Digital Creatives,<br /> Impact analysis,<br /> Digital Pressence.</p>
          <p className="text-[24px] mt-10">
            <p className="text-[#1E2832] text-[40px] leading-tight">Our Approach</p>
            <li>Revamped website and social media layouts for a cohesive brand identity.</li>
            <li>Implemented high-quality digital creatives to showcase vehicles’ features.</li>
            <li>Conducted in-depth audience segmentation for targeted messaging.</li>
            <p className="text-[#1E2832] text-[40px] leading-tight">Results</p>
            <li>Enhanced engagement rates across digital channels by 45%.</li>
            <li>Strengthened Hyundai’s online visibility, contributing to higher lead generation.</li>
            <li>Boosted brand recognition through a combination of performance marketing and creative storytelling.</li>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-stretch items-center w-full">
        <img src="./portfolio/hyundai.png" alt="hyundai" className="w-full h-auto min-w-[200px]" />
        <img src="./portfolio/tucson.png" alt="tucson" className="w-full h-auto min-w-[200px]" />
      </div>
      <div className="flex flex-col justify-center items-center mt-72 lg:mt-96">
        <img src="./portfolio/tucson_name.png" alt="" className="w-full h-auto min-w-[200px] max-w-[1200px] -mb-2 lg:-mb-5" />
        <img src="./portfolio/hyundai_tucson.png" alt="" className="w-full h-auto min-w-[200px] max-w-[1000px] -mb-60" />
      </div>
      <div className="bg-[#00AE80]">
        <div className="flex flex-col md:flex-row justify-center items-start gap-20 text-white bg-[#00AE80] pt-72 lg:pt-96 pb-40 max-w-[1200px] mx-5 md:mx-auto">
          <div className="text-[24px] min-w-[400px]">
            <p>Creative showcase</p>
            <p className="text-[40px] underline underline-offset-[15px] decoration-white decoration-4 -mt-3">The Challenge</p>
            <p className="mt-5">Digital Pressence, Campaign Management</p>
          </div>
          <div >
            <p className="text-[24px]">Hyundai required a comprehensive campaign that not only highlighted their vehicle lineup
              but also strengthened brand recall in a competitive market. The challenge was to create a digital marketing growth
              strategy that seamlessly merged creativity with measurable performance.</p>
            <p className="text-[24px] mt-10">At Blucom Technologies, we don’t just design; we craft narratives that resonate, engage,
              and convert. As a leading Branding Agency Islamabad, our approach combines data-driven insights with creative mastery
              to transform brand identities into tangible business results. Each project is a journey from concept to execution, designed
              to amplify digital presence, drive performance, and achieve measurable growth.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row md:ml-20 lg:ml-40 xl:ml-60">
        <div className="flex flex-col justify-center items-start gap-20 text-[#727277] pt-72 lg:pt-24 pb-40 max-w-[1200px] mx-5 md:mx-auto">
          <div className="text-[24px] min-w-[400px]">
            <p>Creative showcase</p>
            <p className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">Why Blucom Technologies?</p>
            <p className="mt-5">Digital Pressence 2.0</p>
          </div>
          <div className="max-w-[700px]">
            <p className="text-[24px]">At Blucom Technologies, our portfolio reflects more than creative expertise—it
              showcases results. We combine strategic  planning with innovative execution, ensuring every campaign contributes
              to business growth.</p>
            <p className="text-[24px] mt-10">
              <li>Performance Marketing</li>
              <p>We deliver measurable outcomes through data-driven campaigns.</p>
              <li>Online Marketing Strategy</li>
              <p>Our strategies are designed for both visibility and conversion.</p>
              <li>Digital Marketing Agency Expertise</li>
              <p>We integrate multi-channel marketing with creative storytelling
                to maximize ROI</p>
            </p>
          </div>
        </div>
        <img src="./portfolio/ht_sidepose.png" alt="ht" className="w-auto h-auto max-w-full max-h-[500px] object contain" />
      </div>
      <div className="flex flex-col justify-center items-center gap-20 text-[#727277] my-40">
        <div className="text-[24px] min-w-[400px]">
          <p>Creative showcase</p>
          <p className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">Digital Collaterals</p>
          <p className="mt-5">Digital Pressence 2.0</p>
        </div>
        <div className="flex flex-col items-center">

          <div className="grid grid-cols-2 md:grid-cols-3">
            <img src="./portfolio/c1.png" alt="" />
            <img src="./portfolio/c2.png" alt="" />
            <img src="./portfolio/c2.png" alt="" />
            <img src="./portfolio/04.png" alt="" />
            <img src="./portfolio/07.png" alt="" />
            <img src="./portfolio/07.png" alt="" />
          </div>

          <div className="flex flex-row items-center">
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
              <img src="./portfolio/22copy.png" alt="" />
              <img src="./portfolio/8copy.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <img src="./portfolio/01.png" alt="" className="w-full md:w-auto" />
            <img src="./portfolio/02.png" alt="" className="w-full md:w-auto" />
            <img src="./portfolio/03.png" alt="" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
