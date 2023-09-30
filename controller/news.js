const axios = require("axios");
const cheerio = require("cheerio");

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
        img: news.find("img").attr("src"),
      });
    });

    return res.status(200).json({ newsDataList });
  },
  getDetailNews: async (req, res) => {
    const { idnews } = req.params;
  
    // Mengambil data detail berita
    const response = await axios.get(`https://jkt48.com/news/detail/id/${idnews}?lang=id`);
  
    const $ = cheerio.load(response.data);
  
    const newsDetail = [];
    $(".entry-news .entry-news__detail").each((i, element) => {
      const news = $(element);
  
      const paragraphs = news.find("div.entry-news__detail > div > p");
      const newsText = paragraphs.map((i, p) => $(p).text()).get().join('\n');
      // Mengambil semua elemen img di dalam elemen news
      const imageUrls = [];
      news.find("img").each((i, img) => {
        imageUrls.push($(img).attr("src"));
      });
  
      newsDetail.push({
        title: news.find("h3").text(),
        time: news.find("div.metadata2.mb-2").text(),
        news: newsText,
        imageUrls: imageUrls,
      });
    });
  
    return res.status(200).json( newsDetail );
  }
  
};

module.exports = News;