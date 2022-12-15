const test = require("node:test");
const assert = require("node:assert");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

// test("Check the page title of google.com", async (t) => {
//     const browser = await puppeteer.launch({
//         args: chromium.args,
//         defaultViewport: chromium.defaultViewport,
//         executablePath: await chromium.executablePath,
//         headless: chromium.headless,
//         ignoreHTTPSErrors: true
//     });

//     const page = await browser.newPage();
//     await page.goto("https://www.google.com");
//     const pageTitle = await page.title();
//     await browser.close();

//     assert.strictEqual(pageTitle, "Google");
// });

(async (t) => {
    const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true
    });

    // const page = await browser.newPage();
    // await page.goto("https://www.google.com");
    // const pageTitle = await page.title();
    // await browser.close();

    // assert.strictEqual(pageTitle, "Google");
})();
