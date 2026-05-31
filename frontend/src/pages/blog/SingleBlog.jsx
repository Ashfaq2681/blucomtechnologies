import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Copy,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import { FALLBACK_BLOG_POSTS, getPostBySlug } from "../../api/blogs";
import { createContactLead } from "../../api/leads";
import { getPostDescription, getPostTitle } from "../../utils/postDescriptions";
import { estimateReadTime, formatDate } from "./utils";
import BlogNav from "./components/BlogNav";

const stripHtml = (value = "") =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const slugifyText = (value = "") =>
  stripHtml(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);

const normalizeComparableText = (value = "") =>
  stripHtml(value)
    .replace(/&amp;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&apos;|&rsquo;/gi, "'")
    .replace(/&ldquo;|&rdquo;/gi, "\"")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const getArticleSections = (html = "") => {
  if (!hasValue(html)) {
    return [];
  }

  const headingPattern = /<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...html.matchAll(headingPattern)];

  if (matches.length === 0) {
    return [
      {
        id: "article",
        heading: "Article",
        level: 2,
        body: html,
      },
    ];
  }

  const sections = [];
  const intro = html.slice(0, matches[0].index).trim();

  if (stripHtml(intro)) {
    sections.push({
      id: "overview",
      heading: "Overview",
      level: 2,
      body: intro,
    });
  }

  matches.forEach((match, index) => {
    const heading = stripHtml(match[2]) || `Section ${index + 1}`;
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? html.length;
    const body = html.slice(start, end).trim();

    sections.push({
      id: `${slugifyText(heading) || "section"}-${index + 1}`,
      heading,
      level: Number(match[1]),
      body,
    });
  });

  return sections.filter((section) => stripHtml(section.body) || section.heading);
};

const hasValue = (value) => typeof value === "string" && value.trim().length > 0;
const useValue = (value, fallback = "") => (hasValue(value) ? value.trim() : fallback);

const getPrerenderedBlogPost = (slug) => {
  if (typeof window === "undefined") {
    return null;
  }

  const post = window.__PRERENDERED_BLOG_POST__;
  return post?.slug === slug ? post : null;
};

const getSchemaJson = (post, schemaType, description, image) => {
  if (!post) {
    return "";
  }

  if (post.schemaJson) {
    try {
      return JSON.stringify(JSON.parse(post.schemaJson));
    } catch (_error) {
      return "";
    }
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": schemaType || "BlogPosting",
    headline: post.title,
    description,
    image: image || undefined,
    datePublished: post.createdAt || undefined,
    dateModified: post.updatedAt || post.createdAt || undefined,
    author: {
      "@type": "Organization",
      name: "Blucom Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Blucom Technologies",
    },
  });
};

const SingleBlog = () => {
  const { slug } = useParams();
  const location = useLocation();
  const contentBasePath = location.pathname.startsWith("/ideas")
    ? "/ideas"
    : location.pathname.startsWith("/news")
    ? "/news"
    : "/blog";
  const prerenderedPost = getPrerenderedBlogPost(slug);
  const [post, setPost] = useState(prerenderedPost);
  const [loading, setLoading] = useState(!prerenderedPost);
  const [usingFallbackPost, setUsingFallbackPost] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [leadStatus, setLeadStatus] = useState("idle");
  const [leadError, setLeadError] = useState("");
  const [copyStatus, setCopyStatus] = useState("idle");
  const [readingProgress, setReadingProgress] = useState(0);
  const seoTitle = useValue(post?.seoTitle, useValue(post?.title, "Blog Post"));
  const seoDescription = useValue(
    post?.seoDescription,
    useValue(
      post?.description,
      useValue(
        stripHtml(post?.content || "").slice(0, 180),
        "Read the latest insights from Blucomtechnologies.",
      ),
    ),
  );
  const metaKeywords = useValue(post?.metaKeywords, useValue(post?.seoKeywords));
  const socialTitle = useValue(post?.socialTitle, seoTitle);
  const socialDescription = useValue(post?.socialDescription, seoDescription);
  const socialImage = useValue(post?.socialImage, useValue(post?.image));
  const canonicalUrl = useValue(
    post?.canonicalUrl,
    slug ? `https://www.blucomtechnologies.com${contentBasePath}/${slug}` : "",
  );
  const metaRobots = useValue(post?.metaRobots, "index, follow");
  const relatedPosts = Array.isArray(post?.relatedPosts)
    ? post.relatedPosts.slice(0, 5)
    : [];
  const schemaJson = getSchemaJson(
    post,
    post?.schemaType || "BlogPosting",
    seoDescription,
    socialImage,
  );
  const postDescription = post ? getPostDescription(post) : "";
  const readTime = post?.content ? estimateReadTime(post.content) : "";
  const publishedDate = post ? formatDate(post.createdAt) : "";
  const articleSections = post?.content ? getArticleSections(post.content) : [];
  const articleTitleText = normalizeComparableText(post?.title);
  const tableOfContentsSections = articleSections.filter(
    (section) =>
      section.level <= 3 && normalizeComparableText(section.heading) !== articleTitleText,
  );
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : canonicalUrl || `https://www.blucomtechnologies.com${location.pathname}`;
  const encodedShareUrl = encodeURIComponent(currentUrl);
  const encodedShareTitle = encodeURIComponent(post?.title || seoTitle);
  const shareLinks = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`,
    },
    {
      label: "X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedShareTitle}`,
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedShareTitle}&body=${encodedShareUrl}`,
    },
  ];

  useEffect(() => {
    let isMounted = true;
    const staticPost = getPrerenderedBlogPost(slug);

    if (staticPost) {
      setPost(staticPost);
      setUsingFallbackPost(false);
      setLoading(false);
      return () => {
        isMounted = false;
      };
    }

    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getPostBySlug(slug);

        if (isMounted) {
          setPost(data || FALLBACK_BLOG_POSTS[0]);
          setUsingFallbackPost(!data);
        }
      } catch (_fetchError) {
        if (isMounted) {
          const fallbackPost =
            FALLBACK_BLOG_POSTS.find((item) => item.slug === slug) ||
            FALLBACK_BLOG_POSTS[0];
          setPost(fallbackPost);
          setUsingFallbackPost(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!post?.content || typeof window === "undefined") {
      setReadingProgress(0);
      return undefined;
    }

    const updateReadingProgress = () => {
      const articleContent = document.getElementById("article-content");

      if (!articleContent) {
        setReadingProgress(0);
        return;
      }

      const rect = articleContent.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const articleTop = rect.top + scrollTop;
      const start = articleTop - 120;
      const end = articleTop + articleContent.offsetHeight - window.innerHeight;
      const total = Math.max(end - start, 1);
      const progress = ((scrollTop - start) / total) * 100;

      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress);

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, [post?.content, slug]);

  const handleLeadChange = (event) => {
    const { name, value } = event.target;
    setLeadForm((current) => ({ ...current, [name]: value }));
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLeadStatus("submitting");
    setLeadError("");

    try {
      await createContactLead({
        ...leadForm,
        title: `Lead magnet: ${post?.title || "Blog article"}`,
        message:
          leadForm.message ||
          `I want the article checklist for ${post?.title || currentUrl}.`,
        source: "blog_single_lead_magnet",
      });

      setLeadForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setLeadStatus("success");
    } catch (submitError) {
      console.error("[blog-lead][submit]", submitError);
      setLeadError("Unable to submit right now. Please try again.");
      setLeadStatus("error");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch (_error) {
      setCopyStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {seoTitle
            ? `${seoTitle} | Blucomtechnologies Blog`
            : "Blog Post | Blucomtechnologies"}
        </title>
        <meta
          name="description"
          content={seoDescription}
        />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
        <meta name="robots" content={metaRobots} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        {socialImage && <meta property="og:image" content={socialImage} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content={socialImage ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={socialDescription} />
        {socialImage && <meta name="twitter:image" content={socialImage} />}
        {schemaJson && (
          <script type="application/ld+json">{schemaJson}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-gray-100 text-slate-950">
        <BlogNav readingProgress={readingProgress} />
        <main>
          {loading && (
            <div className="mx-auto max-w-7xl px-6 py-24 text-center text-sm font-semibold text-slate-700 lg:px-8">
              Loading post...
            </div>
          )}

          {!loading && post && (
            <article>
              {usingFallbackPost && (
                <div className="mx-auto mt-8 max-w-7xl rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-900 lg:px-8">
                  Live blog content is unavailable, so a preview post is shown.
                </div>
              )}

              <section className="relative overflow-hidden bg-gray-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-300" />
                <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                  {post.image && (
                    <div className="overflow-hidden border border-emerald-100 bg-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="max-h-[560px] min-h-[320px] w-full object-cover"
                      />
                    </div>
                  )}

                  <header className="mt-10 max-w-4xl">
                    <div className="mb-6 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200">
                        <Sparkles className="h-4 w-4" />
                        {post.category || "Blog"}
                      </span>
                      {post.subcategory && (
                        <span className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                          {post.subcategory}
                        </span>
                      )}
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                      {post.title}
                    </h1>

                    {postDescription && (
                      <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                        {postDescription}
                      </p>
                    )}

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      <div className="flex min-h-32 flex-col items-start gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700 ring-1 ring-emerald-100">
                        <CalendarDays className="h-5 w-5 text-emerald-700" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Published</span>
                        <span className="font-semibold">{publishedDate || "Latest"}</span>
                      </div>
                      <div className="flex min-h-32 flex-col items-start gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700 ring-1 ring-emerald-100">
                        <Clock3 className="h-5 w-5 text-emerald-700" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Reading</span>
                        <span className="font-semibold">{readTime}</span>
                      </div>
                      <div className="flex min-h-32 flex-col items-start gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700 ring-1 ring-emerald-100">
                        <Tag className="h-5 w-5 text-emerald-700" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Focus</span>
                        <span className="font-semibold">{post.focusKeyword || post.category || "Blucom insight"}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="#article-content"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                      >
                        Read article
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <Link
                        to={contentBasePath}
                        className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:text-emerald-700 hover:ring-emerald-200"
                      >
                        Back to listing
                      </Link>
                    </div>
                  </header>
                </div>
              </section>

              <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid gap-8 xl:grid-cols-[minmax(0,900px)_320px] xl:items-start xl:justify-center 2xl:grid-cols-[300px_minmax(780px,900px)_320px]">
                  <aside className="xl:col-span-2 2xl:sticky 2xl:top-24 2xl:col-span-1 2xl:self-start">
                    <div className="grid gap-6">
                    <div className="border-l-4 border-emerald-500 bg-white p-5 pl-5 shadow-sm ring-1 ring-slate-200 2xl:bg-transparent 2xl:p-0 2xl:pl-5 2xl:shadow-none 2xl:ring-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">In this page</p>
                      <nav className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-emerald-700 2xl:grid">
                        {tableOfContentsSections.map((section) => (
                          <a key={section.id} href={`#${section.id}`} className="rounded-lg bg-emerald-50 px-3 py-2 transition hover:underline 2xl:bg-transparent 2xl:px-0 2xl:py-0">
                            {section.heading}
                          </a>
                        ))}
                        {relatedPosts.length > 0 && (
                          <a href="#related-posts" className="rounded-lg bg-emerald-50 px-3 py-2 transition hover:underline 2xl:bg-transparent 2xl:px-0 2xl:py-0">Related posts</a>
                      )}
                    </nav>
                  </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                      <h2 className="text-2xl font-semibold leading-tight text-slate-950">
                        Send this insight to your team
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Share the article link or copy it for your campaign planning notes.
                      </p>
                      <div className="mt-5 grid gap-3">
                        {shareLinks.map(({ label, icon: Icon, href }) => (
                          <a
                            key={label}
                            href={href}
                            target={label === "Email" ? undefined : "_blank"}
                            rel={label === "Email" ? undefined : "noreferrer"}
                            className="inline-flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:text-emerald-700"
                          >
                            <span className="inline-flex items-center gap-3">
                              <Icon className="h-4 w-4" />
                              {label}
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ))}
                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="inline-flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:text-emerald-700"
                        >
                          <span className="inline-flex items-center gap-3">
                            <Copy className="h-4 w-4" />
                            {copyStatus === "copied" ? "Copied" : "Copy link"}
                          </span>
                          {copyStatus === "copied" ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </aside>

                  <div className="grid gap-12">
                    <div
                      id="article-content"
                      className="grid gap-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                    >
                      {articleSections.map((section, index) => (
                        <section
                          id={section.id}
                          key={section.id}
                          className="scroll-mt-24"
                        >
                          {section.level === 2 && (
                            <>
                              <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                                {section.heading}
                              </h2>
                            </>
                          )}
                          {section.level === 1 && (
                            <h2 className="text-4xl font-semibold leading-tight text-slate-950">
                              {section.heading}
                            </h2>
                          )}
                          {section.level === 3 && (
                            <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                              {section.heading}
                            </h3>
                          )}
                          {section.level === 4 && (
                            <h4 className="text-xl font-semibold leading-snug text-slate-900">
                              {section.heading}
                            </h4>
                          )}
                          <div
                            className="blog-article-rich-text prose prose-lg mt-6 max-w-none prose-headings:font-semibold prose-headings:leading-tight prose-headings:text-slate-950 prose-a:font-semibold prose-a:no-underline prose-p:leading-8 prose-p:text-slate-700 prose-li:leading-8 prose-li:text-slate-700 prose-img:rounded-lg"
                            dangerouslySetInnerHTML={{ __html: section.body }}
                          />
                        </section>
                      ))}
                    </div>

                    {relatedPosts.length > 0 && (
                      <aside id="related-posts" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                          02
                        </span>
                        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                              Related Posts
                            </h2>
                            <p className="mt-3 text-base leading-8 text-slate-600">
                              Continue with selected ideas connected to this topic.
                            </p>
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            {relatedPosts.length} selected
                          </span>
                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                          {relatedPosts.map((relatedPost) => (
                            <Link
                              key={relatedPost.slug}
                              to={`/blog/${relatedPost.slug}`}
                              className="group grid overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-emerald-200 hover:shadow-md sm:grid-cols-[150px_minmax(0,1fr)]"
                            >
                              <div className="min-h-[150px] bg-slate-100">
                                {relatedPost.image ? (
                                  <img
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <div className="h-full w-full bg-slate-100" />
                                )}
                              </div>
                              <div className="p-5">
                                <div className="mb-3 flex flex-wrap gap-2">
                                  {relatedPost.category && (
                                    <span className="rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                                      {relatedPost.category}
                                    </span>
                                  )}
                                  {relatedPost.focusKeyword && (
                                    <span className="rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-700 ring-1 ring-emerald-200">
                                      {relatedPost.focusKeyword}
                                    </span>
                                  )}
                                </div>
                                <h3 className="text-lg font-semibold leading-7 text-slate-950 transition group-hover:text-emerald-700">
                                  {getPostTitle(relatedPost)}
                                </h3>
                                {relatedPost.description && (
                                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                    {getPostDescription(relatedPost)}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </aside>
                    )}
                  </div>

                  <aside className="grid gap-6 xl:sticky xl:top-24 xl:self-start">
                    <div className="rounded-lg border border-emerald-200 bg-[#f0fbf7] p-6 shadow-sm">
                      <h2 className="text-2xl font-semibold leading-tight text-slate-950">
                        Get the campaign checklist
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        Leave your details and our team will share a practical checklist connected to this topic.
                      </p>

                      <form onSubmit={handleLeadSubmit} className="mt-5 grid gap-3">
                        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Name
                          <span className="relative">
                            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                              name="name"
                              value={leadForm.name}
                              onChange={handleLeadChange}
                              required
                              className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium normal-case tracking-normal text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                              placeholder="Your name"
                            />
                          </span>
                        </label>
                        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Email
                          <span className="relative">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                              type="email"
                              name="email"
                              value={leadForm.email}
                              onChange={handleLeadChange}
                              required
                              className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium normal-case tracking-normal text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                              placeholder="name@company.com"
                            />
                          </span>
                        </label>
                        <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Company
                          <span className="relative">
                            <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                              name="company"
                              value={leadForm.company}
                              onChange={handleLeadChange}
                              className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium normal-case tracking-normal text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                              placeholder="Company"
                            />
                          </span>
                        </label>
                        <textarea
                          name="message"
                          value={leadForm.message}
                          onChange={handleLeadChange}
                          rows={3}
                          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                          placeholder="What are you planning?"
                        />
                        {leadError && (
                          <p className="text-sm font-semibold text-red-600">{leadError}</p>
                        )}
                        {leadStatus === "success" && (
                          <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" />
                            Request received.
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={leadStatus === "submitting"}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {leadStatus === "submitting" ? "Sending..." : "Send checklist"}
                          <Send className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  </aside>
                </div>
              </section>
            </article>
          )}
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
