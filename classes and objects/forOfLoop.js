let even = [];
let odd = [];

// "for of" loop is a  syntactic sugar of traditional "for" loop.
// it gives access to the values of the array directly.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let num of arr) { // we don't need to initialize and increment.
  if (num % 2 == 0) {
    even.push(num);
  }
  else{
    odd.push(num);
  }
}
console.log(even);
console.log(odd);
console.log(even.concat(odd)); // merging both the arrays together.

// "for in" loop... it gives access to the indices directly.
for(let index in arr){
    console.log(arr[index]); // prints the numbers within the index.
    console.log(index); // prints only the indices.
}
console.log(arr.slice(0,4)); // it returns the array from index 0 to 3.
console.log(arr.slice(4, arr.length));