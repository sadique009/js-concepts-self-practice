let moneyLent = 10_000; // we can use underscore to format numbers, it is ifnored by js during execution.

// we are producing the promise here.
const promise = new Promise((resolve, reject) => {
  // promise is an object.
  setTimeout(() => {
    resolve(10500); // ...this is fulfilled state.
    // reject(new Error("i lied")); //...this is rejected state.
  }, 4000); //...promise in pending or ongoing state for 4 secs here.
});

// we are consuming the promise here.
// most of the time, we are consuming promises and not creating them.
// we use promises to get rid of callback hell.
promise
  .then((money) => {
    if (money === 10000) {
      console.log("yay");
    }
    return money;
  })
  // promise chaining. passing the response of above promise to the one below.
  // .then((amtRec) => {
  //   console.log("amount received", amtRec);
  // })
  .then(moneyReceived)
  .then((extraMoney) => {
    if (extraMoney) {
      console.log("wow! i didnt expect this.");
    }
    console.log("deposit this money in the bank");
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    // "finally" is always called irrespective of the "promise" outcome.
    console.log("i'm called irrespective of the outcome");
  });
//...settled state represents either fulfilled or rejected.

function moneyReceived(amtReceived) {
  return new Promise((resolve, reject) => {
    if (amtReceived > moneyLent) {
      resolve(amtReceived - moneyLent);
    } else if (amtReceived < moneyLent) {
      reject(new Error("oh wait, something is not right"));
    } else {
      resolve(0);
    }
  });
}

// JSON is basically a string representation of js objects.
// JSON.stringify() converts the JSON object into string.
// JSON.parse() gives us the object representation of JSON string in js.
