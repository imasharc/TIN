const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Engineer = sequelize.define("Engineer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  specialisation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  hourRate: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = Engineer;
