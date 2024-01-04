// let i = 0;
// const arr = [1, 2, 3, 4, 5];
// //debugger
// while (i < arr.length) {
//   if (arr[i] == 5) {
//     console.log("5 bn");
//   }
//   i++;
// }

// let i = 0;
// const arr = [1, 2, 3];
// while (i < arr.length) {
//   console.log(array[i]);
//   i++;
// }

// tooni zereg oloh :
console.log(7 ** 2);

// let a = 2;
// let i = 0;
// console.log(a ** i);

// while (i < 13) {
//   if (a ** i >= 1000) {
//     console.log(i);
//   } else if (i == 1 && i >= 1000) {
//     console.log("NaN");
//   }
//   i++;
// }
let num = 2;
let result = 0;
let power = 1; //2**1 =2

while (result > 1000) {
  //2
  result = num ** power;
  power++;
}
console.log(`${num}-iin ${power} zereg n 100-s ih bna`);

// ugugdsun too hurtel tegsh toonuudiin sum ol

let number = 35;
let i = 0;
let a = 0;
while (i <= number) {
  // 0 - = 35
  if (i % 2 == 0) {
    // <---tegsh too oloh
    a = a + i; //<-- niilber oloh
  }
  i++;
}
console.log(a);
// pyramid uusgeh

for (let N = 1; N <= 7; N++) {
  console.log("*".repeat(N));
}
for (let n = 0; n <= 5; n++) {
  for (let s = 4; s >= 0; s--) {
    console.log(" ".repeat(s) + "*".repeat(n));
  }
}
