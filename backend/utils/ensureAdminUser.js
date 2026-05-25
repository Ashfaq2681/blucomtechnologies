const bcrypt = require("bcrypt");
const { query } = require("../config/db");

const ADMIN_EMAIL = "blucommw@gmail.com";
const ADMIN_PASSWORD_HASH =
  "$2b$12$PIXT0IRIEkGnmFBtYHbL3OG7g1pW92zMitKK6BTuPBYoJ6S0aKCQW";

const ensureAdminUsersTable = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL DEFAULT 'admin',
      is_full_admin TINYINT(1) NOT NULL DEFAULT 1,
      is_active TINYINT(1) NOT NULL DEFAULT 1,
      last_login_at DATETIME NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
};

const ensureAdminUser = async () => {
  await ensureAdminUsersTable();

  const existingRows = await query(
    "SELECT id, password_hash FROM admin_users WHERE email = ? LIMIT 1",
    [ADMIN_EMAIL],
  );

  if (existingRows.length === 0) {
    await query(
      `INSERT INTO admin_users
        (email, password_hash, role, is_full_admin, is_active)
       VALUES (?, ?, 'admin', 1, 1)`,
      [ADMIN_EMAIL, ADMIN_PASSWORD_HASH],
    );
    return;
  }

  const hasExpectedPassword = await bcrypt.compare(
    "Admin@bctweb123",
    existingRows[0].password_hash,
  );

  if (!hasExpectedPassword) {
    await query(
      `UPDATE admin_users
       SET password_hash = ?, role = 'admin', is_full_admin = 1, is_active = 1
       WHERE email = ?`,
      [ADMIN_PASSWORD_HASH, ADMIN_EMAIL],
    );
  } else {
    await query(
      `UPDATE admin_users
       SET role = 'admin', is_full_admin = 1, is_active = 1
       WHERE email = ?`,
      [ADMIN_EMAIL],
    );
  }
};

module.exports = {
  ADMIN_EMAIL,
  ensureAdminUsersTable,
  ensureAdminUser,
};
