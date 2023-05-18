const express = require("express");
const router = express.Router();

const studioApiController = require("../../api/StudioAPI");

router.get("/", studioApiController.getStudios);
router.get("/:studioId", studioApiController.getStudioById);
router.post("/", studioApiController.createStudio);
router.put("/:studioId", studioApiController.updateStudio);
router.delete("/:studioId", studioApiController.deleteStudio);

module.exports = router;
