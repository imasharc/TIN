const sequelize = require("./sequelize");

const Employee = require("../../model/sequelize/Employee");
const Project = require("../../model/sequelize/Project");
const Client = require("../../model/sequelize/Client");

module.exports = () => {
  Employee.hasMany(Project, {
    as: "projects",
    foreignKey: { name: "idOfEmp", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Project.belongsTo(Employee, {
    as: "employee",
    foreignKey: { name: "idOfEmp", allowNull: false },
  });
  Client.hasMany(Project, {
    as: "projects",
    foreignKey: { name: "idOfClient", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  Project.belongsTo(Client, {
    as: "client",
    foreignKey: { name: "idOfClient", allowNull: false },
  });

  let allEmps, allClients;
  return sequelize
    .sync({ force: true })
    .then(() => {
      return Employee.findAll();
    })
    .then((emps) => {
      if (!emps || emps.length == 0) {
        return Employee.bulkCreate([
          {
            firstName: "Brendan",
            lastName: "Eich",
            email: "brendan.eich@sharecon.com",
            role: "Senior JavaScript Developer",
          },
          {
            firstName: "Linus",
            lastName: "Torvalds",
            email: "linus.torvalds@sharecon.com",
            role: "Senior System Engineer",
          },
          {
            firstName: "Richard",
            lastName: "Hendricks",
            email: "richard.hendricks@sharecon.com",
            role: "Senior Network Engineer",
          },
        ]).then(() => {
          return Employee.findAll();
        });
      } else {
        return emps;
      }
    })
    .then((emps) => {
      allEmps = emps;
      return Client.findAll();
    })
    .then((clients) => {
      if (!clients || clients.length == 0) {
        return Client.bulkCreate([
          {
            firstName: "Mark",
            lastName: "Nadal",
            email: "mark@gun.eco",
            company: "GUN",
          },
          {
            firstName: "Antoni",
            lastName: "Malinowski",
            email: "antoni.malinowski@sharecon.com",
            company: "ShaReCon",
          },
        ]).then(() => {
          return Employee.findAll();
        });
      } else {
        return clients;
      }
    })
    .then((projects) => {
      if (!projects || projects.length == 0) {
        return Project.bulkCreate([
          {
            projectName: "Node storage optimization",
            startDate: "2026-06-20",
            deadline: "2026-10-19",
            budget: 2200,
            idOfClient: allClients[1],
            idOfEmp: allEmps[3],
          },
          {
            projectName: "File sharing infrastructure",
            startDate: "2023-03-10",
            deadline: "2023-06-05",
            budget: 13500,
            idOfClient: allClients[2],
            idOfEmp: allEmps[3],
          },
          //   {
          //     idOfClient: allClients[1],
          //     idOfEmp: allEmps[3],
          //     projectName: "Node storage optimization",
          //     startDate: "2026-06-20",
          //     deadline: "2026-10-19",
          //     budget: 2200,
          //   },
          //   {
          //     idOfClient: allClients[2],
          //     idOfEmp: allEmps[3],
          //     projectName: "File sharing infrastructure",
          //     startDate: "2023-03-10",
          //     deadline: "2023-06-05",
          //     budget: 13500,
          //   },
        ]);
      } else {
        return projects;
      }
    });
};
