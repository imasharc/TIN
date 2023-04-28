const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Song = sequelize.define("Song", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  isrc: {
    type: Sequelize.STRING(12),
    allowNull: true,
  },
});

module.exports = Song;
