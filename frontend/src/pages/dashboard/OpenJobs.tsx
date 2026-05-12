import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApplications, getJobs, JobOpening } from "./career/jobsStore";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

export default function OpenJobs() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [applicationCounts, setApplicationCounts] = useState<Record<string, number>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCareerData() {
      try {
        const [jobRows, applicationRows] = await Promise.all([getJobs(), getApplications()]);
        setJobs(jobRows);
        const counts = applicationRows.reduce<Record<string, number>>((accumulator, application) => {
          accumulator[application.jobId] = (accumulator[application.jobId] || 0) + 1;
          return accumulator;
        }, {});
        setApplicationCounts(counts);
      } catch (loadError) {
        console.error("[career][open-jobs]", loadError);
        setError("Unable to load career jobs right now.");
      }
    }

    void loadCareerData();
  }, []);

  return (
    <>
      <PageMeta
        title="Open Jobs Dashboard | Blucom Technologies"
        description="Review currently listed career openings from the dashboard."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Open Jobs" />
        <PageIntro
          eyebrow="Careers"
          title="Track active roles and hiring status"
          description="Use this section to review current openings, keep role status visible, and route new hiring requests into the dashboard workflow."
          actions={
            <Link
              to="/dashboard/career/post-job"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Post a Job
            </Link>
          }
        />

        <ComponentCard
          title="Current Openings"
          desc="Roles saved from the dashboard appear here immediately."
          className="overflow-hidden"
        >
          {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Role</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Type</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Applicants</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td className="px-4 py-4 font-semibold text-slate-900">{job.title}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{job.location}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{job.employmentType}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{applicationCounts[job.id] || 0}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                          job.status === "Open"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-amber-50 text-amber-700 ring-amber-200"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {jobs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-500">
                      No jobs created yet. Use Post a Job to add the first opening.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
