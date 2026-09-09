import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer-core";

const DPI = 300;
const WIDTH_MM = 303;
const HEIGHT_MM = 426;
const WIDTH_PX = Math.round((WIDTH_MM / 25.4) * DPI);
const HEIGHT_PX = Math.round((HEIGHT_MM / 25.4) * DPI);
const WIDTH_PT = (WIDTH_MM / 25.4) * 72;
const HEIGHT_PT = (HEIGHT_MM / 25.4) * 72;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPdf = join(root, "print", "Pop-Up-Jazz-Club-A3-Solopress-300dpi.pdf");
const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

await mkdir(dirname(outPdf), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width: WIDTH_PX,
    height: HEIGHT_PX,
    deviceScaleFactor: 1,
  });
  await page.goto("http://127.0.0.1:3000/poster.html", {
    waitUntil: "networkidle0",
  });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(
    ({ width, height }) => {
      Object.assign(document.documentElement.style, {
        width: `${width}px`,
        height: `${height}px`,
      });
      Object.assign(document.body.style, {
        padding: "0",
        margin: "0",
        display: "block",
        width: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,
        background: "#28243a",
      });
      const poster = document.querySelector(".poster");
      poster.style.width = `${width}px`;
      poster.style.height = `${height}px`;
      poster.style.maxWidth = "none";
      poster.style.aspectRatio = "auto";
      poster.style.boxShadow = "none";
    },
    { width: WIDTH_PX, height: HEIGHT_PX },
  );
  await new Promise((resolve) => setTimeout(resolve, 400));

  const png = await page.screenshot({
    type: "png",
    clip: { x: 0, y: 0, width: WIDTH_PX, height: HEIGHT_PX },
    captureBeyondViewport: false,
  });

  const pdf = await PDFDocument.create();
  const pageOut = pdf.addPage([WIDTH_PT, HEIGHT_PT]);
  const image = await pdf.embedPng(png);
  pageOut.drawImage(image, {
    x: 0,
    y: 0,
    width: WIDTH_PT,
    height: HEIGHT_PT,
  });

  await writeFile(outPdf, await pdf.save());
  console.log(`Wrote ${outPdf} (${WIDTH_PX}x${HEIGHT_PX}px at ${DPI}dpi)`);
} finally {
  await browser.close();
}
