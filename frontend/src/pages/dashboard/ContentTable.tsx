import { useNavigate } from "react-router-dom";
import { getContentConfig } from "../../utils/contentConfig";

type Props = {
  type: "blog" | "idea" | "news" | "portfolio";
  items: any[];
  deletingId: number | null;
  onDelete: (contentId: number) => void;
};

const statusClasses = {
  published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  draft: "bg-amber-50 text-amber-700 ring-amber-200",
  scheduled: "bg-blue-50 text-blue-700 ring-blue-200",
};

const formatDateTime = (value: string) => {
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }
  return parsedDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

export default function ContentTable({ type, items, deletingId, onDelete }: Props) {
  const config = getContentConfig(type);
  const navigate = useNavigate();

  return (
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
              Date & Time
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {items.map((item) => (
            <tr key={item.id} className="align-top">
              <td className="px-4 py-4">
                <div className="min-w-[260px]">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {config.publicBasePath}/{item.slug}
                  </p>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-slate-600">{item.category}</td>
              <td className="px-4 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ${
                    statusClasses[item.status as keyof typeof statusClasses]
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-4 text-sm text-slate-600">
                {formatDateTime(item.scheduledAt || item.createdAt)}
              </td>
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => navigate(config.dashboardEditPath(item.id))}
                    disabled={Boolean(item.isDummy)}
                    className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {item.isDummy ? "Demo Item" : "Edit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(item.id)}
                    disabled={deletingId === item.id || Boolean(item.isDummy)}
                    className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {item.isDummy ? "Unavailable" : deletingId === item.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {items.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-10 text-center text-sm font-medium text-slate-500">
                No {config.plural.toLowerCase()} have been created yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
