const Guides = () => (
  <div>
    <div className="mb-8 flex items-end justify-between border-b-2 border-slate-200 pb-3">
      <h2 className="text-xl font-black tracking-tight">Guides</h2>
      <button className="flex items-center text-xs font-bold text-blue-700 hover:underline">
        View all <span className="ml-1">&rsaquo;</span>
      </button>
    </div>

    <div className="space-y-8">
      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 overflow-hidden bg-emerald-50 transition-transform group-hover:scale-105">
          <div className="h-full w-full bg-teal-500/20" />
        </div>
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Guide
            </span>
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Social Listening
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            Implementing a Social Media Newsroom Model [Guide + Template]
          </h3>
        </div>
      </div>

      <div className="group flex cursor-pointer gap-4">
        <div className="h-20 w-32 flex-shrink-0 overflow-hidden bg-gray-900 transition-transform group-hover:scale-105">
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
        <div>
          <div className="mb-1 flex flex-wrap gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Guide
            </span>
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-500">
              Leadership
            </span>
          </div>
          <h3 className="text-xs font-bold leading-relaxed group-hover:text-blue-700">
            The CMO&apos;s Social Media Planning Guide for 2026
          </h3>
        </div>
      </div>

      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          How to Use Social Data Like a Pro: 40 Strategies for Smarter Marketing
        </h4>
      </div>
      <div className="group cursor-pointer border-t border-gray-100 pt-4">
        <h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">
          The 2025 generational marketing playbook: How to engage every age group on social
        </h4>
      </div>
    </div>
  </div>
);

export default Guides;
