const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const {
  ensureAdminUsersTable,
  ensureAdminUser,
} = require("../utils/ensureAdminUser");
const { query } = require("../config/db");

const router = express.Router();

const JWT_SECRET =
  process.env.JWT_SECRET || "blucom-dashboard-local-admin-secret";
const TOKEN_EXPIRES_IN = "8h";

const toAdminResponse = (row) => ({
  id: row.id,
  email: row.email,
  role: row.role,
  isFullAdmin: Boolean(row.is_full_admin),
});

const signAdminToken = (admin) =>
  jwt.sign(
    {
      sub: String(admin.id),
      email: admin.email,
      role: admin.role,
      isFullAdmin: Boolean(admin.is_full_admin),
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES_IN },
  );

const getBearerToken = (req) => {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");
  return scheme === "Bearer" && token ? token : "";
};

router.post("/auth/login", async (req, res) => {
  try {
    await ensureAdminUser();

    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const rows = await query(
      `SELECT id, email, password_hash, role, is_full_admin, is_active
       FROM admin_users
       WHERE email = ?
       LIMIT 1`,
      [email],
    );

    const admin = rows[0];
    const isValid =
      admin && admin.is_active && (await bcrypt.compare(password, admin.password_hash));

    if (!isValid || !admin.is_full_admin) {
      return res.status(401).json({ message: "Invalid admin credentials." });
    }

    await query("UPDATE admin_users SET last_login_at = NOW() WHERE id = ?", [
      admin.id,
    ]);

    return res.status(200).json({
      token: signAdminToken(admin),
      user: toAdminResponse(admin),
    });
  } catch (error) {
    console.error("[auth][login]", error);
    return res.status(500).json({ message: "Unable to sign in right now." });
  }
});

router.get("/auth/me", async (req, res) => {
  try {
    await ensureAdminUsersTable();

    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ message: "Missing admin token." });
    }

    const payload = jwt.verify(token, JWT_SECRET);
    const rows = await query(
      `SELECT id, email, role, is_full_admin, is_active
       FROM admin_users
       WHERE id = ? AND email = ?
       LIMIT 1`,
      [payload.sub, payload.email],
    );

    const admin = rows[0];
    if (!admin || !admin.is_active || !admin.is_full_admin) {
      return res.status(401).json({ message: "Invalid admin token." });
    }

    return res.status(200).json({ user: toAdminResponse(admin) });
  } catch (error) {
    return res.status(401).json({ message: "Invalid admin token." });
  }
});

module.exports = router;
