import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "./common/PageBreadCrumb";
import ComponentCard from "./common/ComponentCard";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import ContentTable from "./ContentTable";
import { deleteContent, getContents } from "../../api/content";
import { getContentConfig } from "../../utils/contentConfig";
import { mergePortfolioItems } from "../../utils/dummyPortfolioItems";

type Props = {
  type: "blog" | "idea" | "news" | "portfolio";
};

const statusClasses = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Draft: "bg-amber-50 text-amber-700 ring-amber-200",
  Scheduled: "bg-blue-50 text-blue-700 ring-blue-200",
};

export default function ContentOverview({ type }: Props) {
  const config = getContentConfig(type);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadItems = async () => {
      try {
        setLoading(true);
        const data = await getContents({ type, includeDrafts: true });
        if (mounted) {
          setItems(type === "portfolio" ? mergePortfolioItems(data) : data);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError(`Unable to load ${config.plural.toLowerCase()} metrics.`);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadItems();
    return () => {
      mounted = false;
    };
  }, [config.plural, type]);

  const publishedCount = useMemo(
    () => items.filter((item) => item.status === "published").length,
    [items]
  );
  const draftCount = useMemo(
    () => items.filter((item) => item.status === "draft").length,
    [items]
  );
  const scheduledCount = useMemo(
    () => items.filter((item) => item.status === "scheduled").length,
    [items]
  );
  const recentItems = useMemo(() => items.slice(0, 3), [items]);

  const handleDelete = async (contentId: number) => {
    const confirmed = window.confirm(`Delete this ${config.singular.toLowerCase()}?`);
    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(contentId);
      await deleteContent(contentId);
      setItems((current) => current.filter((item) => item.id !== contentId));
    } catch (_error) {
      setError(`Unable to delete the selected ${config.singular.toLowerCase()}.`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <PageMeta
        title={`${config.plural} Dashboard | Blucom Technologies`}
        description={`${config.plural} management overview for the dashboard.`}
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={config.plural} />
        <PageIntro
          eyebrow={config.eyebrow}
          title={config.introTitle}
          description={config.introDescription}
        />

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[7px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Published</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : publishedCount}
            </p>
          </div>
          <div className="rounded-[7px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Drafts</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : draftCount}
            </p>
          </div>
          <div className="rounded-[7px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Scheduled</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : scheduledCount}
            </p>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_380px]">
          <div className="rounded-[7px] border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                Recent {config.singular} Activity
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {recentItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:px-7 lg:flex-row lg:items-start lg:justify-between"
                >
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {item.category}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                          statusClasses[
                            item.status === "published"
                              ? "Published"
                              : item.status === "scheduled"
                                ? "Scheduled"
                                : "Draft"
                          ]
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h4 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                  <div className="min-w-[180px] text-sm text-slate-500 lg:text-right">
                    <p>
                      {item.status === "scheduled" && item.scheduledAt
                        ? `Scheduled: ${new Date(item.scheduledAt).toLocaleString("en-US")}`
                        : item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString("en-US")
                          : ""}
                    </p>
                    <p className="mt-1">{config.publicBasePath}/{item.slug}</p>
                  </div>
                </article>
              ))}
              {!loading && recentItems.length === 0 ? (
                <div className="px-6 py-8 text-sm text-slate-500">
                  No {config.plural.toLowerCase()} have been created yet.
                </div>
              ) : null}
              {!loading && error ? <div className="px-6 py-8 text-sm text-red-600">{error}</div> : null}
            </div>
          </div>

          <div className="rounded-[7px] border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">
              Editorial Checklist
            </h3>
            <div className="mt-5 space-y-4">
              {[
                "Confirm the keyword target and audience intent before drafting.",
                "Write a stronger opening section with a clear value promise.",
                "Add a CTA, category, and publish status before review.",
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
                to={config.dashboardListPath}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View List
              </Link>
              <Link
                to={config.dashboardCreatePath}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                New {config.singular}
              </Link>
            </div>
          </div>
        </section>

        {["blog", "idea", "news", "portfolio"].includes(type) ? (
          <ComponentCard
            title={`All ${config.plural}`}
            desc={`Edit, delete, and review ${config.plural.toLowerCase()} from the main ${config.plural.toLowerCase()} page.`}
            className="overflow-hidden"
          >
            {loading ? (
              <div className="px-4 py-10 text-sm font-medium text-slate-500">
                Loading {config.plural.toLowerCase()}...
              </div>
            ) : null}
            {!loading && error ? (
              <div className="px-4 py-10 text-sm font-medium text-red-600">{error}</div>
            ) : null}
            {!loading && !error ? (
              <ContentTable
                type={type}
                items={items}
                deletingId={deletingId}
                onDelete={handleDelete}
              />
            ) : null}
          </ComponentCard>
        ) : null}
      </div>
    </>
  );
}
