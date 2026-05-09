import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BlogSingle from "./pages/blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage";
import BlogSingle2 from "./pages/blog/The-art-of-visual-communication";
import IdeasSingle from "./pages/ideas/Rideshare-Advertising-To-A-New-Outdoor-World";
import IdeasSingle2 from "./pages/ideas/Must-Attend-Advertising-Confrence";


import Identity from "./pages/services/identity";
import BrandStrategy from "./pages/services/brand-strategy";
import MessagingPositioning from "./pages/services/messaging-positioning";
import ReputationManagement from "./pages/services/reputation-management";
import ProductMapping from "./pages/services/product-mapping";
import PersonaCreation from "./pages/services/persona-creation";
import CustomerJourneyMapping from "./pages/services/customer-journey-mapping";

import BrandAwareness from "./pages/services/brand-awareness";
import StrategicCommunication from "./pages/services/strategic-communication";
import AnalysisMeasurement from "./pages/services/analysis-measurement";
import ImpactMeasurement from "./pages/services/impact-measurement";
import AnalyticsImplementation from "./pages/services/analytics-implementation";
import CampaignOptimization from "./pages/services/campaign-optimization";
import ContentStrategy from "./pages/services/content-strategy";

import SearchMarketing from "./pages/services/search-marketing";
import LeadGen from "./pages/services/lead-gen";
import MediaPlanningBuying from "./pages/services/media-planning-buying";
import ContentMarketingPrimary from "./pages/services/content-marketing";
import OmnichannelCampaignManagement from "./pages/services/omnichannel-campaign-management";
import InteractionAssetsDevs from "./pages/services/interaction-assets-devs";
import NurtureStrategies from "./pages/services/nurture-strategies";

import UiDesigning from "./pages/services/ui-designing";
import PrototypingAndWireframing from "./pages/services/prototyping-and-wireframing";
import UserJourneyMapping from "./pages/services/user-journey-mapping";
import InteractionDesign from "./pages/services/interaction-design";
import WebMaintenance from "./pages/services/web-maintenance";
import DataVisualization from "./pages/services/data-visualization";
import WebDevelopment from "./pages/services/web-development";

const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Ideas = lazy(() => import("./pages/Ideas")); 
const News = lazy(() => import("./pages/News"));
const Careers = lazy(() => import("./pages/Careers"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle"));
const Autoroutes = lazy(() => import("./pages/Autoroutes"));

const App = () => {
  return (
    <HelmetProvider> {/* ✅ Wrap everything in HelmetProvider */}
      <div className="h-lvh">
        
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}> {/* ✅ Add a fallback */}
            <Routes>
              <Route path="/" element={<Landing />} />
              {/* Discovery */}
                      <Route path="services/Identity" element={<Identity />} />
                      <Route path="/services/brand-strategy" element={<BrandStrategy />} />
                      <Route path="/services/messaging-positioning" element={<MessagingPositioning />} />
                      <Route path="/services/reputation-management" element={<ReputationManagement />} />
                      <Route path="/services/product-mapping" element={<ProductMapping />} />
                      <Route path="/services/persona-creation" element={<PersonaCreation />} />
                      <Route path="/services/customer-journey-mapping" element={<CustomerJourneyMapping />} />
                      {/* Strategy */}
                      <Route path="/services/brand-awareness" element={<BrandAwareness />} />
                      <Route path="/services/strategic-communication" element={<StrategicCommunication />} />
                      <Route path="/services/analysis-measurement" element={<AnalysisMeasurement />} />
                      <Route path="/services/impact-measurement" element={<ImpactMeasurement />} />
                      <Route path="/services/analytics-implementation" element={<AnalyticsImplementation />} />
                      <Route path="/services/campaign-optimization" element={<CampaignOptimization />} />
                      <Route path="/services/content-strategy" element={<ContentStrategy />} />            
                      {/* Digital */}
                      <Route path="/services/search-marketing" element={<SearchMarketing />} />
                      <Route path="/services/lead-gen" element={<LeadGen />} />
                      <Route path="/services/media-planning-buying" element={<MediaPlanningBuying />} />
                      <Route path="/services/content-marketing" element={<ContentMarketingPrimary />} />
                      <Route path="/services/omnichannel-campaign-management" element={<OmnichannelCampaignManagement />} />
                      <Route path="/services/interaction-assets-devs" element={<InteractionAssetsDevs />} />
                      <Route path="/services/nurture-strategies" element={<NurtureStrategies />} />             
                      {/* Interaction */}
                      <Route path="/services/ui-designing" element={<UiDesigning />} />
                      <Route path="/services/prototyping-and-wireframing" element={<PrototypingAndWireframing />} />
                      <Route path="/services/user-journey-mapping" element={<UserJourneyMapping />} />
                      <Route path="/services/interaction-design" element={<InteractionDesign />} />
                      <Route path="/services/web-maintenance" element={<WebMaintenance />} />
                      <Route path="/services/data-visualization" element={<DataVisualization />} />
                      <Route path="/services/web-development" element={<WebDevelopment />} />
                      
              <Route path="/about" element={<About />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsOverview />} />
              <Route path="/news" element={<News />} />
              <Route path="/ideas" element={<Ideas />} />
             
              <Route path="/Blog" element={<Blog />} />
              <Route path="/overviewsingle" element={<OverviewSingle />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage" element={<BlogSingle />} />
              <Route path="/blog/The-art-of-visual-communication" element={<BlogSingle2 />} />
              <Route path="/ideas/Rideshare-Advertising-To-A-New-Outdoor-World" element={<IdeasSingle />} />
              <Route path="/ideas/Must-Attend-Advertising-Confrence" element={<IdeasSingle2 />} />
              
              
            </Routes>
          </Suspense>
          <Autoroutes />
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;



