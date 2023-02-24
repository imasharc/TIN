const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/", projectController.showProjectList);
router.get("/add", projectController.showAddProjectForm);
router.get("/details/:projectId", projectController.showProjectDetails);
router.get("/edit/:projectId", projectController.showEditProjectForm);

module.exports = router;
