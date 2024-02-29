const { LOGLIVE } = require("../utils/api");
const fetchService = require("../utils/fetchService");

const MemberProfile = {
  getMemberProfile: async (req, res) => {
    try {
      const response = await fetchService(
        `${LOGLIVE}/api/member?group=jkt48`,
        res
      );
      const data = response.data;

      res.send(data);
    } catch (error) {
      return error;
    }
  },
  getMemberProfileDetail: async (req, res) => {
    try {
      const { name } = req.params;
      const response = await fetchService(`${LOGLIVE}/api/member/${name}`, res);
      const data = response.data;

      res.send(data);
    } catch (error) {
      return error;
    }
  },
};

module.exports = MemberProfile