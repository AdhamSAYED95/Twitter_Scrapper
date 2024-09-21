# Tweet Scraper and Analyzer

This script periodically scrapes and analyzes a specific tweet on X (formerly Twitter) using Puppeteer, Cron, and Chalk. It fetches the content of the tweet, searches for stock ticker symbols (in the format `$ABC`), and counts their occurrences. The results are then logged to the console in a stylized format using Chalk.

## Features

- **Scheduled Execution**: Uses `node-cron` to run the script every 2 minutes.
- **Web Scraping**: Utilizes Puppeteer to navigate to the tweet and extract the tweet text.
- **Pattern Matching**: Finds and counts stock ticker symbols (e.g., `$TSLA`, `$AAPL`).
- **Console Logging**: Outputs the results in a color-coded format using Chalk.

## Technologies Used

- **Puppeteer**: Headless browser for web scraping.
- **node-cron**: Task scheduling to automate periodic scraping.
- **Chalk**: Terminal string styling to format console output.

## How it works

1. Every 2 minutes, the script navigates to a specific tweet URL.
2. It extracts the text content of the tweet.
3. The script identifies stock symbols that follow the `$` pattern (e.g., `$ABC`).
4. The number of occurrences is printed to the console along with the matched stock symbols.

## Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
