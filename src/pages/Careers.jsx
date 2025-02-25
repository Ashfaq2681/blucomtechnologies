import React from "react";
const links = [
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
  { src: "./career/link.png", url: "We Got Link" },
];
const jobs = [
  {
    title: "Associate Creative Director",
    description:
      "We choose our people more carefully. We bring them in if we think they're good fit, regardless of whether we have work for them right away. We choose our peaople more carefully. We bring them in if they are good fit, regardless of whteher we have work for them right away",
    graduation: "Min Bachlors",
    experience: "8+ Years",
    prefrence: "Telco Experemce Would be Perffrered",
  },
  {
    title: "Client Relationship Manager",
    description:
      "We choose our people more carefully. We bring them in if we think they're good fit, regardless of whether we have work for them right away. We choose our peaople more carefully. We bring them in if they are good fit, regardless of whteher we have work for them right away",
    graduation: "Min Bachlors",
    experience: "8+ Years",
    prefrence: "Telco Experemce Would be Perffrered",
  },
  {
    title: "Account Manager",
    description:
      "We choose our people more carefully. We bring them in if we think they're good fit, regardless of whether we have work for them right away. We choose our peaople more carefully. We bring them in if they are good fit, regardless of whteher we have work for them right away",
    graduation: "Min Bachlors",
    experience: "8+ Years",
    prefrence: "Telco Experemce Would be Perffrered",
  },
  {
    title: "Mr. Visualizer",
    description:
      "We choose our people more carefully. We bring them in if we think they're good fit, regardless of whether we have work for them right away. We choose our peaople more carefully. We bring them in if they are good fit, regardless of whteher we have work for them right away",
    graduation: "Min Bachlors",
    experience: "8+ Years",
    prefrence: "Telco Experemce Would be Perffrered",
  },
];
export default function Careers() {
  return (
    <div>
      <div className="relative w-full">
        <img
          src="/career/careers.png"
          alt="image.."
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <p className="text-xs sm:text-base">Open Positions</p>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
              Sr. Creative Director
            </h1>
            <p className="text-xs sm:text-base">
              Found what you are looking for?
            </p>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <h1 className=" text-lg sm:text-2xl lg:text-4xl">
              It's who we are.
            </h1>
            <h1 className=" text-lg sm:text-2xl lg:text-4xl">
              It's what we're about
            </h1>
            <p className="text-xs sm:text-base">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#00AE80]  md:py-20 py-10">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col-reverse sm:flex-row w-full gap-6 justify-between items-center">
            <div className="text-gray-100">
              <p>Aurthor</p>
              <h1 className="text-white text-4xl my-1">Polly Row</h1>
              <p>Partner Ships manager</p>
            </div>
            <div className="bg-gray-300 h-72 sm:w-[50%] w-full">
              <img src="" alt="img.." />
            </div>
          </div>
          <div className="text-gray-100 mt-10 sm:mt-20">
            <p>Found What you are looking for?</p>
            <h1 className="text-white text-4xl my-1">
              Exploring some of the key topics
            </h1>
            <p>
              Let's discuss As the most awarded B2B branding agency in Texas, we
              know how to combine customer insight with impactful content to get
              your brand from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="text-gray-600 grid sm:grid-cols-3 grid-cols-2 md:w-[65%] my-10 sm:my-20  mx-auto">
          {links.map((link, key) => (
            <div className="flex flex-col items-center" key={key}>
              <img src={link.src} alt="img" className="h-32" />
              <p className="text-2xl hover:underline hover:text-gray-800 cursor-pointer">
                {link.url}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center my-10 sm:my-20 justify-between">
          <div className="text-gray-500 sm:w-[50%]">
            <p className="text-lg">Some of our</p>
            <h1 className="text-[#00AE80] text-4xl font-medium underline my-1">
              Dear Rule Breaker
            </h1>
            <p className="text-lg font-medium pb-10">
              Risk Takers, opportunity makers
            </p>
            <p>
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insights with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
            <button className="bg-gray-800 px-2 text-lg mt-8 text-white hover:opacity-80">
              Come Join Us
            </button>
          </div>
          <div className="sm:w-[50%]">
            <img src="./career/rulebreaker.png" alt="img.." className="" />
          </div>
        </div>
        <div className="">
          <div className="text-gray-600">
            <p className="text-lg">Some of our</p>
            <h1 className="text-[#00AE80] text-4xl font-medium underline mb-2 mt-1">
              Open Positions
            </h1>
            <p className="text-lg font-medium">
              Risk Takers, opportunity makers
            </p>
          </div>
          <div className="text-gray-600">
            {jobs.map((job,key)=>(
            <div className="my-8" key={key}>
                <h1 className="text-2xl underline my-2 text-gray-800">{job.title}</h1>
                <p>{job.description}</p>
                <h2 className="text-gray-800 font-bold text-lg my-1">Preffered Qualifications</h2>
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="flex gap-2 border-r-2 border-gray-600 px-4">
                        <p>Graduations:</p>
                        <p>{job.graduation}</p>
                    </div>
                    <div className="flex gap-2 border-r-2 border-gray-600 px-4">
                        <p>Industry Experience:</p>
                        <p>{job.experience}</p>
                    </div>
                    <div className="flex gap-2 border-gray-600 px-4">
                        <p>Preference:</p>
                        <p>{job.prefrence}</p>
                    </div>
                </div>
                <button className="bg-gray-700 text-white font-semibold px-4 text-lg mt-2 hover:opacity-80">Apply</button>
            </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
