import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BlogSingle from "./pages/blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage";
import BlogSingle2 from "./pages/blog/The-art-of-visual-communication";
import IdeasSingle from "./pages/ideas/Rideshare-Advertising-To-A-New-Outdoor-World";
import IdeasSingle2 from "./pages/ideas/Must-Attend-Advertising-Confrence";




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
const Dashboard = lazy(() => import("./pages/Dashboard")); 

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
              <Route path="/Work" element={<Work />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsOverview />} />
              <Route path="/news" element={<News />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/dashboard" element={<Dashboard />} />
             
              <Route path="/Blog" element={<Blog />} />
              <Route path="/overviewsingle" element={<OverviewSingle />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/blog/Why-attention-economy-is-becoming-new-ecomony-and-how-brands-can-take-leverage" element={<BlogSingle />} />
              <Route path="/blog/The-art-of-visual-communication" element={<BlogSingle2 />} />
              <Route path="/ideas/Rideshare-Advertising-To-A-New-Outdoor-World" element={<IdeasSingle />} />
              <Route path="/ideas/Must-Attend-Advertising-Confrence" element={<IdeasSingle2 />} />
              
              
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
