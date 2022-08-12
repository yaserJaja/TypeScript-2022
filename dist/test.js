"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    message() {
        console.log("Tic.. Tac.. Tic.. Tac..");
    }
}
let pizza = new Pizza("Speed", 1000);
pizza.message();
console.log(pizza.price);
