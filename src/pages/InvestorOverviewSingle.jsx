import React from "react";
// import overview from "/overview.png";
export default function InvestorOverviewSingle() {
  return (
    <div>
      <div className="relative w-full h-lvh mt-5">
        <img
          src="./investors/overview.png"
          alt="image.."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-left">
            <p className="text-xs sm:text-base">Let's have a look</p>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">Contact Us</h1>
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
      <div className="w-[80%] mx-auto text-gray-500">
        <div className="my-5 sm:my-10">
          <p className="text-lg">For all local and international</p>
          <h2 className="text-blue-800 text-4xl font-medium underline mb-2 mt-1">
            Enquiries
          </h2>
          <p className="text-lg font-medium">Please use the below form</p>
        </div>
        <form className="mt-5 mb-20">
          <div className="my-10">
            <div className="w-fit">
              <label htmlFor="region" className="text-2xl text-gray-700">
                Your Region of Interest
              </label>
              <hr className="border-blue-700 border-[1px]" />
            </div>
            <select
              name=""
              id="region"
              className="bg-transparent w-full py-2 px-4 border border-gray-900 shadow-md shadow-gray-300 my-2"
            >
              <option value="">Global</option>
            </select>
          </div>
          <div className="my-10">
            <div className="w-fit">
              <label htmlFor="area" className="text-2xl text-gray-700">
                Your Area of Interest
              </label>
              <hr className="border-blue-700 border-[1px]" />
            </div>
            <select
              name=""
              id="area"
              className="bg-transparent w-full py-2 px-4 border border-gray-900 shadow-md shadow-gray-300 my-2"
            >
              <option value="">Brand Identity</option>
            </select>
          </div>
          <div className="my-5">
            <div className="w-fit">
              <label htmlFor="message" className="text-2xl text-gray-700">
                What do you want to say?*
              </label>
              <hr className="border-blue-700 border-[1px]" />
            </div>
            <textarea
              name=""
              id="message"
              rows={8}
              required
              className="bg-transparent w-full py-2 px-4 border outline-none border-gray-900 shadow-md shadow-gray-300 my-2"
            ></textarea>
          </div>
          <div className="flex gap-2 w-full md:w-[50%]">
            <input
              type="text"
              id="fname"
              className="bg-transparent w-full  py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
              placeholder="First Name*"
              required
            />
            <label htmlFor="fname" className="text-3xl">
              *
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-[50%]">
            <input
              type="text"
              id="lname"
              className="bg-transparent w-full  py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
              placeholder="Last Name*"
              required
            />
            <label htmlFor="lname" className="text-3xl">
              *
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-[50%]">
            <input
              type="email"
              id="email"
              className="bg-transparent w-full  py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
              placeholder="Email Address*"
              required
            />
            <label htmlFor="email" className="text-3xl">
              *
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-[50%] ">
            <div className="flex w-full gap-2">
              <select
                name=""
                id="selectphone"
                className="bg-transparent w-[30%] py-2 px-4 border border-gray-900 shadow-md shadow-gray-300 my-2"
              >
                <option value="">US:+1</option>
                <option value="">PK:+92</option>
              </select>
              <input
                type="number"
                id="phone"
                className="bg-transparent w-[70%] sm:w-full py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
                placeholder="00 0000 000 00*"
                required
              />
            </div>
            <label htmlFor="fname" className="text-3xl">
              *
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-[50%]">
            <input
              type="text"
              id="company"
              className="bg-transparent w-full  py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
              placeholder="Company*"
              required
            />
            <label htmlFor="company" className="text-3xl">
              *
            </label>
          </div>
          <div className="flex gap-2 w-full md:w-[50%]">
            <input
              type="text"
              id="job"
              className="bg-transparent w-full  py-2 px-4 outline-none border border-gray-900 shadow-gray-300 shadow-md my-2"
              placeholder="Job Title*"
              required
            />
            <label htmlFor="job" className="text-3xl">
              *
            </label>
          </div>
          <div className="my-5 sm:my-10 md:w-[70%]">
            <p>
              When you click submit we will store and process your personal data
              that you have entered above. Our privacy policy is{" "}
              <span className="text-gray-900 font-semibold underline hover:opacity-80 cursor-pointer">
                here
              </span>
              , please read this to understand how we handle and use your
              personal information and to understand your rights with regard to
              your personal data that we process.
            </p>
          </div>
          <button type="submit" className="px-6 py-1 bg-gray-700 text-white font-semibold underline hover:opacity-80">Submit</button>
        </form>
      </div>
    </div>
  );
}
