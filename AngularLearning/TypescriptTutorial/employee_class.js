var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.displayEmployeeDetails = function () {
        console.log(this.id + " " + this.name);
    };
    return Employee;
}());
var e1 = new Employee(102, "Champak Lal");
e1.displayEmployeeDetails();
