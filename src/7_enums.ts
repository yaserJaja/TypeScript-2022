/*

enum name {
  name = value,
}

*/

function getYear(age: number):number {
  if (age == 18) {
    return 1;
  } else if (age == 19) {
    return 2;
  } else if (age == 20) {
    return 3;
  } else if (age == 21) {
    return 4;
  } else if (age == 22) {
    return 5;
  }
  return 0;
}

enum student {
  age = 22,
  year = getYear(age),
  calc = age - 10,
}

console.log(student.year);
console.log(student.calc);
