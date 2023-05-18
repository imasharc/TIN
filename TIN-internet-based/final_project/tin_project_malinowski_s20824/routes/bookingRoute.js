const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.get("/", bookingController.showBookingList);
router.get("/add", bookingController.showAddBookingForm);
router.get("/details/:bookingId", bookingController.showBookingDetails);
router.get("/edit/:bookingId", bookingController.showEditBookingForm);
// router.get("/details/:songId", bookingController.showSongDetails);
router.post("/add", bookingController.createBooking);
router.post("/edit", bookingController.updateBooking);
router.get("/delete/:bookingId", bookingController.deleteBooking);

module.exports = router;
