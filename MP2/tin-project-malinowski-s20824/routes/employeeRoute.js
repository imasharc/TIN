const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

// form display views
router.get("/", employeeController.showEmployeeList);
router.get("/add", employeeController.showAddEmployeeForm);
router.get("/details/:empId", employeeController.showEmployeeDetails);
router.get("/edit/:empId", employeeController.showEditEmployeeForm);

// business logic actions
router.post("/add", employeeController.addEmployee);
router.post("/add", employeeController.updateEmployee);
router.get("/delete/:empId", employeeController.deleteEmployee);

module.exports = router;
