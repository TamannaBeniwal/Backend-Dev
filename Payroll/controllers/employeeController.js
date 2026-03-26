const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/employees.json");

const readEmployees = () => {
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, "[]");
    }
    return JSON.parse(fs.readFileSync(dataPath));
};

const writeEmployees = (employees) => {
    fs.writeFileSync(dataPath, JSON.stringify(employees, null, 2));
};

exports.getEmployees = (req, res) => {
    const employees = readEmployees();
    res.render("employees/list", { employees });
};

exports.addEmployeeForm = (req, res) => {
    res.render("employees/form");
};

exports.addEmployee = (req, res) => {
    const employees = readEmployees();

    const newEmployee = {
        id: Date.now().toString(),
        ...req.body
    };

    employees.push(newEmployee);
    writeEmployees(employees);

    res.redirect("/");
};

exports.editEmployeeForm = (req, res) => {
    const employees = readEmployees();
    const employee = employees.find(emp => emp.id === req.params.id);

    if (!employee) {
        return res.send("Employee not found");
    }

    res.render("employees/edit", { employee });
};

exports.updateEmployee = (req, res) => {
    const employees = readEmployees();
    const index = employees.findIndex(emp => emp.id === req.params.id);

    if (index === -1) {
        return res.send("Employee not found");
    }

    employees[index] = {
        ...employees[index],
        ...req.body
    };

    writeEmployees(employees);
    res.redirect("/");
};

exports.deleteEmployee = (req, res) => {
    const employees = readEmployees();
    const updatedEmployees = employees.filter(emp => emp.id !== req.params.id);

    writeEmployees(updatedEmployees);
    res.redirect("/");
};