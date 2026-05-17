import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createJob, getJob, JobStatus, updateJob } from "./career/jobsStore";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

const initialForm = {
  title: "",
  location: "",
  employmentType: "Full-time",
  summary: "",
};

export default function PostJob() {
  const navigate = useNavigate();
  const { id: jobId } = useParams();
  const isEditing = Boolean(jobId);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(isEditing);

  useEffect(() => {
    if (!jobId) {
      setForm(initialForm);
      setLoading(false);
      return;
    }

    let isMounted = true;

    async function loadJob() {
      try {
        const job = await getJob(jobId);

        if (!isMounted) return;

        if (!job) {
          setError("Job not found.");
          return;
        }

        setForm({
          title: job.title,
          location: job.location,
          employmentType: job.employmentType,
          summary: job.summary,
        });
      } catch (loadError) {
        console.error("[career][edit-job][load]", loadError);
        if (isMounted) setError("Unable to load this job right now.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    void loadJob();

    return () => {
      isMounted = false;
    };
  }, [jobId]);

  function updateField<Key extends keyof typeof initialForm>(key: Key, value: (typeof initialForm)[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function persistJob(status: JobStatus) {
    const title = form.title.trim();
    const location = form.location.trim();
    const summary = form.summary.trim();

    if (!title || !location || !summary) {
      setError("Add a title, location, and summary before saving the role.");
      return;
    }

    try {
      const payload = {
        title,
        location,
        employmentType: form.employmentType,
        summary,
        status,
      };

      if (jobId) {
        await updateJob(jobId, payload);
      } else {
        await createJob(payload);
      }

      setError("");
      setNotice(
        jobId
          ? "Job opening updated."
          : status === "Draft"
            ? "Draft saved."
            : "Job opening published."
      );
      if (!jobId) setForm(initialForm);
      navigate("/dashboard/career/open-jobs");
    } catch (persistError) {
      console.error(jobId ? "[career][edit-job]" : "[career][post-job]", persistError);
      setNotice("");
      setError(jobId ? "Unable to update the job right now. Please try again." : "Unable to save the job right now. Please try again.");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void persistJob("Open");
  }

  return (
    <>
      <PageMeta
        title={`${isEditing ? "Edit Job" : "Post a Job"} Dashboard | Blucom Technologies`}
        description={isEditing ? "Edit an existing job posting from the dashboard." : "Create a new job posting from the dashboard."}
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle={isEditing ? "Edit Job" : "Post a Job"} />
        <PageIntro
          eyebrow="Careers"
          title={isEditing ? "Edit opening" : "Create a new opening"}
          description={
            isEditing
              ? "Update the role details below to keep the dashboard jobs list current."
              : "Add the role details below to save a draft or publish a new opening directly into the dashboard jobs list."
          }
        />

        <ComponentCard
          title={isEditing ? "Job Posting" : "Job Posting Draft"}
          desc={isEditing ? "Edit the role details and save changes into the jobs board." : "Create a role, preview the content, and save it into the jobs board."}
        >
          {loading ? <p className="text-sm text-slate-500">Loading job details...</p> : null}
          <form className="grid gap-5 lg:grid-cols-2" onSubmit={handleSubmit}>
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Job Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(event) => updateField("title", event.target.value)}
                placeholder="Enter role title"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(event) => updateField("location", event.target.value)}
                placeholder="Islamabad / Remote"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Employment Type</label>
              <select
                value={form.employmentType}
                onChange={(event) => updateField("employmentType", event.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Summary</label>
              <textarea
                rows={5}
                value={form.summary}
                onChange={(event) => updateField("summary", event.target.value)}
                placeholder="Add a short role summary"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            {error ? <p className="lg:col-span-2 text-sm font-medium text-rose-600">{error}</p> : null}
            {notice ? <p className="lg:col-span-2 text-sm font-medium text-emerald-600">{notice}</p> : null}
            <div className="lg:col-span-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => void persistJob("Draft")}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {isEditing ? "Save as Draft" : "Save Draft"}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {isEditing ? "Update Job" : "Publish Job"}
              </button>
              <button
                type="button"
                onClick={() => setPreviewVisible((current) => !current)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                {previewVisible ? "Hide Preview" : "Preview"}
              </button>
            </div>
          </form>

          {previewVisible ? (
            <div className="rounded-[6px] border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-semibold text-slate-900">
                  {form.title.trim() || "Untitled Role"}
                </h4>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                  {form.employmentType}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                {form.location.trim() || "Location not added yet"}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {form.summary.trim() || "Add a summary to preview the role description."}
              </p>
            </div>
          ) : null}
        </ComponentCard>
      </div>
    </>
  );
}
