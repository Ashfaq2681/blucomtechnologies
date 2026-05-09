import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../Components/Button";

const NotFound = () => {
  return (
    <section className="bg-[#F8FAFC] min-h-screen flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Blucom Technologies</title>
      </Helmet>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-32 flex flex-col items-center text-center">
        {/* Large faint background text */}
        <span className="text-[120px] md:text-[200px] font-bold text-emerald-500/10 leading-none absolute select-none">
          404
        </span>
        
        <div className="relative z-10">
          <span className="text-2xl text-gray-500 block mb-2">
            Lost? Let’s redirect you to
          </span>
          <h1 className="text-5xl md:text-7xl text-emerald-500 underline decoration-8 decoration-green-300 mb-8">
             Growth
          </h1>
          
          <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12">
            The page you’re looking for is currently outside our digital map. 
            Let’s get your brand back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="black">Back to Home</Button>
            </Link>
            <Link to="/About">
              <Button variant="gray">Explore Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;