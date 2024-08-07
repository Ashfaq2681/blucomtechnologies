const values = [
    {title: "Team First", des: "We choose our pople more carefully. we bring them in only if we think they’re good fit, regardless of whether we have work for them right away"},
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
    <section>
        <div className="relative w-full mt-5">
        <img
          src="/hero/landing_bg_1.png"
          alt="image.."
          className="w-full h-lvh object-cover object-left"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center w-full text-white p-4 ">
          <div className="sm:w-[70%] lg:w-[50%] w-full lg:p-4 p-2 text-left flex flex-col max-w-[600px]">
            <p className="text-[60px] font-bold leading-tight">
            Creative Driven, with analytical approach
            </p>
            <p className="w-full text-[24px] mt-10">
            As the most awarded b2d branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.
            </p>
          </div>
          <img src="./about/about_hero.png" alt="about hero" />
        </div>
      </div>
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
            <p>Our</p>
            <p className="text-[#156DDF] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Core Values</p>
            <p>Ever changing World, <br/> Constant Core Values.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
            {values.map((item,index) => (
                <div key={index} className="flex flex-col gap-5 max-w-[400px]">
                    <p className="text-[40px] text-[#1E2832] underline underline-offset-[15px] decoration-[#156DDF] decoration-2">{item.title}</p>
                    <p className="text-[24px]">{item.des}</p>
                </div>
            ))}
        </div>
      </div>
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
            <p>Our</p>
            <p className="text-[#156DDF] text-[60px] underline decoration-[#1E2832]/70 decoration-2 -mt-5">Industry Trends</p>
            <p>Ever changing World, <br/> Constant Core Values.</p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 mt-20">
            {trendsBlogs.map((item,index) => (
                <div key={index} className="flex flex-col gap-5 max-w-[280px]">
                    <div className="h-60 bg-gray-300"><img loading="lazy" src={item.img} alt={item.img} /></div>
                    <p className="text-[30px]">{item.title}</p>
                    <a href={item.link} className="underline underline-offset-8 text-[16px]">Read More</a>
                </div>
            ))}
        </div>
      </div>
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
            <p>Our</p>
            <p className="text-[#156DDF] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Industry Trends</p>
            <p>Ever changing World, <br/> Constant Core Values.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
            {trends.map((item,index) => (
                <div key={index} className="flex flex-col gap-5 max-w-[350px]">
                    <img src="./icons/about_link.png" alt="link" className="w-[60px] h-[68px]"/>
                    <p className="text-[24px] text-[#1E2832] underline underline-offset-[15px] decoration-[#156DDF] decoration-2">{item.title}</p>
                    <p className="text-[24px]">{item.des}</p>
                </div>
            ))}
        </div>
      </div>
      <div className="my-40 px-5 md:px-10 lg:px-20 xl:px-40 text-[#727277]">
        <div className="text-[24px]">
            <p>Clients who</p>
            <p className="text-[#156DDF] text-[60px] underline decoration-[#1E2832]/90 decoration-2 -mt-5">Trusted</p>
            <p>on us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-start mt-20">
            {companyLogos.map((item,index) => (
                <img key={index} src={`./icons/${item}.png`} alt="link"/>
            ))}
        </div>
      </div>
      <div className="bg-[#156DDF] text-white px-5 md:px-16 lg:px-28 xl:px-60 py-40">
        <p className="text-[24px]">Found What you are looking for?</p>
        <p className="text-[60px]">Need Help in Selecting</p>
        <p className="text-[24px]  max-w-[1200px] mt-2">Lets Discuss As the most awarded B2B branding agency in texas we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.</p>
        <button className="py-1 px-5 text-[#5F5F5F] text-[30px] font-bold bg-white mt-5">Get Started</button>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Have and idea? lets talk!</p>
          <p className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
          What you're Thinking?
          </p>
        </div>
        <form action="" className="flex flex-col gap-10 w-full max-w-[1300px] px-10 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
            <input type="text" className="landingInput" placeholder="First Name*"/>
            <input type="text" className="landingInput" placeholder="Last Name*"/>
            <input type="email" className="landingInput" placeholder="Email*"/>
            <input type="text" className="landingInput" placeholder="Company Name*"/>
            </div>
            <input type="text" className="landingInput" placeholder="YourTitle"/>
            <textarea name="" id="" cols="5" className="landingInput" placeholder="What you want to say?"/>
        <button type="submit" className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]">
          Submit
        </button>
        </form>
      </div>
    </section>
  )
}

export default About