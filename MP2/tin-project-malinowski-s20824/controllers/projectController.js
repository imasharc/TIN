const EmployeeRepository = require("../repository/sequelize/EmployeeRepository");
const ClientRepository = require("../repository/sequelize/ClientRepository");
const ProjectRepository = require("../repository/sequelize/ProjectRepository");

exports.showProjectList = (req, res, next) => {
  res.render("pages/project_/list", { navLocation: "projects" });
};

exports.showAddProjectForm = (req, res, next) => {
  let allEmps, allClients;

  EmployeeRepository.getEmployees()
    .then((emps) => {
      allEmps = emps;
      return ClientRepository.getClients();
    })
    .then((clients) => {
      allClients = clients;
      res.render("pages/project_/form", {
        project: {},
        pageTitle: "New project",
        formMode: "createNew",
        btnLabel: "Add project",
        formAction: "/project/add",
        navLocation: "projects",
        allEmps: allEmps,
        allClients: allClients,
      });
    });
};

exports.showProjectDetails = (req, res, next) => {
  const projectId = req.params.projectId;
  let allEmps, allClients;

  EmployeeRepository.getEmployees()
    .then((emps) => {
      allEmps = emps;
      return ClientRepository.getClients();
    })
    .then((clients) => {
      allClients = clients;
      return ProjectRepository.getProjectById(projectId);
    })
    .then((project) => {
      res.render("pages/project_/form", {
        project: project,
        pageTitle: "Show details",
        formMode: "showDetails",
        formAction: "",
        navLocation: "projects",
        allEmps: allEmps,
        allClients: allClients,
      });
    });
};

exports.showEditProjectForm = (req, res, next) => {
  res.render("pages/project_/form-edit", { navLocation: "projects" });
};
