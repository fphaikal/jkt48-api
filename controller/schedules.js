const axios = require("axios")
const cheerio = require("cheerio")
const fetchService = require("../utils/fetchService");

const schedule = {
  getSchedule: async (req, res) => {
    const response = await axios.get("https://jkt48.com/calendar/list?lang=id");
    const $ = cheerio.load(response.data);
  
    const scheduleData = {
      period: $(".entry-schedule__header .entry-schedule__header--center").text(),
      listSchedule: [],
    };
  
    $(".entry-schedule__calendar .table tbody tr").each((i, element) => {
      const schedule = $(element);
      const date = schedule.find("td h3").text();
      
      // Mencari semua elemen event
      const eventElements = schedule.find("td div.contents");
      const events = [];
  
      // Memproses setiap elemen event
      eventElements.each((j, eventElement) => {
        const title = $(eventElement).find("p a").text().trim();
        const category = $(eventElement).find("span img").attr("src");
  
        events.push({
          title,
          category,
        });
      });
  
      scheduleData.listSchedule.push({
        date,
        event: events,
      });
    });
  
    return res.status(200).json(scheduleData);
  },

  getDetailSchedule: async (req, res) => {
    const { idschedule } = req.params;

    const response = await axios.get(
      `https://jkt48.com/theater/schedule/id/${idschedule}?lang=id`
    );

    const $ = cheerio.load(response.data);

    const scheduleDetailData = [];

    const tables = $(".table-pink__scroll table");

    const getRowTable = Array.from(tables[1].querySelectorAll("tbody tr"));

    getRowTable.map((schedule) => {
      const listMember = [];
      const seitansai = [];
      schedule.querySelectorAll("td a").forEach((member) => {
        if (!member.getAttribute("style")) {
          listMember.push(member.innerText);
        } else {
          seitansai.push(member.innerText);
        }
      });

      scheduleDetailData.push({
        show: schedule.querySelectorAll("td")[0].innerText.replace("\n", " "),
        setlist: schedule.querySelectorAll("td")[1].innerText.replace("\n", ""),
        member: listMember,
        seitansai,
      });
    });

    return res.status(200).json({ code: 200, result: scheduleDetailData });
  },

  getTheaterSchedule: async (req, res) => {
    const response = await axios.get(
      `https://jkt48.com/theater/schedule?lang=id`
    );

    const $ = cheerio.load(response.data);

    const scheduleDetailData = [];

    const tables = $(".table-pink__scroll table");

    const getRowTable = Array.from(tables[1].querySelectorAll("tbody tr"));

    getRowTable.map((schedule) => {
      const listMember = [];
      const seitansai = [];
      schedule.querySelectorAll("td a").forEach((member) => {
        if (!member.getAttribute("style")) {
          listMember.push(member.innerText);
        } else {
          seitansai.push(member.innerText);
        }
      });

      scheduleDetailData.push({
        show: schedule.querySelectorAll("td")[0].innerText.replace("\n", " "),
        setlist: schedule.querySelectorAll("td")[1].innerText.replace("\n", ""),
        member: listMember,
        seitansai,
      });
    });

    return res.status(200).json({ code: 200, result: scheduleDetailData });
  },

  getSchedule2: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await fetchService(`https://showroom-admin.vercel.app/schedules?`, res);
      const data = response.data;

      res.send(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching LogLive detail:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  
  }
};

module.exports = schedule