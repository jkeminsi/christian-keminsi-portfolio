import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const targets = [
  {
    id: 'citis-formation',
    url: 'https://citisformation.com/fr',
    output: path.resolve('public/projects/citis-formation.png'),
  },
  {
    id: 'royal-high-school-nyom',
    url: 'https://royalschoolnyom.com',
    output: path.resolve('public/projects/royal-high-school-nyom.png'),
  },
  {
    id: 'gestplus-platform',
    url: 'https://gestplus-sn.com',
    output: path.resolve('public/projects/gestplus-platform.png'),
  },
];

async function capture() {
  const dir = path.resolve('public/projects');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log('Launching browser at:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--ignore-certificate-errors',
    ],
    defaultViewport: {
      width: 1440,
      height: 810,
      deviceScaleFactor: 1,
    },
  });

  for (const target of targets) {
    console.log(`\nNavigating to ${target.id} (${target.url})...`);
    try {
      const page = await browser.newPage();
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      );
      
      await page.goto(target.url, {
        waitUntil: 'networkidle2',
        timeout: 45000,
      });

      await new Promise((r) => setTimeout(r, 2500));

      await page.screenshot({
        path: target.output,
        type: 'png',
      });

      const stats = fs.statSync(target.output);
      console.log(`✓ Saved ${target.id} -> ${target.output} (${Math.round(stats.size / 1024)} KB)`);
      await page.close();
    } catch (err) {
      console.error(`✗ Error capturing ${target.id}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nAll captures finished!');
}

capture();
