// src/routes.js
import Home from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AdminDashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioSingle from "./pages/portfolio/PortfolioSingle.jsx";
import PortfolioHyundai from "./pages/portfolio/portfolio-hyundai.jsx";
import PortfolioToyotaMotors from "./pages/portfolio/portfolio-toyotamotors.jsx";
import PortfolioCodilityHub from "./pages/portfolio/portfolio-codilityhub.jsx";
import PortfolioFantasyRewind from "./pages/portfolio/portfolio-fantasyrewind.jsx";
import PortfolioHassanBukhari from "./pages/portfolio/portfolio-hassanbuklhari.jsx";
import Careers from "./pages/Careers.jsx";
import Ideas from "./pages/ideas/Ideas.jsx";
import News from "./pages/news/News.jsx"
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import MultiStepForm from "./pages/MultiStepForm.jsx";
import TestPage from "./pages/TestPage.jsx";
import ShiftMarketing from "./pages/The-Shift-Towards-Commerce-Driven-Marketing.jsx";
import Work from "./pages/Work.jsx";

// Blog pages
import Blog from "./pages/Blog.jsx";
import BlogSingleB from "./pages/Blog Single b.jsx";
import BlogSingleOpportunity from "./pages/Blog-single-the-oportunity-code.jsx";

// Ideas pages
import IdeasSingle from "./pages/IdeasSingle.jsx";

// Services pages
import AnalysisMeasurement from "./pages/services/analysis-measurement.jsx";
import AnalyticsImplementation from "./pages/services/analytics-implementation.jsx";
import BrandAwareness from "./pages/services/brand-awareness.jsx";
import BrandStrategy from "./pages/services/Brand-Strategy.jsx";
import CampaignOptimization from "./pages/services/campaign-optimization.jsx";
import ContentMarketing from "./pages/services/content-marketing.jsx";
import ContentStrategy from "./pages/services/content-strategy.jsx";
import CustomerJourneyMapping from "./pages/services/customer-journey-mapping.jsx";
import DataVisualization from "./pages/services/data-visualization.jsx";
import Identity from "./pages/services/identity.jsx";
import ImpactMeasurement from "./pages/services/impact-measurement.jsx";
import InteractionAssetsDevs from "./pages/services/interaction-assets-devs.jsx";
import InteractionDesign from "./pages/services/interaction-design.jsx";
import LeadGen from "./pages/services/lead-gen.jsx";
import MediaPlanningBuying from "./pages/services/media-planning-buying.jsx";
import MessagingPositioning from "./pages/services/messaging-positioning.jsx";
import NurtureStrategies from "./pages/services/nurture-strategies.jsx";
import OmnichannelCampaignManagement from "./pages/services/omnichannel-campaign-management.jsx";
import PersonaCreation from "./pages/services/persona-creation.jsx";
import ProductMapping from "./pages/services/product-mapping.jsx";
import PrototypingAndWireframing from "./pages/services/prototyping-and-wireframing.jsx";
import ReputationManagement from "./pages/services/reputation-management.jsx";
import SearchMarketing from "./pages/services/search-marketing.jsx";
import StrategicCommunication from "./pages/services/strategic-communication.jsx";
import UIDesigning from "./pages/services/ui-designing.jsx";
import UserJourneyMapping from "./pages/services/user-journey-mapping.jsx";
import WebDevelopment from "./pages/services/web-development.jsx";
import WebMaintenance from "./pages/services/web-maintenance.jsx";

// Services > New folder
import Buying from "./pages/services/New folder/Buying.jsx";
import OmniCampaign from "./pages/services/New folder/omnichannel-campaign-management.jsx";

export const routes = [
  // Top-level pages
  { path: "/", component: Home, changefreq: "weekly", priority: 1.0 },
  { path: "/about", component: About, changefreq: "weekly", priority: 0.8 },
  { path: "/contact", component: Contact, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio", component: Portfolio, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/single", component: PortfolioSingle, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/hyundai", component: PortfolioHyundai, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/toyota-motors", component: PortfolioToyotaMotors, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/codility-hub", component: PortfolioCodilityHub, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/fantasy-rewind", component: PortfolioFantasyRewind, changefreq: "weekly", priority: 0.8 },
  { path: "/portfolio/hassan-bukhari", component: PortfolioHassanBukhari, changefreq: "weekly", priority: 0.8 },
  { path: "/careers", component: Careers, changefreq: "weekly", priority: 0.8 },
  { path: "/ideas", component: Ideas, changefreq: "daily", priority: 0.8 },
  { path: "/news", component: News, changefreq: "daily", priority: 0.8 },
  { path: "/notfound", component: NotFound, changefreq: "weekly", priority: 0.5 },
  { path: "/login", component: Login, changefreq: "weekly", priority: 0.8 },
  { path: "/multistepform", component: MultiStepForm, changefreq: "weekly", priority: 0.8 },
  { path: "/testpage", component: TestPage, changefreq: "weekly", priority: 0.8 },
  { path: "/the-shift-towards-commerce-driven-marketing", component: ShiftMarketing, changefreq: "weekly", priority: 0.8 },
  { path: "/work", component: Work, changefreq: "weekly", priority: 0.8 },
  { path: "/admindashboard", component: AdminDashboard, changefreq: "weekly", priority: 0.8 },
  { path: "/admin", component: Admin, changefreq: "weekly", priority: 0.8 },

  // Blog pages
  { path: "/blog", component: Blog, changefreq: "daily", priority: 0.9 },
  { path: "/blog/blog-single-b", component: BlogSingleB, changefreq: "daily", priority: 0.9 },
  { path: "/blog/blog-single-the-oportunity-code", component: BlogSingleOpportunity, changefreq: "daily", priority: 0.9 },

  // Ideas pages
  { path: "/ideas/ideas-single", component: IdeasSingle, changefreq: "daily", priority: 0.8 },

  // Services pages
  { path: "/services/analysis-measurement", component: AnalysisMeasurement, changefreq: "weekly", priority: 0.8 },
  { path: "/services/analytics-implementation", component: AnalyticsImplementation, changefreq: "weekly", priority: 0.8 },
  { path: "/services/brand-awareness", component: BrandAwareness, changefreq: "weekly", priority: 0.8 },
  { path: "/services/brand-strategy", component: BrandStrategy, changefreq: "weekly", priority: 0.8 },
  { path: "/services/campaign-optimization", component: CampaignOptimization, changefreq: "weekly", priority: 0.8 },
  { path: "/services/content-marketing", component: ContentMarketing, changefreq: "weekly", priority: 0.8 },
  { path: "/services/content-strategy", component: ContentStrategy, changefreq: "weekly", priority: 0.8 },
  { path: "/services/customer-journey-mapping", component: CustomerJourneyMapping, changefreq: "weekly", priority: 0.8 },
  { path: "/services/data-visualization", component: DataVisualization, changefreq: "weekly", priority: 0.8 },
  { path: "/services/identity", component: Identity, changefreq: "weekly", priority: 0.8 },
  { path: "/services/impact-measurement", component: ImpactMeasurement, changefreq: "weekly", priority: 0.8 },
  { path: "/services/interaction-assets-devs", component: InteractionAssetsDevs, changefreq: "weekly", priority: 0.8 },
  { path: "/services/interaction-design", component: InteractionDesign, changefreq: "weekly", priority: 0.8 },
  { path: "/services/lead-gen", component: LeadGen, changefreq: "weekly", priority: 0.8 },
  { path: "/services/media-planning-buying", component: MediaPlanningBuying, changefreq: "weekly", priority: 0.8 },
  { path: "/services/messaging-positioning", component: MessagingPositioning, changefreq: "weekly", priority: 0.8 },
  { path: "/services/nurture-strategies", component: NurtureStrategies, changefreq: "weekly", priority: 0.8 },
  { path: "/services/omnichannel-campaign-management", component: OmnichannelCampaignManagement, changefreq: "weekly", priority: 0.8 },
  { path: "/services/persona-creation", component: PersonaCreation, changefreq: "weekly", priority: 0.8 },
  { path: "/services/product-mapping", component: ProductMapping, changefreq: "weekly", priority: 0.8 },
  { path: "/services/prototyping-and-wireframing", component: PrototypingAndWireframing, changefreq: "weekly", priority: 0.8 },
  { path: "/services/reputation-management", component: ReputationManagement, changefreq: "weekly", priority: 0.8 },
  { path: "/services/search-marketing", component: SearchMarketing, changefreq: "weekly", priority: 0.8 },
  { path: "/services/strategic-communication", component: StrategicCommunication, changefreq: "weekly", priority: 0.8 },
  { path: "/services/ui-designing", component: UIDesigning, changefreq: "weekly", priority: 0.8 },
  { path: "/services/user-journey-mapping", component: UserJourneyMapping, changefreq: "weekly", priority: 0.8 },
  { path: "/services/web-development", component: WebDevelopment, changefreq: "weekly", priority: 0.8 },
  { path: "/services/web-maintenance", component: WebMaintenance, changefreq: "weekly", priority: 0.8 },

  // Services > New folder
  { path: "/services/new-folder/buying", component: Buying, changefreq: "weekly", priority: 0.8 },
  { path: "/services/new-folder/omnichannel-campaign-management", component: OmniCampaign, changefreq: "weekly", priority: 0.8 },
];
