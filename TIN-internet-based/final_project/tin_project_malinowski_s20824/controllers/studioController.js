const StudioRepository = require("../repository/sequelize/StudioRepository");

exports.showStudioList = (req, res, next) => {
  StudioRepository.getStudios().then((studios) => {
    res.render("pages/studio/list", {
      studios: studios,
      navLocation: "studio",
    });
  });
};

exports.showAddStudioForm = (req, res, next) => {
  res.render("pages/studio/form", {
    studio: {},
    pageTitle: "New studio",
    formMode: "createNew",
    btnLabel: "Add studio",
    formAction: "/studios/add",
    navLocation: "studio",
    validationErrors: [],
  });
};

exports.showStudioDetails = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.getStudioById(studioId).then((studio) => {
    res.render("pages/studio/form", {
      studio: studio,
      formMode: "showDetails",
      pageTitle: "Show Details",
      // btnLabel: "showDetails"
      formAction: "",
      navLocation: "studio",
      validationErrors: [],
    });
  });
};

exports.showEditStudioForm = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.getStudioById(studioId).then((studio) => {
    res.render("pages/studio/form", {
      studio: studio,
      formMode: "edit",
      pageTitle: "Edit studio",
      btnLabel: "Edit studio",
      formAction: "/studios/edit",
      navLocation: "studio",
      validationErrors: [],
    });
  });
};

exports.addStudio = (req, res, next) => {
  const studioData = { ...req.body };
  StudioRepository.createStudio(studioData)
    .then((result) => {
      res.redirect("/studios");
    })
    .catch((err) => {
      res.render("pages/studio/form", {
        studio: studioData,
        formMode: "createNew",
        pageTitle: "Adding a studio",
        btnLabel: "Add studio",
        formAction: "/studios/add",
        navLocation: "studio",
        validationErrors: err.errors,
      });
    });
};

exports.updateStudio = (req, res, next) => {
  const studioId = req.body.id;
  const studioData = { ...req.body };
  StudioRepository.updateStudio(studioId, studioData)
    .then((result) => {
      res.redirect("/studios");
    })
    .catch((err) => {
      res.render("pages/studio/form", {
        studio: studioData,
        formMode: "edit",
        pageTitle: "Edit a studio",
        btnLabel: "Edit studio",
        formAction: "/studios/add",
        navLocation: "studio",
        validationErrors: err.errors,
      });
    });
};

exports.deleteStudio = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.deleteStudio(studioId).then(() => {
    res.redirect("/studios");
  });
};
