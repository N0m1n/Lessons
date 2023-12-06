// function greet() {
//   console.log("Hello there!");
// }
// greet();

// const name = window.prompt("Ta neree oruulna uu?");
// function customerName(name) {
//   console.log("Hi", name);
// }
// customerName(name);

// const a = window.prompt("ehnii toogoo oruulna uu?");
// const b = window.prompt("2doh toog oruulna uu?");
// const result = window.prompt(" 1. + \n 2. - \n 3.* \n 4./");

// function calculator(a, b) {
//   if (result === "1") {
//     console.log(Number(a) + Number(b));
//   } else if (result === "2") {
//     console.log(Number(a - b));
//   } else if (result === "3") {
//     console.log(Number(a * b));
//   } else if (result === "4") {
//     console.log(Number(a / b));
//   }
// }
// calculator(a, b);
//tegsh untusgt gurvaljin talbai

// let x = 5;
// let y = 4;
// let z = 3;

// function triangleS() {
//   if (x * x + y * y == z * z) {
//     console.log((x * y) / 2);
//   } else if (y * y + z * z == x * x) {
//     console.log((y * z) / 2);
//   } else if (x * x + z * z == y * y) {
//     console.log((x * z) / 2);
//   } else console.log("tegsh untsugt gurvaljin bish");
// }
// triangleS();

let a = 5;
let b = 6;
// function talbai(undur, urgun) {
//   console.log(a * b);
// }
// talbai(a, b);

// function talbai1() {
//   console.log(a * b);
// }
// talbai1();
function talbai(undur, urgun) {
  return undur * urgun;
}
let talbaiS = talbai(a, b);
console.log(talbaiS);

function bodlogo(x) {
  return x * x + 5 * x + 6;
}
let hariu = bodlogo(6);
console.log(hariu);
