// src/Components/Button.jsx
import React from "react";

const Button = ({ 
  variant = "white",   // color: white, black, gray, emerald
  outline = false,     // false = filled, true = outlined
  children, 
  className = "", 
  ...props 
}) => {

  const baseClasses = "font-bold px-4 py-2 w-40 text-center mt-10 cursor-pointer transition-colors duration-300";

  const variants = {
    white: {
      filled: "bg-white text-gray-900 border border-gray-400 hover:bg-gray-100",
      outline: "bg-transparent text-gray-900 border border-gray-400 hover:bg-gray-100"
    },
    black: {
      filled: "bg-black text-white border border-black hover:bg-gray-800",
      outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white"
    },
    gray: {
      filled: "bg-gray-600 text-white border border-gray-700 hover:bg-gray-700",
      outline: "bg-transparent text-gray-900 border border-gray-600 hover:bg-gray-600 hover:text-white"
    },
    emerald: {
      filled: "bg-emerald-500 text-white border border-emerald-500 hover:bg-emerald-600",
      outline: "bg-transparent text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white"
    }
  };

  const styleClass = outline ? variants[variant].outline : variants[variant].filled;

  return (
    <button className={`${baseClasses} ${styleClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;