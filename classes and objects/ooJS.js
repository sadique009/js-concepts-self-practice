// what is object literal?
// object literal is simply a key:value pair data str.

let person = {
  firstName: "msn",
  lastName: "mna",
  getName: function () {
    console.log(
      `my first name is ${person.firstName} and my last name is ${person.lastName}`
    );
  },

  // the above fn can also be written like this:
  getName() {
    console.log(
      `my first name is ${person.firstName} and my last name is ${person.lastName}`
    );
  },
};
person.getName(); // calling the fn which is inside the object.
