let currency = window.prompt("from /zuvhun 3 useg:\n mnt, usd, cny , rub/");
// ("from /zuvhun 3 useg:\n 1.mnt, \n 2.usd, \n 3.cny , \n 4.rub/");
let value = window.prompt("end toon utga oruulna uu/ zuvhun toon utga/");
let result = window.prompt("To /zuvhun 3 useg mnt, usd, cny , rub/");
console.log(value, currency, result);

let currency1 = "usd";
let currency2 = "mnt";
let currency3 = "cny";
let currency4 = "rub";
let usdMnt = 3480;
let cnyMnt = 480;
let mnt = 1;
let rubMnt = 38;
let usdRub = 0.011;
let usdCny = 0.14;
let cnyUsd = 7.12;
let cnyRub = 0.08;
let rubUsd = 88.52;
let rubCny = 12.42;

if (result === currency2 && currency === currency1) {
  console.log(value * usdMnt);
} else if (result === currency2 && currency === currency3) {
  console.log(value * cnyMnt);
} else if (result === currency2 && currency === currency4) {
  console.log(value * rubMnt);
} else if (result === currency1 && currency === currency2) {
  console.log(value * (mnt / usdMnt));
} else if (result === currency1 && currency === currency3) {
  console.log(value * usdCny);
} else if (result === currency1 && currency === currency4) {
  console.log(value * usdRub);
} else if (result === currency3 && currency === currency1) {
  console.log(value * cnyUsd);
} else if (result === currency3 && currency === currency2) {
  console.log(value * (mnt / cnyMnt));
} else if (result === currency3 && currency === currency4) {
  console.log(value * cnyRub);
} else if (result === currency4 && currency === currency1) {
  console.log(value * rubUsd);
} else if (result === currency4 && currency === currency2) {
  console.log(value * (mnt / rubMnt));
} else if (result === currency4 && currency === currency3) {
  console.log(value * rubCny);
} else console.log("Utgaa dahin shalgana uu");

// if ( currency==="1"|| currency==="2" || currency==="3"|| currency==="4")
switch (result) {
  case "1":
    result = 3450;
    break;
  case "2":
    result = 1;
    break;
  case "3":
    result = 480;
    break;
  case "4":
    result = 38;
    break;
  default:
    console.log("buruu orolt");
}

window.alert((currencyFrom * value) / currencyTo);

// let balance = 0;
// let currencyFrom = window.prompt(
//  "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyFrom) {
//  case "1":
//  currencyFrom = 3450;
//  break;
//  case "2":
//  currencyFrom = 1;
//  break;
//  case "3":
//  currencyFrom = 480;
//  break;
//  case "4":
//  currencyFrom = 38;
//  break;
//  default:
//  console.log("Buruu orolt");
// }
// let value = window.prompt("End toon utga oruulna uu ?");
// let currencyTo = window.prompt(
//  "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyTo) {
//  case "1":
//  currencyTo = 3450;
//  break;
//  case "2":
//  currencyTo = 1;
//  break;
//  case "3":
//  currencyTo = 480;
//  break;
//  case "4":
//  currencyTo = 38;
//  break;
//  default:
//  console.log("Buruu orolt");
// }
// window.alert((currencyFrom * value) / currencyTo);
