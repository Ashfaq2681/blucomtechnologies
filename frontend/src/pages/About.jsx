import { Helmet } from "react-helmet-async";



<Helmet>
  <title>blucomtechnologiesTechnologies | Web Design & Digital Marketing Experts</title>
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
  { title: "Team First", des: "We choose our pople more carefully. we bring them in only if we think they’re good fit, regardless of whether we have work for them right away" },
  { title: "Innergy in Synnergy", des: "Knowing thyself, in order to attain self awarenes. we are constantly motivating our employees to become solution oriented and start moving on to attain innergay" },
  { title: "Owner Ship", des: "We take owner ship of each and every project we do, starts from all the mistakes to all to good work." },
  { title: "Collaboration", des: "As an umberella of varaitey of intellectuals, joint efforts done by us enables us to think in variation" },
  { title: "Empowerment", des: "As an essential guide to acheiving good results,we train our clientele, companies, partners." },
  { title: "Client is the King", des: "We treat the customer as the king. We help them to govern its provinces. by providing effective strategies" },
]

const trendsBlogs = [
  { img: "", title: "Attention Economy is the new economy", link: "" },
  { img: "", title: "Why Time is becoming the new currency", link: "" },
  { img: "", title: "Marketing in behavioural science", link: "" },
  { img: "", title: "brands can build metaverse responsibility", link: "" },
]

const trends = [
  { title: "Branding", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Animation", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Interface Designing", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Development", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Digital Marketing", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Ongoing Support", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Growth Planning", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Brand Foundation", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
  { title: "Sales Enablement", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded." },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Creative Driven, <br /> with analytical approach
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-lg">
              As the most awarded B2D branding agency in Texas, we know how to
              combine customer insights with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
            {/* Award Badge */}
            <div className="absolute -left-10 top-1/4 bg-white text-[#00996E] font-bold text-xl px-4 py-2 rounded-lg shadow-lg">
              238 awards
            </div>

            {/* Hero Image */}
            <div className="bg-white/30 p-6 rounded-xl shadow-lg w-64 h-64 flex items-center justify-center">
              <img src="/assets/Vector.png" alt="Main Icon" className="w-20 h-20" />
            </div>
          </div>
        </div>
      </div>
      

      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
          <p>Our</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Core Values</h1>
          <p>Ever changing World, <br /> Constant Core Values.</p>
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
      <div className="my-20 mx-auto w-[80%] text-[#727277]">
        <div className="text-[24px]">
          <p>Our</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Industry Trends</h1>
          <p>Ever changing World, <br /> Constant Core Values.</p>
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
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
          <p>Our</p>
          <h1 className="text-[#00AF80] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Industry Trends</h1>
          <p>Ever changing World, <br /> Constant Core Values.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
          {trends.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 max-w-[350px]">
              <img src="./icons/about_link.png" alt="link" className="w-[60px] h-[68px]" />
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
      <div className="bg-[#00AF80] text-white px-5 md:px-16 lg:px-28 xl:px-60 py-40">
        <p className="text-[24px]">Found What you are looking for?</p>
        <h1 className="text-[60px]">Need Help in Selecting</h1>
        <p className="text-[24px]  max-w-[1200px] mt-2">Lets Discuss As the most awarded B2B branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
        <button className="py-1 px-5 text-[#5F5F5F] text-[30px] font-bold bg-white mt-5">Get Started</button>
      </div>
     
     
      ////////////////..* Contact Section */
      
      
      
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