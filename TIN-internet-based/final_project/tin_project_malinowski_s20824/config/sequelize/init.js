const sequelize = require("./sequelize");

const Song = require("../../model/sequelize/Song");

module.exports = () => {
  let allSongs;

  return sequelize
    .sync({ force: true })
    .then(() => {
      return Song.findAll();
    })
    .then((songs) => {
      if (!songs || songs.length == 0) {
        return Song.bulkCreate([
          {
            title: "IS U CHEMICAL?",
            url: "https://youtu.be/Lo6O4klwlDY",
            isrc: "DEZC62331831",
          },
          {
            title: "If I Die",
            url: "https://youtu.be/979lWQefMno",
            isrc: "QM8DG1874857",
          },
        ]).then(() => {
          return Song.findAll();
        });
      } else {
        return songs;
      }
    });
};
