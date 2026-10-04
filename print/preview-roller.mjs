import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 1700, deviceScaleFactor: 2 });
  await page.goto("http://127.0.0.1:4173/roller-banner.html", {
    waitUntil: "networkidle0",
    timeout: 20000,
  });
  await page.evaluate(() => document.fonts.ready);
  const metrics = await page.evaluate(() => {
    const box = (el) => {
      const b = el.getBoundingClientRect();
      return {
        t: Math.round(b.top),
        l: Math.round(b.left),
        w: Math.round(b.width),
        h: Math.round(b.height),
        b: Math.round(b.bottom),
        r: Math.round(b.right),
      };
    };
    const texts = [
      ...document.querySelectorAll(
        ".eyebrow, h1 .line, .tagline, .event-kicker, .event-title, .when-where, .byo, .facts span, .tickets, .url",
      ),
    ].map((el) => {
      const b = el.getBoundingClientRect();
      const parent = el.parentElement.getBoundingClientRect();
      return {
        text: el.textContent.trim().slice(0, 70),
        w: Math.round(b.width),
        h: Math.round(b.height),
        overflow: el.scrollWidth > el.clientWidth + 1,
        pastParent: b.right > parent.right + 1,
      };
    });
    const frame = box(document.querySelector(".frame"));
    const footer = document.querySelector(".footer-row").getBoundingClientRect();
    const h1 = document.querySelector("h1").getBoundingClientRect();
    const inner = document.querySelector(".inner").getBoundingClientRect();
    return {
      viewport: { w: innerWidth, h: innerHeight },
      visible: box(document.querySelector(".viewport")),
      sheet: box(document.querySelector(".sheet")),
      frame,
      h1: { w: Math.round(h1.width), h: Math.round(h1.height) },
      innerW: Math.round(inner.width),
      qr: box(document.querySelector(".qr")),
      footerBottom: Math.round(footer.bottom),
      frameContainsFooter:
        footer.bottom <= frame.b - 4 &&
        footer.right <= frame.r - 4 &&
        footer.left >= frame.l + 4 &&
        footer.top >= frame.t + 4,
      texts,
    };
  });
  console.log(JSON.stringify(metrics, null, 2));
  const clip = await page.evaluate(() => {
    const b = document.querySelector(".viewport").getBoundingClientRect();
    return {
      x: Math.max(0, b.left),
      y: Math.max(0, b.top),
      width: b.width,
      height: b.height,
    };
  });
  await page.screenshot({
    path: "C:\\Users\\helen\\popupjazzclub\\print\\roller-banner-preview.png",
    clip,
  });
  console.log("wrote preview", clip);
} finally {
  await browser.close();
}
