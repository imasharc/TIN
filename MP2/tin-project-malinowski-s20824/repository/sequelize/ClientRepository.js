const Employee = require("../../model/sequelize/Employee");
const Project = require("../../model/sequelize/Project");
const Client = require("../../model/sequelize/Client");

exports.getClients = () => {
  return Client.findAll();
};

exports.getClientById = (empId) => {
  return Client.findByPk(empId, {
    include: [
      {
        model: Project,
        as: "projects",
        include: [
          {
            model: Employee,
            as: "employee",
          },
        ],
      },
    ],
  });
};

exports.createClient = (newClientData) => {
  return Client.create({
    firstName: newClientData.firstName,
    lastName: newClientData.lastName,
    email: newClientData.email,
    company: newClientData.company,
  });
};

exports.updateClient = (client_id, clientData) => {
  const firstName = clientData.firstName;
  const lastName = clientData.lastName;
  const email = clientData.email;
  const company = clientData.company;
  return Client.update(clientData, { where: { clientId: client_id } });
};

exports.deleteClient = (client_id) => {
  return Client.destroy({
    where: { clientId: client_id },
  });
};
