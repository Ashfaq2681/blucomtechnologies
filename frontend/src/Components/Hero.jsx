// Hero.jsx
import React from "react";
import landingImg from "/landing/heroimage.svg";


const Hero = () => {
  return (
    <section className="relative flex flex-col justify-left items-left h-screen bg-gray-50 overflow-hidden text-left px-6">
      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto px-8 md:px-32 h-lvh">
          <img src={landingImg} alt="Brand Strategy & Digital Solutions" className="w-[200px] lg:w-[400px] xl:w-[850px] h-[182px] lg:h-[300px] xl:h-[600px]" />
          <div className="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center">
            <span className="text-2xl text-gray-500"> Brand Strategy & <br />
              <span className="text-6xl text-emerald-500 underline decoration-8 decoration-green-300"> Digital Marketing Agency <br /></span>
              Every Great Brand Starts With an Idea </span>
            <div className="mt-24"> <a href="/" className="text-3g text-gray-500"> We are a creative & Brand Strategy agency in Islamabad that blends strategy,
              design, and technology to help businesses stand out in the digital world. From startups launching their first product to established companies looking
              to scale, we create solutions that elevate brands and deliver measurable results. </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default Hero;