﻿const ProjectRepository = require("../repository/sequelize/ProjectRepository");

exports.getProjects = (req, res, next) => {
  ProjectRepository.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProjectById = (req, res, next) => {
  const projectId = req.params.projectId;
  ProjectRepository.getProjectById(projectId).then((project) => {
    if (!project) {
      res.status(404).json({
        message: "Project with id: " + projectId + " not found",
      });
    } else {
      res.status(200).json(project);
    }
  });
};

exports.createProject = (req, res, next) => {
  ProjectRepository.createProject(req.body)
    .then((newObj) => {
      res.status(201).json(newObj);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateProject = (req, res, next) => {
  const projectId = req.params.projectId;
  ProjectRepository.updateProject(projectId, req.body)
    .then((result) => {
      res.status(200).json({ message: "Project updated!", project: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteProject = (req, res, next) => {
  const projectId = req.params.projectId;
  ProjectRepository.deleteProject(projectId)
    .then((result) => {
      res.status(200).json({ message: "Removed project", project: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
