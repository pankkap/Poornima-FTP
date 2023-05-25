export abstract class Person{
    // properties
    // public emp_name:string            // public
    // private emp_salary:number         // private
    // protected emp_code:number|string 

    constructor(public emp_name:string,private emp_salary:number,  protected emp_code:number|string )
    {
        this.emp_name = emp_name
        this.emp_code = emp_code
        this.emp_salary = emp_salary        
    }

    // methods
    abstract displayDetails():void
    changeSalary(amt:number){
        this.emp_salary +=amt
        console.log("Salary:",this.emp_salary)
    }
}

// Objects
// let p1 = new Person("Sachin", 10000, 101)
// p1.displayDetails()
// p1.emp_name = "Manis Kumar"
// p1.emp_salary = 0
// p1.emp_code = 0




export let special_variable = "Important Note"

