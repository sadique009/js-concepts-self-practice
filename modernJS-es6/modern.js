// template literal syntax {it replaces string concat}.
// we can combine strings, exps and so on in a single line.
const name1 = "msn";
const age = 28;
console.log(`my name is ${name1} and my age is ${age}`);

// shorthand property.
// let person = { firstName: name1, age: age };
let person = { name1, age }; // we can omit the key to make it short.
console.log(person);

let printMe = function () {
  console.log(this.name1, this.age);
};

let person1 = {
  name1,
  age,
  printMe() {
    console.log(this.name1, this.age);
  },
};
console.log(person1);


// arrow fn.
function sumArrow(num1, num2) {
  return num1 + num2;
}

let sumArrow1 = (num1, num2) => {
  num1 + num2;
};

// in case of arrow fns, we do not have access to arguments.

// optional chaining.
if (anotherPerson && anotherPerson.address && anotherPerson.address.city) {
  console.log(anotherPerson.address.city);
}

// shorter way to write the above code using optional chaining.
if (anotherPerson?.address?.city) {
  console.log(anotherPerson.address.city);
}

// nullish coalescing operator.
let age1 = person.age ?? 20; // if the value of "person.age" is null or undefined, then only the right-hand side value is assigned to it.
console.log(age1);
