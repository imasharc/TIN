const express = require("express");
const router = express.Router();

const songApiController = require("../../api/SongAPI");

router.get("/", songApiController.getSongs);
router.get("/:songId", songApiController.getSongById);
router.post("/", songApiController.createSong);
router.put("/:songId", songApiController.updateSong);
router.delete("/:songId", songApiController.deleteSong);

module.exports = router;
