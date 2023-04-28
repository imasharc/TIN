const SongRepository = require("../repository/sequelize/SongRepository");

exports.getSongs = (req, res, next) => {
  SongRepository.getSongs()
    .then((songs) => {
      res.status(200).json(songs);
    })
    .catch((err) => {
      console.log();
    });
};

exports.getSongById = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.getSongById(songId).then((song) => {
    if (!song) {
      res.status(404).json({
        message: "Song with id: " + songId + " not found",
      });
    } else {
      res.status(200).json(song);
    }
  });
};

exports.createSong = (req, res, next) => {
  SongRepository.createSong(req.body)
    .then((newObj) => {
      res.status(201).json(newObj);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateSong = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.updateSong(songId, req.body)
    .then((result) => {
      res.status(200).json({ message: "Song updated!", song: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteSong = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.deleteSong(songId)
    .then((result) => {
      res.status(200).json({ message: "Removed song", song: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
