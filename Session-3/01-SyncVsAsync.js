console.log("first Statement");
console.log("second Statement");

// Async Function
setTimeout(() => {
  var sum = 0;
  for (var i = 0; i < 10000000000; i++) {
    sum = sum + i;
  }
  console.log(sum);
});

console.log("third Statement");

let stop = setInterval(() => {
   console.log("Hello friends") 
}, 3000);

btn.onlclick =  clearInterval(stop)