const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
const cron = require('node-cron');

puppeteerExtra.use(Stealth());

const igAccounts = [
  "jkt48.indira.s",
];

const Ig = {
    getData: async (username) => {
        // Mulai browser Chromium
        const browser = await puppeteerExtra.launch({
            headless: "new", // Ubah menjadi true untuk menjalankan headless
        });
        
        const page = await browser.newPage();
        await page.goto(`https://www.instagram.com/${username}`);

        // Wait for the required DOM elements to be rendered
        await page.waitForSelector('.x1qjc9v5');

        const data = await page.evaluate(() => {
            const scrappeData = {};
            scrappeData.profilePic = document.querySelector('div.x78zum5 img').src;
            scrappeData.username = document.querySelector('h1.rhpdm').textContent;
            return scrappeData;
        });


        await browser.close();

    fs.writeFile(`./db/ig/${username}_data.json`, JSON.stringify(data), (err) => {
        if (err) {
          console.error(`Error writing to JSON file for ${username}:`, err);
          return;
        }
        console.log(`Data saved to ${username}_data.json`);
      });
  },
};

// Panggil fungsi getData untuk setiap akun ig dengan batasan jumlah akun yang diproses bersamaan
const MAX_CONCURRENT_REQUESTS = 5;
let currentIndex = 0;

const processAccounts = async () => {
  const currentBatch = igAccounts.slice(currentIndex, currentIndex + MAX_CONCURRENT_REQUESTS);
  currentIndex += MAX_CONCURRENT_REQUESTS;
  await Promise.all(currentBatch.map(username => Ig.getData(username)));
  if (currentIndex < igAccounts.length) {
    setTimeout(processAccounts, 10000); // tunggu 10 detik sebelum memproses batch berikutnya
  }
};

processAccounts();

// Setiap 1 jam, data akan diperbarui
setInterval(() => {
  currentIndex = 0; // Mulai ulang pengolahan akun
  processAccounts();
}, 60 * 1000);

module.exports = Ig;
