// What are different types of Function 

// ES5
// 1. Named Function
function sayhello(){
    console.log("This is Named function")
}

// 2. Anonymous Function
let myFun = function(){
    console.log("This is an Anonymous Function")
}

// 3. Arrow Function in ES6
let sum = x=> x*x
console.log(sum(10))

let msg =()=> console.log("this is an Arrow function")
msg()

// this is a comment and uncomment ctrl + /

let arr = [10,"20",true,[40,20],{x:10, y:20}, function(){console.log("this is a function in an arrar")}]
let arr1 = ["Pankaj","Manish","Aarti","Ruchi","Kamal"]
// callback: when a function is passed as argument
// for each is used to iterate over the arr
arr.forEach(i=>console.log(i))

let newarr = arr1.map((i)=>("Hi "+i))
console.log(newarr)
console.log(typeof(newarr))

arr[arr.length-1]();






