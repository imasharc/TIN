const EngineerRepository = require("../repository/sequelize/EngineerRepository");

exports.showEngineerList = (req, res, next) => {
  EngineerRepository.getEngineers().then((engineers) => {
    res.render("pages/engineer/list", {
      engineers: engineers,
      navLocation: "engineer",
    });
  });
};

exports.showAddEngineerForm = (req, res, next) => {
  res.render("pages/engineer/form", {
    engineer: {},
    pageTitle: "New engineer",
    formMode: "createNew",
    btnLabel: "Add engineer",
    formAction: "/engineers/add",
    navLocation: "engineer",
    validationErrors: [],
  });
};

exports.showEngineerDetails = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.getEngineerById(engineerId).then((engineer) => {
    res.render("pages/engineer/form", {
      engineer: engineer,
      formMode: "showDetails",
      pageTitle: "Show Details",
      // btnLabel: "showDetails"
      formAction: "",
      navLocation: "engineer",
      validationErrors: [],
    });
  });
};

exports.showEditEngineerForm = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.getEngineerById(engineerId).then((engineer) => {
    res.render("pages/engineer/form", {
      engineer: engineer,
      formMode: "edit",
      pageTitle: "Edit engineer",
      btnLabel: "Edit engineer",
      formAction: "/engineers/edit",
      navLocation: "engineer",
      validationErrors: [],
    });
  });
};

exports.addEngineer = (req, res, next) => {
  const engineerData = { ...req.body };
  EngineerRepository.createEngineer(engineerData)
    .then((result) => {
      res.redirect("/engineers");
    })
    .catch((err) => {
      res.render("pages/engineer/form", {
        engineer: engineerData,
        formMode: "createNew",
        pageTitle: "Adding an engineer",
        btnLabel: "Add engineer",
        formAction: "/engineers/add",
        navLocation: "engineer",
        validationErrors: err.errors,
      });
    });
};

exports.updateEngineer = (req, res, next) => {
  const engineerId = req.body.id;
  const engineerData = { ...req.body };
  EngineerRepository.updateEngineer(engineerId, engineerData)
    .then((result) => {
      res.redirect("/engineers");
    })
    .catch((err) => {
      res.render("pages/engineer/form", {
        engineer: engineerData,
        formMode: "edit",
        pageTitle: "Edit an engineer",
        btnLabel: "Edit engineer",
        formAction: "/engineers/edit",
        navLocation: "engineer",
        validationErrors: err.errors,
      });
    });
};

exports.deleteEngineer = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.deleteEngineer(engineerId).then(() => {
    res.redirect("/engineers");
  });
};
