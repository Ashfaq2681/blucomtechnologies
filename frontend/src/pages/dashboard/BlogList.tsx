import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { deletePost, getDashboardPosts } from "../../api/blogs";

const statusClasses = {
  published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  draft: "bg-amber-50 text-amber-700 ring-amber-200",
};

const formatDate = (value: string) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function BlogList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

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
          setError("Unable to load posts from the CMS.");
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

  const handleDelete = async (postId: number) => {
    const confirmed = window.confirm("Delete this blog post?");
    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(postId);
      await deletePost(postId);
      setPosts((current) => current.filter((post) => post.id !== postId));
    } catch (_error) {
      setError("Unable to delete the selected post.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <PageMeta
        title="Blog List Dashboard | Blucom Technologies"
        description="List view for dashboard blog posts."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Blog List" />
        <PageIntro
          eyebrow="Content Library"
          title="Review posts, status, and publishing cadence"
          description="This table reflects the live MySQL-backed CMS and includes direct edit and delete actions."
        />

        <ComponentCard
          title="All Blog Posts"
          desc="A compact table for drafts and published posts."
          className="overflow-hidden"
        >
          {loading && (
            <div className="px-4 py-10 text-sm font-medium text-slate-500">
              Loading posts...
            </div>
          )}

          {!loading && error && (
            <div className="px-4 py-10 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Title
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Category
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Status
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Section
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Featured
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Created
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {posts.map((post) => (
                    <tr key={post.id} className="align-top">
                      <td className="px-4 py-4">
                        <div className="min-w-[260px]">
                          <p className="font-semibold text-slate-900">
                            {post.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            /blog/{post.slug}
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
                            statusClasses[post.status as keyof typeof statusClasses]
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm capitalize text-slate-600">
                        {post.section || "archive"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {post.featured ? "Yes" : "No"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {formatDate(post.createdAt)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => navigate(`/Dashboard/edit-blog/${post.id}`)}
                            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                            disabled={deletingId === post.id}
                            className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {deletingId === post.id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-4 py-10 text-center text-sm font-medium text-slate-500"
                      >
                        No posts have been created yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </ComponentCard>
      </div>
    </>
  );
}
