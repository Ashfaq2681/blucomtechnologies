import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

export default function Blank() {
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Blank Page" />
        <PageIntro
          eyebrow="Pages"
          title="A cleaner starting point for new screens"
          description="Use this as the base canvas for new dashboard pages, widgets, or admin flows without inheriting the older dark-mode-heavy template styling."
        />
      <div className="min-h-[520px] rounded-[30px] border border-slate-200 bg-white px-6 py-10 xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 text-theme-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Start a new dashboard section here
          </h3>

          <p className="text-sm text-slate-500 sm:text-base">
            Drop in cards, forms, tables, or analytics blocks and keep the same
            light visual system used across the rest of the dashboard.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
