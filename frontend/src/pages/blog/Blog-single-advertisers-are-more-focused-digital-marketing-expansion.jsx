import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

export default function BlogSingle() {
  const [showMore, setShowMore] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // Schema Markup (JSON-LD) for the article
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Publicis Groupe’s Digital Marketing Expansion: The Power of Strategic Partnerships",
    "description": "Publicis Groupe partners with Landmark Reach to revolutionize retail media and digital marketing.",
    "author": {
      "@type": "Organization",
      "name": "Publicis Groupe"
    },
    "publisher": {
      "@type": "AdvertisingAgency",
      "name": "BlucomTechnologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blucomtechnologies.com/logo.png"
      }
    },
    "image": "https://blucomtechnologies/images/publicis.jpg",
    "datePublished": "2025-02-25",
    "dateModified": "2025-02-25"
  };

  return (
    <div>
      {/* SEO Metadata using Helmet */}
      <Helmet>
        <title>Advertisers are more focused  Digital Marketing Expansion</title>
        <meta name="description" content="Publicis Groupe partners with Landmark Reach to revolutionize retail media and digital marketing." />
        <meta name="keywords" content="Retail Media, Digital Marketing, AI Advertising, Publicis Groupe, Landmark Reach, Data-Driven Marketing, Brand Strategy, Consumer Insights, Advertising Trends 2025" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>



      {/* Blog Content */}
      <div className="relative w-full">
        <img
          src="./career/careers.png"
          alt="Building Resolute Trust  Strategies for Winning and Keeping Customer Confidence"
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">
            </h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">capturing consumer attention requires more
              than just traditional advertising.

            </h1>
            <h3>Media Planning and Buying</h3>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">

              In an age of information overload, capturing consumer attention requires more than just traditional advertising.
              The role of storytelling in Digital Marketing has become more critical than ever, as brands shift from selling
              products to building narratives that resonate with their audience.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#00AE80]  md:py-20 py-10">
          <div className="w-[80%] mx-auto">
            <div className="text-gray-100">
              <p>Multi-Platform Engagement
              </p>
              <h1 className="text-white text-4xl my-1">
              Effective storytelling spans multiple platforms.
              </h1>
              <p>
              from long-form content on websites to short,
              engaging narratives on social media. Consistency is key—brands that maintain a cohesive
              message across all Integrated Marketing Communications touchpoints strengthen their identity
              and consumer trust.
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
              <div className="text-gray-100 sm:w-[50%]">
                <p>Consumer Confidence Advertising</p>
                <h1 className="text-white text-4xl my-1"> Implementation of Brand Strategy in Advertising
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
          <p>Consumers trust recommendations

          </p>
          <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">

            Brands that fail to integrate online and offline interactions risk losing customer loyalty to competitors who do.
          </h1>
          <p className="my-6">
            <span className="text-black font-semibold">
              Personalization and Data-Driven Marketing
            </span>

            This shift has forced companies to rethink traditional marketing strategies, replacing siloed digital
            and brick-and-mortar efforts with unified,  commerce-driven marketing models that prioritize customer
            experience and engagement.
          </p>


          {/*Quotes UI Starts Here*/}
          <div className="relative max-w-3xl mx-auto text-left py-[142px]">
            <q className="relative inline-block text-black text-[3rem] leading-snug font-light 
                before:content-['“'] before:text-[#00AE80] before:text-[12rem] before:leading-none before:absolute before:-left-16 before:top-[-60px]
                after:content-['”'] after:text-[#00AE80] after:text-[12rem] after:leading-none after:absolute after:left-full after:top-[10px]">
              Influencer marketing is no longer just about reach <span className="font-bold">it's about resonance.</span>
            </q>
            <p className="text-gray-500 text-[1.5rem] mt-6">Alex Carter<br /> Media Expert</p>
          </div>
          {/*Quotes UI Starts Here*/}



          <p className="my-6">

            Data has become a key driver of commerce-driven marketing, allowing brands to understand customer preferences and behaviors in real-time.
            With advanced data analytics and customer relationship management (CRM) tools, businesses can tailor their marketing strategies to provide
            hyper-personalized experiences. Retailers that leverage customer insights to create personalized product recommendations, loyalty programs,
            and targeted promotions see higher conversion rates and improved customer retention. A McKinsey report revealed that personalization can drive
            revenue growth of 10% to 30% for brands that successfully implement it.


          </p>
          <p>
            {" "}
            <span className="text-black font-semibold"></span>
            For example, a retailer may use data collected from an e-commerce platform to send targeted offers via email
            or SMS, encouraging repeat purchases. Similarly, in-store technology such as interactive kiosks or AI-powered
            sales assistants can enhance the physical shopping experience, providing customers with relevant product suggestions
            based on their online browsing history.
          </p>
        </div>
        <div className="text-gray-500 w-[80%] mx-auto my-10 sm:my-20">
          <div className="">
            <p className="text-lg">Seamless Payment and Checkout Innovations</p>
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
                As consumer behavior shifts towards convenience<span className="text-black font-semibold"></span>

                As consumer behavior shifts towards convenience, personalization, and omnichannel shopping,
                businesses that adopt a unified commerce approach are poised for long-term success.
              </p>



            </div>
            <div className="md:w-[40%]">
              <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
               73% of consumers use multiple channels during their purchase
                journey,
              </h1>
              <p className="pt-5 sm:pt-10">
                Underscoring the importance of omnichannel marketing strategies. Whether browsing products online before
                visiting a store or using mobile apps to compare prices while shopping in person, consumers expect a seamless
                and cohesive brand experience.

              </p>



              <div className="md:w-[40%]">

              </div>
            </div>

          </div>
          <div className="my-10 sm:my-20 md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
              According to a study by Statista, digital and mobile wallets accounted for 49% of global
              e-commerce transactions in 2023, demonstrating how crucial payment innovation has become
              for commerce-driven marketing.

            </h1>
            <p className="pt-5 sm:pt-10">
              Retail Media Networks and Hyper-Targeted Advertising
              Commerce-driven marketing is also reshaping the advertising landscape, with retail media networks (RMNs) becoming a dominant force. Brands are increasingly leveraging RMNs—advertising platforms built within e-commerce and retailer websites—to deliver highly targeted, data-rich ads to consumers.
              The modern consumer no longer shops exclusively online or in-store but instead engages in a hybrid shopping experience.
                According to a recent study by Harvard Business Review, 73% of consumers use multiple channels during their purchase
                journey, underscoring the importance of omnichannel marketing strategies. Whether browsing products online before
                visiting a store or using mobile apps to compare prices while shopping in person, consumers expect a seamless
                and cohesive brand experience.
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