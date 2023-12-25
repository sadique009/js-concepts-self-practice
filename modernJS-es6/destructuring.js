// object destructuring.
let anotherPerson = {
  first: "foo",
  last: "bar",
  address: {
    city: "pune",
    state: "maharashtra",
  },
};

console.log(anotherPerson.last); // before destructuring approach.

// using destructuring approach.
let {first, last, address:{state}}=anotherPerson;
console.log(state);

// we can destructure nested objects also, in addition to normal objects.
// let {
//   first,
//   last,
//   address: { city },
// } = anotherPerson; // here, we are extracting "first" and "last" and "city"  from the above object.
// console.log(first, city, last);

// array destructuring.
const fruits = ["apple", "banana", "kiwi"];
// console.log(fruits[0]);

// let fr1 = fruits[0];
// let fr2 = fruits[1];
// let fr3 = fruits[2];

// const [, , kiwi] = fruits;
// console.log(`coming from destructured array! ${kiwi}`);

// take care of positioning.
// let [fr1, fr2, fr3] = fruits;
// console.log(fr1, fr2, fr3);

// we can add values also.
let [fr1, fr2, fr3, fr4 = "coconut"] = fruits;
console.log(fr1, fr2, fr3, fr4);

// alias in destructuring.
let { first: names } = anotherPerson;
console.log("aliased as name", names);
