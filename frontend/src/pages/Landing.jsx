import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landingImg from "/landing/heroimage.svg";
import Button from "../Components/Button";
import { getPublishedPosts } from "../api/blogs";
import { getContents } from "../api/content";
import { getPostDescription, getPostTitle } from "../utils/postDescriptions";

const postMatchesType = (post, contentType) => {
  const target = contentType.toLowerCase();
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return values.includes(target);
};

const PREVIEW_POST_LIMIT = 2;
const PORTFOLIO_PREVIEW_LIMIT = 3;

const fallbackPortfolioItems = [
  {
    title: "TUSCON 2020",
    slug: "hyundai",
    name: "Hyundai Pakistan",
    category: "Automotive",
    image: "./landing/tucson.png",
    tags: ["#Activation", "#Discovery", "#Design"],
    excerpt:
      "Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new revolution in the mini SUV Category. Our part was to enable the user to discover the new product, activate the product, and create a digital strategy with design collaterals.",
  },
  {
    title: "Digital Experience",
    slug: "toyota-motors",
    name: "Toyota Motors Islamabad",
    category: "Automotive",
    image: "./landing/toyota.png",
    tags: ["#Automation", "#Interaction", "#Digital Experience"],
    excerpt:
      "Toyota Motors Islamabad partnered with us to enhance their digital presence and create a seamless brand experience for modern car buyers. Our role was to design engaging digital interactions that allow customers to explore Toyota vehicles, discover features, and connect with the brand effortlessly.",
  },
  {
    title: "Interaction Design",
    slug: "codility-hub",
    name: "Codility Hub Technologies",
    category: "Technology",
    image: "./landing/interactive_design.png",
    tags: ["#Identity", "#Interaction", "#Interface"],
    excerpt:
      "Codility Hub came to us with just a name but an amazing proposition. A well-defined brand in the tech sector focused on core development with fast turnaround. We were asked to bring this idea to life through identity and interaction.",
  },
];

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
  const [portfolioPreviewItems, setPortfolioPreviewItems] = useState(fallbackPortfolioItems);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen)
    console.log(dropDownOpen)
  }  

  useEffect(() => {
    let mounted = true;

    const loadHomeContent = async () => {
      try {
        const [postsResult, portfolioResult] = await Promise.allSettled([
          getPublishedPosts(),
          getContents({ type: "portfolio" }),
        ]);
        const posts = postsResult.status === "fulfilled" ? postsResult.value : [];
        const portfolioItems = portfolioResult.status === "fulfilled" ? portfolioResult.value : [];

        if (mounted) {
          setLandingPosts(posts);
          const publishedPortfolioItems = portfolioItems
            .filter((item) => item.slug && item.title)
            .slice(0, PORTFOLIO_PREVIEW_LIMIT);

          setPortfolioPreviewItems(
            publishedPortfolioItems.length > 0 ? publishedPortfolioItems : fallbackPortfolioItems
          );
        }
      } catch (_error) {
        if (mounted) {
          setLandingPosts([]);
          setPortfolioPreviewItems(fallbackPortfolioItems);
        }
      }
    };

    loadHomeContent();

    return () => {
      mounted = false;
    };
  }, []);

  const newsPreviewPosts = landingPosts
    .filter((post) => postMatchesType(post, "News"))
    .slice(0, PREVIEW_POST_LIMIT);
  const blogPreviewPosts = landingPosts
    .filter((post) => !postMatchesType(post, "Ideas") && !postMatchesType(post, "News"))
    .slice(0, PREVIEW_POST_LIMIT);
  const insightPosts = newsPreviewPosts;
  const conceptImpactPosts = blogPreviewPosts;

  return (
    <section className="bg-[#F8FAFC] min-h-screen">
      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto px-8 md:px-32 py-5 h-lvh">

          <img src={landingImg} alt="Brand Strategy & Digital Solutions" className="w-[200px] lg:w-[400px] xl:w-[850px] h-[182px] lg:h-[300px] xl:h-[600px]" />

          <div className="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center">
            <span className="text-2xl text-gray-500">
              Brand Strategy &
              <br />
              <span className="text-6xl text-emerald-500 underline decoration-8 decoration-green-300">
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
          {portfolioPreviewItems.slice(0, PORTFOLIO_PREVIEW_LIMIT).map((item, index) => {
            const isReversed = index % 2 === 1;
            const tags = (item.tags?.length ? item.tags : item.services || [item.category || "Portfolio"])
              .filter(Boolean)
              .slice(0, 3);
            const image = item.image || item.socialImage || fallbackPortfolioItems[index]?.image || "./landing/tucson.png";
            const eyebrow = item.name || item.client || item.category || "Portfolio";
            const description = item.excerpt || "Explore this Blucom Technologies portfolio case study.";

            const textPanel = (
              <div className={`w-full md:w-1/2 flex flex-col justify-center items-center ${isReversed ? "md:items-end" : "md:items-start"} p-6 md:p-12`}>
                <span className="text-2xl text-gray-500">{eyebrow}</span>
                <Link
                  to={`/portfolio/${item.slug}`}
                  className={`text-5xl sm:text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300 transition hover:text-emerald-600 ${isReversed ? "md:text-right" : "md:text-left"}`}
                >
                  {item.title}
                </Link>
                <div className={`text-2xl text-gray-500 flex flex-wrap gap-2 mt-5 ${isReversed ? "md:justify-end" : ""}`}>
                  {tags.map((tag) => (
                    <span key={tag}>{String(tag).startsWith("#") ? tag : `#${tag}`}</span>
                  ))}
                </div>
                <span className={`text-lg text-gray-500 mt-10 leading-normal text-left ${isReversed ? "md:text-right" : "md:text-left"}`}>
                  {description}
                </span>
                <Link to={`/portfolio/${item.slug}`} className="mt-8">
                  <Button variant="gray">View Case Study</Button>
                </Link>
              </div>
            );

            const imagePanel = (
              <Link to={`/portfolio/${item.slug}`} className="group w-full md:w-1/2 flex justify-center overflow-hidden">
                <img
                  src={image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            );

            return (
              <div
                key={item.slug || item.title}
                className={`${isReversed ? "flex flex-col-reverse md:flex-row" : "flex flex-col md:flex-row"} w-full items-center`}
              >
                {isReversed ? (
                  <>
                    {textPanel}
                    {imagePanel}
                  </>
                ) : (
                  <>
                    {imagePanel}
                    {textPanel}
                  </>
                )}
              </div>
            );
          })}
        </section>

        <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-0">
          {/* Title Section */}
          <div className="flex flex-col items-center text-center m-6 sm:m-10 w-full">
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">We provide a complete range of</span>
            <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Creative & Digital Services
            </span>
            <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">Discovery / Strategy / Interaction</span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-lg md:text-xl text-[#727277] mx-auto w-full max-w-6xl">
            {/* Discovery Section */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
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
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
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
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
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
              <span className="font-bold text-emerald-500 underline underline-offset-[8px] decoration-2 decoration-[#C4C4C4]">
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
            {(conceptImpactPosts.length > 0 ? conceptImpactPosts : [
              {
                id: "static-impact-1",
                title: "Why attention economy is becoming new ecomony, and how brands can take leverage",
                slug: "Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage",
                image: "./landing/insight1.jpg",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                link: "Blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage",
              },
              {
                id: "static-impact-2",
                title: "The art of visual communication, how visual grammer can be utilized by the brands",
                slug: "The-art-of-visual-communication",
                image: "./landing/insight2.jpg",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                link: "Blog/The-art-of-visual-communication",
              },
            ]).map((post) => (
              <div key={post.id || post.slug} className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
                <span className="text-2xl text-gray-500 flex flex-wrap gap-2 mt-5">{post.category || "Blog"}</span>
                {post.image && <img src={post.image} alt={post.title} className="w-[600px] h-[350px] object-cover" />}
                <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">{getPostTitle(post)}</span>
                <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">{getPostDescription(post)}</span>
                <Link to={post.link || `/blog/${post.slug}`}>
                  <Button variant="gray">Read More</Button>
                </Link>
              </div>
            ))}
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
            {(insightPosts.length > 0 ? insightPosts : [
              {
                id: "static-news-1",
                title: "Rideshare Advertising To A New Outdoor World",
                slug: "Rideshare-Advertising-To-A-New-Outdoor-World",
                image: "./landing/news1.png",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                logo: "./icons/forbes_logo.png",
                logoAlt: "forbes logo",
                link: "/Ideas/Rideshare-Advertising-To-A-New-Outdoor-World",
              },
              {
                id: "static-news-2",
                title: "12 Must-Attend Trade Conferences For Agency Professionals",
                slug: "Must-Attend-Advertising-Confrence",
                image: "./landing/news2.png",
                description: "Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems",
                logo: "./icons/adobe_logo_1.png",
                logoAlt: "adobe logo",
                link: "/Ideas/Must-Attend-Advertising-Confrence",
              },
            ]).map((post) => (
              <div key={post.id || post.slug} className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
                {post.logo && <img src={post.logo} alt={post.logoAlt || ""} className="w-auto h-[40px]" />}
                {post.image && <img src={post.image} alt={post.title} className="w-[600px] h-[350px] object-cover" />}
                <span className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">{getPostTitle(post)}</span>
                <span className="text-lg text-gray-500 flex flex-wrap gap-2 mt-5">{getPostDescription(post)}</span>
                <Link to={post.link || `/blog/${post.slug}`}>
                  <Button variant="gray">Read More</Button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Landing;
