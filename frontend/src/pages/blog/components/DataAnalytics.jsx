const DataAnalytics = () => (
  <div>
    <div className="mb-8 flex items-end justify-between border-b-2 border-slate-200 pb-3">
      <h2 className="text-xl font-black tracking-tight">Data Analytics</h2>
      <button className="flex items-center text-xs font-bold text-blue-700 hover:underline">
        View all <span className="ml-1">&rsaquo;</span>
      </button>
    </div>

    <div className="space-y-8">
      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 overflow-hidden bg-black transition-transform group-hover:scale-105">
          <div className="h-full w-full bg-emerald-950/40" />
        </div>
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Data Report
            </span>
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Agency
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            The 2026 Agency Pricing and Packaging Report
          </h3>
        </div>
      </div>

      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 overflow-hidden bg-zinc-900 transition-transform group-hover:scale-105">
          <div className="h-full w-full bg-gradient-to-tr from-blue-900/20 to-emerald-900/20" />
        </div>
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Data Report
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            The 2026 Social Media Content Strategy Report
          </h3>
        </div>
      </div>

      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          The 2025 Impact of Social Media Marketing Report
        </h4>
      </div>
      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          The 2025 Content Benchmarks Report: Schools & Education
        </h4>
      </div>
    </div>
  </div>
);

export default DataAnalytics;
