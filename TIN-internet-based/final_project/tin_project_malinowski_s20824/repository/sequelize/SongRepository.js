const Song = require("../../model/sequelize/Song");

exports.getSongs = () => {
  return Song.findAll();
};

exports.getSongById = (songId) => {
  return Song.findByPk(songId);
};

exports.createSong = (newSongData) => {
  return Song.create({
    title: newSongData.title,
    url: newSongData.url,
    isrc: newSongData.isrc,
  });
};

exports.updateSong = (songId, songData) => {
  const title = songData.title;
  const url = songData.url;
  const isrc = songData.isrc;
  return Song.update(songData, { where: { id: songId } });
};

exports.deleteSong = (songId) => {
  return Song.destroy({
    where: {
      id: songId,
    },
  });
};
