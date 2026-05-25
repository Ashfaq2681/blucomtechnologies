const crypto = require("crypto");
const express = require("express");
const validator = require("validator");
const { query } = require("../config/db");
const ensureLeadTables = require("../utils/ensureLeadTables");

const router = express.Router();

const createId = (prefix) => `${prefix}-${crypto.randomUUID()}`;

const asString = (value) => String(value || "").trim();

const normalizeEmail = (value) => validator.normalizeEmail(asString(value)) || asString(value).toLowerCase();

const parseBudget = (value) => {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const toIso = (value) => (value ? new Date(value).toISOString() : null);

const toLeadRequestResponse = (row) => ({
  id: row.id,
  project_name: row.project_name,
  company_name: row.company_name,
  position: row.position,
  category: row.category,
  services: row.services,
  goals: row.goals,
  budget: row.budget,
  phone: row.phone,
  email: row.email,
  message: row.message,
  created_at: toIso(row.created_at),
  updated_at: toIso(row.updated_at),
});

const toContactLeadResponse = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  phone: row.phone,
  company: row.company,
  title: row.title,
  message: row.message,
  source: row.source,
  created_at: toIso(row.created_at),
  updated_at: toIso(row.updated_at),
});

const toNewsletterSubscriberResponse = (row) => ({
  id: row.id,
  email: row.email,
  status: row.status,
  source: row.source,
  subscribed_at: toIso(row.subscribed_at),
  unsubscribed_at: toIso(row.unsubscribed_at),
  last_notification_at: toIso(row.last_notification_at),
  created_at: toIso(row.created_at),
  updated_at: toIso(row.updated_at),
});

router.get("/leads/project-requests", async (_req, res) => {
  try {
    await ensureLeadTables();

    const rows = await query(
      `SELECT id, project_name, company_name, position, category, services, goals,
              budget, phone, email, message, created_at, updated_at
       FROM lead_requests
       ORDER BY created_at DESC`,
    );

    return res.status(200).json(rows.map(toLeadRequestResponse));
  } catch (error) {
    console.error("[leads][project-requests][list]", error);
    return res.status(500).json({ message: "Failed to fetch project leads." });
  }
});

router.post("/leads/project-requests", async (req, res) => {
  try {
    await ensureLeadTables();

    const projectName = asString(req.body.projectName || req.body.project_name);
    const companyName = asString(req.body.companyName || req.body.company_name);
    const position = asString(req.body.position);
    const category = asString(req.body.category);
    const services = Array.isArray(req.body.services) ? req.body.services : [];
    const goals = req.body.goals && typeof req.body.goals === "object" ? req.body.goals : {};
    const budget = parseBudget(req.body.budget);
    const phone = asString(req.body.contactNumber || req.body.phone);
    const email = normalizeEmail(req.body.email);
    const message = asString(req.body.message);

    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "A valid email address is required." });
    }

    const id = createId("lead");
    await query(
      `INSERT INTO lead_requests
        (id, project_name, company_name, position, category, services, goals, budget, phone, email, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        projectName || null,
        companyName || null,
        position || null,
        category || null,
        JSON.stringify(services),
        JSON.stringify(goals),
        budget,
        phone || null,
        email,
        message || null,
      ],
    );

    const rows = await query(
      `SELECT id, project_name, company_name, position, category, services, goals,
              budget, phone, email, message, created_at, updated_at
       FROM lead_requests
       WHERE id = ?`,
      [id],
    );

    return res.status(201).json(toLeadRequestResponse(rows[0]));
  } catch (error) {
    console.error("[leads][project-requests][create]", error);
    return res.status(500).json({ message: "Failed to save project lead." });
  }
});

router.get("/leads/contact-leads", async (_req, res) => {
  try {
    await ensureLeadTables();

    const rows = await query(
      `SELECT id, name, email, phone, company, title, message, source, created_at, updated_at
       FROM contact_leads
       ORDER BY created_at DESC`,
    );

    return res.status(200).json(rows.map(toContactLeadResponse));
  } catch (error) {
    console.error("[leads][contact-leads][list]", error);
    return res.status(500).json({ message: "Failed to fetch contact leads." });
  }
});

router.post("/leads/contact-leads", async (req, res) => {
  try {
    await ensureLeadTables();

    const name = asString(req.body.name);
    const email = normalizeEmail(req.body.email);
    const phone = asString(req.body.phone);
    const company = asString(req.body.company);
    const title = asString(req.body.title);
    const message = asString(req.body.message);
    const source = asString(req.body.source) || "contact_form";

    if (!name || !email || !validator.isEmail(email) || !message) {
      return res.status(400).json({
        message: "Name, a valid email address, and message are required.",
      });
    }

    const id = createId("contact");
    await query(
      `INSERT INTO contact_leads
        (id, name, email, phone, company, title, message, source)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, name, email, phone || null, company || null, title || null, message, source],
    );

    const rows = await query(
      `SELECT id, name, email, phone, company, title, message, source, created_at, updated_at
       FROM contact_leads
       WHERE id = ?`,
      [id],
    );

    return res.status(201).json(toContactLeadResponse(rows[0]));
  } catch (error) {
    console.error("[leads][contact-leads][create]", error);
    return res.status(500).json({ message: "Failed to save contact lead." });
  }
});

router.get("/leads/newsletter-subscribers", async (_req, res) => {
  try {
    await ensureLeadTables();

    const rows = await query(
      `SELECT id, email, status, source, subscribed_at, unsubscribed_at,
              last_notification_at, created_at, updated_at
       FROM newsletter_subscribers
       ORDER BY subscribed_at DESC`,
    );

    return res.status(200).json(rows.map(toNewsletterSubscriberResponse));
  } catch (error) {
    console.error("[leads][newsletter][list]", error);
    return res.status(500).json({ message: "Failed to fetch newsletter subscribers." });
  }
});

router.post("/leads/newsletter-subscribers", async (req, res) => {
  try {
    await ensureLeadTables();

    const email = normalizeEmail(req.body.email);
    const source = asString(req.body.source) || "newsletter_form";

    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "A valid email address is required." });
    }

    const id = createId("subscriber");
    await query(
      `INSERT INTO newsletter_subscribers (id, email, status, source, subscribed_at, unsubscribed_at)
       VALUES (?, ?, 'subscribed', ?, CURRENT_TIMESTAMP, NULL)
       ON DUPLICATE KEY UPDATE
         status = 'subscribed',
         source = VALUES(source),
         subscribed_at = CURRENT_TIMESTAMP,
         unsubscribed_at = NULL`,
      [id, email, source],
    );

    const rows = await query(
      `SELECT id, email, status, source, subscribed_at, unsubscribed_at,
              last_notification_at, created_at, updated_at
       FROM newsletter_subscribers
       WHERE email = ?`,
      [email],
    );

    return res.status(201).json(toNewsletterSubscriberResponse(rows[0]));
  } catch (error) {
    console.error("[leads][newsletter][subscribe]", error);
    return res.status(500).json({ message: "Failed to save newsletter subscriber." });
  }
});

module.exports = router;
