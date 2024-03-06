const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const fs = require('fs');

const tiktokAccounts = [
  "jkt48.erine_",
  "jkt48.indira.s",
  "marsha.jkt48",
];
const Tiktok = {
  getData: async (username) => {
    // Mulai browser Chromium
    const browser = await puppeteer.launch({
      headless: true,
    });

    // Buka halaman TikTok yang ingin di-scrap
    const page = await browser.newPage();
    await page.goto(`https://www.tiktok.com/@${username}`);

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

    // Tutup browser setelah selesai
    await browser.close();

    // Simpan data ke file JSON
    fs.writeFile(`../db/tiktok/${username}_data.json`, JSON.stringify(data), (err) => {
      if (err) {
        console.error(`Error writing to JSON file for ${username}:`, err);
        return;
      }
      console.log(`Data saved to ${username}_data.json`);
    });
  },
};

// Panggil fungsi getData untuk setiap akun TikTok pada interval yang ditentukan
tiktokAccounts.forEach(username => {
  Tiktok.getData(username);
  // Setiap 5 jam, data akan diperbarui
  setInterval(() => {
    Tiktok.getData(username);
  }, 5 * 60 * 60 * 1000);
});

module.exports = Tiktok;
