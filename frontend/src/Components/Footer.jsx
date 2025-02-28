import footerLogo from "../assets/logofooter-min.png" 
const footerLinks = [
 
    {title: "Work", Link: "/work"},
  {title: "Expertise", Link: "/expertise"},
  {title: "Insights", Link: "/insights"},
  {title: "News", Link: "/news"},
  {title: "Careers", Link: "/careers"},
  {title: "Investors", Link: "/investors"},
 
];

const social_icons = ["whatsapp", "facebook", "twitter", "ball", "pinterest", "linkedin", "bing", "tictok"];

const Footer = () => {
return (
  <footer className="text-lg text-gray-500">  {/* Added margin from top & bottom */}
      <div className="bg-[#1E2832] flex flex-col md:flex-row flex-wrap justify-start md:justify-center gap-16 lg:gap-24 xl:gap-40 text-[#727277] p-20 text-[16px]">
          
        {/*  <img src="./src/assets/logofooter.png" alt="bluccom technologies logo footer" className="w-[auto] h-[130px]"/>*/}
          <img src={footerLogo} alt="insight" className="w-[auto] h-[130px]" /> 
          <div className="flex flex-col">
              <p className="text-lg text-gray-500 font-bold mb-2">About us</p>
             
              {footerLinks.map((items, index) => (
                  <a href={items.Link} key={index}>{items.title}</a>
              ))}
          </div>
          <div className="text-lg text-gray-500 max-w-[270px]">
          <p className="text-lg text-gray-500">BlucomtechnologiesHQ</p>
              <p className="f mb-2">First Floor, Al-Rehman Chamber, 79 East AKM Fazl-ul-Haq Rd Block G G 7/3 Blue Area, Islamabad.</p>
              <p>connect@theblucom.com</p>
              <p>+92-334-0011126</p>
          </div>
          <form action="">
              <label htmlFor="text-lg text-gray-500">Newsletter</label>
              <div className="flex flex-row flex-wrap w-auto">
              <input type="email" className="outline-none border border-[#727277] px-3 bg-transparent w-auto"/>
              <button type="submit" className="bg-[#727277] text-white py-2 px-5">Let's Go</button>
              </div>
          </form>
      </div>
      <div className="flex flex-col gap-5 items-end pr-40 bg-[#1E2832] text-[#727277]">
          <p className="text-lg text-gray-500 mr-32">We are Too Social</p>
          
          
          <div className="bg-[#1E2832] flex flex-row gap-5 pb-5 -mt-2 mb-2">
              {social_icons.map((item, index) => (
                  <img loading="lazy " key={index} src={`./icons/${item}.png`} alt="icon" className="cursor-pointer"/>
              ))}
          </div>
      </div>
      <p className="bg-[#12181F] text-[#727277] text-[12px] text-center py-2">
          C2022-Blusaquarecommunication, all right reserved.
      </p>
  </footer>
)
}

export default Footer;
