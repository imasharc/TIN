const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Studio = sequelize.define("Studio", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
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
  street: {
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
  postalCode: {
    type: Sequelize.STRING(12),
    allowNull: null,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
      len: {
        args: [2, 12],
        msg: "The field should contain between 2 and 12 characters.",
      },
    },
  },
  city: {
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
    type: Sequelize.DECIMAL(10, 2),
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

module.exports = Studio;
