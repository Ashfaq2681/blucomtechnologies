import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import { FALLBACK_BLOG_POSTS, getPostBySlug } from "../../api/blogs";
import { getPostDescription, getPostTitle } from "../../utils/postDescriptions";
import { estimateReadTime, formatDate } from "./utils";

const stripHtml = (value = "") =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

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

      <div className="min-h-screen bg-[#e9f1f8] text-slate-900">
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {loading && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              Loading post...
            </div>
          )}

          {!loading && post && (
            <article className="space-y-10">
              <div className="mx-auto max-w-5xl overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="max-h-[560px] min-h-[320px] w-full object-cover"
                  />
                ) : (
                  <div className="min-h-[320px] border border-slate-200 bg-slate-100" />
                )}
              </div>

              {usingFallbackPost && (
                <div className="border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
                  Live blog content is unavailable, so a preview post is shown.
                </div>
              )}

              <header className="text-center">
                <div className="mx-auto max-w-4xl">
                  <div className="flex flex-wrap justify-center gap-3">
                    {post.category && (
                      <span className="border border-blue-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-700">
                        {post.category}
                      </span>
                    )}
                    {post.subcategory && (
                      <span className="border border-slate-200 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-700">
                        {post.subcategory}
                      </span>
                    )}
                  </div>

                  <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-relaxed tracking-normal text-[#16242c] sm:text-5xl lg:text-6xl">
                    {post.title}
                  </h1>

                  {postDescription && (
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                      {postDescription}
                    </p>
                  )}

                  <div className="mx-auto mt-8 grid max-w-3xl gap-3 border-t border-slate-100 pt-6 text-sm font-bold text-slate-700 sm:grid-cols-3">
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Published
                      </span>
                      <span className="mt-1 block">{publishedDate || "Latest"}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Reading
                      </span>
                      <span className="mt-1 block">{readTime}</span>
                    </div>
                    {post.focusKeyword && (
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                          Focus
                        </span>
                        <span className="mt-1 block">{post.focusKeyword}</span>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              <div className="mx-auto max-w-4xl">
                <div className="border border-slate-200 bg-white px-5 py-8 sm:px-8 lg:px-12">
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-center prose-headings:font-black prose-headings:leading-relaxed prose-headings:tracking-normal prose-headings:text-[#16242c] prose-a:font-bold prose-a:text-blue-700 prose-p:leading-relaxed prose-p:text-slate-700 prose-li:leading-relaxed prose-li:text-slate-700 prose-img:mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <aside className="border border-slate-200 bg-white p-5 sm:p-8">
                  <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                        Keep reading
                      </span>
                      <h2 className="mt-2 text-3xl font-black tracking-tight text-[#16242c]">
                        Related Posts
                      </h2>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                      {relatedPosts.length} selected
                    </span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        to={`/blog/${relatedPost.slug}`}
                        className="group grid overflow-hidden border border-slate-200 bg-white transition hover:border-blue-200 hover:shadow-md sm:grid-cols-[150px_minmax(0,1fr)]"
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
                              <span className="border border-slate-200 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-slate-600">
                                {relatedPost.category}
                              </span>
                            )}
                            {relatedPost.focusKeyword && (
                              <span className="border border-blue-100 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-blue-700">
                                {relatedPost.focusKeyword}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-black leading-relaxed text-[#16242c] transition group-hover:text-blue-700">
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
            </article>
          )}
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
