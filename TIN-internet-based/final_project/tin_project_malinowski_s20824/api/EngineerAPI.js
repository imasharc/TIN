const EngineerRepository = require("../repository/sequelize/EngineerRepository");

exports.getEngineers = (req, res, next) => {
  EngineerRepository.getEngineers()
    .then((engineers) => {
      res.status(200).json(engineers);
    })
    .catch((err) => {
      console.log();
    });
};

exports.getEngineerById = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.getEngineerById(engineerId).then((engineer) => {
    if (!engineer) {
      res.status(404).json({
        message: "Engineer with id: " + engineerId + " not found",
      });
    } else {
      res.status(200).json(engineer);
    }
  });
};

exports.createEngineer = (req, res, next) => {
  EngineerRepository.createEngineer(JSON.stringify(req.body))
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

exports.updateEngineer = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.updateEngineer(engineerId, req.body)
    .then((result) => {
      res.status(200).json({ message: "Engineer updated!", engineer: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteEngineer = (req, res, next) => {
  const engineerId = req.params.engineerId;
  EngineerRepository.deleteEngineer(engineerId)
    .then((result) => {
      res.status(200).json({ message: "Removed engineer", engineer: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
