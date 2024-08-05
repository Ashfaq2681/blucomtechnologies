const footerLinks = [
    {title: "Work", Link: "/work"},
    {title: "Expertise", Link: "/expertise"},
    {title: "Insights", Link: "/insights"},
    {title: "News", Link: "/news"},
    {title: "Careers", Link: "/careers"},
    {title: "Investors", Link: "/investors"},
]

const social_icons = ["whatsapp", "facebook", "twitter", "ball", "pinterest", "linkedin", "bing", "tictok"]

const Footer = () => {
  return (
    <footer>
        <div className="bg-[#1E2832] flex flex-col md:flex-row flex-wrap justify-start md:justify-center gap-16 lg:gap-24 xl:gap-40 text-[#727277] p-20 text-[24px]">
            <img src="./icons/logo_main.png" alt="logo_main" className="w-[120px] h-[130px]"/>
            <div className="flex flex-col">
                <p className="font-bold mb-2">About us</p>
                {footerLinks.map((items, index) => (
                    <a href={items.Link} key={index}>{items.title}</a>
                ))}
            </div>
            <div className="max-w-[270px]">
                <p className="font-bold mb-2">About us</p>
                <address>First Floor, Al-Rehman Chamber, 79 East AKM Fazl-ul-Haq Rd Block G G 7/3 Blue Area, Islamabad.
                </address>
                <p>connect@theblucom.com</p>
                <p>+92-334-0011126</p>
            </div>
            <form action="">
                <label htmlFor="">Newsletter</label>
                <div className="flex flex-row flex-wrap w-auto">
                <input type="email" className="outline-none border border-[#727277] px-3 bg-transparent w-auto"/>
                <button type="submit" className="bg-[#727277] text-white py-2 px-5">Let's Go</button>
                </div>
            </form>
        </div>
        <div className="flex flex-col gap-5 items-end pr-40 bg-[#1E2832] text-[#727277]">
                <p className="text-[24px] mr-32">We are Too Social</p>
            <div className="bg-[#1E2832] flex flex-row gap-5 pb-5 -mt-2 mb-2">
                {social_icons.map((item, index) => (
                    <img loading="lazy" key={index} src={`./icons/${item}.png`} alt="icon" className="cursor-pointer"/>
                ))}
            </div>
        </div>
        <p className="bg-[#12181F] text-white text-[16px] text-center py-2">
            C2022-Blusaquarecommunication, all right reserved.
        </p>
    </footer>
  )
}

export default Footer