import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost, getCategories, getPostById, updatePost } from "../../api/blogs";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

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

const CreateBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  });

  useEffect(() => {
    let mounted = true;

    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await getCategories();

        if (mounted) {
          setCategories(data);
          const firstCategory = data[0]?.name || "";
          const firstSubcategory = data[0]?.subcategories?.[0]?.name || "";
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
      setTimeout(() => navigate("/Dashboard/blog-list"), 900);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || "Unable to create the blog post.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title={`${isEditMode ? "Edit" : "Create"} Blog Dashboard | Blucom Technologies`}
        description={`${isEditMode ? "Edit" : "Create"} a CMS blog post from the dashboard.`}
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={isEditMode ? "Edit Blog" : "Create Blog"} />
        <PageIntro
          eyebrow="Editor"
          title={isEditMode ? "Update an existing blog post" : "Create a CMS-ready blog post"}
          description="Capture the publishing fields once and send the post directly to the blog API with image upload, rich text, and category mapping."
        />

        <ComponentCard
          title={isEditMode ? "Edit Blog" : "Create Blog"}
          desc="This form writes directly to the MySQL-backed post API."
        >
          {loadingPost ? (
            <div className="px-4 py-10 text-sm font-medium text-slate-500">
              Loading post...
            </div>
          ) : (
          <form className="grid gap-5 lg:grid-cols-2" onSubmit={handleSubmit}>
            <div className="lg:col-span-2">
              <label htmlFor="blog-title" className="mb-2 block text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                id="blog-title"
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
              <label htmlFor="blog-slug" className="mb-2 block text-sm font-medium text-slate-700">
                Slug
              </label>
              <input
                id="blog-slug"
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
              <label htmlFor="blog-category" className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                id="blog-category"
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
              <label htmlFor="blog-subcategory" className="mb-2 block text-sm font-medium text-slate-700">
                Subcategory
              </label>
              <select
                id="blog-subcategory"
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
              <label htmlFor="blog-image" className="mb-2 block text-sm font-medium text-slate-700">
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
                id="blog-image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
              />
            </div>

            <div>
              <label htmlFor="blog-tags" className="mb-2 block text-sm font-medium text-slate-700">
                Tags
              </label>
              <input
                id="blog-tags"
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="seo, marketing, strategy"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="blog-section" className="mb-2 block text-sm font-medium text-slate-700">
                Blog Section
              </label>
              <select
                id="blog-section"
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

            <div>
              <label htmlFor="blog-status" className="mb-2 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                id="blog-status"
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
                  id="blog-featured"
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
              <div className=" mb-2 block text-sm font-medium text-slate-700">
                Content
              </div>
              <div className="h-auto overflow-hidden rounded-[24px] border border-slate-300 bg-white">
                <ReactQuill
                  theme="snow"
                  value={form.content}
                  onChange={(value) =>
                    setForm((current) => ({ ...current, content: value }))
                  }
                  className="bg-white"
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
                onClick={() => navigate("/Dashboard/blog-list")}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View Blog List
              </button>
            </div>
          </form>
          )}
        </ComponentCard>
      </div>
    </>
  );
};

export default CreateBlog;
