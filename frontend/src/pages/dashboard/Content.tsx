import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardPosts } from "../../api/blogs";
import { getVideos } from "../../api/videos";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageMeta from "./common/PageMeta";
import { getApplications, getJobs } from "./career/jobsStore";

type ContentMetric = {
  total: number | null;
  published?: number;
  drafts?: number;
  open?: number;
  applicants?: number;
};

type ContentSection = {
  title: string;
  description: string;
  path: string;
  actionLabel: string;
  secondaryPath?: string;
  secondaryLabel?: string;
  metricKey: string;
};

const sections: ContentSection[] = [
  {
    title: "Blog",
    description: "Manage long-form articles, drafts, SEO scoring, and published blog posts.",
    path: "/Dashboard/blog",
    actionLabel: "Open Blog",
    secondaryPath: "/Dashboard/write-blog",
    secondaryLabel: "Write Blog",
    metricKey: "blog",
  },
  {
    title: "Ideas",
    description: "Review thought pieces and campaign ideas from the editorial workspace.",
    path: "/Dashboard/ideas",
    actionLabel: "Open Ideas",
    secondaryPath: "/Dashboard/write-ideas",
    secondaryLabel: "Write Idea",
    metricKey: "ideas",
  },
  {
    title: "News",
    description: "Track announcements, updates, publication status, and metadata quality.",
    path: "/Dashboard/news",
    actionLabel: "Open News",
    secondaryPath: "/Dashboard/write-news",
    secondaryLabel: "Write News",
    metricKey: "news",
  },
  {
    title: "Video Library",
    description: "Check reusable video layouts and the dashboard video library workflow.",
    path: "/Dashboard/videos",
    actionLabel: "Open Library",
    secondaryPath: "/Dashboard/upload-video",
    secondaryLabel: "Upload Video",
    metricKey: "videos",
  },
  {
    title: "Upload Video",
    description: "Add video files, thumbnails, status, categories, and descriptions.",
    path: "/Dashboard/upload-video",
    actionLabel: "Upload Video",
    secondaryPath: "/Dashboard/videos",
    secondaryLabel: "View Library",
    metricKey: "videos",
  },
  {
    title: "Portfolio",
    description: "Maintain portfolio pages and publish case-study style work entries.",
    path: "/Dashboard/portfolio",
    actionLabel: "Open Portfolio",
    secondaryPath: "/Dashboard/write-portfolio",
    secondaryLabel: "Publish Portfolio",
    metricKey: "portfolio",
  },
  {
    title: "Careers",
    description: "Review job openings, applicant flow, and hiring page content.",
    path: "/Dashboard/career",
    actionLabel: "Open Careers",
    secondaryPath: "/Dashboard/career/post-job",
    secondaryLabel: "Post Job",
    metricKey: "careers",
  },
];

const emptyMetric: ContentMetric = { total: null };

const matchesContentType = (post: any, contentType: "blog" | "ideas" | "news") => {
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (contentType === "blog") {
    return !values.includes("ideas") && !values.includes("news");
  }

  return values.includes(contentType);
};

const summarizePosts = (posts: any[]) => ({
  total: posts.length,
  published: posts.filter((post) => post.status === "published").length,
  drafts: posts.filter((post) => post.status !== "published").length,
});

export default function Content() {
  const [metrics, setMetrics] = useState<Record<string, ContentMetric>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadMetrics = async () => {
      try {
        setLoading(true);
        const [posts, videos, jobs, applications] = await Promise.all([
          getDashboardPosts(),
          getVideos({ includeDrafts: true }),
          getJobs(),
          getApplications().catch(() => []),
        ]);

        if (!mounted) {
          return;
        }

        const blogPosts = posts.filter((post: any) => matchesContentType(post, "blog"));
        const ideaPosts = posts.filter((post: any) => matchesContentType(post, "ideas"));
        const newsPosts = posts.filter((post: any) => matchesContentType(post, "news"));

        setMetrics({
          blog: summarizePosts(blogPosts),
          ideas: summarizePosts(ideaPosts),
          news: summarizePosts(newsPosts),
          videos: {
            total: videos.length,
            published: videos.filter((video: any) => video.status === "published").length,
            drafts: videos.filter((video: any) => video.status !== "published").length,
          },
          portfolio: { total: null },
          careers: {
            total: jobs.length,
            open: jobs.filter((job) => job.status === "Open").length,
            applicants: applications.length,
          },
        });
        setError("");
      } catch (_error) {
        if (mounted) {
          setError("Unable to load some content metrics. Navigation links are still available.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadMetrics();

    return () => {
      mounted = false;
    };
  }, []);

  const totals = useMemo(() => {
    const knownTotals = Object.values(metrics)
      .map((metric) => metric.total)
      .filter((value): value is number => typeof value === "number");

    return {
      sections: sections.length,
      items: knownTotals.reduce((sum, value) => sum + value, 0),
      applicants: metrics.careers?.applicants || 0,
    };
  }, [metrics]);

  return (
    <>
      <PageMeta
        title="Content Dashboard | Blucom Technologies"
        description="Single dashboard summary for blog, ideas, news, videos, portfolio, and careers."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Content" />

        <section className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Content Operations
          </p>
          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Content
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                A single dashboard entry for Blog, Ideas, News, Video Library, Upload Video,
                Portfolio, and Careers workflows.
              </p>
            </div>
            <Link
              to="/Dashboard/write-blog"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              New Content
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Workflows</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {totals.sections}
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Tracked Items</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : totals.items}
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Applicants</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : totals.applicants}
            </p>
          </div>
        </section>

        {error ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-900">
            {error}
          </div>
        ) : null}

        <ComponentCard
          title="Content Areas"
          desc="Use this overview as the dashboard sidebar entry point for all publishing, media, portfolio, and hiring content."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {sections.map((section) => {
              const sectionMetric = metrics[section.metricKey] || emptyMetric;

              return (
                <article
                  key={section.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight text-slate-950">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {section.description}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Total
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-slate-950">
                        {loading ? "..." : sectionMetric.total ?? "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                    {typeof sectionMetric.published === "number" ? (
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
                        Published {sectionMetric.published}
                      </span>
                    ) : null}
                    {typeof sectionMetric.drafts === "number" ? (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-200">
                        Drafts {sectionMetric.drafts}
                      </span>
                    ) : null}
                    {typeof sectionMetric.open === "number" ? (
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
                        Open {sectionMetric.open}
                      </span>
                    ) : null}
                    {typeof sectionMetric.applicants === "number" ? (
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 ring-1 ring-blue-200">
                        Applicants {sectionMetric.applicants}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to={section.path}
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      {section.actionLabel}
                    </Link>
                    {section.secondaryPath ? (
                      <Link
                        to={section.secondaryPath}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                      >
                        {section.secondaryLabel}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
