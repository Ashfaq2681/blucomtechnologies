const express = require("express");
const {
  getPageSeoEntries,
  upsertPageSeoEntry,
} = require("../controllers/pageSeoController");

const router = express.Router();

router.get("/page-seo", getPageSeoEntries);
router.post("/page-seo", upsertPageSeoEntry);
router.put("/page-seo", upsertPageSeoEntry);

module.exports = router;
