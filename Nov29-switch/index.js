// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "monday";
//     break;
//   case 2:
//     dayName = "tuesday";
//     break;
//   case 3:
//     dayName = "wednesday";
//     break;
//   case 4:
//     dayName = "thursday";
//     break;
//   case 5:
//     dayName = "friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }
// console.log(dayName);

//irts burtgel

let person = 5;
let irts;

switch (person) {
  case 1:
    irts = "Dondog irlee";
    break;
  case 2:
    irts = "Naraa irlee";
    break;
  case 3:
    irts = "Baldan irlee";
    break;
  case 4:
    irts = "Dulmaa irlee";
    break;
  case 5:
    irts = "Galt irlee";
    break;
  default:
    irts = "Manai ajiltan bish";
}
console.log(irts);
//TERNARY

// let age = 11;
// let message = age >= 18 ? "ta nasand hursen bna" : "ta nasand hureegui bna";
// console.log(message);

// let nas = 25;
// let isApproved = nas >= 21 ? "true" : "false";
// console.log(isApproved);

let year = 2005;
let days = 365;
let value = days >= 365 ? "true" : "false";

//bodlogo 2

let n1 = 56;
let n2 = 33;
let n3 = 10;
let n4 = 12;

if ((n1 < n2, n3 && n3 < n4)) {
  console.log("hamgiin baga ni n1");
} else if ((n1, n2 > n3 && n3 > n4)) {
  console.log("hamgiin baga ni n4 bna");
} else if ((n1, n2 > n4 && n4 > n3)) {
  console.log("hamgiin baga ni n3 bna");
} else if ((n1, n3 > n2 && n4 > n2)) {
  console.log("hamgiin baga ni n2 bna");
}

//bodlogo 3

let A1 = 150;
let A2 = 108;
let A3 = 89;
let aveteamA = (A1 + A2 + A3) / 3;
console.log(aveteamA);

let B1 = 120;
let B2 = 100;
let B3 = 101;
let aveteamB = (B1 + B2 + B3) / 3;
console.log(aveteamB);

if ((aveteamA > aveteamB && aveteamA, aveteamB >= 100)) {
  console.log("winner-Team A ");
} else if ((aveteamA === aveteamB && aveteamA, aveteamB >= 100)) {
  console.log("equal");
} else if ((aveteamA < aveteamB && aveteamA, aveteamB >= 100)) {
  console.log("winner - Team B");
} else {
  console.log("no winner");
}
