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
    validate: {
      notEmpty: {
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
      notEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 50],
        msg: "The field should contain between 2 and 50 characters.",
      },
    },
  },
  specialisation: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 50],
        msg: "The field should contain between 2 and 50 characters.",
      },
    },
  },
  hourRate: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
      isNumeric: {
        msg: "The field should contain a valid number.",
      },
    },
  },
  contact: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
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
});

module.exports = Engineer;
