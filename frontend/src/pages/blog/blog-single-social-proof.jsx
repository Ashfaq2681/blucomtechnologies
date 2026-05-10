import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

export default function BlogSingle() {
  const [showMore, setShowMore] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // Fetch all article details from the server
  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await axios.get("http://localhost:4000/api/user/getarticles");
        if (result && result.data.data) {
          setBlogs(result.data.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticles();
  }, []);
  const handleShowMore = () => {
    setShowMore(true);
  };

  // Schema Markup (JSON-LD) for the article
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Social Proof is Every Marketer’s Secret Sauce",
    "description": "trust is the currency that determines which brands thrive and which fade into obscurity. And nothing builds trust quite like social proof.",
    "author": {
      "@type": "Person",
      "name": "Polly Row"
    },
    "publisher": {
      "@type": "AdvertisingAgency",
      "name": "BlucomTechnologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blucomtechnologies.com/logo.png"
      }
    },
    "image": "https://blucomtechnologies/images/summit.jpg",
    "datePublished": "2022-03-15",
    "dateModified": "2022-03-16"
  };

  return (
    <div>
      {/* SEO Metadata using Helmet */}
      <Helmet>
        <title>The Science Behind Social Proof, how advertisers can take leverage from it.</title>
        <meta name="description" content="The Science Behind Social Proof" />
        <meta name="keywords" content="Why Social Proof is Every Marketer’s Secret SecretSauce, Social proof marketing
Customer trust strategies,
Digital influence tactics,
User-generated content benefits,
Brand credibility building,
Persuasive marketing techniques,
Influencer endorsement impact,
BlucomTechnologies" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Blog Content */}
      <div className="relative w-full">
        <img
          src="./career/careers.png"
          alt="Why Social Proof is Every Marketer’s Secret Sauce"
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
            </h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">The Science Behind Social Proof</h1>
            <h3>Brand Credibility Building</h3>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">
              Trust is the currency that determines which brands thrive and which fade into obscurity.
              And nothing builds trust quite like social proof.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#00AE80]  md:py-20 py-10">
          <div className="w-[80%] mx-auto">
            <div className="text-gray-100">
              <p>Social proof marketing </p>
              <h1 className="text-white text-4xl my-1">
                Your next favourite product is already winning hearts
              </h1>
              <p>
                Coined by psychologist Robert Cialdini, social proof refers to the psychological phenomenon
                where people mirror the behaviors of others when uncertain about a decision. This is why we
                instinctively check reviews before making a purchase, why testimonials influence our choices,
                and why brands leverage influencers to validate their credibility.
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
              <div className="text-gray-100 sm:w-[50%]">
                <p>Digital Advertising Space</p>
                <h1 className="text-white text-4xl my-1">Brand credibility building
                </h1>
              </div>
              <div className="text-gray-100 sm:w-[50%]">
                <p>Aurthor</p>
                <h1 className="text-white text-4xl my-1">Polly Row</h1>
                <p>Creative Advertising Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto text-gray-500 my-10 sm:my-20">
          <p>Customer trust strategies
          </p>
          <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
            The power of social proof lies in its ability to reassure,
            validate, and persuade consumers by showing them thatothers, especially
            those they admire trust a product, service, or brand.

          </h1>
          <p className="my-6">
            User-Generated Content (UGC) – Whether it’s an Instagram story featuring
            your product or an unboxing video on YouTube, authentic content from real
            users builds credibility in ways that no scripted ad ever could. Studies
            show that UGC can increase conversions by 161%.

          </p>
          <p>
            Customer Reviews & Ratings{" "}
            <span className="text-black font-semibold">
              According to BrightLocal, 98% of consumers read online reviews for local businesses,
            </span>
            And 79% trust them as much as personal recommendations. If your brand isn’t prioritizing reviews,
            you’re leaving money on the table.
          </p>
          {/*Quotes UI Starts Here*/}
          <div className="relative max-w-3xl mx-auto text-left py-[142px]">
            <q className="relative inline-block text-black text-[3rem] leading-snug font-light 
                before:content-['“'] before:text-[#00AE80] before:text-[12rem] before:leading-none before:absolute before:-left-16 before:top-[-60px]
                after:content-['”'] after:text-[#00AE80] after:text-[12rem] after:leading-none after:absolute after:left-full after:top-[10px]">
              Nothing draws a crowd quite like
              <span className="font-bold">crowd</span>
            </q>
            <p className="text-gray-500 text-[1.5rem] mt-6">- <br />-</p>
          </div>
          {/*Quotes UI Starts Here*/}

          <div className="w-[57%] mx-auto my-10 sm:my-20">
            <h1 className="text-2xl sm:text-3xl text-gray-900 my-4">
              <p className="inline-flex items-baseline">
                <span className="text-4xl text-[#00AE80]">
                  <img src="./icons/quote_left.png" alt="quote_left" />
                </span>

                <span className="text-4xl text-[#00AE80]">
                  <img src="./icons/quote_right.png" alt="quote_right" />
                </span>
              </p>
            </h1>
            <p>P.T. Barnum</p>
            <p>-</p>
          </div>
          <p className="my-6">
            Influencer & Celebrity Endorsements, is an enormous power for businesses because of the trust they’ve
            cultivated with their audiences. When an influencer vouches for a product, their followers are more
            likely to believe it’s worth purchasing.

          </p>
          <p>
            {" "}
            <span className="text-black font-semibold"></span>
            A well-crafted case study doesn’t just showcase results; it tells a story.
            It allows potential customers to see themselves in the narrative,
            creating an emotional connection that leads to action.
          </p>
        </div>
        <div className="text-gray-500 w-[80%] mx-auto my-10 sm:my-20">
          <div className="">
            <p className="text-lg">Brand credibility building</p>
            <h1 className="text-[#00AE80] text-4xl font-medium underline mb-2 mt-1">
              Best way to experience the product is to use the product.
            </h1>
            <p className="text-lg font-medium">High engagement metrics is signal to prospective buyers
              hat a brand is reputable and loved by its community.
            </p>
          </div>
          <div className="flex gap-6 text-left flex-col md:flex-row justify-between my-10 sm:my-16 ">
            <div className="md:w-[40%]">
              <p>
                Amazon The retail giant <span className="text-black font-semibold">prominently displays customer reviews,</span> rankings, and ‘Verified Purchase’ badges to build credibility.

              </p>
              <p className="pt-5 sm:pt-10">

                Nike <span className="text-black font-semibold">Collaborates with athletes and influencers to position itself,</span>
                as the go-to brand for performance and lifestyle wear.

              </p>
              <p className="pt-5 sm:pt-10">

                Airbnb: Relies heavily on<span className="text-black font-semibold">user reviews and guest testimonials,</span>
                fostering trust in the peer-to-peer lodging industry.
              </p>
              <p className="pt-5 sm:pt-10">

                Tesla skips traditional advertising altogether,<span className="text-black font-semibold"> relying on satisfied customers, media coverage,</span>
                and CEO Elon Musk’s Twitter engagement to generate organic buz

              </p>
            </div>
            <div className="md:w-[40%]">
              <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
                Consumers trust people
                more than polished ads. it enhance brand trust and influence purchasing decisions.
              </h1>
              <p>
                In an era where 67% of consumers say they are more likely to buy from a brand with positive reviews,
                leveraging social proof is no longer optional—it’s a necessity. Skepticism is at an all-time high,
                and traditional advertising no longer has the persuasive power it once did.
              </p>
            </div>
          </div>
          <div className="my-10 sm:my-20 md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
              Trust is not something you can buy.it’s something you earn.
            </h1>
            <p className="pt-5 sm:pt-10">
              Digital marketing landscape, social proof is the fastest way to gain that trust.
              In a world full of skepticism, be the brand that customers can believe in. Because when people
              see others putting their faith in your brand, they won’t hesitate to do the same.
            </p>
            <button className="bg-gray-600 px-4 py-1 text-white font-semibold underline hover:opacity-80 my-5 sm:my-10">
              Read More
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.slice(0, showMore ? blogs.length : 2).map((blog, key) => (
              <div className="text-gray-600" key={key}>
                <p className="uppercase py-2">ideas</p>
                <div className="h-60 bg-gray-300 overflow-hidden">
                  <img src={`http://localhost:4000/uploads/articleImages/${blog.image}`} alt={blog.title} className="object-cover" />
                  <img src="summit.jpg" alt="Panel discussion at The Science of Persuasion: How Behavioral Economics Shapes Advertising Success" loading="lazy" />

                </div>
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold underline pt-8 pb-2">
                  {blog.title}
                </h2>
                <p>{blog.description}</p>
                <button className="underline font-semibold hover:text-black">
                  Read Report
                </button>
              </div>
            ))}
          </div>
          {blogs.length > 2 && !showMore && (
            <div className=" text-center my-10">
              <button
                onClick={handleShowMore}
                className="bg-gray-800 text-white underline p-2 hover:bg-black"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-[80%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.slice(0, showMore ? blogs.length : 2).map((blog, key) => (
            <div className="text-gray-600" key={key}>
              <p className="uppercase py-2">Ideas</p>
              <div className="h-60 bg-gray-300 overflow-hidden">
                <img src={`http://localhost:4000/uploads/articleImages/${blog.image}`} alt={blog.title} className="object-cover" />
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold underline pt-8 pb-2">{blog.title}</h2>
              <p>{blog.description}</p>
              <button className="underline font-semibold hover:text-black">Read Report</button>
            </div>
          ))}
        </div>
        {blogs.length > 2 && !showMore && (
          <div className=" text-center my-10">
            <button onClick={handleShowMore} className="bg-gray-800 text-white underline p-2 hover:bg-black">
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}