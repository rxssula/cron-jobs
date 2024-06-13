const cron = require("node-cron");
const fetchVipPublications = require("./scraper");

cron.schedule("*/5 * * * * *", async () => {
  // Runs every hour
  const data = await fetchVipPublications();
  console.log(data); // Process or store the data
});
