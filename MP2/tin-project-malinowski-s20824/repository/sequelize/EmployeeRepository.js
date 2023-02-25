const Employee = require("../../model/sequelize/Employee");
const Project = require("../../model/sequelize/Project");
const Client = require("../../model/sequelize/Client");

exports.getEmployees = () => {
  return Employee.findAll();
};

exports.getEmployeeById = (empId) => {
  return Employee.findByPk(empId, {
    include: [
      {
        model: Project,
        as: "projects",
        include: [
          {
            model: Client,
            as: "clients",
          },
        ],
      },
    ],
  });
};

exports.createEmployee = (newEmpData) => {
  return Employee.create({
    firstName: newEmpData.firstName,
    lastName: newEmpData.lastName,
    email: newEmpData.email,
    role: newEmpData.role,
  });
};

exports.updateEmployee = (empId, empData) => {
  const firstName = empData.firstName;
  const lastName = empData.lastName;
  const email = empData.email;
  const role = empData.role;
  return Employee.update(empData, { where: { empId: empId } });
};

exports.deleteEmployee = (empId) => {
  return Employee.destroy({
    where: { empId: empId },
  });
};
