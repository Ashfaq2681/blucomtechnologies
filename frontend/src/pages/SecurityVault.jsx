import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../Components/Button";

const ForbiddenVault = () => {
  return (
    <section className="bg-[#0F172A] min-h-screen flex items-center justify-center overflow-hidden relative">
      <Helmet>
        <title>403 - Access Denied | Blucom Technologies</title>
      </Helmet>

      {/* Decorative background element: A faint grid or radial gradient */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-20 py-10 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Visual "Keyhole/Shield" element */}
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
                   <div className="w-48 h-48 md:w-60 md:h-60 border-2 border-emerald-500/40 rounded-full flex items-center justify-center">
                      <span className="text-emerald-500 text-8xl font-bold italic tracking-tighter">403</span>
                   </div>
                </div>
                {/* Small floating "Access Denied" tag */}
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-mono rounded-sm rotate-12 shadow-lg">
                  LOCKED
                </div>
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-emerald-400 font-mono mb-4 block tracking-widest uppercase text-sm">
              Error: Authentication_Required
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Access is <br />
              <span className="text-emerald-500 underline decoration-8 decoration-white/20 underline-offset-4">
                Restricted
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Your current digital identity does not have the required clearance to interact with this asset. This journey mapping requires higher-level permissions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <Link to="/">
                <Button variant="emerald">Return to Base</Button>
              </Link>
              <Link to="/ContactForm" className="mt-10 text-gray-300 hover:text-emerald-400 transition duration-300 cursor-pointer border-b border-gray-600 hover:border-emerald-400 pb-1">
                <span >
                  Request Clearance
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom stylized footer for the page */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-gray-600 font-mono text-xs uppercase tracking-widest gap-4">
          <span>Blucom_Security_Protocol_v2.0</span>
          <span>© 2026 Blucom Technologies</span>
          <span>Blue Area, Islamabad</span>
        </div>
      </div>
    </section>
  );
};

export default ForbiddenVault;