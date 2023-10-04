const express = require('express');
const tiktok = require('../controller/tiktok');
const router = express.Router();

router.get("/JKT48_Ashel", tiktok.getAshelData);
router.get("/JKT48_Adel", tiktok.getAdelData);
router.get("/JKT48_Alya", tiktok.getAlyaData);
router.get("/JKT48_Amanda", tiktok.getAmandaData);
router.get("/JKT48_Anindya", tiktok.getAnindyaData);
router.get("/JKT48_Callie", tiktok.getCallieData);
router.get("/JKT48_Cathy", tiktok.getCathyData);
router.get("/JKT48_Chelsea", tiktok.getChelseaData);
router.get("/JKT48_Chika", tiktok.getChikaData);
router.get("/JKT48_Christy", tiktok.getChristyData);
router.get("/JKT48_Cynthia", tiktok.getCynthiaData);
router.get("/JKT48_Daisy", tiktok.getDaisyData);
router.get("/JKT48_Danella", tiktok.getDanellaData);
router.get("/JKT48_Eli", tiktok.getEliData);
router.get("/JKT48_Elin", tiktok.getElinData);
router.get("/JKT48_Ella", tiktok.getEllaData);
router.get("/JKT48_Feni", tiktok.getFeniData);
router.get("/JKT48_Fiony", tiktok.getFionyData);
router.get("/JKT48_Flora", tiktok.getFloraData);
router.get("/JKT48_Freya", tiktok.getFreyaData);
router.get("/JKT48_Gendis", tiktok.getGendisData);
router.get("/JKT48_Gita", tiktok.getGitaData);
router.get("/JKT48_Gracia", tiktok.getGraciaData);
router.get("/JKT48_Gracie", tiktok.getGracieData);
router.get("/JKT48_Greesel", tiktok.getGreeselData);
router.get("/JKT48_Indah", tiktok.getIndahData);
router.get("/JKT48_Indira", tiktok.getIndiraData);
router.get("/JKT48_Jeane", tiktok.getJeaneData);
router.get("/JKT48_Jessi", tiktok.getJessiData);
router.get("/JKT48_Kathrina", tiktok.getKathrinData);
router.get("/JKT48_Lia", tiktok.getLiaData);
router.get("/JKT48_Lulu", tiktok.getLuluData);
router.get("/JKT48_Lyn", tiktok.getLynData);
router.get("/JKT48_Marsha", tiktok.getMarshaData);
router.get("/JKT48_Michie", tiktok.getMichieData);
router.get("/JKT48_Muthe", tiktok.getMutheData);
router.get("/JKT48_Olla", tiktok.getOllaData);
router.get("/JKT48_Oniel", tiktok.getOnielData);
router.get("/JKT48_Raisha", tiktok.getRaishaData);
router.get("/JKT48_Shani", tiktok.getShaniData);
router.get("/JKT48_Zee", tiktok.getZeeData);

module.exports = router;