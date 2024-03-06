const express = require("express");
const tiktok = require("../controller/tiktok");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const filePath = `./db/tiktok/all_data.json`;
  // Membaca data dari file JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to read data' });
    }
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData);
  });
});
router.get("/:member", (req, res) => {
  const { member } = req.params;
  const filePath = `./db/tiktok/all_data.json`;

  // Membaca data dari file JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read data" });
    }
    const jsonData = JSON.parse(data);
    // Cek apakah data member ada di dalam file
    if (jsonData.hasOwnProperty(member)) {
      res.status(200).json(jsonData[member]);
    } else {
      res.status(404).json({ error: "Member not found" });
    }
  });
});

module.exports = router;
