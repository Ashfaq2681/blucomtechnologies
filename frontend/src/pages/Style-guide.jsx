import React from "react";
import { CheckCircle2, Copy, Layers, Palette, Type } from "lucide-react";
import PageSeo from "../Components/PageSeo";

const colors = [
  { name: "Blucom Charcoal", hex: "#1E2832", use: "Footer, deep sections, high-contrast surfaces" },
  { name: "Growth Green", hex: "#10B981", use: "Primary buttons, active states, progress, links" },
  { name: "Forest Green", hex: "#047857", use: "Hover states, text links, badges" },
  { name: "Surface Mist", hex: "#F6F8F7", use: "Page backgrounds and quiet content bands" },
  { name: "Ink", hex: "#15211C", use: "Primary readable text" },
  { name: "Muted Text", hex: "#5B6862", use: "Paragraphs, captions, metadata" },
];

const typeScale = [
  { token: "Hero", className: "text-4xl sm:text-5xl lg:text-6xl font-semibold", role: "First viewport page headings" },
  { token: "Section H2", className: "text-3xl sm:text-4xl font-semibold", role: "Main content sections" },
  { token: "Card H3", className: "text-xl font-semibold", role: "Cards, repeated modules, dashboard panels" },
  { token: "Body", className: "text-base leading-7", role: "Long-form copy and page descriptions" },
  { token: "Caption", className: "text-sm leading-6", role: "Metadata, helper text, labels" },
];

const cssDetails = [
  "--blucom-charcoal: #1E2832;",
  "--blucom-green: #10B981;",
  "--blucom-green-dark: #047857;",
  "--blucom-surface: #F6F8F7;",
  "--blucom-ink: #15211C;",
  "--blucom-muted: #5B6862;",
  "font-family: 'Proxima Nova', 'SF Pro Display', Arial, sans-serif;",
  "border-radius: 0px for brand panels, 9999px only for icon circles and pills;",
  "box-shadow: 0 20px 45px -30px rgba(21, 33, 28, 0.35);",
  "container max-width: 80rem; horizontal padding: 1.25rem mobile, 2.5rem desktop;",
];

const components = [
  "Use emerald primary actions on light or charcoal surfaces.",
  "Keep operational dashboard panels white with slate borders and focused green states.",
  "Use photography or real product imagery for hero and media surfaces.",
  "Avoid oversized rounded cards; keep cards rectangular or under 8px radius.",
];

export default function StyleGuide() {
  return (
    <main className="bg-[#f6f8f7] text-[#15211c]">
      <PageSeo path="/style-guide" />
      <section className="bg-[#1E2832] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Brand identity
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Blucom Technologies style guide
            </h1>
            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">
              A front-end reference for color, typography, spacing, components,
              and CSS decisions used across Blucom Technologies pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
        <aside className="border border-[#dbe5e1] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Layers className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                System rules
              </p>
              <h2 className="text-xl font-semibold">Front-end styling details</h2>
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {components.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-[#4d5c56]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="grid grid-cols-1 gap-6">
          <section className="border border-[#dbe5e1] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Palette className="h-5 w-5 text-emerald-700" />
              <h2 className="text-2xl font-semibold">Color Palette</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {colors.map((color) => (
                <article key={color.hex} className="border border-[#e1e9e5] bg-[#fbfcfc] p-4">
                  <div className="h-20 border border-black/5" style={{ backgroundColor: color.hex }} />
                  <h3 className="mt-4 font-semibold">{color.name}</h3>
                  <p className="mt-1 font-mono text-sm text-emerald-700">{color.hex}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5b6862]">{color.use}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border border-[#dbe5e1] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Type className="h-5 w-5 text-emerald-700" />
              <h2 className="text-2xl font-semibold">Typography</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#dbe5e1] text-[#5b6862]">
                    <th className="py-3 pr-5 font-semibold">Token</th>
                    <th className="py-3 pr-5 font-semibold">Tailwind classes</th>
                    <th className="py-3 font-semibold">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {typeScale.map((item) => (
                    <tr key={item.token} className="border-b border-[#edf2f0]">
                      <td className="py-4 pr-5 font-semibold">{item.token}</td>
                      <td className="py-4 pr-5 font-mono text-xs text-emerald-700">{item.className}</td>
                      <td className="py-4 text-[#5b6862]">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border border-[#dbe5e1] bg-[#17221e] p-6 text-white shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Copy className="h-5 w-5 text-emerald-300" />
              <h2 className="text-2xl font-semibold">CSS Reference</h2>
            </div>
            <pre className="overflow-x-auto bg-black/25 p-5 text-sm leading-7 text-emerald-50">
              <code>{`:root {\n  ${cssDetails.join("\n  ")}\n}`}</code>
            </pre>
          </section>
        </div>
      </section>
    </main>
  );
}
