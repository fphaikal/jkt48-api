const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');

const fs = require("fs");
const cron = require("node-cron");
const cheerio = require('cheerio');
const axios = require('axios');

puppeteerExtra.use(Stealth());

// const twitterAccounts = [
//     "SP_IndiraJKT48",
//     "Y_CynthiaJKT48",
//     "Aralie_JKT48",
//     "Delynn_JKT48",
//     "Shasa_JKT48",
//     "AA_AlyaJKT48",
//     "PS_AmandaJKT48",
//     "A_ChristyJKT48",
//     "AR_AnindyaJKT48",
//     "AU_LiaJKT48",
//     "AR_LanaJKT48",
//     "A_ZeeJKT48",
//     "AW_CallieJKT48",
//     "CErine_JKT48",
//     "N_CathyJKT48",
//     "Elin_JKT48",
//     "DC_ChelseaJKT48",
//     "C_OnielJKT48",
//     "Danella_JKT48",
//     "Daisy_JKT48",
//     "f_ollajt48",
//     "jkt48feni",
//     "A_FionyJKT48",
//     "S_FloraJKT48",
//     "RFritzy_JKT48",
//     "AM_EllaJKT48",
//     "Gendis_JKT48",
//     "A_GitaJKT48",
//     "Gracie_JKT48",
//     "Greesel_JKT48",
//     "H_EliJKT48",
//     "Lily_JKT48",
//     "C_IndahJKT48",
//     "JTrisha_JKT48",
//     "Jeane_JKT48",
//     "C_JessiJKT48",
//     "SE_LynJKT48",
//     "I_KathrinaJKT48",
//     "Moreen_JKT48",
//     "A_LuluJKT48",
//     "L_MarshaJKT48",
//     "Michie_JKT48",
//     "Levi_JKT48",
//     "A_MutheJKT48",
//     "SNayla_JKT48",
//     "Nachia_JKT48",
//     "M_OlineJKT48",
//     "SW_RaishaJKT48",
//     "Regie_JKT48",
//     "R_AdelJKT48",
//     "Ribka_JKT48",
//     "Nala_JKT48",
//     "N_ShaniJKT48", 
//     "S_GraciaJKT48",
//     "Kimmy_JKT48",
// ];

const Twitter = {
    getData: async (req, res) => {
        const {username} = req.params;
        const browser = await puppeteerExtra.launch({
            headless: false,
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
                "expirationDate": 1744624476.91274,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A171006447681493952"
            },
            {
                "domain": "twitter.com",
                "expirationDate": 1725616489,
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
                "expirationDate": 1745077019.812074,
                "hostOnly": false,
                "httpOnly": false,
                "name": "_ga",
                "path": "/",
                "secure": false,
                "session": false,
                "storeId": null,
                "value": "GA1.2.1258814914.1709823619"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1710603419,
                "hostOnly": false,
                "httpOnly": false,
                "name": "_gid",
                "path": "/",
                "secure": false,
                "session": false,
                "storeId": null,
                "value": "GA1.2.1568205859.1710338562"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744624490.90614,
                "hostOnly": false,
                "httpOnly": true,
                "name": "auth_token",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "1ef6bded49a5c1ee471b2bb304fe68925948c612"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744624491.468617,
                "hostOnly": false,
                "httpOnly": false,
                "name": "ct0",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "e226584e93609d30b54f01b4e31a2a73d69b9580a8e2a3368b72dbb7964bf3f59cfe39887041184f235f3dda9d386ad0f0c9f35a14e6fa9b0da8f22d4ee0925de420bd2f5cd4ed3ebd631a9bf07aa512"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1710669297.176246,
                "hostOnly": false,
                "httpOnly": false,
                "name": "external_referer",
                "path": "/",
                "secure": false,
                "session": false,
                "storeId": null,
                "value": "padhuUp37zifYYULRWRJfuITMdpmDrrTtqsuhkRGK40%3D|0|8e8t2xd8A2w%3D"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1745077023.033795,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id_ads",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A171006447681493952"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1745077023.033873,
                "hostOnly": false,
                "httpOnly": false,
                "name": "guest_id_marketing",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "v1%3A171006447681493952"
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1744624490.905996,
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
                "expirationDate": 1745077023.033924,
                "hostOnly": false,
                "httpOnly": false,
                "name": "personalization_id",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "\"v1_DcsnD0QnQ8RwGOKFSOY9wA==\""
            },
            {
                "domain": ".twitter.com",
                "expirationDate": 1742053023.033947,
                "hostOnly": false,
                "httpOnly": false,
                "name": "twid",
                "path": "/",
                "secure": true,
                "session": false,
                "storeId": null,
                "value": "u%3D1665721501503586306"
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
        res.send(data);
    },
};

module.exports = Twitter;
