let person = {
    name: "John",
    age: 30,
    city: "New York",
    address:{fno:123, street:"abc", pincode:132323},
    hobbies:["Painting", "music", "Gardening"],
    display:function(){
        console.log("This is an Object's function")
    }
}

// destructure Object

let { name, age, city, address} = person

console.log(name )
console.log(age)
console.log(city)
console.log(address)


let arr  = [10,20,30,40,50]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]
// let e = arr[4]

// Selective array destruturing
let [a,b,,,e] = arr
console.log(a,b,e)