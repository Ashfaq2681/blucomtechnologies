import React, { useState, useEffect } from "react";

const news = [
  {
    title: "The Future of Digital Branding in 2024",
    description:
      "Discover the latest trends in digital branding and how businesses can stay ahead.",
    image: "/news/future_branding.jpg",
    datePublished: "2024-02-20",
    url: "/news/future-digital-branding-2024",
    author: "John Doe",
  },
  {
    title: "Trust the Crowd Why Social Proof is Every Marketer’s Best Friend.",
    description:
      "How AI-driven marketing is reshaping customer engagement and conversions.",
    image: "/news/ai_marketing.jpg",
    datePublished: "2024-02-15",
    url: "/news/ai-marketing-game-changer",
    author: "Jane Smith",
  },
];

export default function News() {
  const [showMore, setShowMore] = useState(false);

  // Generate JSON-LD Schema Markup dynamically
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": news.map((item, index) => ({
        "@type": "NewsArticle",
        "headline": item.title,
        "description": item.description,
        "image": item.image,
        "datePublished": item.datePublished,
        "author": {
          "@type": "Person",
          "name": item.author,
        },
        "url": item.url,
        "position": index + 1,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main>
      <section className="relative w-full h-screen">
        <img
          src="/news/news_bg.png"
          alt="News Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
        <div className="absolute inset-0 flex flex-row justify-center items-center text-white p-4">
          <div className="w-[35%] lg:p-4 p-2 text-right">
            <h1 className="text-lg sm:text-3xl lg:text-4xl py-1">
              Adobe Summit 2024
            </h1>
            <h2 className="text-lg sm:text-3xl lg:text-4xl py-1">
              Key Insights for Businesses
            </h2>
          </div>
          <div className="sm:w-[35%] border-l-2 border-white lg:p-4 p-2 text-left mt-4 lg:mt-0">
            <img
              src="/news/adobe.png"
              alt="Adobe Summit Logo"
              className="lg:w-72 md:w-60 sm:w-40 w-24"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="w-[80%] mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.slice(0, showMore ? news.length : 4).map((newsItem, index) => (
            <article className="text-gray-600" key={index}>
              <h3 className="uppercase py-2 text-sm text-blue-700">News</h3>
              <div className="h-60 bg-gray-300">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold underline pt-6 pb-2">
                {newsItem.title}
              </h2>
              <p className="text-gray-700">{newsItem.description}</p>
              <a
                href={newsItem.url}
                className="underline font-semibold hover:text-black"
                aria-label={`Read more about ${newsItem.title}`}
              >
                Read More
              </a>
            </article>
          ))}
        </div>

        {news.length > 4 && !showMore && (
          <div className="text-center my-10">
            <button
              onClick={handleShowMore}
              className="bg-gray-800 text-white underline p-2 hover:bg-black"
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
