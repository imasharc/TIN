exports.showSongList = (req, res, next) => {
  res.render("pages/song/list", {});
};

exports.showAddSongForm = (req, res, next) => {
  res.render("pages/song/form");
};

exports.showSongDetails = (req, res, next) => {
  res.render("pages/song/details");
};
