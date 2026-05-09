// src/pages/MaterialLanding.jsx
import React from "react";
import { 
  Home, 
  Layers, 
  Phone, 
  Rocket 
} from "lucide-react";

const MaterialCard = ({ title, description, buttonText, Icon }) => (
  <div className="bg-white shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between">
    
    {/* Icon */}
    <div className="mb-4">
      <Icon className="w-10 h-10 text-primary" />
    </div>

    <h3 className="text-primary text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>

    <button className="mt-auto px-4 py-2 bg-primary text-white hover:bg-primary/90 transition">
      {buttonText}
    </button>
  </div>
);

const MaterialLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        
        {/* Logo replaced with icon */}
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <Rocket className="w-6 h-6" />
          MaterialDemo
        </div>

        {/* Nav (no links, just UI) */}
        <nav className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Home className="w-5 h-5" />
            Features
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Layers className="w-5 h-5" />
            Services
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Phone className="w-5 h-5" />
            Contact
          </div>
        </nav>

        <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Build Beautiful Websites
        </h1>
        <p className="text-gray-700 text-lg mb-6 max-w-xl">
          Using modern design principles. Responsive, fast, and user-friendly.
        </p>
        <button className="px-6 py-3 bg-primary text-white hover:bg-primary/90 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <MaterialCard
            title="Responsive Design"
            description="Looks great on all devices, from mobile to desktop."
            buttonText="Learn More"
            Icon={Home}
          />
          <MaterialCard
            title="Material Components"
            description="Clean UI components following modern design."
            buttonText="Learn More"
            Icon={Layers}
          />
          <MaterialCard
            title="Fast Performance"
            description="Optimized for speed and scalability."
            buttonText="Learn More"
            Icon={Rocket}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="mb-8 text-lg">
            Build modern and scalable interfaces with ease.
          </p>
          <button className="px-8 py-4 bg-white text-primary hover:bg-gray-200 transition">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 text-primary font-bold text-lg mb-4 md:mb-0">
            <Rocket className="w-5 h-5" />
            MaterialDemo
          </div>

          <p className="text-gray-600">
            © 2026 MaterialDemo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MaterialLanding;