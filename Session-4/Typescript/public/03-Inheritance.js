"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_class_1 = require("./02-class");
class Poornima extends _02_class_1.Person {
    constructor(name, salary, code, wfh) {
        super(name, salary, code);
        this.Emp_wfh = wfh;
    }
    displayDetails() {
        super.changeSalary(2000);
        console.log(`Name: ${this.emp_name}\nCode: ${this.emp_code}`);
    }
}
let poornima_obj = new Poornima("Rahul", 13000, 102, true);
poornima_obj.displayDetails();
