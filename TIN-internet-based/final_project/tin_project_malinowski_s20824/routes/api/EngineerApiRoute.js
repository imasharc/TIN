const express = require("express");
const router = express.Router();
router.use(express.json());

const engineerApiController = require("../../api/EngineerAPI");

router.get("/", engineerApiController.getEngineers);
router.get("/:engineerId", engineerApiController.getEngineerById);
router.post("/", engineerApiController.createEngineer);
router.put("/:engineerId", engineerApiController.updateEngineer);
router.delete("/:engineerId", engineerApiController.deleteEngineer);

module.exports = router;
