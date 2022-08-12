/*
Create New Type:
  type name = type_1 [| ...];
*/

type str = string;

let name1: str = "Yaser";
// console.log(name1);


// advanced example

type person = {
  name: string,
  age: number,
}

type employee = person & {
  job: string, 
}

function printInfoEmployee(person: employee): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person['age']}`);
  console.log(`Job: ${person.job}`);
}

printInfoEmployee({name: "Yaser", age: 22, job: "Programmer"});