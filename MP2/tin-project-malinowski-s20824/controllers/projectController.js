const EmployeeRepository = require("../repository/sequelize/EmployeeRepository");
const ClientRepository = require("../repository/sequelize/ClientRepository");
const ProjectRepository = require("../repository/sequelize/ProjectRepository");

exports.showProjectList = (req, res, next) => {
  ProjectRepository.getProjects().then((projects) => {
    res.render("pages/project_/list", {
      projects: projects,
      pageTitle: "Project list",
      navLocation: "projects",
    });
  });
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
        formAction: "/projects/add",
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
        pageTitle: "Edit project",
        formMode: "edit",
        btnLabel: "Edit project",
        formAction: "/projects/edit",
        navLocation: "projects",
        allEmps: allEmps,
        allClients: allClients,
      });
    });
};

exports.addProject = (req, res, next) => {
  const projectData = { ...req.body };

  ProjectRepository.createProject(projectData).then((result) => {
    res.redirect("/projects");
  });
};
