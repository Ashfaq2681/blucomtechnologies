// test-routes.js
import glob from "glob";

// 1️⃣ Scan all pages in /src/pages
const pages = glob.sync("./src/pages/**/*.jsx");

console.log("=== AutoRoutes Test ===");

pages.forEach((file) => {
  let urlPath = file
    .replace("./src/pages", "")
    .replace(/\/index\.jsx$/, "/")
    .replace(/\.jsx$/, "")
    .toLowerCase();

  if (urlPath === "/home") urlPath = "/";

  console.log("Generated route:", urlPath);
});

console.log("=== End of Test ===");