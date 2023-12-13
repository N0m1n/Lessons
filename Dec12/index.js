// const fruits = ["banana", "apple", "Orange", "mango"];

// console.log(fruits.toString()); //"banana,apple,Orange,mango"

// console.log(fruits.join(" and ")); //banana and apple and Orange and mango

// console.log(fruits.includes("pineapple")); //false

// //IndexOf

const fruits4 = ["banana", "apple", "Orange", "mango"];

// console.log(fruits4.indexOf("apple")); //1 baihgui utga ugvul -1 gsn utga ugnu

// console.log(fruits4.lastIndexOf("Orange")); //2

// const findIndex = (fruit) => {
//   if (fruit === "banana") {
//     console.log("0");
//   } else if (fruit === "apple") {
//     console.log("1");
//   } else if (fruit === "Orange") {
//     console.log("2");
//   } else if (fruit === "mango") {
//     console.log("3");
//   } else {
//     console.log("-1");
//   }
// };
// findIndex(" ");

// const findIndex = (fruit) => {
//   for (let i = 0; i < fruits4.length; i++) {
//     // console.log(fruits4[i]);
//     if (fruits4[i] == fruit) {
//       console.log(i);
//     }
//   }
//   return 0;
// };
// findIndex("banana");
// const findIndex1 = (fruit) => {
//   // let i = 0;
//   // while (i < fruits4.length) {
//   //   if (fruits4[i] == fruit) {
//   //     console.log(i);
//   //   }
//   //   i++
//   // }
// };
// findIndex("banana");

// const toString = (fruitName) => {
//   let str = "";
//   let comma = ",";
//   for (let i = 0; i < fruitName.length; i++) {
//     str += fruitName[i] + comma;
//   }
//   console.log(str);
// };
// toString(fruits4);

const toJoin = (fruits) => {
  let str1 = "";
  let and = " and ";
  let str2 = "";
  for (let i = 0; i < fruits.length - 1; i++) {
    str1 += fruits[i] + and;
  }
  str2 += str1 + fruits[fruits.length - 1];
  return str2;
};
let result = toJoin(fruits4);
console.log(result);
