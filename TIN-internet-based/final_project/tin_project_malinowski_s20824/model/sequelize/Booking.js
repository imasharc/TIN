const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Booking = sequelize.define("Booking", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  startTime: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
    },
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
    },
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
  engineerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
    },
  },
  studioId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The field is required.",
      },
    },
  },
});

module.exports = Booking;
