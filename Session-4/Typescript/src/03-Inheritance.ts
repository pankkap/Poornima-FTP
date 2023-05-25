import {Person, special_variable} from './02-class'


class Poornima extends Person
{
    Emp_wfh:boolean
    constructor(name:string, salary:number, code:number|string , wfh:boolean)
    {
        super(name, salary, code)
        this.Emp_wfh = wfh
    }
    displayDetails(): void {
            super.changeSalary(2000)
            console.log(`Name: ${this.emp_name}\nCode: ${this.emp_code}`)
    }
}


let poornima_obj = new Poornima("Rahul", 13000, 102, true)
poornima_obj.displayDetails()