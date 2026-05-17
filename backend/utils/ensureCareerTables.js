const { query } = require("../config/db");

let initialized = false;

const seedJobs = [
  {
    id: "seed-senior-brand-strategist",
    title: "Senior Brand Strategist",
    location: "Islamabad",
    employmentType: "Full-time",
    summary:
      "Lead integrated brand planning, campaign framing, and strategic alignment across client workstreams.",
    status: "Open",
    createdAt: "2026-04-17 00:00:00",
  },
  {
    id: "seed-performance-marketing-manager",
    title: "Performance Marketing Manager",
    location: "Remote",
    employmentType: "Full-time",
    summary:
      "Own paid media planning, optimization, reporting, and channel growth with a performance-first lens.",
    status: "Open",
    createdAt: "2026-04-17 00:00:00",
  },
  {
    id: "seed-content-designer",
    title: "Content Designer",
    location: "Lahore",
    employmentType: "Contract",
    summary:
      "Shape editorial concepts and visual storytelling systems for campaigns, launches, and content programs.",
    status: "Draft",
    createdAt: "2026-04-17 00:00:00",
  },
];

const ensureCareerTables = async () => {
  if (initialized) {
    return;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS career_jobs (
      id VARCHAR(80) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      employment_type VARCHAR(80) NOT NULL,
      summary TEXT NOT NULL,
      status ENUM('Open', 'Draft') NOT NULL DEFAULT 'Draft',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS career_applications (
      id VARCHAR(80) PRIMARY KEY,
      job_id VARCHAR(80) NOT NULL,
      job_title VARCHAR(255) NOT NULL,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(80) NOT NULL,
      linked_in VARCHAR(500) DEFAULT NULL,
      portfolio VARCHAR(500) DEFAULT NULL,
      cover_note TEXT DEFAULT NULL,
      status ENUM('New') NOT NULL DEFAULT 'New',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (job_id) REFERENCES career_jobs(id) ON DELETE CASCADE
    )
  `);

  const existingJobs = await query("SELECT id FROM career_jobs LIMIT 1");
  if (existingJobs.length === 0) {
    for (const job of seedJobs) {
      await query(
        `INSERT INTO career_jobs
          (id, title, location, employment_type, summary, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          job.id,
          job.title,
          job.location,
          job.employmentType,
          job.summary,
          job.status,
          job.createdAt,
        ],
      );
    }
  }

  initialized = true;
};

module.exports = ensureCareerTables;
