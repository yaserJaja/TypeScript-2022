/*
Data Type:
  * number
  * string 
  * boolean
  * any

syntax:
  * let name : type = value;  
  * let name : type_1 | type_2 | .. = value;
  
  with array:
  * let name : type[] = [value_1, ...];
  * let name : (type_1 | type_2)[] = [value_1, ...];
  * let name : (type_1 | type_2[])[] = [value_1, [value_2] ...];

  with function:
  function name (parameter: type) : typeReturn {
    return type_result;
  }

  typeReturn => void : undefined, never: nothing
*/

let num: number = 10;
let str: string = "Hi";
let bool: boolean = true;
let anyType: any = "any"; let all;

let array: (string | number | boolean | number[])[] = [1, 2, 'A', 'B', true, false, [1, 2]];
let arrayTwo: (number | (number | string[])[])[] = [1, 2, [1, 2, ['A']]];

function test(name: string, age: number) {
  console.log(`Hi ${name}, Your age is ${age}`);
}
test ("Yaser", 22);

function sum (...numbers: number[]): number {
  let sum = 0;
  numbers.forEach( num => sum += num);
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const anonymouse = function (bool: boolean): boolean {
  return bool;
}
console.log(anonymouse(true));  

const arrow = (bool: boolean): boolean => bool;
console.log(arrow(true));  
