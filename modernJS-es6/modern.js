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

// destructuring.
let anotherPerson = {
  first: "foo",
  last: "bar",
  address: {
    city: "pune",
    state: "maharashtra",
  },
};

// we can also destructure nested objects also.
let {
  first,
  last,
  address: { city },
} = anotherPerson; // here, we are extracting "first" and "last" and "city"  from the above object.
console.log(first, city, last);

// we can destructure arrays as well.
const fruits = ["apple", "banana", "kiwi"];
console.log(fruits[0]);

const [, , kiwi] = fruits;
console.log(`coming from destructured array! ${kiwi}`);

// alias in destructuring.
let { first: names } = anotherPerson;
console.log("aliased as name", names);

// rest operator -> ...=> this is called ellipsis notation.
const { first: namess, ...rest } = anotherPerson;
console.log(namess, rest);

const [apple, ...rem] = fruits;
console.log(apple, rem);

// spread operator.
const someMoreFruits = ["guava", "mango", "peach"];
const moreFruits = [...fruits, ...someMoreFruits];
console.log(moreFruits);

console.log({ ...anotherPerson.address, country: "india" });

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
