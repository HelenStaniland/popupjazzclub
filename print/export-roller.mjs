import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb } from "pdf-lib";
import puppeteer from "puppeteer-core";

// Solopress 850 × 2000mm roller: flat artwork is 850 × 2100mm,
// plus 3mm bleed on every edge. Rasterised at 300dpi, which is
// what their preflight asks for.
const DPI = 300;
const WIDTH_MM = 856;
const HEIGHT_MM = 2106;
const WIDTH_PX = Math.round((WIDTH_MM / 25.4) * DPI);
const HEIGHT_PX = Math.round((HEIGHT_MM / 25.4) * DPI);
const WIDTH_PT = (WIDTH_MM / 25.4) * 72;
const HEIGHT_PT = (HEIGHT_MM / 25.4) * 72;
const SLICE_PX = 7000;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPdf = join(
  root,
  "print",
  "Pop-Up-Jazz-Club-roller-850x2000-Solopress-300dpi.pdf",
);
const chrome =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

await mkdir(dirname(outPdf), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--hide-scrollbars"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width: WIDTH_PX,
    height: Math.min(SLICE_PX, HEIGHT_PX),
    deviceScaleFactor: 1,
  });
  await page.goto("http://127.0.0.1:4173/roller-banner.html", {
    waitUntil: "networkidle0",
    timeout: 60000,
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
      const viewport = document.querySelector(".viewport");
      Object.assign(viewport.style, {
        width: `${width}px`,
        height: `${height}px`,
        overflow: "visible",
        aspectRatio: "auto",
        boxShadow: "none",
      });
      const sheet = document.querySelector(".sheet");
      Object.assign(sheet.style, {
        width: `${width}px`,
        height: `${height}px`,
        margin: "0",
      });
    },
    { width: WIDTH_PX, height: HEIGHT_PX },
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  const clearance = await page.evaluate(() => {
    const sheet = document.querySelector(".sheet").getBoundingClientRect();
    const mm = sheet.height / 2106;
    const footer = document.querySelector(".footer-row").getBoundingClientRect();
    const frame = document.querySelector(".frame").getBoundingClientRect();
    const hiddenTop = sheet.bottom - 103 * mm;
    return {
      footerAboveHiddenMm: Math.round((hiddenTop - footer.bottom) / mm),
      frameAboveHiddenMm: Math.round((hiddenTop - frame.bottom) / mm),
    };
  });
  console.log("Clearance above the base (mm):", clearance);
  if (clearance.footerAboveHiddenMm < 20) {
    throw new Error("Footer is too close to the hidden base area to print.");
  }

  const pdf = await PDFDocument.create();
  const pageOut = pdf.addPage([WIDTH_PT, HEIGHT_PT]);
  pageOut.drawRectangle({
    x: 0,
    y: 0,
    width: WIDTH_PT,
    height: HEIGHT_PT,
    color: rgb(0x28 / 255, 0x24 / 255, 0x3a / 255),
  });
  const pxToPt = HEIGHT_PT / HEIGHT_PX;
  let viewportHeight = Math.min(SLICE_PX, HEIGHT_PX);

  // Capture only pixels Chrome has actually painted. Shooting past the
  // viewport leaves an unpainted black strip on each join.
  async function captureSlice(y, height) {
    if (height !== viewportHeight) {
      viewportHeight = height;
      await page.setViewport({
        width: WIDTH_PX,
        height,
        deviceScaleFactor: 1,
      });
    }
    const scrolled = await page.evaluate((top) => {
      window.scrollTo(0, top);
      return window.scrollY;
    }, y);
    if (Math.abs(scrolled - y) > 1) {
      throw new Error(`Scroll failed: wanted ${y}, got ${scrolled}`);
    }
    return page.screenshot({
      type: "png",
      clip: { x: 0, y: scrolled, width: WIDTH_PX, height },
      captureBeyondViewport: false,
    });
  }

  for (let y = 0; y < HEIGHT_PX; y += SLICE_PX) {
    const height = Math.min(SLICE_PX, HEIGHT_PX - y);
    const png = await captureSlice(y, height);
    const image = await pdf.embedPng(png);
    const hPt = height * pxToPt;
    const yPt = HEIGHT_PT - y * pxToPt - hPt;
    pageOut.drawImage(image, {
      x: 0,
      y: yPt,
      width: WIDTH_PT,
      height: hPt,
    });
    console.log(`Captured ${y}–${y + height}px`);
  }

  await writeFile(outPdf, await pdf.save());
  console.log(`Wrote ${outPdf} (${WIDTH_PX}x${HEIGHT_PX}px at ${DPI}dpi)`);
} finally {
  await browser.close();
}
