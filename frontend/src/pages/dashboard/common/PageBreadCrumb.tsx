import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2
        className="text-xl font-semibold tracking-tight text-slate-900"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav className="rounded-full border border-slate-200 bg-white/80 px-3 py-2">
        <ol className="flex items-center gap-1.5 text-sm">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-slate-500 transition hover:text-slate-700"
              to="/Dashboard"
            >
              Dashboard
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="font-medium text-slate-900">{pageTitle}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
