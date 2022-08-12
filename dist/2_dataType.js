"use strict";
let num = 10;
let str = "Hi";
let bool = true;
let anyType = "any";
let all;
let array = [1, 2, 'A', 'B', true, false, [1, 2]];
let arrayTwo = [1, 2, [1, 2, ['A']]];
function test(name, age) {
    console.log(`Hi ${name}, Your age is ${age}`);
}
test("Yaser", 22);
function sum(...numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const anonymouse = function (bool) {
    return bool;
};
console.log(anonymouse(true));
const arrow = (bool) => bool;
console.log(arrow(true));
