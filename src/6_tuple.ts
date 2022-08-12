/*

Tuple: typed array with a pre-defined length and types for each index. 

let name: [type, type, ...];
name = [value, value];

let name:readonly [type, type, ...];

*/


let tuple:readonly [number, string, boolean];

tuple = [1, "Yaser", true];
// tuple.push("Male");

console.log(tuple);

const [id, name, isMale] = tuple;

console.log(id);
console.log(name);
console.log(isMale);