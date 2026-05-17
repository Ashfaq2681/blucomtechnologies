import http from "../../../api/http";

export type JobStatus = "Open" | "Draft";
export type ApplicationStatus = "New";

export type JobOpening = {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  summary: string;
  status: JobStatus;
  createdAt: string;
};

export type JobApplication = {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  coverNote: string;
  status: ApplicationStatus;
  createdAt: string;
};

const fallbackJobs: JobOpening[] = [
  {
    id: "seed-senior-brand-strategist",
    title: "Senior Brand Strategist",
    location: "Islamabad",
    employmentType: "Full-time",
    summary:
      "Lead integrated brand planning, campaign framing, and strategic alignment across client workstreams.",
    status: "Open",
    createdAt: "2026-04-17T00:00:00.000Z",
  },
  {
    id: "seed-performance-marketing-manager",
    title: "Performance Marketing Manager",
    location: "Remote",
    employmentType: "Full-time",
    summary:
      "Own paid media planning, optimization, reporting, and channel growth with a performance-first lens.",
    status: "Open",
    createdAt: "2026-04-17T00:00:00.000Z",
  },
  {
    id: "seed-content-designer",
    title: "Content Designer",
    location: "Lahore",
    employmentType: "Contract",
    summary:
      "Shape editorial concepts and visual storytelling systems for campaigns, launches, and content programs.",
    status: "Draft",
    createdAt: "2026-04-17T00:00:00.000Z",
  },
];

function normalizeJob(job: any): JobOpening {
  return {
    id: job.id,
    title: job.title,
    location: job.location,
    employmentType: job.employmentType,
    summary: job.summary,
    status: job.status,
    createdAt: job.createdAt,
  };
}

function normalizeApplication(application: any): JobApplication {
  return {
    id: application.id,
    jobId: application.jobId,
    jobTitle: application.jobTitle,
    fullName: application.fullName,
    email: application.email,
    phone: application.phone,
    linkedIn: application.linkedIn || "",
    portfolio: application.portfolio || "",
    coverNote: application.coverNote || "",
    status: application.status,
    createdAt: application.createdAt,
  };
}

export async function getJobs(): Promise<JobOpening[]> {
  try {
    const { data } = await http.get("/api/career/jobs");
    return Array.isArray(data) ? data.map(normalizeJob) : fallbackJobs;
  } catch {
    return fallbackJobs;
  }
}

export async function createJob(
  job: Omit<JobOpening, "id" | "createdAt">
): Promise<JobOpening> {
  const { data } = await http.post("/api/career/jobs", job);
  return normalizeJob(data);
}

export async function getJob(jobId: string): Promise<JobOpening | null> {
  try {
    const { data } = await http.get(`/api/career/jobs/${jobId}`);
    return data ? normalizeJob(data) : null;
  } catch {
    return fallbackJobs.find((job) => job.id === jobId) || null;
  }
}

export async function updateJob(
  jobId: string,
  job: Omit<JobOpening, "id" | "createdAt">
): Promise<JobOpening> {
  const { data } = await http.put(`/api/career/jobs/${jobId}`, job);
  return normalizeJob(data);
}

export async function getOpenJobs(): Promise<JobOpening[]> {
  try {
    const { data } = await http.get("/api/career/jobs", {
      params: { status: "Open" },
    });
    return Array.isArray(data) ? data.map(normalizeJob) : fallbackJobs.filter((job) => job.status === "Open");
  } catch {
    return fallbackJobs.filter((job) => job.status === "Open");
  }
}

export async function getApplications(): Promise<JobApplication[]> {
  const { data } = await http.get("/api/career/applications");
  return Array.isArray(data) ? data.map(normalizeApplication) : [];
}

export async function createApplication(
  application: Omit<JobApplication, "id" | "status" | "createdAt">
): Promise<JobApplication> {
  const { data } = await http.post("/api/career/applications", application);
  return normalizeApplication(data);
}
