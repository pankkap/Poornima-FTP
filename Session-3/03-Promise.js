// Promise: It is an Object which give a future value not now. 
// It is used for Asynchronous function
// It  is a way of communication with API
// Promise has three states: Pending, Fullfilled, and Rejected

let sayhello = ()=>{
    return new Promise((resolve, reject)=>{

        if(false){          // API Call
            resolve('Msg: Promise Fullfilled')
        }
        else
        {
            reject("Msg:Sorry! Pormise Rejected ")
        }
    })
}
sayhello()
.then(res=>console.log(res))
.catch(err=>console.log(err))
