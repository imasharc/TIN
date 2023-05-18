const Engineer = require("../../model/sequelize/Engineer");
const Booking = require("../../model/sequelize/Booking");
const Studio = require("../../model/sequelize/Studio");

exports.getBookings = () => {
  return Booking.findAll({
    include: [
      {
        model: Engineer,
        as: "engineer",
      },
      {
        model: Studio,
        as: "studio",
      },
    ],
  });
};

exports.getBookingById = (bookingId) => {
  return Booking.findByPk(bookingId);
};

exports.createBooking = (newBookingData) => {
  console.log(JSON.stringify(newBookingData));

  return Booking.create({
    startTime: newBookingData.startTime,
    endTime: newBookingData.endTime,
    firstName: newBookingData.firstName,
    lastName: newBookingData.lastName,
    contact: newBookingData.contact,
    engineerId: newBookingData.engineerId,
    studioId: newBookingData.studioId,
  });
};

exports.updateBooking = (bookingId, bookingData) => {
  return Booking.update(bookingData, { where: { id: bookingId } });
};

exports.deleteBooking = (bookingId) => {
  return Booking.destroy({
    where: {
      id: bookingId,
    },
  });
};

exports.deleteManyBookings = (bookingIds) => {
  return Booking.find({ id: { [Sequelize.Op.in]: bookingIds } });
};
