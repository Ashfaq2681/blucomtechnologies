import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/dashboard/SignIn";
import SignUp from "../pages/dashboard/SignUp";
import NotFound from "../pages/dashboard/NotFound";
import UserProfiles from "../pages/dashboard/UserProfiles";
import Videos from "../pages/dashboard/Videos";
import Images from "../pages/dashboard/Images";
import Alerts from "../pages/dashboard/Alerts";
import Badges from "../pages/dashboard/Badges";
import Avatars from "../pages/dashboard/Avatars";
import Buttons from "../pages/dashboard/Buttons";
import LineChart from "../pages/dashboard/charts/line/LineChart";
import BarChart from "../pages/dashboard/charts/bar/BarChart";
import Calendar from "../pages/dashboard/Calendar";
import BasicTables from "../pages/dashboard/tables/BasicTables/BasicTables";
import FormElements from "../pages/dashboard/form/form-elements/FormElements";
import Blank from "../pages/dashboard/Blank";
import AppLayout from "../pages/dashboard/layout/DashboardLayout";
import { ScrollToTop } from "../pages/dashboard/common/ScrollToTop";
import Home from "../pages/dashboard/Home";
import Blogs from "../pages/dashboard/Blogs";
import BlogList from "../pages/dashboard/BlogList";
import CreateBlog from "../pages/dashboard/CreateBlog";
import "../pages/dashboard/dashboard-styling.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<UserProfiles />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="blank" element={<Blank />} />
          <Route path="form-elements" element={<FormElements />} />
          <Route path="basic-tables" element={<BasicTables />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="badge" element={<Badges />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="line-chart" element={<LineChart />} />
          <Route path="bar-chart" element={<BarChart />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="write-blog" element={<CreateBlog />} />
          <Route path="edit-blog/:id" element={<CreateBlog />} />
        </Route>

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

