// ES5-> we can create a variable using var
// var : it doesn't have block scope

for(let i=0;i<10;i++)
{
    console.log(i)
}
// console.log(i)


if(true)
{
    // var i = 10       // var is function | global scope
    let i = 10          // let is block scope availabe in ES6
    console.log(i)
}
console.log(i)


