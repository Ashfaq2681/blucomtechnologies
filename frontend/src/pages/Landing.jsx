import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import landingImg from "/landing/heroimage.svg";
import Button from "../Components/Button";
import { getPublishedPosts } from "../api/blogs";

const Discovery = [
  <div>
    <ul className="flex flex-col gap-6 hover cursor-pointer">
    <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/identity">Identity</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/brand-strategy">Brand Strategy</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/messaging-positioning">Messaging Positioning</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/reputation-management">Reputation Management</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/product-mapping">Product Mapping</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/persona-creation">Persona Creation</Link></li>
      <li><Link to="/services/customer-journey-mapping">Customer Journey Mapping</Link></li>
    </ul>
  </div>
  
];
const Strategy = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/brand-awareness">Brand Awareness</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/strategic-communication">Strategic Communication</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/analysis-measurement">Analysis / Measurement</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/impact-measurement">Impact Measurement</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/analytics-implementation">Analytics Implementation</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/campaign-optimization">Campaign Optimization</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/content-strategy">Content Strategy</Link></li>
    </ul>
  </div>
  
];
const Digital = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/search-marketing">Search Marketing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/lead-gen">Lead Gen</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/media-planning-buying">Media Planning / Buying</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/content-marketing">Content Marketing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/omnichannel-campaign-management">Omnichannel Campaigns</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/interaction-assets-devs">Interaction Assets Devs</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/nurture-strategies">Nurture Strategies</Link></li>
    </ul>
  </div>
  
];
const Interaction = [
  <div>
    <ul className="flex flex-col gap-6">
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/ui-designing">UI Designing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/prototyping-and-wireframing">Prototyping & Wireframing</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300"   to="/services/user-journey-mapping">User Journey Mapping</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/interaction-design">Interaction Design</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/web-maintenance">Web Maintenance</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/data-visualization">Data Visualization</Link></li>
      <li><Link className="text-gray-500 hover:text-gray-500 transition duration-300" to="/services/web-development">Web Development</Link></li>
    </ul>
  </div>
 
];



{/* Seo section end) */ }


  const Landing = () => {

  const [dropDownOpen, setDropDownOpen] = useState(true)
  const [landingPosts, setLandingPosts] = useState([]);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
    console.log(dropDownOpen)
  }  

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      try {
        const posts = await getPublishedPosts();

        if (mounted) {
          setLandingPosts(posts);
        }
      } catch (_error) {
        if (mounted) {
          setLandingPosts([]);
        }
      }
    };

    loadPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const blogPreviewPosts = landingPosts.slice(0, 3);
  const ideasPreviewPosts = landingPosts
    .filter((post) =>
      [post.category, post.subcategory, post.section, post.tags]
        .flat()
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes("ideas"),
    )
    .slice(0, 3);

  return (
    <section className="bg-[#F8FAFC] min-h-screen">
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
        <meta property="og:title" content="blucomtechnologies - Creative Agency in Islamabad for Brand Strategy & Digital Marketing" />
        <meta
          property="og:description"
          content="We offer top-notch digital solutions including SEO, brand strategy, UX/UI design, and content marketing to scale your business."
        />
        <meta property="og:image" content="https://www.blucomtechnologies.com/preview.jpg" />
        <meta property="og:url" content="https://www.blucomtechnologies.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="blucomtechnologies - Brand Strategy & Digital Solutions" />
        <meta name="twitter:description" content="Expert brand positioning, SEO, and UX/UI design strategies." />
        <meta name="twitter:image" content="https://www.blucomtechnologies.com/preview.jpg" />
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
      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto px-8 md:px-32 py-5 h-lvh">

          <img src={landingImg} alt="Brand Strategy & Digital Solutions" className="w-[200px] lg:w-[400px] xl:w-[850px] h-[182px] lg:h-[300px] xl:h-[600px]" />

          <div className="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center">
            <span className="text-2xl text-gray-500">
              Brand Strategy &
              <br />
              <span className="text-6xl text-gray-500 underline decoration-8 decoration-green-300">
                Digital Marketing Agency
                <br />
              </span>
              Every Great Brand Starts With an Idea
            </span>
            <div className="mt-24">
              <a href="/"className="text-3g text-gray-500">
                We are a creative & Brand Strategy agency in Islamabad that blends strategy,
                design, and technology to help businesses stand out in the digital world.
                From startups launching their first product to established companies
                looking to scale,  we create solutions that elevate brands and deliver
                measurable results.

              </a>
             
            </div>

          </div>
        </div>



      </div>


      <div>


        {/*form start share*/}
       <section className="form">
  <div className="relative w-full min-h-screen flex justify-center items-center bg-emerald-500 text-white p-4 xl:p-10">
    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 p-4 md:p-6 flex flex-col items-start">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold underline decoration-green-300 underline-offset-8 mb-4">
        Let’s Bring Your Idea to Life
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10">
        Tell us a little about your project so we can understand your goals and recommend
        the best creative and digital solutions for your business.
      </p>

      {/* Dropdown Section */}
      <div className="w-full">
        {/* Dropdown Button */}
        <div
          className="bg-white text-gray-500 flex justify-between items-center p-4 shadow-md cursor-pointer w-full transition hover:bg-gray-100"
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
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Product%20Mapping&intent=Identity%20Concept">Identity Concept</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=UI%20Designing&intent=UI%20UX%20Design">UI UX Design</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Brand%20Strategy&intent=Brand%20Positioning">Brand Positioning</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Strategic%20Communication&intent=Business%20Plan">Business Plan</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Persona%20Creation&intent=Market%20Research">Market Research</Link>
          <Link className="cursor-pointer hover:text-gray-100" to="/multistepform?service=Search%20Marketing&intent=Digital%20Marketing">Digital Marketing</Link>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="w-full flex justify-start mt-10">
        <Link to="/multistepform">
          <Button variant="white">Let's Get Started</Button>
        </Link>
      </div>

    </div>
  </div>
</section>



        {/* Call-to-Action Button */}

        <section className="Portfolio w-full bg-white">
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
              <span className="text-2xl text-gray-500">Hyundai Pakistan</span>
              <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
                TUSCON 2020
              </span>
              <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
                <span>#Activation</span>
                <span>#Discovery</span>
                <span>#Design</span>
              </div>
              <span className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
                Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new
                revolution in the mini SUV Category. Our part was to enable the user to
                discover the new product, activate the product, and create a digital
                strategy with design collaterals.
              </span>
            </div>
          </div>

          {/* Codility Hub */}
          <div className="flex flex-col-reverse md:flex-row w-full items-center">
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end p-6 md:p-12">
              <span className="text-2xl text-gray-500">Toyota Motors Islamabad</span>
              <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
                Digital Experience
              </span>
              <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">
                <span>#Automation</span>
                <span>#Interaction</span>
                <span>#Digital Experience</span>
              </div>
              <span className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
                Toyota Motors Islamabad partnered with us to enhance their digital presence and
                create a seamless brand experience for modern car buyers. Our role was to design
                engaging digital interactions that allow customers to explore Toyota vehicles,
                discover features, and connect with the brand effortlessly. Through thoughtful
                design and strategic user experience, we helped translate Toyota’s legacy of
                reliability and innovation into a modern digital journey.
              </span>
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
              <span className="text-2xl text-gray-500">Codility Hub Technologies</span>
              <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
                Interaction Design
              </span>
              <div className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">

                <span>#Identity</span>
                <span>#Interaction</span>
                <span>#Interface</span>
              </div>
              <span className="text-lg text-gray-500 mt-10 leading-normal text-left md:text-left">
                Codility Hub came to us with just a name but an amazing proposition. A
                well-defined brand in the tech sector focused on core development with
                fast turnaround. We were asked to bring this idea to life through identity
                and interaction.
              </span>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
          {/* Title Section */}
          <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">We provide a complete range of</span>
            <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
              Creative & Digital Services
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Discovery / Strategy / Interaction</span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#727277] mx-auto w-full max-w-6xl">
            {/* Discovery Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-gray-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Discovery
              </span>
              {Discovery.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Strategy Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-gray-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Strategy
              </span>
              {Strategy.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Digital Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-gray-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Digital
              </span>
              {Digital.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>

            {/* Interaction Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-gray-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                Interaction
              </span>
              {Interaction.map((item, index) => (
                <span key={index} className="underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Call-to-Action Button */}
        </div>
        
            <div className="flex flex-col items-center gap-4">
                {/* Filled Buttons */}
                <Button variant="black">Want to Talk?</Button>
            </div>
       


        {(blogPreviewPosts.length > 0 || ideasPreviewPosts.length > 0) && (
          <section className="bg-white px-5 py-20 text-[#727277]">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-2xl text-gray-500">Latest from the CMS</span>
                  <h2 className="mt-2 text-5xl text-gray-500 underline decoration-emerald-300">
                    Blog and Ideas
                  </h2>
                </div>
                <div className="flex gap-3">
                  <Link to="/blog"><Button variant="gray">View Blog</Button></Link>
                  <Link to="/ideas"><Button variant="gray">View Ideas</Button></Link>
                </div>
              </div>

              {blogPreviewPosts.length > 0 && (
                <div>
                  <h3 className="mb-5 text-xl font-semibold text-gray-600">Blog Posts</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {blogPreviewPosts.map((post) => (
                      <Link key={post.id || post.slug} to={`/blog/${post.slug}`} className="group block border border-slate-200 bg-white">
                        <div className="h-52 bg-slate-100">
                          {post.image && <img src={post.image} alt={post.title} className="h-full w-full object-cover" />}
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">{post.category || "Blog"}</p>
                          <h4 className="mt-3 text-2xl font-black leading-snug text-[#1d2d35] group-hover:text-blue-700">{post.title}</h4>
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.description || post.seoDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {ideasPreviewPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-5 text-xl font-semibold text-gray-600">Ideas Posts</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {ideasPreviewPosts.map((post) => (
                      <Link key={post.id || post.slug} to={`/blog/${post.slug}`} className="group block border border-slate-200 bg-white">
                        <div className="h-52 bg-slate-100">
                          {post.image && <img src={post.image} alt={post.title} className="h-full w-full object-cover" />}
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Ideas</p>
                          <h4 className="mt-3 text-2xl font-black leading-snug text-[#1d2d35] group-hover:text-emerald-700">{post.title}</h4>
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.description || post.seoDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
          <div className="flex flex-col justify-start items-center m-10 w-auto">
            <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
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
              <span className="text-4xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">Why attention economy is becoming new ecomony, and how brands can take leverage</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              <Link to={`Blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage`}>
                <Button variant="gray">Read More</Button>
              </Link>
              
            </div>

            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Insights</span>
              <img src="./landing/insight2.jpg" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">The art of visual communication, how visual grammer can be utilized by the brands</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              
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
            <span className="text-6xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">
              Insights for Modern Brands
            </span>

          </div>
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/forbes_logo.png" alt="forbes logo" className="w-auto h-[40px]" />
              <img src="./landing/news1.png" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">Rideshare Advertising To A New Outdoor World</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              <Link to={`/Ideas/Rideshare-Advertising-To-A-New-Outdoor-World`}>
                <Button variant="gray">Read More</Button>
              </Link>
              
            </div>
            <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
              <img src="./icons/adobe_logo_1.png" alt="adobe logo" className="w-auto h-[40px]" />
              <img src="./landing/news2.png" alt="insight" className="w-[600px] h-[350px]" />
              <span className="text-4xl text-gray-500 underline decoration-gray-500 decoration-emerald-300">12 Must-Attend Trade Conferences For Agency Professionals</span>
              <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies econom
                ic theory to solve various information management problems</span>
              <Link to={`/Ideas/Must-Attend-Advertising-Confrence`} >
                <Button variant="gray">Read More</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Landing;
