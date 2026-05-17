const crypto = require("crypto");
const express = require("express");
const { query } = require("../config/db");
const ensureCareerTables = require("../utils/ensureCareerTables");

const router = express.Router();

const toJobResponse = (row) => ({
  id: row.id,
  title: row.title,
  location: row.location,
  employmentType: row.employment_type,
  summary: row.summary,
  status: row.status,
  createdAt: new Date(row.created_at).toISOString(),
});

const toApplicationResponse = (row) => ({
  id: row.id,
  jobId: row.job_id,
  jobTitle: row.job_title,
  fullName: row.full_name,
  email: row.email,
  phone: row.phone,
  linkedIn: row.linked_in || "",
  portfolio: row.portfolio || "",
  coverNote: row.cover_note || "",
  status: row.status,
  createdAt: new Date(row.created_at).toISOString(),
});

const createId = (prefix) => `${prefix}-${crypto.randomUUID()}`;

router.get("/career/jobs", async (req, res) => {
  try {
    await ensureCareerTables();

    const params = [];
    let whereClause = "";

    if (req.query.status) {
      whereClause = "WHERE status = ?";
      params.push(req.query.status);
    }

    const rows = await query(
      `SELECT id, title, location, employment_type, summary, status, created_at
       FROM career_jobs
       ${whereClause}
       ORDER BY created_at DESC`,
      params,
    );

    return res.status(200).json(rows.map(toJobResponse));
  } catch (error) {
    console.error("[career][jobs][list]", error);
    return res.status(500).json({ message: "Failed to fetch career jobs." });
  }
});

router.get("/career/jobs/:id", async (req, res) => {
  try {
    await ensureCareerTables();

    const rows = await query(
      `SELECT id, title, location, employment_type, summary, status, created_at
       FROM career_jobs
       WHERE id = ?
       LIMIT 1`,
      [req.params.id],
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Career job not found." });
    }

    return res.status(200).json(toJobResponse(rows[0]));
  } catch (error) {
    console.error("[career][jobs][detail]", error);
    return res.status(500).json({ message: "Failed to fetch career job." });
  }
});

router.post("/career/jobs", async (req, res) => {
  try {
    await ensureCareerTables();

    const title = String(req.body.title || "").trim();
    const location = String(req.body.location || "").trim();
    const employmentType = String(req.body.employmentType || "").trim();
    const summary = String(req.body.summary || "").trim();
    const status = req.body.status === "Open" ? "Open" : "Draft";

    if (!title || !location || !employmentType || !summary) {
      return res.status(400).json({
        message: "Title, location, employment type, and summary are required.",
      });
    }

    const id = createId("job");
    await query(
      `INSERT INTO career_jobs
        (id, title, location, employment_type, summary, status)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, title, location, employmentType, summary, status],
    );

    const rows = await query(
      `SELECT id, title, location, employment_type, summary, status, created_at
       FROM career_jobs
       WHERE id = ?`,
      [id],
    );

    return res.status(201).json(toJobResponse(rows[0]));
  } catch (error) {
    console.error("[career][jobs][create]", error);
    return res.status(500).json({ message: "Failed to create career job." });
  }
});

router.put("/career/jobs/:id", async (req, res) => {
  try {
    await ensureCareerTables();

    const title = String(req.body.title || "").trim();
    const location = String(req.body.location || "").trim();
    const employmentType = String(req.body.employmentType || "").trim();
    const summary = String(req.body.summary || "").trim();
    const status = req.body.status === "Open" ? "Open" : "Draft";

    if (!title || !location || !employmentType || !summary) {
      return res.status(400).json({
        message: "Title, location, employment type, and summary are required.",
      });
    }

    const existingRows = await query(
      "SELECT id FROM career_jobs WHERE id = ? LIMIT 1",
      [req.params.id],
    );

    if (existingRows.length === 0) {
      return res.status(404).json({ message: "Career job not found." });
    }

    await query(
      `UPDATE career_jobs
       SET title = ?, location = ?, employment_type = ?, summary = ?, status = ?
       WHERE id = ?`,
      [title, location, employmentType, summary, status, req.params.id],
    );

    await query(
      "UPDATE career_applications SET job_title = ? WHERE job_id = ?",
      [title, req.params.id],
    );

    const rows = await query(
      `SELECT id, title, location, employment_type, summary, status, created_at
       FROM career_jobs
       WHERE id = ?`,
      [req.params.id],
    );

    return res.status(200).json(toJobResponse(rows[0]));
  } catch (error) {
    console.error("[career][jobs][update]", error);
    return res.status(500).json({ message: "Failed to update career job." });
  }
});

router.get("/career/applications", async (_req, res) => {
  try {
    await ensureCareerTables();

    const rows = await query(
      `SELECT id, job_id, job_title, full_name, email, phone, linked_in, portfolio,
              cover_note, status, created_at
       FROM career_applications
       ORDER BY created_at DESC`,
    );

    return res.status(200).json(rows.map(toApplicationResponse));
  } catch (error) {
    console.error("[career][applications][list]", error);
    return res.status(500).json({ message: "Failed to fetch applicants." });
  }
});

router.post("/career/applications", async (req, res) => {
  try {
    await ensureCareerTables();

    const jobId = String(req.body.jobId || "").trim();
    const fullName = String(req.body.fullName || "").trim();
    const email = String(req.body.email || "").trim();
    const phone = String(req.body.phone || "").trim();
    const linkedIn = String(req.body.linkedIn || "").trim();
    const portfolio = String(req.body.portfolio || "").trim();
    const coverNote = String(req.body.coverNote || "").trim();

    if (!jobId || !fullName || !email || !phone) {
      return res.status(400).json({
        message: "Job, full name, email, and phone are required.",
      });
    }

    const jobRows = await query(
      "SELECT id, title, status FROM career_jobs WHERE id = ? LIMIT 1",
      [jobId],
    );

    if (jobRows.length === 0 || jobRows[0].status !== "Open") {
      return res.status(404).json({ message: "Open job not found." });
    }

    const id = createId("app");
    await query(
      `INSERT INTO career_applications
        (id, job_id, job_title, full_name, email, phone, linked_in, portfolio, cover_note)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        jobRows[0].id,
        jobRows[0].title,
        fullName,
        email,
        phone,
        linkedIn || null,
        portfolio || null,
        coverNote || null,
      ],
    );

    const rows = await query(
      `SELECT id, job_id, job_title, full_name, email, phone, linked_in, portfolio,
              cover_note, status, created_at
       FROM career_applications
       WHERE id = ?`,
      [id],
    );

    return res.status(201).json(toApplicationResponse(rows[0]));
  } catch (error) {
    console.error("[career][applications][create]", error);
    return res.status(500).json({ message: "Failed to submit application." });
  }
});

module.exports = router;
