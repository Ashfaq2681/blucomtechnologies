import { Helmet } from "react-helmet";
import Hero from "../Components/landing/Hero";
import LetsGetStarted from "../Components/landing/LetsGetStarted";
import Portfolio from "../Components/landing/Portfolio";
import Services from "../Components/landing/Services";
import Blog from "../Components/landing/Blog";
import Ideas from "../Components/landing/Ideas";
import ContactForm from "../Components/landing/ContactForm";

const LandingSeo = () => (
  <Helmet>
    <title>blucomtechnologies | Brand Strategy & Digital Solutions</title>
    <meta
      name="description"
      content="blucomtechnologies specializes in brand positioning, digital marketing, UX/UI design, and SEO-driven strategies for businesses."
    />
    <meta
      name="keywords"
      content="Brand Strategy, Digital Marketing, SEO, UX/UI Design, Content Marketing, Web Development, Social Media Marketing"
    />
    <meta name="author" content="blucomtechnologies" />
    <meta property="og:title" content="blucomtechnologies - Brand Strategy & Digital Solutions" />
    <meta
      property="og:description"
      content="We offer top-notch digital solutions including SEO, brand strategy, UX/UI design, and content marketing to scale your business."
    />
    <meta property="og:image" content="https://www.blucomtechnologies.com/preview.jpg" />
    <meta property="og:url" content="https://www.blucomtechnologies.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="blucomtechnologies - Brand Strategy & Digital Solutions" />
    <meta name="twitter:description" content="Expert brand positioning, SEO, and UX/UI design strategies." />
    <meta name="twitter:image" content="https://www.blucomtechnologies.com/preview.jpg" />
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "blucomtechnologies",
          "url": "https://www.blucomtechnologies.com",
          "logo": "https://www.blucomtechnologies.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/blucomtechnologies",
            "https://www.linkedin.com/company/blucomtechnologies",
            "https://twitter.com/blucomtech"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1234567890",
            "contactType": "customer service",
            "areaServed": "Worldwide",
            "availableLanguage": "English"
          }
        }
      `}
    </script>
  </Helmet>
);

const Landing = () => {
  return (
    <section>
      <LandingSeo />
      <Hero />
      <LetsGetStarted />
      <Portfolio />
      <Services />
      <Blog />
      <Ideas />
      <ContactForm />
    </section>
  );
};

export default Landing;
