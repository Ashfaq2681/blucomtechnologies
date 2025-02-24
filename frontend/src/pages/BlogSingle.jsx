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
    "headline": "The Science of Persuasion: How Behavioral Economics Shapes Advertising Success - Key Topics & Insights",
    "description": "Explore key insights from The Science of Persuasion: How Behavioral Economics Shapes Advertising Success, including digital presence, impact analysis, and expert discussions.",
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
        <title>How Behavioral Economics Shapes Advertising Success | BlucomTechnologies</title>
        <meta name="description" content="Explore key insights from The Science of Persuasion: How Behavioral Economics Shapes Advertising Success, including digital presence, impact analysis, and expert discussions." />
        <meta name="keywords" content="The Science of Persuasion: How Behavioral Economics Shapes Advertising Success, digital marketing, B2B branding, impact analysis, customer insights, Blucom Technologies" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Blog Content */}
      <div className="relative w-full">
        <img
          src="./career/careers.png"
          alt="The Science of Persuasion: How Behavioral Economics Shapes Advertising Success"
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">The Science of Persuasion</h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl">and Key Insights</h1>
            <h3>Behavioral economics, Persuasive advertising</h3>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">
              In the fast-paced world of advertising, capturing consumer attention is a fine art—one that blends creativity with deep psychological insights.
              Behavioral economics, the study of how human behavior influences economic decision-making, has become an indispensable tool for brands looking to
              craft compelling campaigns.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-blue-600  md:py-20 py-10">
          <div className="w-[80%] mx-auto">
            <div className="text-gray-100">
              <p>Think You’re in Control?</p>
              <h1 className="text-white text-4xl my-1">
                Think Again—How Ads Shape Your Choices.
              </h1>
              <p>
                By understanding the subtle cognitive biases and heuristics
                that shape consumer choices, advertisers can design messages that resonate,
                persuade, and ultimately drive action.
              </p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
              <div className="text-gray-100 sm:w-[50%]">
                <p>FOMO marketing</p>
                <h1 className="text-white text-4xl my-1">Brand engagement</h1>
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
          <p>Pricing psychology</p>
          <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
            The Power of Cognitive Biases in Advertising
          </h1>
          <p className="my-6">
            Traditional economics assumes consumers make rational
            decisions based on logical evaluations of value. However,
            behavioral economics reveals that choices are often driven
            by emotions, mental shortcuts, and subconscious biases.
            Advertisers leverage these insights to create impactful
            marketing strategies. Here are some of the most influential
            cognitive biases in advertising:
          </p>
          <p>
            As a Digital Adverts Space Operators we experienced{" "}
            <span className="text-black font-semibold">
              The Fear of Missing Out (FOMO)
            </span>
            proved to be the driver of buying in frequent consumers, People dislike losses more
            than they appreciate gains of the same magnitude. Advertisers use this principle to
            create urgency and scarcity, often with phrases like “Limited Time Offer” or “Only
            a Few Left in Stock.” When customers perceive that an opportunity may be lost, they
            are more likely to act immediately.

          </p>

          <div className="w-[57%] mx-auto my-10 sm:my-20">
            <h1 className="text-2xl sm:text-3xl text-gray-900 my-4">
              <p className="inline-flex items-baseline">
                <span className="text-4xl text-blue-700">
                  <img src="./icons/quote_left.png" alt="quote_left" />
                </span>
                Chracter may almost
              </p>{" "}
              be calledthe most effective
              <p className="inline-flex items-baseline">
                means of persuation{" "}
                <span className="text-4xl text-blue-700">
                  <img src="./icons/quote_right.png" alt="quote_right" />
                </span>
              </p>
            </h1>
            <p>-</p>
            <p>-</p>
          </div>
          <p className="my-6">
            The Fear of Missing Out (FOMO)
            Anchoring Effect Setting the Frame for Perceived Value
            Consumers tend to rely heavily on the first piece of information they receive when making decisions. This is why retail stores often display a “before” price next to a “discounted” price—framing the discount as a significant deal. Subscription services use this technique by showing premium pricing options first, making lower-tier plans seem like a bargain.

          </p>
          <p>
            The Decoy Effect Steering Choices in Favor of a Target Product {"jofer "}
            <span className="text-black font-semibold"></span>
            When presented with three pricing options—one expensive, one cheap,
            and one in the middle—consumers tend to choose the middle option.
            Advertisers introduce a third, less attractive “decoy” option to make
            their preferred choice seem more appealing by comparison.


          </p>
        </div>
        <div className="text-gray-500 w-[80%] mx-auto my-10 sm:my-20">
          <div className="">
            <p className="text-lg">Ethical Considerations</p>
            <h1 className="text-blue-800 text-4xl font-medium underline mb-2 mt-1">
              Balancing Persuasion and Consumer Trust
            </h1>
            <p className="text-lg font-medium">Digital marketing strategies</p>
          </div>
          <div className="flex gap-6 text-left flex-col md:flex-row justify-between my-10 sm:my-16 ">
            <div className="md:w-[40%]">
              <p>
                While behavioral economics provides powerful tools for advertisers, ethical
                considerations must remain at the forefront. Transparency, authenticity, and
                respecting consumer autonomy are crucial to maintaining trust. Misleading tactics,
                excessive psychological manipulation,
                or deceptive scarcity claims can backfire, leading to reputational damage.
              </p>
              <p className="pt-5 sm:pt-10">
                The Endowment Effect: Increasing Perceived Ownership
                People tend to overvalue things they own, even if they
                have only been exposed to them briefly. Brands take advantage
                of this by offering free trials, test drives, and product customizations,
                making consumers feel a sense of ownership before they even make a purchase.

              </p>
            </div>
            <div className="md:w-[40%]">
              <p>
                Brands that understand consumer psychology
                can craft campaigns that not only capture attention but also drive meaningful
                engagement and conversions. By leveraging cognitive biases in an ethical and
                strategic manner, advertisers can create experiences that feel intuitive,
                rewarding, and ultimately, irresistible.

              </p>
              <p className="pt-5 sm:pt-10">
              In an era where attention spans are fleeting and competition is fierce,
               the brands that master the science of persuasion w be the ones that thrive. 
               Behavioral economics is not just about selling
              </p>
            </div>
          </div>
          <div className="my-10 sm:my-20 md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
            it’s about understanding what truly moves people, and that is
            the key to advertising success.
            </h1>
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