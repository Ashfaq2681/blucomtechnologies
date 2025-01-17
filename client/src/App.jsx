import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MultiStepForm from "./pages/MultiStepForm";
import PageError from "./pages/PageError";
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"))
const News = lazy(() => import("./pages/News"));
const Ideas = lazy(() => import("./pages/Ideas"))
const Careers = lazy(() => import("./pages/Careers"));
const Portfolio = lazy(() => import("./pages/Portfolio"))
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview"));
const BlogSingle = lazy(() => import("./pages/BlogSingle"))
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle"))

const App = () => {
  return (
    
    <div className="h-lvh">
      <BrowserRouter>
        <Header />
        <Suspense >
          <Routes>
            <Route
            path="/"
            element={
              <>
                  <Landing/>
              </>
            }
          />
          <Route path="/multistepform" element={<MultiStepForm />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/investors" element={<InvestorsOverview/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/ideas" element={<Ideas/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/blogsingle" element={<BlogSingle/>}/>
          <Route path="/overviewsingle" element={<OverviewSingle/>}/>
          <Route path="*" element={<PageError />} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
