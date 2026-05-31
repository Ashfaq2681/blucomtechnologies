import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPost, getCategories, getPostById, updatePost } from "../../api/blogs";
import { computeSeoQuality } from "../../utils/seoQuality";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import RichTextEditor from "./common/RichTextEditor";
import SeoEditorPanel from "./components/SeoEditorPanel";

const generateSlug = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const blogSections = [
  { value: "latest", label: "The Latest (Recommended)" },
  { value: "featured", label: "Featured Hero" },
  { value: "editor", label: "Editor's Picks" },
  { value: "analytics", label: "Social Media Analytics" },
  { value: "guides", label: "Guides" },
  { value: "reports", label: "Data Reports" },
  { value: "insights", label: "Marketing Insights" },
  { value: "archive", label: "Archive" },
];

const CreateBlog = ({
  postId,
  returnTo = "/Dashboard/blog",
  showDashboardChrome = true,
  onSaved,
  initialValues = {},
}) => {
  const navigate = useNavigate();
  const { id: routeId } = useParams();
  const id = postId || routeId;
  const isEditMode = Boolean(id);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    subcategory: "",
    content: "",
    image: null,
    tags: "",
    status: "draft",
    featured: false,
    section: "latest",
    seoTitle: "",
    seoDescription: "",
    metaKeywords: "",
    focusKeyword: "",
    canonicalUrl: "",
    metaRobots: "index, follow",
    readabilityNotes: "",
    socialTitle: "",
    socialDescription: "",
    socialImage: "",
    schemaType: "Article",
    schemaJson: "",
    ...initialValues,
  });

  useEffect(() => {
    let mounted = true;

    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await getCategories();

        if (mounted) {
          const hasInitialCategory = data.some(
            (category) => category.name === initialValues.category,
          );
          const nextCategories =
            initialValues.category && !hasInitialCategory
              ? [
                  ...data,
                  {
                    id: `initial-${initialValues.category}`,
                    name: initialValues.category,
                    subcategories: [],
                  },
                ]
              : data;
          const firstCategory = data[0]?.name || "";
          const firstSubcategory = data[0]?.subcategories?.[0]?.name || "";
          setCategories(nextCategories);
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
  }, []);

  useEffect(() => {
    if (!isEditMode) {
      return;
    }

    let mounted = true;

    const loadPost = async () => {
      try {
        setLoadingPost(true);
        const data = await getPostById(id);

        if (mounted) {
          setForm({
            title: data.title || "",
            slug: data.slug || "",
            category: data.category || "",
            subcategory: data.subcategory || "",
            content: data.content || "",
            image: null,
            tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
            status: data.status || "draft",
            featured: Boolean(data.featured),
            section: data.section || "latest",
            seoTitle: data.seoTitle || data.title || "",
            seoDescription: data.seoDescription || data.description || "",
            metaKeywords:
              data.metaKeywords ||
              data.seoKeywords ||
              (Array.isArray(data.tags) ? data.tags.join(", ") : ""),
            focusKeyword: data.focusKeyword || "",
            canonicalUrl: data.canonicalUrl || "",
            metaRobots: data.metaRobots || "index, follow",
            readabilityNotes: data.readabilityNotes || "",
            socialTitle: data.socialTitle || data.seoTitle || data.title || "",
            socialDescription: data.socialDescription || data.seoDescription || data.description || "",
            socialImage: data.socialImage || data.image || "",
            schemaType: data.schemaType || "Article",
            schemaJson: data.schemaJson || "",
          });
          setCurrentImage(data.image || "");
        }
      } catch (_error) {
        if (mounted) {
          setErrorMessage("Unable to load the selected post.");
        }
      } finally {
        if (mounted) {
          setLoadingPost(false);
        }
      }
    };

    loadPost();

    return () => {
      mounted = false;
    };
  }, [id, isEditMode]);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.name === form.category) || null,
    [categories, form.category],
  );
  const seoQuality = useMemo(() => computeSeoQuality(form), [form]);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (name === "title") {
      const nextSlug = generateSlug(value);
      setForm((current) => ({
        ...current,
        title: value,
        slug: nextSlug,
      }));
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

    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox" ? checked : files?.length ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (isEditMode) {
        const updated = await updatePost(id, form);
        setCurrentImage(updated.image || currentImage);
        setSuccessMessage("Blog post updated successfully.");
      } else {
        await createPost(form);
        setSuccessMessage("Blog post created successfully.");
      }
      setTimeout(() => {
        if (typeof onSaved === "function") {
          onSaved();
          return;
        }

        navigate(returnTo);
      }, 900);
    } catch (error) {
      const serverSeoQuality = error?.response?.data?.seoQuality;
      setErrorMessage(
        serverSeoQuality
          ? `${error.response.data.message} Missing: ${serverSeoQuality.missingFields.join(", ")}.`
          : error?.response?.data?.message || "Unable to create the blog post.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const editor = (
    <>
      <PageMeta
        title={`${isEditMode ? "Edit" : "Create"} Blog Dashboard | Blucom Technologies`}
        description={`${isEditMode ? "Edit" : "Create"} a CMS blog post from the dashboard.`}
      />
      <div className="dashboard-page-stack">
        {showDashboardChrome && (
          <>
            <PageBreadcrumb pageTitle={isEditMode ? "Edit Blog" : "Create Blog"} />
            <PageIntro
              eyebrow="Editor"
              title={isEditMode ? "Update an existing blog post" : "Create a CMS-ready blog post"}
              description="Capture the publishing fields once and send the post directly to the blog API with image upload, rich text, and category mapping."
            />
          </>
        )}

        <ComponentCard
          eyebrow="Content Editor"
          title={isEditMode ? "Edit blog post" : "Create blog post"}
          desc="Manage the article details, SEO fields, publishing status, and rich content from one editor."
          headerMeta={
            <div
              className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                isEditMode
                  ? "bg-blue-50 text-blue-700 ring-blue-100"
                  : "bg-emerald-50 text-emerald-700 ring-emerald-100"
              }`}
            >
              {isEditMode ? "Editing existing post" : "New draft"}
            </div>
          }
        >
          {loadingPost ? (
            <div className="px-4 py-10 text-sm font-medium text-slate-500">
              Loading post...
            </div>
          ) : (
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <form className="grid gap-5 lg:grid-cols-2" onSubmit={handleSubmit}>
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Slug
              </label>
              <input
                name="slug"
                type="text"
                value={form.slug}
                onChange={handleChange}
                placeholder="auto-generated-slug"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>
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
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subcategory
              </label>
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
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Featured Image
              </label>
              {currentImage && (
                <div className="mb-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2">
                  <img
                    src={currentImage}
                    alt={form.title || "Current featured image"}
                    className="h-40 w-full rounded-xl object-cover"
                  />
                </div>
              )}
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tags
              </label>
              <input
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="seo, marketing, strategy"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Blog Section
              </label>
              <select
                name="section"
                value={form.section}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                {blogSections.map((sectionOption) => (
                  <option key={sectionOption.value} value={sectionOption.value}>
                    {sectionOption.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2 border-t border-slate-200 pt-5">
              <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    SEO Metadata
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Publish threshold: {seoQuality.threshold}. Drafts can be saved below the threshold.
                  </p>
                </div>
                <div className="min-w-[150px]">
                  <div
                    className={`rounded-2xl px-4 py-3 text-center ring-1 ${
                      seoQuality.passed
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                        : "bg-amber-50 text-amber-700 ring-amber-200"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em]">SEO Score</p>
                    <p className="mt-1 text-3xl font-semibold">{seoQuality.score}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Missing Fields</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {(seoQuality.missingFields.length ? seoQuality.missingFields : ["None"]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Warnings</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {(seoQuality.warnings.length ? seoQuality.warnings : ["None"]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Improvements</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {(seoQuality.improvements.length ? seoQuality.improvements.slice(0, 4) : ["None"]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                SEO Title
              </label>
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
              <label className="mb-2 block text-sm font-medium text-slate-700">
                SEO Keywords
              </label>
              <input
                name="metaKeywords"
                type="text"
                value={form.metaKeywords}
                onChange={handleChange}
                placeholder="digital marketing, SEO, content strategy"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Focus Keyword
              </label>
              <input
                name="focusKeyword"
                type="text"
                value={form.focusKeyword}
                onChange={handleChange}
                placeholder="Primary keyword for this post"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Canonical URL
              </label>
              <input
                name="canonicalUrl"
                type="url"
                value={form.canonicalUrl}
                onChange={handleChange}
                placeholder="https://www.blucomtechnologies.com/blog/post-slug"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Meta Robots
              </label>
              <select
                name="metaRobots"
                value={form.metaRobots}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="index, follow">index, follow</option>
                <option value="noindex, follow">noindex, follow</option>
                <option value="index, nofollow">index, nofollow</option>
                <option value="noindex, nofollow">noindex, nofollow</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                SEO Description
              </label>
              <textarea
                name="seoDescription"
                value={form.seoDescription}
                onChange={handleChange}
                placeholder="Short search result description for this blog post"
                rows={4}
                className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <p className="mt-2 text-xs font-medium text-slate-500">
                {form.seoDescription.length}/160 characters recommended
              </p>
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Readability Notes
              </label>
              <textarea
                name="readabilityNotes"
                value={form.readabilityNotes}
                onChange={handleChange}
                placeholder="Editorial or readability notes for this post"
                rows={4}
                className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="lg:col-span-2 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Social and Schema
              </h3>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Social Title
              </label>
              <input
                name="socialTitle"
                type="text"
                value={form.socialTitle}
                onChange={handleChange}
                placeholder="Open Graph / Twitter title"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Social Image URL
              </label>
              <input
                name="socialImage"
                type="url"
                value={form.socialImage}
                onChange={handleChange}
                placeholder="https://example.com/share-image.jpg"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Social Description
              </label>
              <textarea
                name="socialDescription"
                value={form.socialDescription}
                onChange={handleChange}
                placeholder="Description shown when this post is shared"
                rows={3}
                className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Schema Type
              </label>
              <select
                name="schemaType"
                value={form.schemaType}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="Article">Article</option>
                <option value="BlogPosting">BlogPosting</option>
                <option value="NewsArticle">NewsArticle</option>
                <option value="TechArticle">TechArticle</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Custom Schema JSON-LD
              </label>
              <textarea
                name="schemaJson"
                value={form.schemaJson}
                onChange={handleChange}
                placeholder='{"@context":"https://schema.org","@type":"BlogPosting"}'
                rows={6}
                className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 font-mono text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

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

            <div className=" lg:col-span-2">
              <label className=" mb-2 block text-sm font-medium text-slate-700">
                Content
              </label>
              <div className="h-auto overflow-hidden rounded-[24px] border border-slate-300 bg-white">
                <RichTextEditor
                  value={form.content}
                  onChange={(value) =>
                    setForm((current) => ({ ...current, content: value }))
                  }
                />
              </div>
            </div>

            {(successMessage || errorMessage) && (
              <div className="lg:col-span-2">
                <div
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    errorMessage
                      ? "bg-red-50 text-red-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {errorMessage || successMessage}
                </div>
              </div>
            )}

            <div className="lg:col-span-2 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting
                  ? "Saving..."
                  : isEditMode
                  ? "Update Blog"
                  : "Create Blog"}
              </button>
              <button
                type="button"
                onClick={() => navigate(returnTo)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to Blog
              </button>
            </div>
          </form>
          <SeoEditorPanel form={form} seoQuality={seoQuality} />
          </div>
          )}
        </ComponentCard>
      </div>
    </>
  );

  return editor;
};

export default CreateBlog;
