// Find Max Subarray sum
// Массив доторх хамгийн их нийлбэртэй дэд массивыг ол

// Жишээ:

// Оролт: 1, -2, 3, 4, -1, 2, 1, -5, 4
// Гаралт: 10  // [3, 4, -1, 2, 1]
// Оролт: -2, -3, 4, -1, -2, 1, 5, -3
// Гаралт: 7   // [4, -1, -2, 1, 5]

const arr = [2, 5, 6, 7];
const target = 9;

//[0,3]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0 + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log([i, j]);
    }
  }
}

// Оролт: The quick brown fox jumps over the lazy dog
// Гаралт: quick

const input = "The quick brown fox jumps over the lazy dog";

const split = input.split(" ");

const findCharNum = () => {
  const split = input.split(" ");
  const word = "";
  for (let i = 0; i > word.length; i++) {}
};
console.log(split);
