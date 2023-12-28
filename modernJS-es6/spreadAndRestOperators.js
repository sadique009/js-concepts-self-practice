// devsnest lecs
// revised 1,
// the spread operator is used to 'spread' or distrubute array values into many arguments.
// The rest operator meanwhile takes the arguments of a function and condenses it into a single array.
// The rest operator is essentially the opposite of the spread operator.
// It collects multiple elements into an array.This is useful if you don’t know how many arguments a function may receive,
// and you want to capture all of them as an array.
let anotherPerson = {
  first: "foo",
  last: "bar",
  address: {
    city: "pune",
    state: "maharashtra",
  },
};

const fruits = ["apple", "banana", "kiwi"];

// rest operator -> ...=> this is called ellipsis notation.
// after 3 dots, we can give any name.
const { first: namess, ...rest } = anotherPerson;
console.log(namess, rest);

const [apple, ...rem] = fruits;
console.log(apple, rem);

// spread operator.
const someMoreFruits = ["guava", "mango", "peach"];
const moreFruits = [...fruits, ...someMoreFruits];
console.log(moreFruits);

console.log({ ...anotherPerson.address, country: "india" });

const colors = ["red", "green", "blue", "yellow"];

// without using spread operator.
const colors2 = ["red", "green", "blue", "yellow", "magenta", "violet"];

// using spread operator.
const colors3 = [...colors, "magenta", "violet"];
console.log(colors3);
