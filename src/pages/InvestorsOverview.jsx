import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function InvestorsOverview() {
  return (
    <div className="">
      <Header/>
      <div className="relative w-full h-lvh">
        <img
          src="./investors/overview.png"
          alt="image.."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <p className="text-xs sm:text-base">Let&apos;s have a look</p>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              Investor Overview
            </h1>
            <p className="text-xs sm:text-base">
              Found what you are looking for?
            </p>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <h1 className=" text-lg sm:text-2xl lg:text-4xl">
              It&apos;s who we are.
            </h1>
            <h1 className=" text-lg sm:text-2xl lg:text-4xl">
              It&apos;s what we&apos;re about
            </h1>
            <p className="text-xs sm:text-base">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </div>
      <div className="">
      <div className="flex sm:flex-row flex-col justify-between bg-blue-900 rounded-md pl-2 items-center w-60 sm:w-80 sticky top-12 left-full">
            <img src="/investors/book.png" alt="img.." className="w-24 h-44" />
            <div className=" text-gray-200 p-4 rounded">
              <p className="text-sm">Some of our</p>
              <h2 className="text-2xl font-medium underline text-white">
                Global AI Index
              </h2>
              <p className="text-sm">Risk Takers, opportunity makers</p>
              <p className="text-xs">
                {" "}
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer
              </p>
              <button className="bg-gray-100 text-blue-900 mt-2 p-1 w-full">
                Download Now
              </button>
            </div>
          </div>
        <div className="w-[80%] mx-auto lg:my-48 my-10 sm:my-14 md:my-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-center gap-8 ">
            <div className="w-full sm:w-52 text-gray-600 p-1">
              <p className="text-lg">Company </p>
              <p>Performance</p>
              <h2 className="text-blue-800 text-4xl font-medium underline">
                Q1
              </h2>
              <p className="text-lg font-semibold">
                Risk Takers, opportunity makers
              </p>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights with impactful content to get your
                brand from the top of the list to the dotted line.
              </p>
            </div>
            <div className="w-full sm:w-52 text-gray-600 p-1">
              <p className="text-lg">Company </p>
              <p>Performance</p>
              <h2 className="text-blue-800 text-4xl font-medium underline">
                Q2
              </h2>
              <p className="text-lg font-semibold">
                Risk Takers, opportunity makers
              </p>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights with impactful content to get your
                brand from the top of the list to the dotted line.
              </p>
            </div>
            <div className="w-full sm:w-52 text-gray-600 p-1">
              <p className="text-lg">Company </p>
              <p>Performance</p>
              <h2 className="text-blue-800 text-4xl font-medium underline">
                Q3
              </h2>
              <p className="text-lg font-semibold">
                Risk Takers, opportunity makers
              </p>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights with impactful content to get your
                brand from the top of the list to the dotted line.
              </p>
            </div>
            <div className="w-full sm:w-52 text-gray-600 p-1">
              <p className="text-lg">Company </p>
              <p>Performance</p>
              <h2 className="text-blue-800 text-4xl font-medium underline">
                Q4
              </h2>
              <p className="text-lg font-semibold">
                Risk Takers, opportunity makers
              </p>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights with impactful content to get your
                brand from the top of the list to the dotted line.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="text-gray-600 p-1">
              <p>Some of our </p>
              <h2 className="text-blue-800 text-4xl font-medium underline py-1">
                Presentations
              </h2>
              <p> Risk Takers, opportunity makers</p>
              <ul className="text-blue-800 pt-6">
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
                <li className="flex items-center">
                  <img src="./icons/adobe_pdf" alt="adobe_pdf" /> Fiscal Year 2022 Report
                </li>
              </ul>
            </div>
            <div className="text-gray-600">
              <p>Some of our </p>
              <h2 className="text-blue-800 text-4xl font-medium underline pt-1 pb-4">
                Events
              </h2>
              <div className="bg-gray-300 h-64">
                <img src="" alt="" />
              </div>
              <div className="">
                <h2 className="text-4xl font-medium underline py-2">
                  Your Event Title Here
                </h2>
                <p>
                  {" "}
                  As the most awarded B2B branding agency in Texas, we know how
                  to combine customer insights
                </p>
                <Link to={`/overviewsingle`} className="underline font-semibold hover:text-black">
                  Read Report
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 sm:mt-20 mt-12">
            <div className="text-gray-600">
              <p>Some of our </p>
              <h2 className="text-blue-800 text-4xl font-medium underline pt-1 pb-4">
                Press Release
              </h2>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights.
              </p>
              <button className="underline font-semibold hover:text-black">
                Read Report
              </button>
            </div>
            <div className="text-gray-600">
              <p>Some of our </p>
              <h2 className="text-blue-800 text-4xl font-medium underline pt-1 pb-4">
                Press Release
              </h2>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights.
              </p>
              <button className="underline font-semibold hover:text-black">
                Read Report
              </button>
            </div>
            <div className="text-gray-600">
              <p>Some of our </p>
              <h2 className="text-blue-800 text-4xl font-medium underline pt-1 pb-4">
                Press Release
              </h2>
              <p>
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights.
              </p>
              <button className="underline font-semibold hover:text-black">
                Read Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
