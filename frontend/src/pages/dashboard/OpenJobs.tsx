import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getApplications,
  getJobs,
  JobApplication,
  JobOpening,
} from "./career/jobsStore";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";

function formatSubmittedDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function OpenJobs() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [applicationCounts, setApplicationCounts] = useState<Record<string, number>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCareerData() {
      try {
        const [jobRows, applicationRows] = await Promise.all([getJobs(), getApplications()]);
        setJobs(jobRows);
        setApplications(applicationRows);
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
        title="Careers Dashboard | Blucom Technologies"
        description="Review jobs and applicants from the dashboard."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Careers" />
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
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Actions</th>
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
                    <td className="px-4 py-4">
                      <Link
                        to={`/dashboard/career/edit-job/${job.id}`}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
                {jobs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                      No jobs created yet. Use Post a Job to add the first opening.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Applicant Pipeline"
          desc="Contact details, role selection, and the applicant note are captured for each submission."
          className="overflow-hidden"
        >
          {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Applicant</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Role</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Links</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Submitted</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {applications.map((application) => (
                  <tr key={application.id} className="align-top">
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">{application.fullName}</div>
                      <span className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
                        {application.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">{application.jobTitle}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      <a className="block text-blue-600 hover:text-blue-700" href={`mailto:${application.email}`}>
                        {application.email}
                      </a>
                      <a className="mt-1 block text-slate-600 hover:text-slate-900" href={`tel:${application.phone}`}>
                        {application.phone}
                      </a>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {application.linkedIn ? (
                        <a
                          className="block text-blue-600 hover:text-blue-700"
                          href={application.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      ) : (
                        <span className="block text-slate-400">No LinkedIn</span>
                      )}
                      {application.portfolio ? (
                        <a
                          className="mt-1 block text-blue-600 hover:text-blue-700"
                          href={application.portfolio}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Portfolio
                        </a>
                      ) : (
                        <span className="mt-1 block text-slate-400">No portfolio</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {formatSubmittedDate(application.createdAt)}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-600">
                      {application.coverNote || "No additional note provided."}
                    </td>
                  </tr>
                ))}
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                      No applicants yet. Submissions from the careers page will appear here.
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
