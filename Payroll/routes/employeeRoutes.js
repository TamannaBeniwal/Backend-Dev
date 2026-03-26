const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");




// Show employees
router.get("/", employeeController.getEmployees);

router.get("/add", employeeController.addEmployeeForm);
router.post("/add", employeeController.addEmployee);



// Show edit form
router.get("/edit/:id", employeeController.editEmployeeForm);

// Update employee
router.post("/update/:id", employeeController.updateEmployee);

// Delete employee
router.post("/delete/:id", employeeController.deleteEmployee);

module.exports = router;