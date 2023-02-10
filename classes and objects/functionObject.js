// fns are also objects in js.
function printText() {
  console.log("hello");
}
printText.areYouAnObject = true; // here, we have created a property on our own.

// we can define fns inside objects as well.
var a = 2;
let person = {
  firstName: "msn",
  lastName: "mna",
  getName: function () {
    // this is the method of the object.
    // console.log(this);
    return this.firstName + " and " + this.lastName; // "this" points to the "person" object itself.
  },
};
// at the gec level, "this" points to the window object.
// console.log(this.a);
// console.log(person.getName());

function greetPerson(greeting) {
  console.log(greeting, this.getName());
}

function greetPerson2() {
  return("namaste", this.getName());
}
// greetPerson();

// 1. bind.
// it creates a new copy of the fn that we are calling "bind" on.
greetPerson2.bind(person);


// 2. call.
// it doesn't create any new copy.
greetPerson.call(person, "hola"); // here, person is the value of "this".

// 3. apply.
// the difference between "apply" and "call" is that "apply" accepts the values of parameter as an array.
// whereas "call" accepts those values in the form of string.
greetPerson.apply(person, ["hello"]);

// arguments.{it is a special object available implicitly within each fn.}
function sum() {
  let total = 0;
  for (let index = 0; index < arguments.length; index++) {
    total += arguments[index];
  }
  console.log(arguments);
  return total;
}
// console.log(sum(2,3,4,5));

// function borrowing.
let doctor = {
  firstName: "jon",
  lastName: "doe",
};

console.log(person.getName.call(doctor));

// function currying. changing the behaviour of existing fn using the "bind" method and reusing the new functionality.
function logData(date, data) {
  console.log(date, data);
}
logData(new Date(), "this is data to be logged!");

let logNow = logData.bind(null, new Date()); // here, we are fixing the value of 2nd param {"second"}.
logNow("this is another info to be logged!");
logNow("some new data to be logged");

// closures.{this can also be an example of function currying}
function add(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}

let add5With = add(5);
console.log(add5With(2));
console.log(add5With(7));

//the above can also be written as:
// console.log(add(5)(2));
// console.log(add(5)(7));
// console.log(add(6)(9));

// default values for params.
function print(text = "devsnest") {
  console.log(text);
}
print();
print("msn"); // this will override the preset value of "text".
