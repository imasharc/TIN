const StudioRepository = require("../repository/sequelize/StudioRepository");

exports.getStudios = (req, res, next) => {
  StudioRepository.getStudios()
    .then((studios) => {
      res.status(200).json(studios);
    })
    .catch((err) => {
      console.log();
    });
};

exports.getStudioById = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.getStudioById(studioId).then((studio) => {
    if (!studio) {
      res.status(404).json({
        message: "Studio with id: " + studioId + " not found",
      });
    } else {
      res.status(200).json(studio);
    }
  });
};

exports.createStudio = (req, res, next) => {
  StudioRepository.createStudio(JSON.stringify(req.body))
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

exports.updateStudio = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.updateStudio(studioId, req.body)
    .then((result) => {
      res.status(200).json({ message: "Studio updated!", studio: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteStudio = (req, res, next) => {
  const studioId = req.params.studioId;
  StudioRepository.deleteStudio(studioId)
    .then((result) => {
      res.status(200).json({ message: "Removed studio", studio: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
