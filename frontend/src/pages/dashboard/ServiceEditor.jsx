import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { createService, getServiceById, updateService } from "../../api/services";
import {
  createSectionByType,
  SERVICE_SECTION_TYPES,
  SERVICE_TEMPLATE_OPTIONS,
  serviceDashboardConfig,
} from "../../modules/services/config";

const createInitialState = () => ({
  title: "",
  slug: "",
  template: "template_1",
  sections: [createSectionByType("hero")],
});

const slugify = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const labelClassName = "text-sm font-semibold text-slate-700";

function SectionFields({ section, onChange, onAddFeatureItem, onRemoveFeatureItem }) {
  if (section.type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className={labelClassName}>Heading</label>
          <input className={`${inputClassName} mt-2`} value={section.heading || ""} onChange={(event) => onChange("heading", event.target.value)} placeholder="High-impact hero headline" />
        </div>
        <div className="md:col-span-2">
          <label className={labelClassName}>Subheading</label>
          <textarea className={`${inputClassName} mt-2 min-h-[120px]`} value={section.subheading || ""} onChange={(event) => onChange("subheading", event.target.value)} placeholder="Short positioning statement" />
        </div>
        <div className="md:col-span-2">
          <label className={labelClassName}>Image URL</label>
          <input className={`${inputClassName} mt-2`} value={section.image || ""} onChange={(event) => onChange("image", event.target.value)} placeholder="https://example.com/hero.jpg" />
        </div>
      </div>
    );
  }

  if (section.type === "features") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <label className={labelClassName}>Feature Items</label>
          <button type="button" onClick={onAddFeatureItem} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
            Add Item
          </button>
        </div>
        <div className="space-y-3">
          {(section.items || []).map((item, itemIndex) => (
            <div key={`${section.type}-${itemIndex}`} className="flex gap-3">
              <input
                className={inputClassName}
                value={item}
                onChange={(event) => {
                  const nextItems = [...(section.items || [])];
                  nextItems[itemIndex] = event.target.value;
                  onChange("items", nextItems);
                }}
                placeholder={`Feature ${itemIndex + 1}`}
              />
              <button type="button" onClick={() => onRemoveFeatureItem(itemIndex)} className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-100">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "testimonials") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClassName}>Name</label>
          <input className={`${inputClassName} mt-2`} value={section.name || ""} onChange={(event) => onChange("name", event.target.value)} placeholder="Client name" />
        </div>
        <div>
          <label className={labelClassName}>Image URL</label>
          <input className={`${inputClassName} mt-2`} value={section.image || ""} onChange={(event) => onChange("image", event.target.value)} placeholder="https://example.com/client.jpg" />
        </div>
        <div className="md:col-span-2">
          <label className={labelClassName}>Review</label>
          <textarea className={`${inputClassName} mt-2 min-h-[120px]`} value={section.review || ""} onChange={(event) => onChange("review", event.target.value)} placeholder="Client review" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="md:col-span-2">
        <label className={labelClassName}>Text</label>
        <textarea className={`${inputClassName} mt-2 min-h-[120px]`} value={section.text || ""} onChange={(event) => onChange("text", event.target.value)} placeholder="Primary CTA message" />
      </div>
      <div>
        <label className={labelClassName}>Button Label</label>
        <input className={`${inputClassName} mt-2`} value={section.button || ""} onChange={(event) => onChange("button", event.target.value)} placeholder="Book a call" />
      </div>
      <div>
        <label className={labelClassName}>Button Link</label>
        <input className={`${inputClassName} mt-2`} value={section.link || ""} onChange={(event) => onChange("link", event.target.value)} placeholder="/contact" />
      </div>
    </div>
  );
}

export default function ServiceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [form, setForm] = useState(createInitialState);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      return;
    }

    let mounted = true;

    const loadService = async () => {
      try {
        setLoading(true);
        const service = await getServiceById(id);
        if (mounted) {
          setForm({
            title: service.title || "",
            slug: service.slug || "",
            template: service.template || "template_1",
            sections: Array.isArray(service.sections) && service.sections.length ? service.sections : [createSectionByType("hero")],
          });
          setError("");
          setSlugTouched(true);
        }
      } catch (_error) {
        if (mounted) {
          setError("Unable to load the selected service.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadService();
    return () => {
      mounted = false;
    };
  }, [id, isEditing]);

  const updateForm = (key, value) => {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (key === "title" && !slugTouched) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const updateSection = (index, key, value) => {
    setForm((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) => (sectionIndex === index ? { ...section, [key]: value } : section)),
    }));
  };

  const updateSectionType = (index, type) => {
    setForm((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) => (sectionIndex === index ? createSectionByType(type) : section)),
    }));
  };

  const addSection = () => {
    setForm((current) => ({
      ...current,
      sections: [...current.sections, createSectionByType("hero")],
    }));
  };

  const removeSection = (index) => {
    setForm((current) => ({
      ...current,
      sections: current.sections.filter((_, sectionIndex) => sectionIndex !== index),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const payload = {
        title: form.title,
        slug: slugify(form.slug || form.title),
        template: form.template,
        sections: form.sections,
      };

      if (isEditing) {
        await updateService(id, payload);
      } else {
        await createService(payload);
      }

      navigate(serviceDashboardConfig.dashboardListPath);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Unable to save the service.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <PageMeta title={`${isEditing ? "Edit" : "Add"} Service | Blucom Technologies`} description="Create and edit dynamic services with template-based sections." />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={isEditing ? "Edit Service" : "Add Service"} />
        <PageIntro eyebrow="Service Builder" title={isEditing ? "Refine a live service page" : "Create a modular service page"} description="Configure the public slug, choose a layout template, and compose the page from reusable section blocks." />

        {loading ? <div className="rounded-[7px] border border-slate-200 bg-white px-6 py-10 text-sm font-medium text-slate-500">Loading service...</div> : null}
        {!loading ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <section className="rounded-[7px] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClassName}>Title</label>
                  <input className={`${inputClassName} mt-2`} value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="Performance Marketing" required />
                </div>
                <div>
                  <label className={labelClassName}>Slug</label>
                  <input
                    className={`${inputClassName} mt-2`}
                    value={form.slug}
                    onChange={(event) => {
                      setSlugTouched(true);
                      updateForm("slug", slugify(event.target.value));
                    }}
                    placeholder="performance-marketing"
                    required
                  />
                </div>
                <div>
                  <label className={labelClassName}>Template</label>
                  <select className={`${inputClassName} mt-2`} value={form.template} onChange={(event) => updateForm("template", event.target.value)}>
                    {SERVICE_TEMPLATE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">Dynamic Sections</h3>
                  <p className="mt-1 text-sm text-slate-500">Add and reorder-ready section blocks without hardcoding the page layout.</p>
                </div>
                <button type="button" onClick={addSection} className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Add Section
                </button>
              </div>

              {form.sections.map((section, index) => (
                <div key={`${section.type}-${index}`} className="rounded-[7px] border border-slate-200 bg-white p-6 sm:p-7">
                  <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600/80">Section {index + 1}</p>
                      <h4 className="mt-2 text-lg font-semibold text-slate-950">
                        {SERVICE_SECTION_TYPES.find((option) => option.value === section.type)?.label || "Section"}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <select className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500" value={section.type} onChange={(event) => updateSectionType(index, event.target.value)}>
                        {SERVICE_SECTION_TYPES.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <button type="button" onClick={() => removeSection(index)} disabled={form.sections.length === 1} className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60">
                        Remove
                      </button>
                    </div>
                  </div>

                  <SectionFields
                    section={section}
                    onChange={(key, value) => updateSection(index, key, value)}
                    onAddFeatureItem={() => updateSection(index, "items", [...(section.items || []), ""])}
                    onRemoveFeatureItem={(itemIndex) => updateSection(index, "items", (section.items || []).filter((_, currentIndex) => currentIndex !== itemIndex))}
                  />
                </div>
              ))}
            </section>

            {error ? <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div> : null}

            <div className="flex flex-wrap gap-3">
              <button type="submit" disabled={saving} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
                {saving ? "Saving..." : isEditing ? "Update Service" : "Create Service"}
              </button>
              <button type="button" onClick={() => navigate(serviceDashboardConfig.dashboardListPath)} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
                Cancel
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </>
  );
}
