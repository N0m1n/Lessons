let studentAges = [15, 25, 30, 35, 12];
console.log(studentAges);
let studentName = ["bold", "Micheal", "Malone"];
console.log(studentName);
let studentNames = new Array("bold", "Micheal", "Malone");
console.log(studentNames);

// select output
studentAges[0]; //output:15
studentAges[studentAges.length - 1]; //output:12
console.log(studentAges[0]);
console.log(studentAges[studentAges.length - 1]);

// length -uurchluhud ashiglana
// length ni 0-s ehelnee!!!!!!!!
studentAges[2] = 33;
console.log(studentAges);

//     **LOOP**
// while - bol davtalt LOOP gj oilgoh

// let i = 0;
// while (i < 100) {
//   console.log("Hello world");
//   i++;
// }

// let names = ["Bat", "Baldan", "Dulmaa", "Gonchig", "Luubat", "Manjin"];

// let i = 0;
// while (i < 6) {
//   // while (i <=names.length-1)
//   console.log(names[i]);
//   i++;
// }

let num = window.prompt("too oruulna uu?");
console.log(num);

// // let i = 0;
// // while (i <= num.length - 1) {
// //   console.log(((1 + num) * [num.length - 1]) / 2);
// //   i++;
// // }

// easy option
// let sum = 0;
// let i = 1;
// while (i <= num) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// var randomNumber = mat.floor(math.random() * 100);
// console.log(randomNumber);
//DEC 07
// **if ashiglah**

let i = 0;
const arr = [1, 2, 3, 4, 5];
//debugger
while (i < arr.length) {
  if (arr[i] == 5) {
    console.log("5 bn");
  }
  i++;
}

// let i = 0;
// const arr = [1, 2, 3];
// while (i < arr.length) {
//   console.log(array[i]);
//   i++;
// }
