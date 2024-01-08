// For, While Loops

// let i = 20;
// while (i >= 1) {
//   process.stdout.write(i + " ");
//   i--;
// }

// let i = 1;
// let j = 0;
// while (i <= 5) {
//   while (j < i) {
//     console.log("*");
//     j++;
//   }
//   i++;
// }

// let total_rows = 10;

// for (let i = 1; i <= total_rows; i++) {
//   for (let j = 0; j < i; j++) {

//  To print the single line, we use process.stdout.write,
//  This is provided by nodejs run time environment
//     process.stdout.write("*");
//   }
//   console.log();
// }

// JS
// Java
// Python
// Ruby

// let target = [3, 7, 1];
// var sum = 0;

// for (let i = 0; i < target.length; i++) {
//   sum = sum + target[i];
// }

// let i = 0;
// while (i < target.length) {
//   sum += target[i];
//   i++;
// }

// console.log(sum);

// sum of digits

let x = 5213;
let sum = 0;

while (x > 0) {
  //get the last digit
  var lastDigit = x % 10;
  sum += lastDigit;
  // remove the last digit
  x = Math.floor(x / 10);
}

console.log(sum);
