import SeoStatusBadge from "./SeoStatusBadge";

const counterClass = (value, min, max) =>
  value >= min && value <= max ? "text-emerald-700" : "text-amber-700";

export default function SeoEditorPanel({ form, seoQuality }) {
  const finalSeo = seoQuality.finalSeo || {};
  const keyword = finalSeo.focusKeyword || form.focusKeyword || "";
  const keywordInTitle = keyword
    ? String(finalSeo.seoTitle || "").toLowerCase().includes(keyword.toLowerCase())
    : false;
  const keywordInDescription = keyword
    ? String(finalSeo.seoDescription || "").toLowerCase().includes(keyword.toLowerCase())
    : false;

  return (
    <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">SEO Score</p>
          <p className="mt-1 text-xs text-slate-500">Live template and quality analysis</p>
        </div>
        <SeoStatusBadge score={seoQuality.score} status={seoQuality.status} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Google Preview
        </p>
        <p className="mt-3 text-base font-medium leading-6 text-blue-700">
          {finalSeo.seoTitle || form.title || "SEO title preview"}
        </p>
        <p className="mt-1 break-all text-xs text-emerald-700">
          {finalSeo.canonicalUrl || `https://www.blucomtechnologies.com/blog/${form.slug || ""}`}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {finalSeo.seoDescription || "Meta description preview"}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border border-slate-200 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Title Length
          </p>
          <p className={`mt-2 text-sm font-semibold ${counterClass((finalSeo.seoTitle || "").length, 50, 65)}`}>
            {(finalSeo.seoTitle || "").length}/65
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Description
          </p>
          <p className={`mt-2 text-sm font-semibold ${counterClass((finalSeo.seoDescription || "").length, 140, 160)}`}>
            {(finalSeo.seoDescription || "").length}/160
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4">
        <p className="text-sm font-semibold text-slate-900">Keyword Usage</p>
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <p>Keyword: {keyword || "Missing"}</p>
          <p>In title: {keywordInTitle ? "Yes" : "No"}</p>
          <p>In description: {keywordInDescription ? "Yes" : "No"}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4">
        <p className="text-sm font-semibold text-slate-900">Suggestions</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
          {(seoQuality.warnings.length ? seoQuality.warnings.slice(0, 6) : ["No active SEO warnings."]).map(
            (warning) => (
              <li key={warning}>{warning}</li>
            ),
          )}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-600">
        <p>Canonical: {finalSeo.canonicalUrl || "Pending slug"}</p>
        <p>Slug: /blog/{form.slug || "post-slug"}</p>
      </div>
    </aside>
  );
}
