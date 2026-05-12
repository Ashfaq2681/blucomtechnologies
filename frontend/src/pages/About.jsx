import { Helmet } from "react-helmet-async";
import aboutimg from "/src/assets/about.svg"
import brandingIcon from "/src/assets/icons/Branding.svg"
import animationIcon from "/src/assets/icons/Animation.svg"
import developmentIcon from "/src/assets/icons/Development.svg"
import DigitalmarketingIcon from "/src/assets/icons/Digital Marketing.png"
import growthIcon from "/src/assets/icons/Growth planning.png"
import foundationIcon from "/src/assets/icons/On going Support.svg"
import salesIcon from "/src/assets/icons/Sales Enablement.svg"
import ongoingsupport from "/src/assets/icons/On going Support.svg"


<Helmet>
  <title>Blucomtechnologies – Leading Brand Strategy Agency in Islamabad</title>
  <meta name="description" content="Boost your brand with blucomtechnologiesTechnologies. Expert in web design, brand strategy, research-driven advertising, SEO, and high-end product marketing." />
  <meta name="keywords" content="technology services, web design, brand strategy, SEO, digital marketing, advertising, content marketing, corporate identity, product marketing, UX design, branding solutions, performance marketing, lead generation, social media strategy" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="blucomtechnologiesTechnologies | Web Design & Digital Marketing Experts" />
  <meta property="og:description" content="Expert in web design, brand strategy, research-driven advertising, SEO, and high-end product marketing." />
  <meta property="og:image" content="https://blucomtechnologies.com/og-image.jpg" />
  <meta property="og:url" content="https://blucomtechnologies.com/" />
  <link rel="canonical" href="https://blucomtechnologies.com/" />
</Helmet>


const values = [
  { title: "Team First", des: "Great brands are built by great teams. At Blucom, we select passionate professionals who bring creativity, integrity." },
  { title: "Strategic Thinking", des: "We believe branding starts with strategy. Every decision we make is backed by research, insights, and market intelligence." },
  { title: "Ownership", des: "We treat every project like our own business. From idea to execution, we take full responsibility for delivering exceptional results." },
  { title: "Collaboration", des: "We believe the best ideas are created when clients and teams work together with transparency and shared purpose." },
  { title: "Empowerment", des: "We believe true success comes from empowering the brands we work with. Instead of simply delivering services." },
  { title: "Client Success", des: "Your success is our success. As a trusted Branding Agency in Islamabad, our focus is delivering measurable results." },

]


const trends = [
  { title: "Branding", icon: brandingIcon, des: "As a leading Branding Agency Islamabad businesses trust, Blucom Technologies creates powerful brand identities that stand out in competitive markets. Our branding services include brand strategy, visual identity design, brand messaging, and positioning to help businesses build strong, recognizable brands across Pakistan and beyond." },
  { title: "Animation", icon: animationIcon, des: "Our creative animation team produces engaging motion graphics, explainer videos, and brand storytelling visuals that capture audience attention. As a modern Creative Agency Pakistan companies rely on, we use animation to simplify complex ideas and make brands more memorable across digital platforms." },
  { title: "Development", icon: developmentIcon, des: "Blucom Technologies develops high-performance websites and digital platforms designed for speed, scalability, and SEO. From corporate websites to advanced web applications, our development team builds secure and conversion-focused solutions for growing businesses in Islamabad and across Pakistan." },
  { title: "Digital Marketing", icon: DigitalmarketingIcon, des: "Our relationship with clients goes beyond project delivery. Blucom provides ongoing digital support, performance monitoring, and optimization services to ensure your brand continues to grow and stay competitive in the evolving digital landscape." },
  { title: "Growth Planning", icon: growthIcon, des: "A strong brand begins with the right foundation. We help businesses define their mission, vision, positioning, and brand voice to create a consistent identity. As a leading Branding Agency Islamabad, Blucom builds strategic brand frameworks that support sustainable growth." },
  { title: "Brand Foundation", icon: foundationIcon, des: "Our sales enablement solutions align marketing and sales teams with powerful tools, messaging, and content strategies. As a strategic Creative Agency Pakistan businesses partner with, we help companies convert leads into loyal customers through smarter sales and marketing alignment." },
  { title: "Sales Enablement", icon: salesIcon, des: "Blucom Technologies helps businesses scale with strategic growth planning backed by data and market insights. As a trusted Brand Strategy Agency in Islamabad, we identify new opportunities, optimize marketing channels, and create roadmaps that drive long-term business growth." },
  { title: "On Going Support", icon: ongoingsupport, des: "Blucom Technologies helps businesses scale with strategic growth planning backed by data and market insights. As a trusted Brand Strategy Agency in Islamabad, we identify new opportunities, optimize marketing channels, and create roadmaps that drive long-term business growth." },

]

const trendsBlogs = [
  { img: "/src/assets/Attention-Economy-is-the-new-economy.png", title: "Attention Economy is the new economy", link: "" },
  { img: "/src/assets/Why-Time-is-becoming-the-new-currency.png", title: "Why Time is becoming the new currency", link: "" },
  { img: "/src/assets/Marketing-in-behavioural-science.png", title: "Marketing in behavioural science", link: "" },
  { img: "/src/assets/brands-can-build-metaverse-responsibility.png", title: "brands can build metaverse responsibility", link: "" },
]

const companyLogos = ["azure", "aws", "shopify", "laravel", "linux", "magento", "google_cloud", "code_igniter", "redis", "php", "wordpress", "vue"]



const About = () => {
  return (
    <section>
      <div className="relative w-flex bg-gradient-to-r from-[#00AE80] to-[#00996E] min-h-screen flex items-center justify-center p-6">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl w-full">
          {/* Left Content */}
          <div className="text-white md:w-1/2 text-center md:text-left">
            <p className="mt-6 text-lg sm:text-xl max-w-lg">
              Blucomtechnologies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Creative & DataDriven Branding <br /> That Builds Powerful Businesses.
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-lg">
              As a trusted Branding Agency Islamabad businesses rely on, we combine design, technology,
              and marketing intelligence to create brands that stand out and scale faster. Whether you
              are launching a startup or transforming an existing brand, Blucom delivers results through
              strategy, creativity, and data.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
            {/* Award Badge */}
            <div className="absolute -right-10 top-1/4 bg-white text-[#00996E] font-bold text-xl px-4 py-2 rounded-lg shadow-lg">
              Performance Marketing
            </div>
            {/* Hero Image */}
            
             <img src={aboutimg} alt="Hero Illustration" />
          </div>
        </div>
      </div>


      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
          <p>Our</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Core Values</h1>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 max-w-[400px]">
              <h1 className="text-[40px] text-[#1E2832] underline underline-offset-[15px] decoration-[#00AF80] decoration-2">{item.title}</h1>
              <p className="text-[24px]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
          <p></p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Our Expertise</h1>
          <p>As a leading Branding Agency in Islamabad, Blucom Technologies creates distinctive brand <br /> identities that help businesses stand out in competitive markets. Our  services include.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
          {trends.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 max-w-[350px]">
              <img src={item.icon} alt={item.title} className="w-[80px] h-[88px]" />
              <h1 className="text-[24px] text-[#1E2832] underline underline-offset-[15px] decoration-[#00AF80] decoration-2">{item.title}</h1>
              <p className="text-[24px]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
          <p>Clients who</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Trusted</h1>
          <p>on us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
          {companyLogos.map((item, index) => (
            <img key={index} src={`./icons/${item}.png`} alt="link" />
          ))}
        </div>
      </div>
      <div className="my-20 mx-auto w-[80%] text-[#727277]">
        <div className="text-[24px]">
          <p>Our</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Industry Insights</h1>
          <p>Blucom Technologies helps businesses turn ideas into powerful brands <br /> through strategy, design, technology, and performance marketing.</p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 mt-20 w-full justify-between">
          {trendsBlogs.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 mx-auto w-[90%] sm:w-[45%] md:w-[33%] lg:w-[23%]">
              <div className="w-full h-60 bg-gray-300"><img loading="lazy" src={item.img} alt={`image ${index}`} /></div>
              <h1 className="text-[30px]">{item.title}</h1>
              <a href={item.link} className="underline underline-offset-8 text-[16px]">Read More</a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#00AF80] text-white px-5 md:px-16 lg:px-28 xl:px-60 py-40">
        <p className="text-[24px]">Found What you are looking for?</p>
        <h1 className="text-[60px]">Need Help in Selecting</h1>
        <p className="text-[24px]  max-w-[1200px] mt-2">Lets Discuss As the most awarded B2B branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
        <button className="py-1 px-5 text-[#5F5F5F] text-[30px] font-bold bg-white mt-5">Get Started</button>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Have and idea? lets talk!</p>
          <h1 className="text-[60px] text-[#00AF80] underline decoration-[#1E2832] decoration-4">
            What you're Thinking?
          </h1>
        </div>
        <form action="" className="flex flex-col gap-10 w-full max-w-[1300px] px-10 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
            <input type="text" className="landingInput" placeholder="First Name*" />
            <input type="text" className="landingInput" placeholder="Last Name*" />
            <input type="email" className="landingInput" placeholder="Email*" />
            <input type="text" className="landingInput" placeholder="Company Name*" />
          </div>
          <input type="text" className="landingInput" placeholder="YourTitle" />
          <textarea name="" id="" cols="5" className="landingInput" placeholder="What you want to say?" />
          <button type="submit" className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default About