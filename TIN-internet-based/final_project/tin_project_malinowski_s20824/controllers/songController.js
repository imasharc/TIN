﻿const SongRepository = require("../repository/sequelize/SongRepository");

exports.showSongList = (req, res, next) => {
  SongRepository.getSongs().then((songs) => {
    res.render("pages/song/list", {
      songs: songs,
      navLocation: "song",
    });
  });
};

exports.showAddSongForm = (req, res, next) => {
  res.render("pages/song/form", {
    song: {},
    pageTitle: "New song",
    formMode: "createNew",
    btnLabel: "Add song",
    formAction: "/songs/add",
    navLocation: "song",
  });
};

exports.showSongDetails = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.getSongById(songId).then((song) => {
    res.render("pages/song/form", {
      song: song,
      formMode: "showDetails",
      pageTitle: "Show Details",
      // btnLabel: "showDetails"
      formAction: "",
      navLocation: "song",
    });
  });
};

exports.showEditSongForm = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.getSongById(songId).then((song) => {
    res.render("pages/song/form", {
      song: song,
      formMode: "edit",
      pageTitle: "Edit song",
      btnLabel: "Edit song",
      formAction: "/songs/edit",
      navLocation: "song",
    });
  });
};

exports.addSong = (req, res, next) => {
  const songData = { ...req.body };
  SongRepository.createSong(songData).then((result) => {
    res.redirect("/songs");
  });
};

exports.updateSong = (req, res, next) => {
  const songId = req.body.id;
  const songData = { ...req.body };
  SongRepository.updateSong(songId, songData).then((result) => {
    res.redirect("/songs");
  });
};

exports.deleteSong = (req, res, next) => {
  const songId = req.params.songId;
  SongRepository.deleteSong(songId).then(() => {
    res.redirect("/songs");
  });
};
