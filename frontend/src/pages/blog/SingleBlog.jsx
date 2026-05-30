import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock3, Sparkles, Tag } from "lucide-react";
import { FALLBACK_BLOG_POSTS, getPostBySlug } from "../../api/blogs";
import { getPostDescription, getPostTitle } from "../../utils/postDescriptions";
import { estimateReadTime, formatDate } from "./utils";

const stripHtml = (value = "") =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const slugifyText = (value = "") =>
  stripHtml(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);

const getArticleSections = (html = "") => {
  if (!hasValue(html)) {
    return [];
  }

  const headingPattern = /<h([2-3])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...html.matchAll(headingPattern)];

  if (matches.length === 0) {
    return [
      {
        id: "article",
        heading: "Article",
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
                    <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-xl shadow-slate-950/10">
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

              <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
                  <aside className="lg:sticky lg:top-24 lg:self-start">
                    <div className="border-l-4 border-emerald-500 pl-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">In this page</p>
                      <nav className="mt-5 grid gap-3 text-sm font-semibold text-emerald-700">
                        {articleSections.map((section) => (
                          <a key={section.id} href={`#${section.id}`} className="transition hover:underline">
                            {section.heading}
                          </a>
                        ))}
                        {relatedPosts.length > 0 && (
                          <a href="#related-posts" className="transition hover:underline">Related posts</a>
                        )}
                      </nav>
                    </div>
                  </aside>

                  <div className="grid gap-12">
                    <div id="article-content" className="grid gap-12">
                      {articleSections.map((section, index) => (
                        <section
                          id={section.id}
                          key={section.id}
                          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                        >
                          <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                            {section.heading}
                          </h2>
                          <div
                            className="prose prose-lg mt-6 max-w-none prose-headings:font-semibold prose-headings:leading-tight prose-headings:text-slate-950 prose-a:font-semibold prose-a:text-emerald-700 prose-p:leading-8 prose-p:text-slate-700 prose-li:leading-8 prose-li:text-slate-700 prose-img:rounded-lg"
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
