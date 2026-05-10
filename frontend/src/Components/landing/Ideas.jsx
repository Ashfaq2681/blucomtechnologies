import { Link } from "react-router-dom";

const newsItems = [
  {
    logo: "./icons/forbes_logo.png",
    logoAlt: "forbes logo",
    logoClassName: "w-[80px] h-[30px]",
    image: "./landing/news1.png",
    title: "Rideshare Advertising To A New Outdoor World",
  },
  {
    logo: "./icons/adobe_logo_1.png",
    logoAlt: "adobe logo",
    logoClassName: "w-[70px] h-[30px]",
    image: "./landing/news2.png",
    title: "12 Must-Attend Trade Conferences For Agency Professionals",
  },
];

const Ideas = () => {
  return (
    <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#111827]">
      <div className="flex flex-col justify-start items-center m-10 w-auto">
        <p className="text-2xl text-gray-900 flex flex-wrap gap-2 mt-5">Industry news and what's </p>
        <p className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
          See What's Happening
        </p>
      </div>
      <div className="flex flex-row gap-5 justify-center flex-wrap">
        {newsItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <img src={item.logo} alt={item.logoAlt} className={item.logoClassName} />
            <img src={item.image} alt="insight" className="w-[600px] h-[350px]" />
            <p className="text-4xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              {item.title}
            </p>
            <p className="text-lg text-gray-900 flex flex-wrap gap-2 mt-5">
              Attention economics is an approach to the management of information that treats human attention as a scarce commodity and applies economic theory to solve various information management problems
            </p>
            <Link to="/blogsingle" className="bg-gray-400 text-white font-bold px-4 py-2 w-40 text-center mt-10 border cursor-pointer">
              Read News
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
