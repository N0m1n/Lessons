// alert("hello world!");

// console.log("Hi, developers!");
// const name = "Nomin";

// console.log(myAge);
// console.log(name);

// let num = "dot";
// num = "dot" + 1;

// console.log(num);
// == jinhhene tentsuu temdeg ilerhiilne

let myAge = 25;
let batAge = 25;
myAge = 26;

console.log(typeof myAge);
console.log(myAge == batAge);

let obj;
console.log(typeof obj);

// 3 digit number sum
let number = 897;
console.log(number % 10);
console.log(~~((number % 100) / 10));
console.log(~~(number / 100));

console.log(~~(number / 100) + ~~((number / 10) % 10) + (number % 10));
let num = 29;

console.log(num % 10);
console.log(~~(num / 10));
console.log(~~(num / 10) * (num % 10));

const PI = 3.14159265359;
function areaOfCircle(r) {
  return r * PI * PI;
}

function perimeterOfCircle(r) {
  return r * 2 * PI;
}
const radius = 10;
