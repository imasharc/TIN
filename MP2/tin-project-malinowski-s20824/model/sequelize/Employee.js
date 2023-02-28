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
    validate: {
      nonEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 50],
        msg: "The field should contain between 2 and 50 characters.",
      },
    },
  },
  lastName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      nonEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 50],
        msg: "The field should contain between 2 and 50 characters.",
      },
    },
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      nonEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 50],
        msg: "The field should contain between 2 and 50 characters.",
      },
      isEmail: {
        msg: "The field should contain a valid email address.",
      },
    },
  },
  role: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

module.exports = Employee;
