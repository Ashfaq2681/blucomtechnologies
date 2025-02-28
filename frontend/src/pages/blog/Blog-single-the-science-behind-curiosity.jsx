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
    "headline": "Trust the Crowd: Why Social Proof is Every Marketer’s Best Friend",
    "description": "Discover how social proof influences buying behavior and how brands can use it to build trust and increase conversions.",
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
    "image": "https://blucomtechnologies/images/social-proof.jpg",
    "datePublished": "2025-02-27",
    "dateModified": "2025-02-27"
  };

  return (
    <div>
      <Helmet>
        <title>Curiosity is a powerful psychological driver that fuels engagement and decision-making.</title>
        <meta name="description" content="Discover how social proof influences buying behavior and how brands can use it to build trust and increase conversions." />
        <meta name="keywords" content="social proof marketing, customer trust, influencer endorsements, FOMO marketing, user-generated content, digital marketing strategies, consumer behavior, online reviews impact, credibility in advertising, effective branding tactics" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Blog Content */}
      <div className="relative w-full">
        <img
          src="./career/careers.png"
          alt="How Curiosity Enhances Digital Marketing Strategies"
          className="w-full h-lvh object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center items-center text-white p-4">
          <div className="sm:w-[35%] w-full lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-2xl lg:text-4xl">Curiosity is a powerful psychological</h1>
            <h1 className="text-lg sm:text-2xl lg:text-4xl"></h1>
            <h3>The Science Behind Curiosity</h3>
          </div>
          <div className="sm:w-[35%] w-full sm:border-l-2 border-t-2 sm:border-t-0 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <p className="text-xs sm:text-base">
              driver that fuels engagement and decision-making. In the digital marketing landscape,
              capturing and maintaining attention is a constant challenge.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#00AE80]  md:py-20 py-10">
          <div className="w-[80%] mx-auto">
            <div className="text-gray-100">
              <p>How Curiosity Drives Learning</p>
              <h1 className="text-white text-4xl my-1">
                Its is a cognitive response that arises when there is a gap between what we know and what we want to know.
              </h1>
              <p>
                In the context of marketing, curiosity fuels discovery, driving audiences to engage with a brand’s message
                in ways that traditional persuasion techniques often fail to achieve.</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row w-full gap-6 mt-10 sm:mt-20">
              <div className="text-gray-100 sm:w-[50%]">
                <p>FOMO mar keting</p>
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
            <span className="text-black font-semibold">
              Crafting Intriguing Headlines and Ad Copy
            </span>The contact in any digital marketing strategy is often the headline or ad copy.
            A compelling, curiosity driven headline can dramatically improve click-through rates (CTR).
            Consider headlines that Pose a question. <span className="text-black font-semibold">
              What’s the One Marketing Secret Top Brands Don’t Want You to Know?


            </span>
            Tease valuable information:<span className="text-black font-semibold">
              Surprising Ways to Boost Your Engagement Will Shock You!</span>
            <span className="text-black font-semibold">
              You Won’t Believe What This Simple Trick Did for Our Sales</span>
            Create open loops<span className="text-black font-semibold">
              You Won’t Believe What This Simple Trick Did for Our Sales</span>
            Research from Copyblogger suggests that 80% of people read headlines,
            but only 20% continue to the content, reinforcing the importance of leveraging
            curiosity in the initial hook.


          </p>
          {/*Quotes UI Starts Here*/}
          <div className="relative max-w-3xl mx-auto text-left py-[142px]">
            <q className="relative inline-block text-black text-[3rem] leading-snug font-light 
                before:content-['“'] before:text-[#00AE80] before:text-[12rem] before:leading-none before:absolute before:-left-16 before:top-[-60px]
                after:content-['”'] after:text-[#00AE80] after:text-[12rem] after:leading-none after:absolute after:left-full after:top-[10px]">
              Curiosity is the wick in the<span className="font-bold">Candle of Learning</span>
            </q>
            <p className="text-gray-500 text-[1.5rem] mt-6"> William Arthur Ward<br />-</p>
          </div>
          {/*Quotes UI Starts Here*/}

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
            <h1 className="text-[#00AE80] text-4xl font-medium underline mb-2 mt-1">
              A best method to learn is to ask, Does the curiosity driven content align with the brand’s
              core message and value proposition? If not, it risks being perceived as deceptive
              rather than engaging.
            </h1>

          </div>
          <div className="flex gap-6 text-left flex-col md:flex-row justify-between my-10 sm:my-16 ">
            <div className="md:w-[40%]">
              <p>
                Curiosity thrives on exploration, By incorporating gamification elements such as quizzes,
                challenges, and interactive tools, brands can engage users while providing valuable insights
                about their preferences.</p>
              <p className="pt-5 sm:pt-10">
                Teasing Product Reveals and Exclusive Content Building anticipation around a product launch or exclusive
                content release can drive significant audience interest. </p>
              <p className="pt-5 sm:pt-10">
                Brands can create teaser campaigns that Provide glimpses of upcoming products through social media snippets
                Use countdown timers to heighten anticipation
                Offer early-access incentives (“Be the First to Experience Our Newest Innovation”)
                Apple, for example, has mastered the art of curiosity by releasing cryptic promotional materials before product launches,
                driving speculation and excitement among consumers.
              </p>
            </div>
            <div className="md:w-[40%]">
              <p>
                Leveraging Social Media Teasers
                Social media platforms are ideal for leveraging curiosity, as they allow brands to share bite-sized, curiosity-driven content. Strategies include:
                Posting cryptic messages in eg. “Something big is coming… Stay tuned!”
                Using engaging visuals that hint at a bigger story
                Encouraging user participation through polls and questions
                Platforms like TikTok and Instagram Stories excel in creating short, engaging content that fuels curiosity and encourages users to keep coming back for updates.


              </p>
              <p className="pt-5 sm:pt-10">
                Email Marketing with Mystery and Suspense
                Email subject lines that spark curiosity see higher open rates compared to generic ones. Some effective approaches include:
                Curiosity gap subject lines in eg. You’re Missing Out on This Marketing Hack
                Personalized intrigue in eg. First Name, We Have a Surprise for You
                Unfinished thoughts in eg. Wait Until You See This.
              </p>
            </div>
          </div>
          <div className="my-10 sm:my-20 md:w-[55%]">
            <h1 className="text-2xl sm:text-3xl text-gray-900 pt-2">
              Curiosity is an invaluable asset in digital marketing, capable of capturing attention, driving engagement, and increasing conversions.
            </h1>
            <p className="pt-5 sm:pt-10">
              By leveraging curiosity through compelling headlines, interactive content, product teasers, and social media intrigue, brands can create meaningful connections with their audience. However, authenticity and value must always accompany curiosity-driven strategies to maintain trust and long-term consumer relationships.
              In the ever-evolving digital landscape, the brands that spark curiosity and keep audiences engaged will remain top of mind, ultimately leading to sustained success.

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