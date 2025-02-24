import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div>
      {/* SEO Metadata */}
      <Helmet>
        <title>Blucom Technologies | Portfolio - Digital Creatives & Branding</title>
        <meta
          name="description"
          content="Explore Blucom Technologies' portfolio featuring digital creatives, brand strategy, impact analysis, and corporate branding solutions."
        />
        <meta
          name="keywords"
          content="digital creatives, branding, impact analysis, web design, digital presence, marketing agency, corporate identity"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blucom Technologies | Portfolio - Digital Creatives & Branding" />
        <meta property="og:description" content="Explore our work in branding, impact analysis, and digital presence." />
        <meta property="og:image" content="https://blucomtechnologies.com/portfolio/cover.jpg" />
        <meta property="og:url" content="https://blucomblucomtechnologies.com/portfolio" />
        <link rel="canonical" href="https://blucomblucomtechnologies.com/portfolio" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/news/news_bg.png"
          alt="Background banner featuring digital marketing projects"
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <h2 className="text-[40px] md:text-[60px]">Hyundai-Pakistan</h2>
            <p className="text-[20px] md:text-[40px] text-[#9A9A9A]">
              Digital Creatives | Impact Analysis | Digital Presence
            </p>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <h2 className="text-lg md:text-2xl lg:text-4xl">Branding Excellence</h2>
            <p className="text-[16px] md:text-[24px] text-[#9A9A9A] mt-2">
              Our expertise in strategic branding helps businesses establish a strong presence and effectively connect with their target audience.
            </p>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 text-[#727277] my-40 mx-5 max-w-[1200px] md:mx-auto">
        <div className="text-[24px] mt-20">
          <h2 className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">
            Hyundai-Pakistan Case Study
          </h2>
        </div>
        <div>
          <p className="text-[25px]">Branding & Digital Presence</p>
          <h3 className="text-[#1E2832] text-[40px] leading-tight">
            Digital Creatives, <br /> Impact Analysis, <br /> Digital Presence.
          </h3>
          <p className="text-[24px] mt-10">
            With a data-driven approach, we crafted a branding strategy that strengthened Hyundai-Pakistan’s market positioning and improved audience engagement.
          </p>
        </div>
      </div>

      {/* Portfolio Images */}
      <div className="flex flex-col md:flex-row justify-stretch items-center w-full">
        <img src="./portfolio/hyundai.png" alt="Hyundai branding campaign" className="w-full h-auto min-w-[200px]" />
        <img src="./portfolio/tucson.png" alt="Tucson digital campaign" className="w-full h-auto min-w-[200px]" />
      </div>

      {/* Digital Collaterals */}
      <div className="flex flex-col justify-center items-center gap-10 text-[#727277] my-20">
        <div className="text-[24px]">
          <h2 className="text-[#00AF80] text-[40px] underline underline-offset-[15px] decoration-[#1E2832] decoration-4 -mt-5">
            Digital Collaterals
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-3">
            <img src="./portfolio/c1.png" alt="Digital branding collateral 1" />
            <img src="./portfolio/c2.png" alt="Digital branding collateral 2" />
            <img src="./portfolio/04.png" alt="Digital branding collateral 3" />
            <img src="./portfolio/07.png" alt="Digital branding collateral 4" />
          </div>
          <p className="text-[24px] mt-10 text-center max-w-[800px]">
            Our digital collaterals are designed to create an immersive brand experience, reinforcing brand identity through compelling visuals and interactive elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
