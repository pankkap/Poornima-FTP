// ES6 way of handling class and Obejct
class Employee {
    constructor(name, age) {
        // data Member
        this.name = name
        this.age = age
    }
        //  Member functions
        showData = function () {
            console.log(this.name, this.age)
        }
    
}
var emp1 = new Employee("Pankaj", 30)
var emp2 = new Employee()
emp1.showData()
emp2.showData()