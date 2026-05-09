import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import ResponsiveImage from "./ui/images/ResponsiveImage";
import TwoColumnImageGrid from "./ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "./ui/images/ThreeColumnImageGrid";
import ComponentCard from "./common/ComponentCard";
import PageMeta from "./common/PageMeta";

export default function Images() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Images" />
        <PageIntro
          eyebrow="Media"
          title="Image presentation blocks"
          description="The image gallery now uses local assets and softer container spacing so examples look like a finished media page instead of a raw component dump."
        />
        <ComponentCard title="Responsive image" desc="A single full-width hero image with a cleaner frame.">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid" desc="Two-up content blocks for balanced editorial layouts.">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid" desc="Three-up cards for denser product and gallery sections.">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </>
  );
}
