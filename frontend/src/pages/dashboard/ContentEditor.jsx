import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import RichTextEditor from "./common/RichTextEditor";
import { createContent, getContentByIdentifier, updateContent } from "../../api/content";
import { getCategories } from "../../api/blogs";
import { getContentConfig } from "../../utils/contentConfig";
import { dedupeCategories, getDefaultCategoriesByType } from "../../utils/contentCategories";

const generateSlug = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const sharedSections = [
  { value: "latest", label: "Latest (Recommended)" },
  { value: "featured", label: "Featured Hero" },
  { value: "editor", label: "Editor's Picks" },
  { value: "analytics", label: "Analytics" },
  { value: "guides", label: "Guides" },
  { value: "reports", label: "Reports" },
  { value: "insights", label: "Insights" },
  { value: "archive", label: "Archive" },
];

const metaRobotsOptions = ["index,follow", "noindex,follow", "index,nofollow", "noindex,nofollow"];
const schemaTypeOptions = ["Article", "BlogPosting", "NewsArticle", "WebPage", "FAQPage"];
const twitterCardOptions = ["summary", "summary_large_image"];

const ContentEditor = ({ type }) => {
  const config = getContentConfig(type);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingItem, setLoadingItem] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [form, setForm] = useState({
    type,
    title: "",
    slug: "",
    category: "",
    subcategory: "",
    excerpt: "",
    content: "",
    image: null,
    tags: "",
    status: "draft",
    scheduledAt: "",
    featured: false,
    section: "latest",
    seoTitle: "",
    seoDescription: "",
    focusKeyword: "",
    canonicalUrl: "",
    metaRobots: "index,follow",
    readabilityNotes: "",
    schemaType: "Article",
    schemaJson: "",
    socialTitle: "",
    socialDescription: "",
    socialImage: "",
    twitterCard: "summary_large_image",
    componentPath: "",
  });

  useEffect(() => {
    setForm((current) => ({ ...current, type }));
  }, [type]);

  useEffect(() => {
    let mounted = true;

    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const data =
          type === "blog" ? await getCategories() : getDefaultCategoriesByType(type);
        const normalizedCategories = dedupeCategories(data);

        if (mounted) {
          setCategories(normalizedCategories);
          const firstCategory = normalizedCategories[0]?.name || "";
          const firstSubcategory =
            normalizedCategories[0]?.subcategories?.[0]?.name || "";
          setForm((current) => ({
            ...current,
            category: current.category || firstCategory,
            subcategory: current.subcategory || firstSubcategory,
          }));
        }
      } catch (_error) {
        if (mounted) {
          setErrorMessage("Unable to load categories.");
        }
      } finally {
        if (mounted) {
          setLoadingCategories(false);
        }
      }
    };

    loadCategories();
    return () => {
      mounted = false;
    };
  }, [type]);

  useEffect(() => {
    if (!isEditMode) {
      return;
    }

    let mounted = true;
    const loadItem = async () => {
      try {
        setLoadingItem(true);
        const data = await getContentByIdentifier(id, { type });

        if (mounted) {
          setForm({
            type,
            title: data.title || "",
            slug: data.slug || "",
            category: data.category || "",
            subcategory: data.subcategory || "",
            excerpt: data.excerpt || "",
            content: data.content || "",
            image: null,
            tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
            status: data.status || "draft",
            scheduledAt: data.scheduledAt || "",
            featured: Boolean(data.featured),
            section: data.section || "latest",
            seoTitle: data.seoTitle || "",
            seoDescription: data.seoDescription || "",
            focusKeyword: data.focusKeyword || "",
            canonicalUrl: data.canonicalUrl || "",
            metaRobots: data.metaRobots || "index,follow",
            readabilityNotes: data.readabilityNotes || "",
            schemaType: data.schemaType || "Article",
            schemaJson: data.schemaJson || "",
            socialTitle: data.socialTitle || "",
            socialDescription: data.socialDescription || "",
            socialImage: data.socialImage || "",
            twitterCard: data.twitterCard || "summary_large_image",
            componentPath: data.componentPath || "",
          });
          setCurrentImage(data.image || "");
        }
      } catch (_error) {
        if (mounted) {
          setErrorMessage(`Unable to load the selected ${config.singular.toLowerCase()}.`);
        }
      } finally {
        if (mounted) {
          setLoadingItem(false);
        }
      }
    };

    loadItem();
    return () => {
      mounted = false;
    };
  }, [config.singular, id, isEditMode, type]);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.name === form.category) || null,
    [categories, form.category]
  );

  const handleChange = (event) => {
    const { name, value, type: fieldType, checked, files } = event.target;

    if (name === "title") {
      const nextSlug = generateSlug(value);
      setForm((current) => ({ ...current, title: value, slug: nextSlug }));
      return;
    }

    if (name === "category") {
      const nextCategory = categories.find((category) => category.name === value);
      setForm((current) => ({
        ...current,
        category: value,
        subcategory: nextCategory?.subcategories?.[0]?.name || "",
      }));
      return;
    }

    if (name === "status") {
      setForm((current) => ({
        ...current,
        status: value,
        scheduledAt: value === "scheduled" ? current.scheduledAt : "",
      }));
      return;
    }

    setForm((current) => ({
      ...current,
      [name]: fieldType === "checkbox" ? checked : files?.length ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (isEditMode) {
        const updated = await updateContent(id, form);
        setCurrentImage(updated.image || currentImage);
        setSuccessMessage(`${config.singular} updated successfully.`);
      } else {
        await createContent(form);
        setSuccessMessage(`${config.singular} created successfully.`);
      }

      setTimeout(() => navigate(config.dashboardListPath), 900);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || `Unable to save the ${config.singular.toLowerCase()}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title={`${isEditMode ? "Edit" : "Add"} ${config.singular} Dashboard | Blucom Technologies`}
        description={`${isEditMode ? "Edit" : "Create"} a ${config.singular.toLowerCase()} in the dashboard CMS.`}
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={isEditMode ? `Edit ${config.singular}` : `Add ${config.singular}`} />
        <PageIntro
          eyebrow="Editor"
          title={isEditMode ? `Update an existing ${config.singular.toLowerCase()}` : `Create a CMS-ready ${config.singular.toLowerCase()}`}
          description="Capture the publishing fields once and send the item directly to the typed content API with image upload, rich text, and category mapping."
        />

        <ComponentCard
          title={isEditMode ? `Edit ${config.singular}` : `Add ${config.singular}`}
          desc="This form writes directly to the reusable content API."
        >
          {loadingItem ? (
            <div className="px-4 py-10 text-sm font-medium text-slate-500">Loading content...</div>
          ) : (
            <form className="grid gap-5 lg:grid-cols-2" onSubmit={handleSubmit}>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
                <input
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder={`Enter ${config.singular.toLowerCase()} title`}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Slug</label>
                <input
                  name="slug"
                  type="text"
                  value={form.slug}
                  onChange={handleChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  disabled={loadingCategories}
                  required
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Subcategory</label>
                <select
                  name="subcategory"
                  value={form.subcategory}
                  onChange={handleChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {(selectedCategory?.subcategories || []).map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.name}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Featured Image</label>
                {currentImage ? (
                  <div className="mb-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2">
                    <img
                      src={currentImage}
                      alt={form.title || "Current featured image"}
                      className="h-40 w-full rounded-xl object-cover"
                    />
                  </div>
                ) : null}
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Tags</label>
                <input
                  name="tags"
                  type="text"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="seo, marketing, strategy"
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Excerpt</label>
                <textarea
                  name="excerpt"
                  rows={4}
                  value={form.excerpt}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder={`Short summary for this ${config.singular.toLowerCase()}`}
                />
              </div>
              {type === "portfolio" ? (
                <div className="lg:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Portfolio JSX File</label>
                  <input
                    name="componentPath"
                    type="text"
                    value={form.componentPath}
                    onChange={handleChange}
                    className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    placeholder="portfolio/portfolio-hyundai.jsx or portfolio-hyundai.jsx"
                  />
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Optional. Use a file from `src/pages/portfolio/`. If set and found, the portfolio detail route will render that JSX component instead of the generic case-study layout.
                  </p>
                </div>
              ) : null}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Section</label>
                <select
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {sharedSections.map((sectionOption) => (
                    <option key={sectionOption.value} value={sectionOption.value}>
                      {sectionOption.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              {form.status === "scheduled" ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Schedule Date & Time</label>
                  <input
                    name="scheduledAt"
                    type="datetime-local"
                    value={form.scheduledAt}
                    onChange={handleChange}
                    className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    required={form.status === "scheduled"}
                  />
                </div>
              ) : null}
              <div className="flex items-end">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  <input
                    name="featured"
                    type="checkbox"
                    checked={form.featured}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  Mark as featured
                </label>
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Content</label>
                <div className="h-auto overflow-hidden rounded-[6px] border border-slate-300 bg-white">
                  <RichTextEditor
                    value={form.content}
                    onChange={(value) => setForm((current) => ({ ...current, content: value }))}
                  />
                </div>
              </div>
              <div className="lg:col-span-2 rounded-[6px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-slate-900">SEO Section</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Store dedicated search metadata, readability notes, schema markup, and social preview content.
                  </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">SEO Title</label>
                    <input
                      name="seoTitle"
                      type="text"
                      value={form.seoTitle}
                      onChange={handleChange}
                      placeholder="Search result title"
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Focus Keyword</label>
                    <input
                      name="focusKeyword"
                      type="text"
                      value={form.focusKeyword}
                      onChange={handleChange}
                      placeholder="Primary keyword or phrase"
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">SEO Description</label>
                    <textarea
                      name="seoDescription"
                      rows={3}
                      value={form.seoDescription}
                      onChange={handleChange}
                      placeholder="Meta description for search results"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Canonical URL</label>
                    <input
                      name="canonicalUrl"
                      type="url"
                      value={form.canonicalUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/final-url"
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Meta Robots</label>
                    <select
                      name="metaRobots"
                      value={form.metaRobots}
                      onChange={handleChange}
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      {metaRobotsOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Readability</h4>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Readability Notes</label>
                    <textarea
                      name="readabilityNotes"
                      rows={3}
                      value={form.readabilityNotes}
                      onChange={handleChange}
                      placeholder="Internal guidance about scannability, sentence length, headings, and CTA clarity"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Schema</h4>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Schema Type</label>
                    <select
                      name="schemaType"
                      value={form.schemaType}
                      onChange={handleChange}
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      {schemaTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Schema JSON-LD</label>
                    <textarea
                      name="schemaJson"
                      rows={6}
                      value={form.schemaJson}
                      onChange={handleChange}
                      placeholder='{"@context":"https://schema.org","@type":"Article"}'
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-mono text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Social</h4>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Social Title</label>
                    <input
                      name="socialTitle"
                      type="text"
                      value={form.socialTitle}
                      onChange={handleChange}
                      placeholder="Open Graph title"
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Twitter Card</label>
                    <select
                      name="twitterCard"
                      value={form.twitterCard}
                      onChange={handleChange}
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      {twitterCardOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Social Description</label>
                    <textarea
                      name="socialDescription"
                      rows={3}
                      value={form.socialDescription}
                      onChange={handleChange}
                      placeholder="Open Graph / Twitter description"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Social Image URL</label>
                    <input
                      name="socialImage"
                      type="url"
                      value={form.socialImage}
                      onChange={handleChange}
                      placeholder="https://example.com/social-preview.jpg"
                      className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>
              {(successMessage || errorMessage) ? (
                <div className="lg:col-span-2">
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      errorMessage ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {errorMessage || successMessage}
                  </div>
                </div>
              ) : null}
              <div className="lg:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Saving..." : isEditMode ? `Update ${config.singular}` : `Add ${config.singular}`}
                </button>
                <button
                  type="button"
                  onClick={() => navigate(config.dashboardListPath)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  View {config.plural}
                </button>
              </div>
            </form>
          )}
        </ComponentCard>
      </div>
    </>
  );
};

export default ContentEditor;
