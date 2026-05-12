import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  FALLBACK_BLOG_POSTS,
  deletePost,
  getDashboardPosts,
  getPublishedPosts,
  recalculatePostSeo,
} from "../../api/blogs";
import CreateBlog from "../dashboard/CreateBlog";
import SeoStatusBadge from "../dashboard/components/SeoStatusBadge";
import Ads from "./components/Ads";
import BlogHero from "./components/BlogHero";
import BlogNav from "./components/BlogNav";
import LatestPosts from "./components/LatestPosts";
import MarketingInsightsSection from "./components/MarketingInsightsSection";
import SocialFollow from "./components/SocialFollow";
import SocialMediaAnalytics from "./components/SocialMediaAnalytics";
import TopicHubs from "./components/TopicHubs";

const Blog = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("published");
  const [posts, setPosts] = useState([]);
  const [dashboardPosts, setDashboardPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingDashboardPosts, setLoadingDashboardPosts] = useState(false);
  const [dashboardError, setDashboardError] = useState("");
  const [usingFallbackPosts, setUsingFallbackPosts] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [busyPostId, setBusyPostId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPublishedPosts();

        if (isMounted) {
          const nextPosts = data.length > 0 ? data : FALLBACK_BLOG_POSTS;
          setPosts(nextPosts);
          setUsingFallbackPosts(data.length === 0);
        }
      } catch (_fetchError) {
        if (isMounted) {
          setPosts(FALLBACK_BLOG_POSTS);
          setUsingFallbackPosts(true);
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

  useEffect(() => {
    if (activeTab !== "manage") {
      return;
    }

    let isMounted = true;

    const fetchDashboardPosts = async () => {
      try {
        setLoadingDashboardPosts(true);
        const data = await getDashboardPosts();

        if (isMounted) {
          setDashboardPosts(data);
          setDashboardError("");
        }
      } catch (_error) {
        if (isMounted) {
          setDashboardError("Unable to load CMS posts.");
        }
      } finally {
        if (isMounted) {
          setLoadingDashboardPosts(false);
        }
      }
    };

    fetchDashboardPosts();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const handlePostClick = (slug) => {
    if (usingFallbackPosts) {
      return;
    }

    if (slug) {
      navigate(`/blog/${slug}`);
    }
  };

  const featuredPost = posts.find((post) => post.featured) || posts[0] || null;
  const latestPosts = posts
    .filter((post) => post.slug !== featuredPost?.slug)
    .slice(0, 5);
  const sidebarPosts = posts.slice(0, 3);
  const refreshDashboardPosts = async () => {
    const data = await getDashboardPosts();
    setDashboardPosts(data);
  };

  const handleDelete = async (postId) => {
    const confirmed = window.confirm("Delete this blog post?");

    if (!confirmed) {
      return;
    }

    try {
      setBusyPostId(postId);
      await deletePost(postId);
      setDashboardPosts((current) => current.filter((post) => post.id !== postId));
    } catch (_error) {
      setDashboardError("Unable to delete the selected post.");
    } finally {
      setBusyPostId(null);
    }
  };

  const handleRecalculateSeo = async (postId) => {
    try {
      setBusyPostId(postId);
      const updatedPost = await recalculatePostSeo(postId);
      setDashboardPosts((current) =>
        current.map((post) => (post.id === postId ? updatedPost : post)),
      );
    } catch (_error) {
      setDashboardError("Unable to recalculate SEO for the selected post.");
    } finally {
      setBusyPostId(null);
    }
  };

  const openEditor = (postId = null) => {
    setEditingPostId(postId);
    setActiveTab("write");
  };

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
        <BlogNav />

        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="flex flex-wrap gap-2">
              {[
                ["published", "Published"],
                ["manage", "Blog List"],
                ["write", editingPostId ? "Edit Blog" : "Write Blog"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    if (value === "write") {
                      setEditingPostId(null);
                    }
                    setActiveTab(value);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === value
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openEditor()}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              New Post
            </button>
          </div>

          {activeTab === "published" && loading && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              Loading posts...
            </div>
          )}

          {activeTab === "published" && !loading && posts.length > 0 && (
            <>
              {usingFallbackPosts && (
                <div className="mb-8 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
                  Live blog posts are unavailable, so preview posts are shown to keep this page filled.
                </div>
              )}
              <BlogHero
                featuredPost={featuredPost}
                sidebarPosts={sidebarPosts}
                onPostClick={handlePostClick}
              />
              <LatestPosts
                posts={latestPosts}
                sidebarPosts={sidebarPosts}
                onPostClick={handlePostClick}
                onViewAll={() => navigate("/blog")}
              />
            </>
          )}

          {activeTab === "manage" && (
            <section className="overflow-hidden border border-slate-200 bg-white">
              <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-[#1d2d35]">
                    Blog List
                  </h1>
                  <p className="mt-1 text-sm text-slate-600">
                    Manage published and draft posts from the same blog page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openEditor()}
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Write Blog
                </button>
              </div>

              {loadingDashboardPosts && (
                <div className="px-5 py-10 text-sm font-semibold text-slate-600">
                  Loading CMS posts...
                </div>
              )}

              {dashboardError && (
                <div className="px-5 py-4 text-sm font-semibold text-red-600">
                  {dashboardError}
                </div>
              )}

              {!loadingDashboardPosts && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr className="text-left">
                        {["Title", "Status", "SEO", "Section", "Created", "Actions"].map((heading) => (
                          <th key={heading} className="px-4 py-3 text-xs font-black uppercase tracking-widest text-slate-500">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {dashboardPosts.map((post) => (
                        <tr key={post.id} className="align-top">
                          <td className="px-4 py-4">
                            <p className="font-bold text-slate-900">{post.title}</p>
                            <p className="mt-1 text-sm text-slate-500">/blog/{post.slug}</p>
                            <p className="mt-1 text-sm text-slate-500">{post.category}</p>
                          </td>
                          <td className="px-4 py-4 text-sm capitalize text-slate-600">{post.status}</td>
                          <td className="px-4 py-4"><SeoStatusBadge score={post.seoScore} status={post.seoStatus || post.seoBreakdown?.status} /></td>
                          <td className="px-4 py-4 text-sm capitalize text-slate-600">{post.section || "archive"}</td>
                          <td className="px-4 py-4 text-sm text-slate-600">
                            {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US") : ""}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-wrap gap-2">
                              <button type="button" onClick={() => openEditor(post.id)} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                Edit
                              </button>
                              <button type="button" onClick={() => handleRecalculateSeo(post.id)} disabled={busyPostId === post.id} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 disabled:opacity-60">
                                {busyPostId === post.id ? "Working..." : "Score SEO"}
                              </button>
                              <button type="button" onClick={() => handleDelete(post.id)} disabled={busyPostId === post.id} className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 disabled:opacity-60">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {dashboardPosts.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-4 py-10 text-center text-sm font-semibold text-slate-500">
                            No posts have been created yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {activeTab === "write" && (
            <div className="blog-embedded-editor rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <CreateBlog
                key={editingPostId || "new"}
                postId={editingPostId}
                returnTo="/blog"
                showDashboardChrome={false}
                onSaved={async () => {
                  await refreshDashboardPosts();
                  setEditingPostId(null);
                  setActiveTab("manage");
                }}
              />
            </div>
          )}
        </main>

        {activeTab === "published" && (
          <>
            <SocialFollow />
            <SocialMediaAnalytics />
            <MarketingInsightsSection />
            <TopicHubs />
            <Ads />
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
