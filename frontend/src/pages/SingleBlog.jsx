import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostBySlug } from "../api/blogs";

const formatDate = (value) => {
  if (!value) {
    return "";
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const SingleBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getPostBySlug(slug);

        if (isMounted) {
          setPost(data || null);
          setError("");
        }
      } catch (_fetchError) {
        if (isMounted) {
          setError("Unable to load this post right now.");
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
          {post?.title
            ? `${post.title} | Blucomtechnologies Blog`
            : "Blog Post | Blucomtechnologies"}
        </title>
        <meta
          name="description"
          content={post?.title || "Read the latest insights from Blucomtechnologies."}
        />
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
            <div className="py-24 text-center text-sm font-semibold text-slate-500">
              Loading post...
            </div>
          )}

          {!loading && error && (
            <div className="py-24 text-center">
              <p className="text-sm font-semibold text-red-600">{error}</p>
              <button
                type="button"
                onClick={() => navigate("/blog")}
                className="mt-6 rounded-xl bg-[#005952] px-6 py-3 font-bold text-white transition-all hover:bg-[#00423d]"
              >
                Return to blog
              </button>
            </div>
          )}

          {!loading && !error && post && (
            <article>
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-md bg-gray-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                    {post.category}
                  </span>
                  {post.subcategory && (
                    <span className="rounded-md bg-slate-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500">
                      {post.subcategory}
                    </span>
                  )}
                </div>
                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#1d2d35] md:text-6xl">
                  {post.title}
                </h1>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>

              <div className="mb-12 overflow-hidden rounded-3xl border border-gray-100 bg-slate-100 shadow-sm">
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
            </article>
          )}
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
