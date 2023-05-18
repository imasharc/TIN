const Engineer = require("../../model/sequelize/Engineer");
const Booking = require("../../model/sequelize/Booking");
const Studio = require("../../model/sequelize/Studio");

exports.getStudios = () => {
  return Studio.findAll();
};

exports.getStudioById = (studioId) => {
  return Studio.findByPk(studioId, {
    include: [
      {
        model: Booking,
        as: "bookings",
        include: [
          {
            model: Engineer,
            as: "engineer",
          },
        ],
      },
    ],
  });
};

exports.createStudio = (newStudioData) => {
  return Studio.create({
    name: newStudioData.name,
    street: newStudioData.street,
    postalCode: newStudioData.postalCode,
    city: newStudioData.city,
    hourRate: newStudioData.hourRate,
    contact: newStudioData.contact,
  });
};

exports.updateStudio = (studioId, studioData) => {
  const name = studioData.name;
  const street = studioData.street;
  const postalCode = studioData.postalCode;
  const city = studioData.city;
  const hourRate = studioData.hourRate;
  const contact = studioData.contact;
  return Studio.update(studioData, { where: { id: studioId } });
};

exports.deleteStudio = (studioId) => {
  return Studio.destroy({
    where: {
      id: studioId,
    },
  });
};
