const express = require('express');
const tiktok = require('../controller/tiktok');
const router = express.Router();
const fs = require('fs');


router.get("/:member", (req, res) => {
    const { member } = req.params;
    const filePath = `./db/tiktok/${member}_data.json`;
  
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
  
  module.exports = router;