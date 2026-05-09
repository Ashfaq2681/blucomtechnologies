const axios = require("axios");
const cheerio = require("cheerio");

const visited = new Set();
const brokenLinks = [];

async function crawl(url, baseDomain) {
  if (visited.has(url)) return;
  visited.add(url);

  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const links = [];

    $("a").each((i, el) => {
      let link = $(el).attr("href");
      if (!link) return;

      if (link.startsWith("/")) {
        link = baseDomain + link;
      }

      if (link.startsWith(baseDomain)) {
        links.push(link);
      }
    });

    for (const link of links) {
      try {
        const response = await axios.get(link);
        if (response.status >= 400) {
          brokenLinks.push(link);
        }
      } catch (err) {
        brokenLinks.push(link);
      }

      await crawl(link, baseDomain);
    }

  } catch (error) {
    console.log("Failed to crawl:", url);
  }
}

(async () => {
  const startUrl = "https://www.blucomtechnologies.com";

  await crawl(startUrl, startUrl);

  console.log("Broken Links Found:");
  console.log(brokenLinks);
})();