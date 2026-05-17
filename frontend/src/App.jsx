import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PageSeo, { getPageSeo } from "./Components/PageSeo";
import { ThemeProvider as DashboardThemeProvider } from "./pages/dashboard/context/ThemeContext";
import "./pages/dashboard/dashboard-styling.css";

const Landing = lazy(() => import("./pages/Landing.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Ideas = lazy(() => import("./pages/Ideas.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Blog = lazy(() => import("./pages/blog/Blog.jsx"));
const SingleBlog = lazy(() => import("./pages/blog/SingleBlog.jsx"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview.jsx"));
const BlogSingle = lazy(() => import("./pages/BlogSingle.jsx"));
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle.jsx"));
const MultiStepForm = lazy(() => import("./pages/MultiStepForm.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const DashboardLayout = lazy(() => import("./pages/dashboard/layout/DashboardLayout.tsx"));
const DashboardHome = lazy(() => import("./pages/dashboard/DashboardOverview.jsx"));
const DashboardEcommerce = lazy(() => import("./pages/dashboard/Home.tsx"));
const DashboardBlank = lazy(() => import("./pages/dashboard/Blank.tsx"));
const DashboardCalendar = lazy(() => import("./pages/dashboard/Calendar.tsx"));
const DashboardProfile = lazy(() => import("./pages/dashboard/UserProfiles.tsx"));
const DashboardFormElements = lazy(() => import("./pages/dashboard/form/form-elements/FormElements.tsx"));
const DashboardBasicTables = lazy(() => import("./pages/dashboard/tables/BasicTables/BasicTables.tsx"));
const DashboardAlerts = lazy(() => import("./pages/dashboard/Alerts.tsx"));
const DashboardAvatars = lazy(() => import("./pages/dashboard/Avatars.tsx"));
const DashboardBadges = lazy(() => import("./pages/dashboard/Badges.tsx"));
const DashboardButtons = lazy(() => import("./pages/dashboard/Buttons.tsx"));
const DashboardImages = lazy(() => import("./pages/dashboard/Images.tsx"));
const DashboardVideos = lazy(() => import("./pages/dashboard/Videos.tsx"));
const DashboardLineChart = lazy(() => import("./pages/dashboard/charts/line/LineChart.tsx"));
const DashboardBarChart = lazy(() => import("./pages/dashboard/charts/bar/BarChart.tsx"));
const DashboardBlogs = lazy(() => import("./pages/dashboard/Blogs.tsx"));
const DashboardIdeas = lazy(() => import("./pages/dashboard/Ideas.tsx"));
const DashboardNews = lazy(() => import("./pages/dashboard/News.tsx"));
const DashboardCreateBlog = lazy(() => import("./pages/dashboard/CreateBlog.jsx"));
const DashboardWriteIdeas = lazy(() => import("./pages/dashboard/WriteIdeas.jsx"));
const DashboardWriteNews = lazy(() => import("./pages/dashboard/WriteNews.jsx"));
const DashboardLeads = lazy(() => import("./pages/dashboard/LeadsDashboard.jsx"));
const DashboardSeoAnalysis = lazy(() => import("./pages/dashboard/SeoAnalysis.tsx"));
const DashboardOpenJobs = lazy(() => import("./pages/dashboard/OpenJobs.tsx"));
const DashboardPostJob = lazy(() => import("./pages/dashboard/PostJob.tsx"));
const DashboardApplicants = lazy(() => import("./pages/dashboard/Applicants.tsx"));
const DashboardSignIn = lazy(() => import("./pages/dashboard/SignIn.tsx"));
const DashboardSignUp = lazy(() => import("./pages/dashboard/SignUp.tsx"));
const DashboardNotFound = lazy(() => import("./pages/dashboard/NotFound.tsx"));
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
const ContactFormEnd = lazy(() => import("./Components/landing/ContactForm.jsx"));

const PageEndContactForm = () => {
  const { pathname } = useLocation();
  const hiddenPrefixes = ["/dashboard", "/admindashboard", "/multistepform", "/contact"];
  const normalizedPathname = pathname.toLowerCase();

  if (hiddenPrefixes.some((path) => normalizedPathname.startsWith(path))) {
    return null;
  }

  return <ContactFormEnd />;
};

const DashboardShell = () => (
  <DashboardThemeProvider>
    <DashboardLayout />
  </DashboardThemeProvider>
);

const AppContent = () => {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.toLowerCase();
  const isDashboardPath = normalizedPathname.startsWith("/dashboard") || normalizedPathname.startsWith("/admindashboard");

  return (
    <>
          <PageSeo
            path={pathname}
            title={getPageSeo(pathname).title}
            description={getPageSeo(pathname).description}
          />
          {!isDashboardPath && <Header />}
          <Suspense fallback={<div>Loading...</div>}> {/* ✅ Add a fallback */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsOverview />} />
              <Route path="/news" element={<News />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<SingleBlog />} />
              <Route path="/blogsingle" element={<BlogSingle />} />
              <Route path="/overviewsingle" element={<OverviewSingle />} />
              <Route path="/dashboard" element={<DashboardShell />}>
                <Route index element={<DashboardHome />} />
                <Route path="ecommerce" element={<DashboardEcommerce />} />
                <Route path="calendar" element={<DashboardCalendar />} />
                <Route path="profile" element={<DashboardProfile />} />
                <Route path="blank" element={<DashboardBlank />} />
                <Route path="form-elements" element={<DashboardFormElements />} />
                <Route path="basic-tables" element={<DashboardBasicTables />} />
                <Route path="alerts" element={<DashboardAlerts />} />
                <Route path="avatars" element={<DashboardAvatars />} />
                <Route path="badge" element={<DashboardBadges />} />
                <Route path="buttons" element={<DashboardButtons />} />
                <Route path="images" element={<DashboardImages />} />
                <Route path="videos" element={<DashboardVideos />} />
                <Route path="line-chart" element={<DashboardLineChart />} />
                <Route path="bar-chart" element={<DashboardBarChart />} />
                <Route path="blog" element={<DashboardBlogs />} />
                <Route path="ideas" element={<DashboardIdeas />} />
                <Route path="news" element={<DashboardNews />} />
                <Route path="blogs" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="blog-list" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="write-blog" element={<DashboardCreateBlog />} />
                <Route path="edit-blog/:id" element={<DashboardCreateBlog />} />
                <Route path="write-ideas" element={<DashboardWriteIdeas />} />
                <Route path="edit-ideas/:id" element={<DashboardWriteIdeas />} />
                <Route path="write-news" element={<DashboardWriteNews />} />
                <Route path="edit-news/:id" element={<DashboardWriteNews />} />
                <Route path="leads" element={<DashboardLeads />} />
                <Route path="seo-analysis" element={<DashboardSeoAnalysis />} />
                <Route path="career/open-jobs" element={<DashboardOpenJobs />} />
                <Route path="career/post-job" element={<DashboardPostJob />} />
                <Route path="career/edit-job/:id" element={<DashboardPostJob />} />
                <Route path="career/applicants" element={<DashboardApplicants />} />
                <Route path="error-404" element={<DashboardNotFound />} />
                <Route path="*" element={<DashboardNotFound />} />
              </Route>
              <Route path="/Dashboard" element={<DashboardShell />}>
                <Route index element={<DashboardHome />} />
                <Route path="ecommerce" element={<DashboardEcommerce />} />
                <Route path="calendar" element={<DashboardCalendar />} />
                <Route path="profile" element={<DashboardProfile />} />
                <Route path="blank" element={<DashboardBlank />} />
                <Route path="form-elements" element={<DashboardFormElements />} />
                <Route path="basic-tables" element={<DashboardBasicTables />} />
                <Route path="alerts" element={<DashboardAlerts />} />
                <Route path="avatars" element={<DashboardAvatars />} />
                <Route path="badge" element={<DashboardBadges />} />
                <Route path="buttons" element={<DashboardButtons />} />
                <Route path="images" element={<DashboardImages />} />
                <Route path="videos" element={<DashboardVideos />} />
                <Route path="line-chart" element={<DashboardLineChart />} />
                <Route path="bar-chart" element={<DashboardBarChart />} />
                <Route path="blog" element={<DashboardBlogs />} />
                <Route path="ideas" element={<DashboardIdeas />} />
                <Route path="news" element={<DashboardNews />} />
                <Route path="blogs" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="blog-list" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="write-blog" element={<DashboardCreateBlog />} />
                <Route path="edit-blog/:id" element={<DashboardCreateBlog />} />
                <Route path="write-ideas" element={<DashboardWriteIdeas />} />
                <Route path="edit-ideas/:id" element={<DashboardWriteIdeas />} />
                <Route path="write-news" element={<DashboardWriteNews />} />
                <Route path="edit-news/:id" element={<DashboardWriteNews />} />
                <Route path="leads" element={<DashboardLeads />} />
                <Route path="seo-analysis" element={<DashboardSeoAnalysis />} />
                <Route path="career/open-jobs" element={<DashboardOpenJobs />} />
                <Route path="career/post-job" element={<DashboardPostJob />} />
                <Route path="career/edit-job/:id" element={<DashboardPostJob />} />
                <Route path="career/applicants" element={<DashboardApplicants />} />
                <Route path="error-404" element={<DashboardNotFound />} />
                <Route path="*" element={<DashboardNotFound />} />
              </Route>
              <Route path="/dashboard/signin" element={<DashboardSignIn />} />
              <Route path="/dashboard/signup" element={<DashboardSignUp />} />
              <Route path="/Dashboard/signin" element={<DashboardSignIn />} />
              <Route path="/Dashboard/signup" element={<DashboardSignUp />} />
              <Route path="/admindashboard" element={<DashboardShell />}>
                <Route index element={<DashboardHome />} />
              </Route>
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
            <PageEndContactForm />
          </Suspense>
          {!isDashboardPath && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider> {/* ✅ Wrap everything in HelmetProvider */}
      <div className="h-lvh">
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <AppContent />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
