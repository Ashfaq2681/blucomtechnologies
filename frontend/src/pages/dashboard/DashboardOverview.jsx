import { useEffect, useState } from "react";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { getContactLeads, getLeadRequests, getNewsletterSubscribers } from "../../api/leads";

const statCards = [
  { key: "leadRequests", label: "Project requests", accent: "from-slate-900 to-slate-700" },
  { key: "contactLeads", label: "Contact leads", accent: "from-emerald-600 to-teal-500" },
  { key: "newsletterSubscribers", label: "Newsletter subscribers", accent: "from-blue-600 to-cyan-500" },
];

export default function DashboardOverview() {
  const [data, setData] = useState({
    leadRequests: [],
    contactLeads: [],
    newsletterSubscribers: [],
  });

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      const [leadRequests, contactLeads, newsletterSubscribers] = await Promise.all([
        getLeadRequests(),
        getContactLeads(),
        getNewsletterSubscribers(),
      ]);

      if (mounted) {
        setData({ leadRequests, contactLeads, newsletterSubscribers });
      }
    }

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  const recentRequests = data.leadRequests.slice(0, 5);

  return (
    <>
      <PageMeta
        title="Dashboard Overview | Blucom Technologies"
        description="Operational dashboard overview for leads and requests."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Dashboard" />
        <PageIntro
          eyebrow="Overview"
          title="Lead and request activity"
          description="Track submitted project requests and lead activity from the dashboard."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {statCards.map((card) => (
            <div key={card.key} className={`rounded-[8px] bg-gradient-to-br ${card.accent} p-5 text-white shadow-sm`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {card.label}
              </p>
              <p className="mt-3 text-3xl font-semibold">{data[card.key].length}</p>
            </div>
          ))}
        </div>

        <ComponentCard title="Recent project requests">
          {recentRequests.length === 0 ? (
            <div className="rounded-[8px] border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm font-medium text-slate-500">
              No project requests submitted yet.
            </div>
          ) : (
            <div className="space-y-3">
              {recentRequests.map((request) => (
                <div key={request.id} className="rounded-[8px] border border-slate-200 bg-white p-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {request.projectName || "New project request"}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {request.companyName || "Company not provided"}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {request.category || "Uncategorized"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Services: {Array.isArray(request.services) && request.services.length ? request.services.join(", ") : "Not selected"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ComponentCard>
      </div>
    </>
  );
}
