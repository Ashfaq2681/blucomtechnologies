import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getPublishedPosts } from "../api/blogs";
import CategoryMenu from "../components/blog/CategoryMenu";

const FALLBACK_IMAGE_CLASSES = [
  "bg-indigo-100",
  "bg-blue-50",
  "bg-pink-50",
  "bg-emerald-50",
  "bg-blue-900",
];

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

const getImageClass = (index) =>
  FALLBACK_IMAGE_CLASSES[index % FALLBACK_IMAGE_CLASSES.length];

const estimateReadTime = (content = "") => {
  const plainText = content.replace(/<[^>]*>/g, " ").trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const PostImage = ({ src, alt, className, fallbackClass }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${className} ${fallbackClass} flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="h-12 w-12 rounded-lg bg-white/30 backdrop-blur-md" />
    </div>
  );
};

const EditorPick = ({ post, imageClass, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group mb-8 flex w-full cursor-pointer gap-4 text-left"
  >
    <div className="h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
      <PostImage
        src={post.image}
        alt={post.title}
        className="h-full w-full"
        fallbackClass={imageClass}
      />
    </div>
    <div>
      <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
        {post.category}
      </span>
      <h4 className="mt-2 text-sm font-bold leading-tight transition-colors group-hover:text-green-700">
        {post.title}
      </h4>
    </div>
  </button>
);

const ArticleCard = ({ post, imageClass, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group cursor-pointer text-left"
  >
    <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
      <PostImage
        src={post.image}
        alt={post.title}
        className="h-full w-full"
        fallbackClass={imageClass}
      />
    </div>
    <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
      {post.category}
    </span>
    <h3 className="mt-3 text-lg font-bold leading-tight transition-colors group-hover:text-blue-700">
      {post.title}
    </h3>
    <div className="mt-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-tight text-gray-400">
      <span>{formatDate(post.createdAt)}</span>
      <span>&bull;</span>
      <span>{estimateReadTime(post.content)}</span>
    </div>
  </button>
);

const ListArticle = ({ post, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group w-full cursor-pointer border-b border-gray-100 py-6 text-left last:border-0"
  >
    <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
      {post.category}
    </span>
    <h4 className="mt-3 text-[15px] font-bold leading-snug transition-colors group-hover:text-blue-700">
      {post.title}
    </h4>
    <div className="mt-2 flex items-center gap-2 text-[11px] font-medium text-gray-400">
      <span>{formatDate(post.createdAt)}</span>
      <span>&bull;</span>
      <span>{estimateReadTime(post.content)}</span>
    </div>
  </button>
);

const BlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPublishedPosts();

        if (isMounted) {
          setPosts(data);
          setError("");
        }
      } catch (_fetchError) {
        if (isMounted) {
          setError("Unable to load blog posts right now.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const featuredPost = posts.find((post) => post.featured) || posts[0] || null;
  const latestPosts = posts.filter((post) => post.slug !== featuredPost?.slug);
  const sidebarPosts = posts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Blucomtechnologies Blog | The Latest in Social Strategy</title>
        <meta
          name="description"
          content="Explore the latest in social media strategy, AI marketing, and data-driven insights."
        />
      </Helmet>

      <div className="min-h-screen bg-white font-sans text-slate-900">
        <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex h-auto max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
              <span className="text-2xl font-black tracking-tighter">Blog</span>
              <CategoryMenu className="hidden lg:flex" />
            </div>
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search the blog"
                className="w-64 rounded-full border border-transparent bg-gray-100 px-5 py-2.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <CategoryMenu className="lg:hidden" />
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          {loading && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              Loading posts...
            </div>
          )}

          {!loading && error && (
            <div className="py-24 text-center text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              No blog posts found.
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <>
              <div className="mb-24 flex flex-col gap-16 lg:flex-row">
                <section className="lg:w-2/3">
                  <h2 className="mb-8 inline-block border-b-2 border-black pb-1 text-xs font-black uppercase tracking-[0.2em]">
                    Featured Research
                  </h2>
                  {featuredPost && (
                    <>
                      <button
                        type="button"
                        onClick={() => handlePostClick(featuredPost.slug)}
                        className="group relative flex aspect-[16/9] w-full cursor-pointer items-end justify-start overflow-hidden rounded-3xl bg-zinc-900 text-left shadow-2xl"
                      >
                        <PostImage
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="absolute inset-0 h-full w-full"
                          fallbackClass="bg-zinc-900"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-black/20 to-purple-900/40" />
                        <div className="relative z-10 px-6 py-8 md:px-10 md:py-10">
                          <span className="rounded-md bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white/80">
                            {featuredPost.category}
                          </span>
                          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-6xl">
                            {featuredPost.title}
                          </h1>
                          <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-300 md:text-base">
                            {formatDate(featuredPost.createdAt)} &bull;{" "}
                            {estimateReadTime(featuredPost.content)}
                          </p>
                        </div>
                      </button>
                      <div className="mt-8">
                        <span className="rounded-md bg-zinc-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                          {featuredPost.category}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePostClick(featuredPost.slug)}
                          className="mt-6 block text-left text-4xl font-black leading-tight transition-colors hover:text-green-800 md:text-5xl"
                        >
                          {featuredPost.title}
                        </button>
                      </div>
                    </>
                  )}
                </section>

                <aside className="lg:w-1/3">
                  <div className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                    <p className="text-sm font-medium leading-relaxed text-blue-900">
                      Blucomtechnologies offers a suite of{" "}
                      <span className="font-bold text-blue-600 underline">
                        social media solutions
                      </span>{" "}
                      that supports organizations and agencies.
                    </p>
                  </div>
                  <h2 className="mb-8 inline-block border-b-2 border-black pb-1 text-xs font-black uppercase tracking-[0.2em]">
                    Editor&apos;s Picks
                  </h2>
                  <div className="space-y-2">
                    {sidebarPosts.map((post, index) => (
                      <EditorPick
                        key={post.id}
                        post={post}
                        imageClass={getImageClass(index)}
                        onClick={handlePostClick}
                      />
                    ))}
                  </div>
                </aside>
              </div>

              <div className="mb-10 flex items-end justify-between border-b-2 border-black pb-4">
                <h2 className="text-2xl font-black tracking-tight">The Latest</h2>
                <button
                  type="button"
                  onClick={() => navigate("/blog")}
                  className="flex items-center text-sm font-bold text-blue-700 hover:underline"
                >
                  View all <span className="ml-1 text-lg">&rsaquo;</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                  {latestPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                      <ArticleCard
                        post={post}
                        imageClass={getImageClass(index)}
                        onClick={handlePostClick}
                      />
                      {index === 1 && (
                        <div className="flex flex-col items-center justify-between rounded-2xl bg-[#001b3d] p-8 text-center text-white shadow-xl">
                          <div className="mb-4 flex items-center gap-2">
                            <div className="h-4 w-4 rotate-45 rounded-sm bg-green-500" />
                            <span className="text-md font-bold">
                              Blucomtechnologies
                            </span>
                          </div>
                          <h3 className="mb-4 text-lg font-bold leading-tight">
                            Scale your success on social with the leading platform
                          </h3>
                          <button className="w-full rounded-lg bg-[#00a87e] py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#008f6b]">
                            Start My Free Trial Today
                          </button>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="lg:col-span-3 lg:border-l lg:pl-10">
                  {sidebarPosts.map((post) => (
                    <ListArticle
                      key={`sidebar-${post.id}`}
                      post={post}
                      onClick={handlePostClick}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </main>

        <section className="mt-12 w-full rounded-t-[40px] bg-black px-4 pb-10 pt-20 text-white sm:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-xl font-bold tracking-tight">
              Learn more from Blucomtechnologies on social
            </h2>

            <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-800">
                <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <FaTiktok className="h-14 w-14 text-white opacity-90 drop-shadow-lg transition-transform group-hover:scale-110" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                    15 Years
                  </p>
                </div>
              </div>

              <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-700">
                <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <FaYoutube className="h-14 w-14 text-red-600 opacity-90 drop-shadow-lg transition-transform group-hover:scale-110" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Brand or campaign right
                  </p>
                </div>
              </div>

              <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-800">
                <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="rounded-lg border-2 border-white p-2">
                    <FaInstagram className="h-10 w-10 text-white opacity-90 transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                    I found our dream influencers
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2 rounded-3xl bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 p-6">
                <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
                  Your 5-step
                </span>
                <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
                  formula for
                </span>
                <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
                  securing social
                </span>
                <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
                  resource in 2026
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-end gap-8 border-t border-zinc-800 pt-10 md:flex-row">
              <span className="text-sm font-bold tracking-wide text-zinc-400">
                Follow us on social:
              </span>
              <div className="flex items-center gap-6 text-xl">
                <FaInstagram className="cursor-pointer transition-colors hover:text-pink-500" />
                <FaTiktok className="cursor-pointer transition-colors hover:text-cyan-400" />
                <FaYoutube className="cursor-pointer transition-colors hover:text-red-600" />
                <FaLinkedin className="cursor-pointer transition-colors hover:text-blue-600" />
                <FaPinterest className="cursor-pointer transition-colors hover:text-red-500" />
                <FaXTwitter className="cursor-pointer transition-colors hover:text-zinc-400" />
                <FaFacebook className="cursor-pointer transition-colors hover:text-blue-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogList;
