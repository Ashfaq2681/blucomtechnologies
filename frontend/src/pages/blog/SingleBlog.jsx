import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { FALLBACK_BLOG_POSTS, getPostBySlug } from "../../api/blogs";
import { formatDate } from "./utils";

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
    slug ? `https://www.blucomtechnologies.com/blog/${slug}` : "",
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

      <div className="min-h-screen bg-white text-slate-900">
        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="mb-10">
            <Link
              to="/blog"
              className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700 hover:underline"
            >
              Back to blog
            </Link>
          </div>

          {loading && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              Loading post...
            </div>
          )}

          {!loading && post && (
            <article>
              {usingFallbackPost && (
                <div className="mb-8 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
                  Live blog content is unavailable, so a preview post is shown.
                </div>
              )}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-md bg-gray-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                    {post.category}
                  </span>
                  {post.subcategory && (
                    <span className="rounded-md bg-slate-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-gray-900">
                      {post.subcategory}
                    </span>
                  )}
                </div>
                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#1d2d35] md:text-6xl">
                  {post.title}
                </h1>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                {post.description && (
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {post.description}
                  </p>
                )}
              </div>

              <div className="mb-12 overflow-hidden border border-gray-100 bg-slate-100 shadow-sm">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="max-h-[520px] w-full object-cover"
                  />
                ) : (
                  <div className="h-[360px] bg-gradient-to-br from-slate-200 via-white to-slate-100" />
                )}
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-[#1d2d35] prose-p:leading-8 prose-p:text-slate-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {relatedPosts.length > 0 && (
                <aside className="mt-16 border-t border-slate-200 pt-10">
                  <div className="mb-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                      Keep reading
                    </span>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[#1d2d35]">
                      Related Posts
                    </h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
                      >
                        <div className="mb-3 flex flex-wrap gap-2">
                          {relatedPost.category && (
                            <span className="bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-slate-600">
                              {relatedPost.category}
                            </span>
                          )}
                          {relatedPost.focusKeyword && (
                            <span className="bg-blue-50 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-blue-700">
                              {relatedPost.focusKeyword}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-black leading-snug text-[#1d2d35] transition group-hover:text-blue-700">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.description && (
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            {relatedPost.description}
                          </p>
                        )}
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
