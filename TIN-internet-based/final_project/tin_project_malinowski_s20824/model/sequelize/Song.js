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
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isrc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Song;
