const SocialMediaAnalytics = () => (
  <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
    <div className="mb-10 flex items-end justify-between border-b-2 border-slate-200 pb-3">
      <h2 className="text-xl font-black tracking-tight text-[#1d2d35]">
        Social Media Analytics
      </h2>
      <button className="flex items-center text-xs font-bold text-blue-700 hover:underline">
        View all <span className="ml-1">&rsaquo;</span>
      </button>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="group cursor-pointer">
        <div className="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 transition-transform group-hover:scale-[1.02]">
          <div className="flex h-full w-full items-center justify-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="h-8 w-8 bg-white/20" />
            <div className="h-8 w-8 bg-white/20" />
            <div className="h-8 w-8 bg-white/20" />
          </div>
        </div>
        <div className="mb-3 flex gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Social Media Analytics
          </span>
        </div>
        <h3 className="text-[15px] font-bold leading-relaxed transition-colors group-hover:text-blue-700">
          How to conduct a speedy social media audit
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400">
          <span>April 1, 2026</span> <span>&bull;</span> <span>19 minutes</span>
        </div>
      </div>

      <div className="group cursor-pointer">
        <div className="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e9f1f8] transition-transform group-hover:scale-[1.02]">
          <div className="h-1/2 w-3/4 border border-gray-100 bg-white p-4 shadow-sm" />
        </div>
        <div className="mb-3 flex gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Facebook
          </span>
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Social Media Analytics
          </span>
        </div>
        <h3 className="text-[15px] font-bold leading-relaxed transition-colors group-hover:text-blue-700">
          Facebook analytics: A guide to Facebook insights
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400">
          <span>March 13, 2026</span> <span>&bull;</span> <span>12 minutes</span>
        </div>
      </div>

      <div className="group cursor-pointer">
        <div className="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden bg-pink-50 transition-transform group-hover:scale-[1.02]">
          <div className="flex h-14 w-20 items-center justify-center bg-red-600 shadow-lg shadow-red-200" />
        </div>
        <div className="mb-3 flex gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Social Media Analytics
          </span>
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            YouTube
          </span>
        </div>
        <h3 className="text-[15px] font-bold leading-relaxed transition-colors group-hover:text-blue-700">
          How to build a strategic YouTube dashboard: A guide to YouTube Studio and beyond
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400">
          <span>March 11, 2026</span> <span>&bull;</span> <span>11 minutes</span>
        </div>
      </div>

      <div className="group cursor-pointer">
        <div className="mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden bg-indigo-900 transition-transform group-hover:scale-[1.02]">
          <div className="relative h-1/2 w-2/3 border-t-2 border-white/20">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/10 to-transparent" />
          </div>
        </div>
        <div className="mb-3 flex gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Social Media Analytics
          </span>
          <span className="rounded bg-gray-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">
            Twitter
          </span>
        </div>
        <h3 className="text-[15px] font-bold leading-relaxed transition-colors group-hover:text-blue-700">
          X (Twitter) analytics: How to view insights and improve your data
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400">
          <span>March 10, 2026</span> <span>&bull;</span> <span>11 minutes</span>
        </div>
      </div>
    </div>
  </section>
);

export default SocialMediaAnalytics;
