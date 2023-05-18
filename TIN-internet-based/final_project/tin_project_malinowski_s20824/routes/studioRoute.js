const express = require("express");
const studioController = require("../controllers/studioController");

const router = express.Router();

router.get("/", studioController.showStudioList);
router.get("/add", studioController.showAddStudioForm);
router.get("/details/:studioId", studioController.showStudioDetails);
router.get("/edit/:studioId", studioController.showEditStudioForm);
// router.get("/details/:engineerId", engineerController.showSongDetails);
router.post("/add", studioController.addStudio);
router.post("/edit", studioController.updateStudio);
router.get("/delete/:studioId", studioController.deleteStudio);

module.exports = router;
