import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { getDashboardPosts } from "../../api/blogs";

const statusClasses = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Draft: "bg-amber-50 text-amber-700 ring-amber-200",
  Scheduled: "bg-blue-50 text-blue-700 ring-blue-200",
};

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getDashboardPosts();

        if (mounted) {
          setPosts(data);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError("Unable to load blog metrics.");
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
  }, []);

  const publishedCount = useMemo(
    () => posts.filter((post) => post.status === "published").length,
    [posts],
  );
  const draftCount = useMemo(
    () => posts.filter((post) => post.status === "draft").length,
    [posts],
  );
  const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);

  return (
    <>
      <PageMeta
        title="Blogs Dashboard | Blucom Technologies"
        description="Blog management overview for the dashboard."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Blogs" />
        <PageIntro
          eyebrow="Publishing"
          title="Manage editorial output from one dashboard space"
          description="Track what is published, what is queued, and what still needs writing without leaving the admin area."
          actions={
            <Link
              to="/Dashboard/write-blog"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Write Blog
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
              Live articles currently available to readers.
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
            <p className="text-sm font-medium text-slate-500">Scheduled</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              0
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Scheduling is not enabled in the current CMS.
            </p>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_380px]">
          <div className="rounded-[28px] border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Recent Blog Activity
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
                        className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                          statusClasses[
                            post.status === "published" ? "Published" : "Draft"
                          ]
                        }`}
                      >
                        {post.status}
                      </span>
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
                    <p className="mt-1">/{post.slug}</p>
                    <p className="mt-1">{post.subcategory || "No subcategory"}</p>
                  </div>
                </article>
              ))}
              {!loading && recentPosts.length === 0 && (
                <div className="px-6 py-8 text-sm text-slate-500">
                  No posts have been published through the CMS yet.
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
                to="/Dashboard/blog-list"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View List
              </Link>
              <Link
                to="/Dashboard/write-blog"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                New Draft
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
