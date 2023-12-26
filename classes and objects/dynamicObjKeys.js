// js nuggets by john smilga.
// dynamic object keys.

// using quokka.js extension to display console statements along side the code.
// command to use quokka:
// To open a new Quokka file use Cmd/Ctrl + K, J for JavaScript,
// or Cmd / Ctrl + K, T for TypeScript.
// To start/restart Quokka on an existing file, use Cmd/Ctrl + K, Q.

// dot notation.
const person = {
  name: "john",
};
console.log(person.name);
// we can create new object items on the fly.
person.age = 25;
console.log(person);

// square bracket notation.

const items = {
  "featured-items": ["item1", "item2"],
};
console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";

const app = {
  [appState]: true,
};
// here, key name will be the value of appState and not appState.
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}
updateState("name", "john");
updateState("job", "dev");
updateState("loading", "false");

updateState("products", []);
console.log(state);
