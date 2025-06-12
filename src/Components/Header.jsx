import { useState } from "react";
import { Link } from "react-router-dom";

let nav_links = [
  {title: "About us", link: "/about"},
  {title: "Work", link: "/work"},
  {title: "Blog", link: "/blog"},
  {title: "Ideas", link: "/ideas"},
  {title: "News", link: "/news"},
  {title: "Careers", link: "/careers"},
  {title: "Investors", link: "/investors"},
  {title: "Contact", link: "/contact"},
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center px-8 shadow-xl py-[14px]">
        <a href="/" aria-label="blucomtechnologies Home">
          <div className="flex items-center">
            <div className="flex justify-center w-[50px] h-[50px] border-2 border-[#727277] p-[10px]">
              <img
                loading="lazy"
                src="/logo.svg"
                alt="blucomtechnologies Logo"
                className="w-[16px]"
              />
            </div>
            <div className="uppercase leading-none ml-[20px] font-bold text-[#727277] text-[16px]">
              <p>Blu</p>
              <p>Square</p>
              <p className="text-[12px] font-light leading-[1.4]">Communications</p>
            </div>
          </div>
        </a>
        <div className="hidden md:flex flex-row justify-center items-center md:gap-7 lg:gap-14 xl:gap-20">
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="font-[16px] text-[#727277] hover:text-black"
              aria-label={item.title}
            >
              {item.title}
            </Link>
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
