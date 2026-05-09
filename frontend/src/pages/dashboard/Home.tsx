import PageMeta from "./common/PageMeta";
import DemographicCard from "./ecommerce/DemographicCard";
import EcommerceMetrics from "./ecommerce/EcommerceMetrics";
import MonthlySalesChart from "./ecommerce/MonthlySalesChart";
import MonthlyTarget from "./ecommerce/MonthlyTarget";
import RecentOrders from "./ecommerce/RecentOrders";
import StatisticsChart from "./ecommerce/StatisticsChart";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="space-y-8">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 py-7 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/80">
            Performance Overview
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A cleaner light dashboard for operations and growth.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                Monitor revenue, customers, orders, and regional activity from
                one place with clearer hierarchy and calmer spacing.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 backdrop-blur">
              <div className="rounded-2xl bg-white/10 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-100/70">
                  Revenue
                </p>
                <p className="mt-1 text-xl font-semibold">$48.2K</p>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-100/70">
                  Orders
                </p>
                <p className="mt-1 text-xl font-semibold">5.3K</p>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-100/70">
                  Growth
                </p>
                <p className="mt-1 text-xl font-semibold">+11%</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-12 gap-5 xl:gap-6">
          <div className="col-span-12 grid items-start gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(360px,0.9fr)] xl:gap-6">
            <div className="space-y-6">
              <EcommerceMetrics />
              <MonthlySalesChart />
            </div>

            <div className="self-start">
              <MonthlyTarget />
            </div>
          </div>

          <div className="col-span-12">
            <StatisticsChart />
          </div>

          <div className="col-span-12 xl:col-span-5">
            <DemographicCard />
          </div>

          <div className="col-span-12 xl:col-span-7">
            <RecentOrders />
          </div>
        </div>
      </div>
    </>
  );
}
