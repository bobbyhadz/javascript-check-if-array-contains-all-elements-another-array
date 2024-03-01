// EXAMPLE 1 - Check if an array has all elements of another array in JavaScript

const arr1 = ['pizza', 'cola'];
const arr2 = ['pizza', 'cake', 'cola'];

const containsAll = arr1.every(element => {
  return arr2.includes(element);
});

console.log(containsAll); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if Array has all Elements of Another Array using Array.every()

// const arr1 = ['pizza', 'cola'];
// const arr2 = ['pizza', 'cake', 'cola'];

// const containsAll = arr1.every(element => {
//   return arr2.indexOf(element) !== -1;
// });

// console.log(containsAll); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if Array has all Elements of Another Array using for...of

// const arr1 = ['pizza', 'cola'];
// const arr2 = ['pizza', 'cake', 'cola'];

// let containsAll = true;

// for (const element of arr1) {
//   if (!arr2.includes(element)) {
//     containsAll = false;
//     break;
//   }
// }

// console.log(containsAll); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if Array has all Elements of Another Array using `for`

// const arr1 = ['pizza', 'cola'];
// const arr2 = ['pizza', 'cake', 'cola'];

// let containsAll = true;

// for (let index = 0; index < arr1.length; index++) {
//   if (!arr2.includes(arr1[index])) {
//     containsAll = false;
//     break;
//   }
// }

// console.log(containsAll); // 👉️ true
