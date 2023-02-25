const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Client = sequelize.define("Client", {
  clientId: {
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
  company: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

module.exports = Client;
