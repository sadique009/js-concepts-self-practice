// gec {global execution context} has access to 3 things.
// 1. global object.
// 2. this.
// 3. reference to outer env.

// function printMe() {
//   var a = 2;
//   console.log(a);
// }
// printMe();
// console.log(a);

// hoisting.
console.log(someVar); // this will initialize the value of "someVar" to undefined.
someFunction(); // function calling.

function someFunction() {
  console.log("from someFunction ", someVar);
}
var someVar = "devsnest"; // variable dec.
console.log(someVar);
someFunction();

// the above code executes in 2 phases.{after gec is created and inside it, the code runs.}
// 1. creation phase.
// loads fns and variables in memory and initially set them to "undefined"{if their value is not set initially}.

// 2. execution phase.
// executes the statements line by line.
// after executing the fn, its execution context is popped out of the stack.

// whenever a fn is created, a new execution context is created.{apart from the gec}.

var myName = "msn";
function printName() {
  console.log(myName);
  printAnotherName();
}

// example of scope chaining.
function printAnotherName() {
  // each fn can be considered a separate lexical scope.
  var myName = "john";
  console.log(myName);
  printSomeotherName();

  // nested function.
  function printSomeotherName() {
    // var myName = "sam";
    console.log(myName); //myName is not initialized a value here. so this function tries to look for its value in its parent fn.
  }
}

console.log(myName); // this is printed first.
printName(); // this is run second.
