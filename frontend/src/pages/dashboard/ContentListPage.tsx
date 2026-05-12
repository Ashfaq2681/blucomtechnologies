import { useEffect, useState } from "react";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import ContentTable from "./ContentTable";
import { deleteContent, getContents } from "../../api/content";
import { getContentConfig } from "../../utils/contentConfig";
import { mergePortfolioItems } from "../../utils/dummyPortfolioItems";

type Props = {
  type: "blog" | "idea" | "news" | "portfolio";
};

export default function ContentListPage({ type }: Props) {
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
          setError(`Unable to load ${config.plural.toLowerCase()} from the CMS.`);
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
        title={`${config.plural} List Dashboard | Blucom Technologies`}
        description={`List view for dashboard ${config.plural.toLowerCase()}.`}
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={`${config.plural} List`} />
        <PageIntro
          eyebrow="Content Library"
          title={`Review ${config.plural.toLowerCase()}, status, and publishing cadence`}
          description={`This table reflects the live CMS and includes direct edit and delete actions for ${config.plural.toLowerCase()}.`}
        />

        <ComponentCard
          title={`All ${config.plural}`}
          desc={`A compact table for draft, scheduled, and published ${config.plural.toLowerCase()}.`}
          className="overflow-hidden"
        >
          {loading ? <div className="px-4 py-10 text-sm font-medium text-slate-500">Loading {config.plural.toLowerCase()}...</div> : null}
          {!loading && error ? <div className="px-4 py-10 text-sm font-medium text-red-600">{error}</div> : null}
          {!loading && !error ? (
            <ContentTable
              type={type}
              items={items}
              deletingId={deletingId}
              onDelete={handleDelete}
            />
          ) : null}
        </ComponentCard>
      </div>
    </>
  );
}
