import { useState } from "react";
import { nav_links } from ".";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-row justify-between md:justify-center md:gap-5 lg:gap-14 xl:gap-20 items-center px-8 shadow-xl py-6 -mb-5fixed top-0 left-0 w-full bg-[#ffffff] shadow-md z-50">
        <a href="/" aria-label="blucomtechnologies Home">
          <img
            loading="lazy"
            src="./src/assets/logo.svg"
            alt="blucomtechnologies Logo"
            className="h-[31px] w-[170px] md:h-[31px] md:w-[146px]"
          />
        </a>
        <div className="hidden md:flex flex-row justify-center items-center md:gap-7 lg:gap-14 xl:gap-20">
          {nav_links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-[16px] text-[#727277] hover:text-black"
              aria-label={item.title}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex md:hidden relative">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <img
              loading="lazy"
              src={mobileMenuOpen ? "./header/close.svg" : "./header/menuBar.png"}
              className="h-6 w-8"
              alt={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-hidden="true"
            />
          </button>
          <div
            className={`${mobileMenuOpen ? "flex" : "hidden"} p-10 border border-gray-300 rounded-lg items-center flex-col absolute top-0 left-0 bg-white mt-[30px] gap-[10px] w-auto -ml-[100px]`}
            role="menu"
          >
            {nav_links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-[16px] text-[#727277] hover:text-black"
                role="menuitem"
                aria-label={item.title}
              >
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
