import { Link } from "react-router-dom";
import { dashboardAssets } from "./assets";
import GridShape from "./common/GridShape";
import PageMeta from "./common/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="React.js 404 Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js 404 Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
        <GridShape />
        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
          <h1 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600/80">
            Error
          </h1>
          <h2 className="mb-8 text-title-md font-bold tracking-tight text-slate-900 xl:text-title-2xl">
            Page not found
          </h2>

          <img src={dashboardAssets.error404} alt="404" />

          <p className="mb-6 mt-10 text-base text-slate-600 sm:text-lg">
            We can&apos;t seem to find the page you are looking for.
          </p>

          <Link
            to="/Dashboard"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            Back to Dashboard
          </Link>
        </div>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} - TailAdmin
        </p>
      </div>
    </>
  );
}
