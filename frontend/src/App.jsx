import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SubscriptionBanner from "./Components/SubscriptionBanner";
import PageSeo from "./Components/PageSeo";
import { ThemeProvider as DashboardThemeProvider } from "./pages/dashboard/context/ThemeContext";
import "./pages/dashboard/dashboard-styling.css";

const Landing = lazy(() => import("./pages/Landing.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Ideas = lazy(() => import("./pages/Ideas.jsx"));
const Videos = lazy(() => import("./pages/Videos.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const PortfolioSingle = lazy(() => import("./pages/portfolio/PortfolioSingle.jsx"));
const DynamicPortfolio = lazy(() => import("./pages/portfolio/DynamicPortfolio.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const Blog = lazy(() => import("./pages/blog/Blog.jsx"));
const SingleBlog = lazy(() => import("./pages/blog/SingleBlog.jsx"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview.jsx"));
const ForStartups = lazy(() => import("./pages/solutions/ForStartups.jsx"));
const ForSmallBusiness = lazy(() => import("./pages/solutions/ForSmallBusiness.jsx"));
const ForAgencies = lazy(() => import("./pages/solutions/ForAgencies.jsx"));
const ForEcommerce = lazy(() => import("./pages/solutions/ForEcommerce.jsx"));
const Enterprise = lazy(() => import("./pages/solutions/Enterprise.jsx"));
const Documentation = lazy(() => import("./pages/footer/Documentation.jsx"));
const Guides = lazy(() => import("./pages/footer/Guides.jsx"));
const ApiReference = lazy(() => import("./pages/footer/ApiReference.jsx"));
const Community = lazy(() => import("./pages/footer/Community.jsx"));
const Press = lazy(() => import("./pages/footer/Press.jsx"));
const Partners = lazy(() => import("./pages/footer/Partners.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/footer/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/footer/TermsOfService.jsx"));
const CookiePolicy = lazy(() => import("./pages/footer/CookiePolicy.jsx"));
const GdprCompliance = lazy(() => import("./pages/footer/GdprCompliance.jsx"));
const Security = lazy(() => import("./pages/footer/Security.jsx"));
const StyleGuide = lazy(() => import("./pages/Style-guide.jsx"));
const PortfolioHyundai = lazy(() => import("./pages/portfolio/portfolio-hyundai.jsx"));
const PortfolioToyotaMotors = lazy(() => import("./pages/portfolio/portfolio-toyotamotors.jsx"));
const PortfolioCodilityHub = lazy(() => import("./pages/portfolio/portfolio-codilityhub.jsx"));
const PortfolioFantasyRewind = lazy(() => import("./pages/portfolio/portfolio-fantasyrewind.jsx"));
const PortfolioHassanBukhari = lazy(() => import("./pages/portfolio/portfolio-hassanbuklhari.jsx"));
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
const DashboardUploadVideo = lazy(() => import("./pages/dashboard/UploadVideo.tsx"));
const DashboardContent = lazy(() => import("./pages/dashboard/Content.tsx"));
const DashboardLineChart = lazy(() => import("./pages/dashboard/charts/line/LineChart.tsx"));
const DashboardBarChart = lazy(() => import("./pages/dashboard/charts/bar/BarChart.tsx"));
const DashboardBlogs = lazy(() => import("./pages/dashboard/Blogs.tsx"));
const DashboardIdeas = lazy(() => import("./pages/dashboard/Ideas.tsx"));
const DashboardNews = lazy(() => import("./pages/dashboard/News.tsx"));
const DashboardPortfolioPages = lazy(() => import("./pages/dashboard/PortfolioPages.tsx"));
const DashboardCreateBlog = lazy(() => import("./pages/dashboard/CreateBlog.jsx"));
const DashboardWriteIdeas = lazy(() => import("./pages/dashboard/WriteIdeas.jsx"));
const DashboardWriteNews = lazy(() => import("./pages/dashboard/WriteNews.jsx"));
const DashboardWritePortfolio = lazy(() => import("./pages/dashboard/WritePortfolio.jsx"));
const DashboardLeads = lazy(() => import("./pages/dashboard/LeadsDashboard.jsx"));
const DashboardLeadsForm = lazy(() => import("./pages/dashboard/LeadsForm.jsx"));
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
const Buying = lazy(() => import("./pages/services/New folder/Buying.jsx"));
const OmniCampaign = lazy(() => import("./pages/services/New folder/omnichannel-campaign-management.jsx"));
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const LimitPageH1 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) {
      return undefined;
    }

    let scheduled = false;

    const replaceWithH2 = (heading) => {
      const replacement = document.createElement("h2");

      Array.from(heading.attributes).forEach((attribute) => {
        replacement.setAttribute(attribute.name, attribute.value);
      });

      while (heading.firstChild) {
        replacement.appendChild(heading.firstChild);
      }

      heading.replaceWith(replacement);
    };

    const normalizeHeadings = () => {
      const headings = Array.from(root.querySelectorAll("h1"));
      const primaryHeading =
        headings.find((heading) => heading.textContent.trim()) || headings[0] || null;

      headings.forEach((heading) => {
        if (heading !== primaryHeading) {
          replaceWithH2(heading);
        }
      });
    };

    const scheduleNormalize = () => {
      if (scheduled) {
        return;
      }

      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        normalizeHeadings();
      });
    };

    scheduleNormalize();

    const observer = new MutationObserver(scheduleNormalize);
    observer.observe(root, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const DashboardShell = () => (
  <DashboardThemeProvider>
    <DashboardLayout />
  </DashboardThemeProvider>
);

const DashboardAuthShell = ({ children }) => (
  <DashboardThemeProvider>
    {children}
  </DashboardThemeProvider>
);

const AppContent = () => {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.toLowerCase();
  const isDashboardPath = normalizedPathname.startsWith("/dashboard") || normalizedPathname.startsWith("/admindashboard");
  const isBlogPath = normalizedPathname === "/blog" || normalizedPathname.startsWith("/blog/");

  return (
    <>
          <ScrollToTop />
          <LimitPageH1 />
          {!isDashboardPath && !isBlogPath && <Header />}
          <Suspense fallback={<div>Loading...</div>}> {/* ✅ Add a fallback */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsOverview />} />
              <Route path="/for-startups" element={<ForStartups />} />
              <Route path="/for-small-business" element={<ForSmallBusiness />} />
              <Route path="/for-agencies" element={<ForAgencies />} />
              <Route path="/for-ecommerce" element={<ForEcommerce />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/api-reference" element={<ApiReference />} />
              <Route path="/community" element={<Community />} />
              <Route path="/press" element={<Press />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/gdpr-compliance" element={<GdprCompliance />} />
              <Route path="/security" element={<Security />} />
              <Route path="/news" element={<News />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/single" element={<PortfolioSingle />} />
              <Route path="/work" element={<Work />} />
              <Route path="/portfolio/hyundai" element={<PortfolioHyundai />} />
              <Route path="/portfolio/toyota-motors" element={<PortfolioToyotaMotors />} />
              <Route path="/portfolio/codility-hub" element={<PortfolioCodilityHub />} />
              <Route path="/portfolio/fantasy-rewind" element={<PortfolioFantasyRewind />} />
              <Route path="/portfolio/hassan-bukhari" element={<PortfolioHassanBukhari />} />
              <Route path="/portfolio/:slug" element={<DynamicPortfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<SingleBlog />} />
              <Route path="/ideas/:slug" element={<SingleBlog />} />
              <Route path="/news/:slug" element={<SingleBlog />} />
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
                <Route path="content" element={<DashboardContent />} />
                <Route path="videos" element={<DashboardVideos />} />
                <Route path="upload-video" element={<DashboardUploadVideo />} />
                <Route path="line-chart" element={<DashboardLineChart />} />
                <Route path="bar-chart" element={<DashboardBarChart />} />
                <Route path="blog" element={<DashboardBlogs />} />
                <Route path="ideas" element={<DashboardIdeas />} />
                <Route path="news" element={<DashboardNews />} />
                <Route path="portfolio" element={<DashboardPortfolioPages />} />
                <Route path="blogs" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="blog-list" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="write-blog" element={<DashboardCreateBlog />} />
                <Route path="edit-blog/:id" element={<DashboardCreateBlog />} />
                <Route path="write-ideas" element={<DashboardWriteIdeas />} />
                <Route path="edit-ideas/:id" element={<DashboardWriteIdeas />} />
                <Route path="write-news" element={<DashboardWriteNews />} />
                <Route path="edit-news/:id" element={<DashboardWriteNews />} />
                <Route path="write-portfolio" element={<DashboardWritePortfolio />} />
                <Route path="edit-portfolio/:id" element={<DashboardWritePortfolio />} />
                <Route path="leads" element={<DashboardLeads />} />
                <Route path="leadsform" element={<DashboardLeadsForm />} />
                <Route path="seo-analysis" element={<DashboardSeoAnalysis />} />
                <Route path="career" element={<DashboardOpenJobs />} />
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
                <Route path="content" element={<DashboardContent />} />
                <Route path="videos" element={<DashboardVideos />} />
                <Route path="upload-video" element={<DashboardUploadVideo />} />
                <Route path="line-chart" element={<DashboardLineChart />} />
                <Route path="bar-chart" element={<DashboardBarChart />} />
                <Route path="blog" element={<DashboardBlogs />} />
                <Route path="ideas" element={<DashboardIdeas />} />
                <Route path="news" element={<DashboardNews />} />
                <Route path="portfolio" element={<DashboardPortfolioPages />} />
                <Route path="blogs" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="blog-list" element={<Navigate to="/Dashboard/blog" replace />} />
                <Route path="write-blog" element={<DashboardCreateBlog />} />
                <Route path="edit-blog/:id" element={<DashboardCreateBlog />} />
                <Route path="write-ideas" element={<DashboardWriteIdeas />} />
                <Route path="edit-ideas/:id" element={<DashboardWriteIdeas />} />
                <Route path="write-news" element={<DashboardWriteNews />} />
                <Route path="edit-news/:id" element={<DashboardWriteNews />} />
                <Route path="write-portfolio" element={<DashboardWritePortfolio />} />
                <Route path="edit-portfolio/:id" element={<DashboardWritePortfolio />} />
                <Route path="leads" element={<DashboardLeads />} />
                <Route path="leadsform" element={<DashboardLeadsForm />} />
                <Route path="seo-analysis" element={<DashboardSeoAnalysis />} />
                <Route path="career" element={<DashboardOpenJobs />} />
                <Route path="career/open-jobs" element={<DashboardOpenJobs />} />
                <Route path="career/post-job" element={<DashboardPostJob />} />
                <Route path="career/edit-job/:id" element={<DashboardPostJob />} />
                <Route path="career/applicants" element={<DashboardApplicants />} />
                <Route path="error-404" element={<DashboardNotFound />} />
                <Route path="*" element={<DashboardNotFound />} />
              </Route>
              <Route path="/dashboard/signin" element={<DashboardAuthShell><DashboardSignIn /></DashboardAuthShell>} />
              <Route path="/dashboard/signup" element={<DashboardAuthShell><DashboardSignUp /></DashboardAuthShell>} />
              <Route path="/Dashboard/signin" element={<DashboardAuthShell><DashboardSignIn /></DashboardAuthShell>} />
              <Route path="/Dashboard/signup" element={<DashboardAuthShell><DashboardSignUp /></DashboardAuthShell>} />
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
              <Route path="/services/new-folder/buying" element={<Buying />} />
              <Route path="/services/new-folder/omnichannel-campaign-management" element={<OmniCampaign />} />
            </Routes>
            <PageSeo path={pathname} />
            <PageEndContactForm />
          </Suspense>
          {!isDashboardPath && <SubscriptionBanner />}
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
