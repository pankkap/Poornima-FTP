"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.special_variable = exports.Person = void 0;
class Person {
    constructor(emp_name, emp_salary, emp_code) {
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
        this.emp_code = emp_code;
        this.emp_name = emp_name;
        this.emp_code = emp_code;
        this.emp_salary = emp_salary;
    }
    changeSalary(amt) {
        this.emp_salary += amt;
        console.log("Salary:", this.emp_salary);
    }
}
exports.Person = Person;
exports.special_variable = "Important Note";
