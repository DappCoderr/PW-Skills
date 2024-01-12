// Arrays
/*
Notes ----
- Array is a liner data structure
- Arrays are 1D.
- Arrays can be manipulative to make multi dimentional.
- In some lang, array is homogeneous means you can store same type of data.
- And in JS, python is heterogeneous means you can store different type of data.
- Array are mutable, mean you can edit the data.
- Array are used to implement a lot of other data structure.
*/

// Array() - in build function
// let arr = Array(10).fill(0);
// console.log(arr);
// Output - [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Fill in the range using Array function
// let arr1 = Array(10).fill(2, 5, 7);
// console.log(arr1);
// Output - [ <5 empty items>, 2, 2, <3 empty items> ]

// let arr3 = [3, 4, 6, 1, 2, 5];
// arr3.forEach((e) => {
//   console.log(e);
// });

// function customForEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// }

// console.log(
//   customForEach([2, 4, 5, 6], (e, i) => {
//     console.log(`Index ${i} and Element ${e}`);
//     return e * e;
//   })
// );

// function factorial(num) {
//   return Array.from({ length: num }, (_, i) => i + 1).reduce(
//     (acc, element) => acc * element,
//     1
//   );
// }

// function factorial(num) {
//   return Array.from({ length: num }, (_, i) => i + 1);
// }

// // [ 1, 2, 3, 4, 5 ]

// console.log(factorial(5));

// function factorial(num) {
//   return Array.from(Array(num), (_, i) => i + 1);
// }

// // [ 1, 2, 3, 4, 5 ]

// console.log(factorial(5));

// const product = [
//   { id: 1, name: "Iphone", price: 20, quantity: 1 },
//   { id: 2, name: "laptop", price: 40, quantity: 2 },
//   { id: 3, name: "Shoes", price: 10, quantity: 3 },
//   { id: 4, name: "T-Shirt", price: 5, quantity: 5 },
// ];

// console.log(
//   product.reduce((acc, element) => {
//     console.log(element);
//     return element;
//   }, 0)
// );

// reducer -> takes two value accumulator and current value
// current value takes iterate over array
// while accumulator is the initial value of the array.

// Array method
// ForEach, map, filter, reduce, from, slice, splice, pop, push, unshift, shit, reverse, every, some

// Two ways to define Array -
// 1. {length: 2} -> array like object.
// 2. Array(4)

console.log(Array.from({ length: 5 }, (_) => console.log(_)));
