import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileText,
  Fingerprint,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const iconMap = {
  resource: BookOpen,
  guide: Sparkles,
  technical: Network,
  community: Users,
  company: Building2,
  legal: FileText,
  security: LockKeyhole,
};

const themeMap = {
  resource: {
    hero: "bg-[#f7fbf8]",
    accent: "text-emerald-700",
    panel: "bg-white border-emerald-100",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    band: "bg-emerald-950 text-white",
  },
  guide: {
    hero: "bg-gray-100",
    accent: "text-emerald-700",
    panel: "bg-white border-emerald-100",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    band: "bg-emerald-950 text-white",
  },
  technical: {
    hero: "bg-gray-100",
    accent: "text-emerald-300",
    panel: "bg-emerald-950 border-emerald-800",
    chip: "bg-emerald-400/10 text-emerald-100 ring-emerald-300/20",
    band: "bg-emerald-950 text-white",
  },
  community: {
    hero: "bg-gray-100",
    accent: "text-emerald-700",
    panel: "bg-white border-emerald-100",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    band: "bg-emerald-950 text-white",
  },
  company: {
    hero: "bg-gray-100",
    accent: "text-emerald-700",
    panel: "bg-white border-emerald-100",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    band: "bg-emerald-950 text-white",
  },
  legal: {
    hero: "bg-gray-100",
    accent: "text-emerald-700",
    panel: "bg-white border-emerald-100",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    band: "bg-emerald-950 text-white",
  },
  security: {
    hero: "bg-gray-100",
    accent: "text-emerald-300",
    panel: "bg-[#0d1b16] border-white/10",
    chip: "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20",
    band: "bg-emerald-950 text-white",
  },
};

const darkVariants = new Set(["technical", "security"]);

const pageStyleMap = {
  resource: {
    shell: "lg:grid-cols-[minmax(0,1fr)_420px]",
    heroAlign: "",
    visual: "checklist",
    content: "timeline",
    navAccent: "border-emerald-500",
    pointIcon: ShieldCheck,
  },
  guide: {
    shell: "lg:grid-cols-[420px_minmax(0,1fr)]",
    heroAlign: "lg:[&>div:first-child]:order-2",
    visual: "steps",
    content: "cards",
    navAccent: "border-emerald-500",
    pointIcon: Sparkles,
  },
  technical: {
    shell: "lg:grid-cols-[minmax(0,1fr)_460px]",
    heroAlign: "",
    visual: "terminal",
    content: "spec",
    navAccent: "border-emerald-500",
    pointIcon: Network,
  },
  community: {
    shell: "lg:grid-cols-[0.95fr_1.05fr]",
    heroAlign: "",
    visual: "people",
    content: "cards",
    navAccent: "border-emerald-500",
    pointIcon: Users,
  },
  company: {
    shell: "lg:grid-cols-[1.05fr_0.95fr]",
    heroAlign: "",
    visual: "partners",
    content: "split",
    navAccent: "border-emerald-500",
    pointIcon: Building2,
  },
  legal: {
    shell: "lg:grid-cols-[minmax(0,1fr)_390px]",
    heroAlign: "",
    visual: "document",
    content: "document",
    navAccent: "border-emerald-500",
    pointIcon: FileText,
  },
  security: {
    shell: "lg:grid-cols-[minmax(0,1fr)_430px]",
    heroAlign: "",
    visual: "security",
    content: "spec",
    navAccent: "border-emerald-400",
    pointIcon: LockKeyhole,
  },
};

const getPageStyle = (variant) => pageStyleMap[variant] || pageStyleMap.resource;

const FooterInfoPage = ({ content }) => {
  const Icon = iconMap[content.variant] || BookOpen;
  const theme = themeMap[content.variant] || themeMap.resource;
  const isDark = darkVariants.has(content.variant);
  const pageStyle = getPageStyle(content.variant);
  const PointIcon = pageStyle.pointIcon;

  return (
    <main className="bg-gray-100 text-slate-950">
      <section className={`relative overflow-hidden ${theme.hero}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-300" />
        <div className={`mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:px-8 lg:py-28 ${pageStyle.shell} ${pageStyle.heroAlign}`}>
          <div className="max-w-4xl">
            <div className={`mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 ${theme.chip}`}>
              <Icon className="h-4 w-4" />
              {content.eyebrow}
            </div>
            <h1 className={`max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-slate-950"}`}>
              {content.title}
            </h1>
            <div className={`mt-7 grid gap-5 text-lg leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <HeroPanel content={content} theme={theme} isDark={isDark} pageStyle={pageStyle} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className={`border-l-4 pl-5 ${pageStyle.navAccent}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">In this page</p>
              <nav className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                {content.sections.map((section) => (
                  <a key={section.heading} href={`#${section.id}`} className={`${theme.accent} transition hover:underline`}>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="grid gap-12">
            {content.sections.map((section, index) => (
              <article
                id={section.id}
                key={section.heading}
                className={getArticleClass(pageStyle.content, index)}
              >
                <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                  <span className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold ring-1 ${theme.chip}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">{section.heading}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{section.summary}</p>
                </div>
                <div className="grid gap-5 text-base leading-8 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.points?.length > 0 && (
                    <ul className={getPointsClass(pageStyle.content)}>
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <PointIcon className={`mt-1 h-5 w-5 shrink-0 ${theme.accent}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={theme.band}>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_1fr_1fr] lg:px-8">
          {content.notes.map((note, index) => {
            const NoteIcon = index === 0 ? Layers3 : index === 1 ? Fingerprint : ShieldCheck;
            return (
              <article key={note.title} className="rounded-lg bg-white/10 p-6 ring-1 ring-white/10">
                <NoteIcon className="h-7 w-7 text-emerald-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{note.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-slate-50 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{content.closing.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">{content.closing.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{content.closing.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Contact team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:text-emerald-700 hover:ring-emerald-200">
              View work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const HeroPanel = ({ content, theme, isDark, pageStyle }) => {
  if (pageStyle.visual === "terminal") {
    return (
      <aside className={`self-end rounded-lg border p-6 font-mono shadow-xl shadow-slate-950/10 ${theme.panel}`}>
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-3 w-3 rounded-full bg-emerald-700" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <p className={`mt-6 text-xs uppercase tracking-[0.22em] ${theme.accent}`}>{content.panel.label}</p>
        <h2 className="mt-3 text-xl font-semibold text-white">{content.panel.title}</h2>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-300">
          {content.panel.items.map((item, index) => (
            <p key={item}><span className={theme.accent}>0{index + 1}:</span> {item}</p>
          ))}
        </div>
      </aside>
    );
  }

  if (pageStyle.visual === "document") {
    return (
      <aside className={`self-end rounded-lg border p-6 shadow-xl shadow-slate-950/10 ${theme.panel}`}>
        <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>{content.panel.label}</p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">{content.panel.title}</h2>
        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {content.panel.items.map((item, index) => (
            <div key={item} className="grid grid-cols-[48px_1fr] gap-3 py-4 text-sm leading-6 text-slate-700">
              <span className="font-semibold text-slate-400">S{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className={`self-end rounded-lg border p-6 shadow-xl shadow-slate-950/10 ${theme.panel}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>{content.panel.label}</p>
      <h2 className={`mt-4 text-2xl font-semibold ${isDark ? "text-white" : "text-slate-950"}`}>{content.panel.title}</h2>
      <div className={pageStyle.visual === "steps" ? "mt-6 grid gap-3 sm:grid-cols-3" : "mt-6 grid gap-3"}>
        {content.panel.items.map((item, index) => (
          <div key={item} className={`flex items-start gap-3 rounded-lg p-4 text-sm leading-6 ${isDark ? "bg-white/5 text-slate-200" : "bg-slate-50 text-slate-700"} ${pageStyle.visual === "steps" ? "min-h-40 flex-col" : ""}`}>
            {pageStyle.visual === "steps" ? (
              <span className={`text-2xl font-semibold ${theme.accent}`}>{index + 1}</span>
            ) : (
              <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${theme.accent}`} />
            )}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

const getArticleClass = (contentStyle, index) => {
  if (contentStyle === "cards") {
    return "rounded-lg border border-slate-200 bg-white p-6 shadow-sm";
  }

  if (contentStyle === "document") {
    return "border-b border-slate-200 pb-12";
  }

  if (contentStyle === "spec") {
    return "grid gap-6 border-l-4 border-slate-200 bg-slate-50 p-6 lg:grid-cols-[0.9fr_1.1fr]";
  }

  if (contentStyle === "split") {
    return `grid gap-6 border-b border-slate-200 pb-12 ${index % 2 === 0 ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1fr]"}`;
  }

  return `grid gap-6 border-b border-slate-200 pb-12 ${index % 2 === 0 ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_0.85fr]"}`;
};

const getPointsClass = (contentStyle) => {
  if (contentStyle === "cards") {
    return "grid gap-3 border-t border-slate-200 pt-5";
  }

  if (contentStyle === "spec") {
    return "grid gap-3 rounded-lg bg-white p-5 ring-1 ring-slate-200";
  }

  if (contentStyle === "document") {
    return "grid gap-3 border-l-4 border-slate-300 bg-slate-50 p-5";
  }

  return "grid gap-3 rounded-lg bg-slate-50 p-5";
};

export default FooterInfoPage;
