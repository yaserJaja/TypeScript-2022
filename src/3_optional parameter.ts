/*
  use ? before :

  (last parameter?: type)
*/

function printName(name: string, age?: number) : void {
  console.log(name + ' - ' + age);
}

printName("Yaser");