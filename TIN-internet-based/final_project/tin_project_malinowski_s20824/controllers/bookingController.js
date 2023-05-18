const EngineerRepository = require("../repository/sequelize/EngineerRepository");
const StudioRepository = require("../repository/sequelize/StudioRepository");
const BookingRepository = require("../repository/sequelize/BookingRepository");

exports.showBookingList = (req, res, next) => {
  BookingRepository.getBookings().then((bookings) => {
    res.render("pages/booking/list", {
      bookings: bookings,
      pageTitle: "Booking list",
      navLocation: "bookings",
    });
  });
};

exports.showAddBookingForm = (req, res, next) => {
  let allEngineers, allStudios;

  EngineerRepository.getEngineers()
    .then((engineers) => {
      allEngineers = engineers;
      return StudioRepository.getStudios();
    })
    .then((studios) => {
      allStudios = studios;
      res.render("pages/booking/form", {
        booking: {},
        pageTitle: "New booking",
        formMode: "createNew",
        btnLabel: "Add booking",
        formAction: "/bookings/add",
        navLocation: "booking",
        allEngineers: allEngineers,
        allStudios: allStudios,
      });
    });
};

exports.showBookingDetails = (req, res, next) => {
  const bookingId = req.params.bookingId;
  let allEngineers, allStudios;

  EngineerRepository.getEngineers()
    .then((engineers) => {
      allEngineers = engineers;
      return StudioRepository.getStudios();
    })
    .then((studios) => {
      allStudios = studios;
      return BookingRepository.getBookingById(bookingId);
    })
    .then((booking) => {
      res.render("pages/booking/form", {
        booking: booking,
        formMode: "showDetails",
        pageTitle: "Show Details",
        // btnLabel: "showDetails"
        formAction: "",
        navLocation: "bookings",
        allEngineers: allEngineers,
        allStudios: allStudios,
      });
    });
};

exports.showEditBookingForm = (req, res, next) => {
  const bookingId = req.params.bookingId;
  let allEngineers, allStudios;

  EngineerRepository.getEngineers()
    .then((engineers) => {
      allEngineers = engineers;
      return StudioRepository.getStudios();
    })
    .then((studios) => {
      allStudios = studios;
      return BookingRepository.getBookingById(bookingId);
    })
    .then((booking) => {
      res.render("pages/booking/form", {
        booking: booking,
        formMode: "edit",
        pageTitle: "Edit booking",
        btnLabel: "Edit booking",
        formAction: "/bookings/edit",
        navLocation: "booking",
        allEngineers: allEngineers,
        allStudios: allStudios,
      });
    });
};

exports.createBooking = (req, res, next) => {
  const bookingData = { ...req.body };
  BookingRepository.createBooking(bookingData).then((result) => {
    res.redirect("/bookings");
  });
};

exports.updateBooking = (req, res, next) => {
  const bookingId = req.body.id;
  const bookingData = { ...req.body };
  BookingRepository.updateBooking(bookingId, bookingData).then((result) => {
    res.redirect("/bookings");
  });
};

exports.deleteBooking = (req, res, next) => {
  const bookingId = req.params.bookingId;
  BookingRepository.deleteBooking(bookingId).then(() => {
    res.redirect("/bookings");
  });
};
