const express = require("express");
const songController = require("../controllers/songController");

const router = express.Router();

router.get("/", songController.showSongList);
router.get("/add", songController.showAddSongForm);
router.get("/details/:songId", songController.showSongDetails);
router.get("/edit/:songId", songController.showEditSongForm);
router.get("/details/:songId", songController.showSongDetails);

module.exports = router;
