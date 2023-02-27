const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

// form display views
router.get("/", projectController.showProjectList);
router.get("/add", projectController.showAddProjectForm);
router.get("/details/:projectId", projectController.showProjectDetails);
router.get("/edit/:projectId", projectController.showEditProjectForm);

// business logic actions
router.post("/add", projectController.addProject);
// router.post("/edit", projectController.updateProject);
// router.get("/delete/:projectId", projectController.deleteProject);

module.exports = router;
