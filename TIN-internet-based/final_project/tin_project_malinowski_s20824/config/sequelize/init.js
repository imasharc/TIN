const sequelize = require("./sequelize");
const authUtil = require("../../utils/authUtils");
const passHash = authUtil.hashPassword("12345");

const Engineer = require("../../model/sequelize/Engineer");
const Studio = require("../../model/sequelize/Studio");
const Booking = require("../../model/sequelize/Booking");

module.exports = () => {
  Engineer.hasMany(Booking, {
    as: "bookings",
    foreignKey: { name: "engineerId", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Booking.belongsTo(Engineer, {
    as: "engineer",
    foreignKey: { name: "engineerId", allowNull: false },
  });
  Studio.hasMany(Booking, {
    as: "bookings",
    foreignKey: { name: "studioId", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Booking.belongsTo(Studio, {
    as: "studio",
    foreignKey: { name: "studioId", allowNull: false },
  });

  let allEngineers, allStudios;

  return sequelize
    .sync({ force: true })
    .then(() => {
      return Engineer.findAll();
    })
    .then((engineers) => {
      if (!engineers || engineers.length == 0) {
        return Engineer.bulkCreate([
          {
            firstName: "Janusz",
            lastName: "Walczuk",
            specialisation: "Mixing engineer",
            hourRate: 60,
            contact: "janusz.walczuk@nobocoto.pl",
            password: passHash,
          },
          {
            firstName: "Michał",
            lastName: "Wróblewski",
            specialisation: "Mixing engineer",
            hourRate: 80,
            contact: "wroobel@nobocoto.pl",
            password: "54321",
          },
          {
            firstName: "Jonathan 'DJ Johny'",
            lastName: "Łoś",
            specialisation: "Mastering engineer",
            hourRate: 120,
            contact: "djjohny@nobocoto.pl",
            password: "111111",
          },
        ]).then(() => {
          return Engineer.findAll();
        });
      } else {
        return engineers;
      }
    })
    .then((engineers) => {
      allEngineers = engineers;
      return Studio.findAll();
    })
    .then((studios) => {
      if (!studios || studios.length == 0) {
        return Studio.bulkCreate([
          {
            name: "Studio 1",
            street: "Ludwika Rydygiera 8",
            postalCode: "01-793",
            city: "Warsaw",
            hourRate: 80,
            contact: "kontakt@nobocoto.pl",
          },
          {
            name: "Studio A",
            street: "gen. Sylwestra Kaliskiego 15A",
            postalCode: "01-476",
            city: "Warsaw",
            hourRate: 60,
            contact: "kontakt@nobocoto.pl",
          },
          {
            name: "Studio B",
            street: "gen. Sylwestra Kaliskiego 15A",
            postalCode: "01-476",
            city: "Warsaw",
            hourRate: 30,
            contact: "kontakt@nobocoto.pl",
          },
        ]).then(() => {
          return Engineer.findAll();
        });
      } else {
        return studios;
      }
    })
    .then((studios) => {
      allStudios = studios;
      return Booking.findAll();
    })
    .then((bookings) => {
      if (!bookings || bookings.length == 0) {
        return Booking.bulkCreate([
          {
            startTime: "2023-01-12T20:00:00.000+01:00",
            endTime: "2023-01-12T21:00:00.000+01:00",
            firstName: "Mateusz",
            lastName: "Karaś",
            contact: "mateusz.karas@soldoutagency.com",
            engineerId: allEngineers[2].id,
            studioId: allStudios[0].id,
          },
          {
            startTime: "2023-02-22T16:30:00.000+01:00",
            endTime: "2023-02-22T18:30:00.000+01:00",
            firstName: "Michał",
            lastName: "Matczak",
            contact: "mata@gmail.com",
            engineerId: allEngineers[0].id,
            studioId: allStudios[1].id,
          },
          {
            startTime: "2023-04-07T19:00:00.000+01:00",
            endTime: "2023-04-07T20:00:00.000+01:00",
            firstName: "Janusz",
            lastName: "Walczuk",
            contact: "janusz.walczuk@nobocoto.pl",
            engineerId: allEngineers[1].id,
            studioId: allStudios[2].id,
          },
          {
            startTime: "2023-04-11T18:00:00.000+01:00",
            endTime: "2023-04-11T20:00:00.000+01:00",
            firstName: "Adrian",
            lastName: "Nowak",
            contact: "adi.nowak@gmail.com",
            engineerId: allEngineers[1].id,
            studioId: allStudios[0].id,
          },
        ]);
      } else {
        return bookings;
      }
    });
};
