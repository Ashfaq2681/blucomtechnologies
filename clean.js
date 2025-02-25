const fs = require("fs");
const path = require("path");

const filesToDelete = [
  "src/App.test.js",
  "src/logo.svg",
  "src/reportWebVitals.js",
  "src/setupTests.js",
  "public/favicon.ico",
  "README.md",
  "package-lock.json",
  "yarn.lock",
];

const foldersToDelete = ["node_modules", ".git"];

filesToDelete.forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`🗑️ Deleted: ${file}`);
  }
});

foldersToDelete.forEach((folder) => {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true });
    console.log(`🗑️ Deleted: ${folder}`);
  }
});

console.log("✅ Cleanup complete! Run `npm install` to reinstall dependencies.");
