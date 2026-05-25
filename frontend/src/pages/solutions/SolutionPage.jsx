import { Link } from "react-router-dom";

const SolutionPage = ({ content }) => {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-slate-50">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-slate-200/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              {content.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Start a conversation
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Explore our work
              </Link>
            </div>
          </div>
          <aside className="self-end rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-5xl font-semibold tracking-tight text-emerald-300">
                {content.stat}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">
                {content.statLabel}
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {content.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {content.sections.map((section, index) => (
            <article
              key={section.heading}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-8"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Built for useful growth
              </p>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-white">
                {content.closing}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-100"
            >
              Plan your next step
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionPage;
