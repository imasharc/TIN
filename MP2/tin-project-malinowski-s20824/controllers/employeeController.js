const EmployeeRepository = require("../repository/sequelize/EmployeeRepository");

exports.showEmployeeList = (req, res, next) => {
  EmployeeRepository.getEmployees().then((emps) => {
    res.render("pages/employee/list", {
      emps: emps,
      navLocation: "emp",
    });
  });
};

exports.showAddEmployeeForm = (req, res, next) => {
  res.render("pages/employee/form", { navLocation: "emp" });
};

exports.showEmployeeDetails = (req, res, next) => {
  res.render("pages/employee/details", { navLocation: "emp" });
};

exports.showEditEmployeeForm = (req, res, next) => {
  res.render("pages/employee/form-edit", { navLocation: "emp" });
};
