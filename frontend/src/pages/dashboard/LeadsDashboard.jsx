import { useCallback, useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { getContactLeads, getLeadRequests, getNewsletterSubscribers } from "../../api/leads";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { parseLeadGoals, parseLeadServices } from "./utils/leadDashboardData";

function formatDate(value) {
  if (!value) {
    return "N/A";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parsed);
}

function StatCard({ label, value, accent }) {
  return (
    <div className={`overflow-hidden rounded-[8px] border border-slate-200 bg-gradient-to-br ${accent} p-5 text-white shadow-sm`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="rounded-[8px] border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm font-medium text-slate-500">
      {message}
    </div>
  );
}

function formatInlineList(items) {
  return Array.isArray(items) && items.length ? items.join(", ") : "N/A";
}

function formatBudget(value) {
  const amount = Number(value);
  if (!amount) {
    return "N/A";
  }

  return `PKR ${amount.toLocaleString("en-PK")}`;
}

function ServiceList({ services }) {
  if (!services.length) {
    return <span>N/A</span>;
  }

  return (
    <div className="space-y-2">
      {services.map((service, index) => (
        <div key={service} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
          <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
            {index + 1}
          </span>
          <span className="leading-5 text-slate-700">{service}</span>
        </div>
      ))}
    </div>
  );
}

function GoalsList({ services, goals }) {
  if (!services.length) {
    return <span>No goals selected</span>;
  }

  return (
    <div className="space-y-3">
      {services.map((service) => (
        <div key={service} className="rounded-lg border border-slate-200 bg-white px-3 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{service}</p>
          <p className="mt-2 leading-5 text-slate-700">{formatInlineList(goals[service])}</p>
        </div>
      ))}
    </div>
  );
}

export default function LeadsDashboard({
  breadcrumbTitle = "Leads",
  introTitle = "Multistep form and email leads in one place",
  metaTitle = "Leads Dashboard | BluCom Dashboard",
} = {}) {
  const [data, setData] = useState({
    leadRequests: [],
    contactLeads: [],
    newsletterSubscribers: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");

  const loadData = useCallback(async ({ silent = false } = {}) => {
    try {
      setError("");
      if (silent) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      const [leadRequests, contactLeads, newsletterSubscribers] = await Promise.all([
        getLeadRequests(),
        getContactLeads(),
        getNewsletterSubscribers(),
      ]);

      setData({
        leadRequests,
        contactLeads,
        newsletterSubscribers,
      });
    } catch (loadError) {
      console.error("[leads-dashboard]", loadError);
      setError("Unable to load leads data right now.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <PageMeta
        title={metaTitle}
        description="Lead submissions, contact emails, and newsletter subscribers."
      />
      <PageBreadcrumb pageTitle={breadcrumbTitle} />

      <div className="space-y-6">
        <PageIntro
          eyebrow="Lead Management"
          title={introTitle}
          description="Review submissions from the get started multistep form, contact form emails, and newsletter signups from the dashboard."
          actions={
            <button
              type="button"
              onClick={() => loadData({ silent: true })}
              disabled={isLoading || isRefreshing}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCcw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          }
        />

        {error ? (
          <div className="rounded-[8px] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700">
            {error}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <StatCard
            label="Multistep Form Leads"
            value={data.leadRequests.length}
            accent="from-emerald-600 to-emerald-500"
          />
          <StatCard
            label="Contact Emails"
            value={data.contactLeads.length}
            accent="from-emerald-600 to-emerald-500"
          />
          <StatCard
            label="Newsletter Subscribers"
            value={data.newsletterSubscribers.filter((item) => item.status === "subscribed").length}
            accent="from-emerald-600 to-emerald-500"
          />
        </div>

        <ComponentCard
          title="Multistep Form Leads"
          desc="Submissions captured from the get started multistep form."
        >
          {isLoading ? (
            <p className="text-sm text-slate-500">Loading leads...</p>
          ) : data.leadRequests.length === 0 ? (
            <EmptyState message="No multistep form submissions found yet." />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Project</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Company</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Profile</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Services</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Goals</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Budget</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Message</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {data.leadRequests.map((item) => {
                    const services = parseLeadServices(item.services);
                    const goals = parseLeadGoals(item.goals);

                    return (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-slate-900">{item.project_name || "N/A"}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.company_name || "N/A"}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-900">{item.email || "N/A"}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.phone || "N/A"}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                          {item.position || "N/A"} / {item.category || "N/A"}
                        </td>
                        <td className="min-w-[240px] px-4 py-4 text-sm text-slate-600 align-top">
                          <ServiceList services={services} />
                        </td>
                        <td className="min-w-[320px] px-4 py-4 text-sm text-slate-600 align-top">
                          <GoalsList services={services} goals={goals} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{formatBudget(item.budget)}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.message || "N/A"}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{formatDate(item.created_at)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </ComponentCard>

        <ComponentCard
          title="Contact Emails"
          desc="Inbound contact form submissions that were also sent by email."
        >
          {isLoading ? (
            <p className="text-sm text-slate-500">Loading contact emails...</p>
          ) : data.contactLeads.length === 0 ? (
            <EmptyState message="No contact email submissions found yet." />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Name</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Company</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Title</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Message</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {data.contactLeads.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-slate-900">{item.name || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-900">{item.email || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.phone || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.company || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.title || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{item.message || "N/A"}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{formatDate(item.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </ComponentCard>

        <ComponentCard
          title="Newsletter Subscribers"
          desc="Email records collected through newsletter signup."
        >
          {isLoading ? (
            <p className="text-sm text-slate-500">Loading newsletter subscribers...</p>
          ) : data.newsletterSubscribers.length === 0 ? (
            <EmptyState message="No newsletter subscribers found yet." />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Subscribed</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Last Notification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {data.newsletterSubscribers.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-slate-900">{item.email}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "subscribed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{formatDate(item.subscribed_at)}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">{formatDate(item.last_notification_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </ComponentCard>
      </div>
    </>
  );
}
