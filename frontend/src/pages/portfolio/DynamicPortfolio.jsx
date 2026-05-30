import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
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
  const tags = (item.tags?.length ? item.tags : [item.category || "Portfolio"]).filter(Boolean).slice(0, 5);
  const publishedDate = item.updatedAt || item.createdAt;
  const year = publishedDate ? new Date(publishedDate).getFullYear() : "";

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
          <section className="relative overflow-hidden bg-slate-950 text-white">
            {item.image ? (
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-45" />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-[#00AE80]/75" />
            <div className="relative mx-auto grid min-h-[76vh] max-w-7xl gap-10 px-5 pb-14 pt-32 sm:px-8 lg:grid-cols-[1fr_420px] lg:items-end lg:px-10">
              <div>
                <Link to="/portfolio" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:text-white">
                  Portfolio
                </Link>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#00AE80]">
                  {item.category || "Case Study"}
                </p>
                <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
                  {item.title}
                </h1>
                {item.excerpt ? (
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                    {item.excerpt}
                  </p>
                ) : null}
              </div>

              <aside className="border border-white/15 bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Project Notes</p>
                <dl className="mt-6 grid gap-5 text-sm">
                  <div>
                    <dt className="text-white/55">Type</dt>
                    <dd className="mt-1 font-semibold text-white">{item.category || "Portfolio"}</dd>
                  </div>
                  {year ? (
                    <div>
                      <dt className="text-white/55">Published</dt>
                      <dd className="mt-1 font-semibold text-white">{year}</dd>
                    </div>
                  ) : null}
                  {tags.length ? (
                    <div>
                      <dt className="text-white/55">Focus</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className="border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </aside>
            </div>
          </section>

          <article className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[300px_1fr] lg:px-10">
            <aside className="hidden lg:block">
              <div className="sticky top-24 border-l-4 border-[#00AE80] pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Case Study</p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-slate-950">
                  {description}
                </p>
              </div>
            </aside>
            <div className="min-w-0">
              <div
                className="prose prose-lg prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-950 prose-a:text-[#00AE80] prose-img:w-full prose-img:border prose-img:border-slate-200"
                dangerouslySetInnerHTML={{ __html: item.content || "" }}
              />
              <div className="mt-14 border-t border-slate-200 pt-8">
                <Link to="/portfolio" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:text-[#00AE80]">
                  View more portfolio work
                </Link>
              </div>
            </div>
          </article>
        </main>
      )}
    </>
  );
};

export default DynamicPortfolio;
