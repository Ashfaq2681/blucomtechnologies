import { useEffect, useState } from "react";
import {
  getApplications,
  getJobs,
  JobApplication,
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

export default function Applicants() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [openRolesCount, setOpenRolesCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadApplicants() {
      try {
        const [applicationRows, jobRows] = await Promise.all([
          getApplications(),
          getJobs(),
        ]);
        setApplications(applicationRows);
        setOpenRolesCount(jobRows.filter((job) => job.status === "Open").length);
      } catch (loadError) {
        console.error("[career][applicants]", loadError);
        setError("Unable to load applicants right now.");
      }
    }

    void loadApplicants();
  }, []);

  return (
    <>
      <PageMeta
        title="Applicants Dashboard | Blucom Technologies"
        description="Review candidates who applied through the public careers page."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Applicants" />
        <PageIntro
          eyebrow="Careers"
          title="Review incoming applications"
          description={`Applications submitted from the careers page land here automatically. You currently have ${applications.length} applicant${applications.length === 1 ? "" : "s"} across ${openRolesCount} open role${openRolesCount === 1 ? "" : "s"}.`}
        />

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
