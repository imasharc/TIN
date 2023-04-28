const SongRepository = require("../repository/sequelize/SongRepository");

exports.showSongList = (req, res, next) => {
  SongRepository.getSongs().then((songs) => {
    res.render("pages/song/list", {
      songs: songs,
      navLocation: "song",
    });
  });
};

exports.showAddSongForm = (req, res, next) => {
  res.render("pages/song/form", { navLocation: "song" });
};

exports.showSongDetails = (req, res, next) => {
  res.render("pages/song/details", { navLocation: "song" });
};
