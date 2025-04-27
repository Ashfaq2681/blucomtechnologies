import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const Ideas = lazy(() => import("./pages/Ideas"));
const Careers = lazy(() => import("./pages/Careers"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview"));
const BlogSingle = lazy(() => import("./pages/BlogSingle"));
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Contact = lazy(() => import("./pages/Contact"));


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
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
