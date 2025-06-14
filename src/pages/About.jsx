import Footer from "../Components/Footer"
import Header from "../Components/Header"

const values = [
    {title: "Team First", des: "We choose our pople more carefully. we bring them in only if we think they're good fit, regardless of whether we have work for them right away"},
    {title: "Innergy in Synnergy", des: "Knowing thyself, in order to attain self awarenes. we are constantly motivating our employees to become solution oriented and start moving on to attain innergay"},
    {title: "Owner Ship", des: "We take owner ship of each and every project we do, starts from all the mistakes to all to good work."},
    {title: "Collaboration", des: "As an umberella of varaitey of intellectuals, joint efforts done by us enables us to think in variation"},
    {title: "Empowerment", des: "As an essential guide to acheiving good results,we train our clientele, companies, partners."},
    {title: "Client is the King", des: "We treat the customer as the king. We help them to govern its provinces. by providing effective strategies"},
]

const trendsBlogs = [
    {img: "", title: "Attention Economy is the new economy", link: ""},
    {img: "", title: "Why Time is becoming the new currency", link: ""},
    {img: "", title: "Marketing in behavioural science", link: ""},
    {img: "", title: "brands can build metaverse responsibility", link: ""},
]

const trends = [
    {title: "Branding", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Animation", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Interface Designing", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Development", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Digital Marketing", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Ongoing Support", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Growth Planning", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Brand Foundation", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
    {title: "Sales Enablement", des: "As the most awarded b2b branding agency in texas we know how to combine customer insights. As the most awarded."},
]

const companyLogos = ["azure", "aws", "shopify", "laravel", "linux", "magento", "google_cloud", "code_igniter", "redis", "php", "wordpress", "vue"]

const About = () => {
  return (
    <div>
      <Header/>
      <section>
          <div className="relative bg-[linear-gradient(92.76deg,_#10b981_20.14%,_#1da075_87.31%)]">
          <img
            loading="lazy"
            src="/about/sec1_bg.png"
            alt="bg image"
            className="absolute -z-1 h-full"
          />
          <div className="inset-0 flex sm:flex-row justify-center items-center text-white px-4 py-[100px]">
            <div className="sm:w-[70%] lg:w-[50%] w-full lg:p-4 p-2 text-left flex flex-col max-w-[600px]">
              <p className="text-[50px] font-bold leading-tight">
              Creative Driven, with analytical approach
              </p>
              <p className="w-5/6 mt-10">
              As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.
              </p>
            </div>
            <div className="w-2/5 relative">
              <img src="./about/about_hero.png" alt="about hero" />
              <div className="flex flex-col justify-center items-center w-[140px] aspect-square shadow-2xl absolute top-[70%] -left-[10%] bg-white text-[#10b981] leading-none">
                <p className="font-bold text-[40px]">283</p>
                <p className="text-[20px]">awards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
          <div className="text-[24px]">
              <p>Our</p>
              <p className="text-[#10b981] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Core Values</p>
              <p>Ever changing World, <br/> Constant Core Values.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
              {values.map((item,index) => (
                  <div key={index} className="flex flex-col gap-5 max-w-[400px]">
                      <p className="text-[30px] text-[#1E2832] underline underline-offset-[15px] decoration-[#86efac] decoration-2">{item.title}</p>
                      <p className="">{item.des}</p>
                  </div>
              ))}
          </div>
        </div>
        <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
          <div className="text-[24px]">
              <p>Our</p>
              <p className="text-[#10b981] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Industry Trends</p>
              <p>Ever changing World, <br/> Constant Core Values.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-20">
              {trendsBlogs.map((item,index) => (
                  <div key={index} className="flex flex-col gap-5 max-w-[280px]">
                      <div className="h-60 bg-gray-300"><img loading="lazy" src={item.img} alt={item.img} /></div>
                      <p className="text-[26px]">{item.title}</p>
                      <a href={item.link} className="underline underline-offset-8 text-[16px]">Read More</a>
                  </div>
              ))}
          </div>
        </div>
        <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
          <div className="text-[24px]">
              <p>Our</p>
              <p className="text-[#10b981] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Industry Trends</p>
              <p>Ever changing World, <br/> Constant Core Values.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
              {trends.map((item,index) => (
                  <div key={index} className="flex flex-col gap-5 max-w-[350px]">
                      <img src="./icons/about_link.png" alt="link" className="w-[60px] h-[68px]"/>
                      <p className="text-[24px] text-[#1E2832] underline underline-offset-[15px] decoration-[#86efac] decoration-2">{item.title}</p>
                      <p className="text-[24px]">{item.des}</p>
                  </div>
              ))}
          </div>
        </div>
        <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
          <div className="text-[24px]">
              <p>Clients who</p>
              <p className="text-[#10b981] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Trusted</p>
              <p>on us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
              {companyLogos.map((item,index) => (
                  <img key={index} src={`./icons/${item}.png`} alt="link"/>
              ))}
          </div>
        </div>
        <div className="bg-[linear-gradient(92.76deg,_#10b981_20.14%,_#1da075_87.31%)] text-white px-5 md:px-16 lg:px-28 xl:px-60 py-40">
          <p className="text-[24px]">Found What you are looking for?</p>
          <p className="text-[60px]">Need Help in Selecting</p>
          <p className="text-[18px]  max-w-[1200px] mt-2">Lets Discuss As the most awarded B2B branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
          <button className="py-1 px-5 text-[#5F5F5F] text-[20px] font-bold bg-white mt-5">Get Started</button>
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
  )
}

export default About