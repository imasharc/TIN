exports.showClientList = (req, res, next) => {
  res.render("pages/client_/list", { navLocation: "clients" });
};

exports.showAddClientForm = (req, res, next) => {
  res.render("pages/client_/form", { navLocation: "clients" });
};

exports.showClientDetails = (req, res, next) => {
  res.render("pages/client_/details", { navLocation: "clients" });
};

exports.showEditClientForm = (req, res, next) => {
  res.render("pages/client_/form-edit", { navLocation: "clients" });
};
