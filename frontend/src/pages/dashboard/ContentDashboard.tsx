import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { deletePost, getDashboardPosts, recalculatePostSeo } from "../../api/blogs";
import SeoStatusBadge from "./components/SeoStatusBadge";

type ContentDashboardProps = {
  contentType: "Blog" | "Ideas" | "News";
  routeBase: string;
  writePath: string;
  editPathBase: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  emptyMessage?: string;
};

const statusClasses = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Draft: "bg-amber-50 text-amber-700 ring-amber-200",
  Scheduled: "bg-blue-50 text-blue-700 ring-blue-200",
};

const matchesContentType = (post: any, contentType: string) => {
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

export default function ContentDashboard({
  contentType,
  routeBase,
  writePath,
  editPathBase,
  title,
  description,
  metaTitle,
  metaDescription,
  emptyMessage = "No posts have been created yet.",
}: ContentDashboardProps) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyPostId, setBusyPostId] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getDashboardPosts();

        if (mounted) {
          setPosts(data.filter((post: any) => matchesContentType(post, contentType)));
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError(`Unable to load ${contentType.toLowerCase()} metrics.`);
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

  const publishedCount = useMemo(
    () => posts.filter((post) => post.status === "published").length,
    [posts],
  );
  const draftCount = useMemo(
    () => posts.filter((post) => post.status === "draft").length,
    [posts],
  );
  const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);
  const averageSeoScore = useMemo(() => {
    const scoredPosts = posts.filter((post) => typeof post.seoScore === "number");

    if (scoredPosts.length === 0) {
      return null;
    }

    return Math.round(
      scoredPosts.reduce((total, post) => total + post.seoScore, 0) / scoredPosts.length,
    );
  }, [posts]);

  const handleDelete = async (postId: number) => {
    const confirmed = window.confirm(`Delete this ${contentType.toLowerCase()} post?`);

    if (!confirmed) {
      return;
    }

    try {
      setBusyPostId(postId);
      await deletePost(postId);
      setPosts((current) => current.filter((post) => post.id !== postId));
      setError("");
    } catch (_error) {
      setError("Unable to delete the selected post.");
    } finally {
      setBusyPostId(null);
    }
  };

  const handleRecalculateSeo = async (postId: number) => {
    try {
      setBusyPostId(postId);
      const updatedPost = await recalculatePostSeo(postId);
      setPosts((current) =>
        current.map((post) => (post.id === postId ? updatedPost : post)),
      );
      setError("");
    } catch (_error) {
      setError("Unable to recalculate SEO for the selected post.");
    } finally {
      setBusyPostId(null);
    }
  };

  return (
    <>
      <PageMeta title={metaTitle} description={metaDescription} />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={contentType} />
        <PageIntro
          eyebrow="Publishing"
          title={title}
          description={description}
          actions={
            <Link
              to={writePath}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Write {contentType}
            </Link>
          }
        />

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Published</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : publishedCount}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Live {contentType.toLowerCase()} posts currently available to readers.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Drafts</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : draftCount}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Posts still in writing, review, or revision.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Average SEO Score</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : averageSeoScore ?? "N/A"}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Published posts are blocked below the configured threshold.
            </p>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_380px]">
          <div className="rounded-[28px] border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Recent {contentType} Activity
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                A quick snapshot of your latest content pipeline.
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:px-7 lg:flex-row lg:items-start lg:justify-between"
                >
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {post.category}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ${
                          statusClasses[
                            post.status === "published" ? "Published" : "Draft"
                          ]
                        }`}
                      >
                        {post.status}
                      </span>
                      <SeoStatusBadge score={post.seoScore} status={post.seoStatus || post.seoBreakdown?.status} />
                    </div>
                    <h4 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="min-w-[180px] text-sm text-slate-500 lg:text-right">
                    <p>{post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US") : ""}</p>
                    <p className="mt-1">{routeBase}/{post.slug}</p>
                    <p className="mt-1">{post.subcategory || "No subcategory"}</p>
                  </div>
                </article>
              ))}
              {!loading && recentPosts.length === 0 && (
                <div className="px-6 py-8 text-sm text-slate-500">
                  {emptyMessage}
                </div>
              )}
              {!loading && error && (
                <div className="px-6 py-8 text-sm text-red-600">{error}</div>
              )}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">
              Editorial Checklist
            </h3>
            <div className="mt-5 space-y-4">
              {[
                "Confirm the keyword target and user intent before drafting.",
                "Write a stronger opening section with a clear value promise.",
                "Add a CTA, category, and publish date before review.",
                "Proofread formatting, slug, and metadata before publishing.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                to={writePath}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                New Draft
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white">
          <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">
              {contentType} List
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              All drafts and published posts with edit, SEO, and delete actions.
            </p>
          </div>

          {loading && (
            <div className="px-6 py-10 text-sm font-medium text-slate-500">
              Loading posts...
            </div>
          )}

          {!loading && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    {["Title", "Category", "Status", "SEO", "Section", "Featured", "Created", "Actions"].map((heading) => (
                      <th
                        key={heading}
                        className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {posts.map((post) => (
                    <tr key={post.id} className="align-top">
                      <td className="px-4 py-4">
                        <div className="min-w-[260px]">
                          <p className="font-semibold text-slate-900">{post.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {routeBase}/{post.slug}
                          </p>
                          <p className="text-sm leading-6 text-slate-500">
                            {post.subcategory || "No subcategory"}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {post.category}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ${
                            post.status === "published"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                              : "bg-amber-50 text-amber-700 ring-amber-200"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <SeoStatusBadge score={post.seoScore} status={post.seoStatus || post.seoBreakdown?.status} />
                        {post.autoGenerated && (
                          <p className="mt-2 text-xs font-medium text-blue-700">Auto SEO</p>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm capitalize text-slate-600">
                        {post.section || "archive"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {post.featured ? "Yes" : "No"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US") : ""}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            to={`${editPathBase}/${post.id}`}
                            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleRecalculateSeo(post.id)}
                            disabled={busyPostId === post.id}
                            className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {busyPostId === post.id ? "Working..." : "Score SEO"}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                            disabled={busyPostId === post.id}
                            className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-10 text-center text-sm font-medium text-slate-500"
                      >
                        {emptyMessage}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
