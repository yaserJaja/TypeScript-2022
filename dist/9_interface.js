"use strict";
let yaser = {
    username: "yaser",
    isPassed: true,
    sayHello() {
        return `Hello ${this.username}`;
    },
    getDouble: (num) => {
        return num * 2;
    }
};
function printInfo(std) {
    console.log(`Your id is ${std.id}`);
    console.log(`Your username is ${std.username}`);
    console.log(`Your result is ${std.isPassed ? 'Passed' : 'Failed'}`);
}
console.log(yaser.getDouble(10));
let userSetting = {
    theme: true,
    font: "Open sans",
    sidebar: true,
    external: false
};
