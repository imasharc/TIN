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
  res.render("pages/employee/form", {
    emp: {},
    pageTitle: "New employee",
    formMode: "createNew",
    btnLabel: "Add employee",
    formAction: "/employees/add",
    navLocation: "emp",
  });
};

exports.showEmployeeDetails = (req, res, next) => {
  const empId = req.params.empId;
  EmployeeRepository.getEmployeeById(empId).then((emp) => {
    res.render("pages/employee/form", {
      emp: emp,
      pageTitle: "showDetails",
      formMode: "showDetails",
      formAction: "",
      navLocation: "emp",
    });
  });
};

exports.showEditEmployeeForm = (req, res, next) => {
  const empId = req.params.empId;
  EmployeeRepository.getEmployeeById(empId).then((emp) => {
    res.render("pages/employee/form", {
      emp: emp,
      pageTitle: "Edit employee",
      formMode: "edit",
      btnLabel: "Edit employee",
      formAction: "/employee/edit",
      navLocation: "emp",
    });
  });
};
