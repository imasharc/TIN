exports.showProjectList = (req, res, next) => {
  res.render("pages/project_/list", { navLocation: "projects" });
};

exports.showAddProjectForm = (req, res, next) => {
  res.render("pages/project_/form", { navLocation: "projects" });
};

exports.showProjectDetails = (req, res, next) => {
  res.render("pages/project_/details", { navLocation: "projects" });
};

exports.showEditProjectForm = (req, res, next) => {
  res.render("pages/project_/form-edit", { navLocation: "projects" });
};
