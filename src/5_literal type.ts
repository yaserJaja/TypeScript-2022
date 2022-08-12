type compare = 0 | 1 | -1;

function compareNumbers(num_1: number, num_2: number): compare {
  if (num_1 == num_2) {
    return 0;
  } else if (num_1 > num_2) {
    return 1;
  } else {
    return -1;
  }
}

let result = compareNumbers(1, 1);
console.log(result);
result = compareNumbers(2, 1);
console.log(result);
result = compareNumbers(1, 2);
console.log(result);