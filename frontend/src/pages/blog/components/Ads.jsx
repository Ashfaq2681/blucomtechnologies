const Ads = () => (
  <section className="bg-[#e9f1f8] px-4 py-20 sm:px-6">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
      <div className="relative lg:w-1/2">
        <div className="group overflow-hidden border border-white/50 bg-white shadow-2xl transition-transform hover:scale-[1.01]">
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-zinc-100">
            <div className="relative h-full w-full bg-gradient-to-tr from-gray-200 to-white">
              <div className="absolute bottom-10 left-[-20px] border border-gray-100 bg-white p-4 shadow-xl">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-4 w-4 bg-purple-500" />
                  <span className="text-[10px] font-bold uppercase text-gray-400">
                    Suggestions by AI Assist
                  </span>
                </div>
                <div className="border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-700">
                  Create 3 posts options from text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left lg:w-1/2">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 rotate-45 items-center justify-center bg-[#00a87e]">
            <div className="h-4 w-4 -rotate-45 bg-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1d2d35]">
            blucomtechnologies
          </span>
        </div>

        <h2 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-[#1d2d35] md:text-5xl">
          Build and grow stronger relationships on social
        </h2>

        <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-slate-600">
          blucomtechnologies helps you understand and reach your audience, engage your community and measure performance with the only all-in-one social media management platform built for connection.
        </p>

        <button className="bg-[#005952] px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#00423d] hover:shadow-xl active:scale-95">
          Try blucomtechnologies for free
        </button>
      </div>
    </div>
  </section>
);

export default Ads;
