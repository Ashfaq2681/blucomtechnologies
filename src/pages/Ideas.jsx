import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ideas = [
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
    {
      title: "The Future of100:2022",
      description:
        "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
    },
  ];

const Ideas = () => {
    const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  }
  return (
    <div>
      <Header/>
      <div className="relative w-full h-lvh">
        <img
          src="/news/news_bg.png"
          alt="image.."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-600 opacity-80"></div>
        <div className="absolute inset-0 flex flex-row justify-center items-center text-white p-4">
          <div className="w-[35%] lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-3xl lg:text-4xl py-1">
              Adobe Summit 2022
            </h1>
            <h1 className="text-lg sm:text-3xl lg:text-4xl py-1">an Insight</h1>
          </div>
          <div className="sm:w-[35%]  border-l-2  border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <img
              src="/news/adobe.png"
              alt="img"
              className="lg:w-72 md:w-60 sm:w-40 w-24"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.slice(0, showMore ? ideas.length : 8).map((ideasItem, key) => (
            <div className="text-gray-600" key={key}>
              <p className="uppercase py-2">ideas</p>
              <div className="h-60 bg-gray-300">
                <img src="" alt="img.." />
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold underline pt-8 pb-2">
                {ideasItem.title}
              </h2>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights with impactful content to get your
                brand from the top of the list to the dotted line.
              </p>
              <button className="underline font-semibold hover:text-black">
                Read Report
              </button>
            </div>
          ))}
        </div>
        {ideas.length > 8 && !showMore &&(
        <div className=" text-center my-10">
            <button onClick={handleShowMore} className="bg-gray-800 text-white underline p-2 hover:bg-black">Show More</button>
        </div>

        )}
      </div>
      <Footer/>
    </div>
  )
}

export default Ideas