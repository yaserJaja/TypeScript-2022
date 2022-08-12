"use strict";
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.msg = () => {
            return `Hello ${this.username}`;
        };
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
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    printInfo() {
        console.log(`Your Data:\nName:${this.name}\nGender:${this.gender}\nAge:${this.age}`);
    }
}
let sh = new Person("Yaser", "Male", 22);
sh.age = 12;
sh.printInfo();
class Employee {
    constructor(username, age) {
        this.username = username;
        Employee.objectCreated++;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    static getNumberOfObjectedCreated() {
        console.log(`${this.objectCreated} Object Created`);
    }
    printInfo() {
        console.log(this.username);
    }
}
Employee.objectCreated = 0;
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
class Home {
    constructor(room, window) {
        this.room = room;
        this.window = window;
    }
    printInfo() {
        console.log(`There are ${this.room} rooms and ${this.window} windows`);
    }
}
let home = new Home(3, 6);
home.printInfo();
