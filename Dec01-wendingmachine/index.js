// let currency = window.prompt("from /zuvhun 3 useg:\n mnt, usd, cny , rub/");
// // ("from /zuvhun 3 useg:\n 1.mnt, \n 2.usd, \n 3.cny , \n 4.rub/");
// let value = window.prompt("end toon utga oruulna uu/ zuvhun toon utga/");
// let result = window.prompt("To /zuvhun 3 useg mnt, usd, cny , rub/");
// console.log(value, currency, result);

let item = window.prompt(
  "Avah zuilee songono uu? \n 1. Cola 1200 \n 2. Sprite 1500 \n 3. Alpen gold 2000 \n 4. Suu 2200 \n 5. Talh 1000 \n 6. Zairmag 500 \n 7. Bohi 150 \n 8. Arhi 15000"
);
let value = window.prompt(
  "Mungun devsgertee oruulna ? \n 1.5000 \n 2. 10000 \n 3. 20000"
);
// let number= window.prompt("Heden shirheg avah ve?")
console.log(item, value);

switch (item) {
  case "1":
    item = 1200;
    break;
  case "2":
    item = 1500;
    break;
  case "3":
    item = 2000;
    break;
  case "4":
    item = 2200;
    break;
  case "5":
    item = 1000;
    break;
  case "6":
    item = 500;
    break;
  case "7":
    item = 150;
    break;
  case "8":
    item = 15000;
    break;
  default:
    console.log("Buruu orolt");
}
switch (value) {
  case "1":
    value = 5000;
    break;
  case "2":
    value = 10000;
    break;
  case "3":
    value = 20000;
    break;
  default:
    console.log("Buruu orolt");
}
let money = value - item;
console.log(money);

if (money >= 10000) {
  console.log(
    "10000 devsgert:",
    ~~(money / 10000),
    "5000 devsgert:",
    ~~((money - 10000) / 5000),
    "1000 devsgert:",
    ~~((money - 15000) / 1000),
    "500 devsgert:",
    ~~((money % 1000) / 500),
    "100 devsgert:",
    ~~(((money % 1000) - 500) / 100),
    "50 devsgert",
    ~~(money % 100) / 50
  );
} else if (money < 10000) {
  console.log(
    "5000 devsgert:",
    ~~(money / 5000),
    "1000 devsger:",
    ~~((money - 5000) / 1000),
    "500 desvgert:",
    ~~((money % 1000) / 500),
    "100 desvgert:",
    ~~(((money % 1000) - 500) / 100),
    "50 devsgert:",
    ~~(money % 100) / 50
  );
} else if (money <= 1000) {
  console.log(
    "1000 devsger:",
    ~~(money / 1000),
    "500 desvgert:",
    ~~((money % 1000) / 500),
    "100 desvgert:",
    ~~(((money % 1000) - 500) / 100),
    "50 devsgert:",
    ~~(money % 100) / 50
  );
}
console.log(value - item);
let amynga = parseInt(money / 10000);
let tavanmynga = parseInt((money % 10000) / 5000);
let mynga = parseInt(money / 1000);
let tavanzuu = parseInt((money % 1000) / 500);
let zuu = parseInt(((money % 1000) - 500) / 100);
let tavi = parseInt((money % 100) / 50);
console.log(amynga, tavanmynga, mynga, tavanzuu, zuu, tavi);

function findChange(cash, x, y) {}
