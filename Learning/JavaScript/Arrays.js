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

function customForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

console.log(
  customForEach([2, 4, 5, 6], (e, i) => {
    console.log(`Index ${i} and Element ${e}`);
  })
);
