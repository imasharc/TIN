const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Project = sequelize.define("Project", {
  projectId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  projectName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  deadline: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  budget: {
    type: Sequelize.DECIMAL(9, 2),
    allowNull: false,
  },
  idOfClient: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  idOfEmp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Project;
