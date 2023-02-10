// 1. object literal syntax. most preferable way.
let person = {
  first: "jon",
  last: "doe",
};
// console.log(person);

// 2. using the "object" keyword.
let another = new Object();
another.first = "jon";
another.last = "doe";
// console.log(another);

// 3. using function constructor.
function Person(first, last) {
  this.first = first;
  this.last = last;
}
// creating object using the above fn constructor.
// the prototype for the below two objects is the "person" object.
let otherName = new Person("jane", "doe");
// console.log(otherName);

let myName = new Person("msn", "mna");
// console.log(myName);

// prototypal inheritence in js.
// prototype is a special object which itself has a prototype.
Person.prototype.printName = function () {
  return this.first + " " + this.last;
};
console.log(otherName.printName());
console.log(myName.first);

// prototypal inheritence.
// we can extend the prototype at any given level.
let firstSet = [1, 2, 3, 4, 5, 6];
let secondSet = [7, 8, 9, 10, 11, 12];
// console.log(firstSet, secondSet);

Array.prototype.evenNo = function () {
  return this.filter(function (item) {
    return item % 2 === 0;
  });
};

Array.prototype.oddNo = function () {
  return this.filter(function (item) {
    return item % 2 != 0;
  });
};

console.log(firstSet.evenNo());
console.log(secondSet.evenNo());

// console.log(firstSet.oddNo());
// console.log(secondSet.oddNo());

Array.prototype.filter = function () {};

// call by value && call by ref.
// primitive data types are "passed by value".
// variables are having separate memory locations.
a = 2;
b = a;
a = 4;
b = a;

// non-primitive data types are "passed by ref".
// variables are having "reference" to the same memory locaion.
a = { firstName: "jon" };
b = a;

// 4. Object.create method.
// pure prototypal inheritence.
let org = { org: "devsnest" };
let persons = Object.create(org, { name: { value: "foo" } });

console.log(persons);
org.location = "new delhi";
console.log(org);

// some built-in functions for Object.
console.log(Object.hasOwn(persons, "name")); // since the "name" property has been defined on the object "person", it gives "true".
console.log(Object.hasOwn(persons, "location")); // since the "location" has been defined on the "prototype", it is not its own property, hence it gives "false".

// Object.assign()..allows us to merge multiple objects together.
// but it does not consider the properties coming from the prototype.
let someP = { name: "gaurav" };
let carP = { car: "someCar" };
console.log(Object.assign({}, someP, carP));

console.log(Object.assign({}, persons, { car: "bmw" }));

// 5. create object using class.
class Shape {
  constructor(height, width) {
    this.h = height; //here, this.h is a property.
    this.w = width; //here, this.w is a property.
  }
  // this is a method.
  area() {
    return this.h * this.w;
  }
}

let rect = new Shape(10, 20);
// console.log(rect.area());

class Square extends Shape {
  // here, prototype of Square is Shape.
  constructor(dim) {
    super(dim, dim);
  }
}
console.log(new Square(10).area());

// window represents the visible portion of a user's screen
// document refers to the entire content of the page.
