import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outFile = join(root, "print", "Pop-Up-Jazz-Club-poster-A3.pdf");
const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

await mkdir(dirname(outFile), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
});

try {
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:3000/poster.html", {
    waitUntil: "networkidle0",
  });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: outFile,
    width: "303mm",
    height: "426mm",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  console.log(`Wrote ${outFile}`);
} finally {
  await browser.close();
}
