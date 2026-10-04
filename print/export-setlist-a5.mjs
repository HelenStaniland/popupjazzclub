import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import puppeteer from "puppeteer-core";

// Solopress A5 leaflet: finished size 148 × 210mm, plus 3mm bleed
// on every edge, so the flat file is 154 × 216mm. Rasterised at
// 300dpi, which is what their preflight asks for.
const DPI = 300;
const WIDTH_MM = 154;
const HEIGHT_MM = 216;
const WIDTH_PX = Math.round((WIDTH_MM / 25.4) * DPI);
const HEIGHT_PX = Math.round((HEIGHT_MM / 25.4) * DPI);
const WIDTH_PT = (WIDTH_MM / 25.4) * 72;
const HEIGHT_PT = (HEIGHT_MM / 25.4) * 72;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const sides = [
  ["front", "Pop-Up-Jazz-Club-setlist-A5-front-Solopress-300dpi.pdf"],
  ["back", "Pop-Up-Jazz-Club-setlist-A5-back-Solopress-300dpi.pdf"],
];

await mkdir(join(root, "print"), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--hide-scrollbars"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width: WIDTH_PX,
    height: HEIGHT_PX,
    deviceScaleFactor: 1,
  });
  await page.goto("http://127.0.0.1:4173/setlist.html", {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(
    ({ width, height }) => {
      document.querySelectorAll(".side-label").forEach((el) => {
        el.style.display = "none";
      });
      Object.assign(document.documentElement.style, {
        width: `${width}px`,
        height: "auto",
      });
      Object.assign(document.body.style, {
        padding: "0",
        margin: "0",
        gap: "0",
        display: "block",
        width: `${width}px`,
        height: "auto",
        minHeight: "0",
        background: "#28243a",
      });
      document.querySelectorAll(".side").forEach((el) => {
        Object.assign(el.style, {
          width: `${width}px`,
          margin: "0",
        });
      });
      document.querySelectorAll(".sheet").forEach((el) => {
        Object.assign(el.style, {
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "none",
          aspectRatio: "auto",
          boxShadow: "none",
          margin: "0",
        });
      });
    },
    { width: WIDTH_PX, height: HEIGHT_PX },
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  const sheets = await page.$$(".sheet");
  if (sheets.length !== sides.length) {
    throw new Error(`Expected ${sides.length} sheets, found ${sheets.length}`);
  }

  for (let i = 0; i < sheets.length; i++) {
    const [side, filename] = sides[i];
    const outPdf = join(root, "print", filename);
    const box = await sheets[i].boundingBox();
    if (
      !box ||
      Math.round(box.width) !== WIDTH_PX ||
      Math.round(box.height) !== HEIGHT_PX
    ) {
      throw new Error(
        `${side} sheet is ${box?.width}×${box?.height}, expected ${WIDTH_PX}×${HEIGHT_PX}`,
      );
    }

    const png = await sheets[i].screenshot({ type: "png" });
    const pdf = await PDFDocument.create();
    const pageOut = pdf.addPage([WIDTH_PT, HEIGHT_PT]);
    pageOut.drawRectangle({
      x: 0,
      y: 0,
      width: WIDTH_PT,
      height: HEIGHT_PT,
      color: rgb(0x28 / 255, 0x24 / 255, 0x3a / 255),
    });
    const image = await pdf.embedPng(png);
    pageOut.drawImage(image, {
      x: 0,
      y: 0,
      width: WIDTH_PT,
      height: HEIGHT_PT,
    });
    const bytes = await pdf.save();
    try {
      await writeFile(outPdf, bytes);
      console.log(
        `Wrote ${outPdf} (${image.width}×${image.height}px at ${DPI}dpi, ${WIDTH_MM}×${HEIGHT_MM}mm including 3mm bleed)`,
      );
    } catch (error) {
      if (error?.code !== "EBUSY") throw error;
      const fallback = outPdf.replace(/\.pdf$/, "-updated.pdf");
      await writeFile(fallback, bytes);
      console.log(
        `Original file is open, wrote ${fallback} (${image.width}×${image.height}px at ${DPI}dpi, ${WIDTH_MM}×${HEIGHT_MM}mm including 3mm bleed)`,
      );
    }
  }
} finally {
  await browser.close();
}
