import { useState } from "react";

export default function AdminArticlePage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    tags: "",
    status: "draft",
    seoTitle: "",
    metaDescription: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Auto-generate slug
    if (e.target.name === "title") {
      const slug = e.target.value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-12 gap-6">

        {/* MAIN CONTENT */}
        <div className="col-span-8 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-semibold mb-4">Create Article</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Article Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            />

            {/* Slug */}
            <input
              type="text"
              name="slug"
              placeholder="Slug"
              value={form.slug}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            />

            {/* Content */}
            <textarea
              name="content"
              placeholder="Write your content..."
              value={form.content}
              onChange={handleChange}
              rows="10"
              className="w-full border p-3 rounded-md"
            />

            {/* Image */}
            <input
              type="file"
              className="w-full border p-2 rounded-md"
            />

            {/* Category */}
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>

            {/* Tags */}
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              value={form.tags}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            />

            {/* SEO Section */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">SEO Settings</h3>

              <input
                type="text"
                name="seoTitle"
                placeholder="SEO Title"
                value={form.seoTitle}
                onChange={handleChange}
                className="w-full border p-3 rounded-md mb-2"
              />

              <textarea
                name="metaDescription"
                placeholder="Meta Description"
                value={form.metaDescription}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md"
            >
              Save Article
            </button>

          </form>
        </div>

        {/* SIDEBAR */}
        <div className="col-span-4 space-y-6">

          {/* Publish Box */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-3">Publish</h3>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border p-2 rounded-md mb-3"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>

            <button className="w-full bg-green-600 text-white py-2 rounded-md">
              Publish
            </button>
          </div>

          {/* Author / Date (Optional) */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-semibold mb-3">Settings</h3>

            <input
              type="date"
              className="w-full border p-2 rounded-md mb-3"
            />

            <input
              type="text"
              placeholder="Author"
              className="w-full border p-2 rounded-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}