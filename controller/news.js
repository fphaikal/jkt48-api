const puppeteer = require("puppeteer")
const News = {
  getAllNews: async (req, res) => {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    try {
      await page.goto("https://jkt48.com/news/list?lang=id");

      const newsDataList = await page.evaluate(() => {
        const getNews = Array.from(
          document.querySelectorAll(".entry-news .entry-news__list")
        );
        const getID = (url) => {
          return url.substr(16).split("?")[0];
        };

        const data = getNews.map((news) => ({
          id: getID(news.querySelector("a").getAttribute("href")),
          title: news.querySelector("h3 a").innerText,
          time: news.querySelector("time").innerText,
        }));

        return data;
      });

      await browser.close();
      return res.status(200).json({ code: 200, result: newsDataList });
    } catch (error) {
      await browser.close();
      return res.status(500).json({ code: 500, messages: "Failed get data!" });
    }
  },
  getDetailNews: async (req, res) => {
    const { idnews } = req.params;

    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    try {
      await page.goto(`https://jkt48.com/news/detail/id/${idnews}?lang=id`);
      console.log(`Navigating to URL: https://jkt48.com/news/detail/id/${idnews}?lang=id`);

      const detailNews = await page.evaluate(() => {
        const getNews = Array.from(
          document.querySelectorAll(".row .col-lg-9 .entry-news .entry-news__detail")
        );

        const data = getNews.map((news) => {
          const titleElement = news.querySelector("h3");
          const timeElement = news.querySelector("div.metadata2.mb-2");
          const spanElements = news.querySelectorAll("div.entry-news__detail > div");
    
          // Periksa apakah elemen ditemukan sebelum mencoba mengakses innerText
          const title = titleElement ? titleElement.innerText : "Title not found";
          const time = timeElement ? timeElement.innerText : "Time not found";
          const newsText = Array.from(spanElements).map((span) => span.innerText).join(' ');
    
          return {
            title,
            time,
            news: newsText,
          };
        });

        return data;
      });

      await browser.close();
      return res.status(200).json({ code: 200, result: detailNews });
    } catch (error) {
      console.error(error)
      await browser.close();
      return res.status(500).json({ code: 500, messages: "Failed get data!" });
    }
  },
};

module.exports = News;
