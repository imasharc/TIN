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
  },
  street: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  postalCode: {
    type: Sequelize.STRING(12),
    allowNull: null,
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  hourRate: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = Studio;
