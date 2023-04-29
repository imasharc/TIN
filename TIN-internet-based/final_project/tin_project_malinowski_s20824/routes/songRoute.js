const express = require("express");
const songController = require("../controllers/songController");

const router = express.Router();

router.get("/", songController.showSongList);
router.get("/add", songController.showAddSongForm);
router.get("/details/:songId", songController.showSongDetails);
router.get("/edit/:songId", songController.showEditSongForm);
router.get("/details/:songId", songController.showSongDetails);
router.post("/add", songController.addSong);
router.post("/edit", songController.updateSong);
router.get("/delete/:songId", songController.deleteSong);

module.exports = router;
