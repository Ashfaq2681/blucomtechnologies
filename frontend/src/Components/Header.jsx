import { useState } from "react";
import { nav_links } from ".";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-row justify-between md:justify-center md:gap-5 lg:gap-14 xl:gap-20 items-center px-8 shadow-[0_4px_6px_rgba(0,0,0,0.05)] py-6">
        <Link to="/">
          <img
            loading="lazy"
            src="/logo main.svg"
            alt="mainLogo"
            className="h-[31px] w-[170px] md:h-[31px] md:w-[146px]"
          />
        </Link>
        <div className="hidden md:flex flex-row justify-center items-center md:gap-7 lg:gap-14 xl:gap-20">
        {nav_links.map((item, index) => (
          <Link key={index} to={item.link} className="font-[16px] text-[#727277] hover:text-black">
            {item.title}
          </Link>
        ))}
        </div>
        <div className="flex md:hidden relative">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <img loading="lazy" src={mobileMenuOpen ? "./header/close.svg" : "./header/menuBar.png"} className="h-6 w-8" aria-hidden="true" />
          </button>
          <div className={`${mobileMenuOpen ? "scale-y-100" : "scale-y-0"} transition-transform duration-300 origin-top flex p-10 border border-gray-300 rounded-lg items-center flex-col absolute top-12 right-0 bg-white gap-[10px] w-auto z-[1000]`}>
            {nav_links.map((item, index) => (
              <Link key={index} to={item.link} className="font-[16px] text-[#727277] hover:text-black">
              {item.title}
            </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
