const fs = require("fs");
const path = require("path");
const multer = require("multer");

const uploadDirectory = path.join(__dirname, "../uploads/videos");

fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (_req, file, cb) => {
    const sanitizedName = file.originalname
      .replace(/[^\w.\-]+/g, "-")
      .replace(/-+/g, "-");
    cb(null, `${Date.now()}-${sanitizedName}`);
  },
});

const fileFilter = (_req, file, cb) => {
  const isVideo = file.fieldname === "video" && file.mimetype.startsWith("video/");
  const isThumbnail = file.fieldname === "thumbnail" && file.mimetype.startsWith("image/");

  if (!isVideo && !isThumbnail) {
    cb(new Error("Only video files and image thumbnails are allowed."));
    return;
  }

  cb(null, true);
};

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 250 * 1024 * 1024,
  },
});
