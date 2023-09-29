import axios from "axios";
import cheerio from "cheerio";

const News = {
  getAllNews: async (req, res) => {
    const response = await axios.get("https://jkt48.com/news/list?lang=id");

    const $ = cheerio.load(response.data);

    const newsDataList = [];
    $(".entry-news .entry-news__list").each((i, element) => {
      const news = $(element);
      const id = news.find("a").attr("href").substring(16).split("?")[0];

      newsDataList.push({
        id: id,
        title: news.find("h3 a").text(),
        time: news.find("time").text(),
      });
    });

    return res.status(200).json({ code: 200, result: newsDataList });
  },
  getDetailNews: async (req, res) => {
    const { idnews } = req.params;

    const response = await axios.get(`https://jkt48.com/news/detail/id/${idnews}?lang=id`);

    const $ = cheerio.load(response.data);

    const newsDetail = [];
    $(".row .col-lg-9 .entry-news .entry-news__detail").each((i, element) => {
      const news = $(element);

      newsDetail.push({
        title: news.find("h3").text(),
        time: news.find("div.metadata2.mb-2").text(),
        news: news.find("div.entry-news__detail > div").text(),
      });
    });

    return res.status(200).json({ code: 200, result: newsDetail });
  },
};

module.exports = News;