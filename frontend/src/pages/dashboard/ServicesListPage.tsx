import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { deleteService, getServices } from "../../api/services";
import { serviceDashboardConfig } from "../../modules/services/config";

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

export default function ServicesListPage() {
  const navigate = useNavigate();
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        if (mounted) {
          setServices(data);
          setError("");
        }
      } catch (_error) {
        if (mounted) {
          setError("Unable to load services from the CMS.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadServices();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Delete this service?");
    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      await deleteService(id);
      setServices((current) => current.filter((service) => service.id !== id));
    } catch (_error) {
      setError("Unable to delete the selected service.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <PageMeta
        title="Services Dashboard | Blucom Technologies"
        description="Manage dynamic service pages and templates from the dashboard."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Services" />
        <PageIntro
          eyebrow="Service CMS"
          title="Manage modular service pages from one dashboard workflow"
          description="Create service entries, switch templates, and shape each page with reusable section blocks without touching the route layer."
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_380px]">
          <div className="rounded-[7px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Total Services</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {loading ? "..." : services.length}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Active modular service pages managed from the dashboard.
            </p>
          </div>
          <div className="rounded-[7px] border border-slate-200 bg-white p-6 xl:col-start-2 xl:row-span-2">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">
              Service Checklist
            </h3>
            <div className="mt-5 space-y-4">
              {[
                "Set a clear slug and page title before publishing.",
                "Choose the right template and keep the section order intentional.",
                "Fill feature, testimonial, and CTA blocks with final content.",
                "Review the live route after saving structural changes.",
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
              <button
                type="button"
                onClick={() => navigate(serviceDashboardConfig.dashboardCreatePath)}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Add Service
              </button>
            </div>
          </div>
        </section>

        <ComponentCard
          title="All Services"
          desc="Operational view of every dynamic service page, including template selection and current traffic."
          className="overflow-hidden"
        >
          {loading ? <div className="px-4 py-10 text-sm font-medium text-slate-500">Loading services...</div> : null}
          {!loading && error ? <div className="px-4 py-10 text-sm font-medium text-red-600">{error}</div> : null}
          {!loading && !error ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Title</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Slug</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Template</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Views</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Created</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {services.map((service) => (
                    <tr key={service.id} className="align-top">
                      <td className="px-4 py-4">
                        <div className="min-w-[240px]">
                          <p className="font-semibold text-slate-900">{service.title}</p>
                          <p className="mt-1 text-sm text-slate-500">{service.sections.length} sections configured</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">{service.slug}</td>
                      <td className="px-4 py-4 text-sm capitalize text-slate-600">
                        {String(service.template || "").replace("_", " ")}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-900">{service.views}</td>
                      <td className="px-4 py-4 text-sm text-slate-600">{formatDate(service.createdAt)}</td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => navigate(serviceDashboardConfig.dashboardEditPath(service.id))}
                            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(service.id)}
                            disabled={deletingId === service.id}
                            className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {deletingId === service.id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {services.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-sm font-medium text-slate-500">
                        No services have been created yet.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          ) : null}
        </ComponentCard>
      </div>
    </>
  );
}
