const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');

const fs = require("fs");
const cron = require("node-cron");
const cheerio = require('cheerio');
const axios = require('axios');

puppeteerExtra.use(Stealth());

const twitterAccounts = [
    "SP_IndiraJKT48",
    "Y_CynthiaJKT48",
    "Aralie_JKT48",
    "Delynn_JKT48",
    "Shasa_JKT48",
    "AA_AlyaJKT48",
    "PS_AmandaJKT48",
    "A_ChristyJKT48",
    "AR_AnindyaJKT48",
    "AU_LiaJKT48",
    "AR_LanaJKT48",
    "A_ZeeJKT48",
    "AW_CallieJKT48",
    "CErine_JKT48",
    "N_CathyJKT48",
    "Elin_JKT48",
    "DC_ChelseaJKT48",
    "C_OnielJKT48",
    "Danella_JKT48",
    "Daisy_JKT48",
    "f_ollajt48",
    "jkt48feni",
    "A_FionyJKT48",
    "S_FloraJKT48",
    "RFritzy_JKT48",
    "AM_EllaJKT48",
    "Gendis_JKT48",
    "A_GitaJKT48",
    "Gracie_JKT48",
    "Greesel_JKT48",
    "H_EliJKT48",
    "Lily_JKT48",
    "C_IndahJKT48",
    "JTrisha_JKT48",
    "Jeane_JKT48",
    "C_JessiJKT48",
    "SE_LynJKT48",
    "I_KathrinaJKT48",
    "Moreen_JKT48",
    "A_LuluJKT48",
    "L_MarshaJKT48",
    "Michie_JKT48",
    "Levi_JKT48",
    "A_MutheJKT48",
    "SNayla_JKT48",
    "Nachia_JKT48",
    "M_OlineJKT48",
    "SW_RaishaJKT48",
    "Regie_JKT48",
    "R_AdelJKT48",
    "Ribka_JKT48",
    "Nala_JKT48",
    "N_ShaniJKT48", 
    "S_GraciaJKT48",
    "Kimmy_JKT48",
];

const Twitter = {
    getData: async (username) => {
        const browser = await puppeteerExtra.launch({
            headless: "new",
        });
        const page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 720,
            deviceScaleFactor: 1,
          });

        const cookies = [
            {
                "domain": ".twitter.com",
                "expirationDate": 1744383891.88943,
                "hostOnly": false,
                "httpOnly": false,
                "name": "dnt",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "1"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744383892.21435,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A170982389114670005"
            },
            {
                "domain": "twitter.com",
                "expirationDate": 1725377672,
                "hostOnly": true,
                "httpOnly": false,
                "name": "g_state",
                "path": "/",
                "secure": false,
                "session": false,
                "storeId": null,
                "value": "{\"i_l\":0}"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1709912074.404901,
                "hostOnly": false,
                "httpOnly": true,
                "name": "att",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "1-9eksHlyxUHVBuF1Pc92u7BqPtBFIxFGy7oMdUTzh"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385675.872147,
                "hostOnly": false,
                "httpOnly": false,
                "name": "_ga",
                "path": "/",                "secure": false,
                "session": false,
                "storeId": null,
                "value": "GA1.2.1258814914.1709823619"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1709912075,
                "hostOnly": false,
                "httpOnly": false,
                "name": "_gid",
                "path": "/",
                "secure": false,
                "session": false,
                "storeId": null,
                "value": "GA1.2.1634972708.1709823619"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385673.613525,
                "hostOnly": false,
                "httpOnly": true,
                "name": "auth_token",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "f7ad03ef36594ebff11f5f49245dafea94efe291"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385673.968666,
                "hostOnly": false,
                "httpOnly": false,
                "name": "ct0",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "df41031b671ff6783fded6b3036b81c2b730648bd7968878e3c9aed3e89755d72b4cd9682e8ad335b5dd75e481b78a31accabd61d9157040c4809066ab3ca0bae74bfdb3bbfe4771cb0123a63eee942b"
            },
            {
                "domain": ".twitter.com",
                "hostOnly": false,
                "httpOnly": false,
                "name": "g_state",
                "path": "/",
                "secure": false,
                "session": true,
                "storeId": null,
                "value": "{\"i_l\":0}"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1709832617.503414,
                "hostOnly": false,
                "httpOnly": false,
                "name": "gt",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "1765754343083618428"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385678.772693,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id_ads",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A170982389114670005"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385678.772786,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id_marketing",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A170982389114670005"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385673.613357,
                "hostOnly": false,
                "httpOnly": true,
                "name": "kdt",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "f1xZ8Q5YoYOamXcNTExRwLASNKPDkdotttebr83T"
            },
            {
                "domain": "twitter.com",
                "hostOnly": true,
                "httpOnly": false,
                "name": "lang",
                "path": "/",
                "secure": false,
                "session": true,
                "storeId": null,
                "value": "id"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744385678.772829,
                "hostOnly": false,
                "httpOnly": false,
                "name": "personalization_id",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "\"v1_hoN5cuzxcpQIaOCJd989gg==\""
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1741361678.772849,
                "hostOnly": false,
                "httpOnly": false,
                "name": "twid",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "u%3D2287798488"
            }
        ]
  
        await page.setCookie(...cookies);
        // Ganti URL berikut dengan URL profil Twitter yang ingin Anda scrap
        const twitterProfileUrl = `https://twitter.com/${username}`;
        await page.cookies(twitterProfileUrl);

        await page.goto(twitterProfileUrl, { waitUntil: 'networkidle2' });

        try {
            await page.waitForSelector('[data-testid="tweet"]', { timeout: 120000 });
        } catch (error) {
            console.error(`(Twitter)Timeout while waiting for ${username}'s data:`, error);
            await browser.close();
            return null;
        }

        const data = await page.evaluate(() => {
            const scrappeData = {};
        
            const profilePicElement = document.querySelector(`.css-175oi2r.r-1adg3ll.r-bztko3.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-1xce0ei img`);
            scrappeData.profilePic = profilePicElement ? profilePicElement.src : "";
        
            const usernameElement = document.querySelector('[data-testid="UserName"] .css-1rynq56.r-dnmrzs.r-1udh08x .css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3');
            scrappeData.username = usernameElement ? usernameElement.textContent.trim() : "";
        
            const nameElement = document.querySelector('div[data-testid="UserName"] .css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3 .css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3');
            scrappeData.name = nameElement ? nameElement.textContent.trim() : "";
        
            const bioElement = document.querySelector('[data-testid="UserDescription"]');
            scrappeData.bio = bioElement ? bioElement.textContent.trim() : "";
        
            const followingElement = document.querySelector('.css-175oi2r.r-1mf7evn .css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1loqt21 .r-b88u0q');
            scrappeData.following = followingElement ? followingElement.textContent.trim() : "";
        
            const followersElement = document.querySelector('.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj div:nth-child(2) .css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3');
            scrappeData.followers = followersElement ? followersElement.textContent.trim() : "";
        
            scrappeData.url = scrappeData.username ? 'https://twitter.com/' + scrappeData.username : "";
        
            const timelineItems = document.querySelectorAll(`[aria-label="Timeline: Postingan ${scrappeData.name}"] > div > div`);
            scrappeData.timeline = [];
            let tweetsCount = 0;
            for (let i = 0; i < timelineItems.length; i++) {
                const item = timelineItems[i];
                const tweetTextElement = item.querySelector('[data-testid="tweetText"]');
                const tweetLinkElement = item.querySelector('.css-175oi2r.r-18u37iz.r-1wbh5a2.r-13hce6t > div > div.css-175oi2r.r-18u37iz.r-1q142lx > a');
                if (tweetTextElement && tweetLinkElement && tweetsCount < 10) {
                    const tweetText = tweetTextElement.textContent.trim();
                    const tweetImages = Array.from(item.querySelectorAll('[data-testid="tweetPhoto"] img')).map(img => img.src);
                    const tweetLink = tweetLinkElement.getAttribute('href');
        
                    scrappeData.timeline.push({ tweetText, tweetImages, tweetLink });
                    tweetsCount++;
                }
            }
            return scrappeData;
        });
        


        await browser.close();
        return data;
    },
};

// Fungsi untuk memperbarui data untuk semua akun
const updateAllData = async () => {
    const allData = {};
    for (const username of twitterAccounts) {
        const data = await Twitter.getData(username);
        if (data) {
            allData[username] = data;
            console.log(`Data Twitter for ${username} collected.`);
        }
    }

    // Simpan semua data ke dalam satu file JSON
    fs.writeFile(`./db/twitter/all_data.json`, JSON.stringify(allData, null, 2), (err) => {
        if (err) {
            console.error(`Error writing to JSON file:`, err);
            return;
        }
        console.log(`All data saved to all_data.json`);
    });
};

updateAllData();
// Tunggu 2 jam sebelum memulai pembaruan data pertama kali
setTimeout(() => {
    updateAllData();
    
    // Setelah pembaruan pertama, lakukan pembaruan setiap 15 detik
    setInterval(() => {
        updateAllData();
    }, 5000); 
}, 2 * 60 * 60 * 1000); // Setelah 2 jam

module.exports = Twitter;
