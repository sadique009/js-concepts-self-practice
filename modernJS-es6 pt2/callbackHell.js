// strict mode.
// while using strict mode, it is necessary to mention the data type of variable.

// "use strict";

// x = 5;
// console.log(x); // gives error.

let x = 5;
console.log(x); // works fine.


// callback hell.
// it is a phenomenon which happens when we nest multiple callbacks within a fn.

setTimeout(() => {
  console.log("work 1 is done!");
  setTimeout(() => {
    console.log("work 2 is done!");
    setTimeout(() => {
      console.log("work 3 is done!");
      setTimeout(() => {
        console.log("work 4 is done!");
        setTimeout(() => {
          console.log("work 5 is done!");
          setTimeout(() => {
            console.log("work 6 is done!");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
