const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const Tiktok = {
  getData: async (req, res) => {
    const { member } = req.params;
    // Mulai browser Chromium
    const browser = await puppeteer.launch();

    // Buka halaman TikTok yang ingin di-scrap
    const page = await browser.newPage();
    await page.goto(`https://www.tiktok.com/${member}`);

    // Tunggu hingga data dimuat
    await page.waitForSelector('.css-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2');

    // Ekstraksi data
    const data = await page.evaluate(() => {
      const scrapedData = {};
      const userInfo = document.querySelector('.css-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2');
      scrapedData.photo = userInfo.querySelector('.e1vl87hj2').querySelector('img').src;
      scrapedData.username = userInfo.querySelector('.css-1xo9k5n-H1ShareTitle').textContent.trim();
      scrapedData.name = userInfo.querySelector('.css-10pb43i-H2ShareSubTitle').textContent.trim();
      scrapedData.description = userInfo.querySelector('.css-4ac4gk-H2ShareDesc').textContent.trim();
      scrapedData.following = userInfo.querySelector('[data-e2e="following-count"]').textContent.trim();
      scrapedData.followers = userInfo.querySelector('[data-e2e="followers-count"]').textContent.trim();
      scrapedData.likes = userInfo.querySelector('[data-e2e="likes-count"]').textContent.trim();
      return scrapedData;
    });
      

    console.log(data);

    return res.status(200).json({ data });
  },
};

module.exports = Tiktok;
