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
      formAction: "/employees/edit",
      navLocation: "emp",
    });
  });
};

exports.addEmployee = (req, res, next) => {
  const empData = { ...req.body };
  console.log(req.body.firstName);

  EmployeeRepository.createEmployee(empData).then((result) => {
    res.redirect("/employees");
  });
};

exports.updateEmployee = (req, res, next) => {
  const empId = req.body.empId;
  const empData = { ...req.body };
  // console.log(req.body.firstName);
  EmployeeRepository.updateEmployee(empId, empData).then((result) => {
    res.redirect("/employees");
  });
};

exports.deleteEmployee = (req, res, next) => {
  const empId = req.params.empId;
  EmployeeRepository.deleteEmployee(empId).then(() => {
    res.redirect("/employees");
  });
};
