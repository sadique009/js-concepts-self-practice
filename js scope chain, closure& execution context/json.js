// JSON.stringify() turns a js object into text and stores that JSON text in a string.

var myObj = { key1: "some text", key2: "true", key3: 5 };
var objAsStr = JSON.stringify(myObj);
// o/p - "{"key1":"some text", "key2":"true", "key":5}"
console.log(objAsStr);
console.log(typeof objAsStr);

// JSON.parse turns a string of JSON into a js object.

var obj=JSON.parse(objAsStr);
console.log(obj);
// o/p - {key1: 'some text', key2: 'true', key3: 5}
console.log(typeof obj);