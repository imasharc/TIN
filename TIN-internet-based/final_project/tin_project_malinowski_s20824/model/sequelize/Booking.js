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
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  engineerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  studioId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Booking;
