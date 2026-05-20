import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getContents } from "../api/content";

const fallbackProjects = [
  {
    title: "Hyundai Pakistan",
    slug: "hyundai",
    category: "Automotive",
    excerpt:
      "Digital creatives, campaign storytelling, and performance-led brand presence for Hyundai Pakistan.",
    image: "/portfolio/hyundai_tucson.png",
    services: ["Digital Creatives", "Impact Analysis", "Digital Presence"],
  },
  {
    title: "Toyota Motors",
    slug: "toyota-motors",
    category: "Automotive",
    excerpt:
      "Brand communication and creative assets built to support digital campaign visibility.",
    image: "/portfolio/01.png",
    services: ["Campaign Design", "Creative Direction", "Brand Systems"],
  },
  {
    title: "Codility Hub",
    slug: "codility-hub",
    category: "Technology",
    excerpt:
      "A focused digital identity and web experience for a technology education platform.",
    image: "/portfolio/22copy.png",
    services: ["Identity", "Web Experience", "Content Strategy"],
  },
  {
    title: "Fantasy Rewind",
    slug: "fantasy-rewind",
    category: "Entertainment",
    excerpt:
      "Product-led visual language and interface storytelling for a sports entertainment brand.",
    image: "/portfolio/8copy.png",
    services: ["UX/UI", "Brand Design", "Launch Assets"],
  },
  {
    title: "Hassan Bukhari",
    slug: "hassan-bukhari",
    category: "Personal Brand",
    excerpt:
      "A polished personal brand presence designed for authority, clarity, and conversion.",
    image: "/portfolio/03.png",
    services: ["Personal Branding", "Digital Strategy", "Web Design"],
  },
];

const getProjectUrl = (project) => `/portfolio/${project.slug}`;

const Portfolio = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await getContents({ type: "portfolio" });
        const publishedProjects = data.filter((item) => item.slug && item.title);

        if (mounted) {
          if (publishedProjects.length > 0) {
            setProjects(publishedProjects);
          } else {
            setProjects(fallbackProjects);
          }
        }
      } catch (_error) {
        if (mounted) {
          setProjects(fallbackProjects);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const featuredProject = projects[0];
  const galleryProjects = useMemo(() => projects.slice(1), [projects]);

  return (
    <>
      <Helmet>
        <title>Portfolio Work Gallery | Blucom Technologies</title>
        <meta
          name="description"
          content="Explore Blucom Technologies portfolio posts, creative campaigns, digital products, brand identities, and work case studies."
        />
        <link rel="canonical" href="https://www.blucomtechnologies.com/portfolio" />
        <meta property="og:title" content="Portfolio Work Gallery | Blucom Technologies" />
        <meta
          property="og:description"
          content="Browse selected Blucom Technologies work across branding, digital marketing, web, UX/UI, and campaign creative."
        />
        <meta property="og:url" content="https://www.blucomtechnologies.com/portfolio" />
        <meta property="og:image" content="https://www.blucomtechnologies.com/portfolio/hyundai_tucson.png" />
      </Helmet>

      <main className="bg-white text-slate-950">
        <section className="relative min-h-[72vh] overflow-hidden bg-slate-950 text-white">
          <img
            src="/news/news_bg.png"
            alt="Portfolio work gallery background"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[#00AE80]/85" />
          <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950/70">
              Portfolio
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                  Selected work, campaigns, and digital experiences.
                </h1>
              </div>
              <p className="max-w-2xl border-white/70 text-lg leading-8 text-white/90 lg:border-l lg:pl-8">
                A gallery of portfolio posts covering brand systems, web experiences, campaign
                assets, content strategy, and digital growth work created by Blucom Technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          {loading ? (
            <div className="py-16 text-center text-sm font-semibold text-slate-600">
              Loading portfolio posts...
            </div>
          ) : null}

          {!loading && featuredProject ? (
            <Link
              to={getProjectUrl(featuredProject)}
              className="group grid overflow-hidden border border-slate-200 bg-slate-950 text-white transition hover:border-[#00AE80] md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative min-h-[340px] overflow-hidden">
                <img
                  src={featuredProject.image || featuredProject.socialImage || "/portfolio/hyundai_tucson.png"}
                  alt={featuredProject.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00AE80]">
                    Featured Work
                  </p>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-slate-200 md:text-lg">
                    {featuredProject.excerpt || "Explore this Blucom Technologies portfolio case study."}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {(featuredProject.services || featuredProject.tags || [featuredProject.category || "Portfolio"])
                    .filter(Boolean)
                    .slice(0, 4)
                    .map((service) => (
                      <span
                        key={service}
                        className="border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85"
                      >
                        {service}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          ) : null}

          {!loading ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryProjects.map((project) => (
                <Link
                  key={project.slug || project.title}
                  to={getProjectUrl(project)}
                  className="group flex min-h-[420px] flex-col overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#00AE80] hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image || project.socialImage || "/portfolio/04.png"}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00AE80]">
                      {project.category || "Portfolio"}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {project.excerpt || "View this portfolio post and project details."}
                    </p>
                    <span className="mt-6 text-sm font-semibold text-slate-950 transition group-hover:text-[#00AE80]">
                      View case study
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
};

export default Portfolio;
