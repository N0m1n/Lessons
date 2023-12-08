// //1.gurvaljin
// let a = 3;
// let b = 4;
// let c = 5;
// function triangle() {
//   console.log(a + b + c);
// }
// triangle();
// // 2.cuba
// function cuba(tal) {
//   console.log("V=", tal * tal * tal);
//   console.log("S=", 6 * tal * tal);
// }
// cuba(5);
// // 3.tegsh untsugt
// function tegshUntsugt(undur, urgun) {
//   console.log(undur * urgun + " " + (undur + urgun) * 2);
// }
// tegshUntsugt(6, 4);
// // 4.function 1
// let x = 1;
// function bodlogo1() {
//   console.log(3 * x - 5);
// }
// bodlogo1();
// //5. function 2
// let z = -2;
// // let zereg = z ** 2;
// // console.log(zereg);
// // let minus = 3 * z;
// // console.log(minus);

// function bodlogo2() {
//   console.log(4 * z ** 2 - 3 * z + 5);
// }
// bodlogo2();

// //6 . suulin tsifr
// let number = 476;
// console.log(number % 10);

// //7. aravtiin oron

// let num = 423;
// let aOron = parseInt((num % 100) / 10);
// console.log(aOron);

// //8. 2 orontoi too

// let num2oron = 27;
// console.log(~~(num2oron % 10) * ~~(num2oron / 10));

// // 9. 3 orontoi

// let num3oron = 123;
// console.log(~~(num3oron / 100) + ~~((num3oron % 100) / 10) + ~~(num3oron % 10));

// // 10. minute second

// let input = 200;
// let minut = ~~(input / 60) % 10;
// let second = (input / 60 / 10) * 100;

// // let strMinut = hour.toFixed(4);
// // let integer = strMinut.split(".")[1];
// // console.log(strMinut + " " + integer);

// if (second >= 0 && second <= 20) {
//   console.log(minut + " " + 10);
// } else if (second >= 20 && second <= 40) {
//   console.log(minut + " " + 20);
// } else if (second >= 40 && second <= 60) {
//   console.log(minut + " " + 30);
// } else if (second >= 60 && second <= 80) {
//   console.log(minut + " " + 40);
// } else if (second >= 80 && second <= 100) {
//   console.log(minut + " " + 50);
// }

// //11 hour minute second

// let givenSec = 3612;
// let sec = givenSec - 3600;
// let minute = givenSec / 60;
// let hour = (givenSec / 3600) % 10;

// if (minute < 60) {
//   console.log(~~hour + " " + ~~minute + " " + sec);
// } else {
//   console.log(~~hour + " " + "0" + " " + sec);
// }

// // 3612 / 60 =60.2 minute
// // 3612 /3600= 1.0033 hours

// // 12. minut==> sec

// function minTosec(min, sec) {
//   console.log(min * 60 + sec);
// }
// minTosec(3, 4);

// // 13. tsag min sec ==> sec

// function hourTosec(h, m, s) {
//   console.log(h * 3600 + m * 60 + s);
// }
// hourTosec(1, 2, 3);
// //14. honog tsag

// let hours = 44;
// let days = ~~(hours / 24);
// let hourlog = hours - 24 * days;
// function hoursTodays() {
//   console.log(days + " " + (hours - days * 24));
// }
// hoursTodays();

// //15. hong tsag ==> tsag

// function daysTohours(d, h1) {
//   console.log(d * 24 + h1);
// }
// daysTohours(2, 5);
// //16. year month

// let month = 27;
// let year = ~~(month / 12);

// function monthToyear() {
//   console.log(year + " " + (month - year * 12));
// }
// monthToyear();

// //17 jil sar ==>sar
// function yearToMonth(y, m) {
//   console.log(y * 12 + m);
// }
// yearToMonth(2, 7);

// //18  2 tooni ih 1

// function maxval(n1, n2) {
//   if (n1 > n2) {
//     console.log(n1);
//   } else {
//     console.log(n2);
//   }
// }
// maxval(16, 14);

//19.  2 tooni baga

function minval(n1, n2) {
  if (n1 > n2) {
    console.log(n2);
  } else {
    console.log(n1);
  }
}
minval(9, 6);

//20. 3 toonii ih

// function maxOf3(numbers) {
//   return Math.max.apply(numbers);
// }
// maxOf3(1, 2, 3);
// let hariu = Math;
// console.log(hariu);
