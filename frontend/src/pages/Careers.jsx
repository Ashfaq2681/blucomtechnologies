import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  MapPin,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react";
import {
  createApplication,
  getOpenJobs,
} from "./dashboard/career/jobsStore";

const emptyApplication = {
  jobId: "",
  jobTitle: "",
  fullName: "",
  email: "",
  phone: "",
  linkedIn: "",
  portfolio: "",
  coverNote: "",
};

const cultureStats = [
  { value: "Strategy", label: "Brand, digital, and growth work" },
  { value: "Hybrid", label: "Focused delivery with flexible collaboration" },
  { value: "Impact", label: "Projects built around measurable outcomes" },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Creative ownership",
    text: "Take ideas from insight to launch with room to shape the final work.",
  },
  {
    icon: UsersRound,
    title: "Cross-functional teams",
    text: "Work closely with strategy, design, marketing, and development leads.",
  },
  {
    icon: Globe2,
    title: "Real client impact",
    text: "Build brands, campaigns, and digital products for growing businesses.",
  },
];

const hiringSteps = [
  "Apply with your details and links to relevant work.",
  "Meet the team for a focused role conversation.",
  "Complete a short skills discussion or practical review.",
  "Start with clear goals, ownership, and support.",
];

export default function Careers() {
  const formRef = useRef(null);
  const jobsRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [application, setApplication] = useState(emptyApplication);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    getOpenJobs()
      .then((openJobs) => {
        if (!isMounted) return;
        setJobs(openJobs);
        if (openJobs.length > 0) {
          setApplication((current) => ({
            ...current,
            jobId: current.jobId || openJobs[0].id,
            jobTitle: current.jobTitle || openJobs[0].title,
          }));
        }
      })
      .finally(() => {
        if (isMounted) setLoadingJobs(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const updateApplication = (event) => {
    const { name, value } = event.target;

    if (name === "jobId") {
      const selectedJob = jobs.find((job) => job.id === value);
      setApplication((current) => ({
        ...current,
        jobId: value,
        jobTitle: selectedJob?.title || "",
      }));
      return;
    }

    setApplication((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const chooseJob = (job) => {
    setApplication((current) => ({
      ...current,
      jobId: job.id,
      jobTitle: job.title,
    }));
    setMessage("");
    setError("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!application.jobId) {
      setError("Please choose a job before applying.");
      return;
    }

    setSubmitting(true);
    try {
      await createApplication(application);
      setMessage("Your application has been submitted. Our team will review it shortly.");
      setApplication({
        ...emptyApplication,
        jobId: jobs[0]?.id || "",
        jobTitle: jobs[0]?.title || "",
      });
    } catch (submitError) {
      console.error("[career][apply]", submitError);
      setError("Unable to submit your application right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white text-[#1E2832]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#111827]">
        <img
          src="/career/careers.png"
          alt="Blucom team working together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/78 to-[#00AE80]/45" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] w-[90%] max-w-7xl flex-col justify-end pb-12 pt-32 text-white md:pb-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <BriefcaseBusiness size={16} />
              Careers at Blucom Technologies
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Build sharp digital work with people who care about outcomes.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Join a team where brand strategy, design, marketing, and technology
              move together. We are looking for people who think clearly, execute
              carefully, and keep raising the quality of the work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToJobs}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00AE80] px-6 py-3 font-semibold text-white transition hover:bg-[#00946d]"
              >
                View open roles
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() =>
                  formRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#1E2832]"
              >
                Apply now
                <Send size={18} />
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {cultureStats.map((item) => (
              <div
                key={item.value}
                className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[90%] max-w-7xl gap-10 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
        <div>
          <p className="text-sm font-bold uppercase text-[#00AE80]">
            Why work here
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            Work with enough structure to focus and enough space to own the idea.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5F5F5F]">
            Blucom is built for people who like practical creativity: clear
            strategy, thoughtful execution, and steady improvement after launch.
          </p>
        </div>
        <div className="grid gap-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#00AE80]/10 text-[#00AE80]">
                <Icon size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1E2832]">{title}</h3>
              <p className="mt-3 leading-7 text-[#5F5F5F]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F7F6] py-16 md:py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div className="overflow-hidden rounded-lg bg-[#D7DEDB]">
            <img
              src="/career/rulebreaker.png"
              alt="Creative team culture at Blucom"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-[#00AE80]">
              Dear rule breaker
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              Bring the curiosity. We will bring the briefs worth solving.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5F5F5F]">
              We value people who ask better questions, respect the details, and
              turn ambiguity into clear next steps. If that sounds like your way
              of working, start with one of the roles below.
            </p>
            <button
              type="button"
              onClick={scrollToJobs}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1E2832] px-6 py-3 font-semibold text-white transition hover:bg-[#111827]"
            >
              See roles
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section
        ref={jobsRef}
        className="mx-auto grid w-[90%] max-w-7xl gap-10 py-16 md:py-24 lg:grid-cols-[1fr_430px]"
      >
        <div>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase text-[#00AE80]">
              Open positions
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              Find the role where your work can move fastest.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5F5F5F]">
              Current openings are managed from the Blucom dashboard, so this
              list stays aligned with the roles our team is actively hiring for.
            </p>
          </div>

          <div className="grid gap-5">
            {loadingJobs ? (
              <div className="rounded-lg border border-dashed border-gray-300 p-8 text-[#5F5F5F]">
                Loading open positions...
              </div>
            ) : jobs.length === 0 ? (
              <div className="rounded-lg border border-dashed border-gray-300 p-8">
                <h3 className="text-2xl font-semibold text-[#1E2832]">
                  No roles are open right now.
                </h3>
                <p className="mt-3 leading-7 text-[#5F5F5F]">
                  Check back soon, or share your profile when a role appears
                  that matches your experience.
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <article
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#00AE80]/60 hover:shadow-md"
                  key={job.id}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#1E2832]">
                        {job.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#5F5F5F]">
                        {job.summary}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => chooseJob(job)}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#00AE80] px-5 py-3 font-semibold text-white transition hover:bg-[#00946d]"
                    >
                      Apply
                      <ArrowRight size={17} />
                    </button>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-[#5F5F5F]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4F7F6] px-4 py-2">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F4F7F6] px-4 py-2">
                      <Clock3 size={16} />
                      {job.employmentType}
                    </span>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <form
            ref={formRef}
            onSubmit={submitApplication}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg lg:sticky lg:top-6"
          >
            <p className="text-sm font-bold uppercase text-[#00AE80]">
              Quick application
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#1E2832]">
              Apply for a job
            </h2>
            <p className="mt-3 leading-7 text-[#5F5F5F]">
              Share your details and the role you want. We will follow up if
              your profile fits.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Job
                <select
                  name="jobId"
                  value={application.jobId}
                  onChange={updateApplication}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                >
                  <option value="">Select a job</option>
                  {jobs.map((job) => (
                    <option value={job.id} key={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Full name
                <input
                  name="fullName"
                  value={application.fullName}
                  onChange={updateApplication}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Email
                <input
                  type="email"
                  name="email"
                  value={application.email}
                  onChange={updateApplication}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={application.phone}
                  onChange={updateApplication}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="+92 300 0000000"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                LinkedIn
                <input
                  type="url"
                  name="linkedIn"
                  value={application.linkedIn}
                  onChange={updateApplication}
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="https://linkedin.com/in/username"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Portfolio
                <input
                  type="url"
                  name="portfolio"
                  value={application.portfolio}
                  onChange={updateApplication}
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="https://yourwork.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#1E2832]">
                Short note
                <textarea
                  name="coverNote"
                  value={application.coverNote}
                  onChange={updateApplication}
                  rows="4"
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 outline-none transition focus:border-[#00AE80] focus:ring-2 focus:ring-[#00AE80]/20"
                  placeholder="Tell us briefly why this role fits you."
                />
              </label>
            </div>

            {message ? (
              <p className="mt-4 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                {message}
              </p>
            ) : null}
            {error ? (
              <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting || jobs.length === 0}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#00AE80] px-4 py-3 text-lg font-semibold text-white transition hover:bg-[#00946d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit application"}
              <Send size={18} />
            </button>
          </form>

          <div className="rounded-lg bg-[#1E2832] p-6 text-white">
            <h3 className="text-2xl font-semibold">Hiring process</h3>
            <div className="mt-5 grid gap-4">
              {hiringSteps.map((step) => (
                <div key={step} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#00AE80]" size={20} />
                  <p className="leading-7 text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
