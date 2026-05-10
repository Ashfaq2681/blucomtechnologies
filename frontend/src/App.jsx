import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Landing = lazy(() => import("./pages/Landing.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Ideas = lazy(() => import("./pages/Ideas.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview.jsx"));
const BlogSingle = lazy(() => import("./pages/BlogSingle.jsx"));
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const MultiStepForm = lazy(() => import("./pages/MultiStepForm.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const AnalysisMeasurement = lazy(() => import("./pages/services/analysis-measurement.jsx"));
const AnalyticsImplementation = lazy(() => import("./pages/services/analytics-implementation.jsx"));
const BrandAwareness = lazy(() => import("./pages/services/brand-awareness.jsx"));
const BrandStrategy = lazy(() => import("./pages/services/Brand-Strategy.jsx"));
const CampaignOptimization = lazy(() => import("./pages/services/campaign-optimization.jsx"));
const ContentMarketing = lazy(() => import("./pages/services/content-marketing.jsx"));
const ContentStrategy = lazy(() => import("./pages/services/content-strategy.jsx"));
const CustomerJourneyMapping = lazy(() => import("./pages/services/customer-journey-mapping.jsx"));
const DataVisualization = lazy(() => import("./pages/services/data-visualization.jsx"));
const Identity = lazy(() => import("./pages/services/identity.jsx"));
const ImpactMeasurement = lazy(() => import("./pages/services/impact-measurement.jsx"));
const InteractionAssetsDevs = lazy(() => import("./pages/services/interaction-assets-devs.jsx"));
const InteractionDesign = lazy(() => import("./pages/services/interaction-design.jsx"));
const LeadGen = lazy(() => import("./pages/services/lead-gen.jsx"));
const MediaPlanningBuying = lazy(() => import("./pages/services/media-planning-buying.jsx"));
const MessagingPositioning = lazy(() => import("./pages/services/messaging-positioning.jsx"));
const NurtureStrategies = lazy(() => import("./pages/services/nurture-strategies.jsx"));
const OmnichannelCampaignManagement = lazy(() => import("./pages/services/omnichannel-campaign-management.jsx"));
const PersonaCreation = lazy(() => import("./pages/services/persona-creation.jsx"));
const ProductMapping = lazy(() => import("./pages/services/product-mapping.jsx"));
const PrototypingAndWireframing = lazy(() => import("./pages/services/prototyping-and-wireframing.jsx"));
const ReputationManagement = lazy(() => import("./pages/services/reputation-management.jsx"));
const SearchMarketing = lazy(() => import("./pages/services/search-marketing.jsx"));
const StrategicCommunication = lazy(() => import("./pages/services/strategic-communication.jsx"));
const UIDesigning = lazy(() => import("./pages/services/ui-designing.jsx"));
const UserJourneyMapping = lazy(() => import("./pages/services/user-journey-mapping.jsx"));
const WebDevelopment = lazy(() => import("./pages/services/web-development.jsx"));
const WebMaintenance = lazy(() => import("./pages/services/web-maintenance.jsx"));

const App = () => {
  return (
    <HelmetProvider> {/* ✅ Wrap everything in HelmetProvider */}
      <div className="h-lvh">
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}> {/* ✅ Add a fallback */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsOverview />} />
              <Route path="/news" element={<News />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogsingle" element={<BlogSingle />} />
              <Route path="/overviewsingle" element={<OverviewSingle />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/admindashboard" element={<Dashboard />} />
              <Route path="/multistepform" element={<MultiStepForm />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/analysis-measurement" element={<AnalysisMeasurement />} />
              <Route path="/services/analytics-implementation" element={<AnalyticsImplementation />} />
              <Route path="/services/brand-awareness" element={<BrandAwareness />} />
              <Route path="/services/brand-strategy" element={<BrandStrategy />} />
              <Route path="/services/campaign-optimization" element={<CampaignOptimization />} />
              <Route path="/services/content-marketing" element={<ContentMarketing />} />
              <Route path="/services/content-strategy" element={<ContentStrategy />} />
              <Route path="/services/customer-journey-mapping" element={<CustomerJourneyMapping />} />
              <Route path="/services/data-visualization" element={<DataVisualization />} />
              <Route path="/services/identity" element={<Identity />} />
              <Route path="/services/impact-measurement" element={<ImpactMeasurement />} />
              <Route path="/services/interaction-assets-devs" element={<InteractionAssetsDevs />} />
              <Route path="/services/interaction-design" element={<InteractionDesign />} />
              <Route path="/services/lead-gen" element={<LeadGen />} />
              <Route path="/services/media-planning-buying" element={<MediaPlanningBuying />} />
              <Route path="/services/messaging-positioning" element={<MessagingPositioning />} />
              <Route path="/services/nurture-strategies" element={<NurtureStrategies />} />
              <Route path="/services/omnichannel-campaign-management" element={<OmnichannelCampaignManagement />} />
              <Route path="/services/persona-creation" element={<PersonaCreation />} />
              <Route path="/services/product-mapping" element={<ProductMapping />} />
              <Route path="/services/prototyping-and-wireframing" element={<PrototypingAndWireframing />} />
              <Route path="/services/reputation-management" element={<ReputationManagement />} />
              <Route path="/services/search-marketing" element={<SearchMarketing />} />
              <Route path="/services/strategic-communication" element={<StrategicCommunication />} />
              <Route path="/services/ui-designing" element={<UIDesigning />} />
              <Route path="/services/user-journey-mapping" element={<UserJourneyMapping />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/web-maintenance" element={<WebMaintenance />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
