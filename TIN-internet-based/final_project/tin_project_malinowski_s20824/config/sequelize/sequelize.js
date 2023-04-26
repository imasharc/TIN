const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "tin_project_malinowski_s20824",
  "root",
  "root",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
