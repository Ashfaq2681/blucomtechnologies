import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Download, FileText } from "lucide-react";

const performanceItems = ["Q1", "Q2", "Q3", "Q4"].map((quarter) => ({
  quarter,
  eyebrow: "Company Performance",
  title: "Risk Takers, opportunity makers",
  description:
    "As the most awarded B2B branding agency in Texas, we know how to combine customer insights with impactful content to get your brand from the top of the list to the dotted line.",
}));

const presentationItems = Array.from({ length: 6 }, (_, index) => ({
  title: "Fiscal Year 2022 Report",
  id: `fy-2022-${index + 1}`,
}));

const pressReleases = Array.from({ length: 3 }, (_, index) => ({
  id: `press-release-${index + 1}`,
  eyebrow: "Some of our",
  title: "Press Release",
  description:
    "As the most awarded B2B branding agency in Texas, we know how to combine customer insights.",
}));

export default function InvestorsOverview() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative min-h-[82vh] w-full overflow-hidden">
        <img
          src="/investors/overview.png"
          alt="Investor overview"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] w-[90%] max-w-7xl flex-col justify-end gap-10 pb-16 pt-28 text-white lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7ee8cd]">
              Let's have a look
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Investor Overview
            </h1>
            <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
              Found what you are looking for?
            </p>
          </div>

          <div className="max-w-xl border-l-4 border-[#00AE80] bg-black/25 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              It's who we are.
              <span className="block">It's what we're about.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
              As the most awarded B2B branding agency in Texas, we know how to
              combine customer insight with impactful content to get your brand
              from the top of the list to the dotted line.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid w-[90%] max-w-7xl gap-8 rounded-md bg-[#00AE80] p-6 text-white shadow-2xl shadow-[#00AE80]/20 md:grid-cols-[220px_1fr_auto] md:items-center md:p-8">
        <div className="flex justify-center md:justify-start">
          <img
            src="/investors/book.png"
            alt="Global AI Index report"
            className="h-48 w-auto object-contain drop-shadow-xl"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/75">
            Some of our
          </p>
          <h2 className="mt-2 text-3xl font-semibold underline decoration-white/50 underline-offset-8 sm:text-5xl">
            Global AI Index
          </h2>
          <p className="mt-4 text-xl font-medium">
            Risk Takers, opportunity makers
          </p>
          <p className="mt-3 max-w-2xl leading-7 text-white/85">
            As the most awarded B2B branding agency in Texas, we know how to
            combine customer
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 font-semibold text-[#008b67] transition hover:bg-gray-100">
          <Download size={18} />
          Download Now
        </button>
      </section>

      <section className="mx-auto w-[90%] max-w-7xl py-20 sm:py-28">
        <div className="mb-10 max-w-2xl">
          <p className="text-lg text-gray-600">Company</p>
          <h2 className="text-4xl font-semibold text-[#00AE80] underline decoration-gray-800/30 underline-offset-8 sm:text-5xl">
            Performance
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {performanceItems.map((item) => (
            <article
              key={item.quarter}
              className="group border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-[#00AE80] hover:shadow-xl hover:shadow-gray-200"
            >
              <p className="text-sm text-gray-500">{item.eyebrow}</p>
              <h3 className="mt-3 text-5xl font-semibold text-[#00AE80] underline decoration-[#00AE80]/30 underline-offset-8">
                {item.quarter}
              </h3>
              <p className="mt-8 text-lg font-semibold leading-tight">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-lg text-gray-600">Some of our</p>
            <h2 className="mt-1 text-4xl font-semibold text-[#00AE80] underline decoration-gray-800/30 underline-offset-8 sm:text-5xl">
              Presentations
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Risk Takers, opportunity makers
            </p>

            <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {presentationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="flex items-center justify-between gap-4 py-4 text-[#008b67] transition hover:text-gray-900"
                  >
                    <span className="flex items-center gap-3 font-medium">
                      <img
                        src="/icons/adobe_pdf.png"
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                      {item.title}
                    </span>
                    <ArrowRight size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <article className="overflow-hidden bg-white shadow-xl shadow-gray-200">
            <div className="relative min-h-72 overflow-hidden bg-gray-900">
              <img
                src="/investors/overview.png"
                alt="Investor event"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-white px-4 py-2 text-sm font-semibold text-gray-900">
                <CalendarDays size={17} />
                Events
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-lg text-gray-600">Some of our</p>
              <h2 className="mt-1 text-4xl font-semibold text-[#00AE80] underline decoration-gray-800/30 underline-offset-8">
                Events
              </h2>
              <h3 className="mt-8 text-3xl font-semibold underline decoration-[#00AE80]/40 underline-offset-8">
                Your Event Title Here
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                As the most awarded B2B branding agency in Texas, we know how to
                combine customer insights
              </p>
              <Link
                to="/overviewsingle"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-gray-900 underline decoration-[#00AE80] underline-offset-4 transition hover:text-[#008b67]"
              >
                Read Report
                <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-7xl py-20">
        <div className="mb-10">
          <p className="text-lg text-gray-600">Some of our</p>
          <h2 className="mt-1 text-4xl font-semibold text-[#00AE80] underline decoration-gray-800/30 underline-offset-8 sm:text-5xl">
            Press Release
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pressReleases.map((item) => (
            <article
              key={item.id}
              className="border border-gray-200 p-6 transition hover:border-[#00AE80] hover:shadow-xl hover:shadow-gray-200"
            >
              <FileText className="text-[#00AE80]" size={32} />
              <p className="mt-6 text-gray-600">{item.eyebrow}</p>
              <h3 className="mt-1 text-3xl font-semibold text-[#00AE80] underline decoration-gray-800/30 underline-offset-8">
                {item.title}
              </h3>
              <p className="mt-6 leading-7 text-gray-600">
                {item.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 font-semibold underline decoration-[#00AE80] underline-offset-4 transition hover:text-[#008b67]">
                Read Report
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
