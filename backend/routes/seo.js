import express from "express";
import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";

const router = express.Router();

const routes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/blog"
];

router.get("/sitemap.xml", async (req, res) => {

  const sitemap = new SitemapStream({
    hostname: "https://blucomtechnologies.com"
  });

  routes.forEach(route => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8
    });
  });
const response = await axios.get("https://api.blucomtechnologies.com/blogs");

const blogs = response.data;
  sitemap.end();

  const xml = await streamToPromise(sitemap);

  res.header("Content-Type", "application/xml");
  res.send(xml.toString());
});

export default router;