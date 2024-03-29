﻿export const engineerList = [
  {
    id: 1,
    firstName: "Janusz",
    lastName: "Walczuk",
    specialisation: "Mixing engineer",
    hourRate: 60,
    contact: "janusz.walczuk@nobocoto.pl",
  },
  {
    id: 2,
    firstName: "Michał",
    lastName: "Wróblewski",
    specialisation: "Mixing engineer",
    hourRate: 80,
    contact: "wroobel@nobocoto.pl",
  },
  {
    id: 3,
    firstName: "Jonathan 'DJ Johny'",
    lastName: "Łoś",
    specialisation: "Mastering engineer",
    hourRate: 120,
    contact: "djjohny@nobocoto.pl",
  },
];

export const engineerDetailsList = [
  {
    id: 1,
    firstName: "Janusz",
    lastName: "Walczuk",
    specialisation: "Mixing engineer",
    hourRate: 60,
    contact: "janusz.walczuk@nobocoto.pl",
    employments: [
      {
        id: 1,
        startTime: "2023-01-12T20:00:00.000+01:00",
        endTime: "2023-01-12T21:00:00.000+01:00",
        firstName: "Mateusz",
        lastName: "Karaś",
        contact: "mateusz.karas@soldoutagency.com",
        empid: 1,
        deptid: 1,
        department: {
          id: 1,
          name: "Studio 1",
          street: "Ludwika Rydygiera 8",
          postalCode: "01-793",
          city: "Warsaw",
          hourRate: 80,
          contact: "kontakt@nobocoto.pl",
        },
      },
      {
        id: 3,
        startTime: "2023-02-22T16:30:00.000+01:00",
        endTime: "2023-02-22T18:30:00.000+01:00",
        firstName: "Michał",
        lastName: "Matczak",
        contact: "mata@gmail.com",
        empid: 1,
        deptid: 2,
        department: {
          id: 2,
          name: "Studio B",
          street: "gen. Sylwestra Kaliskiego 15A",
          postalCode: "01-476",
          city: "Warsaw",
          hourRate: 30,
          contact: "kontakt@nobocoto.pl",
        },
      },
    ],
  },
  {
    id: 2,
    firstName: "Michał",
    lastName: "Wróblewski",
    specialisation: "Mixing engineer",
    hourRate: 80,
    contact: "wroobel@nobocoto.pl",
    employments: [
      {
        id: 2,
        startTime: "2023-04-11T18:00:00.000+01:00",
        endTime: "2023-04-11T20:00:00.000+01:00",
        firstName: "Adrian",
        lastName: "Nowak",
        contact: "adi.nowak@gmail.com",
        empid: 2,
        deptid: 1,
        department: {
          id: 1,
          name: "Studio A",
          street: "gen. Sylwestra Kaliskiego 15A",
          postalCode: "01-476",
          city: "Warsaw",
          hourRate: 60,
          contact: "kontakt@nobocoto.pl",
        },
      },
    ],
  },
  {
    id: 3,
    firstName: "Jonathan 'DJ Johny'",
    lastName: "Łoś",
    specialisation: "Mastering engineer",
    hourRate: 120,
    contact: "djjohny@nobocoto.pl",
    employments: [],
  },
];
