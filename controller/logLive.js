const { LOGLIVE } = require("../utils/api");
const fetchService = require("../utils/fetchService");

const LogLives = {
  getLogLive: async (req, res) => {
    try {
        const { page, perpage, roomId } = req.query;
      const response = await fetchService(
        `${LOGLIVE}/api/recent?sort=date&page=${page}&filter=all&order=-1&group=jkt48&type=all&perpage=${perpage}&room_id=${roomId}`,
        res
      );
      const data = response.data;

      res.send(data);
    } catch (error) {
      return error;
    }
  },
  getLogLiveDetail: async (req,res) => {
    try {
      const { id } = req.params;
      const response = await fetchService(`${LOGLIVE}/api/recent/${id}`, res);
      const data = response.data;

      res.send(data);
    } catch (error) {
      return error;
    }
  }
};

module.exports = LogLives;
