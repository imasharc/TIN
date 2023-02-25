const Sequelize = require("sequlize");

const Employee = require("../../model/sequelize/Employee");
const Project = require("../../model/sequelize/Project");
const Client = require("../../model/sequelize/Client");

exports.getProjects = () => {
  return Project.findAll({
    include: [
      {
        model: Employee,
        as: "employee",
      },
      {
        model: Client,
        as: "client",
      },
    ],
  });
};

exports.getProjectById = (projectId) => {
  return Project.findByPk(projectId, {
    include: [
      {
        model: Employee,
        as: "employee",
      },
      {
        model: Client,
        as: "client",
      },
    ],
  });
};

exports.createProject = (data) => {
  console.log(JSON.stringify(data));

  return Project.create({
    projectName: data.projectName,
    startDate: data.startDate,
    deadline: data.deadline,
    budget: data.budget,
    idOfClient: data.idOfClient,
    idOfEmp: data.idOfEmp,
  });
};

exports.updateProject = (projectId, data) => {
  return Project.update(data, { where: { projectId: projectId } });
};

exports.deleteProject = (projectId) => {
  return Project.destroy({
    where: { projectId: projectId },
  });
};

exports.deleteManyProjects = (projectIds) => {
  return Project.find({ projectId: { [Sequelize.Op.in]: projectIds } });
};
