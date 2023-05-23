// Object is a Data Structure
// data is stored in Object in the form of key:value pair

let person = {
    name: "John",
    age: 30,
    city: "New York",
    addres:{fno:123, street:"abc", pincode:132323},
    hobbies:["Painting", "music", "Gardening"],
    display:function(){
        console.log("This is an Object's function")
    }
}
console.log(person)
console.log(typeof(person))