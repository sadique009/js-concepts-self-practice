// js nuggets by john smilga
// conversion of objects into arrays.

// 3 methods to convert objects into arrays.
// object.keys()- converts property names (keys) into array.
// Object.values()- converts property values into Array.
// object.entries()- converts both.

const person = {
  name: "john",
  age: 25,
  status: "student",
};

let keys = Object.keys(person);
console.log(keys);

let keys1 = Object.values(person);
console.log(keys1);

const keys2 = Object.entries(person);
console.log(keys2);

// iterating using map.
const newResult = keys2.map((item) => {
  // console.log(item);
  // we can destructure keys and values from the keys2 array.
  // we can give any name to the destructured array.

  const [first, second] = item;

  return item;

  // this returns only the keys.
  return first;
  // this returns only the values.
  return second;

  // this gives only the values and not keys.
  return first, second;
});
console.log(newResult);

// iterating using "for of" loop.
// this does not return an array.
for (const [first, second] of keys2) {
  // for (const item of keys2) {

  // by using for of loop, we can skip this line entirely.
  //   const [first, second] = item;
  console.log(first, second);
}
