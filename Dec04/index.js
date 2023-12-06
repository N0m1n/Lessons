// function greet() {
//   console.log("Hello there!");
// }
// greet();

// const name = window.prompt("Ta neree oruulna uu?");
// function customerName(name) {
//   console.log("Hi", name);
// }
// customerName(name);

const a = window.prompt("ehnii toogoo oruulna uu?");
const b = window.prompt("2doh toog oruulna uu?");
const result = window.prompt(" 1. + \n 2. - \n 3.* \n 4./");

function calculator(a, b) {
  if (result === "1") {
    console.log(Number(a) + Number(b));
  } else if (result === "2") {
    console.log(Number(a - b));
  } else if (result === "3") {
    console.log(Number(a * b));
  } else if (result === "4") {
    console.log(Number(a / b));
  }
}
calculator(a, b);
