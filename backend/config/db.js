const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
require("dotenv").config();

const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
};

const database = process.env.DB_NAME || "blucom_dashboard";

const pool = mysql.createPool({
  ...dbConfig,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 5000,
});

const initializeDatabase = async () => {
  const connection = await mysql.createConnection(dbConfig);

  try {
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${database.replace(/`/g, "``")}\``,
    );
  } finally {
    await connection.end();
  }
};

const query = async (sql, params = []) => {
  await initializeDatabase();
  const [rows] = await pool.execute(sql, params);
  return rows;
};

module.exports = {
  pool,
  query,
  initializeDatabase,
};
