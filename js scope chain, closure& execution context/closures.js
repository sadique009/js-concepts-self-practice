// functions are first class fns.
// i.e. they can be passed as parameters to other fns, can be used as a data type,
// they can return another fns.

// closures.
// closures are a combination of a fn bundled together (enclosed) with references,
// to its surrounding state.
// in other words, a closure gives us the access to an outer fn's scope from an inner fn.
// in js, closures are created every time a fn is created, at the fn creation time.

// EXAMPLE-1:- (DEVSNEST)

function add(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}

let addWith = add(5);
console.log(addWith(2));
console.log(addWith(7));

// EXAMPLE-2:- (MDN)

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    var name = "firefox";
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// EXAMPLE-3:- (THAPA)

const outerFn = (a) => {
  let b = 10;
  const innerFn = () => {
    let sum = a + b;
    console.log(`sum of the above two is ${sum}`);
  };
  innerFn();
};
outerFn(5);

// same as above but with some variations.

const outerFn1 = (a) => {
  let b = 10;
  const innerFn1 = () => {
    let sum = a + b;
    console.log(`sum of the above two is ${sum}`);
  };
  // return innerFn1;
  return innerFn1();
};
let checkClosure = outerFn1(5);
console.dir(checkClosure);

