"use strict";
function getYear(age) {
    if (age == 18) {
        return 1;
    }
    else if (age == 19) {
        return 2;
    }
    else if (age == 20) {
        return 3;
    }
    else if (age == 21) {
        return 4;
    }
    else if (age == 22) {
        return 5;
    }
    return 0;
}
var student;
(function (student) {
    student[student["age"] = 22] = "age";
    student[student["year"] = getYear(student.age)] = "year";
    student[student["calc"] = 12] = "calc";
})(student || (student = {}));
console.log(student.year);
console.log(student.calc);
