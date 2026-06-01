import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageMeta from "./common/PageMeta";
import PageIntro from "./common/PageIntro";
import { Link } from "react-router-dom";
import FourIsToThree from "./ui/videos/FourIsToThree";
import OneIsToOne from "./ui/videos/OneIsToOne";
import SixteenIsToNine from "./ui/videos/SixteenIsToNine";
import TwentyOneIsToNine from "./ui/videos/TwentyOneIsToNine";

export default function Videos() {
  return (
    <>
      <PageMeta
        title="React.js Videos Tabs | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Videos page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Videos" />
        <PageIntro
          eyebrow="Media"
          title="Video ratios and embed layouts"
          description="Common aspect ratios are presented in a cleaner two-column media layout for content, product demos, and campaign embeds."
          actions={
            <Link
              to="/Dashboard/upload-video"
              className="inline-flex items-center justify-center bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Upload video
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 16:9" desc="Standard widescreen embeds for tutorials and product overviews.">
            <SixteenIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 4:3" desc="Classic presentation sizing for legacy and educational media.">
            <FourIsToThree />
          </ComponentCard>
        </div>
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 21:9" desc="Cinema-style embeds for campaigns and brand storytelling.">
            <TwentyOneIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 1:1" desc="Square layouts for social previews and compact tiles.">
            <OneIsToOne />
          </ComponentCard>
        </div>
        </div>
      </div>
    </>
  );
}
