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
