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
      <div className="bg-white py-12 px-6 md:px-20">
  <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 max-w-7xl mx-auto">
    
    {/* Right Section - Image (Optional) */}
    {/* Uncomment this if needed */}
     
    <img
  //loading="lazy"
  src="/assets/heroimage.png" 
  alt="Brand Strategy & Digital Solutions"
  className="w-[200px]  h-[200px] object-contain mx-auto"
/>

    

    {/* Left Section - Text Content */}
    <div className="flex flex-col justify-center text-center md:text-left">
      <h2 className="text-gray-600 text-2xl mb-2">
        It starts from
      </h2>

      <h1 className="text-5xl md:text-6xl font-bold text-emerald-500 underline decoration-green-300 decoration-8 leading-tight">
        Simple Idea
      </h1>

      <h2 className="text-gray-600 text-2xl mt-2">
        to next unicorn
      </h2>

      <p className="mt-10 text-lg text-gray-700 max-w-xl">
        We create valuable brands for your customers rather than just simple visuals.
        At Blucom, we focus not only on stunning design, but on strategic experiences
        that connect your brand to culture and business value.
      </p>
    </div>
  </div>
</div>

      <div>


        {/*form start share*/}
        <section className="form">
          <div className="relative w-full min-h-screen flex justify-center items-center bg-emerald-500 text-white px-4 py-8 xl:p-10">
  <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] text-left flex flex-col items-center space-y-6">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl xl:text-6xl underline underline-offset-8 decoration-green-300 w-full text-left">
      Let&apos;s build your Brand Beyond Visuals
    </h1>

    {/* Paragraph */}
    <p className="text-lg sm:text-xl w-full text-left">
      At Blucom, we create valuable brands for your customers rather than just a simple visual.
      We exist to put all our effort into not only creating beautiful visuals but strategic
      design driven by cultural aesthetics to put brands into more known and culturally
      connected spaces. Let us know what your next idea is!
    </p>

    {/* Dropdown Button */}
    <div className="w-full max-w-2xl mx-auto">
  {/* Dropdown Header */}
  <div
    onClick={toggleDropDown}
    className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
  >
    <p className="text-lg font-semibold">
      I want to launch a new product or service
    </p>
    <img
      src="./icons/dropDown.png"
      alt="Toggle Dropdown"
      className={`w-5 h-5 text-lg transform transition-transform duration-300 ${dropDownOpen ? 'rotate-180' : ''}`}
    />
  </div>

  {/* Dropdown Content */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-in-out mt-2 rounded-lg shadow-inner bg-white ${
      dropDownOpen ? 'max-h-96 p-6 space-y-3' : 'max-h-0 p-0'
    }`}
  >
    <p className="text-gray-800 font-medium">Identify Concept</p>
    <p className="text-gray-800 font-medium">UI/UX Design</p>
    <p className="text-gray-800 font-medium">Brand Positioning</p>
    <p className="text-gray-800 font-medium">Business Plan</p>
    <p className="text-gray-800 font-medium">Market Research</p>
    <p className="text-gray-800 font-medium">Digital Marketing</p>
  </div>
</div>


    {/* Call-to-Action */}
    <div className="w-full flex justify-start">
      <button className="bg-white text-gray-700 font-semibold px-6 py-2 mt-8 border border-gray-300 rounded shadow hover:bg-gray-100 transition">
        Let&apos;s Get Started
      </button>
    </div>

  </div>
</div>

        </section>


        {/* Call-to-Action Button */}

        <section className="Portfolio w-full">
          {/* Hyundai Pakistan */}
         
    <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
  {/* Image Section with Padding */}
  <div className="md:w-1/2 pt-10 pl-10">
    <img
      src="/landing/tucson.png"
      alt="Hyundai Tucson"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12">
    <h3 className="text-xl text-gray-500 mb-2">Hyundai Pakistan</h3>
    <h2 className="text-5xl font-bold text-emerald-600 underline decoration-emerald-300 mb-6">
      TUCSON 2020
    </h2>

    <div className="flex flex-wrap gap-3 mb-6">
      {["#Activation", "#Discovery", "#Design"].map((tag) => (
        <span
          key={tag}
          className="bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-gray-600 text-lg leading-relaxed">
      The launch of Hyundai Tucson marked a bold move in the mini SUV segment. We crafted a strategy
      that helped users discover, experience, and engage with the new model through a blend of
      digital activation, storytelling, and modern design assets.
    </p>
  </div>
</div>



          {/* Codility Hub */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24 bg-emerald-50">
  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end px-6 md:px-12">
    <h3 className="text-xl text-gray-500 mb-2 text-center md:text-right">
      Codility Hub Technologies
    </h3>
    <h2 className="text-5xl font-bold text-emerald-600 underline decoration-emerald-300 mb-6 text-center md:text-right">
      Interaction Design
    </h2>

    <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-end">
      {["#Identity", "#Interaction", "#Website"].map((tag) => (
        <span
          key={tag}
          className="bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-gray-600 text-lg leading-relaxed text-center md:text-right">
      Codility Hub came to us with just a name but an amazing proposition.
      A well-defined brand in the tech sector focused on core development with
      fast turnaround. We were asked to bring this idea to life through identity
      and interaction.
    </p>
  </div>

  {/* Image Section with Padding */}
  <div className="w-full md:w-1/2  pr-10">
    <img
      src="./landing/toyota.png"
      alt="Toyota"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>
</div>


          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
  {/* Image Section with Padding */}
  <div className="w-full md:w-1/2 pl-10">
    <img
      src="./landing/interactive_design.png"
      alt="Interactive Design"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-12">
    <h3 className="text-xl text-gray-500 mb-2">Codility Hub Technologies</h3>
    <h2 className="text-5xl font-bold text-emerald-600 underline decoration-emerald-300 mb-6">
      Interaction Design
    </h2>

    <div className="flex flex-wrap gap-3 mb-6">
      {["#Identity", "#Interaction", "#Interface"].map((tag) => (
        <span
          key={tag}
          className="bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-gray-600 text-lg leading-relaxed">
      Codility Hub came to us with just a name but an amazing proposition.
      A well-defined brand in the tech sector focused on core development with
      fast turnaround. We were asked to bring this idea to life through identity
      and interaction.
    </p>
  </div>
</div>
</section>

{/* {Images section Ens here} */}


<div className="py-20 px-4 sm:px-10 lg:px-20 bg-emerald-50  ">
  {/* Header */}
  <div className="text-center mb-16">
    <p className="text-xl sm:text-2xl text-gray-500 mb-4">This is</p>
    <h2 className="text-4xl sm:text-6xl font-bold text-emerald-600 underline underline-offset-4 decoration-emerald-300">
      How We Make Possible
    </h2>
    <p className="text-lg sm:text-2xl text-gray-500 mt-4">
      Discovery / Strategy / Interaction
    </p>
  </div>

  {/* Content Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto text-base sm:text-lg text-gray-700">
    {[
      { title: "Discovery", items: Discovery },
      { title: "Strategy", items: Strategy },
      { title: "Digital", items: Digital },
      { title: "Interaction", items: Interaction },
    ].map((section, idx) => (
      <div key={idx} className="space-y-4">
        <h3 className="font-semibold text-black text-lg underline underline-offset-4 decoration-2 decoration-gray-300">
          {section.title}
        </h3>
        {section.items.map((item, i) => (
          <p
            key={i}
            className="underline underline-offset-4 decoration-2 decoration-gray-300"
          >
            {item}
          </p>
        ))}
      </div>
    ))}
  </div>

  {/* Call-to-Action */}
  <div className="mt-16 flex justify-center">
    <button className="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
>
      Want to Talk?
    </button>
  </div>
</div>




        <div className="bg-white py-16 px-6 md:py-24 md:px-10 lg:px-20">
  {/* Header Section */}
  <div className="text-center mb-16">
    
    <h2 className="text-4xl sm:text-6xl font-bold text-emerald-600 underline underline-offset-4 decoration-emerald-300">
      Industry Insights
    </h2>
    <p className="text-lg sm:text-2xl text-gray-500 mt-4">
      Guiding brands with data-driven perspectives
    </p>
  </div>
  
  {/* Insights Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
    {/* Insight Card 1 */}
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="./landing/insight1.jpg" 
          alt="Attention economy insight" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="inline-block text-sm font-semibold text-emerald-600 mb-2">
          MARKET TRENDS
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Why the Attention Economy is Becoming the New Economy
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          Attention economics is an approach to information management that treats human attention as a scarce commodity, applying economic theory to solve information challenges in the digital age.
        </p>
        <Link 
          to="/blogsingle" 
          className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>

    {/* Insight Card 2 */}
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="./landing/insight2.jpg" 
          alt="Visual communication insight" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="inline-block text-sm font-semibold text-emerald-600 mb-2">
          BRAND STRATEGY
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          The Art of Visual Communication in Brand Storytelling
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          How brands can leverage visual grammar to create compelling narratives that cut through the noise and establish meaningful connections with their audience.
        </p>
        <Link 
          to="/blogsingle" 
          className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center mt-20">
    <Link 
      to="/insights" 
      className="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
    >
      View All Insights
    </Link>
  </div>
</div>

{/* New Section */}
        <div className="bg-white py-16 px-6 md:py-20 lg:px-20 bg-emerald-50">
  {/* Header Section */}
  <div className="max-w-4xl mx-auto text-center mb-16">
    <p className="text-xl md:text-2xl text-gray-500 mb-2">Industry news and what's happening</p>
    <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 underline underline-offset-4 decoration-emerald-300">
      See What's Happening
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-emerald-400"></span>
    </h2>
  </div>

  {/* News Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
    {/* News Card 1 */}
    <div className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <img src="./icons/forbes_logo.png" alt="Forbes" className="h-6 mb-4" />
      </div>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="./landing/news1.png" 
          alt="Rideshare Advertising" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Rideshare Advertising To A New Outdoor World
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          How mobile advertising transforms urban landscapes and creates new opportunities for brands to engage with audiences in motion.
        </p>
        <Link 
          to="/blogsingle" 
          className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors group"
        >
          Read News
          <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>

    {/* News Card 2 */}
    <div className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <img src="./icons/adobe_logo_1.png" alt="Adobe" className="h-6 mb-4" />
      </div>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="./landing/news2.png" 
          alt="Trade Conferences" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          12 Must-Attend Trade Conferences For Agency Professionals
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          Discover the most valuable industry events that will help you stay ahead in the rapidly evolving marketing landscape.
        </p>
        <Link 
          to="/blogsingle" 
          className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors group"
        >
          Read News
          <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center mt-16">
    
    <Link 
      to="/news" 
      className="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
    >
      View All News
    </Link>
  </div>
</div>
        <div className="bg-white py-16 px-6 md:py-20 lg:px-0">
  <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
    <p className="text-xl md:text-2xl text-gray-500 mb-2">Have an idea? Let's talk!</p>
    <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4 relative pb-4">
      What You're Thinking?
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-emerald-400"></span>
    </h2>
  </div>

  <form className="max-w-3xl mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label htmlFor="firstName" className="sr-only">First Name</label>
        <input
          type="text"
          id="firstName"
          className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="First Name*"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="sr-only">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="Last Name*"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="Email*"
          required
        />
      </div>
      <div>
        <label htmlFor="company" className="sr-only">Company Name</label>
        <input
          type="text"
          id="company"
          className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="Company Name*"
          required
        />
      </div>
    </div>

    <div className="mb-6">
      <label htmlFor="title" className="sr-only">Your Title</label>
      <input
        type="text"
        id="title"
        className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
        placeholder="Your Title"
      />
    </div>

    <div className="mb-8">
      <label htmlFor="message" className="sr-only">Your Message</label>
      <textarea
        id="message"
        rows="5"
        className="w-full px-4 py-3 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
        placeholder="What do you want to say?"
        required
      ></textarea>
    </div>

    <div className="text-right">
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        Contact Us
      </button>
    </div>
  </form>
</div>
      </div>
    </section>
  );
};

export default Landing;
