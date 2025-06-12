import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Import Login first (best practice)
import Login from "./pages/Login";

// Lazy Imports
const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const Ideas = lazy(() => import("./pages/Ideas"));
const Careers = lazy(() => import("./pages/Careers"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const InvestorsOverview = lazy(() => import("./pages/InvestorsOverview"));
const BlogSingle = lazy(() => import("./pages/BlogSingle"));
const OverviewSingle = lazy(() => import("./pages/InvestorOverviewSingle"));
const AdminDashboard = lazy(() => import("./Components/AdminDashboard/AdminDashboard"));

// Protected Route: Allows only logged-in users
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Restricted Route: Prevents logged-in users from accessing certain pages (like Login)
const RestrictedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  return isAuthenticated ? <Navigate to="/admin-dashboard" replace /> : children;
};

const App = () => {
  return (
    <div className="h-lvh">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
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

            {/* Restricted Route for Login */}
            <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />

            {/* Protected Route for Admin Dashboard */}
            <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
