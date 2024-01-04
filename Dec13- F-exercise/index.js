// [1,2,3,4 ,num] push ashiglahgui garaas utga ughud array dr herhen nemeh ve

// const arr = [1, 2, 3, 4];

// let num = window.prompt("too oruulana uu");
// console.log(num);

// function toPush(a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     c = a + "," + b;
//   }
//   return c;
// }
// let result = toPush(arr, num);
// console.log(result);

//Nested Loop

// const arr = [2, 3, 5, 8, 7];

// const target = 9;

// let x = "";

// function plus() {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j >= 0; j--) {
//       x += arr[j];
//     }
//   }
//   // y = x + arr[i];
//   // return y;
// }
// let result = plus(arr);
// console.log(result);

// // console.log(arr[0] + arr[arr.length - 1]);

// // ave of array

// let z = "";
// function ave() {
//   for (i = 0; i >= arr.length; i++) {
//     z += (z + 1) / arr.length;
//   }
//   console.log(z);
// }
// ave(arr);

//                                    Array
// Average of Array Elements:(easy)
// Write a function that calculates the average of elements in an array.

// const arr = [1, 2, 3, 4, 5, 6];

// function ave() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(ave());

// Find Maximum Element: (easy)
// Write a function that finds and returns the maximum element in an array.

// const arr = [5, 76, 81, 9];

// function findMax(arrNumber) {
//   let max = arrNumber[0];
//   for (let i = 0; i < arrNumber.length; i++) {
//     if (max < arrNumber[i]) {
//       max = arrNumber[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// Reverse an Array: (medium)
// Write a function that reverses the elements of an array.

// const arr1 = [5, 76, 81, 9];

// function reverse(reverseArray) {
//   let arr2 = [];
//   for (let i = reverseArray.length - 1; i >= 0; i--) {
//     arr2.push(reverseArray[i]);
//   }
//   return arr2;
// }
// console.log(reverse(arr1));

// Square Each Element: (medium)
// Write a function that takes an array of numbers and returns a new array where each element is squared.

// const arr = [2, 5, 6, 3, 11];

// function countSquare(numbers) {
//   let output = [];
//   for (let i = 0; i < numbers.length; i++) {
//     output.push(numbers[i] ** 2);
//   }
//   return output;
// }
// console.log(countSquare(arr));

// Remove Duplicates: (hard)
// Write a function that removes duplicates from an array and returns a new array with unique elements.

// const arr = [2, 3, 3, 4, 5, 5];

// function remove(duplicates) {
//   let arr1 = [];

//   for (let i = 0; i < duplicates.length; i++) {
//     for (let j = duplicates.length - 1; j >= 0; j--) {
//       if (duplicates[i] === duplicates[j]) {
//         arr1.push(duplicates[i]);
//       }
//     }
//   }
//   return arr1;
// }

// console.log(remove(arr));

const numbersObject = { a: 5, b: 10, c: 3 };

// Write a function to calculate the sum of all values in the object.

// console.log(Object.values(numbersObject));

// let txt = "";

//   for (let x in numbersObject) {
//     txt += numbersObject[x] + " ";}

// console.log(txt);

console.log(numbersObject.a + numbersObject.b + numbersObject.c);

const keys = Object.keys(numbersObject);

let sum = 0;

for (let i = 0; i < keys.length; i++) {
  sum += numbersObject[keys[i]];
}

console.log(sum);
