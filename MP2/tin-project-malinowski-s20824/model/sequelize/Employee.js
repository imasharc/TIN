const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Employee = sequelize.define("Employee", {
  empId: {
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
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
  role: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

module.exports = Employee;
