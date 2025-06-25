import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing";
import AboutPage from "../pages/About";
import RouterError from "../pages/RouterError";
import News from "../pages/News";
import Careers from "../pages/Careers";
import BlogSingle from "../pages/BlogSingle";
import Ideas from "../pages/Ideas";
import InvestorsOverview from "../pages/InvestorsOverview";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <RouterError/>
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <RouterError/>
  },
  {
    path: "/work",
    element: <Portfolio/>,
    errorElement: <RouterError/>
  },
  {
    path: "/news",
    element: <News/>,
    errorElement: <RouterError/>
  },
  {
    path: "/careers",
    element: <Careers/>,
    errorElement: <RouterError/>
  },
  {
    path: "/blog",
    element: <BlogSingle/>,
    errorElement: <RouterError/>
  },
  {
    path: "/ideas",
    element: <Ideas/>,
    errorElement: <RouterError/>
  },
  {
    path: "/investors",
    element: <InvestorsOverview/>,
    errorElement: <RouterError/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <RouterError/>
  },
]);

export default router;