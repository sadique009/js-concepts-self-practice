// sets...used to store unique values.
let sets = new Set();
sets.add(3);
sets.add(5);
sets.add(8);
console.log(sets);
console.log(sets.has(3));
sets.delete(3);
console.log(sets);
// sets.clear();

let array = [2, 3, 4, 3, 4, 5, 6, 6, 5, 4, 2];
console.log(new Set(array)); // here, we are passing the array as an argument to the set constructor.

let newSet = new Set(array);
for (let item of newSet) {
  console.log(item);
}

// maps...similar to hashmap. uniquely refer to a value with the help of a key.

// eg. find the frequency of occurrence of each letter in a sentence.
let map = new Map();
let sentence = "This is a sentence";
for (let letter of sentence.split("")) {
  let caseIn = letter.toLowerCase();
  if (map.has(caseIn)) {
    // add the count by 1.
    let count = map.get(caseIn);
    map.set(caseIn, count + 1);
  } else {
    map.set(caseIn, 1);
  }
}

console.log(map);

// utility functions.
// Array.from converts a set or a map into array.
console.log(Array.from(map, ([key, value]) /* destructuring*/ => ({key, value})));
console.log(Array.from(newSet, (item) => item));

// some other array methods.
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.some((item) => item % 2 == 0));
console.log(arr.every((item) => item % 2 == 0));

// converts one type of array into another type.
// returns a new array.
let kvArray=Array.from(map, ([key, value]) /* destructuring*/ => ({key, value}));
console.log(kvArray);
console.log(kvArray.map(currItem=>currItem.value)); // converted into a flat array of integers.

// Array.filter. we want to modify its default behaviour using the prototype.
let origFilter=Array.prototype.filter;

Array.prototype.filter=function(cb){
    // here, "this" references the array on which filter is being applied.
    return origFilter.call(this, (item)=>{
        console.log(item);
        return cb(item);
    })
}
console.log([1,3,6,8].filter(item=>item%2==0));

let org={org:"devsnest"};
let newObj={};
Object.defineProperties(newObj, {
    age:{
        value:42,
        enumerable:true, // default value is false. this gets us the internal properties of "age"{object} here, like getting "keys" and "values".
        writable:false, // default value is false. "false" makes the "age" property uneditable.
    }

   

})
let somePer=Object.create(org, {firstName:{value:"foo"}});
let mergedObject=Object.assign({}, somePer, {car:"bmw"});
console.log(mergedObject);
// object.assign merges only the enumerable properties of an object.
// since, "somePer" was created based on "org" prototype, and since prototype is not its own property{i.e, non-enumerable},
// it is ignored by "Object.assign"