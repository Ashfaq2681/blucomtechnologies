import footerLogo from "../assets/logofooter.svg";
import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { subscribeToNewsletter } from "../api/leads";

const socialLinks = [
  { label: "Whatsapp", href: "https://wa.me/923035907230", Icon: FaWhatsapp },
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebook },
  { label: "Twitter", href: "https://twitter.com/", Icon: FaTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedin },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      return;
    }

    try {
      setError("");
      setStatus("");
      setIsSubmitting(true);
      await subscribeToNewsletter({ email: normalizedEmail, source: "site_footer" });
      setEmail("");
      setStatus("Subscribed. Thanks for joining.");
    } catch (submitError) {
      console.error("[newsletter][footer]", submitError);
      setError("Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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


                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-emerald-400/50 hover:bg-emerald-500 hover:text-white"
                      aria-label={label}
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <h3 className="text-base font-medium text-gray-500">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Get the latest updates, tips, and product news delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="mt-4 sm:flex sm:max-w-md" aria-label="Footer newsletter subscription form">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email-address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-transparent border border-gray-300  shadow-sm py-2 px-4 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-500 border border-transparent  py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                </form>
                {status && (
                  <p className="mt-3 text-sm font-medium text-emerald-400" role="status">
                    {status}
                  </p>
                )}
                {error && (
                  <p className="mt-3 text-sm font-medium text-rose-400" role="alert">
                    {error}
                  </p>
                )}
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
                    <a href="/about" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/work" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a href="/ideas" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Insights
                    </a>
                  </li>
                  <li>
                    <a href="/news" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/investors" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
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
                    <a href="/for-startups" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Startups
                    </a>
                  </li>
                  <li>
                    <a href="/for-small-business" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Small Business
                    </a>
                  </li>
                  <li>
                    <a href="/for-agencies" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For Agencies
                    </a>
                  </li>
                  <li>
                    <a href="/for-ecommerce" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      For E-commerce
                    </a>
                  </li>
                  <li>
                    <a href="/enterprise" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
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
                    <a href="/documentation" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/guides" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="/api-reference" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/community" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
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
                    <a href="/about" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/press" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="/partners" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
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
                    <a href="/privacy-policy" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/cookie-policy" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="/gdpr-compliance" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
                      GDPR Compliance
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="text-base text-gray-600 hover:text-emerald-500 transition-colors duration-200">
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

