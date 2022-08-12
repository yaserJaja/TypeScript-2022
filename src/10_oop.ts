/*
  [1] properies
  [2] Modifiers
  [3] Encapsulation
  [4] Static Properties And Method
  [5] Implement From Interface
  [6] Abstract Class
  [7] Polymorphism
*/
class User {
  username: string;
  password: string;
  msg: () => string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.msg = () => {
      return `Hello ${this.username}`;
    }
  }
  printHello() {
    return `Hello ${this.username}`;
  }
}

let user = new User("Yaser", "123456");
console.log(user.username);
console.log(user.password);
console.log(user.msg());
console.log(user.printHello());

class Person {
  // private name: string;
  // protected gender: string;
  // public age:number;
  constructor(private name: string, protected gender: string, public age: number) {
    // this.name = name;
    // this.gender = gender;
    // this.age = age;
  }
  printInfo() {
    console.log(
      `Your Data:\nName:${this.name}\nGender:${this.gender}\nAge:${this.age}`
    );
  }
}

let sh = new Person("Yaser", "Male", 22);
// sh.name = "Hi";
// sh.gender = "Hi";
sh.age = 12;
sh.printInfo();


// [3] Encapsulation
// [4] Static Properties And Method
class Employee {
  // Properties
  private static objectCreated: number = 0;
  private _age: number;
  // Constructors
  constructor(private username: string, age:number) {
    Employee.objectCreated++;
    this._age = age;
  }
  // Getter
  public get age(): number {
    return this._age;
  }
  // Setter
  public set age(age) {
    this._age = age;
  }
  // Methods
  static getNumberOfObjectedCreated(): void {
    console.log(`${this.objectCreated} Object Created`);
  }
  printInfo(): void {
    console.log(this.username);
  }
}

let employee = new Employee("Yaser", 22);
employee.printInfo();
Employee.getNumberOfObjectedCreated();
let employee1 = new Employee("Yaser", 22);
employee.printInfo();
Employee.getNumberOfObjectedCreated();
let employee2 = new Employee("Yaser", 22);
employee.printInfo();
Employee.getNumberOfObjectedCreated();
let employee3 = new Employee("Yaser", 22);
employee.printInfo();
Employee.getNumberOfObjectedCreated();

interface HomeInterface {
  room: number,
  door?: number,
  window: number,
  printInfo(): void
}

// [5] Implement From Interface
class Home implements HomeInterface {
  constructor(public room: number, public window: number) {
  }
  printInfo(): void {
    console.log(`There are ${this.room} rooms and ${this.window} windows`);
  }
}
let home = new Home(3, 6);
home.printInfo();

// Abstract Class
/*
  
*/

abstract class Food {
  constructor(protected title: string) {}
  abstract message(): void;
  // {
  //   console.log('Tic Tac Tic Tac');
  // }
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title)
  }
  message(): void {
    console.log("Tic.. Tac.. Tic.. Tac..");
  }
}

let pizza = new Pizza("Speed", 1000);
pizza.message();
console.log(pizza.price);

class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log("Attacking Now");
  }
}
class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    super.attack();
    console.log("Attack By Spears");
    this.spears -= 1;
  }
}
class Barbarian extends Player {
  constructor(name: string, public axe: number) {
    super(name);
  }
  override attack(): void {
    super.attack();
    console.log("Attack By Axe");
    this.axe -= 1;
  }
}

let player = new Amazon("Yaser", 10);
player.attack();
console.log(player.spears);
player.attack();
console.log(player.spears);

