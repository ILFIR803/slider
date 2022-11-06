// setTimeout(func, delay)

// function sayHello(){
//    console.log("Hello Ivan");
// }

// let timerId = setInterval(sayHello, 3000);
// clearInterval(timerId);

let timerId = setTimeout(function log(){
   alert("Hello");
   setTimeout(log, 2000);
});
