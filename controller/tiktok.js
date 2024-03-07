const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');

const fs = require('fs');
const cron = require('node-cron');

puppeteerExtra.use(Stealth());

const tiktokAccounts = [
  "jkt48.aralie",
  "jkt48.delynn",
  "jkt48.shasa",
  "alyajkt48",
  "jkt48.amanda.s",
  "christyjkt48",
  "anindyajkt48",
  "jkt48.aurellia_",
  "jkt48.lana",
  "zeejkt48",
  "jkt48.callie.a",
  "jkt48.erine_",
  "cathyjkt48",
  "elinjkt48",
  "_chelseajkt48",
  "onieljkt48",
  "cynthiajkt48",
  "danellajkt48",
  "daisyjkt48",
  "ollajkt48",
  "fenijkt48",
  "fionyjkt48",
  "florajkt48",
  "freyajkt48",
  "gendisjkt48",
  "jkt48.fritzy",
  "jkt48.ella.a",
  "gitajkt48",
  "graciejkt48",
  "greeseljkt48",
  "elijkt48",
  "jkt48.lily",
  "indahjkt48",
  "jkt48.indira.s",
  "jkt48.trisha",
  "jeanejkt48",
  "jessijkt48",
  "jkt48.lyn.s",
  "kathrinjkt48",
  "jkt48.moreen",
  "lulu_jkt48",
  "marsha.jkt48",
  "michiejkt48",
  "jkt48.levi",
  "muthejkt48",
  "jkt48.nayla",
  "jkt48.nachia",
  "jkt48.oline",
  "jkt48.raisha.s",
  "jkt48.regie",
  "adeljkt48",
  "jkt48.ribka",
  "jkt48.nala",
  "jkt48.kimmy",
  "shanijkt48",
  "graciajkt48",
];

const Tiktok = {
  getData: async (username) => {
    // Mulai browser Chromium
    const browser = await puppeteerExtra.launch({
      headless: false
    });

    
    // Buka halaman TikTok yang ingin di-scrap
    const page = await browser.newPage();
    await page.goto(`https://www.tiktok.com/@${username}`);

    // Tunggu hingga data dimuat
    try {
      await page.waitForSelector('[data-e2e="user-post-item-list"]', { timeout: 120000 });
    } catch (error) {
      console.error(`Timeout while waiting for ${username}'s data:`, error);
      await browser.close();
      return null;
    }

    // Ekstraksi data
    const data = await page.evaluate(() => {
      const scrapedData = {}; 
      const userInfo = document.querySelector('.css-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2');
      scrapedData.photo = userInfo.querySelector('.e1vl87hj2 img').src;
      scrapedData.username = userInfo.querySelector('.css-1xo9k5n-H1ShareTitle').textContent.trim();
      scrapedData.name = userInfo.querySelector('.css-10pb43i-H2ShareSubTitle').textContent.trim();
      scrapedData.description = userInfo.querySelector('.css-4ac4gk-H2ShareDesc').textContent.trim();
      scrapedData.following = userInfo.querySelector('[data-e2e="following-count"]').textContent.trim();
      scrapedData.followers = userInfo.querySelector('[data-e2e="followers-count"]').textContent.trim();
      scrapedData.likes = userInfo.querySelector('[data-e2e="likes-count"]').textContent.trim();
      
      
      const userVideos = document.querySelectorAll('[data-e2e="user-post-item-list"] .css-vi46v1-DivDesContainer [data-e2e="user-post-item-desc"] a.css-1wrhn5c-AMetaCaptionLine.eih2qak0');
      // Ambil link dari semua video
      scrapedData.links = Array.from(userVideos).map(video => video.getAttribute('href'));
    
      return scrapedData;
    });
    

    // Tutup browser setelah selesai
    await browser.close();

    return data;
  },
};

// Fungsi untuk memperbarui data untuk semua akun
const updateAllData = async () => {
  const allData = {};
  for (const username of tiktokAccounts) {
    const data = await Tiktok.getData(username);
    if (data) {
      allData[username] = data;
      console.log(`Data for ${username} collected.`);
    }
  }

  // Simpan semua data ke dalam satu file JSON
  fs.writeFile(`./db/tiktok/all_data.json`, JSON.stringify(allData, null, 2), (err) => {
    if (err) {
      console.error(`Error writing to JSON file:`, err);
      return;
    }
    console.log(`All data saved to all_data.json`);
  });
};

// Jadwalkan pembaruan data setiap hari pukul 03:00 WIB
cron.schedule('15 13 * * *', () => {
  console.log('Starting data update at 13:15...');
  updateAllData();
}, {
  timezone: "Asia/Jakarta"
});


module.exports = Tiktok;
