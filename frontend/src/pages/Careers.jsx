import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);  // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setSubmitted(true);  // Show the success message after form submission
  };

  return (
    <>
      <Helmet>
        <title>Blucom Technologies | Web Design & Digital Marketing Experts</title>
        <meta
          name="description"
          content="Boost your brand with Blucom Technologies. Expert in web design, brand strategy, SEO, and high-end product marketing."
        />
        <meta
          name="keywords"
          content="technology services, web design, brand strategy, SEO, digital marketing, advertising, content marketing, corporate identity, product marketing, UX design, branding solutions, performance marketing, lead generation, social media strategy"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blucom Technologies | Web Design & Digital Marketing Experts" />
        <meta property="og:description" content="Expert in web design, brand strategy, SEO, and high-end product marketing." />
        <meta property="og:image" content="https://blucomtechnologies.com/og-image.jpg" />
        <meta property="og:url" content="https://blucomtechnologies.com/" />
        <link rel="canonical" href="https://blucomtechnologies.com/" />
      </Helmet>

      <section className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Have an idea? Let's talk!</p>
          <h1 className="text-[60px] text-[#00AF80] underline decoration-[#1E2832] decoration-4">
            What you're Thinking?
          </h1>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full max-w-[1300px] px-10 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
              <input type="text" className="landingInput" placeholder="First Name*" required />
              <input type="text" className="landingInput" placeholder="Last Name*" required />
              <input type="email" className="landingInput" placeholder="Email*" required />
              <input type="text" className="landingInput" placeholder="Company Name*" required />
            </div>

            <input type="text" className="landingInput" placeholder="Your Title" required />
            <textarea className="landingInput" placeholder="What you want to say?" required />

            <button
              type="submit"
              className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-[24px] text-[#00AF80] font-bold mt-10">
            <p>Thank you for contacting us! We'll get back to you soon.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
