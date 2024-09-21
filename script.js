import chalk from "chalk";
import cron from "node-cron";
import puppeteer from "puppeteer";

cron.schedule("*/2 * * * *", async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to a URL.
    await page.goto("https://x.com/Mr_Derivatives/status/1607860918796562432");

    const textSelector = await page
      .locator('article div[data-testid="tweetText"]')
      .waitHandle();
    const fullTweet = await textSelector?.evaluate((el) => el.textContent);

    const matchCount = (fullTweet.match(/\$[a-zA-Z]{3,4}/g) || []).length;
    const wordMatch = fullTweet.match(/\$[a-zA-Z]{3,4}/g) || [];

    console.log(chalk.red(`This Tweet Has ${wordMatch} ${matchCount} times `));
  } catch (error) {
    console.error("Error occurred:", error);
  }
});
