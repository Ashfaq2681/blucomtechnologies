import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Factory,
  Layers3,
  LineChart,
  Rocket,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

const solutionStyles = {
  "For Startups": {
    key: "startups",
    Icon: Rocket,
    hero: "bg-gray-100 text-slate-950",
    eyebrow: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
    visual: "launch",
    sections: "timeline",
    band: "bg-emerald-950 text-white",
  },
  "For Small Business": {
    key: "smallBusiness",
    Icon: Store,
    hero: "bg-gray-100 text-slate-950",
    eyebrow: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline: "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
    visual: "frontDesk",
    sections: "directory",
    band: "bg-emerald-950 text-white",
  },
  "For Agencies": {
    key: "agencies",
    Icon: BriefcaseBusiness,
    hero: "bg-gray-100 text-slate-950",
    eyebrow: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
    visual: "production",
    sections: "kanban",
    band: "bg-emerald-950 text-white",
  },
  "For E-commerce": {
    key: "ecommerce",
    Icon: ShoppingBag,
    hero: "bg-gray-100 text-slate-950",
    eyebrow: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
    visual: "storefront",
    sections: "product",
    band: "bg-emerald-950 text-white",
  },
  Enterprise: {
    key: "enterprise",
    Icon: Building2,
    hero: "bg-gray-100 text-slate-950",
    eyebrow: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    accent: "text-emerald-700",
    button: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
    visual: "governance",
    sections: "grid",
    band: "bg-emerald-950 text-white",
  },
};

const fallbackStyle = solutionStyles["For Startups"];

const SolutionPage = ({ content }) => {
  const style = solutionStyles[content.eyebrow] || fallbackStyle;
  const Icon = style.Icon;

  return (
    <main className="bg-gray-100 text-slate-900">
      <section className={`relative overflow-hidden border-b border-slate-200 ${style.hero}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-300" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className={`mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 ${style.eyebrow}`}>
              <Icon className="h-4 w-4" />
              {content.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${style.button}`}
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className={`inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold transition ${style.outline}`}
              >
                Explore our work
              </Link>
            </div>
          </div>

          <AudienceVisual content={content} style={style} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionList sections={content.sections} style={style} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className={`grid gap-8 rounded-lg p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center ${style.band}`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-75">
              Built for useful growth
            </p>
            <p className="mt-4 max-w-3xl text-xl leading-8">
              {content.closing}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Plan your next step
          </Link>
        </div>
      </section>
    </main>
  );
};

const AudienceVisual = ({ content, style }) => {
  if (style.visual === "launch") {
    return (
      <aside className="self-end rounded-lg border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-950/10 backdrop-blur">
        <div className="border-b border-emerald-100 pb-6">
          <p className={`text-5xl font-semibold tracking-tight ${style.accent}`}>{content.stat}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">{content.statLabel}</p>
        </div>
        <div className="mt-6 grid gap-4">
          {content.highlights.map((item, index) => (
            <div key={item} className="grid grid-cols-[44px_1fr] items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="border-b border-emerald-100 pb-3 text-sm font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (style.visual === "frontDesk") {
    return (
      <aside className="self-end rounded-lg border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/10">
        <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-200 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Open online</p>
            <p className="mt-2 text-5xl font-semibold text-emerald-700">{content.stat}</p>
          </div>
          <Store className="h-12 w-12 text-emerald-600" />
        </div>
        <div className="mt-6 grid gap-3">
          {content.highlights.map((item) => (
            <span key={item} className="flex items-center gap-3 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              {item}
            </span>
          ))}
        </div>
      </aside>
    );
  }

  if (style.visual === "production") {
    return (
      <aside className="self-end rounded-lg border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/10">
        <div className="grid gap-3">
          {["Brief", "Build", "Report"].map((label, index) => (
            <div key={label} className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">{label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{content.highlights[index]}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-emerald-950 p-5 text-white">
          <p className="text-4xl font-semibold">{content.stat}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-emerald-200">{content.statLabel}</p>
        </div>
      </aside>
    );
  }

  if (style.visual === "storefront") {
    return (
      <aside className="self-end rounded-lg border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/10">
        <div className="grid grid-cols-2 gap-3">
          {content.highlights.map((item, index) => (
            <div key={item} className={`rounded-lg p-4 ${index === 0 ? "col-span-2 bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-900"}`}>
              <ShoppingBag className="h-5 w-5" />
              <p className="mt-4 text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] items-end rounded-lg bg-slate-950 p-5 text-white">
          <div>
            <p className="text-4xl font-semibold">{content.stat}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{content.statLabel}</p>
          </div>
          <BarChart3 className="h-10 w-10 text-emerald-300" />
        </div>
      </aside>
    );
  }

  return (
    <aside className="self-end rounded-lg border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/10">
      <div className="rounded-lg bg-slate-950 p-5 text-white">
        <Factory className="h-8 w-8 text-emerald-300" />
        <p className="mt-6 text-5xl font-semibold">{content.stat}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">{content.statLabel}</p>
      </div>
      <div className="mt-5 grid gap-3">
        {content.highlights.map((item) => (
          <div key={item} className="grid grid-cols-[28px_1fr] gap-3 text-sm font-medium text-slate-700">
            <Layers3 className="h-5 w-5 text-emerald-700" />
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
};

const SectionList = ({ sections, style }) => {
  if (style.sections === "timeline") {
    return (
      <div className="grid gap-0 border-l-4 border-emerald-500 pl-6">
        {sections.map((section, index) => (
          <article key={section.heading} className="relative border-b border-slate-200 py-8 first:pt-0">
            <span className="absolute -left-[43px] top-8 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-xs font-semibold text-white">
              {index + 1}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (style.sections === "directory") {
    return (
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Customer path</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Clear answers before the first call.</h2>
        </div>
        <div className="grid gap-4">
          {sections.map((section, index) => (
            <article key={section.heading} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-[72px_1fr]">
              <span className="text-3xl font-semibold text-emerald-700">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{section.heading}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (style.sections === "kanban") {
    return (
      <div className="grid gap-5 lg:grid-cols-4">
        {sections.map((section, index) => (
          <article key={section.heading} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <Users className="h-6 w-6 text-emerald-700" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Stage {index + 1}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">{section.heading}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (style.sections === "product") {
    return (
      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section, index) => (
          <article key={section.heading} className="rounded-lg border border-emerald-100 bg-white p-6">
            <div className="flex items-center justify-between gap-4 border-b border-emerald-100 pb-4">
              <h2 className="text-2xl font-semibold text-slate-950">{section.heading}</h2>
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {sections.map((section, index) => (
        <article key={section.heading} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <LineChart className="h-6 w-6 text-emerald-700" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            System {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">{section.heading}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
        </article>
      ))}
    </div>
  );
};

export default SolutionPage;
