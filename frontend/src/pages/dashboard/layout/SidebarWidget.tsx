export default function SidebarWidget() {
  return (
    <div className="mx-auto mb-8 w-full max-w-60 rounded-[24px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 py-5 text-center">
      <h3 className="mb-2 text-base font-semibold text-slate-900">
        Clean Dashboard Kit
      </h3>
      <p className="mb-4 text-theme-sm text-slate-600">
        A lighter workspace for tracking charts, tables, and account activity.
      </p>
      <a
        href="/Dashboard"
        className="flex items-center justify-center rounded-2xl bg-slate-900 p-3 text-theme-sm font-medium text-white transition hover:bg-slate-800"
      >
        Open Dashboard
      </a>
    </div>
  );
}
