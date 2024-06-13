const axios = require("axios");
const cheerio = require("cheerio");

async function fetchVipPublications() {
  const url = "https://www.olx.kz/";

  try {
    const res = await axios.get(url);
    const html = res.data;
    const $ = cheerio.load(html);

    let publications = [];

    $(".css-2v45ok").each((index, element) => {
      let title = $(element).find(".css-z3gu2d").text();
      let link = "https://www.olx.kz/" + $(element).find("a").attr("href");
      let location = $(element).find(".css-1pzx3wn").text();
      let date = $(element).find(".css-1uf1vew").text();
      publications.push({ title, link, location, date });
    });

    return publications;
  } catch (error) {
    console.error("Error fetching publications: ", error);
  }
}

module.exports = fetchVipPublications;
