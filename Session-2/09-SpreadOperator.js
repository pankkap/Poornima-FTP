let arr1 = [1,2,3] 
let arr2 = [4,5,6] 

// let combine = arr1.concat(arr2)
// Spread operator unpacking the data

let combine = [...arr1, ...arr2]
console.log(combine)


function sum(x,y,z)
{
    console.log(x,y,z)
}

sum(...arr1)
