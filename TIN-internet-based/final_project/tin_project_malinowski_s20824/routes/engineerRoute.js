const express = require("express");
const engineerController = require("../controllers/engineerController");

const router = express.Router();

router.get("/", engineerController.showEngineerList);
router.get("/add", engineerController.showAddEngineerForm);
router.get("/details/:engineerId", engineerController.showEngineerDetails);
router.get("/edit/:engineerId", engineerController.showEditEngineerForm);
// router.get("/details/:engineerId", engineerController.showSongDetails);
router.post("/add", engineerController.addEngineer);
router.post("/edit", engineerController.updateEngineer);
router.get("/delete/:engineerId", engineerController.deleteEngineer);

module.exports = router;
