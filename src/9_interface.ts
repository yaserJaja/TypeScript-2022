/*
Interface:
  [1] Declaration
  [2] Method And Parameters
  [3] ReOpen Interface
  [4] Extends
*/
interface Student {
  id?: number,
  readonly username: string,
  isPassed: boolean;
  sayHello(): string,
  getDouble: (num: number) => number
}

let yaser: Student = {
  // id: 1,
  username: "yaser",
  isPassed: true,
  sayHello() {
    return `Hello ${this.username}`;
  },
  getDouble: (num: number) => {
    return num * 2;
  }
}

// yaser.username = "Ahmad";

function printInfo(std: Student) {
  console.log(`Your id is ${std.id}`);
  console.log(`Your username is ${std.username}`);
  console.log(`Your result is ${std.isPassed ? 'Passed': 'Failed'}`);
}

// printInfo({id: 1, username: "Yaser", isPassed: true});
console.log(yaser.getDouble(10));


// Re Open Interface

// Home Page
interface Setting {
  theme: boolean,
  readonly font: string,
}
// Article Page
interface Setting {
  sidebar?: boolean
}
// Contant Page
interface Setting {
  external?: boolean
}

let userSetting: Setting = {
  theme: true,
  font: "Open sans",
  sidebar: true,
  external: false
}

// [4] extends

interface User {
  id: number,
  username: string,
  country: string
}
interface Moderator {
  role: string | number
}
interface Admin extends User, Moderator {
  protect?: boolean
}