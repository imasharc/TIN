exports.showEmployeeList = (req, res, next) => {
  res.render("pages/employee/list", { navLocation: "emp" });
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
