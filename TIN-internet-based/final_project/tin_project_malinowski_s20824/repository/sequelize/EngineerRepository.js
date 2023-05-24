const Engineer = require("../../model/sequelize/Engineer");
const Booking = require("../../model/sequelize/Booking");
const Studio = require("../../model/sequelize/Studio");

exports.getEngineers = () => {
  return Engineer.findAll();
};

exports.getEngineerById = (engineerId) => {
  return Engineer.findByPk(engineerId, {
    include: [
      {
        model: Booking,
        as: "bookings",
        include: [
          {
            model: Studio,
            as: "studio",
          },
        ],
      },
    ],
  });
};

exports.createEngineer = (newEngineerData) => {
  return Engineer.create({
    firstName: newEngineerData.firstName,
    lastName: newEngineerData.lastName,
    specialisation: newEngineerData.specialisation,
    hourRate: newEngineerData.hourRate,
    contact: newEngineerData.contact,
  });
};

exports.updateEngineer = (engineerId, engineerData) => {
  const firstName = engineerData.firstName;
  const lastName = engineerData.lastName;
  const specialisation = engineerData.specialisation;
  const hourRate = engineerData.hourRate;
  const contact = engineerData.contact;
  return Engineer.update(engineerData, { where: { id: engineerId } });
};

exports.deleteEngineer = (engineerId) => {
  return Engineer.destroy({
    where: {
      id: engineerId,
    },
  });
};

exports.findByEmail = (email) => {
  return Engineer.findOne({
    where: { contact: email },
  });
};
