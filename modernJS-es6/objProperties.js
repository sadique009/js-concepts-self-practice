// we can now add and use dynamic properties and data, inside objects,
// using the [] braces.

let myName1 = "msn";
let myAge1 = 26;
const bio = {

  // myName1 will be assigned the value "msn" here.
  [myName1]: "hello, how r u?",
  [myAge1]: "is my age",

  [20 + 6]: "is my age.", // this is a valid stmt.
  //   20+6:"is my age."; // this is an invalid stmt.
};
console.log(bio);

// no need to write key and value, if both are same.

let myName = "msn";
let myAge = 24;

const myBio = {
  myName1: myName,
  myAge1: myAge,
  //   fn() {
  //     console.log(myName);
  //   },
};

// const myBio = {
//   myName,
//   myAge,
// };

// both of the above examples are same.
console.log(myBio);
// console.log(myName);
// console.log(myAge);
