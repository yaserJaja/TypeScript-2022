let image = document.getElementById("image") as HTMLImageElement;
let input = <HTMLInputElement> document.getElementById("image");
console.log(image.src);
console.log(input.value);


let number: any = 10;
console.log((number as string).repeat(10)); // error