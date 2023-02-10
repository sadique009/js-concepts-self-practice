// in js, we have: -

// 1. creation phase.
// 2. execution phase.

// hoisting in js is a mechanism through which variable and fn declarations
// are moved to the top of their scope before the code executes.
// only declarations or definitions are hoisted, and NOT assignment.

a = 5;
console.log(a); // o/p = 5
var a;

// to prevent hoisting, use "let" or "const".
b = 5;
console.log(a);
let b;

// declaration and initialization should be done at the same time in "const".
const c = 5;
console.log(c); // o/p = 5

