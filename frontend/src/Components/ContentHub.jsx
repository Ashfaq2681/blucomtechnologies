import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FALLBACK_BLOG_POSTS,
  deletePost,
  getDashboardPosts,
  getPublishedPosts,
  recalculatePostSeo,
} from "../api/blogs";
import CreateBlog from "../pages/dashboard/CreateBlog";
import SeoStatusBadge from "../pages/dashboard/components/SeoStatusBadge";
import { getPostDescription, getPostTitle } from "../utils/postDescriptions";
import PageSeo from "./PageSeo";

const matchesContentType = (post, contentType) => {
  if (contentType === "Blog") {
    const values = [post.category, post.subcategory, post.section, post.tags]
      .flat()
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return !values.includes("ideas") && !values.includes("news");
  }

  const target = contentType.toLowerCase();
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return values.includes(target);
};

const ContentHub = ({
  contentType = "Blog",
  path = "/blog",
  title,
  description,
  eyebrow,
  heroImage = "/news/news_bg.png",
  accentClass = "bg-[#00AE80]",
  editorInitialValues = {},
  showManagement = true,
  publicPostLimit = null,
  showHero = true,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("published");
  const [posts, setPosts] = useState([]);
  const [dashboardPosts, setDashboardPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingDashboardPosts, setLoadingDashboardPosts] = useState(false);
  const [error, setError] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  const [busyPostId, setBusyPostId] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getPublishedPosts();
        const filtered = data.filter((post) => matchesContentType(post, contentType));
        const nextPosts = filtered.length > 0 ? filtered : data;

        if (mounted) {
          setPosts(nextPosts.length > 0 ? nextPosts : FALLBACK_BLOG_POSTS);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setPosts(FALLBACK_BLOG_POSTS);
          setError("Live content is unavailable, so preview posts are shown.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      mounted = false;
    };
  }, [contentType]);

  useEffect(() => {
    if (activeTab !== "manage") {
      return;
    }

    let mounted = true;

    const loadDashboardPosts = async () => {
      try {
        setLoadingDashboardPosts(true);
        const data = await getDashboardPosts();
        const filtered = data.filter((post) => matchesContentType(post, contentType));

        if (mounted) {
          setDashboardPosts(filtered.length > 0 ? filtered : data);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError("Unable to load CMS posts.");
        }
      } finally {
        if (mounted) {
          setLoadingDashboardPosts(false);
        }
      }
    };

    loadDashboardPosts();

    return () => {
      mounted = false;
    };
  }, [activeTab, contentType]);

  const visiblePosts = useMemo(
    () => (publicPostLimit ? posts.slice(0, publicPostLimit) : posts),
    [posts, publicPostLimit],
  );
  const featuredPost = visiblePosts[0] || null;
  const gridPosts = useMemo(() => visiblePosts.slice(1, 9), [visiblePosts]);

  const refreshDashboardPosts = async () => {
    const data = await getDashboardPosts();
    const filtered = data.filter((post) => matchesContentType(post, contentType));
    setDashboardPosts(filtered.length > 0 ? filtered : data);
  };

  const openEditor = (postId = null) => {
    setEditingPostId(postId);
    setActiveTab("write");
  };

  const handleDelete = async (postId) => {
    const confirmed = window.confirm(`Delete this ${contentType.toLowerCase()} post?`);

    if (!confirmed) {
      return;
    }

    try {
      setBusyPostId(postId);
      await deletePost(postId);
      setDashboardPosts((current) => current.filter((post) => post.id !== postId));
    } catch (_error) {
      setError("Unable to delete the selected post.");
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
      setError("Unable to recalculate SEO for the selected post.");
    } finally {
      setBusyPostId(null);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageSeo path={path} title={title} description={description} />

      {showHero && (
        <section className="relative min-h-[58vh] overflow-hidden">
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className={`absolute inset-0 ${accentClass} opacity-80`} />
          <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-32 text-white sm:px-6">
            <p className="text-sm font-black uppercase tracking-[0.24em]">{eyebrow || contentType}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{description}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {showManagement && (
          <div className="mb-8 border-b border-slate-200 pb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                  Content workspace
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {contentType} editor
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1">
                  {[
                    ["published", "Published"],
                    ["manage", `${contentType} List`],
                    ["write", editingPostId ? `Edit ${contentType}` : `Write ${contentType}`],
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
                      className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                        activeTab === value
                          ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200"
                          : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openEditor()}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  New {contentType}
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
            {error}
          </div>
        )}

        {activeTab === "published" && loading && (
          <div className="py-24 text-center text-sm font-semibold text-slate-700">
            Loading posts...
          </div>
        )}

        {activeTab === "published" && !loading && (
          <>
            {featuredPost && (
              <Link to={`${path}/${featuredPost.slug}`} className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="min-h-[360px] overflow-hidden bg-slate-100">
                  {featuredPost.image ? (
                    <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover" />
                  ) : null}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                    Featured {contentType}
                  </p>
                  <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1d2d35]">
                    {getPostTitle(featuredPost)}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {getPostDescription(featuredPost)}
                  </p>
                </div>
              </Link>
            )}

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Link key={post.id || post.slug} to={`${path}/${post.slug}`} className="group block">
                  <div className="h-56 overflow-hidden bg-slate-100">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    ) : null}
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                    {post.category || contentType}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-snug text-[#1d2d35] group-hover:text-blue-700">
                    {getPostTitle(post)}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {getPostDescription(post)}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {activeTab === "manage" && (
          <section className="overflow-hidden border border-slate-200 bg-white">
            {loadingDashboardPosts ? (
              <div className="px-5 py-10 text-sm font-semibold text-slate-600">
                Loading CMS posts...
              </div>
            ) : (
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
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {activeTab === "write" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <CreateBlog
              key={editingPostId || `new-${contentType}`}
              postId={editingPostId}
              returnTo={path}
              showDashboardChrome={false}
              initialValues={editorInitialValues}
              onSaved={async () => {
                await refreshDashboardPosts();
                setEditingPostId(null);
                setActiveTab("manage");
              }}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default ContentHub;
