// currying.
// fn currying is a technique of evaluating fn with multiple args,
// into sequence of fn with a single argument.
// in other words, when a fn, instead of taking all args at one time,
// takes the 1st one and returns a new fn that takes the 2nd one,
// and returns a new fn which in turn takes the 3rd one, and so on,
// until all the args have been fulfilled, is called fn currying.
// 2 ways to achieve fn currying:-
// a. by using bind() fn.
// b. by using fn closures.

// EXAMPLE-1:- (THAPA)

function sum(num1) {
  //   console.log(num1);
  // below is annonymous fn.
  return function (num2) {
    // console.log(num1, num2);
    return function (num3) {
      // console.log(num1, num2, num3);
      console.log(num1 + num2 + num3);
    };
  };
}
sum(5)(3)(8);

// the above code can be written in a single line as:
const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum1(5)(3)(8);

// EXAMPLE-2:- (AKSHAY)
// using bind().
function multiply(x, y) {
  console.log(x * y);
}
let mulBy2 = multiply.bind(this, 2);
mulBy2(3);

let mulBy3 = multiply.bind(this, 3);
mulBy3(5);

// using closures.
function multiply2(x) {
  return function multiply3(y) {
    console.log(x * y);
  };
}

let multBy2 = multiply2(2);
multBy2(3);

let multBy3 = multiply2(3);
multBy3(5);
