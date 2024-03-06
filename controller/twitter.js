const puppeteer = require("puppeteer");
const fs = require("fs");
const twitterScraper = require('easytwitterscraper')

const twitterAccounts = [
    "SP_IndiraJKT48",
    "Gracie_JKT48",
    "L_MarshaJKT48"
];

const Twitter = {
    getData: async (username) => {

        const twitter = require("x-scrapper").Twitter
   
        twitter.getVideoInfo("https://twitter.com/vvotanet/status/1765339931663028292") // returns a Promise
        .then((res) => {
        console.log(res) // Video info.
        console.log(res.media.formats[0].url) // Get the video .mp4 url (you can download it.)
        })
    },
};



module.exports = Twitter;
