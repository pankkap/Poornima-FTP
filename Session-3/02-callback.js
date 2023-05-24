let students = [
    {name:"Manish", course:"Btech" },
    {name:"Sachin", course:"MBA" },
]
let newStudent =  {name:'Swati', course:'BCA'}

function admitStudent(newStudent, displayStudents){
   setTimeout(() => {
    students.push(newStudent)
    console.log("Student Admitted")

    displayStudents()
   }, 2000);
}

function displayStudents()
{
 setTimeout(() => {
    var str = ""
    students.map(stu => {
        str = str + stu.name + " "
    });
    console.log(str)
 }, 1000);
}

// Function calls using callback
admitStudent(newStudent,displayStudents)



