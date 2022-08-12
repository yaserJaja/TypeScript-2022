// Generics:
// [1] with function
// function returnType <Type> (value: Type): string {
//   return typeof(value);
// }
// console.log(returnType(1));
// console.log(returnType("Hello"));
// console.log(returnType(true));
// console.log(<number>returnType(1));
function returnType(value) {
    return value;
}
// console.log(<number>returnType(1));
// console.log(<string>returnType("Hello"));
// console.log(<boolean>returnType(true));
// [2] Arrow Function
var returnTypeWithArrow = function (value) { return value; };
// console.log(returnTypeWithArrow(1));
// [3] multi generics:
function multiGenerics(firstPara, secondPara) {
    return "First Parameter is ".concat(firstPara, ", Second Parameter is ").concat(secondPara);
}
// console.log(multiGenerics("Yaser", 22));
// [4] with class
var U = /** @class */ (function () {
    function U(value) {
        this.value = value;
    }
    U.prototype.showMessage = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return U;
}());
var u = new U("Yaser");
u.showMessage("Hi");
var u1 = new U("Yaser");
u1.showMessage(22);
// [5] with interface
