let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих

const countGender = (array) => {
  let male = 0;
  let female = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender == "female") {
      female++;
    } else {
      male++;
    }
  }
  return { male: male, female: female };
};

console.log(countGender(students));

//Сурагчдын насны дунджийг олох

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
// {male : number, female: 2}
// Сурагчдын насны дунджийг олох
// 22
// Сурагч бүрд овог нэмж оруулах
// {
//     name: "Сэд-Эрдэнэ",
//     age: 19,
//     gender: "male",
//     lastName: "Bold"
//   },
// Ижилхэн настай сурагчдыг олж шинэ object дотор хийх
// [{name: Bilguundul}, {name: Duluu}]
// const countGender = (array) => {
//   let male = 0;
//   let female = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].gender == "female") {
//       female++;
//     } else {
//       male++;
//     }
//   }
//   return { male: male, female: female };
// };

const averageAge = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  return sum / array.length;
};
console.log(averageAge(students));
// console.log(countGender(students));
console.log({ ...students[0], lastName: "Hello" });
// name: 'Сэд-Эрдэнэ', age: 19, gender: 'male',
// name: ""

//Сурагч бүрд овог нэмж оруулах

//Ижилхэн настай сурагчдыг олж шинэ object дотор хийх
