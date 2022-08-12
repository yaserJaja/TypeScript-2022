// Generics:

// [1] with function

// function returnType <Type> (value: Type): string {
//   return typeof(value);
// }
// console.log(returnType(1));
// console.log(returnType("Hello"));
// console.log(returnType(true));
// console.log(<number>returnType(1));

function returnType <Type> (value: Type): Type {
  return value;
}
// console.log(<number>returnType(1));
// console.log(<string>returnType("Hello"));
// console.log(<boolean>returnType(true));



// [2] Arrow Function

const returnTypeWithArrow = <Type> (value: Type) => value;
// console.log(returnTypeWithArrow(1));



// [3] multi generics:

function multiGenerics <F, S> (firstPara: F, secondPara: S): string {
  return `First Parameter is ${firstPara}, Second Parameter is ${secondPara}`;
}
// console.log(multiGenerics("Yaser", 22));



// [4] with class

class U <F> {
  constructor(public value: F) {}
  showMessage <S> (msg: S): void {
    console.log(`${msg} - ${this.value}`);
  }
}
let u = new U("Yaser");
u.showMessage("Hi");

let u1 = new U("Yaser");
u1.showMessage(22);

let u2 = new U <string | boolean> (true);
u1.showMessage(22);


// [5] with interface

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T) : void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);