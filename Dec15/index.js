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

// const numbersObject = { a: 5, b: 10, c: 3 };

// Write a function to calculate the sum of all values in the object.

// console.log(Object.values(numbersObject));

// let txt = "";

//   for (let x in numbersObject) {
//     txt += numbersObject[x] + " ";}

// console.log(txt);

// console.log(numbersObject.a + numbersObject.b + numbersObject.c);

// const keys = Object.keys(numbersObject);

// let sum = 0;

// for (let i = 0; i < keys.length; i++) {
//   sum += numbersObject[keys[i]];
// }

// console.log(sum);

// Problem
// Write a function to capitalize the first letter of each property value.

const stringObject = {
  name: "john",
  age: 25,
  city: "example",
};

console.log(Object.values(stringObject));

const capitalizeLetter = (text) => {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
};

const capitalizeLetterInObject = (obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === "string") {
      obj[keys[i]] = capitalizeLetter(obj[keys[i]]);
    }
  }
  return obj;
};

console.log(capitalizeLetterInObject(stringObject));

// function valueUpperCase() {
//   values = Object.values(stringObject);
// }

// Problem
// Write a function to multiply each property value by a given factor (e.g., multiplyObjectValues(obj, 2)).

// const numbersObject = { a: 5, b: 10, c: 3 };

// const value = Object.values(numbersObject);

// function multipier(numbers) {
//   let result = [];
//   let givenNum = 5;
//   for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * givenNum);
//   }
//   return result;
// }
// console.log(multipier(value));
