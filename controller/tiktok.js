const axios = require("axios");
const cheerio = require("cheerio");

const Tiktok = {
    getAshelData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@asheljkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const ashel = $(element);
    
          const videos = [];
          ashel.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: ashel.find("span img").attr("src"),
            name: ashel.find("h2.ekmpd5l7").text(),
            username: ashel.find("h1").text(),
            followers: ashel.find("h3 strong[data-e2e='followers-count']").text(),
            likes: ashel.find("h3 strong[data-e2e='likes-count']").text(),
            bio: ashel.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getAdelData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@adeljkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const adel = $(element);
    
          const videos = [];
          adel.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: adel.find("span img").attr("src"),
            name: adel.find("h2.ekmpd5l7").text(),
            username: adel.find("h1").text(),
            followers: adel.find("h3 strong[data-e2e='followers-count']").text(),
            likes: adel.find("h3 strong[data-e2e='likes-count']").text(),
            bio: adel.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getAlyaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@alyajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const alya = $(element);
    
          const videos = [];
          alya.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: alya.find("span img").attr("src"),
            name: alya.find("h2.ekmpd5l7").text(),
            username: alya.find("h1").text(),
            followers: alya.find("h3 strong[data-e2e='followers-count']").text(),
            likes: alya.find("h3 strong[data-e2e='likes-count']").text(),
            bio: alya.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getAmandaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.amanda.s");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const amanda = $(element);
    
          const videos = [];
          amanda.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: amanda.find("span img").attr("src"),
            name: amanda.find("h2.ekmpd5l7").text(),
            username: amanda.find("h1").text(),
            followers: amanda.find("h3 strong[data-e2e='followers-count']").text(),
            likes: amanda.find("h3 strong[data-e2e='likes-count']").text(),
            bio: amanda.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getAnindyaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@anindyajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getCallieData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.callie.a");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getCathyData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@cathyjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getChelseaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@_chelseajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getChikaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@chikajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getChristyData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@christyjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getCynthiaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@cynthiajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getDaisyData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@daisyjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getDanellaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@danellajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getEliData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@elijkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getElinData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@elinjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getEllaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.ella.a");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getFeniData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@fenijkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getFionyData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@fionyjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getFloraData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@florajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getFreyaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@freyajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getGendisData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@gendisjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getGitaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@gitajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getGraciaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@graciajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getGracieData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@graciejkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getGreeselData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@greeseljkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getIndahData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@indahjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getIndiraData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.indira.s");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getJeaneData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jeanejkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getJessiData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jessijkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getKathrinData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@kathrinjkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getLiaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.aurellia_");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getLuluData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@lulu_jkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getLynData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.lyn.s");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getMichieData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@michiejkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getMarshaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@marsha.jkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getMutheData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@muthejkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getOnielData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@onieljkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getOllaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@ollajkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getRaishaData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@jkt48.raisha.s");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getShaniData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@shanijkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },
    getZeeData: async (req, res) => {
        const response = await axios.get("https://www.tiktok.com/@zeejkt48");
    
        const $ = cheerio.load(response.data);
    
        const data = [];
        $("div.enm41491").each((i, element) => {
          const member = $(element);
    
          const videos = [];
          member.find("div.tiktok-x6y88p-DivItemContainerV2").each((j, element) => {
            const video = {
              title: $(element).find("div.tiktok-16ou6xi-DivTagCardDesc").find("a").attr("title"),
              views: $(element).find("div.tiktok-11u47i-DivCardFooter").find("strong[data-e2e='video-views']").text(),
              thumbnail: $(element).find("div.tiktok-1as5cen-DivWrapper").find("picture img").attr("src"),
            };
            videos.push(video);
          });
    
          data.push({
            img: member.find("span img").attr("src"),
            name: member.find("h2.ekmpd5l7").text(),
            username: member.find("h1").text(),
            followers: member.find("h3 strong[data-e2e='followers-count']").text(),
            likes: member.find("h3 strong[data-e2e='likes-count']").text(),
            bio: member.find("h2.e1457k4r3").text(),
            videos: videos,
          });
        });
    
        return res.status(200).json({ data });
    },

};

module.exports = Tiktok;