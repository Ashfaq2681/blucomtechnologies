const AllMarketingInsights = () => (
  <div>
    <div className="mb-8 flex items-end justify-between border-b-2 border-slate-200 pb-3">
      <h2 className="text-xl font-black tracking-tight">All Marketing Insights</h2>
      <button className="flex items-center text-xs font-bold text-blue-700 hover:underline">
        View all <span className="ml-1">&rsaquo;</span>
      </button>
    </div>

    <div className="space-y-8">
      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 bg-blue-100 transition-transform group-hover:scale-105" />
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Community Management
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            The complete crisis management guide for communication leaders
          </h3>
        </div>
      </div>

      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 bg-emerald-100 transition-transform group-hover:scale-105" />
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              All Industries
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            How to use brand safety tools to protect your brand&apos;s reputation
          </h3>
        </div>
      </div>

      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          Why the best AI use cases in marketing start with intelligence, not creation
        </h4>
      </div>
      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          The state of social media in 2026: Data from blucomtechnologies&apos;s latest pulse survey
        </h4>
      </div>
    </div>
  </div>
);

export default AllMarketingInsights;
