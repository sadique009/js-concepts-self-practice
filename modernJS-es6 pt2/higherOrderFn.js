// higher order fn (HOFn) is a fn which takes another fn as parameter.

// whereas callback fn is a fn which is passed as a parameter to another fn,
// to be "called back" later.

// EXAMPLE-1:-

// these are the callback fns, since they are being passed as parameter below.
const add = (a, b) => {
  return a + b;
};
// console.log(add(5, 2));

const sub = (a, b) => {
  return a - b;
};
// console.log(sub(5, 2));

const mult = (a, b) => {
  return a * b;
};
// console.log(mult(5, 2));

const div = (a, b) => {
  return a / b;
};
// console.log(div(5, 2));

// this is the HOFn.
const calc = (num1, num2, operation) => {
  return operation(num1, num2);
};

// this is the HOFn, since its accepting other fns as parameters.
console.log(calc(5, 2, add));
console.log(calc(5, 2, sub));
console.log(calc(5, 2, mult));
console.log(calc(5, 2, div));
