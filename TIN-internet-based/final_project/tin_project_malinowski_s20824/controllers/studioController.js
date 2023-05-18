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
    });
  });
};

exports.addStudio = (req, res, next) => {
  const studioData = { ...req.body };
  StudioRepository.createStudio(studioData).then((result) => {
    res.redirect("/studios");
  });
};

exports.updateStudio = (req, res, next) => {
  const studioId = req.body.id;
  const studioData = { ...req.body };
  StudioRepository.updateStudio(studioId, studioData).then((result) => {
    res.redirect("/studios");
  });
};

exports.deleteStudio = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.deleteStudio(studioId).then(() => {
    res.redirect("/studios");
  });
};
