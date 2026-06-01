const { query } = require("../config/db");

const ensureVideosTable = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS dashboard_videos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT DEFAULT NULL,
      category VARCHAR(120) NOT NULL DEFAULT 'General',
      folder VARCHAR(120) NOT NULL DEFAULT 'All',
      status ENUM('draft', 'review', 'published') NOT NULL DEFAULT 'draft',
      thumbnail VARCHAR(500) DEFAULT NULL,
      video_url VARCHAR(500) DEFAULT NULL,
      duration VARCHAR(40) DEFAULT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_dashboard_videos_status (status),
      INDEX idx_dashboard_videos_category (category),
      INDEX idx_dashboard_videos_folder (folder),
      INDEX idx_dashboard_videos_created_at (created_at)
    )
  `);
};

module.exports = ensureVideosTable;
