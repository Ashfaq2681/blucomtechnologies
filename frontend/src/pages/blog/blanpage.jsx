import React from "react";

const SEOPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Optimized Page | Blucom Technologies</title>
        <meta name="description" content="This is an SEO-optimized, search-ready page for Blucom Technologies." />
        <meta name="keywords" content="SEO, digital marketing, web optimization, Blucom Technologies" />
        <meta name="author" content="Blucom Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content="Optimized Page | Blucomechnologies" />
        <meta property="og:description" content="SEO-optimized, search-ready page to enhance visibility and user engagement." />
        <meta property="og:image" content="/images/seo-preview.png" />
        <meta property="og:url" content="https://www.blucomtechnologies.com/seo-page" />
        <meta property="og:type" content="website" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "blankseopage",
            "description": "SEO-optimized, search-ready page for better rankings and engagement.",
            "author": {
              "@type": "Advertisingagency",
              "name": "Blucomtechnologies"
            }
          })}
        </script>
      </head>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Your Optimized Page</h1>
          <p className="text-lg text-gray-700 mt-4">
            This is a blank, SEO-friendly page ready for customization.
          </p>
        </div>
      </main>
    </>
  );
};

export default SEOPage;
