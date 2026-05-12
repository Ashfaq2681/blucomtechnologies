import { RefreshCcw } from "lucide-react";
import AnalyticsDateRangeSelector from "../../Components/analytics/AnalyticsDateRangeSelector";
import AnalyticsErrorState from "../../Components/analytics/AnalyticsErrorState";
import AnalyticsKpiCard from "../../Components/analytics/AnalyticsKpiCard";
import AnalyticsLineChart from "../../Components/analytics/AnalyticsLineChart";
import AnalyticsLoadingState from "../../Components/analytics/AnalyticsLoadingState";
import useAnalyticsDashboard from "../../hooks/useAnalyticsDashboard";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Number(value || 0));
}

export default function AnalyticsDashboard() {
  const {
    data,
    error,
    isLoading,
    isRefreshing,
    range,
    setRange,
    refresh,
  } = useAnalyticsDashboard();

  return (
    <>
      <PageMeta
        title="Analytics Dashboard | BluCom Dashboard"
        description="Google Analytics 4 dashboard for service-page traffic and engagement."
      />
      <PageBreadcrumb pageTitle="Analytics Dashboard" />

      <div className="space-y-6">
        <PageIntro
          eyebrow="Google Analytics 4"
          title="Real service-page traffic from GA4"
          description="This dashboard reads Google Analytics 4 Data API reports for `/services/*` pages so performance reflects real tracked traffic rather than local counters."
          actions={
            <div className="flex flex-wrap items-center gap-3">
              <AnalyticsDateRangeSelector value={range} onChange={setRange} />
              <button
                type="button"
                onClick={refresh}
                disabled={isRefreshing || isLoading}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCcw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>
          }
        />

        {isLoading ? (
          <AnalyticsLoadingState />
        ) : error ? (
          <AnalyticsErrorState message={error} onRetry={refresh} />
        ) : (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <AnalyticsKpiCard
                label="Service Sessions"
                value={data.monthlyVisits}
                accent="from-blue-600 to-cyan-400"
              />
              <AnalyticsKpiCard
                label="Unique Service Users"
                value={data.uniqueUsers}
                accent="from-emerald-500 to-lime-400"
              />
              <AnalyticsKpiCard
                label="Service Page Views"
                value={data.pageViews}
                accent="from-amber-500 to-orange-400"
              />
            </div>

            <ComponentCard
              title="Service Views Over Time"
              desc="Daily GA4 page views for URLs starting with `/services/`."
            >
              <AnalyticsLineChart data={data.timeSeries} />
            </ComponentCard>

            <ComponentCard
              title="Top Service Pages"
              desc="Highest-performing service pages in Google Analytics for the selected date range."
            >
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="text-left">
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Page
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Views
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Users
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Sessions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {(data.topPages || []).map((page) => (
                      <tr key={page.path || page.title}>
                        <td className="px-4 py-4">
                          <div>
                            <p className="font-semibold text-slate-900">
                              {page.title || page.path}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">{page.path}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                          {formatNumber(page.pageViews)}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600">
                          {formatNumber(page.users)}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600">
                          {formatNumber(page.sessions)}
                        </td>
                      </tr>
                    ))}
                    {(data.topPages || []).length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 py-10 text-center text-sm font-medium text-slate-500"
                        >
                          No Google Analytics service-page data was returned for this range.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </ComponentCard>
          </div>
        )}
      </div>
    </>
  );
}
