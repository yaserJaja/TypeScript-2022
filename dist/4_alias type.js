"use strict";
let name1 = "Yaser";
function printInfoEmployee(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person['age']}`);
    console.log(`Job: ${person.job}`);
}
printInfoEmployee({ name: "Yaser", age: 22, job: "Programmer" });
