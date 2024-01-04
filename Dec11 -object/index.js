// //SPLIT
// // const str = " arvan tavan targan tarvaga";
// // console.log(str.split(" "));
// // replace & replaceall

// // console.log(str.replaceAll("a", "e"));

// // Trim , trimStart trimEnd ==> whitw space USTGANA!!!!!

// //CONCAT

// const p = "hello";
// const p1 = "World";
// console.log(p.concat(" ", p1));

// //toLowerCase and toUpperCase

// console.log(p1.toUpperCase());

// const str1 = "baldan dorj"; //B.Dorj

// const str2 = str1.slice(0, 1).toLocaleUpperCase();
// const str3 = str1.split("")[7].toUpperCase();
// console.log(str3);
// console.log(str2 + "." + str3 + str1.slice(8, 11));

const fullName = "baldan dorj";

const firstName = fullName.split(" ")[0];
const lastName = fullName.split(" ")[1];

console.log(firstName);
console.log(lastName);

const firstLetterToUpperCase = (str) => {
  return str.slice(0, 1).toUpperCase();
};

console.log(firstLetterToUpperCase);

const firstNameToUpperCase = (str) => {
  const firstStr = firstLetterToUpperCase(str);
  const lastStr = str.slice(1, str.length);
  console.log(lastStr);
  return firstStr + lastStr;
};

const firstNameStr = firstLetterToUpperCase(firstName);
console.log(
  firstNameStr + "." + " " + firstNameToUpperCase(lastName, firstName)
);

// let str = "bayandalai haliun";
// let split = str.split(" ");
// let firstName = split[0];
// let lastName = split[1];
// firstName = upperCase(firstName);
// lastName = upperCaseName(lastName);

// console.log(firstName + ". " + lastName);

// function upperCase(n1) {
//   return (n1 = n1.replace(n1, n1[0].toUpperCase()));
// }

// function upperCaseName(n1) {
//   return (n1 = n1.replace(n1[0], n1[0].toUpperCase()));
// }

// const str = "John Doe"
// function Name(str) {
//  let split = str.split(" ");
//  let answer = String(split[0]).charAt(0).toUpperCase();
//  let answer2 = String(split[1]).charAt(0).toUpperCase();
//  let last = split[1].split("");
//  last[0] = answer2;
//  let realanswer = last.join("");
//  console.log(answer + ". " + realanswer);
// }
// Name(str);

// const name = "bat nomin";

// const name1 = name.split(" ")[0].charAt(0).toUpperCase();
// const name2 = name.split(" ")[1].charAt(0).toUpperCase();
// const last = name.split(" ")[1].slice(1, name.length);

// console.log(name1 + "." + name2 + last);

//Object

//{key: value}

// let person = {
//   firstName: " Nomin",
//   lastName: "Erdene",
// };

// const keys = Object.keys(person);
// console.log(keys);

// // garalt [firstName , lastName]

// const key = Object.values(person);
// console.log(key);

//garalt ["nomin", "Erdene"]

// console.log(person.age); // tseg ashiglan handah
// console.log(person["name"]); // [] haalt ashiglan handah

// let person1 = {
//   firstname: "naranbayar",
// };

// let person2 = person1;
// person2.firstname = "Erdene";

// console.log(person1.firstname);
// console.log(person2.firstname);

// //spread  operator (...)

// let person2 = { ...person };

//
// let students = [
//   {
//     name: "Sambuu",
//     birthDate: 2005,
//     single: true,
//   },
//   {
//     name: "Bayaraa",
//     birthDate: 2002,
//     single: true,
//   },
//   {
//     name: "Duluu",
//     birthDate: 1990,
//     single: false,
//   },
//   {
//     name: "Nasaa",
//     birthDate: 1996,
//     single: false,
//   },
//   {
//     name: "Naraa",
//     birthDate: 1989,
//     single: false,
//   },
//   {
//     name: "turuu",
//     birthDate: 1998,
//     single: true,
//   },
//   {
//     name: "tulgaa",
//     birthDate: 2001,
//     single: true,
//   },
//   {
//     name: "Erdene",
//     birthDate: 2002,
//     single: true,
//   },
//   {
//     name: "Od",
//     birthDate: 1994,
//     single: false,
//   },
// ];
// function olderStudent() {
//   console.log(students.find((students) => students.birthDate >= 2000));
// }
