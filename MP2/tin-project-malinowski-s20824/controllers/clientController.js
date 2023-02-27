const ClientRepository = require("../repository/sequelize/ClientRepository");

exports.showClientList = (req, res, next) => {
  ClientRepository.getClients().then((clients) => {
    res.render("pages/client_/list", {
      clients: clients,
      navLocation: "clients",
    });
  });
};

exports.showAddClientForm = (req, res, next) => {
  res.render("pages/client_/form", {
    client_: {},
    pageTitle: "New client",
    formMode: "createNew",
    btnLabel: "Add client",
    formAction: "/clients/add",
    navLocation: "clients",
  });
};

exports.showClientDetails = (req, res, next) => {
  const clientId = req.params.clientId;

  ClientRepository.getClientById(clientId).then((client) => {
    res.render("pages/client_/form", {
      client_: client,
      pageTitle: "show Details",
      formMode: "showDetails",
      formAction: "",
      navLocation: "clients",
    });
  });
};

exports.showEditClientForm = (req, res, next) => {
  const clientId = req.params.clientId;
  ClientRepository.getClientById(clientId).then((client) => {
    res.render("pages/client_/form", {
      client_: client,
      pageTitle: "Edit client",
      formMode: "edit",
      btnLabel: "Edit client",
      formAction: "/clients/edit",
      navLocation: "clients",
    });
  });
};

exports.addClient = (req, res, next) => {
  const clientData = { ...req.body };

  ClientRepository.createEmployee(clientData).then((result) => {
    res.redirect("/clients");
  });
};

exports.updateClient = (req, res, next) => {
  const clientId = req.body.clientId;
  const clientData = { ...req.body };

  ClientRepository.updateClient(clientId, clientData).then((result) => {
    res.redirect("/clients");
  });
};

exports.deleteClient = (req, res, next) => {
  const clientId = req.params.clientId;

  ClientRepository.deleteClient(clientId).then(() => {
    res.redirect("/clients");
  });
};
