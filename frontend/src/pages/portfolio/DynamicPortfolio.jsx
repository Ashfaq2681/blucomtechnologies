import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getContentByIdentifier } from "../../api/content";

const SITE_URL = "https://www.blucomtechnologies.com";
const portfolioComponents = import.meta.glob("./*.jsx");

const normalizeComponentPath = (componentPath = "") => {
  const normalizedPath = componentPath.replace(/\\/g, "/").replace(/^\/+/, "");

  if (!normalizedPath) {
    return "";
  }

  if (normalizedPath.startsWith("./")) {
    return normalizedPath;
  }

  if (normalizedPath.startsWith("portfolio/")) {
    return `./${normalizedPath.replace("portfolio/", "")}`;
  }

  if (normalizedPath.startsWith("src/pages/portfolio/")) {
    return `./${normalizedPath.replace("src/pages/portfolio/", "")}`;
  }

  return `./${normalizedPath}`;
};

const DynamicPortfolio = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [StaticPortfolioComponent, setStaticPortfolioComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const loadItem = async () => {
      try {
        setLoading(true);
        const data = await getContentByIdentifier(slug, { type: "portfolio" });
        if (mounted) {
          setItem(data);
          setStaticPortfolioComponent(null);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError("Portfolio page not found.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    loadItem();
    return () => {
      mounted = false;
    };
  }, [slug]);

  useEffect(() => {
    let mounted = true;

    const loadStaticComponent = async () => {
      const componentKey = normalizeComponentPath(item?.componentPath);

      if (!componentKey) {
        setStaticPortfolioComponent(null);
        return;
      }

      const importer = portfolioComponents[componentKey];
      if (!importer) {
        setStaticPortfolioComponent(null);
        return;
      }

      const module = await importer();
      if (mounted) {
        setStaticPortfolioComponent(() => module.default);
      }
    };

    loadStaticComponent();

    return () => {
      mounted = false;
    };
  }, [item?.componentPath]);

  if (loading) {
    return <div className="px-6 py-24 text-center text-slate-600">Loading...</div>;
  }

  if (error || !item) {
    return <div className="px-6 py-24 text-center text-slate-600">{error || "Portfolio page not found."}</div>;
  }

  const canonicalUrl = item.canonicalUrl || `${SITE_URL}/portfolio/${item.slug}`;
  const title = item.seoTitle || `${item.title} | Blucom Technologies`;
  const description = item.seoDescription || item.excerpt || `Explore ${item.title} portfolio work by Blucom Technologies.`;
  const socialTitle = item.socialTitle || title;
  const socialDescription = item.socialDescription || description;
  const socialImage = item.socialImage || item.image || `${SITE_URL}/preview.jpg`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {item.focusKeyword ? <meta name="keywords" content={item.focusKeyword} /> : null}
        <meta name="robots" content={item.metaRobots || "index,follow"} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content={item.twitterCard || "summary_large_image"} />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={socialDescription} />
        <meta name="twitter:image" content={socialImage} />
        {item.schemaJson ? (
          <script type="application/ld+json">{item.schemaJson}</script>
        ) : (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": item.schemaType || "CreativeWork",
              name: item.title,
              description,
              url: canonicalUrl,
              image: socialImage,
            })}
          </script>
        )}
      </Helmet>

      {StaticPortfolioComponent ? <StaticPortfolioComponent /> : (
      <main className="bg-white text-slate-950">
        <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 text-white">
          {item.image ? (
            <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-55" />
          ) : null}
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00AE80]">{item.category || "Portfolio"}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{item.title}</h1>
            {item.excerpt ? <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{item.excerpt}</p> : null}
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-16">
          <div
            className="prose prose-slate max-w-none prose-headings:text-slate-950 prose-a:text-[#00AE80]"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </article>
      </main>
      )}
    </>
  );
};

export default DynamicPortfolio;
