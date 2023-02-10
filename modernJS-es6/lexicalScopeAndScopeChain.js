// the scope chain is used to resolve the value of var names in js.
// it is lexically defined, which means that we can see what the scope chain will be,
// by looking at the code.
// at the top, we have the global scope, which is the "window" obj in the browser.
// lexical scoping means that the inner fn can get access to their parent fn's vars,
// but vice-versa is not true.

// EXAMPLE-1:-

let a = "hello guys. "; // global scope

const first = () => {
  let b = "how r u? ";

  const second = () => {
    let c = "i'm fine, thanks!";
    console.log(a + b + c);
    // console.log(`${a + b + c}`);
  };
  second();
  console.log(a + b + c); // this gives error, as "c" has block level scope.
};
first();
