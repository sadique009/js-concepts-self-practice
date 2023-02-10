// js is a synchronous, single threaded language.

// sync eg.

function f2() {
  console.log("f2 is called");
}
function f1() {
  console.log("f1 is called");
  f2();
  console.log("f1 is called again.");
}
f1();

// async eg.

function fn2() {
  setTimeout(() => {
    console.log("fn2 is called");
  }, 2000);
}
function fn1() {
  console.log("fn1 is called");
  fn2();
  console.log("fn1 is called again.");
}
fn1();
