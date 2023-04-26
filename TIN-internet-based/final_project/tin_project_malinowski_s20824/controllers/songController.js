exports.showSongList = (req, res, next) => {
  res.render("pages/song/list", { navLocation: "song" });
};

exports.showAddSongForm = (req, res, next) => {
  res.render("pages/song/form", { navLocation: "song" });
};

exports.showSongDetails = (req, res, next) => {
  res.render("pages/song/details", { navLocation: "song" });
};
