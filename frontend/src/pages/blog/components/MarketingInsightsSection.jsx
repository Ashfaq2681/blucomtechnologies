import AllMarketingInsights from "./AllMarketingInsights";
import DataAnalytics from "./DataAnalytics";
import Guides from "./Guides";

const MarketingInsightsSection = () => (
  <section className="mx-auto max-w-7xl bg-white px-4 py-16 sm:px-6">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <Guides />
      <DataAnalytics />
      <AllMarketingInsights />
    </div>
  </section>
);

export default MarketingInsightsSection;
