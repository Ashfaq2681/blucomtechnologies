const { query } = require("../config/db");

let initialized = false;

const ensureLeadTables = async () => {
  if (initialized) {
    return;
  }

  await query(`
    CREATE TABLE IF NOT EXISTS lead_requests (
      id VARCHAR(80) PRIMARY KEY,
      project_name VARCHAR(255) DEFAULT NULL,
      company_name VARCHAR(255) DEFAULT NULL,
      position VARCHAR(255) DEFAULT NULL,
      category VARCHAR(120) DEFAULT NULL,
      services JSON DEFAULT NULL,
      goals JSON DEFAULT NULL,
      budget DECIMAL(12, 2) DEFAULT NULL,
      phone VARCHAR(80) DEFAULT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_lead_requests_created_at (created_at),
      INDEX idx_lead_requests_email (email)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS contact_leads (
      id VARCHAR(80) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(80) DEFAULT NULL,
      company VARCHAR(255) DEFAULT NULL,
      title VARCHAR(255) DEFAULT NULL,
      message TEXT NOT NULL,
      source VARCHAR(120) NOT NULL DEFAULT 'contact_form',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_contact_leads_created_at (created_at),
      INDEX idx_contact_leads_email (email)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id VARCHAR(80) PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      status ENUM('subscribed', 'unsubscribed') NOT NULL DEFAULT 'subscribed',
      source VARCHAR(120) NOT NULL DEFAULT 'newsletter_form',
      subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      unsubscribed_at TIMESTAMP NULL DEFAULT NULL,
      last_notification_at TIMESTAMP NULL DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_newsletter_subscribers_status (status),
      INDEX idx_newsletter_subscribers_subscribed_at (subscribed_at)
    )
  `);

  initialized = true;
};

module.exports = ensureLeadTables;
