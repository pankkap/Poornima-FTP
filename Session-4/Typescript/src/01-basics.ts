var New_name = "Pankaj"
// Data types in Typescript
// 1. Implicit
// 2. Explicit

// 1. Implicit
let Univ_name = "Poornima"
console.log(typeof(Univ_name))

// 2. Explicit
let Univ_location:string;
Univ_location = "jaipur"

let Univ_started:number;
let Univ_active:boolean;

let student_id:number | string;  
student_id = "123"
student_id = 123

let student_data:any;

// Array 

// Implicit
let hobbies = ["music", "singing"]
// hobbies.push(123)

// Explicit
let marks:(number|string)[]=[]; 


function add(x:number,y:number):number
{
    return x+y
}
add(5,10)







let msg1 = (name:string="no name"):void => console.log(`hi ${name}`)
let msg2 = (name?:string):void => console.log(`hello`)

msg1()
msg2()



