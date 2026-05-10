import footerLogo from "../assets/logofooter.svg";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaBehance, FaDribbble, FaTiktok } from "react-icons/fa";

const footerLinks = [

  { title: "Expertise", Link: "/expertise" },
  { title: "Insights", Link: "/insights" },
  { title: "News", Link: "/news" },
  { title: "Careers", Link: "/careers" },
  { title: "Investors", Link: "/investors" },
];

const social_icons = ["whatsapp", "facebook", "twitter", "ball", "pinterest", "linkedin", "bing", "tictok"];

const Footer = () => {

  return (
    <footer className="bg-[#1E2832] text-[#727277] text-sm sm:text-base">
      <section className="bg-[#1E2832] border-t border-gray-100" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <div className="flex items-center">
                  <img src={footerLogo} alt="Blucom Logo" className="h-24 w-auto" />
                  <span className="ml-2 text-xl font-semibold text-gray-900"></span>
                </div>
                <p className="mt-4 text-base text-gray-500 max-w-xs">
                  Empowering businesses with smart, scalable digital solutions that simplify operations, enhance efficiency, and drive measurable growth.
                </p>


                <div className="mt-6 flex space-x-6">
                  < a href="#" className="text-gray-400 hover:text-gray-500" aria-label="Whatsapp">
                    <  span className="sr-only">Whatsapp</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>

                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <h3 className="text-base font-medium text-gray-500">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Get the latest updates, tips, and product news delivered straight to your inbox.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-transparent border border-gray-300  shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring--emerald-500 focus:border-emerald-500 focus:placeholder-gray-400" placeholder="Enter your email" />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full bg-emerald-500 border border-transparent  py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--emerald-500">
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  About Us
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a href="./About" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200 ">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="./Work" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a href="./ideas" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Insights
                    </a>
                  </li>
                  <li>
                    <a href="./news " className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="./careers " className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="./investors" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Startups
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Small Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Agencies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For E-commerce
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Enterprise
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      GDPR Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="pt-8 md:flex md:items-center md:justify-center">
              <div className="space-y-3 md:space-y-0 md:flex md:space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>connect@blucomtechnologies.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+92-303-5907230 | +92-334-0011126</span>

                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>1st Floor, Al-Rehman Chamber, 79 East AKM Fazl-ul-Haq Rd Block, Blue Area, Islamabad.</span>
                </div>
              </div>

            </div>


            <div className="pt-8 md:flex md:items-center md:justify-center">
              <div className="space-y-3 md:space-y-0 md:flex md:space-x-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <span>
                    &copy; 2026 Blucomtechnologies, Inc. All rights reserved.
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
</footer>
  );
};

export default Footer;

