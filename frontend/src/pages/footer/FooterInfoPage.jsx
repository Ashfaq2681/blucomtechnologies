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
    hero: "bg-[#fbfaf5]",
    accent: "text-amber-700",
    panel: "bg-white border-amber-100",
    chip: "bg-amber-50 text-amber-800 ring-amber-200",
    band: "bg-slate-950 text-white",
  },
  technical: {
    hero: "bg-slate-950 text-white",
    accent: "text-cyan-300",
    panel: "bg-slate-900 border-white/10",
    chip: "bg-cyan-400/10 text-cyan-200 ring-cyan-300/20",
    band: "bg-cyan-950 text-white",
  },
  community: {
    hero: "bg-[#f6f3ee]",
    accent: "text-rose-700",
    panel: "bg-white border-rose-100",
    chip: "bg-rose-50 text-rose-800 ring-rose-200",
    band: "bg-rose-950 text-white",
  },
  company: {
    hero: "bg-[#f7f8fb]",
    accent: "text-blue-700",
    panel: "bg-white border-blue-100",
    chip: "bg-blue-50 text-blue-800 ring-blue-200",
    band: "bg-slate-950 text-white",
  },
  legal: {
    hero: "bg-[#fafafa]",
    accent: "text-slate-700",
    panel: "bg-white border-slate-200",
    chip: "bg-slate-100 text-slate-800 ring-slate-200",
    band: "bg-slate-950 text-white",
  },
  security: {
    hero: "bg-[#07110d] text-white",
    accent: "text-emerald-300",
    panel: "bg-[#0d1b16] border-white/10",
    chip: "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20",
    band: "bg-emerald-950 text-white",
  },
};

const darkVariants = new Set(["technical", "security"]);

const FooterInfoPage = ({ content }) => {
  const Icon = iconMap[content.variant] || BookOpen;
  const theme = themeMap[content.variant] || themeMap.resource;
  const isDark = darkVariants.has(content.variant);

  return (
    <main className="bg-white text-slate-950">
      <section className={`relative overflow-hidden ${theme.hero}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-400" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ${theme.chip}`}>
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

          <aside className={`self-end rounded-3xl border p-6 shadow-xl shadow-slate-950/10 ${theme.panel}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accent}`}>{content.panel.label}</p>
            <h2 className={`mt-4 text-2xl font-semibold ${isDark ? "text-white" : "text-slate-950"}`}>{content.panel.title}</h2>
            <div className="mt-6 grid gap-3">
              {content.panel.items.map((item) => (
                <div key={item} className={`flex items-start gap-3 rounded-2xl p-4 text-sm leading-6 ${isDark ? "bg-white/5 text-slate-200" : "bg-slate-50 text-slate-700"}`}>
                  <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${theme.accent}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-l-4 border-emerald-500 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">In this page</p>
              <nav className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                {content.sections.map((section) => (
                  <a key={section.heading} href={`#${section.id}`} className="hover:text-emerald-700">
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
                className={`grid gap-6 border-b border-slate-200 pb-12 ${index % 2 === 0 ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_0.85fr]"}`}
              >
                <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${theme.chip}`}>
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
                    <ul className="grid gap-3 rounded-3xl bg-slate-50 p-5">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
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
              <article key={note.title} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <NoteIcon className="h-7 w-7 text-emerald-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{note.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{content.closing.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">{content.closing.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{content.closing.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Contact team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:text-emerald-700 hover:ring-emerald-200">
              View work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FooterInfoPage;
