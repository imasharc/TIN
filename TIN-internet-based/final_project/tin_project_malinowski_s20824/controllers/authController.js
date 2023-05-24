const EngineerRepository = require("../repository/sequelize/EngineerRepository");
const authUtil = require("../utils/authUtils");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  EngineerRepository.findByEmail(email)
    .then((engineer) => {
      if (!engineer) {
        res.render("index", {
          navLocation: "",
          loginError: "Invalid email address or password",
        });
      } else if (
        authUtil.comparePasswords(password, engineer.password) === true
      ) {
        req.session.loggedUser = engineer;
        res.redirect("/");
      } else {
        res.render("index", {
          navLocation: "",
          loginError: "Invalid email address or password",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.logout = (req, res, next) => {
  req.session.loggedUser = undefined;
  res.redirect("/");
};
