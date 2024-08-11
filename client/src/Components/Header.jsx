import { useState } from "react";
import { nav_links } from ".";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-row justify-between md:justify-center md:gap-5 lg:gap-14 xl:gap-20 items-center px-8 shadow-xl py-6 -mb-5">
        <a href="/">
          <img
            loading="lazy"
            src="./header/Logo_main.png"
            alt="mainLogo"
            className="h-[31px] w-[170px] md:h-[31px] md:w-[146px]"
          />
        </a>
        <div className="hidden md:flex flex-row justify-center items-center md:gap-7 lg:gap-14 xl:gap-20">
        {nav_links.map((item, index) => (
          <a key={index} href={item.link} className="font-[16px] text-[#727277] hover:text-black">
            {item.title}
          </a>
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
          <div className={`${mobileMenuOpen ? "flex" : "hidden"} p-10 border border-gray-300 rounded-lg items-center flex-col absolute top-0 left-0 bg-white mt-[30px] gap-[10px] w-auto -ml-[100px]`}>
            {nav_links.map((item, index) => (
              <a key={index} href={item.link} className="font-[16px] text-[#727277] hover:text-black">
              {item.title}
            </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
